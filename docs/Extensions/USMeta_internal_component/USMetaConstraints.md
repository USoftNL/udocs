---
id: USMetaConstraints
---

# USMeta.Constraints




:::note

This article is about the **Constraints** method of the [USMeta internal component](/Extensions/USMeta_internal_component).

:::

## **USMeta.Constraints**

At runtime, gets metadata information about constraints from the model developed in USoft Definer. For each retrieved constraint, this information takes the form of name/value pairs. Each name/value pair expresses a constraint attribute setting.

Returns an XML document of the form demonstrated in Example 1 below.

*Syntax*

```sql
SELECT USMeta.Constraints(
*constraint-name-pattern*         Constraints
,      *message-pattern*                 Message
,      *transition-table-pattern*        TransitionTable
,      *mime-type*                       MimeType
)

*mime-type*   :=  {  application/xml
                ,  xml
                ,  application/json
                ,  json  }


```

All parameters are optional. Parameter values that you pass are mapped to parameters by alias name. The 'ID' value in the following example is for *constraint-name-pattern* because of the "Constraints" alias:

```sql
SELECT   USMeta.Constraints( 'ID' Constraints )
```


:::tip

For backward compatibility only, it is possible to supply parameter values by position. Using this syntax, a list of non-aliased values maps to the parameter list in the order stated, with empty values at the end of the list if you supply less than 3 values, and '' (the empty string) as a way of explicitly declaring an empty value.

:::

*Constraint-name-pattern* is a regular expression that matches zero, one or more constraint names in the model. The result data is limited to constraints matching the pattern. If *constraint-name-pattern* is omitted, then result data is not limited in this way.

*Message-pattern* is a regular expression that matches zero, one or more messages of constraints in the model. The result data is limited to constraints with a message matching the pattern. If *message-pattern* is omitted, then result data is not limited in this way.

*Transition-table-pattern* is a regular expression that matches zero, one or more names of transition tables of constraints in the model. The result data is limited to constraints with a transition table whose name matches the pattern. If *transition-table-pattern* is omitted, then result data is not limited in this way.

*Mime-type* determines whether the output is in XML ( ‘application/xml‘ or 'xml’) or in JSON ('application/json’ or 'json’). The default is XML.

*Example 1*

This example returns constraint information about any constraints in the model that have a message containing the word 'correct' :

```sql
SELECT USMeta.Constraints('.*correct.*' Message)
```

The return value of this statement could be:

```xml
<?xml version="1.0" encoding="UTF-16"?>
<Meta>
   <Constraints>
      <Constraint NAME="STARTDATE_RETURNDATE" MODULE_NAME="TRAVEL" ACTIVE="Y" CORRECT="Y"
         MESSAGE="Return date corrected to match preset number of days for tour." DRIVING_TABLE="TOUR" FIRE_DEFFERED="NONE"
         TRANSITION_TABLE="" TRANSITION_ALIAS="" ON_INSERT="ALWAYS FIRE" ON_DELETE="ALWAYS FIRE" ON_UPDATE="USED COLUMNS FIRE"
         HELP_TOPIC="0" DYNAMIC="1"/>
   </Constraints>
</Meta>
```

*Example 2*

This example returns constraint information about all constraints containing the word 'DATE' that have a Transition Table:

```sql
SELECT USMeta.Constraints(
    '.*DATE'            Constraints
,   '^(?!\s*$).+'       TransitionTable
)
```

The return value of this statement could be:

```xml
<?xml version="1.0" encoding="UTF-16"?>
<Meta>
   <Constraints>
      <Constraint NAME="CHANGE_PLAN_DATE" MODULE_NAME="TRAVEL" ACTIVE="Y" CORRECT="Y" MESSAGE="" DRIVING_TABLE="TOUR"
          FIRE_DEFFERED="NONE" TRANSITION_TABLE="TOUR" TRANSITION_ALIAS="" ON_INSERT="NEVER FIRE" ON_DELETE="NEVER FIRE"
          ON_UPDATE="USED COLUMNS FIRE" HELP_TOPIC="0" DYNAMIC="1"/>
      <Constraint NAME="NUMDAYS_RETURNDATE" MODULE_NAME="TRAVEL" ACTIVE="Y" CORRECT="Y"
          MESSAGE="The number of days of a tour programme cannot be changed once tours for that destination and type have been scheduled."
          DRIVING_TABLE="TOUR_PROGRAMME" FIRE_DEFFERED="NONE" TRANSITION_TABLE="TOUR_PROGRAMME" TRANSITION_ALIAS="TP"
          ON_INSERT="NEVER FIRE" ON_DELETE="NEVER FIRE" ON_UPDATE="USED COLUMNS FIRE" HELP_TOPIC="0" DYNAMIC="0"/>
   </Constraints>
</Meta>
```

 