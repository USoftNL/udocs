---
id: pcValidateSchemas
---

# pc:ValidateSchemas



> [!NOTE]
> This article is about the **pc:ValidateSchemas**[ Blend directive](/docs/Repositories/Blend_directives).

## **pc:ValidateSchemas**

Finds out whether an XML document is well-formed. If you provide XML schemas, finds out whether the XML document is valid according to one of these schemas.

Returns an XML document reporting on the outcome.

*Syntax*

```
<pc:ValidateSchemas
    xml="*xml*"
  [ attr="*xml-schema*" ... ]
>
```

The required **xml** is the input XML document.

You can optionally specify one or more XML schemas. For these, you can use any attr attribute name, provided that the attribute names are unique.

## Example: Testing that XML is well-formed

This example tests that the XML document stored in the "persons.xml" file is well-formed XML. If the XML is well-formed, the return value is:

```language-xml
<ValidationResult valid="yes" errors="0" warnings="0" exceptions="0"/>
```

If the XML is not well-formed, the return value will be a message such as the following:

```
The 'persson' start tag on line 2 position 3 does not match the end tag of 'person'.Line 6, position 4.
```

*Example*

```language-xml
<example xmlns:pc="Processing.Command" pc:hideme="true">
   <pc:assign-nodeset xml="persons.xml"/>
   <pc:ValidateSchemas xml="{$xml}" />
</example>
```

## Example: Testing that XML is schema-valid and well-formed

This example tests that the XML document stored in the "persons.xml" file is schema-valid when checked against the schema in the "persons.xsd" file. In addition, it tests whether the XML is well-formed in itself (see the previous section). If the XML is both schema-valid and well-formed, the return value is:

```language-xml
<ValidationResult valid="yes" errors="0" warnings="0" exceptions="0"/>
```

If the XML is not schema-valid, the return value will be a message such as the following:

```language-xml
<ValidationResult valid="no" errors="1" warnings="0" exceptions="0">
   <Error Message="The element 'person' has invalid child element 'age'. List of possible elements expected: 'birthdate'." SourceUri="" />
</ValidationResult>
```

*Example*

```language-xml
<example xmlns:pc="Processing.Command" pc:hideme="true">
   <pc:assign-nodeset xml="persons.xml"/>
   <pc:assign-nodeset xsd="persons.xsd"/>   
   <pc:ValidateSchemas xml="{$xml}" xsd="{$xsd}"/>
</example>
```

## Example: Testing XML against multiple schemas

This example tests whether an XML document is schema-valid against at least one of multiple schemas. If you supply multiple schemas, these must be disjunct: if the schemas overlap, so that an input document could be valid against either one or the other, it's an error. The example has disjunct schemas where one tests English-language and the other Dutch-language input XML.

This example also illustrates how you can pass the XML schemas inline rather than in separate files.

The example script below raises error:

```language-xml
<ValidationResult valid="no" errors="0" warnings="0" exceptions="1">
  <Exception message="The value 'male' is invalid according to its schema type 'String' - The Enumeration constraint failed." />
</ValidationResult>
```

given the following "persons.xml" file:

```language-xml
<persons>
   <person version="1.0" xmlns:xi="http://www.w3.org/2001/XMLSchema-instance">
      <author>Brent Smith</author>
      <gender>male</gender>
      <birthdate>1988-01-24</birthdate>
   </person>
</persons>
```

*Example*

```language-xml
<example xmlns:pc="Processing.Command" pc:hideme="true">
   <pc:assign-string workingdir="{path:GetFullPath('.')}" />
   <pc:assign-nodeset this="{files:XmlFile(path:Combine($workingdir,'persons.xml'))}"/>
   <pc:ValidateSchemas xml="{$this}" xsd1="{xs:schema[1]}" xsd2="{xs:schema[2]}">
      <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
         <xs:element name="persons"/>
         <xs:element name="person">
            <xs:complexType>
               <xs:sequence>
                  <xs:element name="author"/>
                  <xs:element name="gender" default="male">
                     <xs:simpleType>
                        <xs:restriction base="xs:string">
                           <xs:enumeration value="M"/>
                           <xs:enumeration value="F"/>
                        </xs:restriction>
                     </xs:simpleType>
                  </xs:element>
                  <xs:element name="birthdate">
                     <xs:simpleType>
                        <xs:restriction base="xs:date"/>
                     </xs:simpleType>
                  </xs:element>
               </xs:sequence>
               <xs:attribute name="version" use="required"/>
            </xs:complexType>
         </xs:element>
      </xs:schema>
      <xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
         <xs:element name="personen"/>
            <xs:element name="persoon">
               <xs:complexType>
                  <xs:sequence>
                     <xs:element name="auteur"/>
                     <xs:element name="geslacht" default="man">
                        <xs:simpleType>
                           <xs:restriction base="xs:string">
                              <xs:enumeration value="man"/>
                              <xs:enumeration value="vrouw"/>
                           </xs:restriction>
                        </xs:simpleType>
                     </xs:element>
                     <xs:element name="geboortedatum">
                        <xs:simpleType>
                           <xs:restriction base="xs:date"/>
                        </xs:simpleType>
                     </xs:element>
                  </xs:sequence>
                  <xs:attribute name="version" use="required"/>
               </xs:complexType>
            </xs:element>
      </xs:schema>
   </pc:ValidateSchemas>
</example>
```

 