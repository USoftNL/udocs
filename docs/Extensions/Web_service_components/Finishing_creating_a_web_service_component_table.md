---
id: Finishing_creating_a_web_service_component_table
---

# Finishing creating a web service component table

After you have created a component table for a web service component, you have to perform some final steps.

If the Web Service component is a table component, the component is created as a stateful component with lifetime set to transaction, and with Support table component checked.

After you have completed all dialog of this wizard, the component is saved. If you have specified to create a component table, the Create Tables window appears. The input parameters are transformed into column definitions. If there are no input parameters, a DUMMY column is added.

You need to change the definition of this web service component table to make it work:

1. You have to delete the DUMMY column if there are no input parameters for the web service.

2. If you have provided an input XSL transformation (that is: you want to provide input parameters for the web service as simple type query values and NOT as an XML document) then:

- Delete all columns from the component table.
- Add all necessary input columns. Names and domains are at your choice. You only have to take care that the input XSL transforms these values into the format required by the web service.

3. Add output columns to the component table definition. Names and domains are at your choice. You only have to be take care that the input XSL transforms these values into the format required by the web service.

The output columns have to be in the same order as the index in the USoft component table XML format specifies. Now, you can query the component table as if it were a database table.