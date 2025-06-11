---
id: Extract_servers
---

# Extract servers




:::note

This article is about the **Extract servers**[Delivery Manager action](/Continuous_delivery/Delivery_Manager_actions_by_name).

:::

## **Extract servers**

Synchronises the list of servers for "Database account", as kept in Delivery Manager, with the servers actually in existence in Service Definer in "Database account".

"Synchronise" means that

- Any server defined in "Database account" that is not yet known to Delivery Manager is added to the list.
- Any server no longer defined in "Database account" is dropped from the list if there are no Task Step Parameters that refer to that server; otherwise an error is raised.
- The Publication File Path value for each server in the list is set to the value found in Service Definer in "Database account".

Unlike Service Definer, Delivery Manager uses unique Server Object names to identify servers:

- For each server extracted from "Database account" that is already known in Delivery Manager, the existing Server Object name that identifies it is used.
- For each server extracted from "Database account" that is NOT yet known in Delivery Manager, the server name itself is used as a default name for the new Server Object if no other Server Object with that name already exists; otherwise, it's an error.

This action requires that USERVICE is declared as an Application in Delivery Manager. Running this action causes a default USERVICE Application record to be created silently if it does not exist.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Database account|Database account|No      |



### Errors

An error is raised if Delivery Manager refers to a server extracted earlier from "Database account", that is no longer found in Service Definer in "Database account", but that is still referred to by a Task Step Parameter. This is typically solved by dropping the obsolete Task Step.

An error is raised if Delivery Manager detects a new server, but the name of that server already exists as a Server Object in Delivery Manager (referring to a different server extracted earlier). This is typically solved by renaming that existing Server Object name to something else, and then running "Extract servers" again.