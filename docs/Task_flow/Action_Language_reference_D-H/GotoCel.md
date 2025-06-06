---
id: GotoCel
---

# GotoCel()



> [!NOTE]
> This article is about the **GotoCel** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **GotoCel()**

Moves the cursor to the specified cell (record and field) in a multi-record info box. This info box may have its Column Manager Class set to Column or to Spreadsheet.

*Syntax*

```
GotoCel( *record-number*, *column-control* )
```

The required *record-number* specifies the sequence number of the record that you want to move the cursor to. The first record has record number 0 (zero).

The required *column-control* is the column control in the info box that the target cell is part of.

*Examples*

```
GotoCel( '0', 'name' )
```

```
myInfoBox.myGridBox.GotoCel( '2', 'title' )
```

 *Exposed by*

- Multi-record info boxes