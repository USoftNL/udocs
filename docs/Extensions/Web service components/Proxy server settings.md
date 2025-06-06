# Proxy server settings

A Proxy server is located between a client application, for example a Web browser, and a real server. It intercepts all requests to the server to see if it can fulfill them. If not, it forwards the request to the server. To use a Proxy server, a client needs to specify a proxy address and a proxy port number (the proxy settings).

By default, the Web Service component does not support proxy settings. If you want to add proxy settings to the Web Service component, you have to modify the first two parameters in the Constructor SQL. The first parameter is the proxy address (default NULL), and the second parameter is the proxy port (default 0).

If you want to support an authenticated proxy server for your Web Service component, add a new method with the Physical Method attribute set to:

```
this.proxyAuthentication((u):0,(i):1))
```

and add two parameters, the first parameter representing the user name, and the second parameter the user password.