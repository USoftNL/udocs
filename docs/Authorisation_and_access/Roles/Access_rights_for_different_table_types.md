---
id: Access_rights_for_different_table_types
---

# Access rights for different table types

The USoft Definer catalog shows table objects as belonging to different types: database tables, subtype tables, Logical Views, component tables, and interface tables.
All these table types are subject to access right definition. In addition, this applies to all tables defined in all consumed modules.
Tables for which you define access rights in roles may be of any of the USoft table types listed in the USoft Definer catalog:

## Rights on database tables

All the database tables that you define are the subject of access rights held by roles.

These access rights are defined as Table Rights, with the possible addition of Column Rights.

Database Tables exist as physical database tables in the RDBMS. When you add or change authorisation on Database Tables, you may need to (re)run an Update Application Rights routine in USoft Authorizer in order to update database grants.

## Rights on subtype tables

Subtype tables have their own access rights that are defined separately of the access rights on the supertype table. If users are to be allowed full use of a subtype constellation, you must be careful to give them access rights on all the supertypes and subtypes involved.

Between rights on supertypes and rights on their subtypes, there are dependencies implemented by automatic behaviour. This is true independently of whether a subtype is implemented as a separate physical table in the database or not (something that you decide by setting or unsetting their "Create Separate Table" flag).

For a detailed discussion, go to Access rights for supertypes and subtypes.

## Rights on Logical Views

The USoft authorisation system has separate access rights for Logical Views and for their underlying table(s) and Logical Views.
These access rights are defined as Table Rights, with the possible addition of Column Rights.
But because of the special relationship between a Logical View and its underlying tables and views, these access rights are interdependent in practice:

- For foreground or background SELECT access to a Logical View, you need at least Background SELECT rights on underlying tables and views.
- For foreground or background INSERT access to a Logical View, you need at least Background INSERT rights on underlying tables and views.
- For foreground or background UPDATE access to a Logical View, you need at least Background UPDATE rights on underlying tables and views.
- For foreground or background DELETE access to a Logical View, you need at least Background DELETE rights on underlying tables and views.

## Rights on component tables

A role does not "see" that a table is a Component Table. You can define Table Rights and Column Rights on Component Tables in just the same way as you can define Table Rights and Column Rights on Database Tables.

A difference with Database Tables is that Component Tables exist only in the USoft layer and not as physical database tables. When you add or change authorisation on Component Tables, by definition you never need to (re)run an Update Application Rights routine in USoft Authorizer in order to update database grants.

It could be that all of the 4 access rights for tables (SELECT, INSERT, UPDATE, DELETE) apply to a Component Table. It could also be that only a subset applies. This depends on implementation details of the Component associated with the Component Table. Best practice is to define access rights only for operations that are actually implemented, and to give any remaining rights on the Component Table the scope of None.

## Rights on interface tables

Interface tables are tables defined in consumed modules. The fact that they are interface table is NOT relevant for authorisation. All the tables defined in a consumed module, whether or not they are interface table at design-time, are subject to access rights definitions. Access to tables defined in modules is defined by module rights.

 

 

 

 

 

 