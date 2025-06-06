---
id: Actions_Example_12_Generic_search_dialog
---

# Actions Example 12: Generic search dialog

This example is a variation on Actions Example 11: Window with Separate Search Dialog. In this example, you will make the search dialog more generic or abstract; making it reusable in different situations.

The search dialog of example 11 only works if the calling window is an instance of the Reservations info box class. This includes embedded Reservations boxes, and subclasses of the Reservations class.

The search dialog of example 12 will work with any calling windows that require destination and customer search conditions.

But you could go as far as making a generic query toolbar supporting any kind and number of search conditions for any base table.

## Search Dialog

To get a dialog that can act as a generic toolbar and function with ANY calling window:

1. Create a new subclass of the Dialog Box class, rename it to SearchDialog.

*or:*

Rename and adapt your FindExistingReservations Dialog (Example 11) into this newly defined SearchDialog.

2. In the Controls Group, insert a text box with prompt: Destination, and set the Related Column property to:

```
TOUR.DESTINATION
```

A lookup button will appear that calls a lookup window for Tours.

3. Insert a text box with prompt: Customer Name, and set the Related Column property to:

```
PERSON.FAMILY_NAME
```

4. Rename the OK and Cancel buttons to "Find" and "Close" respectively, and reposition them if required.

5. In the Object Activator for the Action property of the Find button, remove the dialog-ok() action, and create the following user-defined properties:

|**Property Name**|**Type**|**Argument Position**|
|--------|--------|--------|
|TheBoxToQuery|Info Window|1       |
|ConditionDestination|BaseColumn|2       |
|ConditionCustomer|BaseColumn|3       |



Make sure to select the SearchDialog in the Object Browser tree view (top-left) while defining those properties. Note that the first property is no longer of the Reservations type (like in example 11), but the more abstract Info Window type. The other two properties have the BaseColumn as the type which can refer to the query columns in another table. Note that instead of BaseColumn, you can also use the OUTPUT_COLUMN type with the same result.

6. Still in the Object Activator for the Action property of the Find button, continue writing the following script:

```
theBoxToQuery.QueryDefine() )
conditionDestination.value(Variables.Text_Box_1() )
conditionCustomer.value(Variables.Text_Box_2() )
theBoxToQuery(QueryExecute() )

```

In the second and third line, you need to be specific about the Value property to avoid type mismatch.

7. Click Apply and OK to save your work and close the Object Activator.

## Reservations window

To get a Reservations window that the user can query via the SearchDialog:

1. Create a new subclass of the Reservations info box class, rename it to "ReservationsFindExisting".

*or:*

Adapt the "ReservationFindExisting" (Example 11) into this newly defined Reservations sub class.

2. Insert a new button and change the button prompt to "Find Existing ... ".

3. Open the Object Activator for the Action property of the button.

4. From the Windows Designer catalog, drag the "SearchDialog" dialog class into the Script box. This results in the following action statement being created:

```
SearchDialog(....,....,....).Window.Create()
```

5. For the first parameter subnode, select the ReservationsFindExisting class itself (the top-level or root object in the tree) and click Set. For the second, select the query.destination and click Set. For the third, select the query.family_name and click Set. These result in:

```
SearchDialog( Self(), query.destination(), query.family_name() ) Window.Create()
```

USoft replaces root-level objects by the keyword Self. The advantage of this is that the script remains valid even if the window class is renamed or embedded, or if subclass is made of it.

6. Click Apply and OK to save your work and close the Object Activator.

## Reservations child box

Suppose you have a Scheduled Tours window where Reservations are embedded as a child box, the SearchDialog can also be used. To do this, in the Action property of the button to create the Search Dialog window, define the following script:

```
SearchDialog( Self(), query.destination(), ChildBox.query.family_name() )
Window.Create()

```