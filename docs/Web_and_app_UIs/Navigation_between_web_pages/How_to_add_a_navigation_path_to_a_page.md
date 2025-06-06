---
id: How_to_add_a_navigation_path_to_a_page
---

# How to add a navigation path to a page

USoft delivers a network of default pages complete with navigation paths between them.

But you may want to change navigation paths or add navigation paths of your own. Also, you may want to develop your own pages rather than default pages, in which case you need to set up all the navigation yourself.

To add a navigation path from page A to page B:

1. Identify the object in page A, for example a push button, from which you want to call page B. Or add such an object if it does not exist.

2. Identify the event handler that needs to trigger the navigation. For example, the 'onclick' child object of a push button.

3. Insert an Action of type callClientScript in this event handler. Use Insert, Action from the menu.

4. Open the Property Inspector for the new Action and set the Script property to:

```
$.udb.navigateTo( *target page* )
```

For example:

```
$.udb.navigateTo( 'Reservations' )
```

To add a navigation option to the default dropdown list for going to related pages:

1. In the object tree, select the NavigateToRelatedPageGroup object, and then the NavigateToMore object.

2. From the Controls tab of the catalog, insert an Option. The Option object is listed under DataSource objects.

3. For the new Option1 object, set the Name property to the name of the page to call.

4. Save your changes. A user can now select the new option at run-time and press the default "Go >>" button to go to the page.