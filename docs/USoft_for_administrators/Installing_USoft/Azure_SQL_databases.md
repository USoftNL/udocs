---
id: Azure_SQL_databases
---

# Azure SQL databases

From USoft 10.0.1H, Azure SQL Databases (provisioned as well as serverless) are fully supported.

For the best experience with an Azure SQL Database you are advised to install at least Microsoft OLE DB Driver 18.6 for SQL Server, but preferably Microsoft OLE DB Driver 19 for SQL Server. The download can be found here:

https://docs.microsoft.com/en-us/sql/connect/oledb/download-oledb-driver-for-sql-server?view=sql-server-ver15

## Connection resiliency

As of OLE DB Driver 18.6, the driver supports idle connection resiliency which allows the driver to automatically restore broken idle connections. More information can be found here:

[https://docs.microsoft.com/en-us/sql/connect/oledb/features/idle-connection-resiliency?view=sql-server-ver15](https://docs.microsoft.com/en-us/sql/connect/oledb/features/idle-connection-resiliency?view=sql-server-ver15)

There are three settings which influence connection resiliency:
-    Connection Timeout: the maximum time in seconds a (re)connect is allowed to take. The default is set to 20.
-    Connection Retry Count: the number of times a reconnect is attempted in case of a failure. The default is set to 3.
-    Connection Retry Interval: the time in seconds to wait before attempting another reconnect. The default is set to 3.

In summary, by default, in total 3 times 20 seconds with 3 seconds interval will lead to a maximum of 66 seconds for the total reconnect attempt. More information about these times can be found on the idle-connection-resiliency page mentioned earlier.

## Dynamic reconfiguration

Microsoft states that in case of  a dynamic reconfiguration of a server, the reconfiguration should be completed in 60 seconds. More information can be found at:

[https://docs.microsoft.com/en-us/azure/azure-sql/database/troubleshoot-common-errors-issues?view=azuresql](https://docs.microsoft.com/en-us/azure/azure-sql/database/troubleshoot-common-errors-issues?view=azuresql)

## Encryption settings

Finally, you can influence encryption settings. The default for using encryption has been changed by Microsoft from No to Yes. To be backwards compatible, USoft sets the encryption to No by default.

The default value of the connection timeout can be changed by means of a resource setting in the USDI / USDIW file:

```
*connectionTimeout: 20
```

The default value for the Retry Count, Retry Interval and Encryption can be changed by means of another resource setting in the USDI / USDIW file:

```
*providerString: ConnectRetryCount=3;ConnectRetryInterval=3;Encrypt=no;
```

## Auto-Reconnect

Auto-Reconnect is now supported also when running from database and also for the Designer tools (Windows Designer, Web Designer).
    