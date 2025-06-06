---
id: udbsettings
---

# $.udb.settings



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **settings** property of the [udb object](/docs/Web%20and%20app%20UIs/UDB%20udb).

## **$.udb.settings**

Provides access to USoft web application settings and flags by exposing the following resources.

|**Resource**|**Description**|
|--------|--------|
|$.udb.settings.browser|Name of current browser|
|$.udb.settings.browserVersion|Version of current browser. Useful only when the browser is IE.|
|$.udb.settings.compatibilityMode|Name indicating compatibility with the UI of a USoft version|
|$.udb.settings.get()|<p>Accesses settings from the “application.xml” file.</p><p>These settings can be overridden on application initialisation by <meta> tags in the "application.html" file with the same name and the "us:" prefix.</p>|
|$.udb.settings.menu|Contains properties of menu controls corresponding to the user group menu passed by the Page Engine.|
|$.udb.settings.set()|<p>Changes a setting from the “application.xml” file temporarily.</p><p>These settings can be overridden at application initialization with <meta> tags in the "application.html" file with the same name and the "us:" prefix.</p><p>Refreshing the browser will re-apply the initial setting.</p><p>Resetting settings with .set() ) is unlikely to be effective because, for the new setting to take effect, a page reload is required, or even an application reload.</p>|



> [!CAUTION]
> To script behaviour with these function calls is unlikely to be good practice. Consider making these settings at design-time instead.

Possible values returned by .settings.compatibilityMode are usoft7, usoft8 and usoft9 and usoft10. By setting the application's compatibility mode to an older USoft version you may disable certain UI features that were introduced after that version. This gives you backward compatibility at the price of having less available features.

Examples

```js
$.udb.settings.get("useTimeoutEvent");
```

```js
$.udb.settings.set("useTimeoutEvent", false);
```

 