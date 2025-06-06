# Cardinality in relationships

Exactly how you map an association to USoft Tables, Columns and Relationships is a design choice that mainly depends on the association's cardinality*.* This help section starts with an overview of typical options, and then goes into each option in more detail.

### Overview

In this overview, the 2 leftmost columns show cardinality.

The notation of **1** means that exactly 1 instance is allowed to play the role on that side of the association. Put more casually, **1** on the parent side means that each child must refer to exactly 1 parent. **1** on the child side means that each parent must have exactly 1 child referring to it.

The notation of **0..1** means that at most 1 instance is allowed to play the role on that side.

The notations of **0..m** and **0..n** mean that 0, 1, or multiple instances are allowed to play the role on that side.

The notations of **1..m** and **1..n** mean that 1 or multiple instances are allowed to play the role on that side.

***** and ****** refer to notes at the bottom of the table.

|**Cardinality

Side 1

**|**Cardinality

Side 2

**|**Example**|**USoft implementation**|
|--------|--------|--------|--------|
|1       |0..1    |Branch is located at Airport|Column AIRPORT in Table BRANCH *Column AIRPORT is non-MandatoryAdditional Index with Unique = Yes on Column AIRPORT|
|1       |1       |Customer has Family Name|Column FAMILY_NAME in Table CUSTOMER **Column FAMILY_NAME is Mandatory|
|0..1    |0..n    |Discount Scheme applies to   Customer|Relationship between DISCOUNT_SCHEME and CUSTOMERPrimary key is (eg.) D_SCHEME in D_SCHEMEForeign key is (eg.) D_SCHEME in CUSTOMERPrimary key is MandatoryForeign key is non-Mandatory|
|1       |0..n    |Customer places Order|Relationship between CUSTOMER and ORDERPrimary key is (eg.) CUSTOMER_ID in CUSTOMERForeign key is (eg.) CUSTOMER_ID (or: PLACED_BY) in ORDERPrimary key is MandatoryForeign key is Mandatory|
|1       |1..n    |Order has Orderline|Relationship between ORDER and ORDERLINEPrimary key is (eg.) ORDER_ID in ORDERForeign key is (eg.) ORDER_ID in ORDERLINEPrimary key is MandatoryForeign key is MandatoryRelationship has Child Must Exist = Yes|
|1..m    |0..n    |Stakeholder signs Contract|Added table SIGNATORYRelationship 1 between CONTRACT and SIGNATORYPrimary key is (eg.) CONTRACT_ID in CONTRACT, MandatoryForeign key is (eg.) CONTRACT_ID in SIGNATORY, MandatoryRelationship 1 has Child Must Exist = YesRelationship 2 between STAKEHOLDER and SIGNATORYPrimary key is (eg.) STAKEHOLDER_ID in STAKEHOLDER, MandatoryForeign key is (eg.) STAKEHOLDER_ID in SIGNATORY, Mandatory|



* This is the most likely implementation. You do not keep Airport information other than simple names. If you keep structured Airport information in multiple Airport attributes, Airport is an entity, and the implementation is a **1 - 0..n**  association with Airport as the parent (Airport is location of Branch). Implement as shown in this table for Customer places Order, but in addition, for the Relationship, set Maximum Children = 1.

** This is the most likely implementation. You do not keep Family Name information other than simple names, and you are not concerned about the possibility that 2 people have the same Family Name and thus cannot be *identified uniquely*  by that Family Name. If you do want Family Names to be uniquely identifying, which is unlikely because it makes it impossible to register different customers who share the same family name, add:

Column FAMILY_NAME has Key = 2.

It is possible to keep structured Family Name information in multiple Family Name attributes. Because of the semantics of Family Names in the real world, this modelling option is perhaps unlikely.

### 1:0 or 1:1 association

A car rental company specialising in car rental for air travellers has branches at different airports. If it has multiple rental desks at the same airport, these desks are all considered to be part of the same airport branch. Exceptionally, the company has branches at non-airport locations. The relevant association between Branch and Airport is therefore 1:0.

Implement this association not by a USoft relationship, but by an AIRPORT column in the BRANCH table. Make this column non-Mandatory so that is it possible for a Branch to be located in another place than an airport.

