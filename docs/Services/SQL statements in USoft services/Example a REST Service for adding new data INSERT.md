# Example: a REST Service for adding new data (INSERT)

In this example, you add data about a new customer to the database.

This example shows how you can quickly generate a REST service from a SQL statement.

## Defining SQL

1. In the User Application, in SQL Command, write and test a SQL statement that will add a new client, for example:

```sql
INSERT INTO person
(  
   first_name
,  family_name
,  address
,  city
,  country
,  area_code      
)
VALUES
(  
   'Roger'
,  'WINSTON'      
,  'ADDISCOMBE LANE 126E'
,  'WAVERLEY'
,  'UK'
,  '4RY 6FU'
)
```

2. In USoft Services Definer, create a variant of this statement that indicates the REST input parameters. To do this, choose Define, SQL Statements from the menu, then create a SQL Statement record with the following values:

|        |        |
|--------|--------|
|Statement name|ADD_NEW_CLIENT|
|Application name|TRAVEL  |



Statement:

```sql
INSERT INTO person
(  
   first_name
,  family_name
,  address
,  city
,  country
,  area_code      
)
VALUES
(  
   :MyClientStructure.FirstName
,  :MyClientStructure.FamilyName      
,  :MyClientStructure.Address
,  :MyClientStructure.City
,  :MyClientStructure.Country
,  :MyClientStructure.AreaCode
)
```

3. Save work. Click the Check button to have your SQL syntax checked. If it is correct, the Correct = Yes flag is set.

## Generating a REST method based on SQL

1. Define a custom REST service and make sure that this new service is exposed by a Server. For details on how to do these 2 things, step out to help topic " Setting up your own REST service ".

2. On the Methods tab, create a record for the retrieval method:

|        |        |
|--------|--------|
|Method Name|PostClient|
|Relative URI Path|/Clients|
|REST HTTP Verb|POST    |



3. Press the "Generate from SQL" button. The "Generate Method from SQL Statement" appears.

4. On the SQL Statements tab, click in the record for the statement that you want the REST method to be generated from.

The SQL code is now in view in the box on the right. Check that the Correct flag is set to Yes.

5. Press the Generate button.In the REST Services window or tab, values for Signature, Implementation and Parameters are generated.In the Catalog on the left-hand side, a Structure with name MyClientStructure is offered for inspection.

## Publishing the solution

1. Choose Define, Servers, and retrieve the record of the Server where you expose the service.

2. With input focus on this record, choose Publish, Publish and Restart from the menu.

## Testing the implementation

1. Open a Google Chrome browser window, search the download site for the “POSTMAN – REST Client” Google extension, and download it to your browser.

Once installed, this extension can be opened easily from a new Google Chrome browser tab. To do this, click the standard “Apps” button on the Favorites bar, then click the POSTMAN item in the middle of the screen.

2. Open POSTMAN, and specify the following URL:

```
http://<host-name>:<port-number>/<service-uri>/<method-uri>
```

for example:

```
http://localhost:8090/mycustomservice/Clients
```

3. Set the HTTP verb to **POST**.

You are given a form in which to submit a message.

4. Specify that your message is XML, then submit the following message:

```language-xml
<MyClientStructure>
  <FirstName>Roger</FirstName>
  <FamilyName>WINSTON</FamilyName>
  <Address>ADDISCOMBE LANE 126E</Address>
  <City>WAVERLEY</City>
  <Country>UK</Country>
  <AreaCode>4RY 6FU</AreaCode>
</MyClientStructure>
```

5. Press the Send button.

See that HTTP status code "201 Created" is returned as a response. In the User Application, see that a record has been added in the PERSON table.