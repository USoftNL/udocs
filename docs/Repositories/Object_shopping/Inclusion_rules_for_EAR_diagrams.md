---
id: Inclusion_rules_for_EAR_diagrams
---

# Inclusion rules for EAR diagrams

![](./assets/ce23356b-05b0-4dc7-839e-3bc29b317664.png)



EAR diagrams in USoft Definer 11.x may be created only for Repository Definitions and for Business Objects. Only Business Objects may be transferred via Object Shopping.

When you export ("shop”) a Business Object, its EAR diagram (if any) is **not** included. However, all the depicted objects are, so that a new diagram is automatically built for you when you come to re-import the exported Business Object(s). The only thing you lose is the visual positioning of boxes and lines on the drawing canvas. You need to redo this positioning manually by dragging the boxes and lines to the positions you want.

> [!WARNING]
> Relationship lines between the table boxes will only appear in the new diagram after import if the relationship was explicitly included in the BO's Data Content.
> In any case, it's a good idea to include, in a Business Object, all the relationships between tables included in the Business Object's Data Content. This is especially true if you apply Object Shopping to Business Objects. The Add Data Content wizard makes it easy for you to do this.
> You can call these the "internal” relationships of the Business Object.