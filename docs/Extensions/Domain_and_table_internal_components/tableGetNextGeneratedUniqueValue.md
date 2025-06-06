---
id: tableGetNextGeneratedUniqueValue
---

# table.GetNextGeneratedUniqueValue



> [!NOTE]
> This article is about the **table.GetNextGeneratedUniqueValue** method of [table internal components](/docs/Extensions/Domain_and_table_internal_components).

## **table.GetNextGeneratedUniqueValue**

Gets the next value that will be generated as a unique value for a column of the table.

Returns an integer.

*Syntax 1*

```
INVOKE *table*.GetNextGeneratedUniqueValue
```

*Syntax 2*

```
SELECT *table*.GetNextGeneratedUniqueValue()
```

### Notes

You can get your session's MOST RECENTLY generated unique value (which could be for any of the tables in your application that have generated unique values) by calling [RulesEngine.GetLastGeneratedUniqueValue](/docs/Extensions/RulesEngine_internal_component/RulesEngineGetLastGeneratedUniqueValue.md).