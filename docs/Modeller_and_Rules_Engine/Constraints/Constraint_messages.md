---
id: Constraint_messages
---

# Constraint messages

In a domain constraint and in a table constraint, you can specify a **Message** in natural language, eg., in English. Such a message is destined for your end user and is presented in an interactive dialog if the constraint is effective.

## Errors and warnings

In *restrictive* constraints it is customary to specify a message. The runtime message is presented as a message of type Error, because it occurs at a time when processing is blocked.

In *productive* constraints it is not customary to specify a message. If you do specify a message, at runtime it is presented as a message of type Warning.

You can change a restrictive constraint into a warning constraint or even into a constraint that gives an informative message only.

*Example*

1. Define a new message category, and do not select the System check box:

|        |        |
|--------|--------|
|Category:|Constraint Warning|



 

2. Define a new system message:

|        |        |
|--------|--------|
|Code:   |1       |
|Category:|Travel Agency Message|
|Name:   |UNSTABLE_DESTINATION|
|Message:|This destination is currently considered an unstable region.|
|Parameter:|Destination|
|Seqno:  |1       |



 

3. Define a constraint:

|        |        |
|--------|--------|
|Constraint Name:|WARNING_UNSTABLE_DESTINATION|
|Sql Statement:|<pre><code class="language-sql">INVOKE    RulesEngine.MessageLanguage<br/>WITH<br/>SELECT    'Travel Agency Message'<br/>,         'UNSTABLE_DESTINATION'<br/>,         'WARNING'<br/>FROM      tour t<br/>WHERE     t.destination IN <br/>( <br/>     SELECT     u.destination<br/>     FROM       unstable_destination u<br/>)</code></pre><p> </p>|



To product an informative message instead of a warning message, specify 'INFORMATION' instead of 'WARNING' .

Do not specify a constraint message: the component takes care of the message.

## Translated messages

USoft Definer has a Language module. This allows you to localise your application. An important part of this localisation is that you can optionally specify message translations, so that the runtime user can automatically get the message in her own language.

## Variable constraint messages

You can have variable elements in your constraint messages. This allows you to produce error messages and warning messages that are more informative to your end user.

Variable elements in constraint messages are marked by angle brackets (\<>).

The following table lists all supported constraint variables that you can use in constraint messages.

|**Constraint type**|**Constraint variables**|
|--------|--------|
|SELECT  |<p>If an expression in the SELECT clause of a constraint has an alias, then the following variable can be used:</p><p>- alias.value<br/></p><p>If this expression is a column then the following variables can also be used:</p><p>- alias.prompt<br/>- alias.columnName<br/>- alias.tableName<br/>- alias.objectName<br/>- alias.objectNamePlural<br/></p><p>If the expression is a column without an alias, then the following variables can be used:</p><p>- table.column.value<br/>- table.column.prompt<br/>- table.column.columnName<br/>- table.column.tableName<br/>- table.column.objectName<br/>- table.column.objectNamePlural<br/></p><p>where "table" is the table name or alias, and "column"**is the column name.</p><p>Expressions in the SELECT clause without an alias that are not a column, can not be referred to in the message.</p><p>It is not possible to refer to columns mentioned in the SELECT statement of a subquery of a constraint.</p>|
|INSERT  |For all columns of the record inserted, the same variables can be used as for columns in a select list.If the constraint statement is an INSERT INTO... SELECT statement, you can also use the variables from this SELECT statement, like in a SELECT constraint.|
|DELETE  |<p>For all columns of the table from which records are deleted, the same variables can be used as for SELECT or INSERT constraints, except for the value parameter:</p><p>- table.column.before<br/></p>|
|UPDATE  |<p>For all columns of the updated table, the same variables can be used as for SELECT or INSERT constraints. In addition to this:</p><p>- table.column.before<br/></p><p>If the constraint statement has the form:</p><pre><code class="language-sql">UPDATE ...<br/>SET ...    =  <br/>(<br/>    SELECT ... <br/>)</code></pre><p>you can also use the variables from this SELECT statement, like in a SELECT constraint.</p>|
|DOMAIN  |<p>For domain constraints the following variables can be used:</p><p>- value<br/>- before (only for productive domain constraints)<br/></p><p>For domain constraints, the following meta information is variable information that is substituted with the information of the column to which the domain constraint applies:</p><p>- Prompt<br/>- ColumnName<br/>- TableName<br/>- ObjectName<br/>- ObjectNamePlural<br/></p>|
|INVOKE  |<p>For constraints with an INVOKE statement, the values of Return- and Out-parameters of methods can be used:</p><p>- *component_name.method.parameter.value*<br/></p>|



A productive constraint can manipulate more than one record at a time. Since only one constraint message is displayed each time a constraint is evaluated, referring to a particular record in a constraint message is not possible.

