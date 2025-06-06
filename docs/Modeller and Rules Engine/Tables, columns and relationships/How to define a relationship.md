# How to define a relationship

You can define a relationship by using a wizard or by filling out a form.

## Defining a relationship by using a wizard

1. Right-click on Relationships in the Project Catalog, and choose New Relationship. You can also right-click on a table and choose New Relationship Where This Table Is The Parent/Child.

The New Relationship wizard appears.

2. Enter the requested information in each of the wizard's dialogs.

## Defining a relationship by filling out a form

1. Choose Define, Relationships from the USoft Definer main menu.

2.Fill out the form in the top left corner, starting with "Parent Object”:

![](/api/Modeller%20and%20Rules%20Engine/Tables,%20columns%20and%20relationships/assets/94ae11de-bf23-4068-98b4-b8f4e412a3e3.png)

3.Fill out the Columns tab in the lower part of the window, entering the column mapping(s) between Parent Columns and Child Columns. To do this, click in the fields and call up the lookup window showing possible column names. You can do this by pressing **F12** (Lookup) in the field or by picking "Lookup” from the right-mouse menu:

![](/api/Modeller%20and%20Rules%20Engine/Tables,%20columns%20and%20relationships/assets/b2346fc6-d9bf-4c89-af2e-246283522b13.png)

4.Check the form on the right, starting with “Foreign Key Mandatory.” In USoft 10, find this form on the “Relationship Details” tab in the lower part of the window. Adjust the values if they are not what you want. These fields are about *relationship attributes.* They are discussed below the picture:

![](/api/Modeller%20and%20Rules%20Engine/Tables,%20columns%20and%20relationships/assets/04cb5224-14f3-41c3-94ee-bc02b4773709.png)

## Relationship attributes

This section discusses the fields in the last picture above.

### Foreign Key Mandatory

This relationship attribute is intended only for dealing with exceptional cases that are not typically good design.

By default, Foreign Key Mandatory = Yes if all the foreign key columns in the relationship have Mandatory = Yes. Otherwise, by default, Foreign Key Mandatory = No.

**As a rule, you should not tamper with this default.**

If Foreign Key Mandatory = Yes, in each child record, each Child Column of the relationship must have a value other than NULL. This is often expressed by saying that "the relationship is mandatory". While it's important to decide, for each relationship separately, if you want it to be mandatory or not, you should generally express this decision by setting Mandatory = Yes or Mandatory = No **at Column level** (= when defining the foreign key), not by setting Foreign Key Mandatory.

When you are in the Relationships window, the Foreign Key Mandatory checkbox allows you to *see at a glance* whether the relationship is mandatory or not, but it is not generally the place where you should *express* this.

Only if Foreign Key Mandatory = No can you use the Check Partial Foreign Key checkbox to express how NULL values in multi-column foreign keys must be treated.

If all the foreign key columns in the relationship have Mandatory = Yes, you cannot change the default Foreign Key Mandatory = Yes.

### Check Partial Foreign Key

This relationship attribute is intended only for dealing with exceptional cases that are not typically good design.

By default, Check Partial Foreign Key = Yes.

**As a rule, you should not tamper with this default.**

In relationships where the key spans more than one column, you can specify that partial foreign keys are not to be checked, where "to check" means to validate that the value entered in the foreign key field is an existing value in the corresponding parent column. Partial foreign keys occur when one or more foreign key columns have the NULL value. An exception to this rule is when the parent column on which you set the NULL value is not mandatory (allows NULL values). In this case the NULL value should be checked since it is an allowed value.

If you clear the Check Partial Foreign Key checkbox in the Relationships info window, in partial foreign keys none of the foreign key column values are checked. This is not generally recommended because, as a result, foreign key column values that do not exist in the corresponding primary key column are allowed into the database if one of the other foreign key columns has the NULL value.

Only consider clearing the Check Partial Foreign Key checkbox in special cases such as overlapping foreign key situations, e.g. columns A and B form one foreign key, and columns A and C another. This allows the user to enter child records with values for A and B but not C. These records are checked with regard to the relationship on columns A-B, while the relationship on columns A-C is not checked until a value for column C is provided.

You can only clear this checkbox if you clear the Foreign Key Mandatory checkbox as well.

### Lock Foreign Key on Check

If Lock Foreign Key on Check = Yes (the default), the parent record is locked whilst changes are made to child records.

In some situations this behavior may be undesirable. For example, if there are few parent records but each have many child records, users editing unrelated child records could lock each other out. If the parent table is not subject to many changes, it may be better not to lock the parent. In this case, set Lock Foreign Key = No.

### Foreign Key Updatable

Set this attribute to restrict updatability of foreign key values in the relationship.

