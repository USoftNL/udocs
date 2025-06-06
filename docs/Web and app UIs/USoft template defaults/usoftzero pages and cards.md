# usoft-zero pages and cards

This article describes pages and cards that USoft delivers as a default in the **usoft-zero** template default for browser-based UIs. This **usoft-zero** UI/UX is the default that USoft delivers by default.

## Info pages

### Idea

The usoft-zero default gives you an info page for each table.

When the runtime user navigates to an info page, a multi-record grid appears. By default, the table is queried and the query results appear in the grid:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/4a605d99-a7ec-476a-a2ac-bd9e7d6dc22d.png)

A multi-record display shows multiple records at the same time. A grid display shows columns across and records down. The grid has the purpose of showing query results. The info page as a whole is also intended to do a new search or query. The purpose is not to allow the user to manipulate data.

Here is an impression of a default info page multi-record grid for a PERSON table:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/3bd3608a-ec18-46a1-a212-2d93bd807d6c.png)

A default info page also contains an off-canvas editing pane, or **side pane**,****that the user can cause to slide into view from the right window edge. It has a single-record form for editing. A single-record display shows data for only 1 record at a time: the record selected by the user in the grid. A form display invites the user to “fill out a form” by supplying or changing data values for individual fields. The form has a separate field for each column in the table. Each field has its own prompt: a text that tells the user what the field is for. The user opens the editing page by selecting the **Edit** icon button for a record in the grid:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/9ce35d67-4ea9-44a7-b65e-ad2cc2764858.png)

Here is an impression of a single--record form in an off-canvas editing pane for a PERSON table:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/7a5a03c4-67d9-480f-86fd-5a4fd422c5d7.png)

On any navigation, this side pane automatically commits or rolls back. One effect is that transactions are kept short. This is usually a desirable quality in web page design. Another effect is that transaction handling is clear and transparent to the user: it is not possible to leave the side pane without ending the transaction. Any open edits are committed if the user presses Save or navigates to the next or previous record via the arrow buttons. Any open edits are rolled back if the user presses Cancel or closes the side pane via the 'x’ Close icon in the top-right corner. INSERTs and UPDATEs can only be performed in the side pane, not in the multi-record grid, so they are always committed one-record-at-a-time.

The Save button is only responsive if there is something to save and there are no errors.

If you require more complex tranaction handling, you can insert multiple data sources into the same side pane. Depending on details of your case, another way to combine parent and child commits may be to join parent and child data in a single Logical View, and use the default side pane generated for that Logical View.

### Implementation

The info page for table PERSON is implemented as an InfoPage class. Find this class on the Pages tab of the Web Designer catalog:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/b44fd817-39c2-4d26-b4d6-328eb51a318f.png)

Open the page. In the object tree on the right, locate the PERSON **data source object**. This data source object is responsible for connecting the web page with the PERSON table in the database and the Rules Engine that enables and controls data access to this table:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/02c714e7-7585-4975-9196-bd74d1dff3af.png)

In the preview pane in the middle of the Web Designer tool interface, click on the grid control. In the object tree on the right, locate the MultiRecordResultGrid:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/ef4f32d3-f9b4-4aea-90c7-0e4d4dd19d02.png)

To trace the off-canvas editing pane, expand to find the JavaScript client script associated with its **onclickactions** event:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/3bc8293c-d78f-43ff-add5-9e94e27e74ac.png)

This script reads:

```js
let element = event.target.closest('button');

bootstrap.Tooltip.getOrCreateInstance(element).hide();

if (element.classList.contains('row-duplicate')) {
	options.duplicate = true;
	this.trigger('new', [options]);
}

if (element.classList.contains('row-edit')) this.trigger('edit');
if (element.classList.contains('row-delete')) this.trigger('deletedialogopen');
if (element.classList.contains('row-goto-detail')) this.trigger('gotodetail');
```

The line containing **row-edit** allows you to trace the off-canvas editing pane to the **edit** trigger defined at a more generic level in the page:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/633da493-0e55-4c5c-aae8-fe5566ed1765.png)

The associated script reads:

```js
let page = this;
let settings = getSettings(page);

event.stopPropagation();

$.udb.wait(true);
settings.offcanvasElement.classList.remove('for-new');
settings.offcanvasElement.classList.add('for-edit');
bootstrap.Offcanvas.getOrCreateInstance(settings.offcanvasElement).show();
$.udb.wait(false);
```

