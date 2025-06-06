---
id: Defining_custom_REST_error_handling
---

# Defining custom REST error handling

By default, when a USoft Rules Engine raises an error this result in an error message that expresses the business rule enforced by the Rules Engine.

For this reason, it can happen that a REST user who attempts to make a new booking is confronted with the internal business rule formulation:

"Scheduled Tour 50 may not be overbooked by more than 20 %".

In a REST setting this is often undesirable. The business rule is often confidential, not customer-oriented, or too technical.

Default error handling may be overruled for REST services by providing an application-specific error mapper class. A default example of an error mapper class is provided by USoft as application data. It is offered as a Functional Type called "REST error handling" in USoft Service Definer. There is also an initial example REST service called "AppExceptionMapper" that uses this Functional Type.

In USoft applications, all messages are initially formatted in XML. This XML message is available in REST interfaces for processing. This way you can change (for example) the text of an error message that a constraint provides.

The following 2 steps are needed to provide a custom error handling.

## Step 1: Add an application-specific error mapper to the server

To add an application-specific error mapper to the server:

1. From the Catalog, open the AppExceptionMapper example REST Service.

2. Make sure that a server called "Default" is declared on the Servers tab.


:::note

At this point all the errors will be handled by the toResponse method of the AppExceptionMapper. Take some time to understand the default implementation provided by USoft.

:::

3. Open the record for the REST Service that will raise the error(s), and change the log level to "Information".

4. Stop the server, Publish the service, then Start the server again.

5. On the REST client, execute the same data manipulation as before you added error handling.

6. In File Explorer, go to the Server Publication file path and search for the log file.

7. Open the log file and search for the error in XML format. Check that the error has a message tag with constraint-name = (the constraint in the USoft Rules Engine that has the business rule as its Message), for example:

```
constraint-name="OVERBOOKING_LIMIT"
```

and that the error has

```
source="constraint"
```

###  

## Step 2: Provide a custom implementation

You are now ready to change the Implementation of the AppExceptionMapper. Look in the XML error message if the source of the error is "constraint", and if so, whether that constraint is the OVERBOOKING_LIMIT constraint:

1. Open AppExceptionMapper.

2. Go to the Implementation of the toResponse method.

3. Replace the line:

```
org.w3c.dom.NodeList list = XMLUtil.getNodes(d, "//uslng:message");
```

by:

```
org.w3c.dom.NodeList list = XMLUtil.getNodes(d, "//uslng:message[@source='constraint' and @constraint-name='OVERBOOKING_LIMIT']");
```

4. Change the text “error message here” with a message that is more suitable for the REST user, for example "There are no more places available on this trip". (Even this is a fallback message; correct application design is probably to avoid offering unavailable product in the first place.)

5. Publish and restart the "Default" server.

6. On the REST client, repeat the previous manipulation and see that the error message has changed.