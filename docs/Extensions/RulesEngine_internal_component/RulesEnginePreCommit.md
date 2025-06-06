---
id: RulesEnginePreCommit
---

# RulesEngine.PreCommit




:::note

This article is about the **PreCommit** method of the [RulesEngine internal component](/docs/Extensions/RulesEngine_internal_component).

:::

## **RulesEngine.PreCommit**

Performs the same checks as the Rules Engine when issuing a commit, but without actually performing the commit.

Returns the string 'OK' if there are no violations. Otherwise, processing depends on the generate-error value.


:::warning

This method can not be called from a constraint.

:::

*Syntax*
 

```sql
SELECT RulesEngine.PreCommit(
  *generate-error*    GenerateError
)

*generate-error*  :=  { No | Yes }
```

The optional *generate-error* determines processing when there are violations. If it is not passed or if it is passed with the 'No' value, the relevant error message is returned. If it is passed with the 'Yes' value, any errors that occur are not returned, but processed as errors.

 