# Runtime architecture of a web service

----

![](/api/Services/Web%20services/assets/ce23356b-05b0-4dc7-839e-3bc29b317664.png)



> [!CAUTION]
> In USoft 11.x, the functionality described here is **deprecated**.
Web service providers will be removed from USoft Definer and USoft Authorizer in USoft 12.x. Please use USoft Service Definer instead.

----

![](/api/Services/Web%20services/assets/8da989b4-0598-470f-ab26-cc0a3ca4ea6a.png)



When publishing a web service by clicking the Create Web Service button on the Web Services (Provider) window, an ASP.Net HTTP Handler file with extension .ASHX and (if requested) a WSDL file are generated. The ASHX file represents the starting point (the access URL) for the published web service. The ASHX server page calls the Rules Service via the HTTP protocol in a SOAP format, and executes the SQL statement defined for a specific method. The response (if any) from the Rules Service is sent back to the client application.

![](/api/Services/Web%20services/assets/bbca286b-47d5-4cab-8cdd-8eb68956fe25.png)

The installed web server handles the security and logging mechanism of the web service. Possible error messages are sent to the client application in the standard Fault element of the SOAP message.

> [!NOTE]
> USoft supports both both SOAP 1.1 and SOAP 1.2 protocols for web service providers.