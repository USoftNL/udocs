---
id: Implicit_ESI_controls_vs_explicit_ESI_controls
---

# Implicit ESI controls vs explicit ESI controls

Explicit controls are those that you add explicitly, for example by inserting an extra query. Explicit controls are inserted with esi-insert-control().

Implicit controls are controls that are created spontaneously in the run-time environment:

- Column displays (see below)
- Embedded details
- Groups
- Windows (or shells)
- Grid Boxes
- Columns that are created by extra queries

To be able to set properties on implicit controls, you must first use the esi-add-component() action to register these controls.

For column displays, esi-add-component() is only required if the underlying query has been changed. Such components are best registered at base-table level, all classes below that will then know of their existence.