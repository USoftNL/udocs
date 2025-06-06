---
id: Info_windows
---

# Info windows

USoft automatically creates a form interface called info window for each database table you have defined. An info window allow the user to fill out a form with new data that are stored in the table, but also to perform queries that retrieve existing data from that table.


By default, an info window is presented in a tabbed interface; it is an "info tab" rather than a an "info window": 

![](./assets/ddce066f-d570-40f1-a719-141e51739e88.png)

A user may choose to display the form as a floating window by clicking the Multiple Windows Mode icon in the top right corner:

![](./assets/5ad4b9d3-7448-4ed7-8141-e55a4c23984b.png)

Clicking this icon causes the info window to look like this:

![](./assets/4603e310-0c82-4978-b740-853e695bbefa.png)

An info window may contain one or more info boxes. Whenever the underlying table has a mandatory relationship to another table or tables, then all tables are shown. In the example above, there are two info boxes.

## Info boxes

An Info Window may contain one or more Info Boxes. The following info window "Persons" (displayed here in a tabbed interface rather than as a floating window) contains two Info Boxes, one below the other. The top Info Box is for Person data and the bottom Info Box is for related Address data:

![](./assets/acd9d56e-0d9e-43cd-a078-6e1b2326abbc.png)

USoft will automatically create Info Boxes for child data, like the Info Box for Address data in the example, whenever you declare a Relationship with mandatory child data. (This is done by setting the Relationship's "Child Must Exist" attribute to Yes.)
In addition, as a designer, you can also determine manually that you want an Info Window to contain multiple Info Boxes.