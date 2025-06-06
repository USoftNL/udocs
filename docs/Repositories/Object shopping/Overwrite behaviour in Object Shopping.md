# Overwrite behaviour in Object Shopping

This topic describes the overwrite behaviour for Object Shopping via an export file. For the behaviour with copy-paste, go to "Conflict Resolution" in help topic: Object shopping via the clipboard (copy-paste).

When objects are imported in a target repository, they are imported as-a-whole. The standard 'UPSERT' algorithm (a mix of UPDATE and INSERT) is applied:

|        |        |
|--------|--------|
|**If ...**|**Then:**|
|The object exists in the target repository ...|All non-key columns of the parent record are updated to the value found in the export file (UPDATE).All child records of children which are contained by the parent will be overwritten using the following algorithm:Child records which exist in the file but do not exist in the target repository will be insertedChild records which exist in the file and exist in the target repository will be updated.Child records which do not exist in the file but do exist in the target repository will be deleted.|
|The object does NOT exist in the target repository ...|The object is added (INSERT).|



For example, if you import a Table object and the Table already exists in the target repository, the Table record will be updated. Columns and indexes which do not exist in the target repository will be added, columns and indexes which exist in the target repository and in the file will be updated and columns and indexes which exist in the target repository but do not exist in the file will be deleted.

Another example is a Job with its Job Tasks: the import mechanism will insert, update and delete the Job Tasks in the target repository in such a way that they will reflect the situation in the file.

If the overwrite behaviour does not raise errors for any of the objects in the export file, the import will be automatically committed. Otherwise, an error message will appear, the entire import attempt will fail, and the transaction will be rolled back.

 