# How to define a Lookup Data Source

The main object in a lookup page is the lookup data source. A lookup data source can be defined independently as a data source object. The advantage is the possible re-use of this (conceptual) data source object in multiple pages afterwards.

Usually, you define a lookup data source to identify a non-conceptual relationship between two tables. This lookup data source can then be used in lookup pages or info pages as if it were a conceptual lookup table.

To define a new lookup data source:

1. In the Web Designer catalog, click the Controls tab.

2. Right-click the data source object that represents the table that contains the lookup data, and choose New.

A new Subclass of the table appears. You can rename this subclass to a logical name, for example: Discount percentages for Person discounts.

3. Open the new data source.

4. From the catalog, drag a Lookup object to the data source in the object tree.

A new Lookup1 object appears.

5. For the Lookup object, set the Synchronization DataSource property to the data source that contains the child data, for example:

**PERSON**

Or, if the page in which you plan to insert the data source does not contain a PERSON data source, specify the path:

**../PERSON**

6. For each column to synchronize on, drag a LookupColumn object from the catalog to the Lookup object in the object tree.

7. For each new LookupColumn object, set the Data Source Item property to the (lookup) column name of the main data source.

8. For each new LookupColumn object, set the Synchronization Column property to the (child) column name of the synchronization data source.

9. Save your changes.

You can now insert this lookup data source in a lookup page or in an info page.