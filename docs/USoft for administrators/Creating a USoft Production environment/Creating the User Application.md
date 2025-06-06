# Creating the User Application

The User Application is the software that developers have been building in Development with the USoft toolset and that will be run by end users in Production.

## Flat files

A USoft application is typically delivered to a Production environment in the form of a small set of flat files. Alternatively, a user application can run directly from database ("run from repository").

If delivered in the form of flat files, the flat files are:

- *application***.CON file:** Typically, the core of each USoft application is a set of flatfiles containing at least a .CON file.
- *application*.**UMG** and *application***.SMG** files: If the application is translated or if it must run in multiple languages in Production, except .UMG and .SMG files to be delivered.
- *application***.ESI file:** A USoft client/server (Windows) application has an .ESI file containing window interface definitions.

If the User Application is made up of multiple USoft modules, each modules has an *application* name and a set of files is required for each module.

## Web UI files

If the solution includes interactive web pages built with USoft, a set of .XML files containing web page interface definitions is also required. These files will be accompanied by surrounding files that supply the required look-and-feel, in particular, .HTML, .CSS and .JS files.

## USoft Authorizer application

Typically, you run USoft Authorizer in the production environment. This allows you to change data access rights on-the-fly (that is, without deploying a new version of the application from a development environment. See the USoft Authorizer Help for details.

If the application relies on third-party components such as a Java object layer, .NET components or ActiveX controls, these may need to be registered and installed on each production machine.

## Production users access to the User Application

You need to give end users access to the user application from their client machine.

For browser-based access, distribute correct URLs, usernames and passwords to runtime users.

For client/server access to UIs, distribute a USoft Binder file to each runtime user:

- Make sure that for all USoft Binder files in the production environment, you specify Project Type = "Production".
- In the (Read) From field in the Application Properties dialog, make sure you specify "Flat Files", NOT "Repository". You also need to specify the application name in this dialog.
- When specifying username, password and database string, you use the login and connection information of the team member, but in the Owner field you specify the application owner. If you don't, USoft Binder attempts to find the application tables in the end-user's own account.

For client/server access to scripted batch procedures and services, distribute correct scripts or embedded calls to each runtime user as appropriate.

 