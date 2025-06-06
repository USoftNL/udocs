---
id: Env
---

# Env




:::note

This article is about the **Env**[Rules Engine property](/docs/Modeller_and_Rules_Engine/Rules_Engine_properties).

:::

## **Env**

The **Env** Rules Engine property may be used to get the value of one of the environment variables listed when you type the set command in a Windows command-line box.

## Getting this property

You can get the current value of an environment variable by executing:

```sql
SELECT RulesEngine.GetProperty( 'Env environment-variable' )
```

This entire statement is case-insensitive, including the property name and the name of the environment variable.

*Example*

```sql
SELECT RulesEngine.GetProperty( 'Env computername' )
```

 