# Apply custom XSL



> [!NOTE]
> This article is about the **Apply custom XSL**[Delivery Manager action](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name).

## **Apply custom XSL**

Applies to "Source file" the custom XSL transformation with name "Document name" and writes the result to "Destination file".

If "Destination file" is in the "custom" section of the current release tree, and the folder for "Destination file" does not exist in the file system, it is automatically created.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Source file|Folder or file|No      |
|Document name|Custom XSL|No      |
|Destination file|Folder or file|No      |



### Rules

"Source file" must exist as a file in the file system.

"Document name" must exist as the name of a stored XSL transformation in Delivery Manager (choose Define, Custom XSL from the menu).

The folder path of "Destination file" must lead to an existing folder in the file system, except if it is in the "custom" section of the current release tree, in which case the folder is automatically created.

### Notes

In the custom XSL transformation, you can reference source variable placeholders. When the transformation is applied, the variable placeholders will automatically be replaced by the values they represent.