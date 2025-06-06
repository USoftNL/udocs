# Where are the rules?

Data integrity rules executed by a Rules Engine are expressed in USoft Definer.

When a Rules Engine runs from flat files, the rules are read from the *application*.con file, the content of which is defined in USoft Definer. When it runs from repository, these rules are read from USoft Definer tables, with T_... table name prefixes (eg., T_CONSTRAINT).

In USoft Definer, rules are principally expressed in **constraints:** domain constraints and table constraints, called "explicit rules" because the rule is explicitly formulated in a rule expression language (as an SQL statement, or an SQL clause). But rules are also implicitly expressed in other objects, especially in domain attributes, column attributes and relationship attributes. You can view these implicit rules as abbreviations of their explicit counterpart. If you wanted to, whatever you express implicitly, you could choose to express explicitly in a constraint.

*Example 1*

Setting a column to Mandatory = Yes is the equivalent of writing a domain constraint for the domain the column is based on, and setting its "Do Not Allow That" attribute to:

```
DOMAIN IS NULL

```

*Example 2*

Setting a relationship to Delete Rule = Cascading is the equivalent of writing a table constraint of this type:

```sql
DELETE FROM child
WHERE NOT EXISTS
(
    SELECT   ''
    FROM     *parent*
    RELATE   *parent* "TO" *child*
)
```

The help topics in this section focus on understanding constraints in general, as if they were all expressed explicitly. They do not constantly remind you that constraints may be expressed implicitly - not even if the type of constraint under discussion is typically expressed implicitly, such as is the case with mandatory columns.  