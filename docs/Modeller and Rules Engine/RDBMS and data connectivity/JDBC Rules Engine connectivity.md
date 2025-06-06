# JDBC Rules Engine connectivity

JDBC Rules Engine connectivity allows external Java programs to make use of a USoft repository and benefit from the USoft Rules Engine. This guarantees execution of all the business, integrity, and security rules at all times. The rules are stored and managed within the USoft Developer repository. USoft Developer manages the data manipulation in professional databases, such as Oracle, Sybase, IBM's Universal database, or Microsoft's SQL Server.

JDBC, Java Database Connectivity, is a SQL database access standard, providing uniform access to a wide range of relational databases. It also provides a common base on which higher level tools and interfaces can be built.

JDBC connectivity is comparable to ODBC connectivity to the USoft Rules Engine, known as the USoft Remote Rules Service API. The difference is that JDBC Rules Engine connectivity is intended for Java programs whereas the Remote Rules Service API is intended for ODBC-compliant programs.

Java applications are platform independent. They run on any computer platform. With JDBC Rules Engine connectivity, Java client programs can run on any computer and use JDBC to connect to a USoft Rules Engine.

To use JDBC Rules Engine connectivity, you need a run-time Java 2 environment: Java version 1.2.2 or higher.

Users that attempt to log in via a JDBC connection are verified by the Rules Engine. The user name is checked in the Authorizer. If the Validation Agent for the user is USoft, the USoft Rules Engine checks the password provided in the Java code against the password in the Authorizer. Users with USoft Validation Agent do NOT need their own database account.

## Making Java client programs connect to a Rules Engine

To be able to connect to a Rules Engine, the computer on which the Java client programs run needs a set of JDBC driver Java classes. This is the only additional software requirement on the client computer; no other USoft software is required on the client computer. The USoft JDBC driver classes are delivered within the

```
USoft-installation-dir/java/JDBCClasses.jar
```

Java archive file.

As an alternative, the USoft driver classes are also available in a JDBCClasses.zip archive file. This serves Java virtual machines that do not support the Java archive format.

To make these classes available within Java, the Java virtual machine needs a reference to this jar file in its classpath. For example, to start a Java client program with the USoft classes in its classpath, you have to type in a command prompt window:

```
java –classpath C:\usoft-installation-dir\java\JDBCClasses.jar YourJdbcClient
```

To use the USoft Rules Engine in a Java program, four steps are needed within the Java program:

1. Load the USoft JDBC classes.

2. Open a connection to a Rules Engine.

3. Issue SQL statements via the JDBC API.

4. Close the connection.

The Java code fragments in the following sections can be compiled by a Java compiler and show the contents of a PERSON table that has been defined in a USoft repository.

To use JDBC classes in a Java program, include this import statement in the Java source file:

```
import java.sql.*;
```

##  