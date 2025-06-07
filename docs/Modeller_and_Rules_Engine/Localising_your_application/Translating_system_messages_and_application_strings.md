---
id: Translating_system_messages_and_application_strings
---

# Translating system messages and application strings

For a system language, regional separator symbols are settings that you can simply [define declaratively](/docs/Modeller_and_Rules_Engine/Localising_your_application/Localisation_system_languages_translations_and_regional_settings.md), but system messages and application strings are textual elements that you must ask a translator to provide.


:::tip

USoft 10 and USoft 9.1 versions ship System Local Messages for the Dutch language. To use these, you need to load them. From the USoft Definer menu, choose Tools, Language, Load System Messages.

:::

There are 2 text translation mechanisms in USoft. One is for **system messages** and the other is for **application strings**:

- System messages are information, warning and error messages raised server-side by a Rules Service or (in the case of C/S interfaces) by a Rules Engine.
- Application strings are all the other textual elements. These include messages texts presented in a message box but raised client-side by a web GUI, i.e., defined in USoft Web Designer.
- Constraint messages (for constraints in the application that you are developing) are in the category of application strings.

## System messages

### Defining translations for USoft-shipped system messages

A *USoft-shipped system message* is an information, warning or error message contained in USoft's factory default and raised server-side by a Rules Service or (in the case of C/S interfaces) by a Rules Engine.

*Example*

```
Rollback performed.
```

A system message may contain one or more variable elements called *parameters,* each of which is named and contained in angle brackets ( < > ).

*Example*

```
<NumRecords> record(s) committed.
```

To define a translation for a USoft-shipped system message:

1. If necessary, run the Load System Messages routine. Do this by choosing Tools, Language, Load System Messages from the USoft Definer menu. You only need to do this once, as an initial routine.

2. Make sure the language that you want to define a translation for has been defined. Click [here](/docs/Modeller_and_Rules_Engine/Localising_your_application/Localisation_system_languages_translations_and_regional_settings.md) to find out how you define a system language in USoft.

3. Open the System Messages window. Do this by choosing Tools, Language, System Messages from the USoft Definer menu.

4. In the upper part of the window, find the system message that you want to translate.

5. On the Translations tab in the lower part of the window, set Language to the language that your translation is for, then set Local Message to your translation.

If the system message has variable elements, and you want to use these also in your translation (which is optional), make sure that they are exactly copied between the original and the translation. For example, if the original message is:

```
<NumRecords> record(s) committed.
```

the translation in Dutch could be:

```
<NumRecords> rij(en) opgeslagen.
```

To **test** translations of USoft-shipped system messages, assuming that for testing you use a Rules Service running from repository, just restart the Rules Service and refresh your test browser. If your Rules Service runs from flat files, you must also re-generate the *application*.SMG file (do this via Tools, Create Flat Files in the Definer menu).

### Defining translations for user-defined system messages

A *user-defined system message* is an information, warning or error message defined by an application developer and raised server-side by a Rules Service or (in the case of C/S interfaces) by a Rules Engine. Such a message is raised by calling RulesService.MessageLanguage() or RulesService.TranslateMessage().

Contrast this with:

- *USoft-shipped* system messages, which are in the USoft factory default.

- *Constraint* messages, which are in the category of application strings (later in this help topic).
- Messages in *application strings*, defined in a web GUI client and not handled server-side by the Rules Service.

To define a translation for a user-defined system message:

1. Make sure the language you want to define a translation for has been defined. Click [here](/docs/Modeller_and_Rules_Engine/Localising_your_application/Localisation_system_languages_translations_and_regional_settings.md) to find out how you define a system language in USoft.

2. Open the System Messages window. Do this by choosing Tools, Language, System Messages from the USoft Definer menu.

3. In the upper part of the window, define the system message. You can raise this message programmatically in your application by calling RulesService.MessageLanguage() or RulesService.TranslateMessage() .

4. On the Translations tab in the lower part of the window, set Language to the language that your translation is for, then set Local Message to your translation.

If the system message has variable elements, and you want to use these also in your translation (which is optional), make sure the parameters are properly named and defined on the Parameters tab and that they are properly referenced from the message texts in all languages, using the **`<***parameter-name***>`**  syntax with angle brackets as placeholders.

To **test** translations of user-defined system messages, assuming that for testing you use a Rules Service running from repository, just restart the Rules Service and refresh your test browser. If your Rules Service runs from flat files, you must also re-generate the *application*.SMG file (do this via Tools, Create Flat Files in the Definer menu).

## Application strings

### Defining translations for USoft-shipped application strings

A *USoft-shipped application string* is a textual element (other than a system message) contained in USoft's factory default.

To define a translation for a USoft-shipped application string:

1. If necessary, (re)run the Populate Application Strings routine. Do this by choosing Tools, Language, Populate Application Strings from the USoft Definer menu.

2. Make sure the language you want to define a translation for has been defined. Click [here](/docs/Modeller_and_Rules_Engine/Localising_your_application/Localisation_system_languages_translations_and_regional_settings.md) to find out how you define a system language in USoft.

3. Open the Used Application Strings window. Do this by choosing Tools, Language, Used Application Strings from the USoft Definer menu.

