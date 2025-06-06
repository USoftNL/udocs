# Applications

In the USoft Services Platform, an application is a software module that offers a set of functions to users. These functions are interconnected and form a logical whole from a functional point of view. In a USoft context, the functions that an application offers are typically related because they access or manipulate the same cluster of structured data and because this data is governed by rules implemented in a USoft Rules Engine.

Applications in the USoft Services Platform are much like other USoft applications. Access to them is controlled in exactly the same way through USoft Authorizer applications with table rights and column rights. One difference is that in the USoft Services Platform, descriptions of multiple applications may be stored in the same database account. This opens the way to a runtime services platform in which multiple applications stored in multiple database accounts are all managed in a central place - an architecture in which you would have a special database account for holding the USoft Service Definer tables.

A more straightforward scenario is when you simply have a USoft application with one or more REST services. In this case, there is no reason to have multiple applications and no reason to have Service Definer tables and application tables in separate database accounts. Simply declare in Service Definer the same application name that you also use elsewhere.

To get a USoft service to work using a USoft model, you must define an application in the context of which it functions.  As a next step, you must also define a connection to that application that the service can use to connect to it.

## To define an application for a REST service:

1. Choose Define, Applications from the USoft Service Definer menu.

The Applications window or tab appears.

2. Create a new application by specifying the Application Name.

3. Check that the application is known in USoft Authorizer (open the USoft Authorizer item from the same USoft Binder file that you accessed the USoft Service Definer from).

4. Check that the Application User that you are going to use to approach the new REST or SOAP service has appropriate table and column rights in USoft Authorizer. If the user is member of a usergroup of the application, but no specific table or column rights are specified for this usergroup, then by default she has access to ALL tables and columns of the application.

For help with Steps 3 and 4, please refer to help on Authorisation & Access.

 