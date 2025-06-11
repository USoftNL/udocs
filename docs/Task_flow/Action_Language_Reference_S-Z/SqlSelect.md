---
id: SqlSelect
---

# SqlSelect()




:::note

This article is about the **SqlSelect** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **SqlSelect()**

Creates an info window with the name specified in a SELECT statement. Examples of where this function can be used include startup, button, decision and dialog actions.

*Syntax*

```
SqlSelect( { *select-statement* | *action-call* }, *window* )
```

*Select-statement* is the query underlying the info window to be created. Alternatively, you can specify a *action-call* such as FORMULA() or an ObjectName.propertyName() call that returns the current value of a property.


:::warning

The UNION set operator cannot be used in *select-statement.*

:::

The optional *window* identifies the window class of which an instance is to be created:

- If an info window with this name is available in the ESI file, it is used.
- Otherwise a default info window is created.
- If *window* is not specified, the Object Name Plural of the main table of the underlying query is used.

*Example 1*

```
SqlSelect( 'SELECT destination, tour_type FROM TOUR', 'Destinations' )
```

If you want to refer to a certain value produced by an existing global variable, or from a certain text box or column, surround it with double quotes and start with a colon, as shown in examples 2 and 3:

*Example 2*

```
SqlSelect( 'SELECT destination, tour_type FROM TOUR where :"Global.MyVariable"', 'Destinations' )
```

*Example 3*

```
SqlSelect( 'SELECT destination, tour_type FROM TOUR where destination = :"Variables.Text_Box_1()"', 'Destinations' )
```

In a Yes or No Action Decision, you cannot define SQLSelect() statement with a placeholder referring directly to the value retrieved by its Decision SQL. Instead, first transform the output of the Decision SQL to a global variable using ResourceFileUpdate(). Then, define SqlSelect() referring to the new value of the global variable, as shown in example 4:

*Example 4*

(Decision SQL:)

```sql
SELECT destination FROM tour WHERE tour_type = 'SPORTS'
```

(Yes or No Action:)

```
ResourceFileUpdate( 'MyFavoriteDestination: ' ||:1 )
SqlSelect( 'SELECT destination, tour_type FROM TOUR where destination = :"MyFavoriteDestination"', 'Destinations' )
```

 