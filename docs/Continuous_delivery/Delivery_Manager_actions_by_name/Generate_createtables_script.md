---
id: Generate_createtables_script
---

# Generate create-tables script



> [!NOTE]
> This article is about the **Generate create-tables script**[Delivery Manager action](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name).

## **Generate create-tables script**

Writes to "Destination folder" a USoft create-tables script for the application tables of "Application" as defined in "Database account". 

The output file name is "*application*.create-tables.sql".

This is the equivalent of running the standard Tools, Create Physical Tables option of USoft Definer.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Application|Application|No      |
|Database account|Database account|No      |
|Destination folder|Folder or file|No      |



### Notes

This action is different from Delivery Manager's "[Release create-tables script](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name/Release%20createtables%20script.md)" and "[Release scripts](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name/Release%20scripts.md)" actions, which produce an output based on a comparison with the metadata as defined for the PREVIOUS release.

Executing this action is only appropriate if, for some reason, you do not know or do not care what is the state of a target repository, but you want to make sure that it is upgraded to a new situation prescribed by a new set of flatfiles, or if you have some reason to mimic USoft's "[Create Tables](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name/Create%20tables.md)" feature as it exists outside Delivery Manager. Otherwise, prefer calling "Release create-tables script" or "Release scripts".