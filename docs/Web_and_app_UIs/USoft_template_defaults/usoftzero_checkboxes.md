---
id: usoftzero_checkboxes
---

# usoft-zero checkboxes

## ​Idea

The usoft-zero default shows Bootstrap-style *toggle switches* for booleans. For a boolean indicating if a traveller has taken out the insurance scheme or not, the default for the ‘N’ value looks like this:

![](./assets/c2ade188-c817-41e0-ac5b-58168b0965d3.png)

and the default for the ‘Y’ value looks like this:

![](./assets/85553b6f-8423-4a30-96f7-37191a86dece.png)

A popular alternative for toggle switches is *checkboxes,* for the 'N’ value:

![](./assets/8c7c3f02-1465-46ed-81e6-9b4cb4a9c2e5.png)

For the 'Y’ value:

![](./assets/4dba2118-2044-4a53-8951-aba1f9af6134.png)

In usoft-zero, we offer checkboxes as a near-default. Read the next section to find out how to get them.

## Implementation

This section first tells you how to get a checkbox on a specific page. Then it will tell you how you change all the toggle switches  to checkboxes.

To get a checkbox instead of a toggle switch for a boolean field on a specific page:

Find the CheckBoxColumnControl that represents the field, then find its **input-group** child object:

![](./assets/0ab33e91-faff-4cf3-bef9-5224d23d65f9.png)

> [!TIP]
> To get to see the offcanvasRightEditBody as in the picture above, first open the DetailCard class where you want to have the checkbox, then in the preview pane in the middle of Web Designer, click the Edit button.

Right-mouse-click on **input-group,** open the Property Inspector and find the Class List property for **input-group**.

From the Class List, remove the **form-switch** class name. For example, if the Class List value is:

```language-css
ui-group-control form-check form-switch
```

change it to:

```language-css
ui-group-control form-check
```

To change all the toggle switches into checkboxes:

On the Controls tab in the Web Designer catalog, find the** CheckBoxColumnControl** control class:

![](./assets/5bd20d11-0d7d-4110-8f07-82d2c5df2018.png)

Open this class, then in the object tree  on the right, find the **input-group** object it contains:

![](./assets/ab465530-c39e-4721-b877-015c0a4d7012.png)

Right-mouse-click on **input-group,** open the Property Inspector and find the Class List property for **input-group**.

From the Class List, remove the **form-switch** class name. For example, if the Class List value is:

```language-css
ui-group-control form-check form-switch
```

change it to:

```language-css
ui-group-control form-check
```