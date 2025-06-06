# User-defined publication properties

In addition to system-defined publication properties, you can add your own name/value pairs. These are referred to as user-defined publication properties.

New user-defined publication properties can simply be added to the publication configuration. In this example, a "useIndexedDBDataLayer" property has been added:

![](/api/Web%20and%20app%20UIs/Publication%20configurations/assets/784774d6-2514-4d96-9ccd-05fb3e42eea2.png)

On publish, the names and values of these properties are written to the "application.xml" file which makes them available to your runtime application. You can then access the property settings in JavaScript:

```
$.udb.settings.get( "*property-name*" )
```

*Example*

```
$.udb.settings.get( "StartPage" )
```