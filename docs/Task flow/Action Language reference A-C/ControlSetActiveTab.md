# ControlSetActiveTab()



> [!NOTE]
> This article is about the **ControlSetActiveTab** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **ControlSetActiveTab()**

Makes the specified tab page the active one (visually, the tab page will appear raised).

*Syntax*

```
ControlSetActiveTab( *tab-page* )
```

*Tab-page* is the tab page that must become the active tab page.

*Example*

```
Tab_1.ControlSetActiveTab( Tab_1.Page_1() )
```

*Exposed by*

- Tab controls