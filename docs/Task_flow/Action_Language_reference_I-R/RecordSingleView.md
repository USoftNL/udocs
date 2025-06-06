---
id: RecordSingleView
---

# RecordSingleView()



> [!NOTE]
> This article is about the **RecordSingleView** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **RecordSingleView()**

Opens a single record view on the current info window. This single record view is synchronized with the window from which it is opened. If a definition for a window is available in the ESI tables it is used, otherwise a default layout will be used.

*Syntax*

```
RecordSingleView( *internal-name* )
```

*Internal-name* must be the name of a secondary window. If any other type of window is named, it will probably be opened, but will not synchronize with the parent.

*Exposed by*

- Table controls (Info Boxes)