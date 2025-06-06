# Getting table and column Information with USoft Table Resource

To be able to get table and column information through a REST service based on "USoft Table Resource" functionality, you first need to:

- Define a predefined USoft REST service based on "USoft Table Resource",

- Associate it with a server and a connection,
- Publish it, and
- Set up a test environment.  

These tasks are explained in help topic " Predefined REST services ".

A service user can find out about the resources that a REST service based on "USoft Table Resource" offers is to get the names of tables and columns exposed by the service. This is done by following the steps below.

## Getting table and column information

To get table and column information:

1. Compose a URL of the following type, which uses the **tables** keyword:

```
http://<host-name>:<port-number>/<service-uri>/<connection-name>/tables
```

For example:

```
http://localhost:8090/myservice/myconnection/tables
```

2. Select the HTTP verb **GET**.

3. Send the request. In POSTMAN, press the Send button.

The result will look something like this:

```language-xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/xsl/Resources.xsl"?>
<Resources>
    <uri tablename="AVAILABLE_TOUR" >/myservice/myconnection/AVAILABLE_TOUR;SCHEDTOUR_ID</uri>
    <uri tablename="DISCOUNT" >/myservice/myconnection/DISCOUNT;DISCOUNT_ID</uri>
    <uri tablename="GUIDE" >/myservice/myconnection/GUIDE;PERSON_ID</uri>
    <uri tablename="PARTICIPANT" >/myservice/myconnection/PARTICIPANT;RES_ID;PERSON_ID</uri>
    <uri tablename="PARTICIPANT_DETAILS" >/myservice/myconnection/PARTICIPANT_DETAILS;RES_ID;PERSON_ID</uri>
    <uri tablename="PERSON" >/myservice/myconnection/PERSON;PERSON_ID</uri>
    <uri tablename="RESERVATION" >/myservice/myconnection/RESERVATION;RES_ID</uri>
    <uri tablename="SCHEDTOUR" >/myservice/myconnection/SCHEDTOUR;SCHEDTOUR_ID</uri>
    <uri tablename="STAFF" >/myservice/myconnection/STAFF;PERSON_ID</uri>
    <uri tablename="TABLE_SEQUENCE_NUMBERS" >/myservice/myconnection/TABLE_SEQUENCE_NUMBERS;TABLE_NAME;SEQNO</uri>
    <uri tablename="TOUR" >/myservice/myconnection/TOUR;DESTINATION;TOUR_TYPE</uri>
    <uri tablename="T_APP_TIME" >/myservice/myconnection/T_APP_TIME;APP_YEAR;APP_MONTH;APP_DAY;APP_HOUR;APP_MINUTE;APP_SECOND</uri>
    <uri tablename="T_EVENT" >/myservice/myconnection/T_EVENT;EVENT;SESSION_ID</uri>
</Resources>
```