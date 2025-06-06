---
id: Extract_USoft_version
---

# Extract USoft version



> [!NOTE]
> This article is about the **Extract USoft version**[Delivery Manager action](/docs/Continuous_delivery/Delivery_Manager_actions_by_name).

## **Extract USoft version**

Extracts from "Database account" the name of the USoft patch version that "Application" runs there, and registers this name in the "USoft version" field of the Application table in Delivery Manager.

Each time you run a release action, this version name is copied to the packing slip if the current release has Include Packing Slip = Yes.

An example of an extracted version name is:

```
10.0.1H
```

When you release, it is good practice to extract the USoft version for the user application and make sure it is included in the packing slip for the release, so that the USoft version remains apparent even after the deliverables are distributed on target machines.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Application|Application|No      |
|Database account|Database account|No      |



### Rules

"Application" must be an application of type = "User application", not "USoft application".

### Notes

A version name identifies an officially released USoft patch. If you used a non-official USoft release (not recommended), in order to identify that product you would need to identify the day when that version was compiled. The "Extract USoft version" action is not able to register differences between dayversions of the same USoft patch.

The result value is produced by logging on to "Database account", then calling :

```sql
select RulesEngine.GetProperty( 'Version' )
```

and then stripping the 'version ' prefix from the query result.