# USoft Remote Rules Service API for ODBC

The USoft Remote Rules Service API offers a unique repository-based interface to external programs and desktop tools that support the Microsoft standard ODBC programming language interface, such as MS Excel, MS Word, MS Access and Lotus Approach. It is the first such driver that guarantees execution of all the business, integrity, and security rules at all times. Those rules are stored and managed within the USoft Developer repository. USoft Developer manages the data manipulation in RDBMSs such as SQL Server or Oracle.

ODBC is a de facto IT standard call-level interface that is available all over the world. By means of this interface you can connect your application to the interactive USoft Developer rule server, but also to other ODBC drivers that the major database vendors supply. The benefit of the USoft Remote Rules Service API is that you do not have to re-program all business rules. This saves time, money and guarantees quality, because you only have to define and manage them in one place.

The USoft Remote Rules Service API conforms to:

- The Level-1 API functions.
- The Core SQL Grammar, excluding the SQL Data Definition Language (DDL) statements such as CREATE, ALTER, DROP, GRANT, and REVOKE. See the document file CONFRMNC.DOC in the DOC\\ODBC directory for more detailed information. You can also run the CONFRMNCE.EXE program to retrieve conformance information from the USoft Remote Rules Service API.
- ODBC date-time extension syntax.
- ODBC scalar function extension syntax.

## Error messages

Some messages are posted by the Microsoft driver manager, others by the USoft Remote Rules Service API. These messages contain their origins. The driver supports the use of the error messages listed in the following table.

|**Message**|**Location**|
|--------|--------|
|[Microsoft][ODBC Driver Manager]message_text|ODBC32.DLL( 32-bit)|
|[USoft][Remote Rules Service]message_text|UREODBC.DLL|



## Multi-user databases to the Microsoft desktop

The Microsoft desktop tools include Microsoft Query that is a self- contained, ODBC-enabled data access application. Use Query from Microsoft Excel, for example, to bring data from remote database files and tables into your worksheet for analysis, reporting, and charting.