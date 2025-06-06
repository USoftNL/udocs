---
id: Import_Task_Set_Virtuals_Managing_Decision_Trees
---

# Import Task Set Virtuals Managing Decision Trees

Complex import tasks often include decision trees: if the current import record meets a SQL condition, then if it meets another condition A should happen, otherwise B, etc.

You can use import task set virtuals to keep track of decision trees in import tasks.

This strategy makes it easier to construct and maintain decision trees in complex import tasks.

To use an import task set virtual for managing decision trees:

1. Define an (additional) import task set virtual for the driving set of the import task.

2. Define an import SQL statement setting the virtual to a certain value if a SQL condition is met. Such a statement would typically have the form:

```sql
UPDATE    driving-set
SET       virtual = value
WHERE     ... (subquery) ...

```

The WHERE clause compares one or more (computations of) driving set values to (computations of) database values.

3. Define a further import SQL statement referring to the current value of the virtual, e.g.

```sql
UPDATE    driving-set
SET       virtual = value2
WHERE     ... (subquery) ...
AND       virtual = value1

```

and so on.

4. Finally, make the import statement(s) subject to values for the virtual. A typical construction would be:

```sql
INSERT INTO table
(
    SELECT    ...
    FROM    driving-set
    WHERE   virtual = value
)

```