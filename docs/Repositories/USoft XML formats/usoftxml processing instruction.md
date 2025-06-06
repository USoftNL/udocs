# usoft-xml processing instruction

Gives instructions to [XML.Import](/docs/Extensions/XML%20internal%20component/XMLImport.md) for handling the import of records from a USoft XML document:

- A usoft-xml processing instruction is optional in a [USoft XML single-table document](/docs/Repositories/USoft%20XML%20formats/XML%20singletable%20document%20format.md).
- A usoft-xml processing instruction is required in a [USoft XML multi-table document](/docs/Repositories/USoft%20XML%20formats/XML%20multitable%20document%20format.md).

*Syntax*

```
<?usoft-xml action="*value*", attribute="*value*" ... ?>
```

The **action** attribute is required. Further attributes are optional. If an attribute is not supplied, handling is as if it were supplied with its default value. Attributes and their default values are discussed in the table below.

*Example*

```language-xml
<?usoft-xml version="1.0" action="multi-tables-import" use-io-formats="no"
  verify-original-values="no" return-corrected-records ="yes"?>
<MultiImport>
  <Employees documentName =" Employees">
    <EMPLOYEE ID="1" NAME="SMITH"/>
  </Employees>
  <Departments documentName ="Departments">
    <DEPARTMENT ID="1" NAME="CON"/>
  </Departments >
</MultiImport>
```

## Attributes

|**Attribute**|**Description**|
|--------|--------|
|action  |Specifies the type of action to be performed. There are two possible values:			<p>- single-table-import (the default) –used to import into a single table.<br/>- multi-tables-import – used to import into multiple tables.<br/></p>|
|append-to-file|<p>When return-corrected-records has been set to *file-name*, this procession instruction can be used to specify if the file needs to be overwritten or appended.</p><p>Possible values are "no" (the default) and "yes".</p>|
|relationship-behaviour|Possible values are "default" (the default) and "as-reference".<br/>			If set to "default", XML.Import will look at the Type Of Relationship to decide what to do with obsolete children in a situation where a parent and its children are both present in the XML.<br/>			If set to "as-reference", it will not look at Type of Relationship. Instead, it will treat all relationships as "reference" relationships. The "as-reference" setting guarantees that obsolete children will not be dropped.<br/>			See also: [Generating key values for parent-child data on import](/docs/Repositories/Data%20flow%20control%20with%20XML%20or%20JSON/Generating%20key%20values%20for%20parentchild%20data%20on%20import.md).<br/>			This attribute is only of interest if **action** is set to "multi-tables-import", and both parent table and child table records exist in the XML.|
|return-corrected-records|Possible values are "yes" (the default), "no", and file-name.<br/>			If set to "yes" the current values for inserted and updates rows are sent back to the user.<br/>			If set to "no", no output is generated.<br/>			If set to a *file-name*, then the output will be written directly to a file and the file name will be returned to the user.|
|use-io-formats|<p>Specifies whether the column values to be imported must be checked against the IO format of the corresponding domain or not. It has the same effect as using the UseIOFormats parameter in [XML.Import](/docs/Extensions/XML%20internal%20component/XMLImport.md).</p><p>Possible values are "no" (the default) and "yes". The use-io-formats attribute has precedence over the UseIoFormats parameter: if both are specified, the processing-instruction attribute applies.</p>|
|verify-original-values|<p>Used for row elements with an Update or Delete instruction. This parameter specifies whether the values in the XML document must be compared with the database. This allows optimistic locking mechanisms and prevents lost updates if different client applications change the same information concurrently.</p><p>Possible values are: "no" (the default), "no-check-on-pk", "all-columns", and "changed-columns". These values coincide with the 4 values of the VerifyOriginalValue parameters of the XML.Import method.</p>> [!WARNING]
> The verify-original-values processing-instruction attribute has precedence over the VerifyOriginalValues parameter of XML.Import: if both are specified, the processing-instruction attribute applies.

|
|version |Reserved for future use. Default value is currently 1.0. If another version is specified an error message will be raised.|



 