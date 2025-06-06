# Calling a web service using a component table

You can call a web service by performing a query on a component table. This component table represents the parameter values of a web service method. Component tables can be used under the following conditions:

- Component tables are used to query a web service. They cannot be used to perform data manipulations.
- You can use component tables for a document-oriented web service method, and for an RPC-oriented method with complex type parameters.

You cannot use web service component table functionality for an RPC-oriented method with simple type parameters.

- You can use a component table to represent the parameter values of ONE method. If you need another web service method to make use of component table functionality, you need to create a new web service component.
- The web service method must have exactly one complex type output parameter.
- The web service method can have zero or one complex type input parameter.