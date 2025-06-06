# table.GetNextGeneratedUniqueValue



> [!NOTE]
> This article is about the **table.GetNextGeneratedUniqueValue** method of [table internal components](/docs/Extensions/Domain%20and%20table%20internal%20components).

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

You can get your session's MOST RECENTLY generated unique value (which could be for any of the tables in your application that have generated unique values) by calling [RulesEngine.GetLastGeneratedUniqueValue](/docs/Extensions/RulesEngine%20internal%20component/RulesEngineGetLastGeneratedUniqueValue.md).