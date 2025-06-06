---
id: Domain_and_table_internal_components
---

# Domain and table internal components

## Domain internal components

For each domain defined in your repository, an *internal domain component* is implicitly available. The name of each internal domain component is the same as the name of the domain.

Each internal domain component offers 1 method:

[.CheckValue()](/docs/Extensions/Domain_and_table_internal_components/domainCheckValue.md)

## Table internal components

For each database table defined in your repository, an *internal table component* is implicitly available. The name of each internal table component is the same as the name of the database table.


:::tip

Do not confuse with user-defined table components. User-defined table components are not internal components but components that you must code yourself. The purpose of user-defined table components is to support the behaviour of a component table. The component bears the name of the component table it supports.

:::

Each internal table component offers 2 methods:

[.GetInitialData()](/docs/Extensions/Domain_and_table_internal_components/tableGetInitialData.md)

[.GetNextGeneratedUniqueValue()](/docs/Extensions/Domain_and_table_internal_components/tableGetNextGeneratedUniqueValue.md)