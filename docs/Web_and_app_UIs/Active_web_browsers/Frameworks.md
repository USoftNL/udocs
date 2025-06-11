---
id: Frameworks
---

# Frameworks

----

![](./assets/0ad2203c-e22e-42ab-b740-e7cb035f4c84.png)



In USoft 11, only Bootstrap 5.3.3 is supported.

----

![](./assets/952b770a-90e7-498a-9b8f-4d65a027d0da.png)



In USoft 10, it is possible to use different HTML, CSS and JavaScript frameworks in your web application. There are various dependencies. For example, Bootstrap 4 CSS/JS requires jQuery.

The framework(s) that your runtime application actually uses depend on:

- The resources you have made available.
- How these resources are referenced in the \<head> element of the **application.html** file.

However, USoft ships resources as part of the Web Designer product, and there is a **Framework** publication property in USoft Web Designer that allows you to select a framework through a single setting.

You can find the Framework property by choosing Publish, Publication Configurations from the Web Designer menu. What matters at runtime is the Framework property of the configuration you have most recently been publishing against.

USoft recommends using **auto** (the default):

|**Framework**|**Meaning**|
|--------|--------|
|auto    |<p>USoft selects the most suitable framework. This is a recent framework that USoft includes. For USoft 10.0 new installations, this is likely Bootstrap 5. You can optionally add resources of your own. Supply and reference these via the [Alternative Template Folder](/Web_and_app_UIs/Publication_configurations/The_Alternative_Template_Folder.md).</p>|
|bootstrap|The Bootstrap framework is applied if available.|
|bootstrap5|The Bootstrap 5 framework is applied if available.|
|bootstrap4|The Bootstrap 4 framework is applied if available.|
|jquery-ui|The jQuery UI framework is applied if available.|
|none    |No framework is applied.|
|usoft   |A USoft-proprietary look-and-feel is applied. This is appropriate if you require a more user-friendly interface than offered by "none", but you do not want to do any work to get it.|



If you set the Framework property to a value not listed in this help topic, it will fallback to 'none'.

To **view** the framework(s) available at runtime, press F12 (Inspect) in the runtime browser and then inspect the references to CSS and JS files in the \<head> element on the Elements tab.

If the Bootstrap and jQuery UI frameworks are both present, the Bootstrap framework will have preference.

The HTML that is required for a control can differ per framework. The differences are implemented in the file "usoft.ui.frameworks.js".