---
id: XMLGenerateComplexType
---

# XML.GenerateComplexType



> [!NOTE]
> This article is about the **GenerateComplexType** method of the [XML internal component](/docs/Extensions/XML_internal_component).

## **XML.GenerateComplexType**

Generates an XML complex type for an output XML Schema document.

*Syntax*

```sql
INVOKE    XML.GenerateComplexType
WITH
SELECT    *expression*, ...
FROM      *table*
```

*Example*

```sql
INVOKE     xml.GenerateComplexType
WITH
SELECT     destination, description
FROM       tour
```

This results in the following output:

```language-xml
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema" targetNamespace="urn:USoft:Tours" xmlns:tns="urn:USoft:Tours">
<xsd:complexType name="ToursEx">
    <xsd:sequence>
    <xsd:element name="Tours" type="tns:Tours"></xsd:element>
    </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="Tours">
    <xsd:sequence>
    <xsd:element minOccurs="0" maxOccurs="unbounded" name="TOUR" type="tns:TOUR"></xsd:element>
    </xsd:sequence>
    <xsd:attribute name="documentName" type="xsd:string"></xsd:attribute>
</xsd:complexType>
<xsd:complexType name="TOUR">
    <xsd:attribute name="DESTINATION" type="xsd:string" use="required"></xsd:attribute>
    <xsd:attribute name="DESCRIPTION" type="xsd:string"></xsd:attribute>
</xsd:complexType>
</xsd:schema>
```

The Tours complex type can be used as XML Data Type for the output parameter of a document oriented web service that uses SQL statement:

```sql
INVOKE     XML.Export WITH
SELECT     destination
,          description
FROM       tour
WHERE     ...
```

 