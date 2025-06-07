---
id: Defining_custom_SOAP_methods
---

# Defining custom SOAP methods

A client can only successfully call a SOAP service by calling a SOAP method. A SOAP method is one precise task that the service offers to its clients. Therefore, when you create a SOAP service, you must also create one or more SOAP methods. Declare each method on the Methods tab of your SOAP service by providing values for the method properties listed below.

You can have initial code generated on the basis of SQL statements. This involves automatically generating the method's Signature, Implementation, and Parameters (as appropriate).

*Example*

A SOAP service offers the possibility to add extra participants to an existing booking for a trip. A user wants to add 2 new participants to the reservation with ID 154.

The request URL is:

```
http://localhost:8090/mysoapservice
```

The XML message is:

```xml
<Reservation id=”154”>
  <Participants>
    <Participant first_name=”Albert” last_name=”SMITH”>
      <Address street=”BROADWAY 35” city=”BOSTON” country=”US” area_code=”MA 02215” gender=”M”/>
    </Participant>
    <Participant first_name=”Albert” last_name=”SMITH”>
      <Address street=”BROADWAY 35” city=”BOSTON” country=”US” area_code=”MA 02215” gender=”M”/>
    </Participant>
  </Participants>
</Reservation>
```

## Method name

Each method must have a Method Name that is unique within the SOAP service it belongs to. Each method corresponds to a precise task that the service offers to perform.

## Signature

A method’s signature is the part of a method declaration. It is the combination of the method name and the parameter list.

## Implementation

A method's Implementation is the body code that is actually executed when a service client executes a service call.

## Parameters

A method's Parameter(s) (as appropriate) specify the names and datatypes of information that is passed to the method and that the method passes back as a result.

## Next steps

You are now ready to test and debug your SOAP service. Remember to re-publish the service each time you decide to make changes to the code.