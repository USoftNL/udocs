---
id: USMetaModules
---

# USMeta.Modules




:::note

This article is about the **Modules** method of the [USMeta internal component](/docs/Extensions/USMeta_internal_component).

:::

## **USMeta.Modules**

At runtime, gets metadata information about how modules are run. This information extends not just to consumed modules (if any) and plug-in modules (if any), but also to the application itself (the so-called "consumer application" or "main module").

Returns an XML document of the form demonstrated in the Example below.

The return document contains an entry for:

- The application itself (the "consumer application" or "main module").
- Any module that has been declared for the application with Load Module = Yes.
- Any module that is run as a result of being declared as a plug-in module in a .PIN file.

Each entry contains a list of attributes that are name/value pairs. Attributes returned are:

|**Attribute**|**Description**|
|--------|--------|
|MODULE_NAME|The name of the module, or the name of the consumer application.|
|VERSION |<p>For USoft applications, the USoft patch version name (for example, '10.0.1') of the module.</p><p>For user-defined applications, the value of VERSION is empty.</p>|
|FROM_DATABASE|<p>Whether the module or consumer application is run from repository ('Y') or from flatfles ('N').</p><p>If NAME is for a consumed module or plug-in module, then FROM_DATABASE is forceably 'N'.</p><p>If NAME is for a USoft application, eg., USoft Definer, then FROM_DATABASE is forceably 'N'.</p><p>It is possible for FROM_DATABASE to be set to 'Y' only if NAME is for a user-defined consumer application.</p>|
|MAIN_MODULE|<p>Whether the module is the consumer application ('Y'), or a consumed module ('N').</p><p>"Main module" is a synonym of "consumer application".</p><p>There is always exactly 1 main module. Any remaining modules are consumed modules or plug-in modules.</p>|
|PLUGIN  |<p>Whether the module is run as a plug-in or not.</p><p>For the consumer application, this attribute is set to 'N'.</p><p>For modules, if the module is run because it is declared in a .PIN file, this attribute is set to 'Y', otherwise to 'N'.</p>|



*Syntax*

```sql
SELECT USMeta.Modules(
    *module-name-pattern*     Modules
    *mime-type*               MimeType
)

*mime-type*   ::=  {  application/xml
                 ,  xml
                 ,  application/json
                 ,  json  }
```

*Module-name-pattern* is optional. Parameter values that you pass are mapped to parameters by alias name. The '.*MAIN.*' value in the following example is for *module-name-pattern* because of the "Modules" alias:

```sql
SELECT   USMeta.Modules( '.*MAIN.*' Modules )
```

*Module-name-pattern* is a regular expression that matches zero, one or more module names in the model. The result data is limited to modules matching the pattern. If *module-name-pattern* is omitted, then result data is not limited in this way.

*Mime-type* determines whether the output is in XML ( ‘application/xml‘ or 'xml’) or in JSON ('application/json’ or 'json’). The default is XML.

*Example*

This example returns module information about all modules run, and about the consumer application:

```sql
SELECT USMeta.Modules()
```

The return value of this statement could be:

```language-xml
<?xml version="1.0" encoding="UTF-16"?>
<Meta>
   <Modules>
      <Module MODULE_NAME="TRAVEL" VERSION="" FROM_DATABASE="Y" MAIN_MODULE="Y" PLUGIN="N"/>
      <Module MODULE_NAME="CAR_RENTAL" VERSION="" FROM_DATABASE="N" MAIN_MODULE="N" PLUGIN="N"/>
   </Modules>
</Meta>
```

 