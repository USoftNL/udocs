---
id: GetValueFromCurrentItem
---

# GetValueFromCurrentItem()



> [!NOTE]
> This article is about the **GetValueFromCurrentItem** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

## **GetValueFromCurrentItem()**

For tree views and lists, this action retrieves a column value from the currently selected element.

*Syntax*

```
GetValueFromCurrentItem( *column-name* )
```

The required *column-name* is the Label or Name of a node column of the currently selected element in the tree view or list view, as specified in the SELECT list of the node's SQL Query.

The first column in the SELECT output list is always the one that is displayed. If you want to retrieve the displayed value of the current item, you can use the constant 'value' for *column-name*.

*Example*

```
MessageInformation( Tree_View_1.GetValueFromCurrentItem( address ) )
```

*Exposed by*

- Tree views
- List views