---
id: How_EAR_diagrams_map_to_Definer_records
---

# How EAR diagrams map to Definer records

![](./assets/763361e7-8071-4bd0-9809-fc5269dbc65a.png)



## Overview

EAR diagrams in USoft Definer 11 are automatically synchronised in both directions with records in USoft Definer for:

- Tables.
- Columns.
- Relationships.
- Relationship columns.

If the diagram is for a Business Object (rather than the repository as a whole), it is also automatically synchronised in both directions with records for:

- Data contents of the Business Object.

As a result of this 2-way synchronisation:

- When you open or re-open the EAR diagram, it automatically reflects (depicts) the latest changes you made in USoft Definer for these objects. For example, if you added a Table in Definer, you will see a new table box for it in the diagram. USoft makes an effort to place this table box in a location on the canvas that is helpful, but you will probably want to drag the box to another position to get a better-looking diagram.
- When you add, change or drop objects in the EAR diagram, at the time when you exit the diagram, changes will automatically be applied to the various Definer records. These records will be inserted, updated or deleted on the basis of the latest version of the diagram. If you do not like the result, you can still rollback the transaction after diagram exit. If you do like the result, you need to Save it.

## Viewing an EAR diagram's properties

EAR diagrams contain 3 types of drawing objects. They map to USoft Definer objects:

|**EAR object**|**Depicted as**|**USoft Definer object**|
|--------|--------|--------|
|Entity  |Table box|Table   |
|Attribute|Attribute item*|Column  |
|Relation|Connector line**|<p>Relationship</p><p>Relationship columns</p>|
|Relation|Connector line**|Supertype (of a Table)|



* Attribute items are lines of text displayed within table boxes, each with a coloured item to its left.

** A connector line is a line connecting 2 table boxes.

To understand the rest of this article, in an EAR diagram, you need to view **properties** of a drawing object:

1. Click the object on the drawing canvas (table box, attribute item, or connector line).
2. Click the Properties icon near the right-hand end of the icon ribbon across the top of the canvas:

![](./assets/2729fe71-4295-420b-97c4-993028d8ad00.png)

Properties icon3. See that, for the object, a Properties list opens in a right-hand side pane.

## Data contents of the Business Object

This section applies to diagrams for a Business Object.


:::tip

USoft recommends development teams work with EAR diagrams for specific business objects, not with EAR diagrams for the repository as a whole.

:::

A Business Object has Data Contents: a collection of Tables, Relationships, Domains and Temporary Content. Each of the items in this collection may or may not be Owned by the Business Object. An item can be Owned by at most 1 Business Object.

You can view Data Contents by pressing the Structure button in the Business Object window.

EAR diagrams for business objects only interact with the Table items in the Business Object's Data Contents, not with other Data Contents items.

EAR diagrams for business objects do not interact with the Owned (Yes/No) property of Tables. To the EAR diagram, it makes no difference whether a Table is Owned or not.

The collection of Tables depicted in the EAR diagram is automatically synchronised with the list of Tables in the Business Object’s Data Contents in both directions:

- When you open or re-open the EAR diagram from the Business Object, the diagram automatically depicts all the tables in the Data Contents and no other tables. If a table was added to the Data Contents since the last time the diagram was open, USoft makes an effort to depict the table in a location on the canvas that is helpful, but you will probably want to drag the box to another position to get a better-looking diagram.
- The diagram automatically depicts all the relationships defined between the tables in the Data Contents, independently of whether these relationships are listed or not as being Data Contents items in the Business Object.
- The  diagram automatically depicts all the supertype/subtype relations between the tables in the Data Contents.
- When you add a table to the EAR diagram, at the time when you exit the diagram, the table is added to USoft Definer and also added to the list of Tables in the Business Object's Data Contents.
- When you remove a table from the EAR diagram, at the time when you exit the diagram, the table is deleted from USoft Definer and therefore also from the list of Tables in the Business Object's Data Contents.


:::danger

When you remove a table from the EAR diagram, the table is completely deleted, not just disconnected from the Business Object. If you do not want that, you can still rollback after exiting the diagram.

:::

## Tables

### Tables: Definer-to-diagram

A table in Definer with Table Name = TOUR_PROGRAMME and Object Name = "Tour programme” maps to an EAR entity box with these properties:

|**EAR property**|**value**|
|--------|--------|
|Object name|Tour programme|
|Table name|TOUR_PROGRAMME|



In the diagram, the “Object name” also appears in the blue header bar of the table box and can be edited there after double-click.

A Supertype setting for a table in Definer maps to a subtype-to-supertype connector line connecting the subtype box and the supertype box in the diagram. The line is arrow-shaped. The arrow points from the subtype to the supertype.


:::warning

The arrow appears only if the supertype table and the subtype table are both in the Data Contents of the diagram’s Business Object.

:::

### Tables: Diagram-to-Definer

A table box newly added to an EAR diagram maps to a Table record in Definer.

Because Definer identifies a Table alternatively by its Table Name, Abbreviation, Object Name, or Object Name Plural, if you draw a **new** table box with "Object name” = "Tour programme”, a record is created with the following values:

