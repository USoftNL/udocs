# Deleting data with USoft Table Resource

To be able to delete data through a REST service based on "USoft Table Resource" functionality, you first need to:

- Define a predefined USoft REST service based on "USoft Table Resource",
- Associate it with a server and a connection,
- Publish it, and
- Set up a test environment.

These tasks are explained in help topic " Predefined REST services ".

You can delete data without committing.

## To delete a record from a table:

1. Compose a URL that identifies the record, for example, a record that specifies the primary key value:

```
http://<host-name>:<port-number>/<service-uri>/<connection-name>/<table-name>;<primary-key>=<value>[;<primary-key>=<value>]
```

For example:

```
http://localhost:8090/myservice/myconnection/RESERVATION;reservation_id=1337
```

or, with a primary key spanning 2 columns:

```
http://localhost:8090/myservice/myconnection/TOUR;destination=HOLLAND;tour_type=TULIPS
```

2. Select the HTTP verb **DELETE**.

3. Send the request. In POSTMAN, press the Send button.