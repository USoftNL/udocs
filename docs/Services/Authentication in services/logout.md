# logout()

When developing authentication functionality, you may want to discard a session, that is, logout from the session. To do this, you can either log out from an individual connection or log out from all the sessions that are currently active. Logging out from all the sessions causes all cookies associated with the service to expire. The response that is returned contains the expired cookies.

The logout methods below are implemented for REST services only.

## logout()

Expires the session of the user for all connections. Returns a response that contains the expired cookies.

*Syntax*

```language-java
public Response logout()
```

*Example*

```
return logout();
```

## logout(String connectionName)

Expires the session of the user for the specified connection. Returns a response that contains the expired cookie.

*Syntax*

```language-java
public Response logout(String connectionName)
```

*Example*

```
return logout("MyConnection");
```

###  