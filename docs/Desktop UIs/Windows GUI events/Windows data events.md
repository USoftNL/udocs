# Windows data events

This section lists data events for which behavior properties exist that allow actions to be defined. The actions are executed when the event occurs.

Data events can lead to validation routines. For example, the Insert Record event leads to row validation.

Whether the data event occurs in Query Mode or in Manipulation Mode depends on the event definition.

|**Object**|**Data event**|**Occurs when**|**Property fired**|
|--------|--------|--------|--------|
|Field   |Lookup-Change Field|In manipulation mode, the user chooses a new or different field value from a lookup window.|Post-editOn Change|
|Field   |Query-Change Field|In Query Mode, the user changes the field value:By typing a character into an empty fieldBy adding, changing or deleting a character in a field valueBy choosing a new or different field value from a lookup windowBy causing an action to be executedBy adding, changing or deleting a character in a field value.|On Change|
|Field   |System-Change Field|In manipulation mode, the user causes an action to be executed that adds, changes, or deletes a field value.|Adjust ChangePost-editOn Change|
|Field   |User-Change Field|In manipulation mode, the user leaves a field after having changed its value in a different way than by using a lookup window.|Adjust ChangePost-editPost-change (Field property)Post-leave|
|Field   |User-Change Value|In manipulation mode, the user changes the field valueBy typing a character into an empty fieldBy adding, changing or deleting a character in a field value|On Change|
|Record  |Create Record|The user chooses Record, New using the menu bar, toolbar or function key.The user types a character or selects a value in a new record (blank line).The user performs an action causing the RecordCreate() action to be executed.|Post-create (Field property)|
|Record  |Delete Record|The user chooses Record, Delete using the menu bar, toolbar or function key.The user performs an action causing the RecordDelete() action to be executed.|Pre-deletePost-delete|
|Record  |Fetch Record|A record is fetched from the database (but not necessarily displayed on the screen) as a result of the user issuing a query.|Post-fetch|
|Record  |Insert Record|After entering values in a new record (blank line), the user performs any action causing the record to be stored|Post-change (Info Box property)Mandatory field checksPre-insert ValidationPost-insert|
|Record  |Update Record|After changing one or more values in an existing record (queried from database), the user performs any action causing the record to be stored.|Post-change (Info Box property)Pre-update ValidationPost-update|
|Transaction|Commit Transaction|The transaction is committed (through explicit user action, or implicitly).|Pre-commit|
|Transaction|Receive Database Error|The RDBMS raises an error message in the application.|On Database Error|
|Transaction|Rollback Transaction|The transaction is rolled back (through explicit user action, or implicitly).|Post-rollback|



 