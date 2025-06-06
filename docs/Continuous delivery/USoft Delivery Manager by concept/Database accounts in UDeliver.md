# Database accounts in UDeliver

> [!NOTE]
> This article is about the **database account** concept in USoft Delivery Manager ("UDeliver”).

A  *database account* is a location in a physical RDBMS where appdata or metadata of an application are kept in a set of database tables.

Such a location is identified at RDBMS level by a database (SQL Server) or a database user account (Oracle). Delivery Manager only supports database accounts in the SQL Server and Oracle RDBMSs.

In Delivery Manager, in the same way as in USoft Binder, a database account is identified by the combination of a username, password, and database connect string.

Relationships between database accounts and applications are not registered in the Delivery Manager data model. Rather, you imply such a relationship at the time when you come to call an action, when you are usually asked to pass the combination of 2 parameters: Application and Database Account.

To define or view database accounts in Delivery Manager, choose Define, Database accounts from the menu.

A database account defined in Delivery Manager has the following properties.

- You can have database accounts for logging on as a named RDBMS user.
- From USoft 10.0.1H, you can also have database accounts for logging on to the SQL Server RDBMS using Windows Authentication.

## Database account for logging on as a named RDBMS user

To get a database account for logging on as a named RDBMS user, fill out the fields as follows.

> [!TIP]
> Database account, User name, Password and Database platform are all required, except that User name and Password must be empty if you use Windows Authentication in SQL Server.
> Owner is optional, whether or not you use Windows Authentication in SQL Server. If Owner is empty, Owner is understood to have the same value as User name.

### Database account

The required string name that uniquely identifies the database account in Delivery Manager. This name is not used outside Delivery Manager.

### User name, Password, Database platform, Database connect string, Owner

These settings work the same as in USoft Binder (where they are called User, Password, RDBMS, Database, Owner). Full details are at [USoft Binder for administrators](/docs/USoft%20for%20administrators/USoft%20Binder/USoft%20Binder%20for%20administrators.md).

### Invoke

A non-editable field that Delivery Manager compiles on the basis of what you enter in the (6) editable fields discussed above. This value is used for compiling INVOKE calls for executing Delivery Manager actions that operate by accessing the database account. You can view the complete INVOKE calls in the Define Tasks window (choose Define, Tasks from the menu).

### Description

An optional field for notes about the database account.

----

![](/api/Continuous%20delivery/USoft%20Delivery%20Manager%20by%20concept/assets/98512815-2a01-4af1-9362-e0dfd8907899.png)



## Database account for SQL Server Windows Authentication

To get a database account for logging on to the SQL Server RDBMS using Windows Authentication, fill out the fields as follows.

### Database account

A string name that uniquely identifies the database account in Delivery Manager. This name is not used outside Delivery Manager.

### User name

For SQL Server Windows Authentication, leave this field empty.

### Password

For SQL Server Windows Authentication, leave this field empty.

### Database platform

Set this field to 'MSSqlServer’.

### Database connect string

The database connect string that identifies the database that the database account is in. This is the same database connect string as used in other USoft tools, eg., USoft Binder.

The database you want to access is identified by the part following the colon (**:**). For details, go to [Connecting to the RDBMS](/docs/USoft%20for%20administrators/Installing%20USoft/Connecting%20to%20the%20RDBMS.md).

### Owner

In USoft 10.0.1H, if you leave User empty, you must also leave Owner empty. From USoft 10.0.1I, if you leave User empty, you can still specify Owner. This will cause database tables to be created in a different schema: the schema of the specified owner. In MS SQL Server Management Studio, the owner (the schema) will show up as a prefix-dot notation:

```
*owner.table*
```

### Invoke

A non-editable field that Delivery Manager compiles on the basis of what you enter in the (6) editable fields discussed above. This value is used for compiling INVOKE calls for executing Delivery Manager actions that operate by accessing the database account. You can view the complete INVOKE calls in the Define Tasks window (choose Define, Tasks from the menu).

### Description

An optional field for notes about the database account.

----

 