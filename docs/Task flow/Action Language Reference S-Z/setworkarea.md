# set-workarea()



> [!NOTE]
> This article is about the **set-workarea** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **set-workarea()**

> [!CAUTION]
> This action exists for backward compatibility. Use the WorkArea option of the Alignment layout property instead.

Set-workarea() may be called (e.g. from the Post-open property of Info Box objects) to specify that the window or dialog involved must resize itself when the end user drags the embedded Tree View or List View to a bigger/smaller size. To make this possible the Resize Child property must be set to Yes as well.

*Syntax*

```
set-workarea( *control* )
```

The required c*ontrol* identifies the Tree View or List View control.

*Exposed by*

- Table controls (Info Boxes)