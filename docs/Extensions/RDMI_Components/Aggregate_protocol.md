---
id: Aggregate_protocol
---

# Aggregate protocol

The **aggregate protocol** is a way of interacting with an RDMI component that involves passing a multi-row data set to the component and letting it return a single-record or single-value result. With the aggregate protocol you can:

- Produce a Word document, Excel spreadsheet, or CSV file by concatenating data in a multi-row data set.

- Feed a multi-row data set to an optimisation algorithm that produces a single value as its outcome, then continue processing by catching and processing that value.

### How the aggregate protocol works

First you need to make sure your RDMI component has one or more associated aggregate protocols. Each protocol designates one method as its EXE method, and another method as its FETCH method.

Next, instead of calling a method of the component directly, you call an aggregate protocol name. An INVOKE ... WITH SELECT ... statement is processed as follows if the INVOKE calls an aggregate protocol name:

1. Execute the SELECT statement.

2. Create an instance of the component.

3. Fetch a record from the query result of the SELECT.

4. Execute the protocol's EXE method, using as input parameters the output expression from the SELECT (the output expression in the fetched record).

5. Repeat Steps 3 and 4 until the component returns no further records, that is, until the FETCH method reports that there are no more records.

6. Execute the protocol's FETCH method and catch the Out parameter. Return the record to the caller.

7. Destroy the instance of the component if the component is stateless.

### How to call a component using the aggregate protocol

By default, calls to component methods use the standard protocol. If you want to use the aggregate protocol instead:

- Identify one method as being the EXE method of an aggregate protocol.
- Identify another method as being the FETCH method of that aggregate protocol.
- In the INVOKE clause, use the protocol name rather than a method name.

To specify methods as being the EXE and FETCH methods of a aggregate protocol:

1. First code the RDMI component and its methods. Save/commit.

2. Make sure the return parameters of the methods you want to associate with the protocol are Long Integer (you will be warned if they are not.) When coding methods for the aggregate protocol (as for the query protocol), you must return the following standard integer values to express that a record is or is not found. See the example.

|        |        |
|--------|--------|
|-1      |Error.  |
|0       |No record returned.|
|1       |Record returned.|



3. In the info window where you coded the RDMI component, click the Aggregate Protocol Associations tab page.

4. Enter a unique name for the protocol. This name will be used in the INVOKE string instead of the method name.

5. Enter the name of the EXE method in the Execute Method field.

6. Enter the name of the FETCH method in the Fetch Method field.

7. Save/commit.

 