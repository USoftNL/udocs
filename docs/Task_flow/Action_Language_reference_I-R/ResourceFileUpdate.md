---
id: ResourceFileUpdate
---

# ResourceFileUpdate()




:::note

This article is about the **ResourceFileUpdate** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **ResourceFileUpdate()**

Changes the value of a resource in the in-memory resource database, treating any backslash ( \\ ) as an escape character.


:::tip

If the resource value contains backslashes, as is the case in file paths, you must use [ResourceFileUpdateKeepBackslash()](/docs/Task_flow/Action_Language_reference_I-R/ResourceFileUpdateKeepBackslash.md) instead of ResourceFileUpdate().

:::

*Syntax*

```
ResourceFileUpdate( '*resource*' )

*resource*  :=  *name*:*value*
```

The required *resource* contains the resource name followed by a colon (:) and the new value to which the resource is updated.

*Example*

```
ResourceFileUpdate( '*background: blue' )
```


:::warning

ResourceFileUpdate() plays an important role in exchanging data between job tasks, decisions for branching and looping, and SQL that interacts with data in the database. See [Decision variables and placeholders](/docs/Task_flow/Decisions/Decision_variables_and_placeholders.md).

:::

 