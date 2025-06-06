---
id: Upgrading_to_the_HTTPS_protocol
---

# Upgrading to the HTTPS protocol

This is a follow-on from the previous step-by-step scenario "Getting Started with a USoft Service". Like the previous step-by-step scenario, this help topic describes setting up the Development environment. If you require HTTPS in Production but not in Development, you do not need to execute these steps now. When you come to deliver your application to Production, you need to take additional measures so that the application runs the HTTPS protocol. The steps below give you an idea of what is involved in switching from HTTP to HTTPS. Running through HTTPS requires a**.pfx** certificate file with Private Key.To upgrade from the HTTP to the HTTPS protocol, follow these additional steps:

1. Place the **.pfx** certificate file with Private Key in a folder on your local file system. It is logical to choose a location close to where you published the web server .JAR file in Step 8, for example:

```
C:\USoft\servers\certificates\MyCertificate.pfx
```


:::danger

Place the **.pfx** certificate file in a location that is not accessible from the Internet, especially not through the URLs associated with your solution.

:::

2. In Service Definer, in the Servers window, retrieve the record for the Server you are using.

3. Click the Security tab.

4. In the Key Store field, type the filepath to your certificate file, for example:

```
C:\USoft\servers\certificates\MyCertificate.pfx
```


:::tip

To browse the file, click the "Certificate File Dialog..." button.

:::

5. In the "Key Store Password" field, type the password stored in the certificate file. Save work.

6. Click the View Key Store button.

You should now get a KeyStores window with generated settings in each field except the ERROR field. This is a test that the certificate has successfully been registered.

7. Go back to the Servers window.

8. In the Base URI, replace **http** by **https**, so that the result is for example:

```
https://0.0.0.0:8090/
```

9. Save work. Choose Publish, Publish and Restart from the menu to implement the upgrade to HTTPS.

10.To test run, open a browser, and in the address bar, type:

```
https://domain-name:port-number/service/connection
```

Exactly how you need to shape *domain-name* in Development and Production depends on a number of things, in particular: on the domain or subdomain(s) that the certificate is for; on the way in which your organisation uses machine names in Development; and on whether or not you run with a Page Engine declared in USoft Service Definer.

In Development, you may be enabled or required to use your machine name as a subdomain. You may then be able to use the certificate for multiple projects and distinguish them by port number.

*Example (Development)*

```language-http
https://L3100115223.mycompany.com:8090/myservice1/myconnection1
```

In Production, your system administrator will set up a suitable subdomain such as 'www’ or a name designating the application. It is desirable to make available Production URLs without explicit port numbers. The default port number for HTTPS is 443 but this may be claimed by MS Internet Information Server (IIS). IIS rewrite rules let you use IIS and at the same time let you assign a non-default port number that does not appear in the URL. The infixes for service name and connection name may be renamed, combined, or suppressed.

*Example (Production)*

```language-http
https://portal.mycompany.com/myservice1/myconnection1
```