---
id: esisetattribute
---

# esi-set-attribute()

*Syntax*

```
esi-set-attribute(<context id>, <name>, <value> [,<name2>, <value2>, ...])
```

**Description**

This action will set (or change) the value of an attribute of an object.

The \<context id> must be of the form:

```
*<application class name>*<window class name>.<component id>
```

The \<window name> must refer to a known window class that was created using esi-add-info-window() within the application, and the \<component id> must specify a known object within this window class that was added using esi-add-component() or esi-insert-control()).

The \<name> must specify the technical (resource) name of the property, preceded by "XtN", so for example the Allow Horizontal Resize property must be specified as "XtNallowHoriz". (See "Property Names vs Resource Names"for a complete overview).

The \<value> must specify a value that is consistent with the type of resource to which the property will be applied. If this is not the case, a conversion error message will be issued. The \<value> may consist of a list of items. In that case, separate the items by commas and mark the beginning and end of the list by means of tildes (~). For example:

```
esi-set-attribute(<id>,<prop a>,~,item1,item2,~,<prop b>,<value b>)
```

It is allowed to specify more than one pair of \<name> and \<value>. All specified attributes will be applied to the same component as resolved from \<context id>.

Calling this action will implicitly start a transaction on your ESI repository. Until esi-save() is called, it is not possible to involve this window in a call to esi-add-subclass() or esi-add-info-window(). This action will only prepare changes in the ESI repository. It has no effect on your ESI repository, until you call esi-save().