4. In the upper part of the window, find the application string that you want to translate.

5. In the Translations box in the lower part of the window, set Language to the language that your translation is for, and set Text String to your translation.

Application strings are case-sensitive. The translation is successful only if there is an identical, case-sensitive character-by-character match between the string to be translated and the Used Application String. This applies also to whitespace characters and to interpunction symbols such as colons (:) and full stops (.).

Application strings span the entire textual attribute of the GUI control. In other words, strings are not considered to contain each other. A button prompt "Search options" is translated *only* by a translation of string "Search options". Its first word is *not* translated by a translation for string "Search".

*Example*

The following definitions cause each runtime occurrence of "Test Application:" to be translated to "Testapplicatie:" if the language is currently set to 'nl':

|        |
|--------|
|**Used Application String**|
|Code    |Text String|
|34      |Test Application:|



 

|        |
|--------|
|**Translated Application String**|
|String Code|Language|Text String|
|34      |nl      |Testapplicatie:|



To **test** translated application strings in web application pages created in USoft Web Designer, just republish the application and refresh your browser. The publish operation exports application strings for each *language* to a file called:

\\WebSite\\lang\\*language.*json

### Defining translations for constraint messages

A *constraint message* is a message raised by a constraint defined in USoft Definer by an application developer.

To define a translation for a constraint message:

1. If necessary, (re)run the Populate Application Strings routine. Do this by choosing Tools, Language, Populate Application Strings from the USoft Definer menu.

2. Make sure the language you want to define a translation for has been defined. Click [here](/docs/Modeller_and_Rules_Engine/Localising_your_application/Localisation_system_languages_translations_and_regional_settings.md) to find out how you define a system language in USoft.

3. Open the Used Application Strings window. Do this by choosing Tools, Language, Used Application Strings from the USoft Definer menu.

4. In the upper part of the window, find the constraint message that you want to translate.

5. In the Translations box in the lower part of the window, set Language to the language that your translation is for, and set Text String to your translation.

If the constraint message has variabele elements, make sure that these are exactly copied between the original and the translation. For example, if the original message is:

```
Amount for facility <f.short_name.value> may not exceed <f.max_amount.value>.
```

the translation in Dutch could be:

```
Bedrag voor regeling <f.short_name.value> mag niet hoger zijn dan <f.max_amount.value>.
```

To **test** translated constraint messages in web application pages created in USoft Web Designer, just republish the application and refresh your browser. The publish operation exports application strings for each *language* to a file called:

```
\WebSite\lang\*language*.json
```


:::tip

You may have to restart also the server in Service Definer that serves the Rules Service, because in current patches of USoft 9.1 this server caches messages from the Rules Service, a behaviour that is planned to be phased out.

:::

### Defining translations and Origin for other user-defined application strings

A *user-defined application string* is a text element (other than a system message and other than a constraint message) defined by an application developer.

To define a translation for a user-defined application string:

1. Make sure the language you want to define a translation for has been defined. Click [here](/docs/Modeller_and_Rules_Engine/Localising_your_application/Localisation_system_languages_translations_and_regional_settings.md) to find out how you define a system language in USoft.

2. Open the Used Application Strings window. Do this by choosing Tools, Language, Used Application Strings from the USoft Definer menu.

3. In the upper part of the window, find out if the application string that you want to translate already exists. Otherwise, create a record for it. You must provide a unique Code number for the new record. The following statement provides a unique code number, but be aware that USoft-shipped application strings occupy the code range from 1 to about 500. You may want to invent one or more numeric code ranges for user-defined strings and start with, for example, the number **1000** .

```
select max( str_code ) + 1 from t_app_used_str;
```

In the Origin field, you can provide any text string that helps you identify where the application string is used. If you do not need this, type a default, such as Default or User-defined . USoft uses Origin to manage USoft-shipped application strings, which may be recognised by the Origin prefixes of REP: and GUI: . Do not use these prefixes for user-defined application strings.

Type the application string itself in the Text String box. See the Example below.

4 In the Translations box in the lower part of the window, for each translation, set Language to the language that your translation is for, and set Text String to your translation.

Application strings are case-sensitive. The translation is successful only if there is an identical, case-sensitive character-by-character match between the string to be translated and the Used Application String. This applies also to whitespace characters and to interpunction symbols such as colons (:) and full stops (.).

Application strings span the entire textual attribute of the GUI control. In other words, strings are not considered to contain each other. A button prompt "Search options" is translated *only* by a translation of string "Search options". Its first word is *not* translated by a translation for string "Search".

*Example*

The following definitions cause each runtime occurrence of "Test Application:" to be translated to "Testapplicatie:" if the language is currently set to 'nl':

|        |
|--------|
|**Used Application String**|
|Code    |Origin  |Text String|
|1034    |User-defined|Test Application:|



 

|        |
|--------|
|**Translated Application String**|
|String Code|Language|Text String|
|1034    |nl      |Testapplicatie:|



To **test** translated application strings in web application pages created in USoft Web Designer, just republish the application and refresh your browser. The publish operation exports application strings for each *language* to a file called:

```
\WebSite\lang\*language*.json
```

 