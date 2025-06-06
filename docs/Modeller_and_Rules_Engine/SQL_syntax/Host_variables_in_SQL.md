---
id: Host_variables_in_SQL
---

# Host variables in SQL



> [!NOTE]
> This article is about **host variables** as part of the [SQL syntax](/docs/Modeller%20and%20Rules%20Engine/SQL%20syntax) that USoft supports.
> Host variables in SQL are a feature of the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

The USoft Action Language allows you to pass values from your application to and from positions in SQL statements. Values are passed by position: **:1** represents the first value passed or retrieved, **:2** the second, and so on.

## Passing values to SqlScript()

----

![](./assets/1dda4eec-2c71-4513-9a53-669f6fa3644f.png)



This option is available from USoft 10.1.1A.

----

In SqlScript() calls, if you surround the SQL script by **back ticks** ( **`** ), you can use numbered placeholders between these back ticks. This syntax is similar to string templates (or string interpolation) in JavaScript/ES6.

In this example, the value held by query.name.value() is substituted at the position of the **:1** placeholder is, and the value held by Variables.Text_Box_1() is substituted at the position of the **:2** placeholder:

```
SqlScript(
`update  tour_programme 
 set     max_age = :2 
 where   destination = :1 
 and     tour_type = 'ISLAND SUNTANNER'`
 ,       query.name.value()
 ,       Variables.Text_Box_1()
)
```

If the first value is the string ‘AUSTRALIA’ and the second value is the integer 35, this is equivalent to:

```
SqlScript(
`update  tour_programme 
 set     max_age = :2 
 where   destination = :1 
 and     tour_type = 'ISLAND SUNTANNER'`
 ,       'AUSTRALIA'
 ,       35
)
```

This is, in turn, equivalent to:

```sql
update  tour_programme 
set     max_age = 35 
where   destination = 'AUSTRALIA' 
and     tour_type = 'ISLAND SUNTANNER'
```

## Passing values to Decision SQL

In ActionDecision() calls, you can pass values and substitute these in Decision SQL at the position of **:1**, **:2** … placeholders:

```
action ActionDecision( 'DECISION_1', 'myvalue' )
```

If the Decision SQL of decision DECISION_1 is:

```sql
SELECT   some_column "some_column"
FROM     some_table
WHERE    some_other_column = :1
```

then calling the decision will result in executing:

```sql
SELECT   some_column "some_column"
FROM     some_table
WHERE    some_other_column = 'myvalue'
```

## Passing values from Decision SQL to SqlScript()

----

![](./assets/1dda4eec-2c71-4513-9a53-669f6fa3644f.png)



This option is available from USoft 10.1.1A.

----

In the Yes Action of a Decision, you can catch output values of the Decision SQL and substitute them in calls to SqlScript(). :1 refers to the first output value in the SELECT list, :2 to the second, and so on.

If the Decision SQL is:

(Decision SQL:)

```sql
SELECT   some_column "some_column"
FROM     some_table
WHERE    . . .
```

then in the Yes Action of the Decision, for each value of “some_column”, you can perform an SQL manipulation that uses the value.

The result of the following example is that in each record that has the "some_column” value in column_B, column_A is set to the value held by 'query.name.value()’, following also the mechanism discussed in the "Passing values to SqlScript()” section earlier in this article:

(Yes Action:)

```
SqlScript(
  `update some_other_table set column_A = :2 where column_B = :1`
, :1
, query.name.value()
)
```

In this context, instead of using numbered placeholders, you can alternatively refer to output columns by column alias:
(Yes Action:)

```
SqlScript(
  `update some_other_table set column_A = :2 where column_B = :1`
, :some_column
, query.name.value()
)
```