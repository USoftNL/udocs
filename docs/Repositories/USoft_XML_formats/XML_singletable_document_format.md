---
id: XML_singletable_document_format
---

# XML single-table document format

A **USoft XML single-table document** contains data from a single table.

This document format is produced by calls to [XML.Export](/docs/Extensions/XML%20internal%20component/XMLExport.md) and is re-importable by calling [XML.Import](/docs/Extensions/XML%20internal%20component/XMLImport.md).

*Syntax*

```
*xml-table-section*
```

This means that a USoft XML single-table document consists of exactly 1 [XML table section](/docs/Repositories/USoft%20XML%20formats/XML%20table%20section%20syntax.md).

*Example*

```language-xml
<Accredited_Persons documentName="Accredited Persons">
    <PERSON ID="177" FAMILY_NAME="Haynes" FIRST_NAME="Deborah"/>
    <PERSON ID="112" FAMILY_NAME="Smith" FIRST_NAME="John"/>
</Accredited_Persons>
```

 