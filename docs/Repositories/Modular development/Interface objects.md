# Interface objects

An **interface object** is a repository object for which an Interface = Yes flag has been set. If an application with interface objects acts as a module used (or *consumed*) by another application (the *consumer*), the interface objects become known to the consumer if you press the Synchronise Internal Interfaces button in the consumer (via Tools, Manage Interface Interfaces, Consumed Interfaces in the Definer menu).

The collection of interface objects in a module is the module's **interface**. After synchronising with the module, a consumer can start "using" (= referring to) the interface objects as if they were a part of the consumer itself.

The following repository objects can be made interface object:

- Domains, Domain Allowed Values
- Tables, Logical Views, Component Tables
- Columns
- Decisions
- Jobs, External Sets, External Set Elements
- RDMI Components, Methods, Parameters and Named Protocols
- Relationships, Relationship Columns

In a consumer, you can get an overview of all interface objects. From the Definer menu, select Tools, Manage Internal Interfaces, Provided Interfaces.

> [!NOTE]
> Some contained objects become interface automatically at the time when their container object becomes an interface. You can mostly undo this manually for individual contained objects. For example, when you turn a Table into an interface object, all its Columns also become interface object, but you can revert this for individual columns manually, except for primary key columns.

The use of interface objects is somewhat restricted in consumers. For example:

- In a consumer, you cannot define a subtype table with an interface table as its supertype.
- In a consumer, you cannot define a new relationship with an interface table as the child table in the relationship.

> [!TIP]
> If a module drops an interface table, the next time you synchronise, this will make the table an Incorrect Interface in the consumer. You can make use of this fact. After Synchronize, click the Incorrect Interfaces tab and double-click on the name of the table. In the resulting window, clear the Module field and commit your changes. The table will now be available as a normal, locally owned database table in the consumer.

 