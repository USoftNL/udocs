---
id: Creating_USoft_Delivery_Manager_tables
---

# Creating USoft Delivery Manager tables

To create USoft Delivery Manager repository tables:

1. Make sure you have a USoft Binder file in which the Database Properties sheet points to the development repository.

2. Make sure this USoft Binder file has a Delivery Manager item. If it does not, create it by using Item, New.

3. Right-click this item and choose Create Tables.

This creates the repository tables required to work with USoft Delivery Manager. These tables are recognisable because their names start with the T_DL_... prefix.

This also authorises the Owner as a user of the UDELIVER (= USoft Delivery Manager) application. You can see this by looking in authorization tables in USoft Authorizer.