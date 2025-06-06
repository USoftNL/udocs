---
id: Web_service_component_details
---

# Web service component details

There are three situations when a Web Service component definition is stored in the repository:

- If in the Web Service Bindings dialog, the Definition URL does not exist, and Access Point is not a WSDL file.
- If the Definition URL exists.
- If the Definition URL does not exist, and the Access Point is a WSDL file.

If the Web Service returns an error message within a SOAP fault element, the component that called the Web Service (the CallWebService Java component) returns an exception. You can modify a Web Service component to return the error message as return parameter as follows:

- If the physical method is callMethodURL, replace this method with callMethodURLReturnError, and add a new return parameter with type: String. If there is no error, the return value is NULL.
- If the physical method is callMethod, replace this method with callMethodReturnError, and add a new return parameter with type: String. If there is no error, the return value is NULL.
- If the physical method is sendSoapMessage, replace this method with sendSoapMessageReturnError. If there is no error, the return value is the response from the Web Service.