---
id: Server_administration_settings
---

# Server administration settings

In the Servers window or tab, on the Administration tab, you can make a number of settings to configure service administration aspects.

### Java Location

This field shows the filepath and filename of the Java virtual machine (VM) used to process your service calls. This must be a Java VM that is accessible to the physical server machine. Typically, it is the local VM, for example:

```
C:\usd90-install-dir\JAVA\SUN\JRE64\BIN\java.exe
```

By default, this attribute is set to the filepath and filename leading to your local Java VM.

The filename part of a Java Location value is always **java.exe**.  

### Runtime Include Jars

In this field you can supply a list of .JAR files that you want to include. If you want to include more than one .JAR file, use a colon (**;**) as a separator, for example:

```
companyutils.jar;ojdbc6.jar
```

### Allow browsing of Generic Resources

When this box is checked, clients are allowed browsing of Generic Resources. Generic resources are predefined resources that USoft adds to each REST service and may be found in the .wadl file (press the Browse Description button in the top right corner of the Services window or tab). An example of a generic resource is **version.** 

The default is Yes (= checked). You need to uncheck this box to block client access to generic resources.

**For production**, at this time, there is no compelling security reason for setting or unsetting "Allow browsing of Generic Resources".

### Allow browsing of Admin Resources

When this box is checked, clients are allowed browsing of Admin Resources. Browsing Admin resources gives you a list of services advertised at the server. This is the list that appears when you press the Browse Resources button in the top right corner of the Services window or tab.

The default is Yes (= checked): you need to uncheck this box to block client access to Admin resources. If this box is unchecked:

- Authenticator settings have no effect.
- The services are not advertised in the .wadl file (which you can inspect in Service Definer by pressing the Browse Description button).

**For production**, it is recommended to set "Allow browsing of Admin Resources" = No. If you set it to Yes, the end user has access to information about the machine you are running on, access to information about the Java runtime, and the ability to stop the UService server.

### Allow browsing of Logs

When this box is checked, clients are allowed browsing of the server's log information. This is the information that appears when you press the Browse Logs button in the top right corner of the Services window or tab.

The default is Yes (= checked). You need to uncheck this box to block client access to log information.

**For production**, it is recommended to set "Allow browsing of Logs" = No. If you set it to Yes, the end user has access to the logs and the ability to clear the logs.

### Authenticator

This field shows how client access to Admin REST resources is controlled. These have an effect only if the "Allow browsing of Admin Resources" box is checked.

The values in this dropdown list box are the Name values of the records in the Authenticator window. You are free to edit or extend this list. To open the Authenticator window or tab, choose View, Objects from the main menu and then double-click on Authenticators.

Authenticator objects have a Validating Agent attribute. For each Authenticator, this attribute must have 1 of the values explained in the table below.

Authenticator objects also have a URL attribute. This URL attribute is relevant if the Authenticator attribute is set to Directory Service or to USoft Authorization, as explained in the table below.

> [!NOTE]
> The Condition attribute for Authenticators is not currently passed. It will be passed in the future as a further restriction on the directory service request if Authenticator = Directory Service, or as a further restriction on application rights if Authenticator = USoft Authorization.

To help you make Authenticator settings, samples are initially present for Fixed Password and for Directory Service.

|**Authenticator, Validating Agents**|
|--------|--------|
|Fixed Password|The access to Admin REST resources requires the Username/Password combination that is literally stored in the Authenticator record.|
|Directory Service|The access to Admin REST resources requires a username/password combination that has been set in a directory service. The Authenticator's URL attribute specifies the LDAP (lightweight directory access protocol) connection string pointing to that directory service.|
|USoft Authorization|The access to Admin REST resources requires a username/password combination that has been set in USoft Authorizer tables for the USoft application specified in the URL attribute.The value of the URL attribute in this case specifies either a JDBC connection to a Rules Service that runs the USoft application to validate against, or it specifies a USoft application name that already has connections defined in the Applications section of Service Definer.|



### Command Line

This field shows the filepath and filename that identify the server's .CMD file. At development time, you can use this file to run the server from a command box. This is an alternative to starting the server as a Windows service:

1. Make sure the Command Line attribute points correctly to the .CMD file.

2. Press the Run Command button next to the Command Line field.

Running the server from a command box allows you, at development time, to see detailed output information that can help when you are debugging. For example, details about how a class is coded wrongly.

Unfortunately, errors causing a premature end will not normally be visible since the command box closes as soon as the server stops. One way to prevent this is to start the .CMD file from a command box (instead of pressing the Run Command button). Another solution is to prepend the body text in the .CMD file by:

```
cmd.exe /K "
```

(noting the double quote at the end) and to add another double quote character at the very end of the text body:

```
"
```

Using the second technique, pressing the Run Command button will give you a command box that stays open even when the server ends its life. Note, however, that when you (re)publish the server, all manual edits to the .CMD file identified in the Command Line field will be overwritten.

### Throttling requests

It is possible to limit the number of requests that your server is allowed to handle concurrently. If the number of accepted requests exceeds this limit, further incoming requests will be ignored and a response with response code 429 will be sent giving a message that the server is busy and that the user should try again later.

To enable this throttling functionality:

1. Open the Servers window and retrieve the Server for which you want to enable throttling.

2. Click the Administration tab.

3. Set Enable Throttling = Yes.

4. Define the maximum allowed number of requests by setting "Max concurrent http requests" to an integer.

5. Save work.

6. Publish and restart the server.

> [!NOTE]
> You can add your own text to the default response message by using the functional type ThrottlingHook in a class.