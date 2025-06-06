# Server properties

A server defined in USoft Service Definer may serve static resources: HTML pages, images, XSLT transformations..... You can locate these resources by using the WWWROOT server property.

You can also create your own server properties and use their values in a class or a service method implementation.

### Locating static resources using WWWROOT

To locate static resources that you want to serve, set the physical filepath where they are located as a value of the WWWROOT server property:

1. Make sure that input focus is on the server's record in the Servers window or tab.

2. On the Properties tab, in the dropdown box in the 'Property name' column, select 'WWWROOT'.

3. Type the filepath in the 'Property value' column, using the following syntax, then save work:

```
physical-path,relative-uri-path
```

where *physical-path* is an absolute path to the directory that contains the resource(s), and*relative-uri-path* is introduced by a forward slash ('/').

*Example*

To get a server to make the following HTML page available:

```
C:\USoft\Services\MyFile.html
```

set the WWWROOT server property to:

```
C:\USoft\Services,/charts
```

Clients can now get to the HTML page by using:

```
server-base-uri/charts/MyFile.html
```

### Creating your own server properties

As a developer, you can also create your own server properties, assign default values to them, and use those values in a class or a service method implementation.

First declare the server property name. Then associate it with a server.

To create a new server property name:

1. Choose View, Objects List from the menu, and open the "Server Property Names" window or tab.

2. Create a new record for the new server property. Fill out the fields as appropriate.

To associate the new server property with a server:

1. Choose Define, Servers from the menu.

2. The Servers window or tab opens.

3. Click the Properties tab.

4. Choose your newly added server property from the dropdown box in the 'Property name' column. In the 'Property value' column, specify a value for the property.

You can now use the property in a class or a service method implementation. Use the following java functions:

```
UServiceConfig.getConfigString(propertyName)

```

```
UServiceConfig.getConfigInt(propertyName)
```

*Examples*

String queueName = UServiceConfig.getConfigString("QUEUE_NAME"); 

int timeout = UServiceConfig.getConfigInt("WAIT_TIMEOUT"); 

There are some methods that can be used to get your class-specific property. You can make these using the syntax

```
<classname>.<property>
```

Use the following Java functions:

```language-java
UServiceConfig.getConfigString(propertyName, class);
```

```
UServiceConfig.getConfigInt(propertyName, class);

```

*Examples*

```language-java
String queueName = UServiceConfig.getConfigString("QUEUE_NAME", QueueProcessor.class); // Will get the property QueueProcessor.QUEUE_NAME
```

```language-java
int timeout = UServiceConfig.getConfigInt("WAIT_TIMEOUT", QueueProcessor.class); // Will get the property QueueProcessor.WAIT_TIMEOUT
```

### Using server configuration properties at runtime

You can reference the runtime value of certain server configuration properties. These properties are the name of the server, the path where the server has been published, the server base URI, and the server external base URI.

Use the following Java function to get the value of a server configuration property:

```
UServiceConfig.getConfigString( "propertyName" )
```

Possible values for *propertyName* are :

|***propertyName***|**Description**|
|--------|--------|
|server.name|The name of the server|
|server.publicationpath|The path where the server is published|
|server.baseuri|The base uri of the server|
|server.externalbaseuri|The external baseuri of the server|



 

*Example*

```language-java
String name = UServiceConfig.getConfigString("server.name");
String publicationpath = UServiceConfig.getConfigString("server.publicationpath");
String baseuri = UServiceConfig.getConfigString("server.baseuri");
String externalbaseuri  = UServiceConfig.getConfigString("server.externalbaseuri");
```