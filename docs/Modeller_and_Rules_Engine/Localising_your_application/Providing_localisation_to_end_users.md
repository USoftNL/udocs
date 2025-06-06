---
id: Providing_localisation_to_end_users
---

# Providing localisation to end users

Once you have defined system languages, their associated text translations (System Messages, Application Strings), and their associated regional preferences (separator symbols for number values), you must *provide* these forms of localisation to target environments so that they “come through” (= are effectively presented to the end user). This applies, of course, also each time you want to **test** localisation in Development or Testing environments.

This article covers how you provide default localisation. Click [here](/docs/Modeller_and_Rules_Engine/Localising_your_application/Dynamic_language_switching.md) to find out how to change this default while the application is being used (*language switching* or *dynamic localisation*).

Providing default localisation has 2 aspects:

- If the end user runs from flat files, you must provide the **flat files** that contain the localisation settings.
- When offering access to your application to end users, you must set the **default system language** for the given project or the given group of users

What you need to do depends on the type of solution you offer. The sections in this article are for the 3 most common types of solution.

## Client/server interactive and batch applications

You offer user access to client/server interactive and batch applications by distributing a USoft Binder file.

Set the required default language by setting **the "Language" Project Property** in that USoft Binder file. Do this by choosing File, Project Properties from the Binder menu. Set this property to the name of the system language as you defined it in Definer, for example, ‘nl’.

If you use language-specific separator settings for number values, if the application runs from flat files, you must generate and deliver an *application***.CON****file. Do this via Tools, Create Flat Files in the Definer menu. If the application runs from repository, separator settings are read directly from the Definer tables, and no *application.*CON file is in scope.

If you use translated System Messages and the application runs from flat files, you must generate and deliver an *application***.SMG****file. Do this via Tools, Create Flat Files in the Definer menu. If the Rules Service runs from repository, system messages and their translations are read directly from the Definer tables, and no *application.*SMG file is in scope.

If you use translated Application Strings and the application runs from flat files, you must generate and deliver an *application***.UMG****file. Do this via Tools, Create Flat Files in the Definer menu. If the application runs from repository, application strings and their translations are read directly from the Definer tables, and no *application.*UMG file is in scope.

## Web application pages

You offer user access to web application pages created in Web Designer by distributing an end user URL that calls a Page Engine server process that processes the published pages. These pages call an underlying Rules Service for access to data and rules.

Set the required default language by setting **the "DefaultLanguage" publication property** of the publication configuration that you publish the pages against. Set this property to the name of the system language as you defined it in Definer, for example, ‘nl’.

This "DefaultLanguage" publication property is what determines in which language system messages, application strings, and separator symbols for number values are presented.


:::warning

Confusingly, in this scenario, the Rules Service's Language configuration parameter **has no effect**.
The "DefaultLanguage” publication property determines, for each individual call to the Rules Service, what is the return language expected of the Rules Service. This happens independently of the "Language" Rules Service configuration parameter. This particular behaviour makes it possible to have a Rules Service respond in different languages during [dynamic language switching](/docs/Modeller_and_Rules_Engine/Localising_your_application/Dynamic_language_switching.md).

:::

If you use language-specific separator settings for number values, if the Rules Service runs from flat files, you must generate and deliver an *application***.CON****file. Do this via Tools, Create Flat Files in the Definer menu. If the Rules Service runs from repository, separator settings are read directly from the Definer tables, and no *application.*CON file is in scope.

If you use translated System Messages and the Rules Service runs from flat files, you must generate and deliver an *application***.SMG****file. Do this via Tools, Create Flat Files in the Definer menu. If the Rules Service runs from repository, system messages and their translations are read directly from the Definer tables, and no *application.*SMG file is in scope.

If you use translated Application Strings, you must generate and deliver **.JSON translation files**. Do this by publishing the pages. Each time you call the Publish routine, it exports translations to files named:

```
\WebSite\lang\*language*.json
```

For each declared language a separate file is created. The same process also downloads a file called

```
\WebSite\lang\*language*.alt.json
```

These latter files are not generated from Definer tables, but they may be edited by the developer manually.


:::tip

You do not need to produce an *application***.UMG** file for web application pages. If you make such a file available, it remains unused. Its function is replaced by the .JSON files.

:::

## REST or SOAP services

You offer user access to web application pages created in Web Designer by distributing an end user URL that calls a web service. This web service calls an underlying Rules Service for access to data and rules.

Set the required default language by setting **the "Language" Rules Service configuration parameter**. Set this parameter to the name of the system language as you defined it in Definer, for example, ‘nl’.

If you use language-specific separator settings for number values, if the Rules Service runs from flat files, you must generate and deliver an *application***.CON****file. Do this via Tools, Create Flat Files in the Definer menu. If the Rules Service runs from repository, separator settings are read directly from the Definer tables, and no *application.*CON file is in scope.

If you use translated System Messages and the Rules Service runs from flat files, you must generate and deliver an *application***.SMG****file. Do this via Tools, Create Flat Files in the Definer menu. If the Rules Service runs from repository, system messages and their translations are read directly from the Definer tables, and no *application.*SMG file is in scope.

If you use translated Application Strings and the Rules Service runs from flat files, you must generate and deliver an *application***.UMG****file. Do this via Tools, Create Flat Files in the Definer menu. If the Rules Service runs from repository, application strings and their translations are read directly from the Definer tables, and no *application.*UMG file is in scope.