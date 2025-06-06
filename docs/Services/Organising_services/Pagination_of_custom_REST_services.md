---
id: Pagination_of_custom_REST_services
---

# Pagination of custom REST services

Pagination is a good way of handling large API responses, It helps minimise response time and improves the end-user experience. With pagination, large set of data are returned in the form of a series of pages. Pagination implies a default sort order of records. This sort order may be based on a unique identifier, on a creation date value, or on a combination of both. The sort order must not change between two requests if records are also being manipulated (INSERT/DELETE/UPDATE).

You can implement pagination in different ways, depending on the type of service you want to provide, on how fast the data set is growing, on the type of data that the service provides, and on the user experience that you want to create.

## Offset pagination

This is the simplest type of pagination. It uses offset and limit settings to divide the result data set into different pages or sections.

*Example 1*

This example retrieves the first 50 items of the result set.

```
GET /items?limit=50

```

*Example 2*

This example retrieves the 2nd page of a result set divided into pages or sections of 50 items each.

```
GET /items?offset=50&limit=50

```

**Advantages** of offset pagination are:

- Offset pagination is easy to implement.
- Offset pagination does not require model change.

**Disadvantages** of offset pagination are:

- The performance decreases for large offset values.
- The pagination is not consistent when items are inserted or deleted. For example, when a record is deleted from the previous page while a client is paginating, all the records will be shifted forward by one. Then, when the client is asking for the next page, one record will be skipped. Also, when items are sorted in such a way that the last inserted item appears first, when a record is inserted, existing other rows will be shifted backward. Then, when the client asks for the next page, the request will return a record already fetched in the previous page.

In relation to offset pagination, see also Limiting the number of records returned by a REST service.

## Keyset pagination

Keyset pagination uses an indexed column for pagination. Values in this column determine where the next page starts, or the previous page ends. The indexed column must be unique, orderable, and not updatable.

*Example 1*

This example retrieves the first 50 items of the result set.

```
GET /items?limit=50

```

*Example 2*

This example retrieves the 2nd page of a result set divided into sections (pages) of 50 items each. The client must be able to extract the 'created' date value from the previous request.

```
GET /items?created=2019-01-01T00:00:00&limit=50

```

Instead of being set by the client during the request, the **limit** value may be hard-coded or configurable on the server side. In this case, the client cannot choose the size of the page. The page size is determined on the server side. Requests are as follows:

```
GET /items
GET /items?created=2019-01-01T00:00:00&next
GET /items?created=2019-05-01T00:00:00&previous

```

**Advantages** of keyset pagination are:

- The performance of keyset pagination is consistent.
- Keyset pagination continues to return consistent results when records are inserted or deleted.

**Disadvantages** of keyset pagination are:

- The client cannot jump to a random page without first visiting all the previous ones to find the maximum value of the indexed column.
- Documentation is needed to specify the indexed column of the API