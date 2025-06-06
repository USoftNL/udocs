---
id: Creating_USoft_Service_Definer_tables
---

# Creating USoft Service Definer tables

To create USoft Service Definer repository tables:

1. Make sure you have a USoft Binder file in which the Database Properties sheet points to the development repository.

2. Check whether this USoft Binder file has a User Application item with, on this Property Sheet, the setting Application Name = USERVICE. If it does, skip Steps 3-5.

3. Add a User Application item (to do this, select Item, New from the menu, check the User Application checkbox and press the Add button).

4. (Suggested:) Rename this User Application item to "Service Definer".

5. Right-click on this new Service Definer item, select Properties, and on the properties sheet, set From = Flat Files and Application Name = USERVICE. Press the OK button.

6. Right-click this item, choose Create Tables, then press OK.

This creates the repository tables required to work with USoft Service Definer. These tables are recognisable because their names start with the T_SVC_... prefix.

This also authorises the Owner as a user of the USERVICE (= USoft Service Definer) application. You can see this by looking in authorization tables in USoft Authorizer.