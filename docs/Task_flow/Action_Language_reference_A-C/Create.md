---
id: Create
---

# Create()



> [!NOTE]
> This article is about the **Create** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **Create()**

Opens an info box, lookup window, related window, secondary window or dialog of a specified class.

This action is generated for you when you drag-and-drop a window class from a Task Modeler catalog onto the Script box in the Object Activator.

*Syntax*

```
*window*( *parameter(s)* ).Window.Create()
```

The required *window* is the name of the window class that you want to open an instance of. If you dragged this class from the catalog onto the Script box in the Object Activator, *window* is generated automatically.

*Parameter(s)* are arguments corresponding to user-defined properties of *window.* For each user-defined property of *window* that has an Argument Position, the Object Activator will display a **?** placeholder together with a subnode in the Script tree. This makes it easy for you to specify value(s) to be passed as *parameter(s)*.

If you do not have *parameters* to pass, WindowCreate() provides an alternative syntax.

On a dialog, you cannot use the Create() action to call a related or lookup window. Instead, to call a lookup window from a dialog, use the Related Column property of a Text Box object.

*Examples*

```
Customers.Window.Create()
```

```
Search_Results(Variables.esd_date_1(), Variables.esd_number_1()).Window.Create()
```

```
SearchDialog( Self(), query.destination(), query.family_name() ) Window.Create()
```

The following is the equivalent of the first example:

```
WindowCreate( Customers )
```

*Exposed by*

- Windows