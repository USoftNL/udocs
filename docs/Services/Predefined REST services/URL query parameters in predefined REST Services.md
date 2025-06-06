# URL query parameters in predefined REST Services

This section lists query parameters that are general options in the use of REST URL syntax. These options apply to predefined REST services. Of course, if you set up your own REST service, it is possible to make these options applicable by writing custom code for them.

## Limiting the number of items in a response

You can limit the number of items in a response to a REST call by adding query parameters to the request URL that use the option keywords **chunk, start, end** and (in the case of **end**) the value keyword **last:**

|        |        |
|--------|--------|
|?chunk=10|Limits the number of items to 10|
|?chunk=10&start=1|Returns only the FIRST 10 items|
|?chunk=10&end=last|Returns only the LAST 10 items|
|?chunk=10&start=10|Returns only items 10 through 19|
|?chunk=10&end=20|Returns only items 11 through 20|



**start**,  **end** and **last** are only meaningful if the result data is sorted in some specific way. In a custom service you can determine this sort order programmatically. In a predefined service based on the "USoft Table Resource" physical type, the only way you can sort the result data is by using ASC or DESC in the request URL. This is explained in the help topic " Retrieving data with USoft Table Resource ".

*Example*

The following request URL returns flight numbers of the 3 most recent departure flights:

```
http://host:port/flights/PassengerCDM/DEPARTUREFLIGHT;FLIGHT_NUMBER?chunk=3&end=last
```

## Counting the number of result items as a debug feature

To a REST URL request, you can add the URL query parameter

```
?withcount=true
```

to get the number of records in the result set displayed in an XML comment at the top of the response document. For this, you need to call the service requesting the text/xml result format.