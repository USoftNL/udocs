---
id: Calling_a_REST_service_without_committing
---

# Calling a REST service without committing

It is interesting to be able to run input data against the Rules Engine without committing. This allows you to see what WOULD happen to the data IF they were committed.

In a predefined REST service built with the USoft Table Resource functional type, you can add the USoft-specific **X-US-Transaction** custom HTTP header to let clients send data without committing.

If you have written a custom REST service, you can manually implement this custom HTTP header in a similar way.

## The "X-US-Transaction" HTTP header

When calling the service, clients can set the USoft-specific custom HTTP header

**X-US-Transaction**

to indicate the commit behaviour they want. Possible values that clients may pass in this HTTP header are:

|**Value**|**Commit behaviour**|
|--------|--------|
|Rollback|Rules Service will check constraints that are evaluated at Record Store time.Data will NOT be committed.|
|PreCommit|Rules Service will check all constraints.Data will NOT be committed.|
|Commit  |Rules Service will check all constraints and then commit.|



(The commit behaviour with **Commit** is the default behaviour.)

For more information about constraint evaluation times, please go to USoft Definer Help, Rules Engine Guide.

## Implementing X-US-Transaction in custom REST services

In a custom REST service, you can implement the X-US-Transaction custom HTTP header by adding a Parameter:

1. Go to the method for which you want to add the specify-commit-behaviour facility.

2. In the Parameters tab, add a Parameter:

|        |        |
|--------|--------|
|Name    |transaction|
|Type    |String  |
|Annotation|@HeaderParam("X-US-Transaction")|



3. Check the method's Implementation. As an example, here is the Implementation of a method with 2 input parameters ("destination" and "tour_type") and a third Parameter "transaction" that allows the client to specify the commit behaviour:

```language-java
USoftService usoft = new USoftService("*", this.getClass());
usoft.open(therequest);
Integer count = (Integer) usoft.sql(Integer.class, "DROP_TOUR" , new Object[]{ destination, tour_type }, transaction );
usoft.close();

/* return http error 404 if no records deleted */
if(count.intValue() == 0)
  throw new javax.ws.rs.WebApplicationException(404);
```

## Calling the service without committing

Exactly how you call a USoft REST service without committing depends on the calling application. If you use POSTMAN for testing:

1. Before pressing the Send button, first press the Headers button.

A list with 0 or more preset headers appears. There is a column Header on the left and a column Value on the right.

2. On a new line, type:

|        |        |
|--------|--------|
|Header  |X-US-Transaction|
|Value   |PreCommit*|



* or Rollback or Commit, depending on which commit behaviour you want.

3. Press Send.