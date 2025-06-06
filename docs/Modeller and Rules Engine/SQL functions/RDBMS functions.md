# RDBMS functions

In USoft SQL, in the place of a USoft-supported SQL function, you can call a user-defined RDBMS function by using the RDBMS prefix.

*Syntax*

```sql
RDBMS. { $$RDBMSUSER$$. | $$RDBMSOWNER$$. | } *rdbms-function*( *argument*, ... )

*argument*  ::=  { *expression* | LITERAL *literal-string* }
```

The spelling is case-insensitive, except for literal-string arguments where case matters to the rdbms-function.

By either specifying "$$RDBMSUSER$$.", or by omitting "$$RDBMSUSER$$." and "$$RDBMSOWNER$$." altogether, you call the RDBMS function with name rdbms-function as it is accessible at RDBMS level by the database user with the same name as the USoft application user currently logged on.

By specifying $$RDBMSOWNER$$., you call the RDBMS function with name rdbms-function that is owned by the database user with the same name as the USoft application user currently logged on.

The required rdbms-function must be the name of a function defined in the RDBMS.

Depending on the signature of the function, one or more arguments may or must be specified. If the argument value is passed as a literal string you can prefix it by the LITERAL keyword; see the section below.

*Example*

```sql
UPDATE   schedtour s
SET     s.weighting =
(
    SELECT    RDBMS.LTP( s.price, p.category )
    FROM      person p
    WHERE     p.person_id = s.made_by
)
```

## The LITERAL keyword

If an argument is a literal string preceded by the LITERAL keyword, USoft will pass the contents of the string through to the RDBMS. The following statement:

```sql
rdbms.EXTEND(SYSDATE, LITERAL 'hour to minute')
```

is represented to the RDBMS as:

```sql
EXTEND(SYSDATE, hour to minute)
```

LITERAL can only be used in the arguments of a user-defined RDBMS function, not in other types of function or in standard SQL expressions.

The string following the LITERAL keyword is not analysed by the rules engine. So, if you use column names in the string, the rules engine will not be aware of that. In constraint SQL, a column name preceded by LITERAL will not trigger evaluation of the constraint when a value in the column is manipulated.

If you want to specify a string within the LITERAL syntax you can use sequences of 2 single quotes as escape characters:

```sql
LITERAL 'keyword ''my string'''
```

will be passed to the RDBMS as:

```sql
keyword 'my string'
```

 