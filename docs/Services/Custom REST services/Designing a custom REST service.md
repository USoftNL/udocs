# Designing a custom REST service

To design a REST service properly, you need to analyse the components involved in calling it.

## Request and response events

The principal stages in the process of using a REST service are the initial client **request** and a server **response.** As in computing generally, the **response** can be a normal message or, if something goes wrong, it can be a response with the status of an **error:**

![](/api/Services/Custom%20REST%20services/assets/9dd171e9-1600-438f-a0b6-846b4da36465.png)

## Input and output of a service call

When a REST service is called, the input of the automated process is the request (or is contained in the request).

If the main purpose of the call is to retrieve data, the output is the response.

If the main purpose of the call is to have the Rules Engine add, manipulate or delete data, then the output consists primarily of the database action(s) performed by the Rules Engine. The response serves as a confirmation that this action was successful, or feedback about errors if something went wrong.

## Elements of a REST service facility

This section identifies in general terms all the relevant components of a USoft REST service facility.

A REST service is always called by submitting a **request URL** to a browser.A request URL is a single string of characters made up of a series of mandatory and optional elements, in a way that is prescribed by W3C's URL standard.

A request URL always, explicitly or implicitly, calls a method of a USoft REST service. It is often necessary to provide additional information to the method you are calling. This may be done by having clients add elements to the request URL itself, but optionally they can be given the possibility of submitting a request message*.* Such a message may be written in XML or in JSON format (or a choice of either), depending on what the REST method says it can handle.

Request URLs use the HTTP protocol, in which it is possible to set HTTP Headers that act as variable settings for a series of subsequent commands. For this reason, HTTP Headers are potentially an additional way of letting clients specify input information.

![](/api/Services/Custom%20REST%20services/assets/945b4959-2927-4807-bcae-0f43b27256ad.png)

When a USoft REST service calls the Rules Engine, it typically passes pieces of information that are variable, and thereby specific to the individual call: one or more input parameters. The most typical uses of input parameters in a USoft context are to provide either key values or input values. Key values identify WHICH information the client needs to get or set in the database. They are typically used in WHERE clauses of  the Rules Engine's SQL statements. Input values are raw data for data manipulation by the Rules Engine. They are typically used in SET or VALUES clauses of the Rules Engine's SQL statements.

The principal action of the Rules Engine itself is either to query or manipulate data in the RDBMS. The distinctive feature of the Rules Engine is that it performs this action SUBJECT TO BUSINESS RULES. These business rules may cause the Rules Engine to transform data before passing it to the RDBMS, or to refuse duty, even if the request is otherwise well-defined.

Depending on what the Rules Engine has been asked to do, it typically returns queried data to the caller or (if its main function was to manipulate data) it just passes response values such as an OK message, or some other short feedback on how the execution of the command went. A special case is when the command is deemed to be unfulfilled: cases identified as failures or errors. In this case the Rules Engine is hopefully programmed to return a useful error message.

Because the communication with the service uses the HTTP protocol, the service will return an HTTP status code as a standard element of the response to the client. In addition, in the same way that requests may or may not contain a request message coded in XML or JSON, a service may or may not return a response message coded in XML or JSON.

Next step

Defining a REST service