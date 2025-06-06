# Exposing REST services

Assuming that you have been testing and debugging your REST service(s) using a local URL such as:

```
http://localhost:8090/myservice/...
```

then "exposing" a REST service consists of the measures you need to take so that intended users can approach the service across the Internet using a URL such as

```
https://www.mycompany.com/myservice/...
```

Exactly how you expose a platform of REST services depends on many variables specific to your situation, such as existing company standards for domain control and web security. The remainder of this help topic discusses just 2 typical scenarios by way of illustration.

## Using a default port

One scenario is to have a dedicated server machine where the default port 80 takes requests for your USoft services framework. When defining the server in USoft Service Definer, you use '80' as the port number in the server's base URI.

You must make sure that other web servers (such as IIS) do not also attempt to use this port. Be aware that certain applications (for example Skype) may automatically attempt to use the default port.

It is customary, but not mandatory, to take production requests using the HTTPS protocol rather than the HTTP protocol. The certificate associate with the HTTPS calls is managed directly by the physical server machine that runs the services platform.

## Having a firewall map requests to a local port

Another scenario is to have a firewall map incoming HTTPS requests to a local machine and port number. For example, a request using

```
https://mychannel.mycompany.com
```

could be mapped by a firewall to some locally known machine name and to a port number such as 8899. Often in this scenario, the firewall offloads the request, which means that it converts the initial HTTPS request to an HTTP request for local processing. In this case, security certificates are managed by the firewall software rather than by the machine running the services platform. In this particular scenario, of course, Internet traffic is secured but calls could still be intercepted inside the organisation.

 

 