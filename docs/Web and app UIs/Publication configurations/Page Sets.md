# Page Sets

You can group pages into a **page set**, and then publish this page set in one single action. This is equivalent to publishing each individual page in the page set. It speeds up the publication process when compared with publishing the entire application, and enables you to concentrate on the particular pages you are designing.

For example, all pages necessary to perform an insert on a table in the context of making a reservation. A typical page set could be an info page for the entity that is inserted; lookup pages (if any); and related pages for mandatory relationships (if any). End user tasks in this type of page set may be combined on the same pages, or spread out across multiple pages that the end user navigates between.

Page sets may be contained in other page sets, and a page can be included in multiple page sets. Here is an example of a page set containment hierarchy:

![](/api/Web%20and%20app%20UIs/Publication%20configurations/assets/427880a3-9583-454d-ae6d-859910c8ab27.png)

 

The Scheduling and Booking page set consists of two other page sets, each containing a specific subset of Pages.



As another example, a page set could be a four-step wizard that contains four pages to let the end user perform a particular task, and where Step 1 is the start page.

## How to define

To define a page set:

1. In the Web Designer catalog, click the Page Sets tab.

2. Initially, this tab is empty and contains no page sets.

3. From the context menu, choose New Page Set. The Page Sets info window appears.

4. Define a name for the Page Set, and optionally, define a description.

5. On the Defined Pages tab, add or lookup the pages to be included in the Page Set.

6. Save your changes.

The new page set is now displayed on the Page Sets tab of the catalog.

From the context menu in the catalog, you can now add, delete, edit, open, and publish pages.