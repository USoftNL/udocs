---
id: External_tables
tags: [USoft11]
---
# External tables

`USoft 11``{.vs_11}`

## What is an external table?

An **external table** is a table declared in USoft Definer as if it were a regular database table, but that in fact corresponds to an **RDBMS view** or an **RDBMS synonym**.

Often, but not necessarily, external tables collect data that come from tables located at some distance of the USoft application. Often, but not necessarily, these data are read-only to the USoft application.

## How is an external table different to USoft?

The fact that a table declared in USoft Definer exists in the RDBMS, but as a view or synonym and not as a physical table, means 2 things to USoft.

### Create Tables ignores external tables

Create Tables routines automatically ignore external tables. They do not attempt to create,or drop and re-create, an external table.

You can call a Create Tables routine from context menus in USoft Binder, from the Tools, Create Physical Tables option in the Definer menu, and by pressing the Create button in the Tables window of Definer.

### TDF features ignore external tables

The .TDF export and import utilities in USoft Benchmark automatically ignore external tables.

You can call TDF export and import from the Data Management window in USoft Benchmark and by running UDeliver TDF actions.

## How to create an external table

Declare the external table in the Database Tables window of Definer as per normal.

When Create Tables or TDF export/import is called, USoft will automatically check whether the object by the name of the table is an RDBMS view or RDBMS synonym, in which case the object is skipped.