# How to embed a page in another page

You can embed a page in another page simply by dragging it from the catalog onto the object tree of that other page.

If the page to be embedded is a related page or a lookup page, synchronization between parent and child data is automatically applied.

With only a few layout changes, this is a very easy way to create a master-detail form (showing, for example, a Customer and her Orders).

To embed a page in another page:

1. From the catalog, open the (target) page in which you want to embed another page.

2. Drag the page to be embedded from the catalog onto either the main Page object in the object tree, or onto the appropriate group object in the object tree.

An additional page nodeappears in the object tree.

![](/api/Web%20and%20app%20UIs/Navigation%20between%20web%20pages/assets/ff70b2d5-3dfe-4fd9-adbe-b52c13e4d346.jpg)

 

In practice, this construct usually requires that you make additional changes to the embedded page or the embedding page, for example, stripping a button group so that it does not appear twice on the end user page.