---
id: How_many_times_a_called_component_is_executed
---

# How many times a called component is executed?

The INVOKE clause is a SQL statement. It is executed under exactly the same conditions as a SQL statement without INVOKE.

How many times a component is invoked depends on a combination of things, especially on the SQL syntax construction, the context in which it is executed, and the protocol used. The application developer needs to be aware that not all combinations of input and output are appropriate in all contexts.

- If the INVOKE clause is used independently, the component is invoked once.
- In the INVOKE ... WITH SELECT ... construction, INVOKE is executed as many times as there are records in the result table of the SELECT statement.
- In the INVOKE ... WITH INVOKE *component.method()* construct, the first INVOKE is invoked once.
- In the INVOKE ... WITH INVOKE *component*.*query-protocol()* construction, the first INVOKE is executed once for every record returned by the query protocol.

## Example 1: INVOKE in a restrictive constraint

Suppose, the SQL statement of a constraint has Syntax

```sql
INVOKE    component.method WITH
SELECT    output-list
FROM      table
WHERE     condition

```

This is a single-record constraint. The constraint is evaluated as a result of the user manipulating a specific record. The component is invoked only for this record, at the time the record is stored. The external component is therefore called at the time the record is stored (if at all).

First the WHERE clause is evaluated:

- If there is no record that satisfies *condition*, there are no result records to be fed to the component. The component is not invoked.
- If exactly one record satisfies *condition*, there is 1 SELECTed record to be fed to the component so the component is invoked once.
- If multiple records satisfy *condition,* the component is invoked as many times as there are records in the query result. Each time, the value(s) in the output list of the individual record are passed to the component.

If the component ends up being called one or more times:

- For each call, if the component method returns no value, the constraint does not raise a violation.
- If the component method returns a value, the invocation must be associated with the query protocol, and the component will either return 1, 0, or -1. The Rules Engine interprets this as "row exists", "row does not exist" or "error". Notice that this is very much the same sort of test as the WHERE clause. In this example, two filters must be passed and the statement can be thought of as:

```sql
SELECT        output-list
FROM          table
WHERE         condition-X-evaluated-by-RDMBS
AND           condition-Y-evaluated-by-external-component

```

## Example 2: INVOKE for doing record-oriented inserts

The following statement can be issued from SQL Command to insert into *column* a constant provided or calculated by an external component:

```sql
UPDATE    table
SET       column =
(
     INVOKE component.method
)
WHERE    condition

```

The component is invoked once for each record that satisfies *condition*.

## Example 3: INVOKE for writing to a log table

In an off-line batch job, a log table is filled with data on the basis of records in an on-line entry table that have received the 'CHANGED' status as a result of on-line manipulation. The component performs a calculation or other operation involving non-SQL data sources. The component could well use the query protocol and return multiple rows for each input row.

```sql
INSERT INTO   log-table
(
  column1
, column2 
)
INVOKE        component.method WITH
SELECT        column1, column2
FROM          online-entry-table
WHERE         status = 'CHANGED'

```

In this example the component is invoked as many times as there are records in the on-line entry table that have the 'CHANGED' flag. The number of output records depends on the external component definition. The moment of execution depends on the execution of the batch job.

## Example 4: INVOKE in domain constraint

This example shows INVOKE in a domain constraint. This is executed when the domain constraint is evaluated, that is to say, at field-validation time.

Condition:

```
'OK' = MyComponent.CheckBankaccount( DOMAIN )

```

Correction:

```
Calculus.CheckSum( DOMAIN)

```

Correction:

```
( SELECT Calculus.CheckSum( t.value ) FROM check_table t WHERE t.id = DOMAIN )

```

##  

##  