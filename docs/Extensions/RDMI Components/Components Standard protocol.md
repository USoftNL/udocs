# Components: Standard protocol

The **standard protocol** is the default way of interacting with an RDMI component. The RDMI component is treated as a procedure that you call by (optionally) passing a single set of values as input parameters (if applicable). The input data may consist of hard-coded values or values found in a single row in a table.

The method typically returns a regular return value. In addition, possibly, it returns one or more output parameters.

## How the standard protocol works

When you call a method using the standard protocol through an INVOKE ... WITH SELECT ... statement, the values from the record(s) retrieved by the SELECT (if any) are passed as input parameters to the method.

Such an RDMI call is implemented by going through these steps:

1. Fetch a record from the SELECT.

2. Create the RDMI component.

3. Execute the method and catch any Out parameters. Return the record to the calling application.

4. Destroy the component.

5. Fetch the next record from the SELECT, etc.

In this process, the component is destroyed and re-created for each record in the SELECT.

If the INVOKE clause is used without a WITH clause, of if you call the component using function call syntax, then you only have a single set of input values. The loop of steps 1 and 5 does not apply. Steps 2, 3 and 4 apply only once.