# Running your web application

Once you have published your web pages and started the Rules Service, you can run the published pages.

To run your publication in a web browser:

1. Start your browser.

2. In the Address / Location field, type:

```
http://localhost:*port-number*/*service*/*connection*
```

For example:

```
http://localhost:8090/myservice1/myconnection1
```

3. Enter your user name and password in the Login page.

## Troubleshooting

Here are some solutions to some problems that you might experience when you try to log on to a generated web page.

> [!TIP]
> For more elaborate error messages, set the publication configuration's Log Level attribute to INFO.

**Problem**

Error message after log on attempt:

```
 Failed to create Socket connection. Connection refused: connect  Try again
```

**Solution**

Install and start the Rules Service with at least one Rules Engine running.

**Problem**

Error message after log on attempt:

```
 Failed to connect to Engine. The application "APPNAME" is not known
```

**Solution 1**

(Re-)configure the Rules Service. Reset application name to APPNAME, and click Run.

**Solution 2**

Check if the publication (in the Web Designer) has the correct Connection Specifier:

```
 jdbc:jrec:APPNAME@localhost:7777
```

If not, change this Connection Specifier and re-publish. The application for the Rules Service must be the same as the application in the Connection Specifier string.

**Problem**

Error message after log on attempt:

```
 No suitable driver. Internal Error.
```

**Solution**

Check the Security Settings for the publication folder. This folder must be readable by Everyone.

**Problem**

Error message after log on attempt:

```
com.usoft.XMLParser.USXMLDOMException:
Cannot create a Microsoft DOM Document : Class not registered.

```

**Solution**

For the USoft Web Server you require the Microsoft XML Core Services 4.0

When installing USoft Series, you will be asked to install the Microsoft XML Core Services 4.0 SP1.

**Problem**

Error message after log on attempt:

```
006~ASP 0177~Server.CreateObject Failed~800401f3
```

**Solution**

The cause of this problem may be that the published ASP page contains a different version number in its content than the installed component, e.g.

```
Set USComVM = Server.CreateObject("USoftComJavaCall.ComJavaCall.6")
```

**Problem**

Error message when browsing the runtime application:

```
Server object error 'ASP 0177 : 80004005'
Server.CreateObject Failed
/PublicationFolder/MyPublication.asp, line 12
Unspecified error

```

**Solution**

You need to register a USoft COM+ component in Microsoft Component Services.

> [!WARNING]
> This way of running web pages is now deprecated. It may not be supported in future versions of USoft. You should prefer running your web pages with a USoft service.