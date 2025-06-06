---
id: Deducing_the_ESI_object_model_from_the_layout_model
---

# Deducing the ESI object model from the layout model

For most objects the ESI object model is the same as the layout model. So, if you want to insert a label or a button, all you need to do is have a look at the Object tree to see what the corresponding object model would be.

There are two important exceptions, however:

- Groups (e.g. Column Box objects)
- Variables (base columns)

All elements in the SELECT list of the underlying query result in data-oriented objects called base columns or variables. These objects, in turn, create displays (if their Displayed property has been set to Yes). In the layout model, these variables are displayed under the Group object (e.g. the Column Box) that contains them. In the ESI object model, the variables are displayed under the Query object.

In an Info Box in the Windows Designer, you will never see the Variable object and the Column Display object if the column's Displayed property is set to Yes. They are presented as one object, and their property sheets are merged. When using the ESI action interface, you must always treat them as two separate objects.

If a column is displayed, you will only see the Column Display object in the Windows Designer. If it is non-displayed, you will only see (and have) the Variable. In all cases, the Column Display will be shown using the name of the Variable. But the ESI definitions for a Column Displayused by a Variable willalways have the name of thecorresponding display class. So, you must use this name when accessing its definitions with the action layer.

See "Base-Column Properties vs Display properties" for more information.

Group objects are created by their parent object. If the parent is a Group itself, then the parent's parent is the creator (in that case, go up in the hierarchy until you have reached the top, which is either an Info Box object (table), a Dialog object, or a Tab Page object.