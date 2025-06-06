# Getting started with USoft services: Quick Walk-Through

This help topic offers a practical walk-through that helps you get started with USoft REST services. At the end of this walk-through, you will have set up:

- A fully functional default REST service,
- An environment where you can start creating REST services of your own.

As a prerequisite, you need a USoft application that already has some data structure that is interesting to advertise as a REST interface, for example, a travel booking table. This can be a try-out application with 1 table that you build quickly just for the occasion, or it can be a large, existing USoft application.

In this help topic we will assume you have a USoft application called TRAVEL.

### Step 1. Create a Rules Service

If you haven't approached your USoft tables with a Rules Service before, you need to create one now. Instructions on how to do this are in the Model and Rules Guide, which is also part of the on-screen USoft Definer Help.

If you have a Rules Service already, look up (in USoft Binder) which port number it uses.

 

### Step 2. Setting up USoft Service Definer (USoft Binder)

1. In the USoft Binder file that you use for your project, choose Item, New... from the menu. The Add USoft Project Items dialog appears.

2. Click the Service Definer checkbox. Press the Add button. A new Service Definer item appears in the list of Binder items.

3. Right-mouse-click on the new Service Definer item and choose Create Tables. Database tables are created for the USoft Service Definer tool.

4. Right-mouse-click on the new Service Definer item and choose Open.

 

### Step 3. Install a server

1. Create a folder 'c:\\usoft\\servers\\Default\\' on your computer.

2. In the Service Definer tool you opened in Step 2, choose Define, Servers from the menu.

3. Insert a new Server record. Specify Name = 'Default' and Publication File Path = 'c:\\usoft\\servers\\Default\\' (mind the backslash at the end).

4. On the Security tab, in the Cors Configuration field, choose Default.

5. Save. A default setting Base URI = 'http://0.0.0.0:8090' is generated.

The name of the Windows Service that you are about to install will be:

```
(server-name)-(base-uri-ending)
```

where* (base-uri-ending)* are the digits '8090' at the end of the Base URI ending, so that the Windows Service name will be:

```
Default-8090
```

If you don't like this name, then at this point you should change the 'Default' server name, or the digits '8090' in the Base URI value, or both. Save work.

6. Install the server. Do this by choosing Actions, Install from the menu whilst having input focus on the “Default” Server record. The server is now visible in the Services console in the Control Panel of your PC.

 

### Step 4. Declare the application and a connection to it

1. Choose Define, Applications from the USoft Service Definer menu.

2. Insert a new Application record with Application Name = 'TRAVEL'.

3. On the Defined Connections tab, specify Connection Name = 'myconnection', Host Name = 'localhost' and Port Number = \<the port number of your Rules Service>.

4. Save work. Default values will appear in some fields. Leave these unaltered.

 

### Step 5: Create a REST service

1. Choose Define, REST Services from the menu.

2. Insert a new “REST Services” record with Service Name = 'myservice' and Functional Type = 'USoft Table Resource'. Save work. Default values will appear in some fields. Leave these unaltered.

3. Press the Check button on the right-hand side. This causes the the Correct = Yes flag to be set.

4. Click the Servers tab and insert a record with Server Name = 'Default'.

5. Click the Connections tab and insert a record with Connection = 'myconnection'.

6. Go back to the Server record you created in Step 3. With input focus on it, choose Publish, Publish and Restart.

 

### Step 6: Test the REST service

1. Open a Google Chrome browser window, search the download site for the "POSTMAN – REST Client" Google extension, and download it to your browser.

Once installed, this extension can be opened easily from a new Google Chrome browser tab. To do this, click the standard "Apps" button on the Favorites bar, then click the POSTMAN item in the middle of the screen.

2. Open POSTMAN, and specify the following URL:

```
http://localhost:(base-uri-ending)/myservice/myconnection/tables
```

where *(base-uri-ending)* are the four digits at the end of the server's Base URI value chosen at the end of Step 3.

*Example*

```
http://localhost:8090/myservice/myconnection/tables
```

3. Set the HTTP verb that you are using for the request to:

```
GET
```

4. Supply a username and password. Exactly how you do this depends on the version of POSTMAN you are using. You probably need to specify that you want to use the authorisation type of "Basic Authentication", and then fill out a username field and a password field.

5. See that the REST service gives you information from the application via the REST interface.

 

### Step 7: Expose the REST service

This step consists in making it possible for intended users to approach the service across the Internet, typically using a URL such as

```
https://www.mycompany.com/myservice...
```

Exactly how you do this depends on your organisation's IT architecture and its company standards for domain control and web security.

 