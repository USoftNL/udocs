---
id: Versioning_predefined_REST_services
---

# Versioning predefined REST services

 

This help topic is about versioning predefined REST services. You can also version custom REST services.

USoft predefined REST services offer simple, standard, default functionality. But the underlying data structures can still change.

For example, you can use the USoft Table Resource to quickly build a standard interface for accessing data in a table T. But table T can change overtime: initially (in "Version 1"), it may have 2 columns, but at some point (in "Version 2") a 3rd column may be added to it.

When a data structure changes, you can continue to support multiple concurrent REST versions that connect to it. A typical way to achieve this is to use Logical Views but there are also other techniques.

## Logical Views

You can create a Logical View as a REST-specific interface between the REST clients and the changing data structure.

Do this by creating different Logical Views on table T for different versions. Use the version number in the Logical View Name:

**Logical View: T_V1**

```sql
SELECT     column1
,          column2
FROM       t

```

**Logical View: T_V2**

```sql
SELECT   column
,        column2
,        column3
FROM     t

```

Clients expecting Version 1 use a request URL of type:

```
http://localhost:8090/myservice/myconnection/T_V1
```

Clients expecting Version 2 use a request URL of type:

```
http://localhost:8090/myservice/myconnection/T_V2
```

Just to give another example, if column DEFINED was renamed to CONSOLIDATED in Version 2 for reasons unrelated to the REST interface, you can use an alias in a Logical View to shield clients from this change:

**Logical View: T_V2**

```sql
SELECT    column1
,         ...
,         consolidated  defined
...

```

## Rules-Based Logical Views

Letting REST clients talk to Logical Views instead of directly to the database tables introduces a lot of the flexibility that you need when versioning REST interfaces against a changing data structure. However, especially with POST and PUT HTTP verbs, you may need more sophisticated techniques.  In this case, consider Rules-Based Logical Views. These views allow you to specify in USoft constraints what data manipulation must be executed in the background when a REST client attempts to manipulate data in the view.

For more information, go to help topic " Designing REST-specific interfaces ".

 