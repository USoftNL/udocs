# Inclusion rules for Jobs

This help topic shows which objects, in an export, are automatically included when you include a Job or an element of a Job.

For example, the first two lines mean that if a Job is included, all its Job Tasks are automatically included as well:

```
Job
. . Job Task
. . . . Action Task
. . . . Export Task
. . . . . . Export Task Set
. . . . . . . . Export Task Set Element
. . . . Import Task
. . . . . . Import Task Set
. . . . . . . . Import Task Set Element
. . . . . . . . Import Task Set Virtual
. . . . Job (executed by Job)
. . . . . . Job Task
. . . . . . . . (etc.)
. . . . SQL Task
. . . . . . SQL Task Statement
. . Input Parameter Set
. . . . Input Parameter Set Element
. . Output Parameter Set
. . . . Output Parameter Set Element

```