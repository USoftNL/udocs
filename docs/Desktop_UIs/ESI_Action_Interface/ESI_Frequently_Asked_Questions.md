---
id: ESI_Frequently_Asked_Questions
---

# ESI Frequently Asked Questions

**Question**

What is the identifier for the Generic controls?

**Answer**

Use:

```
*<APPLICATION>*LIBRARIAN*<Control Class>
```

*Example*

```
*ESITEST*LIBRARIAN*Button
```

**Question**

How do I set/change controls on Controls For Style Sheet?

**Answer**

Use:

```
*<APPLICATION>*StyleSheet Class*<Control Class>
```

*Example*

```
*ESITEST*Lookup Window*Button
```

**Question**

Are there known limitations?

**Answer**

The limitations are the same as for using the Windows Designer. For example:

- You cannot create a class with the same name as an already existing class.
- You cannot insert a class as a control in itself or in one of its superclasses.

**Question**

How do I insert a list of values as ONE parameter (e.g. when I need new lines in a Related Menu list)?

**Answer**

Use:

```
esi-set-attribute(<id>,<prop1>,~,<val 1>,<val 2>,~)
```

Where tildes (~) mark the beginning and end of the list.

*Example*

```
esi-set-attribute(*APP*Departments.XtNrelatedWindowsForMenu,~,Employees of Department,Projects of Department,~)
```

**Question**

How do I know what the allowed values for properties are?

**Answer**

See "Allowed Property Values vs Internal Resource Values" for a list of the values to use.

**Question**

How do I reset a property value?

**Answer**

You cannot. The ESI action interface has not been designed for interactive designing, but for generation in batch mode. Objects must receive the desired property values in one go. However, you can achieve the same result by deleting a class, and then regenerating it. If you plan to do this often, do not make subclasses, or be prepared to regenerate them as well.

**Question**

How do I empty a property value?

**Answer**

See "Empty Strings" in the Notes section.

**Question**

How do I insert columns into a dialog?

**Answer**

The object model of dialogs is almost identical to that of tables, except for the fact that the query object is called Variables.

**Question**

How do I insert non-database columns into an Info Box?

**Answer**

Same as for inserting columns into a dialog (see above).

**Question**

How do I set application properties?

**Answer**

Just like any other property. For example, use the following context identifiers:

```
*MY_APPLICATION.integrity*MY_APPLICATION.dictionary
```

**Question**

How do I set the Window properties of a window or dialog?

**Answer**

Just like any other property. The window is a child of the Info Box class in the object model, and has to be registered with esi-add-component(). The class name is "Definition Shell" and the name is "ESI Shell".

**Question**

How do I change the label of a subtype indicator column?

**Answer**

Changing the label of a subtype indicator column is different from changing that of an ordinary column. The label of a subtype-indicator column is a child of esd_check.data !!

So, instead of:

```
esi-set-attribute(*MYAPP*myclass.query.mycolumn.esd_char.label, XtNlabel, "old label")
```

Use:

```
esi-set-attribute(*MYAPP*myclass.query.mycolumn.esd_check.data, XtNlabel, "new label")
```


:::note

It is actually another label that you are setting. The subtype indicator column's property is there, but it is (normally) hidden. You can change it if you change the prompt instead of the label. If you do not set the label's label property, it will get the column's prompt property as its default.

:::

 