The penultimate line is responsible for opening the object with class = **Offcanvas**, which is the **OffCanvasRightEdit** section. This is the off-canvas editing pane for the PERSON record. Expanding nodes in this section allows you to trace the individual edit fields for columns of the PERSON record. They have names starting with E_… :

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/98d121e5-bb50-4474-932e-7c58e0369ab0.png)

## Detail pages

### Idea

If your data model has a parent-child relationship between tables ORDER and ORDERLINE:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/bd78d7b3-2ce6-40c6-a3f0-100879e02912.png)

then the usoft-zero default gives you navigation from an info page for parent ORDER to a **detail page** for child ORDERLINE. The runtime can navigate to the detail page by clicking the Details icon button for the record selected in the info page grid:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/e7574e4b-5e48-4a36-97ad-c185294e2b7f.png)

The detail page has a top part with a single-record form displaying the data of the selected parent record, and a bottom part with a multi-record grid displaying corresponding data in the child table:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/532426ec-05aa-49f2-ad0d-8d77deb503ee.png)

If there are multiple children (not shown), there is a separate grid for each of them.

Here is an impression of a detail page for table TOUR_PROGRAMME giving access to details about tours (child table TOUR) following this tour programme:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/a8f56e3b-9f2e-4e87-83ae-e203dab50304.png)

### Implementation

The detail page for ORDER is implemented as a DetailPage class. Find this class on the Pages tab of the Web Designer catalog.

> [!TIP]
> The table is called O_RDER and not ORDER only because ORDER is a reserved word in USoft Definer.

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/c2cc6c4a-a345-4103-88e3-98423498b23c.png)

Open this page class, then click on the grid for Orderlines in the preview pane in the middle. In the object tree on the right, locate the **related-cards-row…** object that represents the bottom part of the page displaying the Orderlines grid:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/74e9fad5-aed2-429c-b24b-110ec608fa44.png)

Expand this object node to see what it contains. Locate the ORDERLINE **data source object.** This data source object is responsible for connecting the web page with the ORDERLINE table in the database and the Rules Engine that enables and controls data access to this table:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/8628d7cf-c22e-4cac-b72a-85fa1e1973ed.png)

## Lookup pages

### Idea

If your data model has a parent-child relationship between tables ARTICLE and ORDERLINE:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/85e9a403-8501-4635-8f54-d4203a23c307.png)

then from all the places where the runtime user can manipulate orderlines, the usoft-zero default gives you a navigation possibility to a *lookup page* for articles. A typical process is that the user starts a new Order, goes to the detail page for Orderlines, and for each individual Orderline, selects an Article.

When adding or changing an Orderline, the runtime user gets an Article ID field with a small **Look up** button. Clicking this button navigates to the lookup page for Articles. Here, the user can select an Article by clicking it. This Select action will cause the article ID to be copied back to the calling environment, in this case, the Article ID field for the Orderline:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/9fa5429b-2a07-483f-b9bf-2f9bc76279e0.png)

As the picture shows, navigation to a lookup page is a round trip: “go there, select an item, come back”.

Here is an impression of a lookup page for articles. The list of articles is shown temporarily in an off-canvas sidepane displaying a multi-record grid. The runtime user selects an Article by clicking on that line in the grid. This automatically takes him back to the Article ID field for the Orderline:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/9970066f-d973-4521-9567-09a0a147e3e6.png)

### Implementation

To trace where the lookup button on the Article ID field leads to, locate the TableColumn object for ARTICLE_ID in the ORDERLINE data source:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/217a5432-2c9d-4090-b628-d8faf59a0179.png)

Right-mouse-click and in the Property Inspector, see that the **Lookup Page** property of the ARTICLE_ID TableColumn is set to **LookupPage ARTICLE ORDERED IN ORDERLINE**:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/e6dfbf2f-baf0-49fd-8a90-ec0ae6c94824.png)

Find this LookupPage class on the Pages tab of the Web Designer catalog:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/9d4e12db-f0a8-46da-a558-1b1216dac825.png)

## Re-usable controls

This article discussed various controls created to realise the usoft-zero pages and cards. These controls are available for re-use and customisation. Get them from the Controls catalog of Web Designer under HTMLElementControl, DIV:

![](/api/Web%20and%20app%20UIs/USoft%20template%20defaults/assets/5e3f3440-26de-49f9-b31b-dea0c0cc855f.png)

 