---
id: ResourceFileUpdate
---

# ResourceFileUpdate()



> [!NOTE]
> This article is about the **ResourceFileUpdate** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **ResourceFileUpdate()**

Changes the value of a resource in the in-memory resource database, treating any backslash ( \\ ) as an escape character.

> [!TIP]
> If the resource value contains backslashes, as is the case in file paths, you must use [ResourceFileUpdateKeepBackslash()](/docs/Task%20flow/Action%20Language%20reference%20I-R/ResourceFileUpdateKeepBackslash.md) instead of ResourceFileUpdate().

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

> [!WARNING]
> ResourceFileUpdate() plays an important role in exchanging data between job tasks, decisions for branching and looping, and SQL that interacts with data in the database. See [Decision variables and placeholders](/docs/Task%20flow/Decisions/Decision%20variables%20and%20placeholders.md).

 