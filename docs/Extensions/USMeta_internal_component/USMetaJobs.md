---
id: USMetaJobs
---

# USMeta.Jobs




:::note

This article is about the **Jobs** method of the [USMeta internal component](/docs/Extensions/USMeta_internal_component).

:::

## **USMeta.Jobs**

At runtime, gets metadata information about jobs from the model developed in USoft Definer.
For each retrieved job, this information takes the form of name/value pairs. Each name/value pair expresses a job attribute setting. In addition, this method returns information about input parameter sets and output parameter sets (if any).

Returns an XML document of the form demonstrated in the Example below.

*Syntax*

```sql
SELECT USMeta.Jobs(
    *job-name-pattern*     Jobs
,   *interfaces-only*      InterfacesOnly
,   *module-pattern*       Module
,   *mime-type*            MimeType
)

*interfaces-only*   ::=  { yes | no }
*mime-type*         ::=  {  application/xml
                       ,  xml
                       ,  application/json
                       ,  json  }

```

All parameters are optional. Parameter values that you pass are mapped to parameters by alias name. The '.*import.*' value in the following example is for *job-name-pattern* because of the "Jobs" alias:

```sql
SELECT   USMeta.Jobs( '.*import.*' Jobs )
```

*Job-name-pattern* is a regular expression that matches zero, one or more job names in the model. The result data is limited to jobs matching the pattern. If *job-name-pattern* is omitted, then result data is not limited in this way.

If *interfaces-only* is set to 'yes', only jobs that have Interface = Yes are included. The default of *interfaces-only* is 'no', meaning that jobs are in scope regardless of the value of their Interface attribute.

*Module-pattern* is a regular expression that matches zero, one or more module names in the model. The result data is limited to jobs within modules matching the pattern. Any jobs that are consumed from a different module which is filtered out by the regular expression, will show two additional fields 'INTERFACE_FROM_MODULE', which will be 'Y', and 'IMPLEMENTING_MODULE', which will contain the module name where the job originates from. The 'MODULE_NAME' field will in this case contain the name of the module in which the interface was consumed. If *module-pattern* is omitted, then the result data is not limited in this way.

*Mime-type* determines whether the output is in XML ( ‘application/xml‘ or 'xml’) or in JSON ('application/json’ or 'json’). The default is XML.

*Example*

This example returns job information about any jobs in the model with a name containing 'import':

```sql
SELECT   USMeta.Jobs( '.*import.*' Jobs )
```

The return value of this statement could be:

```xml
<?xml version="1.0" encoding="UTF-16"?>
<Meta>
   <Jobs>
      <Job NAME="BRIDGE IMPORT" MODULE_NAME="USD" USABLE_AS_INTERFACE="N" COMMIT_TYPE="NO COMMIT" NUM_TASKS="2">
         <InputSet NAME="BRIDGE_IMP_INSET" MODULE_NAME="USD" USABLE_AS_INTERFACE="N" NUMBER_OF_ELEMENTS="4">
            <Elements>
               <Element NAME="FILENAME">
                  <Column DATABASE_TYPE="NCHAR" IO_FORMAT="" TOTAL_LENGTH="255"/>
               </Element>
               <Element NAME="REF_ROLE">
                  <Column DATABASE_TYPE="NCHAR" IO_FORMAT="" TOTAL_LENGTH="20"/>
               </Element>
               <Element NAME="REF_ROLE_PAR">
                  <Column DATABASE_TYPE="NCHAR" IO_FORMAT="" TOTAL_LENGTH="20"/>
               </Element>
               <Element NAME="REF_ROLE_CHILD">
                  <Column DATABASE_TYPE="NCHAR" IO_FORMAT="" TOTAL_LENGTH="20"/>
               </Element>
            </Elements>
         </InputSet>
      </Job>
   </Jobs>
</Meta>
```

 