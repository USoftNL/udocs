# Calling a web service using an INVOKE statement

You can call a web service component by using an INVOKE statement. This is the straightforward way to call a web service component:

1. In the Definer, create a web service component without component table settings.

See also: How To Import Web Service Definitions.

2. In the application, use an INVOKE statement to call the component:

```sql
INVOKE    <web-Service-component>.<method>
WITH
SELECT    <input-parameter-1>[, ...<input-parameter-n>]
```

You will receive all defined output parameter values.

When calling a web service, USoft can handle some simple parameter types.

- From the W3C XML Schema specification, (http://www.w3.org/2001/XMLSchema), USoft can handle: Boolean, date, time, dateTime, double, float, byte, int, integer, long, short, negativeInteger, nonNegativeInteger, nonPositiveInteger, positiveInteger, unsignedByte, unsignedInt, unsignedLong, unsignedShort, string.
- From the W3C Soap specification, (http://schemas.xmlsoap.org/soap/encoding/), USoft can handle: double, float, byte, int, integer, long, short, string.

All other types are handled by USoft as complex type parameters and the input/output data type is an XML string. When exchanging these parameters with a web service, the value of the parameter must be an XML document. In case of an RPC-oriented web service, the value contains the parameter name.

If your web service method is an RPC-oriented method with simple type parameters, then the input parameter values are these simple type values. The output values received are also simple type values.

If your web service method is an RPC-oriented method with complex type parameters, then the input parameter values are XML documents. The first element in these documents is always the parameter name (with namespace), and then the XML defined for that parameter by the XML schema. You can find the XML structure by looking into the WSDL file. Each parameter has a type that is defined in the types section of the WSDL file.

The values received are also XML documents, and follow the same rules as for the input parameters.

If your web service method is a document-oriented method, then the input parameter values are XML documents. You can find the structure of the XML document by looking into the WSDL file. Each parameter has an element attribute that is defined in the types section of the WSDL file. This element must always be the first element in the XML document (with namespace).

The values received are also XML documents and follow the same rules as for the input parameters.