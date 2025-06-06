---
id: RulesEngineGetRegistry
---

# RulesEngine.GetRegistry



> [!NOTE]
> This article is about the **GetRegistry** method of the [RulesEngine internal component](/docs/Extensions/RulesEngine_internal_component).

## **RulesEngine.GetRegistry**

Retrieves a registry value for a specified key.

Returns an error message or an empty value, depending on *return-empty-value*.

*Syntax*

```sql
SELECT RulesEngine.GetRegistry (
    *registry-key-value,   return-empty-value*
)

*return-empty-value*  := { No | Yes }
```

The required *registry-key-value* is the name of the key.

The optional *return-empty-value* determines what is returned if the registry key is not found. If it is not passed, or it is passed with the default 'No' value, an error message is returned. If it is passed with the 'Yes' value, an empty value is returned.