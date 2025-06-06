---
id: Services_Other
---

# Services (Other)

A service is a software construct that enables repeated access to a specific capability and that delivers this capability, together with policies that should control its usage.

In USoft Service Definer, specific automated features are offered only for the design, build and use of REST services and SOAP services, not for other types of service:

- For REST services, go to the REST Services topic.

- For SOAP services, go to the SOAP Services topic.

However, USoft Service Definer offers an interface for programming services. In this sense, it is extensible to any type of service. You can launch REST, SOAP, and other types of service in parallel, using the same USoft Rules Engine, Servers, and Connections. USoft also provides some default functional types for non-REST, non-SOAP services.

|**Type of service**|**Menu access**|**Catalog access**|
|--------|--------|--------|
|REST service|Define, REST Services|"REST Services" node|
|SOAP service|Define, SOAP Services|"SOAP Services" node|
|(Other) |Define, Services (Other)|"Services (Other)" node|



### Creating a service other than with REST or SOAP

The general procedure for creating a service other than with REST or SOAP are:

1. Optionally, if you have an already existing Java super class, base class or interface that you want the service to use, declare it as a USoft functional type by creating a record in table T_SVC_SUPER_CLASS.To do this, choose View, Objects from the menu, click on "SVC Super Classes" and fill out the form, taking USoft-shipped entries as an example. Enter a Functional Name as a unique handle for the code.Enter a Description and set Used for Class Type = Service. Save.

2. Choose Define, Services (Other) from the menu.

3. Insert a new "Services (Other)" record and set its Service Name value to **mycustomservice**.

4. (If applicable.) To associate the service with the correct USoft functional type, click the lookup button immediately to the right of the Functional Type field. The Functional Types lookup window appears.

5. (If applicable.) To use the already existing USoft functional type that you declared in Step 1, click in the line for that Functional Type, then press the OK button

To use a USoft-shipped default instead, click in the line for that Functional Type, then press the OK button.

If you want to use a class of your own but omitted declaring it in Step 1, you can still declare it now. Fill out a new line in the Functional Types window and, while input focus is on this new line, press the OK button. Save work.

6. Press the Check button on the right-hand side.

This causes the 'mycustomservice' service to get the Correct = Yes setting.

You are now ready to create or edit Methods, Parameters, and Implementations for the service.

### Logging and tracing a service

Log messages and trace information are important elements when diagnosing problems with services. USoft provides log and trace possibilities for services.

More on this step

### Stopping and starting a service automatically when server stops/starts

USoft provides a way to stop/start a service automatically when the server advertising that service is stopped/started. This applies to non-REST and non-SOAP services only.

To create a service that stops/starts automatically when the server stops/starts:

1. Create a service as outlined at the beginning of this help topic. Make sure that for Functional Type, you select the **USoft Server Lifecycle Listener.** Or else, program a similar Java class yourself, perhaps taking code of the USoft Server Lifecycle Listener as a model. Or code your own implementation of the org.glassfish.jersey.server.spi.ContainerLifecycleListener interface.

2. Add methods that will listen to the starting/stopping of the server. USoft does that automatically for you if you choose Actions, Add Unimplemented Interfaces from the menu.

3. Provide an implementation for **onStartup** and **onShutdown** methods. For example, the **onStartup** method implementation could look like this:

```
Logger LOG = Logger.getLogger(this.getClass());
LOG.info("Service started.");

```

and the **onShutdown** method implementation could look like this:

```
Logger LOG = Logger.getLogger(this.getClass());
LOG.info("Service stopped.");

```

4. To test, publish and start the server. Then stop the server. The log file now contains "Service started." and "Service stopped." messages in the Uservice.log file.

 