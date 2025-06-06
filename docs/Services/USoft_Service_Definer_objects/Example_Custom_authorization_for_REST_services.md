---
id: Example_Custom_authorization_for_REST_services
---

# Example: Custom authorization for REST services

USoft provides different authentication schemes. It also allows you to create your own custom authentication. REST services in USoft Service Definer use the Java Jersey Framework. This framework provides a set of features that you can use in Service Definer to extend current functionality. One of the features is the possibility of adding filters to a REST request. By defining a REST request filter, you can add an authentication check before the method is executed. Check Java and Jersey Framework documentation for more explanation on filters.

This example shows how you can create a functional type for a Jersey filter, to allow custom token authentication using a custom HTTP header (API-Token) for sending the authentication token.

This example assumes that you already have a custom REST service and this service is exposed by a Server. For details on how to do these 2 things, step out to help topic "Setting up your own REST service ". Your custom REST service will probably need USoft credentials to connect to the USoft Rules Service. Use anonymous authentication with a user name and a password to provide USoft credentials.

## Creating a functional type based on the Jersey filter class

1. Choose Define, Functional Types from the USoft Service Definer menu.

The Functional Types window appears.

2. Create a functional type record.

3. Set "Functional Type" = **Jersey Request Filter**.

4. Set "Implemented Interfaces Names" = **javax.ws.rs.container.ContainerRequestFilter**.

5. Set "Used for Class Type" = **Rest Service**.

6. Save.

## Creating a service for authentication check

1. Choose Define, REST Services from the menu.

2. Insert a new "REST Services" record and set its Service Name value to **mycustomauthenticator**.

3. Click the lookup button at the Functional Type field and select '**Jersey Request Filter**'**.**

4. Save work. Defaults are generated for Package and for Relative URI Path. Clear the Relative URI Path field.

5. Choose Actions, Add Unimplemented Methods from the USoft Service Definer menu.

This adds a new method to the 'mycustomauthenticator' service. Clear the Relative URI Path and Produces fields, and set REST HTTP Verb = null.

6. Save work.

7. Replace the Implementation field of the method by:

```language-java
String token = par1.getHeaderString("API-Token");
String serverToken = "very secret authentication token";
if (token == null || !token.equals(serverToken))
   throw new javax.ws.rs.WebApplicationException(403););

```


:::note

The authentication token can also be loaded from a configuration file, using for example

:::

```language-java
String serverToken = UServiceConfig.getConfigString("API-Token");
```

or from a different (maybe encoded) file, using Java code.

8. Associate you filter REST service with a server. Go to Servers tab and add your server to the Server Name list.

9. Install, Publish and Start your server.

## Test your custom authentication in POSTMAN

1. Open POSTMAN, and specify the REST service URL. For example:

```
http://localhost:8090/mycustomservice/clients
```

2. Set the HTTP verb to the correct value, as defined in the operations that you defined in Service Definer (e.g. **GET)**.

3. Specify a custom header API-Token with value 'very secret authentication token'. 

*Example*

```
GET /mycustomservice/clients
Host: localhost:8090
API-Token: very secret authentication token

```

4. Press the Send button.

See that the HTTP request is successful.

5. Check the same with a invalid API-Token value

See that the HTTP request returns 403 status code.