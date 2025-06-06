# Drop repository



> [!NOTE]
> This article is about the **Drop repository**[Delivery Manager action](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name).

## **Drop repository**

Drops all application tables, authorisation tables, and metadata tables from "Database account".

> [!CAUTION]
> This action irrevocably deletes all data and metadata in the database account.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Database account|Database account|No      |



 

### Errors



You cannot use this action to drop the current repository, that is, the repository that you run the Drop Repository action from. An attempt to do this results in error "Cannot drop the repository you are currently connected to".

If Owner is specified, the combination of Owner and Database Connect String is used to determine whether the repository is the current repository,

If Owner is left empty, the combination of Username and Database Connect String is used to determine whether the repository is the current repository,