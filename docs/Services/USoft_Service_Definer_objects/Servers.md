---
id: Servers
---

# Servers

A server is a software construct that enables an organisation to expose (publish, advertise) REST services.

In the USoft Services Platform, you can have multiple servers. If necessary, you can have the same service advertised or exposed by multiple servers.

A server is identified by a name, but it is a technical rather than a functional entity: it is associated with a physical location on a file system and with a browsable URL.

### Defining a server

To define a server:

1. Choose Define, Servers from the USoft Service Definer menu.

2. Insert a new Server record with the following settings:

Name = Default

Publication file path = (a path)

The “Publication file path” must be a path to an existing local folder where you want the server to be located, spelled with backslashes and ending in a backslash, for example:

```
C:\usoft\servers\Default\
```

You may or may not want to overwrite the USoft default publication filepath, which is:

```
<usoft-install-dir>\<server-name>\
```

If a server is already installed and you change the publication file path, you need to re-install the server.  

3. Save.

The Service Definer generates the following default for Base URI, which you should leave unaltered:

```
http://0.0.0.0:8090/
```

If, for some reason, the '8090' port number was unacceptable for this server, this is where you could specify a different port number. There is no reason to want to change any other part of this Base URI value than the port number. The base URI that Internet visitors to your service will ultimately use is set elsewhere.

4. On the Security tab, in the Cors Configuration field, choose a CORS configuration. If you do not know what this is or do not care, then choose the 'Default' CORS configuration from the dropdown list. Save.

### Installing a server

You must **install** your server if it is to run as a Windows service. (Alternatively, it may be run from the command line. For details, go to the Command Line section of the "Server Administration settings" help topic.

To install the server:

1. In Service Definer, make sure that input focus is on the server's record in the Servers window or tab.

2. Choose Actions, Install from the menu.


:::danger

If a server is already installed and you change the USoft installation path or the publication folder, you need to reinstall the server. Please read the next topic.

:::

### Re-installing a server

Installing a server on a (development, test or production) machine is a one-time operation, except when you change an element of the server's definition, for example, its Publication File Path. In that case you need to re-install the server.

To re-install a server:

1. Make sure that input focus is on the server's record in the Servers window or tab.

2. Choose Actions, Uninstall from the menu.

3. Choose Actions, Install from the menu.

### Publishing services at a server

Once a server is installed, you can publish services at it. Each time you do that, all the services, classes, structures, connections and SQL statements associated with the server (as well as the server's properties) are bundled in a java archive file or .JAR file. Any changes made in Service Definer do not become visible to runtime callers until you publish them and then restart the server.

Global classes and structures are equally included in the .JAR file. A class/structure is considered global if is it is not associated with a specific server. Global classes/structures are published in all servers, so make sure that only classes/structures that you want to reuse in all your servers are global.

The .JAR file is located in the publication folder and has the same name as the server.


:::note

Inactive classes/services will not be published in a server: if publishing leads to an error message that a class that you’ve created cannot be found, make sure that the class is set to Active and (if it is not a global class) make sure that it is associated with the server you are publishing.

:::

To publish services at a server:

1. Make sure that input focus is on the server's record in the Servers window or tab.

2. Choose Publish, Publish Services from the menu, or click the Publish Services icon from the icon bar.

Each time that services are added, dropped or changed, if you want the new situation to become available to clients, you need to stop the server, re-publish the services, and re-start the server. You can wrap this sequence of actions into a single action:

1. Make sure that input focus is on the server's record in the Servers window or tab.

2. Choose 'Publish', 'Publish and Restart' from the menu. You cal also click the 'Publish and Restart' icon from the icon bar. This is the rightmost icon on the icon bar.

### Running (= starting) a server

To run (= start) an installed server:

1. Make sure that input focus is on the server's record in the Servers window or tab.

2. Choose Actions, Start from the menu, or click the Start icon in the icon bar.

The server now runs as a Windows service. It is registered in the Services console in the Control Panel of your PC with the name **\<server name>-\<port number>**. (Choose Administrative Tools, Services to see it). As an alternative to the steps above, you can run (= start) the server directly from the Services console. This allows you to use all the standard features of a Windows service. For example, the Startup Type can be set to Automatic if you want the server to start automatically after a computer reboot.

You can stop a running server by choosing Actions, Stop or by clicking the Stop icon. You can inspect whether a server is running or not by choosing Actions, State, or by clicking the State icon.

Instead of running the server as a Windows service, you can also run it from the command line. For details, go to the Command Line section of the "Server Administration settings" help topic.

### Exposing a server

This step consists in making it possible for intended users to approach the service across the Internet, typically using a URL such as

```
https://www.mycompany.com/myservice...
```

Exactly how you do this depends on your organisation's IT architecture and its company standards for domain control and web security.

### Logging and tracing a server

Log messages and trace information are important elements when diagnosing problems with servers. USoft provides log and trace possibilities for servers.