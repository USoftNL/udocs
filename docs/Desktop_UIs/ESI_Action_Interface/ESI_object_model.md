---
id: ESI_object_model
---

# ESI object model

The ESI action interface manipulates objects in accordance with the ESI object model. This model describes which classes and components are created by which other classes/components.

For a sample repository with an application GUI called MY_APPLICATION, and an Employees table, the object model looks like:

```
Object Model
*MY_APPLICATION (APPLICATION)
    *Employees (Info Window)
         query (Query)
         ...
    *Info Window
         ESI Shell
    *Related Window
    ...
    *MyDialog (Generic Dialog Box)
         mylabel (MyLabelClass)
    *LIBRARIAN (represents the control classes)
         *Label Object
         *MyLabelClass (Label Object)
              XtNbackground = red
              XtNlabel = hello world
    *Generic Dialog Box
         *Label Object
              XtNbackground = blue
*OTHER_APPLICATION

```

In this sample, the GUI named MY_APPLICATION has a dialog called MyDialog. This dialog has a blue label called "mylabel" with the text "hello world" on it. The GUI called OTHER_APPLICATION does not have this dialog.

The class called LIBRARIAN is family of the Info Window/Dialog Box classes, just like the style sheet classes.

The window (or shell) is a child of the Info Window class. Its name is ESI Shell, and its class name is "Definition Shell".

In a little more detail, the object model for Info Windows looks like:

```
Info Windows
Employees
    ESI Shell (i.e. the window)
    query
         empno
         deptno
         name
    Extra Query
    columnBox
    Related Window (embedded detail)
departments
    ...

```

## Dialogs

For dialogs, the default model is the same as that for Info Windows, with the exception that it does not have a query object, but a Variables object (class name ContainerObject). Note that you have to insert this Variables object yourself.

```
My_Dialog 1
    Variables
         column_1
         column_2
    Controls Group
         OK Button
    ESI Shell (window)
My_Dialog 2
...

```

 