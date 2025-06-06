# esi-open-application()

The first action call in any script that you run via the ESI action interface MUST always be one to esi-open-application(), or to esi-new-application(). Otherwise you will get errors of the type COULD_NOT_OPEN \<GUI name> when incorrect class names or control-class names are passed as parameters to esi-add-subclass(), esi-delete-class(), or esi-set-class-property().

*Syntax*

```
esi-open-application(<GUI name>)
```

**Description**

This action opens the specified application GUI, in order for you to make your changes.