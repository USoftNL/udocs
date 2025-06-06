---
id: The_sendSoapMessage_function
---

# The sendSoapMessage function

In certain circumstances, there are limitations using a web service component. For example, USoft does not support soap headers when importing a web service component from WSDL.

To bypass those limitations, you can create a generic web service component:

1. From the menu, select Define, RDMI, Web Service Components.

2. Define a new web service component.

3. Define a constructor method with no parameters and Physical Method:

```
this = new com.usoft.WebServiceClient.CallWebService()
```

4. Define a new method with Physical Method:

```
this.sendSoapMessage((U):0, (U):1, (U):2)
```

and parameters:

|        |        |        |        |
|--------|--------|--------|--------|
|1       |Url     |In      |String  |
|2       |soapMessage|In      |String  |
|3       |soapAction|In      |String  |
|4       |Result  |Return  |String  |



The user can then call this method providing the appropriate parameters: the url for invoking the web service, the soap message to be sent to the web service, the soapAction(if any defined in the wsdl).

The result is the soap message returned by the web service.