# The Catalog

When you first start the Definer, the Definer window is displayed with a **Catalog** pane on the left-hand side. The remainder of the window shows an empty workspace.

This Catalog has 3 tabs: TeamWork, Model And Rules, and Batch. On each tab, there is a tree view that shows a collection of objects. You can expand and collapse nodes in the tree view. This allows you to explore the various types of object stored in the repository. Folder nodes are for object types. By expanding a folder node, you can explore the actual objects of a type.

![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/d4f6dfa1-0348-4f47-9b78-fef43c6b7906.png)

USoft Definer, Catalog pane## Opening windows from the Catalog

As an alternative to menu options, you can use the Catalog to navigate to objects in the repository:

- Drag-and-drop a tree node in the Catalog onto the workspace, or
- Double-click on a tree node in the Catalog, or
- Right-mouse-click on a tree node in the Catalog.

## Folder nodes, object nodes

A folder node is for a **type** of object, for example: Database Tables. Folder nodes open windows where you can query objects of that type.

Non-folder nodes are for **specific** objects, for example: the PERSON database table. Non-folder nodes open windows in which the record for the specific object has been retrieved.

## Searching the Catalog

To search a catalog tab:

1. Click in the "Search catalog” text field at the top of the catalog tab.
2. Type the text string to search for.
3. Press ENTER or click outside the field.

The search is performed case-insensitively. It is applied only to names of specific objects, not to names of object **types**. The search result contains all the objects that have the search text string in their name. The search result is a subset of the catalog tree in which the matched object nodes, but also their ancestor folder nodes are displayed.

If there are no matches, the catalog tab will display an empty space. To return from a search result to the full tree view, erase the search text string from the "Search catalog” field and press ENTER once more.

## Showing, hiding the Catalog

You can show and hide the Catalog pane. To show it, choose Catalog from the View menu. To hide it, click the Close button in the top-right corner of the catalog pane, or choose Hide Catalog from the context menu of most catalog tree nodes.

Changes in the object model are not immediately reflected in the Project Catalog. Choose View, Refresh Catalog (Cntr + F5) to have the Catalog display the latest situation.

## Model and Rules, Catalog icons

The following icons are used in the Modeller and Rules Engine tab page of the catalog to denote the various objects:

|        |        |
|--------|--------|
|![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/4e0f716a-6365-45f6-9eec-87a231456dcf.png)

|Database Table|
|![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/2101e51d-40bb-49e4-a045-1fa82988438b.png)

|Interface Table|
|![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/fc49c569-e3f7-4baf-965a-be8a7d2af1da.png)

|Component Table|
|![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/4b7a2168-5702-4636-96db-c61b72ca1d6e.png)

|Domain  |
|![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/d7242a90-5b32-4105-9ab3-5d971ed79fcb.png)

|Interface Domain|
|![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/862b6bc2-c1e1-462d-99dd-f77d63652db9.png)

|Relationship|
|![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/556a2639-7c5a-424c-aab3-c3bf7554c4d1.png)

|Component|
|![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/6123a492-86c4-4f0d-98f1-3abc922c6b46.png)

|Domain Constraint|
|![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/9952df05-c3fe-45cb-a5b4-1855c22ed32e.png)

|Domain Constraint, incorrect or unchecked|
|![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/0ebe8a0e-2d4c-4398-99df-8273a6ffa6e1.png)

|Table Constraint|
|![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/5592a12c-a784-4952-b146-7a93f4f35c16.png)

|Table Constraint, incorrect or unchecked|
|![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/5c81d4be-6030-4931-bd1e-aacf09aadc40.jpg)

|Inactive Constraint|
|![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/93597aa0-8af7-4594-8f9f-fdc4c6035f5d.png)

|Logical View|
|![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/79a17c62-52ff-42e9-a7ed-ecf88004b6ea.png)

|Logical View, incorrect or unchecked|
|![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/d2bc9afc-e628-438f-bf45-a360ba03cc4b.png)

|Web Service (Provider)|



 