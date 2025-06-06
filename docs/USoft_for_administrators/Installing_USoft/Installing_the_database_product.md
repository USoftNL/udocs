---
id: Installing_the_database_product
---

# Installing the database product

A USoft environment must run on a relational database. USoft supports design-time development and runtime application use on the following databases:

- Oracle
- SQL Server, native driver
- SQL Server, ODBC driver (USoft 10.1 and 11.0)
- Azure SQL
- PostgreSQL (Beta, please contact USoft Support)
- ODBC and JDBC (Beta, please contact USoft Support)

> [!WARNING]
> In addition, USoft 10 is being tested for ODBC and JDBC (Derby) connections. Contact USoft Support if you consider these connection types for your USoft 10 project.

In a Development environment, make a central database server available to users. USoft recommends that you create a separate database user (database account) for each development team member.. If a file system network is used, ensure database connectivity so that all development machines can connect to the development repository.

In a Production environment, a range of multi-user authentication options is possible. The optimal configuration depends on the nature of the software you are delivering. For example:

- Use of public web services and REST services may be anonymous or may require password or biometric authentication handled by the USoft application.
- A typical setup for USoft web applications is to have a funnel account on the database, and let the USoft layer handle authentication, possibly with the help of Active Directory.
- For USoft client/server applications in production, you have the option to let the RDMBS or USoft handle authentication. See the USoft Authorizer and USoft Web Designer help for details.