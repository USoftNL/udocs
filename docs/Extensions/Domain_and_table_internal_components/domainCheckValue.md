---
id: domainCheckValue
---

# domain.CheckValue



> [!NOTE]
> This article is about the **domain.CheckValue** method of [domain internal components](/docs/Extensions/Domain%20and%20table%20internal%20components).

## **domain.CheckValue**

Checks a value against restrictive and productive rules laid down for the domain in domain attribute settings and domain constraints (if any).

Returns an empty value in case the check is successful, or a string containing the error message if the check fails.

*Syntax 1*

```
INVOKE *domain*.CheckValue WITH 
SELECT *value*
,      *fieldname*
,      *useIOFormats*

*useIOFormats*  :=  { No | Yes }
```

*Syntax 2*

```
SELECT *domain*.CheckValue( *value*, *fieldname*, *useIOFormats* )

*useIOFormats*  :=  { No | Yes }
```

The required *value* is the value that will be checked against domain attributes and restrictive domain constraints.

The optional *fieldname* is used for the error returned by the component. If the error contains a field name, the string provided in this parameter will be used as that field name.

If the optional *useIOFormats* is passed with the 'Yes' value(the default is 'No'), the value to be checked is first converted according to the IO format defined by the domain. Alternative Input Formats will also be checked.

Productive domain constraints (if any) on the domain have no effect on the outcome of a CheckValue call, except in error situations. The productive behavior is triggered by a CheckValue call and will raise an error if, for example, the productive rule calls some different component that (for some reason) returns an error message. Other than this possible error behavior, productive rules have no effect when CheckValue is called, since there is no way that these rules can store their corrected values: there is no row binding at the time of calling CheckValue.