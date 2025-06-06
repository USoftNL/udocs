# Connecting non-database users to a USoft application

In a number of cases you want to run a USoft application with a general database account and accept application users who do not have direct access to that database account. This is called account funneling: application users effectively share the same general database account.Validation Agent-specific information (password, mpped user Refer to your USoft Authorizer help for information about funneling and and user authentication.

In this case you still want to have the Rules Engine check rules for the specific application user. This type of deployment typically serves web application architectures. The web users are registered within USoft Authorizer and all authorization rules apply.

To grant a non-database user access to a USoft application:

1.Define the user in the Authorizer.

2.Set the Validation Agent to USoft.

3.Define Validation Agent-specific information (e.g. password, mapped user, agent info.).

4.Attach this user to a user group for the application.

To connect a user to a USoft application that uses a general database account, the following statement must be executed before any other statements are executed on behalf of that user:

```
INVOKE RulesEngine.SetUser
WITH
SELECT '<username>', '<password>', '<key>'

```

This INVOKE statement returns the user name upon success, or an empty record set or error message in the case of a failure.

The result of successfully executing this statement is that the Rules Engine applies the authorization rules for the user. The key field is currently not used but will serve in the future to allow logging or extra user authentication checks. For web applications, the IP number could be passed for example.

Here is an ASP example, in which the authorized user 'JOHN' connects to a USoft application:

```
<%
On error resume next
'-- Establish connection to the Database
Set Conn = Server.CreateObject("ADODB.Connection")
Conn.Open "My_60_Connection"
Query = "INVOKE RulesEngine.SetUser WITH SELECT 'JOHN', 'secret', '100.123.000.001'"
Set RS = Server.CreateObject("ADODB.recordset")
RS.ActiveConnection = Conn
RS.open Query
%>
<% RS.MoveFirst %>
<% Response.Write RS("RETURN") %>
<%
If err.number <> 0 Then
        Response.Write err.description
End if
RS.Close
Set RS = Nothing
Conn.Close
Set Conn = Nothing
%>

```