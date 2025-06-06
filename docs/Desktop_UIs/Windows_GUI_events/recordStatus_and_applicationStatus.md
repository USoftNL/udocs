---
id: recordStatus_and_applicationStatus
---

# recordStatus and applicationStatus

In USoft C/S UIs, **recordStatus** and **applicationStatus** allow you to get the status of the current record and the application as a whole. These are predefined, globally available host variables that you can reference in action script syntax like so:

*Syntax*

```
:recordStatus
:applicationStatus
```

## recordStatus

The **recordStatus** variable can take the following values.

|**Value**|**Meaning**|
|--------|--------|
|unchanged|Record was retrieved by a query and has not been manipulated since.|
|changed |Record was retrieved by a query and then manipulated.|
|created |<p>Record was created but not yet stored. This applies when you have navigated to a blank line in an info box, or opened a new info box showing an empty record, or pressed Create Record, and you have done nothing that causes the new record to be stored.</p>|
|query   |The current record line is in Query Mode.|



## applicationStatus

The **applicationStatus** variable can take the following values.

|**Value**|**Meaning**|
|--------|--------|
|unchanged|There are currently no uncommitted record manipulations.|
|changed |There are currently one or more uncommitted record manipulations.|



The value of applicationStatus is independent of whether the current info window is in Query Mode or not.

You can cause applicationStatus to go back to unchanged by committing the transaction, but also by rolling the transaction back.