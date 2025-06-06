# Defining custom REST request messages

Some REST methods require request messages, or input messages, to be passed to the server in addition to whatever information may be passed in the various elements of a URL request.

For example, it is not practical for a caller to send full contact details of a new customer to a REST service. It is customary in this case to let the caller pass the information in an XML or JSON input message.

To indicate the type of request message accepted, you can declare any available media type in the Accepts attribute of the REST method. USoft Service Definer offers automated serialisation only for the 'text/xml' and 'application/json' media types. See Structures for details.