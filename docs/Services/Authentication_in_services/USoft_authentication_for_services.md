---
id: USoft_authentication_for_services
---

# USoft authentication for services

The **USoft authentication** scheme is based on Basic Authentication. Basic Authentication is a simple authentication scheme built into the HTTP protocol. The client sends HTTP requests with the Authorization header in following format:

```
Authorization: Basic credentials
```

where *credentials* is a base64-encoded string of the format:

```
username:password
```

USoft authentication is the **default authentication scheme** in Service Definer: it applies if nothing else is specified. The authentication moment is the moment when the Service Framework makes a connection to a Rules Service. By implication, if a service does not use a connection to a Rules Service, then credentials are not checked

If the **Session expiration seconds** field of the connection used to connect to the Rules Service has a value bigger than 0, then a session is created on the server side, and the client gets a Usoft authentication cookie in the response. With this cookie, the client can connect again and use the same server session.

## How to explicitly specify USoft Authentication for a service

To explicitly specify USoft Authentication as the authentication scheme for a service:

1. In Service Definer, open the window for the service for which you want to specify USoft authentication.

2. Set the Annotation attribute of the service to

```
@AuthUSoft
```


:::note

You can also explicitly set USoft authentication on an individual method of the service. Do this by setting the Annotation attribute of that method to :
@AuthUSoft

:::
