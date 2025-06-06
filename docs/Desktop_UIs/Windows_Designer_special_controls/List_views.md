---
id: List_views
---

# List views

### Inserting a list view

To insert a list view:

1.Use the Windows Designer catalog to open the appropriate window/dialog.

2.In the design view, select the object into which you want to insert a list view.

3.From the menu bar, choose Insert, List and then choose List View, or drag your own list view from the Controls tab page of the Windows Designer catalog.

4.Select the list view, and then open the Property Inspector.

5.Set the SQL Query property to indicate which values to display.

For example:

```
SELECT emp_name, emp_no, initials, title, dept FROM emp
```

If the List View is run in List, Small Icons or Large Icons view mode, only the first column in the SELECT list will be displayed (here EMP_NAME). If the Details view mode is selected, all column values will be displayed.

The user can make a runtime selection of one of these view modes if the default Popup Menu Page for list views, STD_LISTVIEW, is used. Which of the four view modes is default depends on the View property of the list view (the default is Small Icons, but List or Details view modes are also common as defaults for list views).

To further enhance a list view, you can:

- Associate each list entry with an icon or bitmap image (this is essential for using the list view in Small Icons and Large Icons view modes)
- Set or change column headings and column widths to be used when the list view is shown in Details mode
- Set overlay images to be added to the icon or bitmap when a certain SQL condition (the Overlay Condition) applies
- Set or change the list view's popup menu page
- Set or change actions to be executed when the user double-clicks on one of the list view entries
- Make the list view resizable when the end user resizes the window or dialog it is in.

### Adding icons to a list view

Icons or bitmap images are a standard feature of list view items.

To associate an icon or bitmap with each entry in a list view:

1.Make sure the Show Icons visual property for the list view is set to Yes (the default).

2.Add a column at the end of the SELECT list of the list view's SQL Query, and give it the LIST_IMAGE alias, for instance:

```
SELECT emp_name, emp_no, initials, title, dept, bitmap "LIST_IMAGE"
FROM emp

```

The name of the icon or bitmap image can be stored in the database table (as here in a column called BITMAP), or it can be a constant.

### Setting column headings and column widths

When the list view is run in the Details view mode, a button control for each column is displayed at the top of the list view. If you click one of these buttons, the items in the list are re-ordered by the corresponding column.

Each of these button controls contains a default column prompt and has a certain default width.

To change column headings in list views:

1.For each of the column headers you want to change, determine at what level you want to do this:

- Prompt column attribute (in the Definer)
- List view's SQL Query
- List view's Column Headings property

2.If you want to change a Prompt column attribute, make this change in the Tables and Columns definition screen in the Definer.

3.If you want to change a column heading in the list view's SQL Query, add the heading as an alias to the column name in the SELECT list of the list view's SQL Query.

4.If you want to change a column heading at the level of the list view's Column Headings property, follow the What's This contextual help in the Property Inspector for this property.

To change columns widths in list views, follow the What's This contextual help in the Property Inspector for the Column Widths property of the list view.

### Adding overlay images to a list view

A list view's Overlay Condition and Overlay Image properties can be used to determine if and when the icons or bitmaps specified for the list view items should have a second image superimposed on it under certain conditions.

To add overlay images to a list view:

1.Make sure that icons or bitmaps have been defined for the list view's items.

2.Determine what the overlay condition is, write it as a SQL statement, and set the list view's Overlay Condition behavior property to this statement.

The overlay will be displayed if the condition is met, or if no condition is specified.

The general form of an overlay condition is:

```
SELECT  ''
FROM    ...
WHERE   ...

```

You can use variables to refer to columns selected in the SQL Statement property of this list. For example:

```
SELECT  ''
FROM    emp
WHERE   :EMP_NAME != 'John'

```

This will display an overlay image for all employees except John.

3.Set the list view's Overlay Image behavior property to the name of the icon or bitmap image you want to use as the overlay image.

### Adding checkboxes to a list view

You can add checkboxes to a list view by adding an additional column to the queries of list view nodes. The additional column must have the "LIST_STATE" alias. For example:

```
SELECT    p.first_name || ' ' || p.last_name, DECODE(p.GENDER, 'M', 'Y', 'N') "LIST_STATE"
FROM      person p
ORDER BY  p.last_name

```

Once the TREE_STATE column has been added to the SQL query for the node, a checkbox is displayed for the node. Possible values and corresponding states for the checkbox are:

|**Value**|**Checkbox State**|
|--------|--------|
|NULL    |No checkbox (TREE_STATE column not in query)|
|N       |        |
|Y       |        |



When a checkbox is displayed for an item, the user can change the state of the checkbox by using the mouse or the space bar. The states will toggle between N and Y.

For each checkbox you can specify an action that is to be executed when the checkbox state changes. You can do this using the CheckBox Action property available in the Windows Designer Property Inspector for the List View Node in question.

 