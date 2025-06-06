---
id: Service_Framework_server_healthcheck
---

# Service Framework server healthcheck

You can run a health check utility on a **USoft server**. A USoft server is part of the USoft Service Framework. A USoft server exposes a collection of web services for the benefit of USoft applications. A USoft server is developed and published from the USoft Service Definer tool.

> [!NOTE]
> You can also run a [health check on a USoft Rules Service](/docs/USoft_for_administrators/Maintaining_a_USoft_Production_environment/Rules_Service_healthcheck.md).

To run a server health check, browse:

```
*host*:*port*/health
```

where *port* is the Windows Service port number of the Service Framework server you want to check, for example:

```language-http
http://localhost:8092/health
```

## Exposing the health check utility

To expose the health check utility on the server, make sure that in the **config.xml** file for the server, the **advertise** attribute has the **HealthCheckResource** mention: for example:

```language-xml
<?xml version="1.0" encoding="UTF-8"?>
<Config>
   <Server name="..." 
   ... advertise="GenericResource,AdminResource,LoggingResource,**HealthCheckResource**,GenericExceptionHandler,"
   ...
```

> [!TIP]
> Service Definer generates this HealthCheckResource mention for you if you publish the server with the Allow Health Checks = Yes flag. Find this flag in the Administration tab on the window for the Server.

## Limiting access to specific IP addresses

You can limit access to the health check utility by enumerating specific IP addresses from which it may be called. To do this, include a section such as the following in the server's **config.xml** file:

```language-xml
<HealthCheckWhiteList>
    <Address range="192.168.200.1/24"/>
    <Address range="10.10.1.5"/>
</HealthCheckWhiteList>
```

> [!TIP]
> Make sure this section has the **\<Server>** element as its parent element.

## Response

If the server exposes multiple services, visiting the **/health** endpoint returns a **200** (OK) status only if all the services are deemed healthy. If not, error statuses can come from any of the services exposed.

If the server exposes a Rules Service, visiting the **/health** endpoint

- Returns a **200** (OK) status if all is well.
- Returns a **503 Service Unavailable** status if the Rules Service is not running.
- If access to the /health endpoint is not allowed, a 403 (forbidden) is reported, showing the IP that was forbidden.
- Returns a **403 Forbidden** status if access to the /health endpoint is not allowed. The response shows the IP from which access is being forbidden.

If the server exposes a Page Engine service for a USoft web application, visiting the **/health** endpoint:

- Returns a **200** (OK) status if the file path to the publication directory for the web application is found.
- Returns a **503** status if the file path to the publication directory is not found.