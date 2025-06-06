---
id: Defining_custom_REST_response_messages
---

# Defining custom REST response messages

Many REST methods require response messages to be passed to the client in addition to an HTTP status code that is always a default but very limited way of reporting back on how a service call was processed.

To indicate the type of response message produced by a REST method, you can declare any available media type in the Produces attribute of the method. USoft Service Definer offers automated serialisation only for the 'text/xml' and 'application/json' media types. See Structures for details.

USoft Service Definer generates the design of REST response messages automatically on the basis of SQL. See " Generating REST Services from SQL " for details.