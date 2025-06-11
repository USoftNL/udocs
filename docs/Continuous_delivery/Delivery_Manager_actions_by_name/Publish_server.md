---
id: Publish_server
---

# Publish server




:::note

This article is about the **Publish server**[Delivery Manager action](/Continuous_delivery/Delivery_Manager_actions_by_name).

:::

## **Publish server**

This action is the equivalent of running Publish for a server in USoft Service Definer.

You can only run this action successfully if you first register the server in Delivery Manager using the “[Extract servers](/Continuous_delivery/Delivery_Manager_actions_by_name/Extract_servers.md)” action. Choose Definer, Extracted Server Objects to see servers registered.

1. Re-executes the Extract servers action for "Database account". Uses the result of this action to check that "Server object" exists in "Database account":

- If it does, sets the Publication File Path folder for "Server object" as registered in Delivery Manager, to the current Publication File Path for the server in "Database account".
- If it does not, it's an error.

2. Publishes the server referred to by "Server object" from "Database account" to the server's Publication File Path folder. If "Database account" is set to a value different from the Server Object's Database Account as registered in the list of Extracted Server Objects, it's an error. The list of Extracted Server Objects is available from the Define menu.

At the end of this routine, the server is restarted if "Restart after publish = Yes" is passed, not otherwise.

### Parameters

|**Name**|**Type**|**Optional?**|**Default**|
|--------|--------|--------|--------|
|Server object|Server object|No      |        |
|Database account|Database account|No      |        |
|Restart after publish|Option flag|Yes     |N       |



 