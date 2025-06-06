---
id: Calling_a_component
---

# Calling a component

## Where to call a component from?

You can call a component from most USoft contexts where SELECT is permitted:

- Constraint SQL
- SQL in SqlScript()
- SQL Command dialog
- SQL in USoft Batch Server
- Decision SQL
- Remote Rules Service API

The INVOKE clause can NOT be used in the following contexts:

- Graphical SQL Definer

In Extra Query statements in the Windows Designer, the INVOKE clause may only be used in the top-level SELECT output list and in subqueries.

## How to call the component?

You can call an RDMI component from a USoft SQL context by using one of two constructs:

- The USoft-proprietary INVOKE keyword.
- Function call syntax.

Either way, the RDMI call may appear in a number of different contexts, for example:

- As an independent statement.
- In a nested manner, in association with another INVOKE clause.
- In association with a SELECT clause.
- In a WHERE condition.
- In the output list of a SELECT statement.
- In a subquery.

In general, there are two different ways to access a component's functionality:

- By calling a *method* of the component.
- By calling a *query protocol* of the component.

The combination of all these options gives you many different constructs to choose from. This help topic shows some possibilities without being exhaustive.

### Independent INVOKE statements

A component method or query protocol that requires no input parameters can be called with a simple INVOKE one-liner:

```sql
INVOKE    component.method

```

To pass one or more parameters from a query result to the component method, combine INVOKE...WITH and SELECT... FROM...:

```sql
INVOKE    component.method WITH
SELECT    parameter(s)FROM      ...WHERE     ...

```

To pass one or more parameters that you do not need to query the database for, you can omit FROM:

```sql
INVOKE    component.method WITH
SELECT    parameter(s)

```

As an alternative, you can use so-called *function call syntax* in this case:

```sql
SELECT    component.method( parameter(s) )

```

You can call a component 1 and pass the return value as an input parameter in a call to a component 2:

```sql
INVOKE    component2.method WITH
INVOKE    component1.method WITH ...

```

### INVOKE in a SELECT output list

You can use INVOKE as an expression in the output list of a SELECT statement. This makes it possible to retrieve, in a single SELECT statement, values assembled from the combination of a database query and a component call:

```sql
SELECT    column
,         ( INVOKE     component1.method )
,         ( INVOKE     component2.method WITH
            SELECT     column1
            ,          column2
            ,          ...
          )
FROM      table
WHERE     ...
GROUP BY  ...
HAVING    ...
ORDER BY  ...
```

This syntax is the same as used by database vendors for supporting subqueries in the SELECT output list.

An INVOKE in a SELECT output list may not return more than one record; otherwise, it's an error.

By default, an INVOKE returns a string with maximum size of 32K. You can use the TO_CLOB() SQL function to tell the INVOKE to return the long string correctly without it being truncated.

### INVOKE as a subquery in a SET or WHERE clause

You can use INVOKE in a similar way as a SELECT subquery in a SET or WHERE clause. The result of the component call is passed to the embedding SQL statement as a value.

The result of an INVOKE in this context must be a single scalar value. If INVOKE turns out to have an empty result at runtime, depending on the case, this may or may not be an error. If INVOKE yields an array of multiple values, it's an error.

If a SELECT query that passes its value to an embedding INVOKE yields 0 rows, it passes the NULL value to the component call.

*Example 1*

```sql
SELECT    '' violation
FROM      department
WHERE     budget > 
( 
    INVOKE SAP.MaxBudget
)

```

*Example 2*

This statement displays all the flights that are scheduled to 'VENICE' and for which the scheduled departure time lies after a certain time. The time is read real-time using a SOAP service.

```sql
SELECT     s.scheduled_departure_time
,          k.flight_nr
,          k.flight_name
FROM       scheduled_flights s
,          kl_flight_info k
WHERE      s.flight_id = k.id
AND        s.destination = 'VENICE'
AND        s.scheduled_departure_time > 
(
     INVOKE      KLSoapService.GetDepartureTime WITH
     SELECT      k2.klm_flight_nr
     FROM        klm_flight_info k2
     WHERE       k2.id = 21
)
ORDER BY   scheduled_departure_time
```

### Function call syntax

Function call syntax for RDMI components resembles functions calls from programming languages and allows you to work without the INVOKE keyword:

```sql
SELECT      component1.method()
,           component2.method( column1, column2 )
FROM        table1
```

This is equivalent to:

```sql
SELECT 
      ( INVOKE component1.method )
,     ( INVOKE component2.method WITH 
        SELECT    column1
        ,         column2
      )
FROM  table1
```

You can also use function call syntax in a WHERE clause:

```sql
SELECT   ...
FROM     ...
WHERE    condition = ( SELECT  component1.method() )
```

You CANNOT pass the outcome of RDMI function call syntax to a mathematical operator or a SQL function. The following are errors:

```sql
SELECT column1 + component1.method()

SELECT UPPER( component1.method() )
```