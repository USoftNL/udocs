---
id: What_is_an_index
---

# What is an index?

An **index** is an alternative representation in the RDBMS of the values stored in a column, or in a combination of columns within a single table.

## Purpose

An index enables the RDBMS to execute queries faster if the indexed values can be used as an access path to the required data in database records. This is especially true if the query requires only values indexed, since the database records themselves do not need to be accessed in that case.

Choosing indexes is a trade-off. An index speeds up query performance, but slows down data manipulation, because table and index must both be updated when records are manipulated. Choosing indexes well is an RDBMS skill, rather than a USoft skill.

A *unique**index* can be especially effective. In this type of index, each indexed value, or each combination of indexed values, is unique across the table (and across the index).

A unique index is not only a technical feature aimed at performance improvement, but also a functional feature: it is a way to prevent a data integrity rule from being violated, namely, the rule that each of the indexed values must be unique. The USoft Rules Engine relies on unique indexes to guarantee this particular type of uniqueness.

## Indexes in your USoft application

You define indexes in USoft Definer in 2 ways:

- USoft Definer automatically tells the RDBMS to create a unique index for each key column, or key combination of columns. You define key columns, or key combinations of columns by setting the Key column attribute. You do this in the Columns tab of the Tables window. Choose Define, Tables, Database Tables from the menu. This type of index is called *key index.*

- Over and above these, you can decide to create *additional indexes* not related to settings of the Key attribute. You do this in the Additional Indexes tab in the Tables window. Choose Define, Tables, Database Tables from the menu. For an additional index, you specify that the index is unique or non-unique by setting Unique = Yes or Unique = No.

Indexes are generated along with tables. Each time you generate a table, the indexes on that table are also generated. A key index is named

```
*table*_I*key*
```

where *key* is the digit to which the Key attribute is set. For example, an index implementing the primary key of a table DEPT will be called

```
DEPT_I1
```

An additional index you name yourself. The name you choose must be unique across all indexes.

In an index defined on more than 1 column, it makes a difference in which order the columns are indexed. With key indexes, values from the key column(s) with the lowest Position value are at leftmost in the indexed values. With additional indexes, values from the key column with the lowest Seq No (sequence number) are leftmost in the indexed values.

It also makes a difference whether values are sorted in ascending or descending order. In key indexes, ascending order is used. In additional indexes, you choose between ascending or descending order by setting the Order Type attribute to Ascending or Descending.

A column is allowed to be involved in multiple indexes both in the RDBMS and in USoft.