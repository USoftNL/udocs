---
id: Template_default_Dictionary
---

# Template default: Dictionary



> [!NOTE]
> This article describes **Dictionary** instructions for achieving a [ template default](/docs/Web%20and%20app%20UIs/Your%20own%20template%20default/Template%20default%20creating%20and%20reapplying%20your%20own%20defaults.md).
> **See also**
> [Template default: Domain Allowed Values](/docs/Web%20and%20app%20UIs/Your%20own%20template%20default/Template%20default%20Domain%20allowed%20values.md)
> [Template default: Relationships, Relationship Columns](/docs/Web%20and%20app%20UIs/Your%20own%20template%20default/Template%20default%20Relationships.md)
> [Template default: Roles](/docs/Web%20and%20app%20UIs/Your%20own%20template%20default/Template%20default%20Roles.md)
> [Template default: Tables, Table Columns](/docs/Web%20and%20app%20UIs/Your%20own%20template%20default/Template%20default%20Tables.md)

Here are iteration methods to be used with the **e-for** directive. Each iterates a list of objects in the metadata dictionary:

|**Method**|**Explanation**|
|--------|--------|
|`dictionary.getTables() `|Iterates the list of **tables** in the dictionary.|
|`dictionary.getReferences() `|Iterates the list of **relationships** in the dictionary|
|`dictionary.getReferences('All') `|Adds **inherited** relationships to the list of relationships. They are relationships that Logical Views inherit from the underlying table(s).|
|`dictionary.getRoles() `|Iterates the list of **roles** in the dictionary|



*Example*

```language-xml
<esi:class name="{table.getName()}" access_type="ownership" e-for="table in dictionary.getTables()">
   …
</esi:class>

```

If the metadata describe 3 tables TABLE_A, TABLE_B, TABLE_C, this example template instruction translates into:

```language-xml
<esi:class name="TABLE_A" access_type="ownership">
   …
</esi:class>
<esi:class name="TABLE_B" access_type="ownership">
   …
</esi:class>
<esi:class name="TABLE_C" access_type="ownership">
   …
</esi:class>

```

 