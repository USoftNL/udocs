---
id: Globally_Unique_Keys_G_U_Ks
tags: [USoft11]
---
# Globally Unique Keys (G_U_Ks)

`USoft 11``{.vs_11}`

USoft stores Globally Unique Keys (G_U_Ks) in non-displayed columns in USoft applications such as USoft Definer.

G_U_Ks are random generated sequences of alphanumeric characters. They surface in G_U_K columns when you export to XML or JSON, for example:

```xml
<Tables>
  <T_TABLE TABLE_NAME="T1" ... G_U_K="7CBBA3A755064385B8018E2E428DE0A9"/>
  <T_TABLE TABLE_NAME="T2" ... G_U_K="CB2F4784303A4F5693FD2FB109496316"/>
</Tables>
```


:::note

USoft has introduced G_U_Ks as a necessary element of [USoft version control](/Repositories/Version_control/Versioncontrolled_repositories.md). As a developer, you do not need to know about the connection between the two.

:::

You can occasionally take advantage of G_U_Ks when you export and import data describing your own applications because G_U_Ks allow you to identify a record by a different means than the record's primary key value(s). This can be helpful when you update a primary key value in one environment and you want to repeat that update in a different environment. Why is this?

To see how this works, first consider how USoft imports data from XML or JSON by default. By default, imports are run with the IgnoreGUK parameter set to Yes. With this default setting, the import principle is the same as when the export file does not contain G_U_Ks at all. The import routine performs "UPSERT”, a combination of INSERT and UPDATE:

- If a record with the same primary key value(s) is NOT found, the entire record is imported as described in the external file (INSERT).
- If a record with the same primary key value(s) IS found, the non-primary-key values of that record are set to the values found in the external file (UPDATE).

This principle has its limitations when primary key values change. With "UPSERT”, the import routine has no way of knowing the old value of the primary key. Therefore it cannot update the primary key value in the target. It will insert a new record instead, and any child records lose their relationship to the new parent.

You can get around this problem by supplying a G_U_K column of your own and setting **IgnoreGUK=no** for your import. In this situation, import routines will automatically use the G_U_K, and not the primary key values, to identify the record. If the record is found, all the columns including the primary keys will be updated.

To add a G_U_K column to a table of your own:

1. Add a column by the name G_U_K.
2. Base this column on the GUID template domain, or a variant thereof.
3. Make sure this column has Key = 9.

To set **IgnoreGUK=no** for your import, use this syntax:

```sql
INVOKE    XML.Import WITH
SELECT    'no'  IgnoreGUK
,         ...   XMLDocument
FROM      ...
```


:::tip

Semantically, a G_U_K is a key that makes a record globally unique independently of the locations where it may be stored. This is suitable in the context of version control. This is not suitable when you use import to make a one-time copy of an object with the intention of changing it into something completely different.
For this reason, in its own operations, USoft heeds G_U_Ks in Version Control, but not in Object Shopping.

:::

 