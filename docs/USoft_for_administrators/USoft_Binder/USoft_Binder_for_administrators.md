---
id: USoft_Binder_for_administrators
---

# USoft Binder for administrators

**USoft Binder** is a wayfinding application that comes with the USoft product set and runs **USoft Binder files** with (customary) file extension **.usb.**

If you give users USoft Binder files, they have easy access to USoft applications without having to type usernames, passwords, database connect strings and USoft command lines.

## WARNING: Disclosure


:::warning

When you give a person a USoft Binder file with Store Password In This File = Yes (see below for details), you are disclosing access to USoft through the Binder file, and you are disclosing the password itself.

:::

## Using an existing USoft Binder file

A Binder File has **items** listed in the central list view of USoft Binder. You can open the individual items.


:::tip

You can inspect the USoft command line that each item represents. Choose File, Project Properties, Content. Alternatively, you can copy the command directly to the clipboard by right clicking the item and selecting 'Copy Command Line > Full' for the full command line, or 'Arguments Only' for the startup parameters only.

:::

## Creating a new USoft Binder file

1. Find USoft Binder as "usbinder.exe" in the \\BIN64 or \\BIN subdirectory of each USoft installation. Start the application and use File, Save As to save as a file on the file system.

2. Choose File, Project Properties from the menu. On the Database tab, fill out these fields. More explanation on these (6) fields is in the (6) sections later in this article.

|        |        |
|--------|--------|
|User    |The name used to access the database.|
|Password|The password used to access the database.|
|Store Password In This File|Keep this box unchecked for password security.|
|RDBMS   |The database platform.|
|Database|The database connect string.|
|Owner   |The location where the USoft tables are stored.|



3. Choose Item, New from the menu and add the items that you want to give access to.

4. Remember that in User Application, Windows Designer and Web Designer items, it makes a difference what **application** you give access to. You can specify an Application Name by right-mouse-clicking on the items and then choosing Properties.

5. Click Save to save work..

### User

The login name used to access the database where the USoft tables are stored.

