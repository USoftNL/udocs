# Windows interface events

This section lists interface events for which behavior properties exist that allow actions to be defined. The actions are executed when the event occurs.

Interface events can lead to data events. For example, the Leave Field event leads to field validation if the field value was entered or changed.

Interface events may occur in Query Mode as well as in Data Manipulation Mode. They may also occur as the result of transitioning BETWEEN Query Mode and Data Manipulation Mode.

|**Object**|**Interface event**|**Occurs when**|**Property fired**|
|--------|--------|--------|--------|
|Button  |Click Button|A button is clicked using the mouse function key navigation followed by ENTER, or the button's Mnemonic key.|Action  |
|Field   |Enter Field|The input focus is placed on a field, using the mouse or function key navigation. This focus change may occur as a result of a window being opened, or the user switching between Query Mode and Data Manipulation Mode|Pre-field-entry|
|Field   |Leave Field|The input focus is moved from the field to another interface element using the mouse or function key navigation, or the field's window or the application is closed, or the user switches between Query Mode and Data Manipulation Mode while focus is on the field.|Post-leave|
|Record  |Enter Record|The input focus is placed on the record line, using the mouse or function key navigation. This focus change may occur as a result of a window being opened, or the user switching between Query Mode and Data Manipulation Mode|Pre-record-entry|
|Windows, dialogs|Open Window|The window or dialog is opened.|Startup ActionsPost-open|
|Windows, dialogs|Close Window|The window or dialog is closed.|Pre-closePost-close|
|Application|Open    |The application is opened from the command line or via a utility such as USoft Binder.|Actions at Startup *|
|Application|Set User|The user currently logged in is changed dynamically to another user by calling:SELECT RulesEngine.SetUser( 'user', 'password', '')|After SetUser *|
|Application|Change Role|The current role is changed dynamically to a different role by calling:SELECT selectRulesEngine.SetUserGroup( 'usergroup' )|After Role Changed *|



* Find these properties by choosing File, Edit Application from the menu.

 