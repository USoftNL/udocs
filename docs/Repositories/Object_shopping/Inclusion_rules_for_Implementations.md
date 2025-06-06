---
id: Inclusion_rules_for_Implementations
---

# Inclusion rules for Implementations

The list in this help topic shows which objects, in an export, are automatically included when you include an Implementation.

What is included depends on the Type of the implementation. In the list, the names surrounded by parentheses (on the first sub-level) refer to the Type of the implementation.

For example, the first four lines of the list mean that if an Implementation of Type = Column is included, then the entire Table that the Column is part of, including all the columns in that Table, are included.

> [!WARNING]
> **Components:** For a Component Method, the entire Component including all its Methods is included.
> **Roles:** For a Table Right, Column Right, Job Right or Component Right, the entire Role including all its rights is included, except Module Rights.
> **Jobs:** For Job Task or Job SQL, no inclusions are made. To have the Job included, add an Implementation with Type = Job.
> **ESI** (ie., GUI elements): For Controls, Pages and Windows, no inclusions are made. The implementation record itself is also not included.

```
Implementation
. . (Column)
. . . . Table
. . . . . . Column
. . . . . . . . Index Column
. . . . . . . . . . Index
. . . . . . (supertype) Table
. . . . . . . . (etc.)
. . (Column Right)
. . . . Role
. . . . . . Table Right
. . . . . . . . Role Condition
. . . . . . . . Column Right
. . . . . . Job Right
. . . . . . Component Right
. . . . Role
. . . . . . Table Right
. . . . . . . . Role Condition
. . . . . . Job Right
. . . . . . Component Right
. . (Component)
. . . . Component
. . . . . . Method
. . . . . . . . Parameter
. . . . . . Query Protocol Association
. . . . . . Aggregate Protocol Association
. . (Component Method)
. . . . Component
. . . . . . Method
. . . . . . . . Parameter
. . . . . . Query Protocol Association
. . . . . . Aggregate Protocol Association
. . (Component Right)
. . . . Role
. . . . . . Table Right
. . . . . . . . Role Condition
. . . . . . . . Column Right
. . . . . . Job Right
. . . . . . Component Right
. . (Constraint)
. . . . Constraint
. . (Control (C/S))
. . (Control (browser))
. . (Decision)
. . . . Decision
. . (Domain)
. . . . Domain
. . . . . . (super)Domain
. . . . . . . . (etc.)
. . . . . . Allowed Value
. . . . . . Domain Constraint
. . . . . . Alternative Input Format
. . (Domain Constraint)
. . . . Domain Constraint
. . (External Element)
. . (Job)
. . . . Job
. . . . . . Job Task
. . . . . . . . Action Task
. . . . . . . . Export Task
. . . . . . . . . . Export Task Set
. . . . . . . . . . . . Export Task Set Element
. . . . . . . . Import Task
. . . . . . . . . . Import Task Set
. . . . . . . . . . . . Import Task Set Element
. . . . . . . . . . . . Import Task Set Virtual
. . . . . . . . Job (executed by Job)
. . . . . . . . . . Job Task
. . . . . . . . . . . . (etc.)
. . . . . . . . SQL Task
. . . . . . . . . . SQL Task Statement
. . . . . . Input Parameter Set
. . . . . . . . Input Parameter Set Element
. . . . . . Output Parameter Set
. . . . . . . . Output Parameter Set Element
. . (Job Right)
. . . . Role
. . . . . . Table Right
. . . . . . . . Role Condition
. . . . . . . . Column Right
. . . . . . Job Right
. . . . . . Component Right
. . . . Role
. . . . . . Table Right
. . . . . . . . Role Condition
. . . . . . Job Right
. . . . . . Component Right
. . (Job SQL)
. . (Job Task)
. . (Logical View)
. . . . Logical View
. . . . . . Column
. . (Menu Line)
. . (Menu Page)
. . (Page)
. . (Page Set)
. . (Relationship)
. . . . Relationship
. . . . . . Table (= parent table)
. . . . . . . . Column
. . . . . . . . . . Index Column
. . . . . . . . . . . . Index
. . . . . . . . (supertype) Table
. . . . . . . . . . (etc.)
. . . . . . Table (= child table)
. . . . . . . . Column
. . . . . . . . . . Index Column
. . . . . . . . . . . . Index
. . . . . . . . (supertype) Table
. . . . . . . . . . (etc.)
. . (Role)
. . . . Role
. . . . . . Table Right
. . . . . . . . Role Condition
. . . . . . Job Right
. . . . . . Component Right
. . (Subtype Group)
. . . . Subtype Definition
. . . . . . (supertype) Table
. . . . . . . . (etc.)
. . . . . . Subtype Definition Element
. . . . . . . . (subtype) Table
. . . . . . . . . . (etc.)
. . (Table)
. . . . Table
. . . . . . Column
. . . . . . . . Index Column
. . . . . . . . . . Index
. . . . . . (supertype) Table
. . . . . . . . (etc.)
. . (Table Right)
. . . . Role
. . . . . . Table Right
. . . . . . . . Role Condition
. . . . . . . . Column Right
. . . . . . Job Right
. . . . . . Component Right
. . (Web Service)
. . . . Web Service Provider
. . . . . . Method
. . . . . . . . Parameter
. . (Window or Dialog)
. . Implementation Type*
. . Repository Version*
```

* The last two lines mean that for each implementation, Implementation Type and Repository Version are included.