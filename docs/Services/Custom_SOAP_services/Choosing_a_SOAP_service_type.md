---
id: Choosing_a_SOAP_service_type
---

# Choosing a SOAP service type

When defining your SOAP service, you need to choose either an **RPC-oriented** approach or a **document-oriented** approach. RPC is short for Remote Procedure Call.

A web service is described by a WSDL (Web Services Description Language) document. A WSDL document describes how the web service is bound to a messaging protocol, in this case, to the SOAP protocol.

The WSDL document can prescribe an RPC-oriented message format or a document-oriented message format. The main difference lies in how the Body element of the SOAP message is shaped.

## RPC-oriented

The body of an RPC-style SOAP message is constructed in a specific way, which is defined in the SOAP standard. The message body contains an XML element for each parameter of the method. These parameter elements are wrapped in an XML element which contains the name of the method that is being called.

*Example*

```xml
<soap:envelope>
  <soap:body>
    <getTemperature>                <!-- web method name -->
      <city>AMS</city>              <!-- first parameter -->
      <country>NL</country>         <!-- second parameter -->
    </getTemperature>
  </soap:body>
</soap:envelope> 
```

## Document-oriented

If you choose a document-oriented approach, you can use a **literal** style or a **wrapped** style.

**Literal** style places very few restrictions on the design of the \<soap:body> element. You can structure the XML data any way you want. You can include a schema that describes this XML structure.

*Example*

```xml
<soap:envelope>
  <soap:body>
    <Location city=”AMS” country=”NL”/>
  </soap:body>
</soap:envelope>
```

The main drawback of this literal style is that there is no standard way of determining which method of the web service the request is for. The **wrapped** style removes this limitation.

**Wrapped** style is the same as literal style, but the contents of the \<soap:body> element is wrapped in an extra element with the same name as the web service method. This is similar to method elements in the RPC style.

*Example*

```xml
<soap:envelope>
  <soap:body>
    <getTemperature>                        <!-- web method name -->
      <Location city=”AMS” country=”NL”/>
    </getTemperature>
  </soap:body>
</soap:envelope>
```