By default, Foreign Key Updatable = Yes.

**As a rule, you should not tamper with this default**.

You can restrict the updatability of a column at Column level by setting the Updatable attribute. Cases are very few where you want to restrict updatability specifically at the Relationship level and not at the Column level. But even at the Column level, restricting updatability is often unnecessary and complicates data management operations.

|**Foreign Key Updatable**|
|--------|--------|
|Yes     |Users are allowed to change existing values in foreign key columns of the relationship.|
|No      |Users are not allowed to change existing values in foreign key columns of the relationship.|
|Only If Null|Users are allowed to change existing NULL values in foreign key columns of the relationship to non-NULL values. They are not allowed to change non-NULL values.|



### Child Must Exist

If you set Child Must Exist = Yes, for each parent record in the relationship, there must be at least 1 child record that refers to that parent record.

By default, Child Must Exist = No.

Setting Child Must Exist = Yes is equivalent to setting Minimum Children = 1.

### Minimum Children

If you set Minimum Children to an integer value, for each parent record in the relationship, IF the parent record has children, then it must have at least this number of children.

By default, Minimum Children is empty (NULL).

> [!TIP]
> Setting Minimum Children = 1 has no effect. This does not add any restriction in comparison with the default NULL.

*Examples*

Minimum Children = 3. Child Must Exist = No. The parent is allowed to have 0 children, or 3 children, or more than 3 children.

Minimum Children = 3. Child Must Exist = Yes. The parent is allowed to have 3 children, or more than 3 children.

### Maximum Children

If you set Maximum Children to an integer value, for each parent record in the relationship, IF the parent record has children, then it may be no more than this number of children.

By default, Maximum Children is empty (NULL).

### Lookup Method

This attribute controls how USoft Definer generates default GUI behavior for the relationship for users who want to select a foreign key value from the set of available parent values ("lookup" behaviour).

|        |
|--------|
|**Lookup Method**|
|Dropdown List|Use this option only if there are relatively few (5-20) parent values to choose from. Available parent values are presented in a dropdown list implemented for the foreign key field.|
|Radio   |Use this option only if there are few (2-5) parent values to choose from.Available parent values are presented as "radio button" options. The foreign key field is transformed into a radio button group.|
|Lookup Window or Page|This is the default option. Use this option if there are more than 20 parent values to choose from. At the foreign key field, a button is implemented that lets the user step out to a lookup form where she can query and select available values.|



### Delete Rule

This attribute determines what happens to child records when the parent record is deleted.

|        |
|--------|
|**Delete Rule**|
|Restricted|This is the default option.When the user attempts to delete a parent record, processing is blocked and an error message is produced if corresponding children exist.|
|Cascading|When the user attempts to delete a parent record, any corresponding children are automatically deleted as well.If the children about to be deleted are themselves parents in a relationship with Delete Rule = Restricted and have corresponding children, the entire operation is blocked and an error message is displayed.|
|Nullify |When the user attempts to delete a parent record, foreign key values in any corresponding child records are set to NULL.This option is only suitable if there are no foreign key columns with Mandatory = Yes and if the relationship has Foreign Key Mandatory = No.|



### Update Rule

This attribute determines what happens to child records when the primary key value of the parent record is updated to a different value.

|        |
|--------|
|**Update Rule**|
|Restricted|This is the default option.When the user attempts to update a value in a parent column, processing is blocked and an error message is produced if corresponding children exist.|
|Cascading|When the user attempts to update a value in a parent column, the values in de corresponding child column of corresponding child records (if any) is updated accordingly.|
|Nullify |When the user attempts to update a value in a parent column, the values in de corresponding child column of corresponding child records (if any) is set to NULL. This option is only suitable if there are no foreign key columns with Mandatory = Yes and if the relationship has Foreign Key Mandatory = No.|



### Type Of Relationship

This attribute can be used to specify the nature of the relationship between the parent and the child.

Setting this attribute to "Composition" may cause child records to be automatically deleted during parent-child import operations.

|        |
|--------|
|**Type Of Relationship**|
|Reference|This is the default option.The child is not part of the parent. The child merely references the parent. The foreign key does not have to be mandatory.In parent-child imports, the child is never automatically dropped.An example from the USoft Definer application itself is the relationship between a constraint and the table which that constraint uses as transition table.|
|Composition|The child is considered an integral part of the parent. As a consequence, the child can be part of at most 1 composition relationship.The foreign key is mandatory: child records in this type of relationship cannot exist without a parent.In parent-child imports, the child is considered "obsolete" and automatically deleted if it is no longer included in the import data.An example from the USoft Definer application itself is the relationship between a column and the table that column is part of.|



 