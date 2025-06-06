---
id: Inclusion_rules_for_Business_Areas
---

# Inclusion rules for Business Areas

This help topic shows which objects, in an export, are automatically included when you include a Business Area or other container objects (Business Objects, Rule Sets, Note Sets).

For example, the first two lines mean that if a Business Area is included, any Business Objects contained by it will automatically be included in the export:


:::warning

If a Business Object contains an EAR diagram, this diagram is not included in the export. However, when you come to re-import, a new EAR diagram is automatically built up for you on the basis of the objects depicted (they were all included). The only thing you have to redo manually is the positioning of boxes and lines on the drawing canvas.

:::

```
Business Area
. . Business Object
. . . . Repository Version
. . . . Data Content (= Structure Definition)
. . . . . . Domain
. . . . . . Table
. . . . . . Relationship
. . . . Business Rule / Business Process Step
. . . . . . (belongs to) Business Rule / Business Process Step
. . . . . . . . (etc.)
. . . . . . Repository Version
. . . . . . Source
. . . . . . Motivation
. . . . . . Classification
. . . . . . Implementation
. . . . Implementation
. . . . Source
. . . . Motivation
. . . . Note
. . . . . . Repository Version
. . . . . . Motivation
. . . . . . Session
. . Rule Set
. . . . Business Rule / Business Process Step
. . . . . . (belongs to) Business Rule / Business Process Step
. . . . . . . . (etc.)
. . . . . . Repository Version
. . . . . . Source
. . . . . . Motivation
. . . . . . Classification
. . . . . . Implementation
. . . . Source
. . . . Motivation
. . . . Note
. . . . . . Repository Version
. . . . . . Motivation
. . . . . . Session
. . Source
. . Motivation
Note Set
. . Note
. . . . Repository Version
. . . . Motivation
. . . . Session

```