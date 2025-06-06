---
id: Contexts
---

# Contexts

As of USoft 9, all pages and sub-pages exist within a single HTML document. They are not in different namespaces kept apart by named HTML frames. All data, variables and scripting operate in a single space. In most cases this will make life easier. There are, however, situations that can cause conflicts.

Take for instance an application with multiple pages. The current view on the application shows pages that contain datasources with identical names. How can you distinguish one from the other?

USoft Web Designer contains a mechanism to address this problem by means of contexts. When a user pushes a button or edits a text on a (sub-)page, it is likely that the data source that is addressed is also situated on that (sub-)page. This is also the idea behind contexts. The application remembers the trigger point of each event, and stores that information. When the event occurs and, as a result, a data source is addressed, the application will look for that datasource in the definition of the (sub-)page where the event was triggered. When it cannot find the requested data source in the given context, it will extend the search to parent pages.

In most cases, this will result in the expected behavior. In some cases, however, there is a need to cross the boundaries of context, for example, if a VariableSet data source on the root page that contains user data that must be accessed by controls on the subpages. Context switching is called for, which may be achieved by the **executeInContext()** function. This function forces the application to look for a different context than default behavior dictates:

```
$.udb.executeInContext("", function() { … });
$.udb.executeInContext("MyPage", function() { … });
$.udb.executeInContext("MyPage/SubPage", function() { … });
```

To query the current context, use **getContext()****.** This function returns the current context:

```
var context = $.udb.getContext();
```

To query a data source of a different context, use the following construction:

```
//get username from datasource USER_DATA in root context
var username = $.udb("::USER_DATA").cols("NAME").val();

//get a value from a data source in context named ApplicationFrame
var id = $.udb("ApplicationFrame::EMP").cols("ID").val();

```

One thing to keep in mind is that a commit is always executed in a context. Manipulations from other contexts are not stored on a commit.