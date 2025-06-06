---
id: SQL_Objects_Crossreference_information
---

# SQL Objects: Cross-reference information

When the SQL statement associated with certain objects is checked by pressing the Check button in their respective definition winnow, repository tables are filled with information about the tables, columns, relationships, methods and external sets that are used in the SQL statement.. These repository tables are called SQL Object tables. Whenever you make a change to an item that is used in the SQL statement for that object, for example: deleting a column, the cross reference feature uses the information in the SQL Objects table to set all objects (constraints, SQL Tasks, etc.) that use that item to incorrect.
Object types for which information is stored in SQL Objects tables when they are checked are:

- Table Constraints
- Domain Constraints
- Logical Views
- Decisions
- SQL Tasks
- Import Tasks
- External Sets
- Component Constructors
- Web Service Providers

Cross reference information is available in read-only form in the SQL Objects tab pages of the Logical Views, Relationships, External Sets, and the various Tables info windows. This information can be used to quickly find where a particular item is used, and in some cases where it is used in a SQL statement, for example: in a WHERE clause, or the out list of a query, etc.