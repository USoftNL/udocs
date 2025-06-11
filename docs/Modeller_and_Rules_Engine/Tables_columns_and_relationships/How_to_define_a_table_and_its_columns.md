---
id: How_to_define_a_table_and_its_columns
---

# How to define a table and its columns

You can define a table and its columns by using a wizard or by filling out a form.

## Defining a table by using a wizard

1.   On the Project Catalog's Modeller and Rules Engine Tab, double-click on Tables.

      The Tables wizard appears.

2.   Enter the requested table attribute values in each of the wizard's dialogs.

## Defining a table by filling out a form

1.   Choose Define, Tables, Database Tables from the USoft Definer main menu.

2.   In the top part of the window, set attributes for the Table itself.

3.   In the Columns tab, on each line, set table attribute values for one of the columns of the table.

### Table Name

A table must have a unique Table Name such as CUSTOMER or APPLICATION_USER. A table name is spelled all-uppercase and may contain underscores but not spaces. The table name is used when generating the physical RDBMS table.

### Abbreviation

A table must have a unique Abbreviation such as CST or APP_U. The Abbreviation is of no great consequence for your model and rules.

### Object Name

A table must have a unique Object Name such as "Customer" or "Application user". An Object Name may contain lowercase characters and spaces and is typically in the singular. The Object Name is of no great consequence for your model and rules.

### Object Name Plural

A table must have a unique Object Name Plural such as "Customers" or "Application users". An Object Name Plural may contain lowercase characters and spaces and is typically the plural of Object Name.

The Object Name Plural is used in the default application in the View, Objects dialog. In its variant form with underscores ("Application_user" for "Application user") it is used in XML that USoft produces and is able to import. This includes XML that is returned to REST service calls that specify XML as a format.

### Supertype

For a table T2, you can set the Supertype table attribute to the name of a different table, say T1 that is defined in the same instance of USoft Definer. This establishes a structure in which T2 is a subtype of T1 (and T1 the supertype of T2). Further tables could, in turn, have T2 as a supertype. Also, multiple tables can have Supertype = T1, in which case they are all subtypes of T1.

### Create Separate Table

If Supertype has a value, you can set Create Separate Table = Yes (the default) to cause USoft to create a separate database table for the table being defined. The table's primary key must be identical to the primary key of the supertype (see Supertype).

You can set Create Separate Table = No to cause USoft to implement supertype and subtype columns in the same physical database table.

### Delete Super on Delete

If Supertype has a value, you can set Delete Super on Delete = Yes (the default) to cause USoft to delete a supertype record when the corresponding subtype record is deleted.

You can set Delete Super on Delete = No to cause USoft to keep the supertype record when the corresponding subtype record is deleted. This option applies only if Create Separate Table = Yes.

### Interface

If the table being defined is part of an application that you expose to other applications as a module, you can set Interface = Yes to signify that the table must be made accessible to the consumer application. You can set Interface = No (the default) to signify that the table must be hidden from, not exposed to consumers.

### Static

You can find this table attribute on the Table Details tab in the Database Tables window. It allows you to read a table into memory the first time it is used during a user session. Do this only if the table is rarely updated, by setting Static = Client (the default is No). This may increase performance during subsequent use.

You can set this attribute to Rdbms to prevent a parent table that is rarely changed, but constantly referenced by data manipulation on a child table, from being locked.

### Initial Data

You can find this table attribute on the Table Details tab in the Database Tables window. In this field you can specify any data contents that, at some point for some reason, you want to initialize the table with. (By default, a table does not have initial data content. In practice, most tables do not have initial data content.)


:::tip

To get the initial data you have stored here, call [table.GetInitialData()](/Extensions/Domain_and_table_internal_components/tableGetInitialData.md).

:::


:::tip

Use any data format (XML, JSON, CSV...) that you prefer. For example, to create initial data in XML, you can enter the initial data in Development and call [XML.Export](/Extensions/XML_internal_component/XMLExport.md). Then, to apply that initial data, for example during a version release, write a batch job that executes [XML.Import](/Extensions/XML_internal_component/XMLImport.md).

:::

### Basic column attributes

This section discusses basic column attributes. Consider these attributes carefully for each new column.

### Column Name

A column must have a Column Name that is unique within the table, such as BOOKED_BY or CLIENT_NAME. A column name is spelled all-uppercase and may contain underscores but not spaces. The column name is used when generating the physical RDBMS table.

### Domain

A column must be based on a domain. Some attribute settings of this domain will be used to determine datatype, length (if any) and decimal length (if any) for the column when the table is generated in the database. A column's domain determines or influences many other aspects of the column as well, most notably:

