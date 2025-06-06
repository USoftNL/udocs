---
id: usoftzero_dynamic_authorisation
---

# usoft-zero dynamic authorisation

## Idea

Web Designer comes with a model where you can define navigation menus in your browser-based UI and associate these menus with roles that you defined in the Definer. When an end user logs on under a given role, s/he is automatically presented with the associated navigation menu. "Dynamic” in this case means that the end result automatically changes if you make changes in Definer roles.

This feature has its limitations. As the number of roles and navigation distinctions in your application grows, the moment comes quickly when you need quite a lot of manual work even to keep a well-defined authorisation system working smoothly. To see this, imagine a simple set-up where you have just 2 roles: and ADMIN role who has all the navigation and data manipulation rights on all areas of the application, and a READ_ONLY role who has all the nativation but only read-only rights on all areas of the application. To achieve the correct UI/UX for each of these 2 roles, without dynamic authorisation, you need to subclass each standard web page with a read-only variant in which manipulation buttons for Create, Edit and Delete are dropped. Also, you need to maintain JavaScript calls that get users in a given role to navigate properly from one role-specific page to another. You need to maintain and test all this work for each new object in the application.

This already substantial maintenance effort will grow exponentially as your role model becomes more diversified (and more realistic). Imagine a school application where you could easily have 8 or 10 roles for Administrators, Teachers, Students, Parents, Internship Coordinators, Internship supervisors, Contact persons …..

With dynamic authorisation, the usoft-zero template minimises this manual work. On startup, it reads the runtime access rights of the current user for all the tables of the application, heeding also the possibility that the user exercises rights from multiple roles at a time.

- If the user has no access rights on a table, no entry for that table is included in the navigation menu.
- If the user only has read-only rights on a table, then buttons for Create, Edit, Delete are automatically suppressed on the pages accessed.

## Implementation

In an InfoPage, DetailCard or RelatedCard the ‘showhideelements’ trigger puts classes on the page: 

- no-insert-allowed


- no-update-allowed


- no-delete allowed



The basis for this is: 

- the access rights of the runtime user.


- the ‘Insert allowed', ‘Update allowed’, 'Delete allowed’ flags on the data source.



There is no need to remove buttons or elements from the page. Just change the flags on the data source.

As a developer, you may want to add elements to your page that are visible conditionally. Add one or more of the following classes to the element:

- hide-if-no-insert-allowed


- hide-if-no-update-allowed


- hide-if-no-delete-allowed


- hide-if-no-data


- hide-if-has-data



If you add more than one of these classes, if any one of the conditions is met, the element is hidden.

These classes have a clear and understandable name. This makes this implementation declarative. You do not need to worry about processes, events or triggers.