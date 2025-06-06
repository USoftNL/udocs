# CurrentColumn()



> [!NOTE]
> This article is about the **CurrentColumn** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **CurrentColumn()**

Returns the column that is currently in focus.

This action is used to define action calls (or calls to get/set a property) that are to act on the column that presently has input focus.

*Syntax*

```
CurrentColumn( *mode* )

*mode*  :=  { Y | }
```

If the optional *mode* is not passed, CurrentColumn() returns the conceptual column object. This is the object referred to as the "base column".

If the value 'Y' is passed for *mode,* CurrentColumn() returns the column **display** object.

*Example*

```
CurrentColumn(Y).Sort()
```

 