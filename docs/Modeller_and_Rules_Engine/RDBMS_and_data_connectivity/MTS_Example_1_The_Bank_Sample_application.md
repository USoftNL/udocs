---
id: MTS_Example_1_The_Bank_Sample_application
---

# MTS Example 1: The Bank Sample application

In this example, an MTS component connects to the Rules Engine via the USoft Remote Rules Service API. Microsoft provides the Bank Sample application as an example with the installation of MTS. To use this sample with USoft:

- Follow the Microsoft instructions to setup the Bank Sample application and start it. You can install this application either on Microsoft SQL Server or on Oracle with the Microsoft ODBC for Oracle driver. Only this driver, provided by Microsoft with the installation of MTS, is compatible with MTS.
- Use the Teamwork object shopping facility to import the Bank Sample application definition in a USoft repository. This application is stored in the BankSample.exp file in the \<USoft installation>/app directory.

This export file contains an ACCOUNT and a RECEIPT table. Also, a business rule has been implemented by a constraint: "You cannot credit more than $300 to one account".

- Open the default application and insert some example data. Insert at least two accounts, each with an amount of money and insert one receipt.
- Use the ODBC Data Source Administrator to add a User Data Source Name (User DSN), using the SQL Server driver if you are using an SQL Server database or the Microsoft ODBC for Oracle driver if you are using an Oracle database. The Rules Engine must connect to the RDBMS where the Bank Sample application has been installed.

 

Refer to the USoft Remote Rules Service API Help for more information.

 

- On the File DSN tab page of the ODBC Data Source Administrator, remove the "MTSSamples.dsn" file.
- Add a new "MTSSamples.dsn" File DSN by using the USoft Remote Rules Service API Driver. Fill in the correct settings so that it connects to the User DSN connection that you have just made.
- In the ODBC Data Source Administrator, on the Connection Pooling tab page, double click "USoft Remote Rules Service API 8.0" and set "Pool Connections to this driver" and set "Time that unused connections remain in the pool in seconds" to 600.
- Start the Microsoft Transaction Server Explorer and check that the Distributed Transaction Coordinator (MS DTC) is running.
- Start the Bank Sample application and add or retrieve money to an account. If the amount is between 300 and 500, the Rules Engine will abort the transaction. The MTS Bank.Account component already contains a rule that limits the amount to 500.

 


:::note

The Microsoft Data Access Components (MDAC) are also installed with the installation of MTS.

:::

 

If MDAC version 2.1 is installed, the OLEDB Resource Dispenser is chosen by default, rather than the ODBC Resource Dispenser.

 

Therefore, if MDAC version 2.1 is installed, you must check the following:

 

- In the Registry Editor, navigate to the Microsoft OLE DB Provider for ODBC entry. This entry has class ID:

**HKEY_CLASSES_ROOT\\CLSID\\{c8b522cb-5cf3-11ce-ade5-00aa0044773d}**

- If the Default value for this entry is 'MSDASQL' and an 'OLEDB_SERVICES' entry exists, you must delete the OLEDB_SERVICES entry.

 

In the MTS Bank Sample application, each component is written in three different languages: Visual Basic, C++ and Visual J++. From the Bank Sample application client window, you can select which components you want to use. You can also look at the source code to see how these components are written.

 

You can use Visual Basic or C++ for the Bank Sample Application. Visual J++ is currently not supported by USoft.

 


:::note

The Visual Basic component was written so that when a credit or a debit fails, it is assumed that the ACCOUNT table does not exist and an attempt is made to create the table. As creation of tables is not allowed with the USoft Remote Rules Service API (only data manipulations), this will fail. Thus, when crediting an account with an amount of money between $300 and $500, the error message will not display the Credit Rule error but a syntax error. The component written with C++ does not try to create the table and will, therefore, show the correct error message.

:::
