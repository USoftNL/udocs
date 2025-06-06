---
id: Dynamic_language_switching
---

# Dynamic language switching

Dynamic language switching is the ability of a developer or end user to switch the application language *during* a session, as opposed to the language being static and determined beforehand by a developer.

In interactive web sites, it is customary to offer this as a feature, for example in the form of clickable country flags:

![](./assets/1a482ce9-68f4-4b16-8276-abf2964cf7d6.png)

### Creating dynamic language switching

Dynamic language switching is supported for USoft Web Application pages. Creating such a facility involves:

- Defining the language material in USoft Definer.

- Creating an interactive web control, such as a button, and associating this control with a JavaScript call that switches the current language.

The syntax of the JavaScript call is:

```
$.udb.ui.setLanguage("language");
```

For example, to switch to Dutch:

```
$.udb.ui.setLanguage("nl");
```

For details on scripting this call and other **$.udb** calls for getting and setting languages, see the USoft Web Designer Guide.

### Embedding dynamic language switching in your application

You must embed dynamic language switching in *default behaviour* of your application that you provide *before* the end user decides to switch the language.

The easiest way to embed dynamic language switching is simply to specify a one-size-fits-all default language. This is not usually attractive if you have multiple language communities. If your web application presents itself in English by default, Spanish speakers must manually switch to their language at the beginning of each new session.

Instead, a better solution is to preset a default language based on the type of caller. There are multiple possibilities here, for example:

- If you want each individual user to have her own favourite language, you must store this preference as persistent, modelled data in an application table with User Preferences. This allows you to feed the individual preference to a $.udb.ui.setLanguage() call when the user accesses the application.
- If you want to set the default language by using some information that the web server has, such as information on the provenance of the URL call to the application, then you may be able to script default language selection at JavaScript level.

### Language-dependent visuals and behaviour

To some extent, you can make visuals and behaviour of USoft Web Application pages dependent on the language currently selected, because you can tag areas to languages so that they appear only when the language is current. This results in HTML code of this type:

```
<div data-lang="en">English text</div>
<div data-lang="nl">Dutch text</div>
```