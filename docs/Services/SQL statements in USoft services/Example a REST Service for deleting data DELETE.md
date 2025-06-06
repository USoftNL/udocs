# Example: a REST Service for deleting data (DELETE)

In this example, you drop a tour from the catalogue of existing tours that is in the database.

This example shows how you can quickly generate a REST service from a SQL statement of this type:

```sql
DELETE  FROM tour
WHERE   destination = :destination
AND     tour_type = :tour_type
```

In this particular example, matrix parameters are used, but you have a number of other options when designing input parameters.

## Defining SQL

1. In the User Application, in SQL Command, write and test a SQL statement that will drop an existing tour, for example:

```sql
DELETE  FROM tour
WHERE   destination = 'AFRICA'
AND     tour_type = 'KENYA SAFARI'
```

2. In USoft Services Definer, create a variant of this statement that indicates the REST input parameters. To do this, choose Define, SQL Statements from the menu, then create a statement record with the following values:

|        |        |
|--------|--------|
|Statement name|DROP_TOUR|
|Application name|TRAVEL  |



Statement =

```sql
DELETE  FROM tour
WHERE   destination = :destination
AND     tour_type = :tour_type
```

3. Save work. Click the Check button to have your SQL syntax checked. If it is correct, the Correct = Yes flag is set.

## Generating a REST method based on SQL

1. Define a custom REST service and make sure that this new service is exposed by a Server. For details on how to do these 2 things, step out to help topic " Setting up your own REST service ".

2. On the Methods tab, create a record for the retrieval method:

|        |        |
|--------|--------|
|Method Name|DeleteTour|
|Relative URI Path|/Tours  |
|REST HTTP Verb|DELETE  |



 

3. Press the "Generate from SQL" button.The "Generate Method from SQL Statement" dialog appears.

4. On the SQL Statements tab, click in the record for the DROP_TOUR statement that you want the REST method to be generated from.The SQL code is now in view in the box on the right. Check that the Correct flag is set to Yes.

5. Press the Generate button.

In the REST Services window or tab, values for Signature, Implementation and Parameters are generated.

## Publishing the solution

1. Choose Define, Servers, and retrieve the record of the Server where you expose the service.

2. With input focus on this record, choose Publish, Publish and Restart from the menu.

## Testing the implementation

1. Open a Google Chrome browser window, search the download site for the “POSTMAN – REST Client” Google extension, and download it to your browser.

Once installed, this extension can be opened easily from a new Google Chrome browser tab. To do this, click the standard “Apps” button on the Favorites bar, then click the POSTMAN item in the middle of the screen.

2. Open POSTMAN, and specify the following URL:

```
http://<host-name>:<port-number>/<service-uri>/<method-uri>;<matrix-parameter>=<value>[;<matrix-parameter>=<value>...]
```

for example:

```
http://localhost:8090/mycustomservice/Tours;destination=AFRICA;tour_type=KENYA SAFARI
```

3. Set the HTTP verb to **DELETE**.

4. Press the Send button.

See that HTTP status code "204 No Content" is returned as a response. In the User Application, check that the record with destination = AFRICA and tour_type = KENYA SAFARI has been correctly deleted.

Another popular design of this type of REST call is to pass back the result data in a response message. For this design, go to help topic " Example: a REST Service for returning manipulated data ".