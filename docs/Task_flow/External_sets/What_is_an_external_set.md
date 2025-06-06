---
id: What_is_an_external_set
---

# What is an external set?

An **external set** is the definition of a data structure that is not stored in the database but is only relevant while a job is being executed.

In practice, external sets are definitions of:

- The data structure of external files used during import and export operations.

- The data structure of parameters passed to, or returned by, executed jobs.

In the pre-XML technology of Import Tasks, they are also used to define temporary, table-like structures in which external data is collected and merged prior to being mapped to database tables. This usage is being replaced by SQL Tasks that handle XML and XSLT.

External sets are defined much in the same way as Tables or Logical Views. They have External Set Elements in the same way that Tables and Logical Views have Columns. One way of defining an External Set is by writing an SQL SELECT statement, in much the same way as a Logical View is defined by its SQL SELECT statement.

## How to define

To define an external set:

1. In USoft Definer, from the menu, choose Define, Sets, External Sets.

The External Sets window is displayed.

2. In the Set Name field, type a unique name for the set.

3. You can either define the set elements manually in the Elements tab, or have them computed. To have them computed, define the SQL statement that describes the external set, then press Compute.

If you are writing a SQL statement, it is best to use aliases to label output expressions. The aliases will appear as set element names and can be used when re-computing elements.

4. If this is an export set, and you want to have USoft Batch compute the set elements for you, click the Compute button or choose Compute Elements from the Special menu. You can then change these, if required. Child sets have to be added manually.

5. In the File Format field, click the lookup button and choose the File Format .

6. If required, type a string of characters in the Record Separator field.

7. If required, check the Table based Set checkbox, and click the subtype button to specify a Definer table. See: " Storing External Set Data in Tables " for details.

8. For each element of the external set, make sure that:

- In the Sequence field, you have a (sequence) number to indicate the left-to-right ordering of the elements within the set.
- In the Element Name field, you have a unique name for the element.
- In the Data Type field, you have selected a data type supported by your RDBMS (use the lookup button to select).

> [!NOTE]
> Binary data types like the BLOB data type cannot be exported or imported.

- In the Length or Format fields, specify either the length, or the format of the element.
- If the element itself is a set, click the Child Set lookup button and select an item from the list that appears.