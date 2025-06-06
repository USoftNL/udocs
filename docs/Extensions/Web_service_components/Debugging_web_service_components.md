---
id: Debugging_web_service_components
---

# Debugging web service components

For debugging purposes, you can make a BenchMark profile when calling a web service component. This profile then contains the soap messages that are sent to and received from a web service.

The BenchMark Reason for both the request and response messages is: DEBUG_RDMI_MESSAGE.

In the case of a web service component table there are two additional entries with reason DEBUG_RDMI_MESSAGE in the profile: the USoft component table input XML and output XML documents.

After recording a BenchMark profile, the profile contains the following information:

|**Source Details field**|**(Initial) SQL Statement or RDBMS Statement fields**|
|--------|--------|
|Web Service request message|The soap message sent to the web service.|
|Web Service response message|The soap message received from the web service.|
|USoft Component Table XML used for input before the transformation|The USoft component table xml that USoft transforms using the input transformation provided by the USoft developer into the body of the soap message to be sent to the web service.|
|USoft Component Table XML used for output after the transformation|The USoft component table xml resulted after USoft transforms the body of the soap message received from the web service using the output transformation provided by the USoft developer.|



The profiler is very useful when developing a web service component table. Using the Profiler, you can debug the input and output transformations.

To make this possible, you have to enable BenchMark Profiling for a Web Service Component explicitly.

To enable BenchMark profiling for a web service component, you have to change the Physical Method of the constructor method. The following line has to be added at the end of the physical method:

```
this.setRulesEngine(:SessionId)
```

From now on, if a query is performed on the component table (or an INVOKE statement on the web service component) and the BenchMark Profiler is active, DEBUG_RDMI_MESSAGE entries are added to the profiler.


:::note

For performance reasons, when deploying your application, remove this.setRulesEngine(:SessionId) line from the constructor of the web service component.

:::


:::note

BenchMark debugging of web service clients is not supported for MTOM web services.

:::

 