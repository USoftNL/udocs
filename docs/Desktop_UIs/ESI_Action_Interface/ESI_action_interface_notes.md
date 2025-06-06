---
id: ESI_action_interface_notes
---

# ESI action interface notes

### Action Syntax

As in SQL Command and SqlScript(), an action fired via the -run option can only contain just ONE line of text. (The number of characters is free).

- If an action parameter contains a comma, the parameter must be put between double quotes. For example:

```
ACTION esi-set-attribute(*BOB*Employee.query,XtNsql,"SELECT EMPNO, NAME FROM emp")
```

### Empty Strings

Using the esi-set-attribute() action you can also give properties an "empty" value but only if the property excepts strings. To do this, put a space between double quotes. For example:

```
ACTION esi-set-attribute(*BOB*Employee.query.deptname.esd_char, XtNdefValue," ")
```

### Allowed Values

The allowed values for certain resources are not always the same as the prompts displayed for property values in the Windows Designer's Property Inspector. See "Allowed Property Values vs Internal Resource Values" for a list of the values to use.

### Meta-class Properties

The ESI repository has two meta-class properties that you can set:

- READ_ONLY (Y/N)

If set to Y, you can edit the class but not save it. It defaults to N for all classes in the repository, and to Y for all imported classes.

- DESCRIPTION

A description of up to 150 characters.

These meta-class properties are not inherited, and need to be set for individual classes using esi-set-class-property(). These properties can only be set on classes that are not currently being edited, so you must save your changes first.

These meta-class properties are only stored in the repository, they are not generated into the ESI file.

The ESI repository contains some other meta-class properties (like CREATOR, CREATED_ON, CHANGED_BY, CHANGED_ON), but these cannot be set using the action interface. Their values are taken from the RDBMS, not from the client.

### Imported Classes

Imported classes are classes that are available but have not been introduced yet in the current repository. If you have used you own template file rather than the default, every class in your template is an imported class. To be able to modify them, you must first set their READ_ONLY meta-class property to N.

*Example 1*

Create a new application named ESI_ACTIONS_TRAVEL and open this application:

```
action esi-new-application(ESI_ACTIONS_TRAVEL, APPLICATION)
action esi-open-application(ESI_ACTIONS_TRAVEL)
action esi-save()
```

*Example 2*

Allow editing of the Info Window Style Sheet class by changing its (meta) properties:

```
action esi-open-application(ESI_ACTIONS_TRAVEL)
action esi-set-class-property(Info Window, READ_ONLY,N)
```

This action sets properties that apply to class usage instead of properties that are part of class definitions (comparable to file properties such as read-only).

*Example 3*

Create a new window class named NewTour that is based on the Info Window style sheet, and on the Base Table class called TOUR:
 

```
action esi-open-application(ESI_ACTIONS_TRAVEL)
action esi-add-info-window(NewTour, TOUR, Info Window)
```

You need not issue an esi-save() command because the esi-add-info-window() action implicitly saves the definitions.

*Example 4*

Create a new window subclass definition named SubTours that is based on the existing Tours class definition:
 

```
action esi-open-application(ESI_ACTIONS_TRAVEL)
action esi-add-subclass(SubTours, Tours)
```

Results are saved automatically. The class inherits all the properties and components of its predecessor.

*Example 5*

Change the height and width of the generic Button class so that it has a width of 100 and a height of 20. Make sure the Button class properties allow editing:

```
action esi-open-application(ESI_ACTIONS_TRAVEL)
action esi-set-class-property(Button, READ_ONLY, N)
action esi-set-attribute(*ESI_ACTIONS_TRAVEL*LIBRARIAN*Button,XtNheight,20,XtNwidth, 100)
action esi-save()
```

Subclasses of the generic Button class must be pointed out the same way as the generic Button class itself. For example:

```
*ESI_ACTIONS_TRAVEL*LIBRARIAN*lookup
```

points to the button subclass called "lookup", which is a subclass of Button.

*Example 6*

Tell ESI to anticipate the possible existence of an implicit control called "esd_char" that is created by the TOUR_TYPE data column (which is an object of the Variable class). If it exits it must be configured according to the background color setting:

```
action esi-open-application(ESI_ACTIONS_TRAVEL)
action esi-add-component(*ESI_ACTIONS_TRAVEL*Tours.query.tour_type,esd_char,esd_char)
action esi-set-attribute(*ESI_ACTIONS_TRAVEL*Tours.query.tour_type.esd_char,XtNbackground, yellow)
action esi-save()
```

Results have to be explicitly saved in the repository before applying to generated windows.

*Example 7*

As an extension to the script in Example 6, overrule the color setting locally for the SubTours subclass by setting it to green:

```
action esi-set-attribute(*ESI_ACTIONS_TRAVEL*SubTours.query.tour_type.esd_char,XtNbackground, green)
action esi-save()
```

*Example 8*

Add a new control of the Extra Query class to the window class called Tour, and have it display the number of scheduled tours. The field prompt should be Total:

```
action esi-open-application(ESI_ACTIONS_TRAVEL)
action esi-insert-control(*ESI_ACTIONS_TRAVEL*Tours, Extra Query,Extra Query)
action esi-set-attribute(*ESI_ACTIONS_TRAVEL*Tours.Extra Query,XtNsql,"select count(*) Total from TOUR T, SCHEDTOUR S where T.DESTINATION = S.DESTINATION and T.TOUR_TYPE=S.TOUR_TYPE")
action esi-save()
```

Use double quotes around the SQL text to indicate that the quoted text is to be regarded as one property value. Otherwise the comma in the SQL text that separates the two tables causes ESI to regard the text after the comma as another property name.

*Example 9*

Add a control (give the control the name QuitButton) based on the generic button class Button (see example 5 also) to the Info Window Style Sheet class. Change its label text to Quit (in the context of the Style Sheet class) and add the close-table() action to its callback list. Set the group resource of the button to "columnBox" and set the seqno resource to 99:

```
action esi-open-application(ESI_ACTIONS_TRAVEL)
action esi-insert-control(*ESI_ACTIONS_TRAVEL*Info Window, Button, QuitButton)
action esi-set-attribute(*ESI_ACTIONS_TRAVEL*Info Window.QuitButton, XtNlabel, Quit, XtNcallback, close-table())
action esi-set-attribute(*ESI_ACTIONS_TRAVEL*Info Window.QuitButton, XtNgroup, columnBox, XtNseqno, 99)
action esi-save()
```

*Example 10*

Delete the Quit button from the Tours window class:

```
action esi-open-application(ESI_ACTIONS_TRAVEL)
action esi-delete-control(*ESI_ACTIONS_TRAVEL*Tours,QuitButton)
action esi-save()
```


:::tip

You must use the ESI object model to write context identifiers, not the layout model.

:::

 