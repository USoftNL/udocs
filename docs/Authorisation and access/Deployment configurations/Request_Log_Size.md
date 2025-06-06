# Request_Log_Size



> [!NOTE]
> This article is about the **Request_Log_Size**[deployment configuration parameter](/docs/Authorisation%20and%20access/Deployment%20configurations/Deployment%20configuration%20parameters.md).

## **Request_Log_Size**

*Allowed values*

```
{ -1  | *positive integer* }
```

The underlined value is the USoft factory default. It applies if you have not set this deployment parameter to a different value.

*Context*

This parameter may be set for the Rules Service context only.

You can set this parameter in the Additional Parameters list at the bottom of the Rules Service tab page. To get there, in USoft Authorizer, choose Define, Deployment Configurations from the menu.

*Explanation*

The Request_Log_Size additional parameter is used to truncate the size of the message written to the Rules Service log (for each request) to a specified maximum number of characters. Set the parameter to the maximum number of characters you want to allow for each request.

The default value of '-1' indicates that the entire message is allowed to be written to the log file.