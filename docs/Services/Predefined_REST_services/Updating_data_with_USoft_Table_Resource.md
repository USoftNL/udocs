---
id: Updating_data_with_USoft_Table_Resource
---

# Updating data with USoft Table Resource

To be able to update data through a REST service based on "USoft Table Resource" functionality, you first need to:

- Define a predefined USoft REST service based on "USoft Table Resource",
- Associate it with a server and a connection,
- Publish it, and
- Set up a test environment.

These tasks are explained in help topic " Predefined REST services ".

You can update data without committing.

## To update a value in a table:

1. Compose a URL that identifies the record:

```
http://<host-name>:<port-number>/<service-uri>/<connection-name>/<table-name>;<primary-key>=<value>[;<primary-key>=<value>]
```

For example:

```
http://localhost:8090/myservice/myconnection/RESERVATION;reservation_id=1337
```

or, with a primary key that spans 2 columns:

```
http://localhost:8090/myservice/myconnection/TOUR;destination=HOLLAND;tour_type=TULIPS
```

2. Select the HTTP verb **PUT**.

3. Specify a Header with name **Content-Type** and value **text/xml**. In POSTMAN, to add a header, you can press the Headers button.

4. To update the value in Column_A to Value_P, specify the following XML fragment. In POSTMAN, press the "raw" button to get a text editor field where you can paste this XML:

```
<table-name Column_A="Value_P"/>
```

For example:

```
<RESERVATION NUM_PART="6">
```

5. Send the request. In POSTMAN, press the Send button.