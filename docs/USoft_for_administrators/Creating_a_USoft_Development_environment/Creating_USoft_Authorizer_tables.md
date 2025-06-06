---
id: Creating_USoft_Authorizer_tables
---

# Creating USoft Authorizer tables

To be able to use USoft Developer, the team needs authorisation tables.

## Database connection

First, define a database user as the repository owner. It is in the account of this user that the shared development repository is going to reside.

From a machine that can reach the database server using a valid database connect string, create a USoft Binder file. In this file, choose File, Project Properties from the menu. In the Project Properties sheet, on the Database tab, specify username, password and the database connection string. Leave the Owner field open: you only need to use the Owner field if the user you use for login is different from the owner of the tables you want access to - in this case, the repository tables.

Make sure that in the Project Properties dialog, on the Project tab, you specify Project Type = "Development" (the default).

## Project name

USoft Binder files are for a specific development project. If you have more than one USoft project, make sure that on the Project tab, you specify a Project Name in each Binder file you create. It is usually a good idea to give the same name to the Binder file itself (which will have file extension .USB).

## Development repository and design-time application tables

USoft Binder allows you to define separate database connection properties for the shared development repository and a (test) application. Define separate database connection properties for repository and application, if you want each development team member to use different database accounts for the repository tables and runtime application tables (used during development for application testing and prototyping). You can alternatively decide if you want to do this once the project is under way.

If you chose to have separate database connections for repository tables and test application tables, make sure you select the Authorize for Repository option (an Authorizer item property) to create Authorizer tables for the repository user first. If you don't, the authorization tables will be created in the other database account instead. The separate database accounts may be on different types of databases, for example, Oracle vs. SQL-Server.

## Creating USoft Authorizer tables

As the repository owner, create the USoft authorization tables:

1. Make sure the USoft Binder file discussed in this help topic has an Authorizer item. If it does not, create it by using Item, New.

2. Right-click this item and choose Create Tables.

This creates the repository tables required to work with USoft Authorizer. These tables are recognisable because their names start with the T_AUTH_... prefix.

This also authorises the Owner as a user of the USAUTH (= USoft Authorizer) application. You can see this by looking in authorization tables in USoft Authorizer.

 