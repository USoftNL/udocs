---
id: Extra_Queries
---

# Extra Queries

In addition to data retrieved by its main query, an info box may show data from **extra queries**. There are many use cases for extra queries. Here are two examples:

- The extra query performs a calculation using related information from other tables. You can show the calculation result in a field of the info box where the extra query is defined.

- The extra query finds out something from other tables that you need to make a GUI control (a tab, a button...) sensitive or insensitive in the info box where the extra query is defined.

A single extra query definition may result in one or multiple displayed or computed or hidden fields.

If you use more than one extra query in the same info box, execution order between extra queries cannot be specified. For this reason, you cannot refer to one extra query in the SQL statement of another. To control execution order, use Decisions instead.

Extra Queries are also executed when you enter Query Mode. If a No Action has been specified for the Extra Query (see the first 2 examples in this help topic), then this No action will be performed when you enter Query Mode.

> [!TIP]
> To create an extra field in your info box that represents joined data from a parent table or grandparent table, insert a joined column instead.

### How to add an Extra Query

To add an Extra Query:

1.Use the Windows Designer catalog to open the appropriate window/dialog.

2.In the design view, select the Info Box into which you want to insert an extra query.

3.From the menu bar, choose Insert, Extra Query.

A dummy Extra Query and its resulting field are inserted.

4.Select the Extra Query in the Object Tree for the window/dialog, and open the Property Inspector.

> [!NOTE]
> Do NOT specify the underlying query by selecting the dummy field and setting its Values property. This does not produce the desired result.

5.In the Property Inspector, select the Underlying Query property and press the upper Edit (...) button.

The SQL Definer opens, enabling you to specify the query.

6.Specify the Underlying Query statement. On the Query Tree tab page, select Save from the right mouse-menu. Close the SQL Definer.

One or more extra column controls are added to the current info box to display the extra query result. Use the Property Inspector to change their location and display properties. Prompts are taken from the select list of the extra query's SQL statement.

7.Save your changes.

### Extra Query Example 1: Dynamic Background Color Change

Prices over 1600 should be highlighted in red. Otherwise the Price text box should have a blue background.

Insert an Extra Query into the info box, and set the following properties for it:

*SQL Statement*

```
price > 1600
```

*Yes Action*

```
Variables.price.background('red')
```

*No Action*

```
Variables.price.background('blue')
```

Alternatively, you can set the Yes Action and No Action properties using the Object Activator. In this case, do not use the Client property. Select the data control as a part of each of the action statements.

When you insert an extra query, a column control with prompt 'x' is automatically displayed for its outcome. In this case, you want to make this control non-displayed.

### Extra Query Example 2: Child Box Background Color Dependent on Parent Data

The Reservations info window by default contains a Participants detail box because reservations cannot exist without participants. Suppose you want participant records grayed out if a reservation is canceled. You will have to define an action to make this happen, and a search specification to refer to the control you want the action to operate on.

To gray out participant records when reservation is canceled:

1.Select the Reservations info window.

Make sure you select the Info Window itself and not one of its components. The status line should read Info Window: Reservations.

2.From the menu bar, choose Insert, Extra Query.

A query object and a visible extra query control are created.

3.From the menu bar, choose Design, Extra Query to navigate to the query object (NOT the visible text box), or use the Object tree.

4.Set property SQL Statement, on the General tab page to:

```
SELECT 'x' FROM RESERVATION
WHERE CANCEL_DATE IS NOT NULL

```

5.Set property Yes Action on the Behavior tab page to:

```
Participants_taking_part_in_Reservation.insertable('No')
Participants_taking_part_in_Reservation.updatable('No')

```

6.Set property No Action on the Behavior tab page to:

```
Participants_taking_part_in_Reservation.insertable('Yes')
Participants_taking_part_in_Reservation.updatable('Yes')

```

7.Run the info window to test the new functionality. Query all records.

8.If you are satisfied, close the runtime window and save the design work.

9.To make the extra query column non-displayed, select the column. Make sure that the status bar indicates the column control, e.g. " esd_char: 'x' ". Set property Displayed on the General tab page to No.

### Extra Queries for related information

You may show related information from other database objects in the box for a particular database object by defining an extra query for it. This extra query must be able to retrieve the appropriate value for each record in the box, and contain a join of at least the database object on which the box is based and the database object from which the related information is retrieved.

> [!NOTE]
> For standard "lookup fields" reproducing a value from a parent table in a child window, use joined columns. Joined columns are defined at column level in USoft Definer.

If you want the Tours window in the Travel Agency system to have an "additional field" showing the start date and end date for each tour, you must provide that window with the following extra query:

```
SELECT   c.start_date || ' , ' || c.end_date
FROM     schedtour_c, tour
RELATE   c "SUBJECT TO" h


```

If you want to provide it with an alternative prompt, you may add it to the underlying query as a display label (i.e. prompt):

```
SELECT   c.start_date || ' , ' || c.end_date "Your Prompt"
FROM     schedtour_c, tour
RELATE   c "SUBJECT TO" h

```

### Computed values in Extra Queries

You may use extra queries to show the result of computations. Using this facility, you may display the number of computers of a particular model, for example. That is, use the extra query to compute a value for each visible record in a box.

To compute the number of tours that last a particular number of days, you may write the following query:

```
SELECT   COUNT(num_days) "Number of days"
FROM     FROM     schedtour_c, tour
RELATE   c "SUBJECT TO" h

```

As the query is performed once for each record in the box, you do not need a GROUP BY clause.

USoft Developer cannot retrieve a field prompt for this field from the repository. If you do not provide one yourself, it uses "COUNT(num_days)".