If variable constraint messages are used for a productive constraint, only the values for the last manipulated record are displayed in the message.

## Variable constraint message: Example 1

In the Travel Agency, the business rule: "Guides must have a bank account" is implemented by a restrictive, single-record constraint:

```
SELECT    first_name, last_name
FROM      person
WHERE     guide = 'Y'
AND       bank_account IS NULL
```

Because the first_name and last_name columns are specified in the SELECT clause, you now can specify the message:

```
<person.first_name.value> <person.last_name.value> is a guide and must have a bank account.
```

The error message displayed will be:

```
"John Smith is a guide and must have a bank account".
```

You can also refer to column values via an alias name if it is available.

## Variable constraint message: Example 2

In the Travel Agency, the business rule: "A guide cannot guide more than one tour at the same time" is implemented by a restrictive, multi-record constraint:

```
SELECT    g.first_name     First
,         g.family_name    Last
,         s1.destination
,         s1.start_date
,         s1.return_date
,         s2.destination
,         s2.start_date
,         s2.return_date
FROM      schedtour s1
,         schedtour s2
,         guide g
WHERE     s1.guide = s2.guide
AND       s1.guide = g.person_id
AND       s1.schedtour_id != s2.schedtour_id
AND       s1.start_date BETWEEN s2.start_date AND s2.return_date
```

Because of the columns specified in the SELECT clause, you can specify the message:

```
<First.value> <Last.value> currently guides the scheduled tours to:
<s1.destination.value>, from <s1.start_date.value> until <s1.return_date.value>, and to
<s2.destination.value>, from <s2.start_date.value> until <s2.return_date.value>.
These scheduled tours coincide. Please decide what to do.
```

The error message displayed might be:

```
"John Smith currently guides the scheduled tours to:
AUSTRALIA, from May 7th 2000 until June 1st 2000, and to
INDONESIA, from May 28th 2000 until Jun 21st 2000.
These scheduled tours coincide. Please decide what to do".
```

You can also use variable constraint messages in productive constraints. For UPDATE constraints you can refer to columns mentioned in the SET clause and in the SELECT clause (if any).

## Variable constraint message: Example 3

In the Travel Agency, the business rule: "The return date of a scheduled tour must match the preset duration of the tour" is implemented by a productive constraint:

```
UPDATE    schedtour st
SET       st.return_date =
(
    SELECT    st.start_date + t.num_days - 1
    FROM      tour t
    WHERE     t.destination = st.destination
    AND       t.tour_type = st.tour_type
)
```

For this constraint, you may specify the message:

```
The scheduled tour to <st.destination.value> on <st.start_date.value> ends on <st.return_date.value>.
```

This will lead to an information message at run-time.

## Variable constraint message: Example 4

For transitional constraints, you may want to refer to the old values:

```
SELECT    p.first_name
,         p.last_name
,         OLD( p.discount )    old_discount
FROM      person p
WHERE     discount > OLD( discount ) + 5
```

For this constraint, you can specify the message:

```
The personal discount for <p.first_name.value> <p.last_name.value> currently is <old_discount.value> %.
This percentage must not increase by more than 5% at a time.
```

## Variable constraint message: Example 5

It is also possible to refer to object names and column prompts in constraint messages.:

```
SELECT     o.id
,          c.name
,          ABS( c.credit )   debt
FROM       order o
,          customer c
WHERE      o.cust_id = c.id
AND        c.credit < 0
```

For this constraint, you can specify the message:

```
<o.id.objectName> <o.id.value> is rejected. <c.name.prompt> <c.name.value> has an outstanding debt of <debt.value> US dollars.
```

The message displayed might for instance be:

```
"Order 12455 is rejected. Customer Jones has an outstanding debt of 12,364.12 US dollars".
```

Although meta information about objectName and Prompt is constant, the maintainability of the messages increases when using this mechanism. Hence, changing a prompt name of a column will automatically have effect on the constraint messages in which this prompt is used. Only meta information defined in the Definer can be used.

For Domain Constraints object names and column prompts are useful, since this is variable information and there can be more than one column based on the same domain.

## Variable constraint message: Example 6

Suppose there is a PERCENTAGE domain, and a business rule that states: "All percentages must be rounded to the nearest multiple of 0.5". This business rule has been implemented by a domain constraint, of which the condition reads:

```
MOD( DOMAIN * 2, 1 ) != 0
```

And the correction reads:

```
ROUND( DOMAIN * 2 ) / 2
```

For this domain constraint, you may specify the message:

```
The <prompt> of this <objectName> has been rounded to the nearest multiple of 0.5
```

This will lead to an information message at run-time, for example:

```
"The Discount of this Person has been rounded to the nearest multiple of 0.5", or "The Group discount percentage of this Reservation has been rounded to the nearest multiple of 0.5".
```

 