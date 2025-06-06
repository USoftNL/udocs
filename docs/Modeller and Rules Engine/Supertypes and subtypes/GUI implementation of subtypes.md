# GUI implementation of subtypes

By default, if your application has a USoft-generated UI, then USoft Definer generates separate windows or web pages for a supertype and also for each of its subtypes.

As with all generated USoft UIs, you can customise the result in Windows Designer or Web Designer. This section only describes the GUI that is generated for supertypes and subtypes by default.

### Subtype indicators

For each subtype, a separate window or page is implemented that contains ALL the columns for the subtype, including the columns that are defined at supertype level. This UI does not make any reference to supertypes. To the users, it appears as if there were no supertypes and subtypes.

For each supertype, a separate window or page is implemented that contains ONLY the columns for the supertype AND, for each subtype, a **subtype indicator** checkbox with a button on its right-hand side:

![](/api/Modeller%20and%20Rules%20Engine/Supertypes%20and%20subtypes/assets/14d83d9c-4b27-4032-bd3a-a4cbc92f1cdc.png)

The user can check a subtype indicator box to express that the instance (here, the SCHIPHOL SHORTSTAY branch) is of that subtype. Pressing the button on the right, on the same line, causes a **subtype window** or page to open, in which subtype fields may be filled out if the box is checked. If the box is not checked, the subtype window will still open, but it will not be editable.

![](/api/Modeller%20and%20Rules%20Engine/Supertypes%20and%20subtypes/assets/c3845854-3003-4f31-9aad-ec51ea7f76bb.png)

### Subtype Presentations

Subtype Presentations are old use and no longer recommended. What they allow you to do is now better implemented in the GUI tools (Windows Designer or Web Designer).

Subtype Presentations allow you to present the subtype indicators of a given supertype differently than in the default generated GUI described earlier in this topic:

- You can determine the groups in which subtype indicators are visually displayed.
- You can determine the order in which groups are displayed.
- You can determine the order in which subtype indicators are displayed within each group.
- For each group, you can determine a title (a text header).
- For each subtype indicator, you can customise the label (the text prompt displayed next to the checkbox).

To define Subtype Presentations, choose Define, Subtype Groups, Presentations.