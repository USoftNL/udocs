# Creating USoft application tables in the database

The purpose of a USoft user application is to allow end users to interact with data governed by a Rules Engine. These data are stored in USoft application tables.

- You need to determine in which location (which database, database schema, database account) you want these application tables to reside.
- You then need to set up a routine so that, with each application release, you can successfully (re)create these tables (below).
- You also need to authorise end users in USoft so that they are allowed to access the tables.

## Creating USoft application tables

### Conventional database script

The conventional way to (re)create application tables at application release times is to get developers to deliver, for each release, a SQL script that you can run against the database.

Developers have a tool called USoft Definer where they can produce such a script (through the Tools, Create Physical Tables menu option).

Conventional create-table scripts address only database structure. You may need separate scripts for deliverable application *data* in the tables.

### Delivery Manager upgrade scripts

USoft has a specialised Delivery Manager tool that allows developers to create more sophisticated installation scripts that deliver not only database structure changes but also application data. Typically, these scripts are executed using a USoft XML-based scripting tool that involves calling the following executable:

```
*USoft-installation-folder*\BIN64\ublendit.exe
```

Authorising end users to use application tables

Authorization for the production environment is set up in the same way as authorization for the development environment. That is:

- USoft Authorization tables are created for the application owner.
- Using these tables, end-users are registered and authorized by the application owner. In this way, authorization changes can be made dynamically (i.e. whilst the application is being used).
- This way of working requires that appropriate end-user access rights to the application owner's are also granted at RDBMS level.