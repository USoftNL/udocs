---
id: RowsCommitted
---

# RowsCommitted



> [!NOTE]
> This article is about the **RowsCommitted**[Rules Engine property](/docs/Modeller%20and%20Rules%20Engine/Rules%20Engine%20properties).

## **RowsCommitted**

The **RowsCommitted** Rules Engine property returns the number of records manipulated (INSERT, UPDATE, DELETE) as part of the most recent commit performed by the Rules Engine.

The return value is 0 (zero) if:

- No transaction was as yet committed within the session.
- 0 is the number of records manipulated as part of the most recent commit.
- The most recent previous transaction within the session was rolled back.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'RowsCommitted' )
```

This entire statement is case-insensitive, including the property name.