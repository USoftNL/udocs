---
id: Limiting_the_number_of_records_returned_by_a_REST_service
---

# Limiting the number of records returned by a REST service

You can limit the number of records returned by a REST call that returns multiple records. You do this by passing boundary values that define a subset of the records contained in the query result. Only that subset is returned as the REST response. The boundary values are passed as input parameters in the request URL.

The following step-by-step instructions are for creating a custom REST service that retrieves a limited set of records from a tour catalogue offered by a travel agency.

This example also shows how you can quickly generate a REST service from a SQL statement.

In this particular example, matrix parameters are used, but you have a number of other options when designing input parameters.

## Defining SQL

1. In the User Application, in SQL Command, write and test a SQL statement that will retrieve all available tours, limiting the number of records that the statement returns, for example to the first 10 records:

```sql
SELECT   RECORDS(1, 10) DESTINATION
,        TOUR_TYPE
,        NUM_DAYS
,        DESCRIPTION
FROM     TOUR

```

On SQL Server you can alternatively use SELECT TOP 10 DESTINATION..., but unlike RECORDS(), TOP is not converted by USoft to other platforms.

2. In USoft Services Definer, create a variant of this statement that has variables for the 2 boundary values. These 2 values will be passed at runtime as variable REST input parameters. To do this, choose Define, SQL Statements from the menu, then create a SQL Statement record with the following values:

Statement Name: GET_TOURS

Statement:

```sql
SELECT   RECORDS(:min, :max) DESTINATION
,        TOUR_TYPE
,        NUM_DAYS
,        DESCRIPTION
FROM     TOUR

```

3. Save. Click the Check button. See that the Correct flag is set to Yes.

## Generating a REST method based on SQL

1. Define a custom REST service and make sure that this new service is exposed by a Server. For details on how to do these 2 things, step out to help topic " Setting up your own REST service ".

2. On the Methods tab, create a record for the retrieval method:

- Method Name = **GetTours**
- Relative URI Path = **/Tours**
- REST HTTP Verb = **GET**

3. Press the "Generate from SQL" button.The "Generate Method from SQL Statement" appears.

4. In the "Return Structure Name" field, enter **MyTourStructure**.

5. On the SQL Statements tab, click in the record for the GET_TOURS SQL statement.

The SQL code is now in view in the box on the right. Check that the Correct flag is set to Yes.

6. Press the Generate button.

In the REST Services window or tab, values for Signature, Implementation and Parameters are generated.In the Catalog on the left-hand side, a Structure with name MyTourStructure is offered for inspection.

7. The generated return parameter of the REST method is a structure that may only accommodate a single item. In order to return multiple records, you must use arrays of structures that are able to receive a collection of items. The syntax is:

```
structure[]
```

which, for the example, results in the array data type:

```
MyTourStructure[]
```

Change the Implementation of the method so that it reads:

```
MyTourStructure[] result = (MyTourStructure[])sql( MyTourStructure[].class, "GET_TOURS" , new Object[]{ min, max } );
```

Change the Type of the return parameter to :

```
MyTourStructure[]
```

## Publishing the solution

1. Choose Define, Servers, and retrieve the record of the Server where you expose the service.

2. With input focus on this record, choose Publish, Publish and Restart from the menu.

## Testing the implementation

1. Open a Google Chrome browser window, search the download site for the “POSTMAN – REST Client” Google extension, and download it to your browser.

Once installed, this extension can be opened easily from a new Google Chrome browser tab. To do this, click the standard “Apps” button on the Favorites bar, then click the POSTMAN item in the middle of the screen.

2. Open POSTMAN, and specify the following URL:

```
http://host-name:port-number/service-uri/method-uri;variable operator value[; variable operator value...]
```

making sure the URL does not contain any spaces. For example:

```
http://localhost:8090/mycustomservice/Tours;min=1;max=3
```

By default when generating a REST method from a SQL Statement, setting the boundary values is implemented via matrix parameters. See " Designing Input Parameters " for details.

3. Check that your request is about to use the GET protocol (this is the default, displayed to the right of the URL).

4. Press the Send button.

See that the requested subset of tour records is retrieved and displayed in the lower pane.

 