If **Owner** is left empty, **User** also specifies the *location* in the database where the USoft tables are stored. See [Owner](#owner) for more details.

On SQL Server, you can leave **User** empty if you want access with Windows Authentication.


:::warning

**SQL Server: Login names or user names?**
SQL Server uses a Login object with a *login name* to connect to a database. The database has knowledge of *users.* The Login object is responsible for connecting login names with RDBMS user names. Many times, login name and user name will be the same, but as you can see, this is not necessarily the case.
If login name and user name are different, USoft default handling depends on whether you use Windows Authentication or not:
If you do not like this default, you can override it by adding a **useLoginNameAsUserName** resource setting in the USDIW resource file. This file is located in the \\APP subdirectory of your USoft installation directory. If you add the following setting:
then USoft will check authorization rules and handle SELECT USER by looking at the **login name**,****regardless of whether you are using Windows Authentication or not.
If you add the following setting:
then USoft will check authorization rules and handle SELECT USER by looking at the **RDBMS user name**, regardless of whether you are using Windows Authentication or not.

:::

### Password

The password used to access the database where the USoft tables are stored.

On SQL Server, you can leave **Password** empty if you want access with Windows Authentication.

### Store Password In This File

Set this flag to No (the default) if you want to prevent unintended access to USoft by people who should not be authorised but have the Binder file in their possession.

Set this flag to Yes only if you have taken measures to prevent the Binder file from falling in the wrong hands. In secure areas, setting the flag to Yes is user-friendly for developers and administrators.

If this flag is set to No, the Binder file does not store the password that you typed in the Password field. The next time this Binder file is opened and used, the Binder user is asked again to supply the password.

If this flag is set to Yes, the password you typed in the Password field is stored in this Binder file. The password is applied each time the file is re-opened. You can prevent the password from being re-stored by resetting the flag to No, pressing OK, and then pressing Save.

### RDBMS

The RDBMS platform that you want to connect to.

### Database

A technical database connect string that points to the database location on the network.

On Oracle, a typical database connect string is

```
(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = myservername.usoft.com)(PORT = 1521))(CONNECT_DATA =(SERVER = DEDICATED)(SERVICE_NAME = XE)))
```

You can use aliases for such strings. Depending on TNS infrastructure and Oracle version, these aliases may be mapped to full database connect strings. If you set this up, you can type the alias in the Database field of USoft, for example:

```
XE
```

On SQL Server, a typical database connect string contains a colon ( : ). The part preceding the colon is the name of the database server. The part following the colon is the name of the database: for example:

```
myservername\SQLEXPRESS:USD100_TRAVEL
```


:::note

For more on database connect strings, go to [Connecting to the RDBMS](/docs/USoft_for_administrators/Installing_USoft/Connecting_to_the_RDBMS.md).

:::

### Owner

The location in the database where the USoft tables are stored. At RDBMS level, this location is called *schema,* a synonym for USoft's *owner.* The RDBMS identifies a table uniquely by the combination of owner and table name (or: schema and table name), using a dot notation:

```
*owner*.*table*
```

If you leave **Owner** empty, **Owner** is assumed to have the same value as [User](#user). If User is equally empty, Owner is assumed to be the Windows Authentication login name.

If you run USoft against Oracle, **Owner** is the schema name and also the name of the RDBMS user who owns the schema that contains the USoft tables (also referred to as *database account*). In Oracle, a schema name is identical to the name of the user who owns the schema.

If you run USoft against SQL Server, **Owner** is the name of the database schema that contains the USoft tables.

## Separate Properties for Repository and Application

In USoft development environments, developers store their work in so-called repository tables. On the basis of this work, they generate end user application tables for testing and debugging.

It is typical to have both types of table under the same database user, but if you like, you can have Repository tables under a different user than the Application tables.

From the USoft Binder menu, choose File, Project Properties, Database. Click the "Separate Properties for Repository and Application” radio button. Press the Define button.

This allows you to specify 2 different sets of values for the (6) properties discussed in the previous section (User, Password, Store Password In This File, RDBMS, Database, and Owner): one set for the Repository tables and another for the Application tables.


:::note

If you use Separate Properties for Repository and Application, on USoft command lines, you need to use distinct options as well.
For example, on command lines, **-ddowner** is for the Owner of Repository tables, and **-owner** is for the Owner of Application tables.

:::

## Free Objects

In addition to items predefined by USoft, you can add in a USoft Binder file entrypoints to any programs of your choosing, by wrapping your command line in a **Free Object:**

1. Choose Item, New from the menu.

2. Select Free Object.

3. Right-mouse-click on the Free Object you have just added to the list, and choose Properties.

4. Specify Program. Specify Startup Options and Start In if applicable.


:::tip

USoft Binder variables are useful in the Startup Options of a Free Object, which could look like this:

:::

## Application grouping: how USoft Binder items are presented on the Windows taskbar

You can determine how the Windows OS groups icons for opened USoft Binder items on the taskbar. This works on Windows 10 and on Windows 11, even though the system of taskbar settings is fairly different between the two Windows versions.

In USoft Binder, choose File, Application Grouping from the menu, then select the option you prefer. Your choice is stored in the registry and therefore will re-apply as the default for each USoft Binder instance you open next. It is only applied to items opened *after* you changed the setting.

|**Option**|**Effect**|
|--------|--------|
|By Type |Opened Binder Items of the same type are grouped together. For example, all opened USoft Authorizer items are grouped together.|
|By Project|Opened Binder items of the same project are grouped together. For example, a USoft Authorizer item and a USoft Definer item opened for the same project are grouped together, but a concurrently opened USoft Authorizer item for a different project is grouped separately.|
|None    |All items opened from USoft Binder are shown separately, no grouping is applied. This is a very nice option if you have text prompts for icons enabled and you place the taskbar vertically (ie., along either the left or right edge of your screen) and stretch it horizontally, because the text prompts will then immediately display how the items are different. Unfortunately, this particular way of organising things is no longer possible on Windows 11.|
|All     |All items opened from USoft Binder, regardless of project or type, are grouped together.|




:::warning

Beware that Windows taskbar settings enable you to switch off all icon grouping. If you use that option, this will override USoft Application Grouping.

:::
