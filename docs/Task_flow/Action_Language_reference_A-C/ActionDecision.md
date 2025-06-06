---
id: ActionDecision
---

# ActionDecision()




:::note

This article is about the **ActionDecision** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **ActionDecision()**

Calls a named decision defined in the Decisions window in USoft Definer.

*Syntax*

```
ActionDecision( *name*, *input-parameter*, ... )
```

The required *name* is the name of the decision.

You can pass one or more *input-parameters.* Placeholders (:1, :2 ...) in the decision's Decision SQL will be substituted by the values of these input parameters when the decision is called. These placeholders may appear in the SELECT and WHERE clauses of Decision SQL, for example:

```sql
SELECT    :2, column1
FROM      table1
WHERE     column2 = :1
```

The :1 placeholder corresponds to the first parameter you pass, the :2 placeholder to the second...

- If you pass *less* input parameters than the number of placeholders in the Decision SQL, the remaining placeholders are substituted by the NULL value before the statement is evaluated.
- If you pass *more* input parameters, these are ignored.

Do not confuse input parameter numbering with the :1, :2... placeholders that you can write in the decision's **Yes Action**. These placeholders refer to items in the SELECT list of the Decision SQL. In the example,

- You can refer to **:2** in the SELECT clause (that is, the value of the second input parameter) by writing **:1** in the Decision Yes Action because this value is the first item in the SELECT list.
- You can refer to the retrieved value for the **column1** output column by writing **:2** in the Decision Yes Action because this value is the second item in the SELECT list.

## Why ActionDecision() is relevant


:::tip

When you define Jobs,  **ActionDecision()** opens the way to [branching and looping in Decisions](/docs/Task_flow/Decisions/Decision_branching_and_looping.md).
If you want to execute SQL in a job, your first choice should be SQL Tasks. But if you need the flexibility of Decisions, then use Action Tasks that contain ActionDecision() to access Decisions. One way you can use Decisions is to have [SqlScript()]() execute SQL only if certain conditions (expressed in Decision SQL) are met.

:::

Typically, you use ActionDecision() in an Action Task called as a Job Task.

Once you have accessed a Decision in this way, you can branch and loop by calling ActionDecision() also in the Yes Action or (less typically) the No Action of a Decision. By doing that, you can branch by calling, from one decision, another decision. You can loop by calling a decision, or sequence of calling decisions, from itself. When looping, make sure that the Decision SQL has a stop condition that causes the loop to end in a No Action. The Decisions window in USoft Definer has special tools (**Decision Tree** and **Caller Tree**) to make visible how decisions form branches and loops, and to make these structures easily navigable.