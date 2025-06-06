# Create tables



> [!NOTE]
> This article is about the **Create tables**[Delivery Manager action](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name).

## **Create tables**

Creates application tables for "Application" in "Database account". This operation is equivalent to choosing "Create Tables" from the context menu of a USoft Binder item for "Application" and "Database account".

Does NOT perform Drop Existing Tables as a preliminary action.

If the optional "Run from repository" flag is set to Y, then the tables information for "Application" is read from repository. Otherwise, it is read from flatfile (from the file called application.con in the \\APP subdirectory of the USoft installation directory).

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Application|Application|No      |
|Database account|Database account|No      |
|Run from repository|Option flag|Yes     |



### Errors

Tables information for the predefined USoft applications cannot be read from repository. If you set "Run from repository" = Y and "Application" to 'USD', 'USAUTH', 'USTESTER', 'USERVICE' or 'UDELIVER', it's an error.

### Notes

If you want to write the result of this action to a script file, call "[Generate create-tables script](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name/Generate%20createtables%20script.md)" instead.

This action is different from Delivery Manager's "[Release create-tables script](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name/Release%20createtables%20script.md)" and "[Release scripts](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name/Release%20scripts.md)" actions, which produce an output based on a comparison with the metadata as defined for the PREVIOUS release.

Executing this action is only appropriate if, for some reason, you do not know or do not care what is the state of a target repository, but you want to make sure that it is upgraded to a new situation prescribed by a new set of flatfiles, or if you have some reason to mimic USoft's "Create Tables" feature as it exists outside Delivery Manager. Otherwise, prefer calling "Release create-tables script" or "Release scripts".