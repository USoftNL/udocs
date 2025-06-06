# Configuring IIS for USoft

![](/api/USoft%20for%20administrators/Installing%20USoft/assets/cfd83d5b-076b-4cf0-91f2-23270b0d7266.png)



In USoft 10.1 and 11.0, you run a web server defined in USoft Service Definer.

In USoft 9, you need to configure IIS as a web server.

**Adding mime types**

For USoft 9 Web Applications with USoft-defined UI (= USoft-defined web pages, you will need to add the Mime Type setting:

|**Extension**|**MIME Type**|
|--------|--------|
|.json   |application/json|



If you plan to use the bootstrap framework, you will also want to add:

|**Extension**|**MIME Type**|
|--------|--------|
|.woff   |application/font-woff|