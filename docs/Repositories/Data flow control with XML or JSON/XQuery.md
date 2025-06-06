# XQuery

USoft provides support for native Oracle XQuery function using the RDBMS keyword.

*Example 1*

This example retrieves (in an XML format) all scheduled tours due to start after the current date.

```sql
SELECT to_clob(
rdbms.xmltype.getclobval(
rdbms.XMLQuery(
LITERAL ' ''<Tours>
{for $c in ora:view("SCHEDTOUR")/ROW
WHERE $c/START_DATE > current-date()
RETURN <Tour>(<Name>{$c/DESTINATION/text()}</Name>,<StartDate>{$c/START_DATE/text()}</StartDate>,<EndDate>{$c/RETURN_DATE/text()}</EndDate>,<Price>{$c/PRICE/text()}</Price>)</Tour>}
</Tours>''  PASSING SYSDATE AS "s" RETURNING CONTENT'
)
)
)

```

The result is:

```language-xml
<Tours>
  <Tour>
    <Name>EUROPE</Name>
    <StartDate>2008-05-01</StartDate>
    <EndDate>2008-05-21</EndDate>
    <Price>1250</Price>
  </Tour>
  <Tour>
    <Name>AUSTRALIA</Name>
    <StartDate>2007-10-30</StartDate>
    <EndDate>2007-11-10</EndDate>
    <Price>2500</Price>
  </Tour>
</Tours>

```

*Example 2*

This example returns a parent-child XML structure containing all destinations to which a person has travelled.

```sql
SELECT to_clob(
rdbms.xmltype.getclobval(
rdbms.XMLQuery(
LITERAL ' ''<Tours>
{for $pe in ora:view("PERSON")
ORDER BY $pe/ROW/FIRST_NAME
RETURN <Person first_name="{$pe/ROW/FIRST_NAME}" family_name="{$pe/ROW/FAMILY_NAME}">
{
for $pa in ora:view("PARTICIPANT"), $r in ora:view("RESERVATION"), $s in ora:view("SCHEDTOUR")
WHERE $pe/ROW/PERSON_ID = $pa/ROW/PERSON_ID and $pa/ROW/RES_ID = $r/ROW/RES_ID AND $r/ROW/SCHEDTOUR_ID = $s/ROW/SCHEDTOUR_ID
RETURN <Destination>{$s/ROW/DESTINATION/text()}</Destination>
}
</Person>}
</Tours>''  PASSING SYSDATE AS "s" RETURNING CONTENT'
)
)
)

```

The result is

```language-xml
<Tours>
  <Person first_name="Albert" family_name="SMITH">
    <Destination>EUROPE</Destination>
    <Destination>AUSTRALIA</Destination>
    <Destination>HOLLAND</Destination>
  </Person>
  <Person first_name="Brigitte" family_name="FISHER-SMITH">
    <Destination>HOLLAND</Destination>
    <Destination>AUSTRALIA</Destination>
  </Person>
</Tours>

```

 