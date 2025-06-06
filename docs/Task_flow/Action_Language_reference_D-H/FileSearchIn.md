---
id: FileSearchIn
---

# FileSearchIn()



> [!NOTE]
> This article is about the **FileSearchIn** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **FileSearchIn()**

Opens a dialog that enables the user to search and replace text in the file loaded into the editor.

*Syntax*
 

```
FileSearchIn( *direction*, *search-string* )

*direction*  :=  { Forward | Backward }
```

The optional *direction* specifies the default direction of search.

The optional *search-string* specifies the search string that is displayed by default. If *search-string* is not specified, the current select buffer is used as a default search string.

*Exposed by*

- Text Editors