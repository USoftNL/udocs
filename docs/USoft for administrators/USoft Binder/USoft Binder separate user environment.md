# USoft Binder separate user environment

> [!NOTE]
> This topic is not typically relevant when you first start with USoft.

In USoft Binder, you can set up a user environment that is in a different location than the Development environment.

To set up a separate user environment:

1. In USoft Binder, on the Database tab, choose the Separate Properties for Repository and Application option box and click this button to define database properties separately for repository tables and application tables.
2. Click the Define button to open the Separate Properties for Repository and Application dialog.
3. Create user USREP in the database which will contain the repository tables.
4. Create user USAPP in the database which will contain the application tables.
5. Create a Binder item for 'Separate Properties for Repository and Application'.
6. Create Authorizer tables in USREP, by switching the Authorize for Repository option ON. This option is a property of the Authorizer item.
7. Create Authorizer tables in USAPP, by switching the Authorize for Repository option OFF. This option is a property of the Authorizer item.
8. Create Definer tables in USREP.
9. Open the Authorizer of USAPP and create the application TESTAPP. The owner is USAPP who is a member of the usergroup TESTAPPGRP.
10. Define your application tables in the Definer and create tables. The database application tables can be found in USAPP.
11. Open the Windows Designer (TESTAPP) to create and paint classes.

> [!NOTE]
> If the application TESTAPP is opened from within the data dictionary, an error message will appear: "Cannot find a proper repository for USAPP" and you will not be able to view your painted classes.

In order to able to view your painted classes, add to the 'Special' field in the application properties, the following (WD) settings:

```
-wdrdbms OraLogin –wddatabase "<Local>" –wdu USREP –wdowner USREP –wdpw USREP
```

Press the Back button on the top menu bar to return to the previous help topic.