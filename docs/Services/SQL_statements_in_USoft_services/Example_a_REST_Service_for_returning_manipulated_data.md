---
id: Example_a_REST_Service_for_returning_manipulated_data
---

# Example: a REST Service for returning manipulated data

In the previous example, you changed the name of a customer that already exists in the database and returned HTTP status code "200 OK" as the sole response.

In this example, you supply the result data as a response. For this purpose, you re-use the "MyPersonNameStructure" Structure from the previous example.

An input parameter is used here that is part of the request URL path. There are alternatives to this: see the help topic on designing input parameters.

## Creating the basic manipulation method

First, create the basic manipulation method. Follow the steps in the previous help topic.

## Generating code for returning the result data

To generate code for the result data, first create a new method as if you were only interested in retrieving customer names on the basis of IDs.

1. In USoft Services Definer, choose Define, SQL Statements from the menu, then create a new SQL Statement record :

|        |        |
|--------|--------|
|Statement name|GET_PERSON_NAMES|
|Application name|TRAVEL  |



 

Statement:

```sql
SELECT    first_name   FirstName
,         family_name  SurName
FROM      person
WHERE     person_id = :id
```

You are re-using the "CustomerDetails" Structure that you already have. This is why you need SQL Aliases that match the Fields of this Structure.

2. Open the REST Services window or tab, retrieve your REST service in it, click on a **new** line in the Methods tab, then click the "Generate from SQL" button.

3. In the "Generate Method from Statement" dialog, fill out these fields:

|        |        |
|--------|--------|
|Method Name|GetPersonNames|
|Relative URI Path|`/PersonNames/{id}`|
|REST HTTP Verb|GET     |
|Produces|text/xml|
|Return Structure Name|MyPersonNameStructure|



 

4. In the SQL Statements tab, select the GET_PERSON_NAMES statement, then click the Generate button.

5. Back in the REST Services window or tab on the Parameter tab for the new method, set the Annotation of the "id" Parameter to

|        |        |
|--------|--------|
|Annotation|@PathParam("id")|



 

6. Publish and Restart the Server where you publish the REST service, and call the new method to check that the response message is what you want.



## Combining the implementations for the UPDATE and SELECT step

1. Find the Implementation of the **GetPersonNames** method. Depending on your patch version this could be something like:

```language-java
MyPersonNameStructure result = (MyPersonNameStructure)sql( MyPersonNameStructure.class, "GET_PERSON_NAMES" , new Object[]{ id } );

/* delete following 2 lines if you want HTT 204 success code in case of an empty recordset */
if(result==null)
   throw new javax.ws.rs.WebApplicationException(404);

return result;
```

2. Copy this code (this entire text) to the clipboard.

3. Go to the Implementation of the **PutPersonNames** method and append the copied text to this code. Depending on your patch version of USoft, the result of this paste action could be something like:

```language-java
Integer count = (Integer) sql(Integer.class, "SET_PERSON_NAMES", new Object[]{ objMyPersonNameStructure, id } );

/* return http error 404 if no records updated */   
if(count.intValue() == 0)
   throw new javax.ws.rs.WebApplicationException(404);

MyPersonNameStructure result = (MyPersonNameStructure)sql( MyPersonNameStructure.class, "GET_PERSON_NAMES" , new Object[]{ id } );

/* delete following 2 lines if you want HTT 204 success code in case of an empty recordset */
if(result==null)
   throw new javax.ws.rs.WebApplicationException(404);

return result;
```

4. Notice that you now have 2 different code snippets dealing with the eventuality that no records were updated. Shorten the code by choosing just one, and erasing the other, so that the end result becomes something like:

```language-java
Integer count = (Integer) sql(Integer.class, "SET_PERSON_NAMES", new Object[]{ objMyPersonNameStructure, id } );

MyPersonNameStructure result = (MyPersonNameStructure)sql( MyPersonNameStructure.class, "GET_PERSON_NAMES" , new Object[]{ id } );

/* delete following 2 lines if you want HTT 204 success code in case of an empty recordset */
if(result==null)
   throw new javax.ws.rs.WebApplicationException(404);

return result;
```

5. For the **PutPersonNames** method, manually add a return parameter in the Parameters tab with the following settings:

|        |        |
|--------|--------|
|Name    |Result  |
|Type    |MyPersonNameStructure|
|Return Parameter|Yes     |


6. Publish and Restart the server where you are publishing your REST service. Test that the REST call of the previous help topic:

```
http://localhost:8090/mycustomservice/PersonNames/17
```

now returns not just the "200 OK" HTTP status code, but also the result data of the manipulation.