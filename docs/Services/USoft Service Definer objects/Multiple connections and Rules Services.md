# Multiple connections and Rules Services

You can use multiple connections and multiple Rules Services for an application. Use multiple connections or Rules Services (or both) if you want to:

- Separate different channels or different uses made of your application.

- Distribute and balance workload.

There are many different situations. By way of example, this help topic describes 2 example scenarios in which multiple connections or Rules Services are called for.

## Example 1: Different purposes or users of a single application

In this situation, multiple instances of the same application run on the same computer for distinct purposes or for distinct users. The application is each time the same and is identified by a single application name, but it runs multiple times on different databases.

![](/api/Services/USoft%20Service%20Definer%20objects/assets/a805508a-37bf-4f74-9a5a-1576fe66b1f8.png)

When exposing REST interfaces to the application, you prescribe URLs that contain a connection name as a parameter. This connection name specifies, for each runtime call, which connection must handle the request.

For example, you have created an application that you host for multiple clients. Each client has his own USoft database. You want to provide REST services for the application to each of the clients. Each client uses his own connection to the application. That connection name is  specified in the URL of each runtime call.

Each method has a 'connection_name' parameter defined as a path parameter. This is implemented using the @PathParam annotation. The connection name is passed as an input parameter when the sql() function is called. You must specify at the service level (in the Services window, on the Connections tab) which connections the service is using.

## Example 2: Workload balancing

In this situation, your application offers different services and you want to take control of workload balancing among these services.

![](/api/Services/USoft%20Service%20Definer%20objects/assets/b7651bc1-5f9c-4d80-b9aa-c76f9a4e93ac.png)

A scheduling service executes a data load task in the application every day. In parallel, you also have a REST service running for interactive use by web users. You want to host these 2 services on the same machine, but you do not want the data load task to interfere with the performance of your interactive REST service.

In this case, you can define 2 connections. Each connection is associated with a different Rules Service (or a different set of multiple Rules Services).

For each service, you specify (in the Services window, on the Connections tab) which connection that service is using. Unlike Example 1 in this help topic, connection names do NOT need to be passed as a parameter when the sql() function is called. It is sufficient that each service has knowledge of the correct connections to be used.