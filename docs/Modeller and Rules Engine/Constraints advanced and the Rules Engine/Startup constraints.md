# Startup constraints

You can write constraints that are evaluated when a Rules Engine is started. This happens for example when you start an application, run a batch job, or connect to the USoft Remote Rules Serice. This allows you to define a restrictive rule that prevents a user from starting a USoft application after a certain time, or a productive rule that keeps track of which users use the application and at what time.

To use this mechanism:

1. Open the Definer.

2. From the menu, select Tools, Rules Engine Parameters.

3. Query for the Parameter Setting with name STARTUP_EVENT.

4. Change the Value to True.

This causes a default generated table called T_EVENT to be generated in your repository.

When a Rules Engine is started, a record with a generated unique session id and the 'STARTUP' event value is inserted in the T_EVENT application table. This table contains two columns:

- SESSION_ID
- EVENT

These two columns make up the primary key and are based on the SHORT_TEXT domain.

If a restrictive constraint that is defined on T_EVENT is evaluated, the constraint message will be displayed, and you cannot use the application. The application can only be closed.

To be able to use startup constraints:

> [!NOTE]
> In a production environment, make sure that background INSERT rights have been defined on the T_EVENT table.

The generated unique session identifier can also be used in other SQL statements. For this, you can use the SESSION_ID() USoft function with no parameters. This function returns the SESSION_ID value that was inserted in the T_EVENT table when the Rules Engine was started.