![](/api/Modeller%20and%20Rules%20Engine/Tables,%20columns%20and%20relationships/assets/77f743a7-c34b-4dab-819e-8ede3ecdc4b2.png)

Each customer's family name must be registered. A customer has only one family name. In reality, a family name (especially names like "Smith" or "Patel") is used by multiple customers, but this is not interesting for the application. For the application, the relevant association between Customer and Family Name is therefore 1:1.

Implement this association not by a USoft relationship but by a FAMILY_NAME column in the CUSTOMER table. The CUSTOMER primary key holds an ID that identifies the customer uniquely.

![](/api/Modeller%20and%20Rules%20Engine/Tables,%20columns%20and%20relationships/assets/236a2a82-05ea-4c21-8f36-051e9b4bf75e.png)

### 1:n (one-to-many) association

Discount schemes apply to customers. A customer benefits from at most 1 discount scheme at any one time. A discount scheme may be registered prior to applying to any customers.

The association between Discount Scheme and Customer is **0..1 - 0..n** (a form of "one-to-many").

Implement this association as a USoft relationship with Parent Object = D_SCHEME and Child Object = CUSTOMER. The Parent Role of the relationship could be "APPLIES TO". The Child Role could be "benefits from". The relationship has a Parent Column D_SCHEME corresponding to a Child Column D_SCHEME.

The D_SCHEME foreign key is not mandatory. If present, its value must correspond to a D_SCHEME primary key value in the parent table.

![](/api/Modeller%20and%20Rules%20Engine/Tables,%20columns%20and%20relationships/assets/8d04bbff-7d3b-48b0-aa01-284100918945.png)

A customer can place multiple orders. Each order is placed by exactly 1 customer who is actually known to the application. A customer may be registered prior to placing any order.

The association between Customer and Order is **1 - 0:n** (a form of "one‑to‑many").

Implement this association as a USoft relationship with Parent Object = CUSTOMER and Child Object = ORDER. The Parent Role of the relationship could be "PLACES". The Child Role could be "is placed by". The relationship has a Parent Column CUSTOMER corresponding to a Child Column PLACED_BY.

The PLACED_BY foreign key is mandatory. It corresponds to the CUSTOMER primary key in the parent table.

![](/api/Modeller%20and%20Rules%20Engine/Tables,%20columns%20and%20relationships/assets/626ac8b3-4585-4793-adac-94708cea4f69.png)

It is possible for a foreign key to be part of the primary key of the child table.

An order, for example order 3449876, can have multiple numbered orderlines identified by line numbers: 1, 2, 3... The association between Order and Orderline is **1 - 1:n** (a form of "one‑to‑many").

Implement this association as a USoft relationship with Parent Object = ORDER and Child Object = ORDERLINE. The Parent Role of the relationship could be "HAS". The Child Role could be "of". The relationship has a Parent Column ORDER corresponding to a Child Column ORDER.

The ORDER foreign key is part of the primary key of the child table. For this reason alone, it must have Mandatory = Yes.

![](/api/Modeller%20and%20Rules%20Engine/Tables,%20columns%20and%20relationships/assets/f16d9a70-edb2-484f-8c5f-03145e4c316b.png)

It is possible for a Relationship's key to span multiple key columns. In this case the primary key in the parent table and the foreign key in the child table span the same number of columns.

A tour in the catalogue of a tour operator is identified by a combination of destination and tour type (the SUNTANNER tour to AUSTRALIA). A tour is regularly scheduled on the calendar. The relevant association between Tour and Scheduled Tour is **1 - 0:n** (a form of "one‑to‑many").

Implement this association as a USoft relationship with Parent Object = TOUR and Child Object = SCHEDULED_TOUR. The Parent Role of the relationship could be "SCHEDULED AS". The Child Role could be "occurrrence of". The relationship has a Parent Column DESTINATION corresponding to a Child Column DESTINATION, and a Parent Column TOUR_TYPE corresponding to a Child Column TOUR_TYPE.

The two key columns are mandatory in both tables. The primary key is the combination of DESTINATION and TOUR_TYPE in the TOUR table. The foreign key is the combination of DESTINATION and TOUR_TYPE in the SCHEDULED_TOUR table.

