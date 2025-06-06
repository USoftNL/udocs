---
id: Versioning_custom_REST_services
---

# Versioning custom REST services

This help topic is about versioning custom REST services. You can also version predefined REST services.

A common way of handling business changes in REST Services is to offer multiple versions of the "same" REST method within the same API. There are different ways of doing this.

## Versioning directly in the request URL

You can offer multiple versions of the same functionality within one REST API by designing request URLs that are different only with respect to versioning. For example, the following URL could be used for version 2 of CurrentBookings:

```
http://localhost:8090/mycustomservice/v2/CurrentBookings
```

To make this work, create a new REST service with a new Relative URI Path:

```
/mycustomservice/v2
```

Then implement, in the new REST service, all the methods that require a new version.

The drawback of this technique is that clients must update all software that directs request URLs at the service to get the new version.

## Versioning in a Vendor MIME Type

You can alternatively offer multiple versions of the same functionality within one REST API by providing different methods with different Accepts and Produces attributes.

This time, in order to a get the new version, a client does not change the request URL. Instead, he changes the value of the standard **Content-Type** and **Accept** HTTP headers (as appropriate; read on for further explanation).

To get this to work, you need multiple methods with unique Method Names, identical Relative URI Paths, but different Accepts and Produces attributes:

|**Method Name**|**Relative URI Path**|**Accepts**|**Produces**|
|--------|--------|--------|--------|
|PostCustomer-v1|/Customers|text/vnd.customer.v1+xml|text/vnd.customer.v1+xml|
|PostCustomer-v2|/Customers|text/vnd.customer.v2+xml|text/vnd.customer.v2+xml|



In the example, the standard media type

```
text/xml
```

has been replaced by vendor-specific media types, or Vendor MIME Types, that indicate versioning, namely

```
text/vnd.customer.v1+xml
text/vnd.customer.v2+xml

```

In the added part, 'vnd' is a conventional abbreviation for 'Vendor MIME Type'. 'customer' is any string that refers to the versioned functionality; many times, the new version will offer the same functionality but operate on a different version of the data, in which case it is good practice to make this string refer to the appropriate new structure used in the method's new parameters. 'v1' is a conventional abbreviation for "version 1".

At runtime, the client matches the Accepts value by setting the **Content-Type** HTTP header to the same value, and the Produces value by setting the **Accept** HTTP header.