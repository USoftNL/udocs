---
id: Creating_USoft_Definer_tables
---

# Creating USoft Definer tables

To create USoft Definer repository tables:

1. Make sure you have a USoft Binder file in which the Database Properties sheet points to the development repository.

2. Make sure this USoft Binder file has a Definer item. If it does not, create it by using Item, New.

3. Right-click this item and choose Create Tables.

This creates repository tables for the following product components:

- USoft Definer, which consists of USoft Teamwork, USoft Model and Rules, and USoft Batch.
- USoft Web Designer.
- USoft Windows Designer.

These tables are recognisable because their names start with the T_... prefix but NOT with one of the following:

- T_AUTH_...
- T_TEST_...
- T_SVC_...
- T_RM_...

This also authorises the Owner as a user of the USD (= USoft Definer) application. You can see this by looking in authorization tables in USoft Authorizer.

 