# Defining custom REST input parameters

Input parameters for a custom REST service may be passed in different ways. In the following examples, '154' is the ID of a requested booking:

The input parameter may be part of the URL path:

```
http://localhost:8090/mycustomservice/ActiveBookings/154
```

The input parameter may be part of the URL query string:

```
http://localhost:8090/mycustomservice/ActiveBookings?booking_id=154
```

The input parameter may be a URL matrix parameter:

```
http://localhost:8090/mycustomservice/ActiveBookings;booking_id=154
```

The input parameter may be an HTTP Header.

## Input parameters in the URL path

You can create a custom REST service method with input parameters that are passed as part of the URL path. In the following URL, '154' is an input parameter specifying the ID of a requested resource:

```
http://localhost:8090/mycustomservice/ActiveBookings/154
```

To make this work, In Service Definer, the Relative URI Path of the method must be:

```
/ActiveBookings/{booking_id}
```

and you need to have an input parameter with the Annotation set to:

```
@PathParam("booking_id")
```

You can then use the value of the parameter in the implementation of the method.

The URL path is not suitable for passing more than 1 input parameter. If your method has multiple input parameters, consider using the URL query string or matrix parameters instead.

## Input parameters in the URL query string

You can create a custom REST service method with input parameters that are passed in the URL query string. In the following URL, 'booking_id=154' is a URL query string:

```
http://localhost:8090/mycustomservice/ActiveBookings?booking_id=154
```

To make this work, In Service Definer, the Relative URI Path field of the method must be:

```
/ActiveBookings
```

and you need to have an input parameter with the Annotation field set to:

```
@QueryParam("booking_id")
```

You can then use the value of the parameter in the implementation of the method.

## Multiple input parameters

If the method has more than 1 input parameter, the caller separates query string fragments by using the '&' symbol:

```
http://localhost:8090/mycustomservice/ListedTours?destination=HOLLAND&tour_type=TULIPS
```

In Service Definer, have multiple parameter records for the method, and make sure that each has an Annotation using the **@QueryParam** keyword.

## Input parameters as matrix parameters

You can create a custom REST service method with input parameters that are passed as matrix parameters. In the following URL, 'booking_id=154' is a matrix parameter:

```
http://localhost:8090/mycustomservice/ActiveBookings;booking_id=154
```

To make this work, In Service Definer, the Relative URI Path field of the method must be:

```
/ActiveBookings
```

and you need to have an input parameter with the Annotation field set to:

```
@MatrixParam("booking_id")
```

You can then use the value of the parameter in the implementation of the method.

## Multiple input parameters

If the method has more than 1 input parameter, the caller separates matrix parameters by using semi-colons (**;**) :

```
http://localhost:8090/mycustomservice/ListedTours;destination=HOLLAND;tour_type=TULIPS
```

In Service Definer, have multiple parameter records for the method, and make sure that each has an Annotation using the **@MatrixParam** keyword.

## Input parameters as HTTP headers

Because REST services make use of the HTTP protocol, on principle, you can use header information in the HTTP request and response messages to pass any kind of input parameter.

In practice, it is good design to use HTTP headers ONLY for meta-information about technical aspects of messaging such as response format, and NOT for datatechnical parameters such as query conditions. For input parameters that pass datatechnical information, use the URL path, the URL query string, or matrix parameters instead.

*Example*

For an example of how to make a custom HTTP header an input parameter of a custom REST service, read the section "Implementing X-US-Transaction in custom REST services" in the Calling a REST service without committing help topic.