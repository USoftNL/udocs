# How to define a Related Data Source

The main object in a related page is the related data source. A related data source can be defined independently as a data source object. The advantage is the possible re-use of this (conceptual) data source object in multiple pages afterwards.

Usually, you define a related data source to identify a non-conceptual relationship between two tables. This related data source can then be used in related pages or info pages as if it were a conceptual child table.

To define a new related data source:

1. In the Web Designer catalog, click the Controls tab.

2. Right-click the data source object that represents the table that contains the related data, and choose New.

A new Subclass of the table appears. You can rename this subclass to a logical name, for example: Persons that participate in this scheduled tour.

3. Open the new data source.

4. From the catalog, drag a Relate object to the data source in the object tree.

A new Relate1 object appears.

5. For the Relate object, set the Synchronization DataSource property to the data source that contains the parent data, for example:

**SCHEDTOUR**

Or, if the page in which you plan to insert the data source does not contain a SCHEDTOUR data source, specify the path:

**../SCHEDTOUR**

6. For each column to synchronize on, drag a RelateColumn object from the catalog to the Relate object in the object tree.

(In conceptual relationships, these are the foreign key columns).

7. For each new RelateColumn object, set the Data Source Item property to the (child) column name of the main data source.

8. For each new RelateColumn object, set the Synchronization Column property to the (parent) column name of the synchronization data source.

9. Save your changes.

You can now insert this related data source in a related page or in an info page.