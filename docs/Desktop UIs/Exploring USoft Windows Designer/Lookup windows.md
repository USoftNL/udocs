# Lookup windows

**Lookup windows** are meant to be used for stepping out, from a foreign key field in a child table, to a list of possible parent values. The user can choose a (different) )value from the list and return to the foreign key field.

The following images show an arrangement generated in default classes on the basis of a relationship between table PERSON and table RESERVATION in the data model.

Based on the relationship, a default lookup button generated for the foreign key Customer ID in Reservations (highlighted in red).

![](/api/Desktop%20UIs/Exploring%20USoft%20Windows%20Designer/assets/90c624a7-4751-41a1-94e7-83ee15b2b68a.png)

**Default lookup button at foreign key field**

When the user presses the button, a lookup window "Persons making Reservations" is opened. Even if the calling window is in tabbed mode, by default the lookup window is presented as a "floating" window. This has the advantage of leaving the calling window in view:

![](/api/Desktop%20UIs/Exploring%20USoft%20Windows%20Designer/assets/410a4042-b07b-41ab-98c4-82802f5c00f5.png)

Default lookup window

The person chooses a (different) possible value from the list and clicks OK. The lookup window is closed and the selected value is copied into the foreign key field where the user started.

## Columns shown in the lookup window: In Display Selection

At table-and-column level, in USoft Definer, you can predefine which columns you want to show in lookup windows on the table.

For each column you want to show, in the In Display Selection column attribute, type a sequence number. The columns will appear in the order that the sequence numbers indicate.

This preselection automatically applies to *all* lookup windows on the table in both Windows Designer and Web Designer. If you want a more fine-grained approach, select or delete column controls in Windows Designer instead.

## Dropdown list box or radio button group instead of lookup window: Lookup Method

At relationship level, in USoft Definer, you can define that you want a dropdown list box or a radio button group instead of a lookup window. Do this by setting the relationship's Lookup Method attribute.

The setting will apply to *all* lookups based on the relationship.

## Calling your own lookup windows

Default lookup windows are called from lookup buttons based on relationships you have defined. You may want to call a user-defined lookup window class or subclass instead, but still use the lookup button and basic lookup functionality.

You can only call default or user-defined lookup windows from query columns that are defined as a foreign key in a relationship.

To call your own lookup window:

1. Create a new lookup window class or subclass. Base this class on the Lookup Window style sheet. Define specifications for this class now or at a later time.

2. Open the Property Inspector for the query column from which you want to call the lookup window.

3. Set the Lookup Method behavior property to

```
WindowCreateLookup( lookup-window-class )

```

or click the Edit button and drag the lookup window class into the Object Activator. In this case the Object Activator generates a action statement using the Create() method and the syntax will be:

```
lookup-window-class.Window.Create( )

```