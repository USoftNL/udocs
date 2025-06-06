---
id: Web_Service_Generated_files
---

# Web Service Generated files

----

![](./assets/ce23356b-05b0-4dc7-839e-3bc29b317664.png)



> [!CAUTION]
> In USoft 11.x, the functionality described here is **deprecated**.
Web service providers will be removed from USoft Definer and USoft Authorizer in USoft 12.x. Please use USoft Service Definer instead.

----

![](./assets/8da989b4-0598-470f-ab26-cc0a3ca4ea6a.png)



When a web service provider is created (after clicking the Create Web Service button in the Definer, or after using the "Publish a Web Service Provider" wizard in the Authorizer), two files are generated:

- an ASP.NET HTTP Handler file (.ashx).

- a "web.config" file.

The first file (.ashx) is the actual entry point of the web service. This is the Access Point File specified in the Web Service Provider window (in the Definer) or the Associated Web Services window (in the Authorizer). The HTTP handler can handle SOAP 1.1 as well as SOAP 1.2 requests.

The generated "web.config" file is located in a folder with the same name as the service plus the word “Config”; for example, if your web service name is “StockQuote”, the folder name is StockQuoteConfig. The structure of the generated "web.config" file is the same as for all ASP.NET configuration files. It starts with a “configuration” element as root node and then it uses the “appSettings” predefined configuration section provided by the .NET Framework.

The settings stored in the "web.config" file are key-value combinations:

 

|        |        |
|--------|--------|
|Port    |The port number on which the rules service used by the web service is running|
|Host    |The host name on which the rules service used by the web service is running|
|ApplicationName|The application on which the rules service used by the web service is running|
|User    |The default user used to log on to the rules service when a web service request is handled.|
|Password|The default password used to log on to the rules service if a web service request is handled.|
|Debug   |Determines if the web service is running in debug mode or not. Possible values are Yes and No. In debug mode, if an error occurs, the client application receives a messages that contains technical information about the error. If the web service provider is published from Definer, the value of Debug key is set to Yes. If the web service provider is published from Authorizer, the value of the Debug key is set to No.|
|method#\<method name>|<p>(There are as many keys of this type as there are methods defined in the web service provider.)The combination (in this order) of: The first XML element name expected by the method in the SOAP body of the web service request.</p><p>- A hash symbol (#).<br/>- 'S' if the method is synchronous or 'A' if the method is asynchronous.<br/>- Another hash symbol (#).<br/>- 'rpc' if the method is RPC-oriented or 'document' if the method is document-oriented.<br/></p><p>*Example*</p>`SUM#S#rpc`<p> </p>|



 

> [!NOTE]
> If no User/Password keys are used, the service uses basic authentication to login to the rules service. That means that the user name and password passed by the client via an HTTP authorisation header are used to connect to the rules service.

 