The fact that the primary key in the parent table spans the 2 relationship key columns is typical. The fact that the foreign key in the child table is part of a primary key spanning 3 columns is accidental.

![](/api/Modeller%20and%20Rules%20Engine/Tables,%20columns%20and%20relationships/assets/2ad14e5d-9e6e-4081-95a2-f50f3361aaac.png)

### m:n (many-to-many) associations

Stakeholders can be involved in contracts in that they are signatories of contracts. A stakeholder can sign multiple contracts. A contract can be signed by multiple stakeholders. The relevant association between Stakeholder and Contract is m:n (many‑to‑many).

USoft Definer requires that your data model is in third normal form. This implies that the model may be built on 1:m relationships and 1:1 relationships, but not on m:n relationships. However, you can implement an m:n relationship by adding an extra table (called *intersection table*) and creating two 1:m relationships.

Implement this association by creating an extra table SIGNATORY that contains foreign keys to both Stakeholders and Contracts. This allows you to implement the assocation as 2 USoft relationships. One has Parent Object = STAKEHOLDER, Child Object = SIGNATORY, and Parent Role = "SIGNS AS" (or: "IS"). The other has Parent Object = CONTRACT, Child Object = SIGNATORY, and Parent Role = "SIGNED BY".

The primary key of the SIGNATORY child table spans the 2 foreign keys referring to the parent tables.

![](/api/Modeller%20and%20Rules%20Engine/Tables,%20columns%20and%20relationships/assets/7b4c027e-ae91-4dcf-84fe-c9b63db179db.png)

### Self-referential 1:n associations

Parts of an aircraft form a complex hierarchy of parts being made up of smaller parts. Each part is contained by exactly one other part, except for the top-level container: the aircraft itself.

The relevant association is between one Part and another Part and it is 1:n (one‑to‑many). It is *self-referential* because the association is between instances of the same entity.

Implement this association by creating a foreign key in the same table (PART) as the primary key that it refers to. Define a USoft relationship that has Parent Object = PART and Child Object = PART. The Parent Role of the relationship could be "CONTAINS". The Child Role could be "contained by". The relationship has a Child Column CONTAINED_BY corresponding to the primary key of the PART table.

![](/api/Modeller%20and%20Rules%20Engine/Tables,%20columns%20and%20relationships/assets/4bfc467e-7488-4025-ade0-5a9d9563a077.png)

Self-referential foreign keys allow you to store tree structures. To let end users visualise and control tree structures, you can create specialised tree view controls at GUI level (in Windows Designer or Web Designer) but not in USoft Definer. The relationship definition in USoft Definer only governs the *storage* of self-referential data.

To create a relationship where Parent Object and Child Object are the same, you must set the Alias Parent attribute to a value that describes the parent's role in the relationship. Here, you could set Alias Parent = CONTAINER. This allows USoft to generate aliases in SQL statements that are evocative to developers.

### Best practice in relationship design

Here are some principles of good relationship design.

Principles of *key structure*:

- If a relationship has a single Parent Column, this column must coincide with a key (Key = 1, 2...) in the parent table. That is, it must have Key = 1, 2... (ie., a value other than 'No') and there must be no other columns in the table with the same Key value. Preferably, the Parent Column must be the primary key (Key = 1) rather than a secondary key.
- Likewise, if a relationship has multiple Parent Columns, this set of columns must together form a key in the parent table. Again, preferably, they must form the primary key (Key = 1) rather than a secondary key if this is at all possible.
- A primary key column must have Mandatory = Yes if at all possible. There are very few good reasons for having non-Mandatory primary key columns.
- A foreign key column (a Child Column of a relationship) should have Mandatory = Yes if there are no functional reasons for it to have Mandatory = No.

Principles for *domains*:

- Child Columns in a relationship must be based on the same domain as Parent Columns. This rule is enforced by USoft Definer.

- For primary key columns in a child table that are not Child Column in the relationship, ie., do not correspond to a Parent Column, it is preferable to select an underlying domain that has Generate Unique Values = No if this is functionally acceptable. For example, if acceptable, it is better to let users create Orderline numbers rather than to let USoft generate these numbers.

###  