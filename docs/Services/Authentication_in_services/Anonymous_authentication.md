---
id: Anonymous_authentication
---

# Anonymous authentication

Anonymous authentication gives you anonymous access to a website or web API, without prompting for a user name or password.

You can use anonymous authentication to give free access to resources, resources that do not need any credentials when accessing them.

For example, a travel agency resource that returns last-minute advertised by the agency does not need any authentication, but a resource that makes a reservation must be protected by credentials.

## How to explicitly specify anonymous authentication for a service

1. In Service Definer, open the window for the service that does not need any credentials from the user.

2.  Set the Annotation attribute of the service to

```
@AuthNone(user="username", password="password")
```

where *username* and *password* are valid USoft credentials from Authorizer. These credentials are used by the Service Framework to connect to the Rules Service.

> [!NOTE]
> You can also explicitly set USoft authentication on an individual method of the service. Do this by setting the Annotation attribute of that method to :

> [!NOTE]
> You can use **@AuthNone** without user name and password, and this construction will throw an 404 http status code if a connection to the rule service is needed. This is useful to static content, like files, where no connection to the rule engine is needed.