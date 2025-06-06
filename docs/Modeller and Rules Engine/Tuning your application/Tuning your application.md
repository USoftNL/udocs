# Tuning your application

The performance of your USoft application can be optimized by complying to the following (general) rules:

- For optimum performance, applications should be run from flat files in the production environment. Use the Binder to make sure that the "-ddfile" option and the application name are specified on the command line that starts the application.
- Minimize network traffic.
- Run your application with the RDBMS's SQL trace facility enabled, or use USoft BenchMark's Profiler. From the resulting statistics, and after discussing the application's performance with end-users, determine which SQL statements take the most time to process, or are considered the most "irritating". Concentrate your tuning efforts on these statements.
- Define additional indexes on columns that are frequently used. Consider defining an additional index on frequently-used foreign keys, on columns frequently used in constraints or popular queries, and on combinations of columns that are often queried if the remainder of the table consists of many other columns, or of columns that are rarely queried.
- Optimize the performance of your database server. If you use a PC as application server, put the flat files on a RAM disk. (Refer to your Windows manual for details.)
- On your PCs (both clients and servers), minimize the use of conventional memory.
- If certain windows are used regularly and others hardly ever, runtime users can have USoft Developer cache these windows at startup. Although this will slow down the startup process, it will drastically increase performance when the application is up and running.

## RDBMS performance hints

Before you start defining your application it may wise to read the performance hints provided by the vendor of your target RDBMS. Also, keep the following in mind during the development project:

- If you use joins, make sure that the table from which you expect to retrieve the smallest number of records comes LAST in the FROM clause.
- If you use GROUP BY constructs, use WHERE clauses instead of HAVING clauses as much as possible.
- In WHERE clauses, use columns that have been indexed.
- Implementing subtypes/supertypes in ONE table will often be faster than implementing them in separate tables. You can evaluate the performance from situation to situation, and make your decision(s) accordingly.

Further, you can set the following resources in the USDIA or USDIW files to improve performance on Oracle databases:

**holdCursor**

This resource specifies whether cursor should be kept for later use. The default value is True.

```
*holdCursor: { True | False }

```

**maxOpenCursor**

This resource is a hint for the maximum number of open cursors at any one time. The default value is 75. This resouce has no effect on the number of open cursors that the database itself will allow. The resource acts on the USoft side of the connection, and the performance gain is based upon reduced parsing of statements. The real limit for the maximum number of open cursors is set in the global Oracle file. .

```
*maxOpenCursor: integer

```

**optimizationArea**

This resource is used to balance network traffic and memory usage. The value specifies the size of the memory blocks (in bytes) used to optimize record fetching from the database. Using the array fetching facilities, an array of records fetched is buffered in this memory block. The array size depends on the number of records that will fit in the optimization area. If you specify a very small number (e.g. 1), array fetching will not be used at all. The default value is 2048.

```
*optimizationArea: integer

```

## Tuning at the level of referential integrity

USoft Developer enforces referential integrity on all database objects of your application. Depending upon your hardware, network, and simultaneous number of users, this may slow down processing speeds because records will frequently be locked.

**Disabling total locking**

It is possible to disable total locking of the foreign key. Changing the "lockForeignKey" resource of the Integrity object will accomplish this, thereby making the relationship check "softer", and enhancing concurrency.

```
*Integrity.lockForeignKey : False

```

The foreign key will still be locked during commit.

**Locking behaviour**

When a request is made to lock a record but the record is already locked by another process, the behaviour of USoft can be influenced in two ways: .

1. By default, the lock timeout on SQL Server is 10 seconds: the Rules Engine waits for a maximum of 10 seconds when requesting a record that is already locked.

This timeout can be changed by adding the following resource setting to the command line, using the -xrm option:

```
    -xrm "*OledbLogin.timeout:60"

```

or

```
    -xrm "*timeout:60"

```

In this instance, the result is a timeout of 60 seconds. Increasing the timeout has the advantage that timeout error messages do not appear too soon, and stop the transaction too soon. A disadvantage is that too long a timeout may cause a user to wait too long for a locked record.

2. When running against Oracle, a Select statement can be executed to retrieve and lock records by using the " FOR UPDATE OF " clause. Select statements with a " FOR UPDATE OF " clause, can be directed to skip records which are already locked, without giving an error, using the "SKIP LOCKED" clause.

*Syntax*

```
 SELECT column FROM table FOR UPDATE OF column SKIP LOCKED

```

**Postponing validation (Oracle)**

In Oracle, it is also possible to postpone the validation of foreign keys and unique keys until rows are stored. You do this by setting the referentialValidation resource of the Query object:

```
*Query.referentialValidation : False

```

 

> [!NOTE]
> Always remember that USoft Developer allows you to try and change rather easily, and at relatively low costs. Therefore, if you are not satisfied with the performance at some point, change your specifications in the repository and then regenerate your application and the corresponding database structure.