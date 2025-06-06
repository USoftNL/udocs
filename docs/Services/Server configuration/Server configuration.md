# Server configuration

Service Definer's Publish feature outputs a **"config.xml"** file when you publish a server. This file contains configuration properties for the server itself, for services defined in a server, and for connections that the server uses to access the Rules Engine.

There is only a single "**config.xml**" file per server. The file is published in the Publication File Path of the server. When it is published, the file contains configuration values defined in the Service Definer tool. The file can be configured to accommodate servers in target environments at runtime.

## Server configuration element hierarchy

The "**config.xml**" file contains a hierarchy of configuration elements:

![](/api/Services/Server%20configuration/assets/0d223ba8-d775-4859-8a15-59c05bd590cb.png)

 