# ODBC SQL syntax

This section lists ODBC SQL syntax supported by USoft applications.

## Queries and manipulations

```sql
SELECT     ...
FROM       ...
WHERE      ...
GROUP BY   ...
HAVING     ...
ORDER BY   ...
```

```sql
SELECT     ...
UNION
SELECT     ...
```

(if supported:)

```sql
SELECT     ...
FROM       ...
WHERE      ...
FOR UPDATE OF *columns*
```

```sql
INSERT INTO  ...
VALUES (     ...  )
```

```sql
INSERT INTO  ...
SELECT       ...
```

```sql
UPDATE       ...
SET          *column* = *expression*
,            ...
WHERE        ...
```

```sql
DELETE FROM  ...
WHERE        ...
```

## Authorisation

```sql
GRANT       { ALL | SELECT | INSERT | UPDATE { *columns* | } | DELETE }
ON          ...
TO          ...
```

```sql
REVOKE      { ALL | SELECT | INSERT | UPDATE { *columns* | } | DELETE }
ON          ...
FROM        …
```

## Data definition

```sql
CREATE TABLE   *table*
(     *column**data-type*   { NULL | NOT NULL }
,     ...
)
```

```sql
DROP TABLE      *table*
```

```sql
CREATE { UNIQUE | } INDEX  *index*
ON     column { ASC | DESC | }
[,     ... ]
```

```sql
DROP INDEX  *index*
```

```sql
CREATE VIEW    *view*
(     *column**data-type*   { NULL | NOT NULL }
,     ...
)
AS SELECT ...
```

```sql
DROP VIEW      *view*
```

(If supported:)

```sql
ALTER TABLE   *table*
...
```

```sql
RENAME        *table*
{ TO | }      ...
```

ODBC has no prescribed syntax for renaming a table. Most RDBMSs however are capable of renaming a table. To make optimal use of the RDBMS capabilities, USoft uses the above ALTER / RENAME TABLE syntax formats when creating application tables and "remembers" which syntax format succeeded, so it will be used from then on. When none of the above syntax's are available, a new (changed) table is created and the old table data inserted, then the old table is dropped.