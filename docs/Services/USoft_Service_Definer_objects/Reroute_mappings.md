---
id: Reroute_mappings
---

# Reroute mappings

A **reroute mapping** is an arrangement that allows your user's browser to access USoft web resources by a shorter, simpler URL than the traditional, standard USoft URL.

In the examples that follow, the word "short” is not a keyword but just a random example word that allows you to get a feel of how the URL can become shorter.

*Example 1*

You can create a reroute mapping for a REST Service that has Functional Type = **USoft Page Engine Resource**. This allows users to browse your USoft web application through a short URL of this type:

```html
https://*host*:*port-number*/short
```

instead of through a traditional, long USoft URL of this type:

```language-http
https://*host*:*port-number*/*service-name*/*connection-name*
```


:::note

If you apply a reroute mapping, the longer URL will still work, but the user will automatically see it replaced by the shorter URL in his browser address bar.

:::

*Example 2*

You can create a reroute mapping for a REST Service that has Functional Type = **USoft Job Resource**. This allows a REST API to execute a job on the Rules Service through a short URL of this type:

```language-http
https://*host*:*port-number*/short/*job*;*param-1*=*value-1*;*param2*=*value2*;...
```

instead of through a traditional, long USoft URL of this type:

```language-http
https://*host*:*port-number*/*service-name*/*connection-name*/*job*;*param-1*=*value-1*;*param2*=*value2*;...
```

## Defining a reroute mapping for a Page Engine

This particular scenario defines a reroute mapping for a Page Engine, as in *Example 1* above.

This is assuming your USoft web application is already up and running:

- You have already defined a REST Service that acts as Page Engine (ie., that has Functional Type = USoft Page Engine Resource).
- This REST Service has already been published and tested. To do its work, it is associated with a Server and a Connection.

To define a reroute mapping:

1. In Service Definer, open the REST Services window for the REST Service.
2. Click the "Reroute Mappings” tab.
3. Specify the Connection and Server.
4. Make sure Host Name is empty, except if you want to disambiguate between multiple hostnames that have been made to refer to the same USoft Service Framework server, for example, at IIS level.
5. Specify a Shortened Path. It makes no difference if you start with a forward slash or not. For example, specify , or .
6. Save work. Publish and Restart the server. You should now be able to access the web application using the new, shorter URL.