---
id: Setting_a_variable_set_with_the_URL_protocol
---

# Setting a variable set with the URL protocol

Variables can be set in an internet browser window, by specifying the url:

```
http://<host name>/<virtual folder name>/<info page name>.asp?$Action{name=setValue}{DataSourceName=<VariableSetDataSource name>}{DataSourceItem=<Variable name>}{Value=<value>}
```

This way, you can set a variable when opening an info page.