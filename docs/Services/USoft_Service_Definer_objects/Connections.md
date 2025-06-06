---
id: Connections
---

# Connections

In a USoft application other than a client/server (Windows) application, all functionality is offered by a Rules Service that taps into that application.

In Service Definer, connect your services to a Rules Service by defining a connection associated to that Rules Service.

You can use a single connection and Rules Service for all your services. The same Rules Service can even be used by interactive web pages created in USoft Web Designer.

Depending on runtime workload and on administration needs in complex applications, you can alternatively create multiple connections, multiple Rules Services, multiple Rules Service instances, or all of these at the same time.

### Sessions

Each connection has a **Session name** which is set to the connection name by default. If you use a SAML service provider configuration that must be able to connect to a Rules Service associated with your connection, “Session name” must be the name of the entity name of the SAML service provider configuration.

To be able to create web applications using REST services, the USoft Services Framework returns cookies to the browser to recognize REST requests that come from the same user. If the user is inactive for a time longer than the period indicated by **Session expiration seconds**, then the Services Framework will throw an error. The default for this period is 600 seconds.

### Defining a connection to an application

To define a connection to an application:

1. Check that a Rules Service for your application has been configured and started at a given port number (for example, 9997) and with the correct configuration. You can configure and start a Rules Service from USoft Binder.

2. In the Applications window or tab, click the Defined Connections tab. Alternatively, choose Define, Connections from the menu.

3. Specify at least a Connection Name, an Application Name, and (in the lower box, or on the USoft Rules Services tab) at least one Host Name and Port Number, for example:

|        |        |
|--------|--------|
|Connection Name|myconnection|
|Application Name|TRAVEL  |
|Host Name|localhost|
|Port Number|9997    |



 

4. Consider if you want to change the value of the "Session name" or the "Session expiration seconds" attribute.

5. Save this new connection. See that defaults for a number of settings are generated. You can change these defaults.

### Reuse Sockets option

When you connect to a Rules Service with a port number of, for example, 7777, your operating system will use a temporary port to communicate back to the Service Framework. Because there is a limited number of ports, and these ports are not released instantly by the operating system when the socket is closed, it is possible that you cannot create a connection to the Rules Service because there is no port available. This issue can occur, for example, when you handle a queue and a certain amount of connecting to the Rules Service takes place.

If you use the option "Reuse Sockets", Service Definer will not let go of the socket as soon as its request is handled. Instead, the connection will be kept alive in a pool for about 1 minute. If there is another request to the Rules Service, the Service Framework will re-use the connection from the pool and the same temporary port is used again to communicate from the Rules Service back to the Service Framework. This results in less temporary ports used, and the possibility of running out of ports is reduced.