---
id: RDBMS_connection_recovery
---

# RDBMS connection recovery

When a USoft application detects that an existing database connection has been lost, the current transaction is cleared and an internal rollback takes place. A rollback will also be issued on the database.

USoft detects the connection loss during processing of the Rules Engine. Loss of connection may be caused by:

- A database server disconnecting from the client computer due to an idle time out
- A database shutdown for a backup process
- A broken communication link

By default, USoft applications try to reconnect to the database following a connection failure. The user will be aware of the reconnection process if a connection loss interrupted a transaction. The reconnection process may take some time and delay the response on the first request, following a connection failure. If the USoft application is not able to restore the connection, it will display the reason reported by the RDBMS software.

> [!NOTE]
> The user can also specify that USoft applications should NOT reconnect to the database. For example, for security reasons.

To switch off automatic connection recovery:

1. Open the Definer.

2. Open the Rules Engine Parameters window (which can be found under menu item "Define”).

3. Change the RDBMS_CONNECT optimization parameter from 'auto' to 'no reconnect'.

*Example*

Suppose an RDBMS server disconnects from a client computer when it has been idle for 10 minutes.

When USoft Developer is connected to this server, the server will silently disconnect USoft if the application has not been used for ten minutes. When the user attempts to continue with the application, USoft will automatically try to reconnect to the RDBMS server. The status bar displays "Reconnecting" and the application will show a delayed response.

When the USoft application is not able to restore the connection, it will display the appropriate RDBMS error message.

## Exceptions

Database connections can only be recovered if the application is running from flat files, including language files and job files (if applicable).

- USoft Benchmark and Teamwork import/export actions do not support connection recovery. In these cases the result can be unpredictable.
- Connection recovery is not supported when the connection is lost during the retrieval of authorization data. In this case, the application needs to be restarted.