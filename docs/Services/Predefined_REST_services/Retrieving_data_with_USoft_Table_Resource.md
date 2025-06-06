---
id: Retrieving_data_with_USoft_Table_Resource
---

# Retrieving data with USoft Table Resource

To be able to retrieve data through a REST service based on "USoft Table Resource" functionality, you first need to:

- Define a predefined USoft REST service based on "USoft Table Resource",
- Associate it with a server and a connection,
- Publish it, and
- Set up a test environment.  

These tasks are explained in help topic " Predefined REST services ".

## Retrieving all the data in a table

To retrieve all the data in a table:

1. Compose a URL of the following type:

```
http://<host-name>:<port-number>/<service-uri>/<connection-name>/<table-name>
```

For example:

```
http://localhost:8090/myservice/myconnection/BOOKING
```

2. Select the HTTP verb **GET**.

3. Send the request. In POSTMAN, press the Send button.

 

## Retrieving only records that contain a specific value

 To retrieve only records that contain a specific value:

1. Compose a URL of the following type:

```
http://<host-name>:<port-number>/<service-uri>/<connection-name>/<table-name>;
  <column-name>=<value>[;<column-name>=<value>...]

```

2. Select the HTTP verb **GET**.

3. Send the request. In POSTMAN, press the Send button.

*Example 1*

```
http://localhost:8090/myservice/myconnection/BOOKING;booking_id=1337
```

Booking IDs are likely to be unique, so the result will be a single record. However, other search conditions of this type could return multiple records.

*Example 2*

```
http://localhost:8090/myservice/myconnection/TOUR;destination=AUSTRALIA;tour_type=ISLAND SUNTANNER
```

These are conditions on DIFFERENT columns: all results must meet BOTH conditions. The SQL equivalent is (mark the **AND**): 

```sql
SELECT     *
FROM       tour
WHERE      destination = 'AUSTRALIA'
AND        tour_type = 'ISLAND SUNTANNER'

```

*Example 3*

```
http://localhost:8090/myservice/myconnection/TOUR;destination=AUSTRALIA;destination=HOLLAND
```

These are conditions on IDENTICAL columns; one of the conditions must apply. The SQL equivalent is (mark the **OR**): 

```sql
SELECT     *
FROM       tour
WHERE      destination = 'AUSTRALIA'
OR         destination = 'HOLLAND'

```

 

## Retrieving only records with values higher, lower or different than a specific value

To retrieve only records with values higher, lower or different than a specific value:

1. Compose a URL of the following type:

```
http://<host-name>:<port-number>/<service-uri>/<connection-name>/<table-name>;<comp-op><column-name>=<value>
```

where \<comp-op> is one of the following comparison operators:

|**>**   |**Greater than**|
|--------|--------|
|<       |Smaller than|
|!       |Not the same as|



For example, the URL:

```
http://localhost:8090/myservice/myconnection/BOOKING;>num_part=2
```

retrieves bookings for more than 2 participants, and corresponds to the SQL statement:

```sql
SELECT     *
FROM       booking
WHERE      num_part > 2 

```

2. Select the HTTP verb **GET**.

3. Send the request. In POSTMAN, press the Send button.

 

## Retrieving only values that match a pattern

To retrieve only values that match a pattern:

1. Compose a URL of the following type, taking care to use a tilde (~)in front of the column name(s):

```
http://<host-name>:<port-number>/<service-uri>/<connection-name>/<table-name>;~<column-name>=<wildcard-value>
```

where \<wildcard-value> is a value containing one or more times an asterisk (*). 

2. Select the HTTP verb GET.

3. Send the request. In POSTMAN, press the Send button.

*Examples*

```
http://localhost:8090/myservice/myconnection/FLIGHT;~flightnumber=IKL*
```

retrieves all flights with a flight number starting with KL-, such as KL1009 and KL4451.

```
http://localhost:8090/myservice/myconnection/TOUR;~destination=*IA
```

retrieves all tours with destinations ending in -IA, such as AUSTRALIA and INDONESIA.

 

## Retrieving only specific columns

To retrieve only specific columns:

1. Compose a URL of the following type, using the columns keyword:

```
http://<host-name>:<port-number>/<service-uri>/<connection-name>/<table-name>/columns;<column1>[;column2...]
```

In the result set, each item only appears once. If there are multiple records with the same value(s) in the column(s) you are retrieving, each value appears only once.

2. Select the HTTP verb GET.

3. Send the request. In POSTMAN, press the Send button.

*Example 1*

```
http://localhost:8090/myservice/myconnection/BOOKING/columns;booking_id
```

This corresponds to the SQL statement:

```sql
SELECT     booking_id
FROM       booking
GROUP BY   booking_id

```

*Example 2*

```
http://localhost:8090/myservice/myconnection/BOOKING/columns;person_id;booking_id
```

This corresponds to the SQL statement:

```sql
SELECT     person_id, booking_id
FROM       booking
GROUP BY   person_id, booking_id

```

*Example 3*

```
http://localhost:8090/myservice/myconnection/BOOKING;booking_id=1337/columns;person_id;booking_id
```

This corresponds to the SQL statement:

```sql
SELECT     person_id, booking_id
FROM       booking
WHERE      booking_id = 1337
GROUP BY   person_id, booking_id

```

where the GROUP BY happens to be ineffective if booking IDs are unique, in which case the WHERE clause retrieves only a single record.

 

## Sorting the result by a specific column

To sort the result by a specific column:

1. Compose a URL of the following type, using the columns keyword:

```
http://<host-name>:<port-number>/<service-uri>/<connection-name>/<table-name>/columns;<column1>={ASC|DESC}[;*]
```

where ASC is for ascending sort order, and DESC for descending sort order.

Mentioning a column after the columns keyword implies that other, non-mentioned columns are not retrieved. You can counter this behaviour by adding the [;*] option.

2. Select the HTTP verb GET.

3. Send the request. In POSTMAN, press the Send button.

*Example 1*

```
http://localhost:8090/myservice/myconnection/BOOKING/columns;person_id=ASC
```

This corresponds to the SQL statement:

```sql
SELECT     person_id
FROM       booking
GROUP BY   person_id
ORDER BY   person_id ASC

```

*Example 2*

```
http://localhost:8090/myservice/myconnection/BOOKING/columns;person_id=ASC;*
```

This corresponds to the SQL statement:

```sql
SELECT     *
FROM       booking
ORDER BY   person_id ASC

```

*Example 3*

The following request URL retrieves the three MOST RECENT bookings. For more information on the chunk keyword, go to the help topic " REST URL Options ".

```
http://localhost:8090/myservice/myconnection/BOOKING/columns;booking_date=DESC;*?chunk=3
```

 

## Renaming a column in the output

 To rename a column in the output:

1. Compose a URL of the following type, using the columns keyword:

```
http://<host-name>:<port-number>/<service-uri>/<connection-name>/<table-name>/columns;
  <column-nameA>[=<column-nameB>];
  [<column-nameA>[=<column-nameB>]; ...]

```

where column-nameA is the name advertised by the service and column-nameB the label displayed in the output.

When you rename in this way, you cannot use the [;*] option. Columns you want to display without renaming them must be enumerated.

2. Select the HTTP verb GET.

3. Send the request. In POSTMAN, press the Send button.

*Example*

http://localhost:8090/myservice/myconnection/BOOKING/columns;booking_id;start_date=starts;end_date=ends

```sql
SELECT     booking_id
,          start_date    starts
,          end_date      ends
FROM       booking

```

 

 