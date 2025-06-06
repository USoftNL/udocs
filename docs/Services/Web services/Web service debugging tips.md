# Web service debugging tips

----

![](/api/Services/Web%20services/assets/ce23356b-05b0-4dc7-839e-3bc29b317664.png)



> [!CAUTION]
> In USoft 11.x, the functionality described here is **deprecated**.
Web service providers will be removed from USoft Definer and USoft Authorizer in USoft 12.x. Please use USoft Service Definer instead.

----

![](/api/Services/Web%20services/assets/8da989b4-0598-470f-ab26-cc0a3ca4ea6a.png)



Here are three tips to debug a web service created with USoft:

> [!TIP]
> **TIP 1:** When configuring the Rules Service, set the Log Level to: Debug, and go on to Run the Rules Service.

All statements executed are now written in the Rules Service log file.

> [!TIP]
> **TIP 2:** Use the BenchMark Profiler. Before calling the web service, execute the following HTTP call:
> For example:
> Next, execute the web service call that you want to debug.
> Then, stop the Profiler by executing the following HTTP call:
> In USoft BenchMark, you can now search for the latest profile.

> [!TIP]
> **TIP 3:** When a web service provider is created, two files are generated: an ASP.NET HTTP Handler (.ashx) and a "web.config" file.
> The "web.config" file contains a Debug key. If the service provider is published from Definer, the value of the Debug key is set to Yes. If the web service provider is published form Authorizer, the value of the Debug key is set to No. You can use the Debug key to suppress or display messages regarding the setup of the web service provider (e.g. the rules service is not started or is using a different port number, the user/password are not valid, the rules service is not started on a specific application, the MSXML component is not installed…).
> If the value of the Debug key is set to No, the client application receives a generic error message in case that the web service request fails:
> **The request was unsuccessful due to an unexpected condition encountered by the server**
>  
> If the value of the Debug key is set to Yes, the client application receives a more detailed error message in case that the web service request fails.

 