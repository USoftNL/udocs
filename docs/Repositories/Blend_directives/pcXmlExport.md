---
id: pcXmlExport
---

# pc:XmlExport




:::note

This article is about the **pc:XmlExport**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:XmlExport**

Exports a set of appdata or metadata from a single USoft repository table.

Returns an XML document in the standard USoft XML format, as detailed in the USoft Definer Help.

*Syntax*
 

```
<pc:XmlExport
     {
       sql="*select-statement*" |

       selectlist="*select-list*"
       fromclause="*table-name*"
       whereclause="*where-list*"
     }

*alias*="*name-literal*"

/>

*select-list*    ::=  { * | *column-list* }
*column-list*    ::=  *column* [ , *column* ... ]
```

Either the **sql** attribute or a set of attributes including the **fromclause** attribute is required. If a **fromclause** attribute is present, the sql attribute (if it is present) is ignored, and **fromclause** must name a single database table or Logical View name.

The required **alias** identifies the connection to the Rules Engine that you want to use. For aliases, see pc:RunRulesService.

*Example 1*

```xml
<pc:RunRulesService waittime="10000"
   application="TRAVEL" rdbmstype="{$rdbms}" connection="{$dbconnection}"
   user="{$username}" pwd="{$userpassword}" owner="{$owner}"
   alias="x1" />
<pc:assign-string mysql="SELECT destination, tour_type FROM tour WHERE destination LIKE 'AUS%'"/>
<pc:XmlExport sql="{$mysql}" alias="x1"/>       
The result is:
<Tours documentName="Tours">
  <TOUR DESTINATION="AUSTRALIA" TOUR_TYPE="ROCK 'N' ALICE" />
  <TOUR DESTINATION="AUSTRALIA" TOUR_TYPE="UP OR DOWN THE TRACK" />
  <TOUR DESTINATION="AUSTRIA" TOUR_TYPE="VIENNA" />
</Tours>
```

*Example 2*

This example is equivalent to Example 1.

```xml
<pc:RunRulesService waittime="10000"
   application="TRAVEL" rdbmstype="{$rdbms}" connection="{$dbconnection}"
   user="{$username}" pwd="{$userpassword}" owner="{$owner}"
   alias="x1" />
<pc:XmlExport fromclause="TOUR" selectlist="DESTINATION, TOUR_TYPE", whereclause="DESTINATION LIKE 'AUS%'" alias="x1"/>      
```

 