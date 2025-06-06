---
id: Windows_event_order
---

# Windows event order

When moving INTO an item, events with a wider scope will occur first. For instance, when you enter the first field of a new record, the Enter Record event occurs before the Enter Field event.

When moving OUT OF an item, events with a smaller scope will occur first. For instance, when you change a field value and then move to the next record, the following events happen in this order:

- Change Value
- Change Field
- Leave Field
- Insert Record or Update Record
**Opening a window**

When the user opens a new application and a window in it, generally the following events occur:

- Open Application
- Enter Record
- Open Window
- Enter Field
**New record**

When the user enters the first field value in a new record, generally the following events occur:

- Create Record
- Post-create (Field property, for all fields in record)
- Change Value
- On Change (Field property, for each character entered)
**Field-to-field**

As the user moves from field to field within a record, generally the following events occur:

- Enter Field
- Change Value
- Change Field
- Leave Field

:::note

What happens at Change Field time depends on HOW the field is changed. Please refer to the description of Data Events for details.

:::

**Record-to-record**

As the user moves from one record to another, generally the following events occur:

- Insert Record (referring to the previous record)
- Enter Record (referring to the new record)
**Commit**

The user issues the Save/Commit command, generally the following events occur:

- Commit Transaction