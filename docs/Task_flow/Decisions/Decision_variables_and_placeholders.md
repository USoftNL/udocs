---
id: Decision_variables_and_placeholders
---

# Decision variables and placeholders

When you call a Decision, you can pass values to it as input parameters. In the Decision itself, you can pass values retrieved by Decision SQL to the decision's Yes Action and No Action scripts.

## Passing values to decisions as input parameters

When you call a Decision, you can pass values to it as the second, third... argument of the [ActionDecision()](/docs/Task_flow/Action_Language_reference_A-C/ActionDecision.md)****action:

```
ActionDecision( 'MY_DECISION', 'Table1', 776 )

```

Each value passed is referenceable by a numbered placeholder ( :1, :2 ...) in the decision's Decision SQL:

```sql
SELECT   ...
WHERE    table_name = :1
AND      id = :2
```

Before the SQL statement is executed, each :1 placeholder is substituted by the value passed in first place (in the example, the **Table1** string), each :2 placeholder by the next value (in the example, the number **776**), and so on.

## Passing values between Decision SQL and Yes Action

In Decision Yes Actions you can refer to values retrieved by the Decision SQL, again by using numbered placeholders.

(Decision SQL:)

```sql
SELECT    value1
,         value2 ...

```

(Yes Action:)

```
MessageInformation( :1 )
MessageInformation( :2 )
```

If you use column aliases in the SELECT list, you can alternatively refer by the aliases:

(Decision SQL:)

```sql
SELECT    value1 "ALIAS_1"
,         value2 "ALIAS_2"...

```

(Yes Action:)

```
MessageInformation( :ALIAS_1 )
MessageInformation( :ALIAS_2 )
```

## Referring to input parameter values in No Action

It does not make sense to refer to values retrieved by Decision SQL in the No Action, since No Action is reached only if the query does not retrieve any records.

Numbered placeholders in No Actions refer to the input parameters with which the decision was called, in the order in which they were passed. They work the same as numbered placeholders in the Decision SQL.

## Passing values between Decision SQL and SqlScript()

A popular pattern is to catch outputs from Decision SQL and use them in SqlScript() calls.

----

![](./assets/1dda4eec-2c71-4513-9a53-669f6fa3644f.png)



The [back tick syntax](/docs/Modeller_and_Rules_Engine/SQL_syntax/Host_variables_in_SQL.md) explained here is available from USoft 10.1.1A.

(Decision SQL:)

```sql
SELECT    automation
,         java ...

```

(Yes Action:)

```
SqlScript( 
` UPDATE  appcomponent 
  SET     processed = 'Y'
  WHERE   autom = :1
  AND     java_class = :2`
, :1
, :2
)

```

----

Prior to USoft 10.1.1A, SqlScript() does not itself process the numbered placeholders, so you must cast them to global [named variables](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md). You can do that with ResourceFileUpdate():

(Decision SQL:)

```sql
SELECT    automation
,         java ...

```

(Yes Action:)

```
ResourceFileUpdate( 'global.automation:' || :1 )
ResourceFileUpdate( 'global.java:' || :2 )

SqlScript( 
  UPDATE  appcomponent 
  SET     processed = 'Y'
  WHERE   autom = :"global.automation"
  AND     java_class = :"global.automation"
)

```

In this pattern, the syntax for storing a value in a variable is:

```
ResourceFileUpdate( '*variable-name* : *variable-value*' )

```

The stored value is now named and may be accessed repeatedly by name until it is cleared or reset. The syntax for accessing a stored value is:

```
:"*variable*"

```


:::danger

With this technique, you are effectively creating *global* variables that are available in the entire application session. This is always dangerous because it is hard to know exactly when they are next referred to. Make sure you call each given variable only in 1 place: the 1 Decision Yes Action.

:::

 