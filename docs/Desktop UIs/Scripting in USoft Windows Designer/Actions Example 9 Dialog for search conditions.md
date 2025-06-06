# Actions Example 9: Dialog for search conditions

This example shows how you can build a Search Dialog that allows the user to enter a date value and a number of days. If the user clicks the Search button, the dialog disappears and a Search Results info window is opened that displays all the tours scheduled on the date entered, or days after that up to the number of days entered:

![](/api/Desktop%20UIs/Scripting%20in%20USoft%20Windows%20Designer/assets/1e0e5b84-9d11-45e6-b1dc-1078cfdf5e06.png)

For example, if the user types start date: 01-APR-2015, and Range: 100, the Search Results info window displays all tours starting between April 1, 2015 and 100 days later.

Here are the two GUI classes you need to create:

- A new Search Dialog dialog box with a DATE field, a NUMBER field and a Search button. The Search action consists of opening the Search Results info window and passing the DATE and the NUMBER value as parameters. Use the standard USoft date format and database specific functions to transfer DATE values safely.
- A new Search Results info window. You can define a subclass of the Scheduled Tours info window that performs a query on startup with the query conditions passed to it by the dialog. You will have to create two new string properties to catch those values.

> [!NOTE]
> The reason why you can use simple string values here is that the search dialog closes when the OK button is clicked. The Search Results window does not refer back to the dialog. This contrasts with examples 11 and 12, where object-like (as opposed to string-like) properties are required.

## Search Results Window

This scenario is part of Actions Example 9: Dialog for Search Conditions.

To create the Search Results window, take these steps.

1. In the catalog, create a Search Results subclass of the Scheduled Tours info window.

2. Using the Object Activator, compose the following action statement script for the Post-open property.

```
myStartDate() and myNumberofDays() are user-defined properties for storing the values passed by the search dialog.
QueryDefine(  )
query.start_date( FORMULA( ''>'||TO_CHAR(TO_DATE(:1,'YYYY/MMDDHH24MISS'),'DD-MM-YYYY')',  myStartDate() ) )
query.return_date( FORMULA( ''<'||TO_CHAR(TO_DATE(:1,'YYYY/MMDDHH24MISS')+:2,'DD-MM-YYYY')',  myStartDate(),  myNumberOfDays() ) )
QueryExecute(  )

```

Here are the steps for writing this script:

1. Open the Property Inspector for the Search Results info window, select the Post-open property and click the Edit/Compose button to open the Object Activator.

2. Make sure the Search Results info window is selected in the Object Browser tree view (top-left).

3. Click the Properties tab page and click New.

4. In the New Property dialog, define a property with Name = myStartDate, Class = String and Argument Position = 1, and then click OK.

5. Add a second property with Name = myNumberOfDays, Class = String, and Argument Position = 2.

6. Click the Methods tab page. Select the QueryDefine method from the Methods list (put the cursor on any method in this list and type Q to scroll down), and then click Add.

7. Put the cursor on the query.start_date node in the Object Browser and click Add.

8. Put the cursor on the empty node below the query.startdate( ) action statement.

9. Click the Formula button.

10.Put the cursor on the empty node below the FORMULA action statement, and click the Edit button.

11.Type:

```
'>'||TO_CHAR(TO_DATE(:1,'YYYY/MMDDHH24MISS'),'DD-MM-YYYY')
```

12.Place the cursor on the empty node below this first parameter.

13.Select the Search Results info window in the Object Browser tree view.

14.Click the Properties tab page, and select the myStartDate property.

15.Click the Set button.

16.Proceed in the same way to add the two remaining action statements.

The window is now ready to receive two search conditions and execute the query using those conditions.

 

## Search by Start Date Dialog

![](/api/Desktop%20UIs/Scripting%20in%20USoft%20Windows%20Designer/assets/11bfd57b-626a-49eb-bda1-1c4ce3e9a56e.png)

To create the Search Dialog, take these steps:

1. In the catalog, create a subclass of the Dialog Box class, call it "Search Dialog".

2. Insert a DATE and a NUMBER field into the Controls Group of this dialog.

Do this by dragging an esd_date and an esd_number Text Box from the Controls tab page of the catalog.

Change some visual and layout properties if you want to. Also, change the IO Format of the esd_date field to: DD-MON-YYYY

3. Rename the OK button to "Search" and compose the following action statement script for it.

The best way to call the Create() method is to drag the Search Results class from the catalog to the Object Activator's Script box.

```
Search_Results(Variables.esd_date_1(),Variables.esd_number_1()).Window.Create()
ActionDialogOk()

```