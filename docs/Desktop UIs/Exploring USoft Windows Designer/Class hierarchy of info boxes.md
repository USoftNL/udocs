# Class hierarchy of info boxes

The default classes exist in a *class hierarchy,* in which each subclass inherits all the properties of their parent (their superclass).

Mainly, the class hierarchy is a simple tree structure, but at 1 point it is a matrix rather than a tree. This is the point at which GUI classes inherit both from *base class* parents and *info box type* parents.

The following diagram does not visualise the entire structure, but it does visualise this principle of multiple inheritance at this junction:

![](/api/Desktop%20UIs/Exploring%20USoft%20Windows%20Designer/assets/78389db5-5f94-47d3-8077-a99e4eae3011.png)

The project catalog on the left-hand side of the screen visualises the class hierarchy. The catalog section below shows the entire default structure inheriting from a table called RESERVATION in the data model defined in USoft Definer:

![](/api/Desktop%20UIs/Exploring%20USoft%20Windows%20Designer/assets/c4c8ecb3-4401-4a85-949c-e598d0046ca7.png)

Some of the default classes, such as the "Reservations" class, derive from the simple existence of a RESERVATION table in the data model.

Other default classes, such as the "Reservations made for this person" class, derive from the existence in the data model of a relationship connectin the RESERVATION table to the PERSON table.

The catalog section below shows some classes inheriting from the Related Window info box class. As you can see, some of the classes that inherited from Base Table class "RESERVATION" are also inheritants of the Related Window info box type:

![](/api/Desktop%20UIs/Exploring%20USoft%20Windows%20Designer/assets/866a27f1-fc7e-47c3-9493-84c601ec0545.png)

 