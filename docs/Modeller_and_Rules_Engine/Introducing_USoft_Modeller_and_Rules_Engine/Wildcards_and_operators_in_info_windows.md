---
id: Wildcards_and_operators_in_info_windows
---

# Wildcards and operators in info windows

When you define a query by filling out an info window, you can use ordinary operators such as >, >=, =, <, <=. Also, you can use the NOT, and the OR operator, which are represented by the exclamation point (!) and pipe symbol (\|) respectively, as described in the following table. Further, you can use the wildcards that are specified in the second table.

## Special operators

|**Operator**|**Purpose**|
|--------|--------|
|! (NOT operator|The exclamation point reverses the meaning of your query condition. For example, !200 means "not equal to 200", !J%S means "not LIKE J%S".|
|NULL    |The query condition <column> IS NULL is added.|
|!NULL   |The query condition <column> IS NOT NULL is added.|
|\| (i.e. OR)|The pipe symbol specifies an OR condition between fields. For example, the last name of an instructor must begin with a letter "larger" than A, or the (first) name must be John.<br/>			The pipe symbol must be typed in EACH field to which the OR applies. The resulting OR condition is then ANDed with the other query conditions, if any.|
|BETWEEN |BETWEEN specifies the range to be queried. For example:<br/>			BETWEEN 20 AND 30<br/>			retrieves all records that have a value in the range 20 to 30 for the column concerned.<br/>			!BETWEEN 20 and 30<br/>			retrieves all records that have a value OUTSIDE the range 20 to 30 for the column concerned.|



Within one query, you can use any number of query conditions. They are implicitly connected by the AND operator, except for conditions that use the pipe symbol, which are connected by the OR operator.

> [!TIP]
> **NOTE 1:** First all the AND conditions are connected, then the OR conditions are added. For example:
A and B or C and D
Is NOT parsed as:
(A and B) or (C and D)
but as:
(A and B and D) or C

> [!TIP]
> **NOTE 2:** An extra query (virtual) is treated as if it involves ONE column, even if it consists of a composite key.

> [!TIP]
> **NOTE 3:** OR conditions on tables containing joined columns while in Query mode work correctly. However, if you do not specify at least one AND condition, it will lead to unexpected results. In most cases if there are only OR conditions specified, then one of them will be added as an AND condition to avoid full table scans.

## Using wildcards in queries

|**Wildcard**|**Purpose**|
|--------|--------|
|**_**   |An underscore matches any single character. For example, JA_KY matches "Jacky" but not "Jabberwocky".|
|**%**   |A percent sign matches zero or more characters. For example, J%Y matches "Joy", "Jacky", and "Jabberwocky".|
|**=**   |When used for string values, the equals sign removes the special significance of _ and %. Use it if you are actually looking for the underscore or percent sign. For example, =J%K will only match "J%K".|



 