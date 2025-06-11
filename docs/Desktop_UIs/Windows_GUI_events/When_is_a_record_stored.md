---
id: When_is_a_record_stored
---

# When is a record stored?

It is often important to know exactly when an INSERT, UPDATE or DELETE manipulation is stored. The moment of row storage is when row constraints are evaluated, when actions associated with behavior properties such as Post-change (Info Box property) or Post-insert are executed, and when the [:recordStatus](/Desktop_UIs/Windows_GUI_events/recordStatus_and_applicationStatus.md) variable begins to refer to a different record.

## DELETE

When a record is deleted, the DELETE manipulation is stored immediately, i.e. at the time of the Delete Record event.

## INSERT / UPDATE

When a record is inserted or updated, the INSERT or UPDATE manipulation is stored as soon as the user performs an action implying that record editing has finished. This includes:

- Navigating to a different record line in the same info box, using either keyboard or mouse.
- Closing the window or application and answering Yes to the dialog that asks: "Store/Save Data Manipulations?"
- Issuing the Record, Store or the Save/Commit command, or otherwise causing the record to be stored or the transaction to be committed.
- Navigating to a "dependent" info box and performing a data manipulation action there, such as overtyping a queried value. Parent and child info boxes depend on each other. Subtype and supertype boxes depend on each other as well, and so do master boxes and secondary boxes.

It makes no difference whether the "dependent" info box is shown in a separate window, or embedded in the same window.


:::danger

The record is NOT (yet) stored as a result of the following actions:

:::

- Navigating to a completely different window, e.g. an info window based on a different table.
- Navigating to a "dependent" info box without performing data manipulation there. For "dependent", see INSERT/UPDATE above.

If the Early Save-local behavior property for the info box is set to Yes (the default is No), navigation to "dependent" info boxes will cause the changes to be stored even without further data manipulation taking place in the "dependent" info box. The Early Save-local property is only intended to support backward compatibility.