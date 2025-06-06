# Modules as plug-ins

> [!CAUTION]
> Due to improvements in USoft Authorizer 10.1, this feature is no longer supported from USoft 10.1 onwards.

![](/api/Repositories/Modular%20development/assets/1b83bcb6-eb77-451f-b199-4a4a55ef5e42.png)



The standard use of USoft modules is at design-time. When the application is delivered to a runtime environment, all the modules are combined and they run as a single end user application. In other words, application functionality is split into modules at design time but there is a single, complete product at runtime.

A further possibility is to vary the modules that you deploy to runtime environments. For each runtime environment, this gives you the option to deploy a module or not. One runtime environment may use a module that another runtime environment has no knowledge of.

Modules distributed to a subset of runtime environments only are referred to as **plug-ins.** The primary use case for plug-ins is to offer a subset of functionality as a special option offered at separate conditions. Only clients who buy the option get the plug-in.

In terms of functionality, plug-ins will be consumer modules. Otherwise it is difficult to guarantee that the core functionality, ie., the part of the application that is not a plug-in, will function properly at runtime independently of whether the plug-in is available or not.

To add a plug-in to an existing core application in a runtime environment:

1. Deliver the USoft flatfiles of the plug-in modules (for example, "MYPLUGIN1.con") to the APP directory of the USoft installation directory on the runtime server.

2. Create a .PIN file in the same directory that declares that the core application has the plug-in.

3. Restart the core runtime application.

You can unplug a plug-in by removing it from the .PIN file and then restarting the core runtime application.

The content of the .PIN file is XML. The following XML code demonstrates by example how to add the MYPLUGIN1 and MYPLUGIN2 plug-ins to the MYAPP core application. It is necessary that the .PIN file is called "MYAPP.PIN" and that it is placed in the APP directory of the USoft installation directory on the runtime server, along with the flatfiles of the plug-in(s).

*Example*

File name: MYAPP.PIN

```
<?xml version="1.0" encoding="UTF-8"?>
<Plugins xmlns="http://www.usoft.com/Product/PIN">
  <Plugin name="MYPLUGIN1"/>
  <Plugin name="MYPLUGIN2"/>
  (...)
</Plugins>

```