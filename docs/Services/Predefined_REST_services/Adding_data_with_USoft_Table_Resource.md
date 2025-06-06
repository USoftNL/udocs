---
id: Adding_data_with_USoft_Table_Resource
---

# Adding data with USoft Table Resource

To be able to add data through a REST service based on "USoft Table Resource" functionality, you first need to:

- Define a predefined USoft REST service based on "USoft Table Resource",
- Associate it with a server and a connection,
- Publish it, and
- Set up a test environment.

These tasks are explained in help topic " Using Predefined REST services ".

You can add data without committing.

## To add a record to a table:

1. Compose a URL that identifies the table:

```
http://<host-name>:<port-number>/<service-uri>/<connection-name>/<table-name>
```

For example:

```
http://localhost:8090/myservice/myconnection/RESERVATION
```

2. Select the HTTP verb **POST**.

3. Specify a Header with name Content-Type and value text/xml. In POSTMAN, to add a header, you can press the Headers button.

4. To add a record with Value_A in Column_A and Value_B in Column_B, specify the following XML fragment. In POSTMAN, press the "raw" button to get a text editor field where you can paste this XML:

```
<table-name Column_A="Value_A" Column_B="Value_B"/>
```

For example:

```
<RESERVATION SCHEDTOUR_ID="58" NUM_PART="4"/>
```

5. Send the request. In POSTMAN, press the Send button.

Retrieving data with USoft Table ResourceUpdating data with USoft Table ResourceDeleting data with USoft Table ResourceCalling a Batch Job with USoft Job ResourceSetting up your own REST service