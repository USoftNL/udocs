# FORMULA()

In action statement syntax (i.e. in places where SQL syntax is not expected), the FORMULA() application method subjects values to operations that require SQL evaluation.

Use FORMULA() outside SQL, i.e. in action statement syntax, to:

- Subject values to scalar SQL functions such as ROUND(), SUBSTR() and so on.
- Subject numerical values to complex mathematical operations.
- Concatenate string values.

The FORMULA() method is an embedded action statement that returns a string value to the embedding action statement. It takes string parameters that are either surrounded by single quotes, or represented by embedded action statements returning a string value.

You can use any SQL syntax supported by your database vendor. To keep your USoft application portable between databases, however, you should adhere to standards. This is particularly a concern when calling SQL functions. USoft converts certain key SQL functions automatically between databases. Others are database-specific. Please refer to USoft Definer Help for details.

In the Object Activator, a special Formula button helps you write FORMULA() expressions more easily.

Other ways of using SQL where action statements are expected are to call the SqlScript() method, or to call ActionDecision() and retrieve data in the Decision SQL. Use SqlScript() to manipulate data in database tables, and Decisions to retrieve data from database tables.

*Example 1*

This example reads an on-screen file name value currently held by a base column control, and concatenates it with a .TXT file name extension. The file name is a string value returned by an embedded action statement. The file extension is a hard-coded string.

The first parameter represents the SQL expression in which one or more values take part. The second, third, etc. parameters represent the values themselves. The first parameter uses placeholders (:1, :2 and so on) to position the values within the SQL expression.

```
FORMULA(':1 || :2',query.file_name(),'.TXT')
```

*Example 2*

This example reads an on-screen email address value currently held by a base column control, strips it down to the domain name (the part of the address after the '@' symbol), and prefixes it with the text "Domain =".

```
FORMULA(':1 || SUBSTR(:2,INSTR(:2,:3)+1)',
'Domain = ', query.email(), '@')

```

The resulting return value could be used in a message:

```
MessageInformation(
   FORMULA(
      ':1 || SUBSTR(:2,INSTR(:2,:3)+1)'
   ,  'Domain = '
   ,  query.email()
   , '@'
   )
)

```

*Example 3*

A decision gets a total and in the Yes Action, composes a message that uses this total:

*Decision SQL*

```
SELECT   SUM( salary )
FROM     emp
WHERE    deptno = :DEPTNO

```

*Yes Action*

```
MessageInformation(
  FORMULA(
     ':1 || :2'
  ,  'Total salary for this department is '
  ,  :1
  )
)

```

*Example 4*

This example shows the use of FORMULA in an action script to calculate a date, and illustrates some guidelines to calculate a date using FORMULA:

- Explicitly use TO_DATE to format the date in USoft's standard IO format, then calculate the date using an argument
- Afterwards, use TO_CHAR to format the date back as you wish

```
QueryDefine(  )
query.start_date( FORMULA( ''>'||TO_CHAR(TO_DATE(:1,'YYYY/MMDDHH24MISS'),'DD-MM-YYYY')',  myStartDate() ) )
query.return_date( FORMULA( ''<'||TO_CHAR(TO_DATE(:1,'YYYY/MMDDHH24MISS')+:2,'DD-MM-YYYY')',  myStartDate(),  myNumberOfDays() ) )
QueryExecute(  )

```

Refer to Action Example 9 to view this example in its full context.