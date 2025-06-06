---
id: Field_corrections_and_field_checks
---

# Field corrections and field checks

**Field corrections** and **field checks** are corrections and checks applied to a column value being processed.

They are performed as soon as the user or the application has finished supplying or changing the column value, ie., in the pre-field phase of a field-validation event.

Productive domain constraints are evaluated as field corrections. (Example 1.)

Restrictive domain constraints are evaluated as field checks. (Example 2.)

Domain constraints are NOT (re-)evaluated as a result of other productive domain constraints having an effect on the column value. They are also NOT evaluated as a result of their own effect. In other words, domain constraints do not have the recursive behaviour that is characteristic of table constraints.

You can set the evaluation order between domain constraints on the same domain by setting the Position in Checking Order domain constraint attribute.

*Example 1*

A business rule saying that a column value must always be a multiple of 0.5 is implemented as a productive domain constraint with the following expression for the **Make Sure That** attribute:

```
ROUND (DOMAIN * 2) / 2
```

This is evaluated as a field correction each time a field-validation event occurs for a column based on the domain associated with the domain constraint.

*Example 2*

A business rule saying that a column value must not contain colons or semicolons is implemented as a restrictive domain constraint with the following condition for the **Do Not Allow That** attribute:

```sql
    INSTR(DOMAIN,':') <> 0
OR  INSTR(DOMAIN,';') <> 0
```

This is evaluated as a field check each time a field-validation event occurs for a column based on the domain associated with the domain constraint.

 

## Effect of field corrections and field checks

An evaluated field correction has the effect of changing any column value to the outcome of evaluating the expression in the **Make Sure That** attribute.

In a field check, if the column value being checked does not satisfy the **Do Not Allow That** condition, processing is blocked and the constraint message defined for the domain constraint is returned. The attempted manipulation of the column value does not take place. If the field-validation event was raised by the user interactively attempting to leave a field, then this navigation is blocked and she remains in the field.

 