- Allowed values for the column, if values allowed in the column are a closed set.
- Formats that determine how the value, eg. a date/time value, is presented to the end user.

- The column's display type.

- The default value displayed in the column when a new record is created.

### Prompt

In generated forms with fields or spreadsheet columns for column values, users need a text string explaining to them what the field is for. Prompt is this text string. It is displayed:

- To the left of each non-checkbox field in a single-record form
- To the right of each checkbox in a single-record form
- At the top of spreadsheet-like displays by way of a column header.

### Key

Each USoft table must have a primary key. A primary key is a column, or a combination of columns, that allows users to find and address individual records because the primary key value uniquely identifies each record. For example, numberplates could be a primary key of cars in a CAR table. The combination of Order ID and Line Number could be the primary key of order lines in an ORDER_LINE table.

Define a table's primary key by setting Key = 1 for the column or columns that make up the key.

Sometimes, in addition to the primary key column(s), other columns, or combinations of columns, also store values that uniquely identify each record: secondary keys. Define these by setting Key = 2, Key = 3... .

The remaining columns are non-key columns and have Key = No.

For each key in a table, USoft generates a database index when the table is generated.

### Mandatory

If you set Mandatory = Yes, a value must be provided for the column for each record in the table. This attribute is passed to the RDBMS, where a NOT NULL column is created. By implication, the requirement that a mandatory column must have a value for each record is tested by the RDBMS rather than by USoft.

If you set Mandatory = No, the column is allowed to be NULL.

USoft Definer enforces that Mandatory = Yes for key columns (= columns that do not have Key = No).

### Position

In generated forms with fields or spreadsheet columns for column values, Position determines in what order the fields or spreadsheet columns appear.

### Input allowed

If you set Input Allowed = Yes (the default), end users are allowed to edit fields and spreadsheet columns based on the column.

If you set Input Allowed = No, end users are not allowed to edit these fields and spreadsheet columns. In certain displays, this is marked by a greyed-out background. Use this option if the column value is determined by a productive constraint.

## Special column attributes

This section discusses column attributes that are only important in special cases.

### In Display Selection

Use this column attribute to decide which columns are shown in lookup windows defined on the table in the default application. Only columns that have a sequence number as a value for In Display Selection are shown in lookup windows. The sequence number determines in what order these columns are shown.

If you leave In Display Selection empty for all columns, USoft applies its own default for columns in lookup windows.

### Updatable


:::danger

Setting Updatable to a different value than Yes introduces major inflexibility in data import situations. If possible, it is better to achieve non-updatability of a column by choosing a GUI implementation.

:::

- If you set Updatable = Yes (the default), fields and spreadsheet columns for the column are normally updatable (editable) by end users.
- If you set Updatable = No, the value for the column that was introduced when the record was inserted can never be changed.
- If you set Updatable = Only if Null, the value for the column that was introduced when the record was inserted can only be changed if that value is the NULL value. Once the change is committed, it cannot be rolled back.

Updatable = (null) is obsolete and only provided for backward compatibility.

### Query Allowed

If you set Query Allowed = Yes (the default), users can use a field or spreadsheet column for the column to enter query conditions in Query Mode.

If you set Query Allowed = No, this possibility is blocked.

### Type

If you set Type = Database (the default), the column is implemented as a database column in the RDBMS table.

If you set Type = Virtual, the column is implemented as a virtual column (or: joined column).

### Displayed

If you set Displayed = Yes (the default), controls or slots for the column will appear in defaul windows and web pages.

If you set Displayed = No, the column will be hidden from users of the default applications.

### Default Value

If you set Default Value for a column, this is the value shown for the column in new records. If the user does not edit the value, this is also the value that will be stored in the database record.

You can define a Default Value for a column in the same way you define a Default Value for the underlying domain.

Always consider defining the default value for the underlying domain, rather than for the column itself. If you set Default Value for a column, any Default Value specified at domain level will be overwritten (ignored). Use this option only if it is essential that a column shares a domain with other columns, but must still have its own default value.

### Help Text

Help Text entered here will be displayed to the user of the default applications when the user puts input focus on a field or spreadsheet column defined for the column.

If you leave Help Text empty, then Help Text for the underlying domain (if any) will be displayed.

### Interface

If the column being defined is part of an application that you expose to other applications as a module, you can set Interface = Yes to signify that the column must be made accessible to the consumer application. You can set Interface = No (the default) to signify that the column must be hidden from, not exposed to consumers.