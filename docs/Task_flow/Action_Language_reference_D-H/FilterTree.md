---
id: FilterTree
---

# FilterTree()

:::note

This article is about the **FilterTree** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **FilterTree()**

Causes a tree view control to display, instead of the full tree view, a subset of tree view nodes that match a given search string.

- The search is performed case-insensitively.
- A node matches the search string if the name it displays equals the search string or if it contains the search string.
- The search is applied only to tree view node names produced by SQL queries, not to names hard-coded in tree view nodes.
- The search result includes matching tree view nodes **and** their ancestor nodes.
- An empty search string will produce the entire tree view contents.
- A non-matching search string will produce an empty (white) pane.

*Syntax*

```
FilterTree( *search-string* )
```

The optional *search-string* is a character string. If *search-string* is passed, the tree view will reduce the collection of nodes displayed to those that match *search-string.* If it is not passed, the tree view will (re)display the full tree.

*Example*

```
Tab_1.Page_1.My_Tree_View.FilterTree(Tab_1.Page_1.Variables.My_Search_Box())
```

<!-- TO DO: where is this?

 :::note

A step-by-step instruction of how to create a seach facility for a tree view is [here]().

:::

*Exposed by*

- Tree Views -->