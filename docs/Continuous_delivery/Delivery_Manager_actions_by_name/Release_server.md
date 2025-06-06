---
id: Release_server
---

# Release server



> [!NOTE]
> This article is about the **Release server**[Delivery Manager action](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name).

## **Release server**

This action is the equivalent of running Publish for a server in USoft Service Definer, and then copying the result to a release folder.

You can only run this action successfully if you first register the server in Delivery Manager using the [Extract servers](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name/Extract%20servers.md) action. Choose Definer, Extracted Server Objects to see servers registered.

1 .Re-executes the [Extract servers](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name/Extract%20servers.md) action for "Database account". Uses the result of this action to check that "Server object" exists in "Database account":

- If it does, sets the Publication File Path folder for "Server object" as registered in Delivery Manager, to the current Publication File Path for the server in "Database account".
- If it does not, it's an error.

2. Publishes the server referred to by "Server object" from "Database account" to the server's Publication File Path folder. If "Database account" is set to a value different from the Server Object's Database Account as registered in the list of Extracted Server Objects, it's an error. The list of Extracted Server Objects is available from the Define menu.

3. Copies output files and folders from the server's Publication File Path folder to the

```
\servers\*server-object*
```

subfolder of the current release folder. See "Output files and folders" below.

At the end of this routine, the server is restarted if it was started when the action was called, not otherwise.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Server object|Server object|No      |
|Database account|Database account|No      |



### Output files and folders

By default, all the files and folders published by Service Definer are copied to the release folder. You can prevent files and folders from being copied to the release folder by "blocking" them. Do this in the Blocked Files, Blocked Folders tabs for the server object. Choose Define, Extracted Server Objects to see these tabs.

When you call the "Release server" action, if the current release has "Include attachments" = Yes, then attachments for the "servers" section (if any are defined) are copied to the specified subfolder of the "servers" release folder. This happens only to attachments that have Blocked = No (the default). If a Custom XSL transformation is defined for the attachment, then this transformation is applied to the output.