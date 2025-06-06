---
id: Defining_custom_REST_methods
---

# Defining custom REST methods

The only way for a client to access a REST service is by calling a *REST method*. A REST method is one precise task that the service offers to its clients. Therefore, when you define a custom REST service, you must also define one or more REST methods. Declare each method on the Methods tab of your custom REST service by providing values for the method properties listed below.

You can have initial code generated on the basis of SQL statements. This involves automatically generating the method's Signature, Implementation, and Parameters (as appropriate). For an example, go to help topic " Example: a REST service for retrieving data ".

## Method Name

Each method must have a Method Name that is unique within the REST service it belongs to. Each method corresponds to a precise task that the service offers to perform.

## Relative URI Path

A REST method must have a Relative URI Path starting with a slash ('/'). It is customary to name the URI Path after the resource being queried or manipulated, for example, **/Person**. Multiple methods within the same REST service may share the same Relative URI Path as long as they have different HTTP Verbs.

## REST HTTP Verb

Because REST uses the underlying HTTP protocol, each REST method is associated with one of the (5) specific HTTP commands or verbs listed below. As the listing shows, each verb generally maps to one of the command verbs found in SQL's Data Manipulation Language:

|**REST HTTP Verb**|**SQL equivalent**|**Use case**|
|--------|--------|--------|
|GET     |SELECT  |Query, retrieve data|
|POST    |INSERT  |Add new data|
|PUT     |UPDATE  |Change existing data, in the sense of changing a REST resource as a whole|
|DELETE  |DELETE  |Drop existing data|
|PATCH   |UPDATE  |Change existing data, in the sense of changing only a part of a REST resource|



*Example*

A REST service offers the possibility to alter the information of a person.A user wants to change the address of a person with the PERSON_ID 154. The request URL is:

```
http://localhost:8090/myservice/myconnection/Person;PERSON_ID=154;
```

The user or software issuing the request must be instructed to specify the HTTP method PUT or PATCH depending on the type of change. If your update is a major update, and you want to replace or create the resource identified by PERSON_ID 154, you use PUT. If you have a minor change to the resource identified by PERSON_ID 154, you use PATCH. This method requires content in the body, which could look like this (if the Content Type is "text-xml"):

```
<PERSON PERSON_ID="154" ADDRESS="Carlton Street 4"/>
```

Or it could look like this, if the Content Type is "application/json":

```
{"PERSON_ID" : "154", "ADDRESS" : "Carlton Street 4"}
```

Changing the address is considered a minor change, so the most logical HTTP Verb to associate this functionality with is **PATCH**. If you are interested in an implementation example, please take a look at Example: a REST Service for manipulating data (UPDATE)

## Signature

A method's Signature is the header code that is actually called when a service client browses the method's Relative URI Path using its HTTP verb.

## Implementation

A method's Implementation is the body code that is actually called when a service client browses the method's Relative URI Path using its HTTP verb.

## Parameters

A method's Parameter(s) (as appropriate) specify the names and datatypes of information that is passed to the method and that the method passes back as a result.

## Initial code

In USoft Service Definer, you can have REST methods generated on the basis of SQL statements. This involves automatically generating the method's Signature, Implementation, and Parameters (as appropriate). For an example, go to Example: a REST service for retrieving data.

## Next steps

You are now ready to test and debug your custom REST service. Remember to re-publish the service each time you decide to make changes to the code.