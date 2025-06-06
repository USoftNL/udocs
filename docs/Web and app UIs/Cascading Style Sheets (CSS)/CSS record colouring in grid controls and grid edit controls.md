# CSS record colouring in grid controls and grid edit controls

In grid controls and grid edit controls, the selected record has a different color to the non-selected records.

In the resulting HTML code, all \<tr> elements within a grid control have a selectedRow CSS class value. All \<tr> elements that are not selected have a notselectedRow CSS class value.

The CSS classes SelectorControl, RecordNumberControl, GridCellEditControl and GridCellControl define the colors of a record displayed.

*Example*

```language-css
.notSelectedRow td.SelectorControl{
    background-color: rgb(90%, 90%, 90%)
}
.selectedRow td.SelectorControl{
    background-color: rgb(80%, 80%, 80%)
}
```

 