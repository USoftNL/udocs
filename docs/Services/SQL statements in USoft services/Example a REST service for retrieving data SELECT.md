# Example: a REST service for retrieving data (SELECT)

The following step-by-step instructions are for creating a custom REST service that retrieves data on the basis of a booking ID.

This example shows how you can quickly generate a REST service from a SQL statement.

In this particular example, matrix parameters are used, but you have a number of other options when designing input parameters.

## Defining SQL for data presentation

Often the data structure you want to present through a REST service is not exactly the same as the table structure (the data model) in which you store the data in the database. You want to re-structure the data for presentation through the REST service.

The Service Definer lets you create SQL statements "on top of" the data model. These statements tailor the data structure to the requirements of your REST service.

An elegant way is to work with 2 layers. First create a Logical View in USoft Definer that formats the data in functional terms to the required structure. Then, in USoft Service Definer, write your REST service functionality against this Logical View. The functional Logical View becomes available for use everywhere in your application. Only the more technical service aspect is associated with the REST service itself.

This 2-layer strategy is demonstrated in the following steps.

1. In USoft Definer, create a Logical View that selects a specific subset of columns and records that you want to present through the REST service.

For example, the following view statement presents certain properties of active bookings in a travel agency:

```sql
SELECT   Reservation.res_id
,        Reservation.schedtour_id
,        "Scheduled tour".destination
,        "Scheduled tour".tour_type
,        "Scheduled tour".start_date
,        "Scheduled tour".return_date
,        Reservation.num_part
FROM     Reservation Reservation
,        Schedtour "Scheduled tour"
RELATE   "Scheduled tour" "FOR WHICH ARE MADE" Reservation
WHERE    "Scheduled tour".start_date > TRANSACTION_DATE()
AND      Reservation.cancel_date IS NULL
```

2. Have the Logical View checked (press the Check button), then save your work. See the Definer Help for details on this step.

3. In USoft Service Definer, if you have an existing connection you want to use, then re-start the Rules Service of that connection so that it picks up the new Logical View definition. Otherwise, in USoft Service Definer, make sure you define a Rules Service, the Application, and a Connection, and make sure you start the Rules Service.

4. In USoft Service Definer, choose Define, SQL Statements and add the following statement.

The WHERE clause in this statement will allow users of your REST service to identify the row they want to see. To define a REST service that will retrieve *multiple* rows, see the "Retrieving multiple rows" section at the end of this help topic.

Statement Name: GET_ACTIVE_BOOKING

Statement:

```sql
SELECT   res_id
,        schedtour_id
,        destination
,        tour_type
,        start_date
,        return_date
,        num_part
FROM     active_booking
WHERE    res_id = :booking_id
```

5. Save. Click the Check button. See that the Correct flag is set to Yes.

## Generating a REST method based on SQL

1. Define a custom REST service and make sure that this new service is exposed by a Server. For details on how to do these 2 things, step out to help topic " Setting up your own REST service ".

2. On the Methods tab, create a record for the retrieval method:

- Method Name = **GetActiveBooking**
- Relative URI Path = **/ActiveBookings**
- REST HTTP Verb = **GET**

3. Press the "Generate from SQL" button.The "Generate Method from SQL Statement" appears.

4. In the "Return Structure Name" field, enter **MyBookingStructure**.

5. On the SQL Statements tab, click in the record for the SQL statement that you want the REST method to be generated from.

The SQL code is now in view in the box on the right. Check that the Correct flag is set to Yes.

6. Press the Generate button.

In the REST Services window or tab, values for Signature, Implementation and Parameters are generated.In the Catalog on the left-hand side, a Structure with name MyBookingStructure is offered for inspection.

## Publishing the solution

1. Choose Define, Servers, and retrieve the record of the Server where you expose the service.

2. With input focus on this record, choose Publish, Publish and Restart from the menu.

## Testing the implementation

1. Open a Google Chrome browser window, search the download site for the “POSTMAN – REST Client” Google extension, and download it to your browser.

Once installed, this extension can be opened easily from a new Google Chrome browser tab. To do this, click the standard “Apps” button on the Favorites bar, then click the POSTMAN item in the middle of the screen.

2. Open POSTMAN, and specify the following URL:

```
http://host:port/service-uri/method-uri;variable=value[;variable=value...]
```

for example:

```
http://localhost:8090/mycustomservice/ActiveBookings;booking_id=182
```

Here, 'reservation_id' is a matrix parameter. See the help topic " Input Parameters as Matrix Parameters " for details.

3. Check that your request is about to use the GET protocol (this is the default, displayed to the right of the URL).

4. Press the Send button.

See that booking information is retrieved and displayed in the lower pane.

## Retrieving multiple rows

If you want to have *more than one row* returned, or in this example more than one active booking you need to:

- Change your SQL so that it retrieves multiple rows.
- Instruct the code generator to generate for a multiple-row select.

Follow these steps:

1. Go back to the SQL statement and omit the WHERE clause that restricts the result to 1 row:

Statement Name: GET_ACTIVE_BOOKING

Original statement:

```sql
SELECT   res_id
,        schedtour_id
,        destination
,        tour_type
,        start_date
,        return_date
,        num_part
FROM     active_booking
WHERE    res_id = :booking_id
```

New statement:

```sql
SELECT   res_id
,        schedtour_id
,        destination
,        tour_type
,        start_date
,        return_date
,        num_part
FROM     active_booking

```

2. Press the Check button. See that Correct = Yes. Commit work.

3. Go back to the **GetActiveBooking** method of the REST service and press the "Generate from SQL" button again.

4. In the "Generate method..." dialog, click again in the SQL Statement you want to use. Set:

|        |        |
|--------|--------|
|Return Structure Name|MyBookingStructure|
|Generate for multiple rows (Select statement)|Yes     |



5. Press the Generate button. You can see that there are a few changes to the generated code. It now uses an array( indicated by square brackets [ ] ) of the structure in the sql output class, the java object notation and the return type parameter.

6. Select the Server, press the Publish and Restart button for it, so that the changes are re-published.

7. Test your work.