|**Definer, Table attribute**|**Value**|
|--------|--------|
|Table Name|TOUR_PROGRAMME|
|Abbreviation|TOUR_PROGRAMME|
|Object Name|Tour programme|
|Object Name Plural|Tour programmes|



After creation, if you change "Object name” in the diagram, this will change "Object Name” in Definer. The other 3 columns are not affected by this change.

After creation, if you change "Table name” in the diagram (this is only possible in the Properties side pane), this will change "Table Name” in Definer. The other 3 columns are not affected by this change.

If you draw a subtype-to-supertype connector arrow between 2 table boxes in an EAR diagram, this will cause the Supertype attribute in the Definer record for the subtype to be set to the supertype.

## Columns

### Columns: Definer-to-diagram

A TOUR_TYPE column in Definer in table TOUR_PROGRAMME with Prompt = “Tour type” maps to an EAR attribute item with these properties:

|**EAR property**|**value**|
|--------|--------|
|Object name|Tour type|
|Column name|TOUR_TYPE|



In the diagram, the “Object name” also appears as the display name of the attribute item for the column, and can be edited there after double-click.

The following further properties of EAR attributes are affected by Definer column attributes:

|**EAR attribute property**|**Definer attribute**|
|--------|--------|
|Key     |Key attribute of the Column|
|Mandatory|Mandatory attribute of the Column|
|Input allowed|Input Allowed attribute of the Column|
|Template domain|Template Domain of the Column|
|Default value|<p>Default Value of the Column</p><p>Default Value of the Column's Domain</p>|
|Value list|Allowed Values of the Column's Domain|



In the diagram, Key is set to Yes if the column has Key = 1, to No otherwise. The Key setting also translates into the attribute item being displayed either with a coloured key symbol (Key = Yes) or with a coloured rectangle (Key = No).

In the diagram, Mandatory is set to Yes if the column has Mandatory = Yes, to No otherwise. This setting also translates into the attribute item being displayed either with a red symbol (Mandatory = Yes) or a green symbol (Mandatory = No).

In the diagram, "Input allowed” is set to Yes if the column has Input Allowed = Yes, to No otherwise. This setting also translates into the attribute item being displayed either normally (Input allowed = Yes) or with a dotted outline rectangle (Input allowed = No).

In the diagram, "Template domain” is set to the column's Template Domain. This, in turn, is automatically derived from the characteristics of  the Domain that the column is based on.

In the diagram, "Default value” is set to the column’s Default Value, or to the Default Value of the column's domain if that domain has a Default Value and the column does not have a Default Value of its own.

In the diagram, the "Value list” property cannot be edited. It is set to the list of Allowed Values of the column's domain.

### Columns: Diagram-to-Definer

An attribute item newly added to a table box in an EAR diagram maps to a Column record in Definer.

Definer identifies a Column by the combination of Table Name and Column Name. If you create a **new** attribute item with "Object name” = "Tour type” in the table box with header "Tour programme”, assuming that the table's Table Name property has not been set to something else than TOUR_PROGRAMME, a Column record is created with the following values:

|**Definer, Column attribute**|**Value**|
|--------|--------|
|Table Name|TOUR_PROGRAMME|
|Column Name|TOUR_TYPE|
|Prompt  |Tour type|



After creation, if you change "Object name” for the EAR attribute in the diagram, this will change the column's "Prompt” in Definer.

If you change "Column name” in the diagram (this is only possible in the Properties side pane), this will change "Column Name” in Definer.

The following attributes in Definer are affected by property settings of attribute items in EAR diagrams:

|**Definer, Column attribute**|**EAR attribute item, property**|
|--------|--------|
|Key     |Key     |
|Mandatory|Mandatory|
|Input Allowed|Input allowed|
|Domain Name|Template domain|
|Default Value|Default value|



If the EAR diagram has Key = Yes, then for the column in Definer, Key is set to “1”.

If the EAR diagram has Key = No, then for the column in Definer, Key is initially set to "No” if the column did not exist in Definer. After creation, Key = 2, 3…. settings do not interact with the EAR diagram.

In EAR diagrams, for an attribute, you can only select one of the standard Template Domains. You cannot select any other domains. For the column in Definer, Domain Name is initially set to the selected "Template domain” in EAR if the column did not exist in Definer. After creation, you can set Domain Name in Definer to anything you like. If that choice changes the derived Template Domain, that will reflect in the diagram the next time you open the diagram.

If the EAR diagram does not have a value for "Default value”, Definer is not affected. If it has, then the column's Default Value attribute is set to that value, overwriting any existing other value.

## Parent-child relationships

### Parent-child relationships: Definer-to-diagram

A “TOUR_PROGRAMME IS FOLLOWED BY TOUR” parent-child relationship in Definer maps to an EAR relation line between the "Tour programme” table box and the "Tour” table box. with these relation properties:

|**EAR relation property**|**Value**|
|--------|--------|
|Object name|is followed by|
|Parent role|IS FOLLOWED BY|



The "Object name” is also displayed as a text accompanying the relation line.

