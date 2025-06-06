# Inclusion rules for Roles

​

This help topic shows which objects, in an export, are automatically included when you include a Role.
The first two lines mean that if a Role is included, all its Table Rights are automatically included as well.

The fact that the Table Rights line does not have a Tables child line means that exporting a Table Right does not automatically mean that the corresponding Table is also exported.

```
Role
. . Table Right
. . . . Role Condition
. . . . Column Right
. . Job Right
. . Component Right

```

​