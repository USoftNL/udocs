---
id: Replicated_Columns_Control
---

# Replicated Columns Control

The Replicated Columns Control acts as a grid for single record controls. It is a subset of the Container Control:

![](./assets/0b348389-587f-4808-ae7f-bed5241e4ccf.jpg)

 

The only function of the RCC is to repeat all the controls it contains for each row in the Data Source it is associated with. You can place several other controls in a Replicated Columns Control, for example:



![](./assets/1833705b-9764-48d3-919e-d777490a6c9e.jpg)

 

In the web application, several rows are displayed as multiple Replicated Columns Controls. For example, in the following screenshot, you can see three rows, where the second row is the selected row:



![](./assets/6d630a4f-d023-4161-b45a-afb4c90ac8bf.jpg)

 

Quick steps for using a Replicated Columns Control:



1. Place a Replicated Columns Control onto the page.

2. Associate the Replicated Columns Control with a data source.

3. Place some Column Controls inside the Replicated Columns Control.

4. Associate all Column Controls with the same data source as the Replicated Columns Control and choose a specific data source Item for each Column Control.

### Replicated Columns Control Example

Searchresults  (1 field  title + 1 multi line field description)

![](./assets/1c7042e5-4441-46bd-bcc6-4482358a4859.png)

![](./assets/f099391d-a441-4822-93c8-159cbb7b8ed5.png)

Will display as:

![](./assets/bda9d2d7-1bb3-4d83-8e30-decc0e0b79b3.png)