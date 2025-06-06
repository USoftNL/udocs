---
id: Rules_Engine_parameters
tags: [USoft10]
---
# Rules Engine parameters

A Rules Engine has configurable behaviour determined by a fixed set of **Rules Engine parameter** settings determined at development time. All the parameters have USoft factory defaults.

- You can resetting a parameter at development time. This is explained in the next alinea.
- You can**also change many parameter settings *dynamically,* ie., at runtime. You can do this by calling [RulesEngine.SetProperty](/docs/Extensions/RulesEngine_internal_component/RulesEngineSetProperty.md).

> [!TIP]
> Do not confuse with [Rules Engine properties](/docs/Modeller_and_Rules_Engine/Rules_Engine_properties). Do not confuse with [Deployment Configuration parameters](/docs/Authorisation_and_access/Deployment_configurations/Deployment_configuration_parameters.md).

## Viewing and setting Rules Engine parameters

To view and (re)set a Rules Engine parameter:

1. In USoft Definer, choose Define, Rules Engine Parameters.
2. In the Settings column, change a setting as appropriate. Save.

## Rules Engine parameters

This is an alphabetic list.

### ALLOW_PLUGINS

> [!CAUTION]
> Due to improvements in USoft Authorizer 10.1, ALLOW_PLUGINS is no longer supported from USoft 10.1 onwards.

----

`10.0.x``{.vs_10}`

Specifies if this application allows plugins to be added to the application.

The default is ‘True’.

----

### ALLOW_SET_MANIPULATIONS

If set to 'False’, SQL manipulations are processed record-by-record.

If set to 'True’, SQL manipulations are allowed to be processed in a set-oriented way. This happens when the Rules Engine determines this is possible.

Possible values are 'auto', 'True' and 'False'. The 'auto' value (the default) is the equivalent of ‘True’ for RunBatch, and ‘False’ for Client Server and Rules Service.

In record-by-record manipulation, the default mode of operation outside runbatch.exe, the Rules Engine executes all productive and restrictive constraint action for one record (this is referred to as *row event*) before moving to the next record. For each record, a separate SQL manipulation statement is sent to the database.

In set-oriented manipulation, the Rules Engine checks if it is possible to send a single SQL manipulation statement affecting rows.

Set-oriented manipulation can be faster but has logical drawbacks. In set-oriented manipulation, it is possible that a manipulation affecting multiple records is sent to the database as a single SQL statement. There will be no automatic refresh of records on the screen. Also, the Rules Engine will perform no uniqueness checks. If a unique key violation takes place, the user will see a database error message instead of a USoft error message.

The Rules Engine will always operate in record-by-record mode when:

- Constraints defined on the manipulated table must be evaluated, which is not the case when these constraints are deactivated.
- Relationship columns (primary or foreign key columns) are changed within the manipulation.
- Column Rights have been defined on the manipulated table.
- The manipulation statement contains an 'INVOKE' clause.
- The manipulated table is a view, a temporary table, or a static table.
- For INSERT statements, default values are defined for columns of the manipulated table that are not specified in the statement.
- Generate Unique Values has been set for a column of the manipulated table.
- The manipulated table is being referenced a second time in the new-values part.
- The Auto-Commit application property has been set to Yes.
- Productive domain constraints, domain checks or column checks have been defined on the manipulated table.

The default for ALLOW_SET_MANIPULATIONS is ‘auto’.

### COMBINE_QUERIES

Specifies if the Rules Engine should combine the statement used to retrieve and lock the records to be updated with the statement used to determine the new values.

The default is ‘True’.

### DEFAULT_DATE_FORMAT

Specifies the default IO format to be used when converting a date into a string.

The default is ‘DD-MON-YY’.

### DEFER_RESTR_REL_CHECKS

Specifies the moment when restrictive relational checks are performed.

In a relationship, the Update Rule and Delete Rule attributes can be set to 'Restricted' to indicate that it is not allowed to update or delete a parent record for which corresponding child records exist. If the DEFER_RESTR_REL_CHECKS parameter is set to True (the default), these restrictive checks are performed at commit time. Otherwise, the checks are performed at record-store time.

The default is 'True’.

### LOCK_PARENT_ON_SEQNO

Specifies whether parent records must be locked when child records are being entered. This type of locking prevents identical generated values in a child column that is part of a key spanning multiple columns.

The default is 'False’.

### QUERY_ORDER_TURNING_POINT

Specifies the the maximum number of rows that can be returned by a component table in order to be the first table fetched.

The default is 100.

### RDBMS_CONNECT

Specifies whether or not a USoft application should try to reconnect to the database after a connection failure.

Possible values are 'auto' (the default) and 'no reconnect'.

If this parameter is set to 'auto', the USoft application will try to reconnect.

If this parameter is set to 'no reconnect', the USoft application will not attempt to reconnect to the database. This can be a desirable setting for security reasons.

The default is 'auto’.

### READ_ONLY_ODBC

Applies only to Rules Service contexts.

Specifies if the Rules Service when accessed via ODBC is restricted to querying (or: returning) application data, as opposed to being allowed to manipulate application data.

This parameter has an effect in settings where an application (such as MS Excel) calls a Rules Service that accesses the USoft ODBC data provider, as opposed to accessing a USoft data source through a non-ODBC channel. In such a setting, if READ_ONLY_ODBC = True, the Rules Service is restricted to querying (or: returning) application data, as opposed to being allowed to manipulate application data.

Using this parameter is a shortcut way of implementing authorisation rules. The alternative is to grant a Table Right with Access Right = SELECT for each combination of role and application table.

The default is 'False’.

### ROLE_MERGE

Specifies whether access to functionality must be merged for application users who have multiple roles.

The default is ‘False’.

### STARTUP_EVENT

Specifies if the Rules Engine should initiate a startup event by inserting a record in table T_EVENT at startup.

> [!TIP]
> If you set STARTUP_EVENT to True, a default T_EVENT table is generated for this purpose.

The default is ‘False’.

### TEMP_TABLE_AT_OWNER

Specifies if temporary tables are to be created in the owner's schema.

The default is ‘False’.

### TRANSACTION_CHAIN_DEPTH

Specifies the maximum number of chained transactions.

The default is 500.

### UNIQUE_KEY_CHECK

Specifies whether the Rules Engine must perform unique key checks in the case of non-manual data entry, for example sql-script() functions.

If this parameter is set to True, error feedback will be faster.

If it is set to False, performance will be slightly better in the case of non-manual data entry, for example when SQL is executed by the SqlScript() action. In this case, unique key checks are still performed by the RDBMS so that data integrity is ensured. For data entered manually, unique key checks continue to be performed by the Rules Engine.

Set this parameter to False only in time-critical situations where overall performance.

The default is 'True’.

### UPDATE_SUPERTYPE_ON_INS

Specifies whether inserting a subtype for an existing supertype must be considered as an UPDATE on the whole constellation.

If this parameter is set to False, when a subtype is inserted for which the supertype already exists, an error will be raised because the key is not unique.

If this parameter is set to True, inserting a subtype for an existing supertype will be considered as an UPDATE on the whole constellation. In this update the subtype indicator column(s) will be set as well. Note that in this case only those transitional constraints that have been specified as Fire On Update will be fired.

The default is ‘False’.

### UREQUIRE_INPUT_XSL

Specifies the filepath and filename of the XSLT transformation (if any) that must be applied to business rule input from URequire before it is imported into USoft Teamwork.

The default is (null).

### VERIFY_VIEW_WHERECLAUSE

Specifies if manipulations on logical views should be checked to see if they match the view’s WHERE clause or not.

The default is 'True’.

 