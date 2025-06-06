---
id: USMetaSets
---

# USMeta.Sets



> [!NOTE]
> This article is about the **Sets** method of the [USMeta internal component](/docs/Extensions/USMeta_internal_component).

## **USMeta.Sets**

At runtime, gets metadata information about sets from the model developed in USoft Definer. For each retrieved set, this information takes the form of name/value pairs. Each name/value pair expresses an attribute setting for the set. Information about set elements is also included.

Returns an XML document of the form demonstrated in the Example below.

*Syntax*

```sql
SELECT USMeta.Sets(
    *set-name-pattern*     Sets
,   *interfaces-only*      InterfacesOnly
,   *module-pattern*       Module
,   *mime-type*            MimeType
)

*interfaces-only*    ::=  { yes | no }

*mime-type*          ::=  {  application/xml
                        ,  xml
                        ,  application/json
                        ,  json  }
```

All parameters are optional. Parameter values that you pass are mapped to parameters by alias name. The '.*application.*' value in the following example is for set-name-pattern because of the "Sets" alias:

```sql
SELECT USMeta.Sets( '.*application.*' Sets )
```

*Set-name-pattern* is a regular expression that matches zero, one or more set names in the model. The result data is limited to sets matching the pattern. If *set-name-pattern* is omitted, the result data is not limited in this way.

If *interfaces-only* is set to 'yes', only sets that have Interface = Yes are included. If it is set to 'no' (the default), the result data is not limited in this way.

*Module-pattern* is a regular expression that matches zero, one or more module names in the model. The result data is limited to sets within modules that match the pattern. If *module-pattern* is omitted, the result data is not limited in this way.

Result data for sets from consumed modules that match module-pattern contain two additional attributes:

- 'INTERFACE_FROM_MODULE', which is set to 'Y',
- ''IMPLEMENTING_MODULE', which is set to the module name where the set originates from. The 'MODULE_NAME' attribute is set in this case to the name of the consumer module.

Depending on the set's EXPORT_TYPE attribute, for example, 'ASCII_EXPORT' or 'HTML_EXPORT', different other attributes are returned.

*Mime-type* determines whether the output is in XML ( ‘application/xml‘ or 'xml’) or in JSON ('application/json’ or 'json’). The default is XML.

*Example 1*

This example returns set information about any sets in the model with a name containing the string 'application':

```sql
SELECT USMeta.Sets( '.*application.*' Sets )
```

The return value of this statement could be:

```language-xml
<?xml version="1.0" encoding="UTF-16"?>
<Meta>
   <Sets>
      <Set NAME="APPLICATION_RENAME" MODULE_NAME="USD" USABLE_AS_INTERFACE="N" EXPORT_TYPE="ASCII_EXPORT" SET_FORMAT_TYPE="FIX"
          FILE_FORMAT_AS_STRING="Fixed" COLUMN_SEPERATOR="" ROW_SEPERATOR="" STRING_DELIMITER="" NUMBER_OF_ELEMENTS="4">
         <Elements>
            <Element NAME="OLDNAME" CHILD_SET="">
               <Column DATABASE_TYPE="NVARCHAR2" IO_FORMAT="" TOTAL_LENGTH="120"/>
            </Element>
            <Element NAME="NEWNAME" CHILD_SET="">
               <Column DATABASE_TYPE="NVARCHAR2" IO_FORMAT="" TOTAL_LENGTH="120"/>
            </Element>
            <Element NAME="WEB" CHILD_SET="">
               <Column DATABASE_TYPE="NCHAR" IO_FORMAT="" TOTAL_LENGTH="1"/>
            </Element>
            <Element NAME="NAMES" CHILD_SET="">
               <Column DATABASE_TYPE="NCLOB" IO_FORMAT="" TOTAL_LENGTH="2000"/>
            </Element>
         </Elements>
      </Set>
   </Sets>
</Meta>
```

*Example 2*

This example returns set information about a set called "CLASS_H', which turns out to be of type HTML_EXPORT:

```sql
SELECT USMeta.Sets( 'CLASS_H' Sets ) 
```

The return value of this statement could be:

```language-xml
<?xml version="1.0" encoding="UTF-16"?>
<Meta>
   <Sets>
      <Set NAME="CLASS_H" MODULE_NAME="USD" USABLE_AS_INTERFACE="N" EXPORT_TYPE="HTML_EXPORT" PAGE_TITLE="Class:"
        FRAME_TEMPLATE_NAME="" HTML_LAYOUT_STYLE="TABLE" HTML_NAVIGATION_STYLE="EMBEDDED" NULL_VALUE_FILL_CHARACTER=" "
        TEMPLATE_FILE_NAME="" STRING_DELIMITER="" NUMBER_OF_ELEMENTS="3">
         <Elements>
            <Element NAME="ID" CHILD_SET="">
               <Column DATABASE_TYPE="NUMBER" IO_FORMAT="" TOTAL_LENGTH="9"/>
            </Element>
            <Element NAME="TYPENAME" CHILD_SET="">
               <Column DATABASE_TYPE="NVARCHAR2" IO_FORMAT="" TOTAL_LENGTH="92"/>
            </Element>
            <Element NAME="CHANGED_ON" CHILD_SET="">
               <Column DATABASE_TYPE="DATETIME" IO_FORMAT="DAY, MONTH DD, YYYY HH:MI:SS AM" TOTAL_LENGTH="41"/>
            </Element>
            <Element NAME="ATTRIBUTES" CHILD_SET="ATTRIBUTE_H"/>
         </Elements>
      </Set>
   </Sets>
</Meta>
```

 