# Object Activator tool

The Object Activator helps you script action statements:

1.In the design view, select the triggering object where you want to script the action statement(s).

For example, to script actions that must execute when the user presses a button, select the button object.

2.For the object, open the Property Inspector and identify the event property associated with the event that you want to trigger your script.

For example, to script actions that must execute when the user presses a button, select the button's Action property.

3.In the icon ribbon of the Property Inspector, press the Edit icon (highlighted in red below).

![](/api/Desktop%20UIs/Windows%20Designer%20objects%20and%20properties/assets/284a7329-38d5-47c3-9d24-f0e203385906.png)

The Object Activator opens.

![](/api/Desktop%20UIs/Windows%20Designer%20objects%20and%20properties/assets/cfd33c73-f543-46e7-bb32-bf82424eedf5.png)

4.In the tree view in the top left pane, select the target object of your action statement. Expand tree nodes to reach child objects at lower levels.

5.In the list view in the top right pane, in the Methods or Application Methods tab, select the action you want to perform, then click the Add button in the Script pane.

If you are scripting a value attribution, use the Properties tab to address the property you want to (re)set the value of.

6.If the action requires parameters, in the Script pane, select the empty child line of the action, then compose the parameter.

If the parameter is simply a literal value, use the Edit button and write the value by typing.

If the parameter is expressed by an object path or property path, compose this path using again the top 2 panes, and then press the Set button.

You can add multiple action statements in a script. For each statement, in the Script pane, make sure that the position where you want to add a new statement is selected, then start again with Step 4.

You can drop statements from your script by selecting the statement in the Script pane and then pressing the Delete button.

If you want help composing an expression with FORMULA(), press the Formula button.

You can edit the script manually using the Edit button. Manual editing is also possible back in the Property Inspector: press OK to get out of the Object Activator, then press the Edit button at the property value.