---
id: Predefined_REST_services
---

# Predefined REST services

A REST service is a software construct that allows external users to get or set certain resources stored in a USoft application across the Internet in a predefined manner.

A REST service defines the resources that may be accessed in functional terms, not in terms of technical specifications.

A REST service is different from a conventional SOAP-based web service because its basic functionality is seen to be about interaction with *data*. The basic functionality of a SOAP-based service is seen to be about the execution of specific *actions* or *tasks*.

REST services in a USoft context generally perform one of three things:

- Retrieval of a specific data set, for example, a database record or a set of records.

- Atomic data manipulation, for example, updating a value in a specific database record or adding a new record.
- A task-oriented routine that performs a data transaction task, ie, a sequence of interrelated data manipulations, for example, adding an ORDER record with corresponding ORDERLINE records.

Batch-oriented routines are preferred over atomic data manipulations when it is important to be able to rollback the entire routine in the event of an error.

## How to define

You define such a service by basing it on one of the ready-made Functional Types that USoft ships with the Service Definer product. Using these ready-made Functional Types allows you to create general-purpose REST services quickly with a minimum of programming and debugging effort.

The most important Functional Types that USoft ships for predefined REST services are:

- "USoft Table Resource" for basic browsing and manipulation of table data in your USoft application.
- "USoft Job Resource" for calling batch jobs defined in your USoft application.

Predefined REST services have predefined methods that may be inspected in the ".wadl" file but are not listed in the USoft Definer windows interface. Only methods of custom REST services may be inspected in the windows interface.

To define a predefined REST service:

1. Choose Define, REST Services from the USoft Service Definer menu.

2. Insert a new “REST Service” record with the setting:

|        |        |
|--------|--------|
|Service Name|myservice|



3. In this record, depending on whether you want the predefined service to be based on "USoft Table Resource" or on "USoft Job Resource", make one of the following settings:

|        |        |
|--------|--------|
|Functional Type|USoft Table Resource|



or:

|        |        |
|--------|--------|
|Functional Type|USoft Job Resource|



4. Save.

The following defaults are generated. You should leave these unaltered:

|        |        |
|--------|--------|
|Package |com.usoft.service|
|Relative URI Path|/myservice|



 

5. Press the Check button on the right-hand side.

This causes the “myservice” REST Service to get the Correct = Yes setting.

## Associating the predefined REST service with a server

To associate the predefined REST service with a server:

1. Choose Define, Services, REST Services from the USoft Service Definer menu.

The "REST Services" window or tab appears.

2. Query the REST service that you want to expose.

3. When you have that REST service in view, click the Servers tab and specify the server where you want to publish the REST service, for example, the default server called 'Default'**.**

4. Save.

## Associating the predefined REST service with a connection

To associate the predefined REST service with a connection:

1. In the "REST Services" window, for the REST service, click the Connections tab and specify the connection that you want the service to use.

2. Save.

## (Re)publishing the predefined REST service at the server

To (re)publish the predefined REST service at the server:

1. Choose Define, Servers from the menu of the USoft Service Definer.

The Services window or tab appears.

2. Query the server where you want to (re)publish the REST service.

3. Stop the Server if it was running. Do this by choosing Actions, Stop from the menu, or by clicking the Stop icon on the icon ribbon.

4. (Re)publish the service(s) associated with the server. Do this by choosing Publish, Publish Services from the menu, or by clicking the Publish Services icon on the icon ribbon.

5. Start the Server. Do this by choosing Actions, Start from the menu or by clicking the Start icon in the icon ribbon.

> [!TIP]
> You can wrap Steps 3, 4 and 5 into one by choosing Publish, Publish and Restart from the menu or by clicking the "Publish and Restart" icon on the icon ribbon.

## Setting up a test app in POSTMAN

Once you have a USoft REST service running, you can test its behaviour by using any favourite app.

As an example, the following steps describe how you can set up a test app in POSTMAN app.

1. Open a Google Chrome browser window, search the download site for the “POSTMAN – REST Client” Google extension, and download it to your browser.

2. Click the standard “Apps” button on the Favorites bar, then click the POSTMAN item in the middle of the screen.

3. Optionally, on the “Basic Auth” tab, specify the database username and password required to access the service, then press Refresh Headers.

**If you are using "USoft Table Resource", choose a topic from this list to continue:**

[Retrieving data with USoft Table Resource](/docs/Services/Predefined_REST_services/Retrieving_data_with_USoft_Table_Resource.md)

[Adding data with USoft Table Resource](/docs/Services/Predefined_REST_services/Adding_data_with_USoft_Table_Resource.md)

[Updating data with USoft Table Resource](/docs/Services/Predefined_REST_services/Updating_data_with_USoft_Table_Resource.md)

[Deleting data with USoft Table Resource](/docs/Services/Predefined_REST_services/Deleting_data_with_USoft_Table_Resource.md)

**If you are using "USoft Job Resource", choose a topic from this list to continue:**

[Calling a Batch Job with USoft Job Resource](/docs/Services/Predefined_REST_services/Calling_a_batch_job_with_USoft_Job_Resource.md)