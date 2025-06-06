# Actions, events and triggers

## Actions and events

In USoft Windows Designer, you can script customised software behaviour by triggering actions when events occur. For example:

- You can open or close info boxes or dialogs when the end user clicks certain buttons.
- You can change the background color of a field when it displays certain data.
- You can have totals re-computed in additional fields each time new data are displayed.
- You can raise a particular tab page in a Tab object displaying child data, depending on what data are displayed in a parent box.

## Triggering object and target object

Actions are defined on objects. Events are also defined on objects. Each time you script an action that must occur on an event, there is a *source object* or *triggering object* where the event takes place, and a *target object* where the action must have an effect. For example, if you want data to be cleared from an info box when the user presses a button, the button is the source object and the info box is the target object.

![](/api/Desktop%20UIs/Scripting%20in%20USoft%20Windows%20Designer/assets/7651a7c2-3b1b-4d9f-88d8-b063ca7f319c.png)

The triggering object is implicitly the object where the event is defined. If you script:

```
RecordDelete()
```

in the Action event property of a button B, then the triggering object is button B.

The target object is often also implicit. In an info box, the target object of **RecordDelete()** is by default the top-level info box that displays the data. This is where a record is deleted.

At other times, you specify the target object explicitly.

```
Tab_1.ControlSetActiveTab(Page 2)
```

the target object is "Tab_1". This is the tab control that must execute the action of raising its Page 2 as the active tab page.

## Conditional events

In some cases, you want the script to take effect only under specific conditions. For example, you want to delete a record when the user presses a button, but this may ONLY happen if the CANCEL_DATE field in the record has a non-null value.

![](/api/Desktop%20UIs/Scripting%20in%20USoft%20Windows%20Designer/assets/21cd5a03-b54d-4824-b566-f4435dea1853.png)

To script conditional actions, you must have records to decisions. A decision allows you to find out first whether something applies, and then IF it applies to perform an action (called Yes Action). A decision also lets you define what action must be taken in the opposite case (the decision's No Action).

 