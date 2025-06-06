---
id: WindowCreate
---

# WindowCreate()



> [!NOTE]
> This article is about the **WindowCreate** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **WindowCreate()**

Opens an info window or dialog.

If parameters must be passed as arguments to create the info window or dialog, use Create() instead. On a dialog, you cannot use WindowCreate() to call a related or lookup window. Instead, use WindowCreateLookupDialog() to call a lookup dialog from a dialog.

*Syntax*

```
WindowCreate( *style*, *window* )

*style*  :=  { 'Info Window' | 'Dialog' | }
```

The optional *style* may be used to specify the type of window to be created. The required *window* identifies the window or dialog class that you want to create an instance of.