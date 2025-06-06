# Referring to publication settings

In the Publication Configurations window, you set all parameters for a configuration: publication attributes, system-defined properties, and user-defined properties. You can refer to all these attributes and properties by using placeholders in your CSS, JavaScript, ASP, and other scripts:

```
$.udb.settings.get(*attribute-name*)
$.udb.settings.get(*property-name*)
```

For example:

```
$.udb.settings.get("LogLevel")
$.udb.settings.get("StartPage")
```