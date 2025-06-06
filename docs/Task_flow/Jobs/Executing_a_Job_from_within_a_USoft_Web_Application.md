---
id: Executing_a_Job_from_within_a_USoft_Web_Application
---

# Executing a Job from within a USoft Web Application

To execute a job from a GUI element in a USoft web application such as a button, link, image, or menu element, append a JavaScript script to that GUI element that calls an executeSQLStatement(  ) action. Such an action can be used to call a SQL statement by name, for example:

```
executeSQLStatement( RenameConcept )

```

Now, under that name, write a SQL statement that calls the BatchRunner internal component and looks like this:

```sql
INVOKE BatchRunner.RENAME_CONCEPT
WITH
SELECT  :AGENCY AGENCY
,       :RENAME_FROM RENAME_FROM
,       :RENAME_TO RENAME_TO
,       'True' "-quiet"

```

For details on this technique, go to the USoft Web Designer Guide and in the index, search for "SQL statement".

 