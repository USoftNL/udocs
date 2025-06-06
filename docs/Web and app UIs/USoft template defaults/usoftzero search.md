# usoft-zero search

​

## Idea

By default, an application based on the usoft-zero default does not have a search facility, but it does have a Filter toggle button in the top right corner of InfoPage pages:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/492dae34-a153-444b-b6cd-c341cb250de2.png)

Filter buttonIf you click that Filter button, you get a Filter pane where you can search by field. Here, you can use the '%’ SQL wildcard. To search all people with a family name starting with the letter ‘J’, type 'J%’ in the Family Name field and press Search:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/4696533e-300f-4477-953d-3d4c31a696fd.png)

Filter paneThe result of this could be:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/34c5d99d-d879-4e1a-9cfe-e7028dffe646.png)

Filter resultThis Filter facility is probably not, or not all that you want. On the Internet, many web pages offer a *generic* Text Search facility. It is usually made to look something like this:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/3bb5e84c-1803-4508-949c-e4bf2c678380.png)

This is more "generic” than the Filter-by-field facility. It applies the text search condition to *any* field offered in the page, or perhaps the page does not make explicit what the search is applied to - it simply shows results.

The usoft-zero default allows you to create a generic Text Search facility as a near-default. This is a near-default and not a default because:

- The solution is part dependent on the application-specific data model.
- It is difficult to predict exactly what solution you require.

## Implementation

Take the steps below to implement a search field that will search across multiple columns, for example FIRST_NAME, FAMILY_NAME and ADDRESS. The search for items with the letters "BR” below (see top right corner) has yielded results with "BR” in the name, but also with "BR” in the address:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/b7a2876a-24ac-438f-82d8-7da3a3181e78.png)

Result includes items with "BR” in different columns1. In Web Designer, open the InfoPage where you want the search field. Then, in the object tree on the right, find the hidden **search-field** object in the **navbar** object:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/774c3f8c-2c45-4ad4-93dc-4587fd4a244e.png)

2. For **search-field,** right-mouse-click to open the Property Inspector. Find the Class List property. Remove the **hide** fragment from the Class List value. A search field will become visible. You can view it in the preview pane in the middle of the Web Designer window. You can paint visual aspects of this field by using CSS.

3. Again in the object tree for the InfoPage, find the data source object that connects the page with the database table:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/7474d82b-ffdd-4d83-aa5c-2e1c93f3669b.png)

4. For the data source, right-mouse-click to open the Property Inspector. Find the **Where Clause** property. Set this property to the following SQL condition:

```sql
    :searchfield is null
OR  UPPER(first_name) LIKE  '%' || upper(:searchfield) || '%'
OR  UPPER(family_name) LIKE '%' || upper(:searchfield) || '%'
OR  UPPER(address) LIKE     '%' || upper(:searchfield) || '%'
```

The **:searchfield** variable in this code has been set in this snippet of Javascript:

```js
let ds = this;
let page = datasourceGetPage(ds);
let field = page.querySelector('#SearchInput');

options.options.hostvars.searchfield = field.value;
```

The event responsible for executing this script is the **beforeexecutequerysearchfieldhostvar** event which is part of the usoft-zero default. You can find this event at the data source:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/e8b3a47c-c185-46dd-a5d8-8acb2fabec99.png)

> [!WARNING]
> A good search facility applies to surface values or display values that the runtime user directly experiences, but the Where Clause implementation applies to underlying database values. As a developer, you may need to bridge differences between the two.
> For regular text and number fields, the solution will work as described here. For date and time values, you will need to do some extra work. Use database conversion functions here.
> Allowed values for domains also have a potential difference between display values and database values.
> Another source of such differences is translation. There is not yet a good default solution: in multi-language applications, USoft by default translates display values, but not database values of dropdown lists.