---
id: Oldstyle_navigation_paths
---

# Old-style navigation paths

Old-style navigation paths are supported for backward compatibility and because some of the USoft default productions still use this style, in particular, underlying queries in info boxes of type Related Window. They are being replaced by object paths.

Old-style navigation paths are an alternative way for traversing the object hierarchy. They allow you to point at target objects by using a small set of special symbols in combination with object names:

|**Symbol**|**Meaning**|
|--------|--------|
|`<-`      |(Arrow back, composed of a smaller-than symbols and a hyphen)Go to the topmost object within the current window|
|`<-<-`    |Go to the topmost object within the window that called the current window|
|`<-<-...` |(Etc.)  |
|`Parent`  |Go to the parent box from where a child box was called|
|`.`       |(full stop)Go one step down from the current position|
|`*`       |(asterisk)Go any level down within the window until you find the next clue|

Object names in old-style navigation paths must be spelled with underscores instead of spaces. Address an object called "Tab 1" by:


```
Tab_1
```

*Examples*

Find, within the current window, the control with name "first_name":

```
<-*first_name
```

Find, in the context of the current control, the control with name "first_name":

```
*first_name
```

Find, within the current window, the displayHeight property of the control with name "first_name":

```
<-*first_name.displayHeight()
```

Find, within the *calling* window or info box, the control with name "first_name":

```
<-<-*first_name
```

## Abbreviated path to column controls

For column controls, an abbreviated way of addressing the control is by simply using the *column name.* 

```
PERSON_ID
```

Such an abbreviation expression is case-insensitive.