The following properties of EAR attributes are affected by Definer Relationship attributes:

|**EAR relation property**|**Definer relationship attribute**|
|--------|--------|
|Foreign key mandatory|Foreign Key Mandatory|
|Child must exist|Child Must Exist|
|Max children = 1|Maximum Children|
|Is subtype|(No)    |
|Delete rule|Delete Rule|
|Update rule|Update Rule|



In the diagram, "Max children = 1” is set to Yes if the relationship has Maximum Children = 1, to No otherwise.

In the diagram, the first 3 properties (the 3 Yes/No flags) also affect the symbols shown at either end of the relation line at the point where the line connects to the table box. These symbols represent cardinality. The cardinality of a parent-child relationship depends on the combination of Yes/No settings for these 3 properties.

### Parent-child relationships: Diagram-to-Definer

A relation line newly added to an EAR diagram with Is Subtype = No (the default) maps to a Relationship record in Definer and to one or more corresponding Relationship Column child records.

Definer identifies a Relationship by the combination of Parent Object, Child Object and Parent Role. If you draw a new relation line from the "Tour programme” to the "Tour” table box, if you do not make any explicit property settings, then a Relationship record is created with the following values:

|**Definer, Relationship attribute**|**Value**|
|--------|--------|
|<p>Parent Object</p>|TOUR_PROGRAMME|
|Child Object|TOUR    |
|Parent Role|HAS *   |



* "Parent Role” is determined by converting the text string by the relationship line on the canvas to its all-uppercase version. Spaces are not replaced by underscores. If you leave the text by the relation line empty, "Parent Role” takes the default "HAS”. After creation, "Parent Role” is displayed as the “Parent Role” in the Property sheet of the relation line, but this property cannot be edited there.

A Relationship must have at least 1 Relationship Column record. A Relationship Column record expresses how a primary key column in the parent table maps to a foreign key column in the child table.

The diagrammer knows about primary key columns but not about foreign key columns. When an EAR parent-child relation is newly created, USoft assumes that it is acceptable for the foreign key column (in the child) to have the **same column name** as the corresponding primary key (in the parent). Drawing the EAR relation results in an **extra foreign key** Column record in Definer for each of the primary key columns, if that foreign key column does not yet exist. Assuming that a Tour Programme's primary key is (Destination, Tour type) and foreign keys by those names do not yet exist, the EAR relation causes 4 records to be created, as follows:

2 Column records :

|**Table Name**|**Column Name**|
|--------|--------|
|TOUR    |DESTINATION|
|TOUR    |TOUR_TYPE|



2 Relationship Column records:

|**Parent Table**|**Child Table**|**Parent Role**|**Parent Column**|**Child Column**|
|--------|--------|--------|--------|--------|
|TOUR_PROGRAMME|TOUR    |IS FOLLOWED BY|DESTINATION|DESTINATION|
|TOUR_PROGRAMME|TOUR    |IS FOLLOWED BY|TOUR_TYPE|TOUR_TYPE|



So far, this discussion has been about identifying columns (key columns) for the Relationship. In addition, the following relationship attributes in Definer are also affected by EAR parent-child relations:

|**Definer relationship attribute**|**EAR relation property**|
|--------|--------|
|Foreign key mandatory|Foreign key mandatory|
|Child must exist|Child must exist|
|Maximum Children|Max children = 1 *|
|Delete Rule|Delete rule|
|Update Rule|Update rule|



* If the EAR “Max children = 1” = No, the Definer "Maximum Children” attribute is not affected.


:::tip

In the EAR diagrammer, if you set Update Rule = Nullify, then Child Must Exist will be set to No if it was set to Yes.

:::
In the EAR diagrammer, if you set Child Must Exist = Yes, then Update Rule will be set to Restricted if it was set to Nullify.

## Supertype-subtype relationships

### Supertype-subtype relationships: Definer-to-diagram

If a Definer table STAFF has Supertype = PERSON, this setting maps to an EAR relation line between the table boxes for PERSON and STAFF with an arrow-shaped look. The arrow points from the subtype to the supertype (from the STAFF box to the PERSON box).

The EAR relation is given the following properties:

|**EAR property**|**value**|
|--------|--------|
|Object name|is      |
|Parent role|IS      |
|Foreign key mandatory|No      |
|Child must exist|No      |
|Max children = 1|No      |
|Is subtype|Yes     |



In the diagram, the "Object name” is also displayed as a text accompanying the relation line. You can erase this text if you like. It does not map to anything in Definer. “Parent role” is derived from "Object name” and cannot be edited in the Property sheet in the diagram.

In the diagram, the first 3 Yes/No flags are set to No simply because these properties have no meaning for subtype-supertype relationships (only for parent-child relationships).

### Supertype-subtype relationships: Diagram-to-Definer

A relation line newly added to an EAR diagram with **Is Subtype = Yes** maps to a Table record in Definer with Supertype set to a (non-null) value.

When the EAR supertype-subtype relation is newly created, USoft makes sure that a **subtype table with the same primary key as the supertype** is created if it does not already exist in Definer.