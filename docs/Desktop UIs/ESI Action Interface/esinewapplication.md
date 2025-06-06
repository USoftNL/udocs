# esi-new-application()

The first action call in any script that you run via the ESI action interface MUST always be one to esi-new-application(), or to esi-open-application(). Otherwise you will get errors of the type COULD_NOT_OPEN \<GUI name> when incorrect class names or control-class names are passed as parameters to esi-add-subclass(), esi-delete-class(), or esi-set-class-property().

*Syntax*

```
esi-new-application(new GUI name>,<existing GUI name>)
```

**Description**

This action creates a new application GUI, based on an existing one that you specify. You can then make any required changes to the new application GUI, and save them using esi-save().