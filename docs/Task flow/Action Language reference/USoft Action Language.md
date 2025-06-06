# USoft Action Language

> [!NOTE]
> [Action Language reference A - C](/docs/Task%20flow/Action%20Language%20reference%20A-C)
> [Action Language reference D - H](/docs/Task%20flow/Action%20Language%20reference%20D-H)
> [Action Language reference I - R](/docs/Task%20flow/Action%20Language%20reference%20I-R)
> [Action Language reference S - Z](/docs/Task%20flow/Action%20Language%20Reference%20S-Z)

The **USoft Action Language**is a scripting language used in 2 places:

- In USoft Definer, to script branching and looping in Jobs.
- In USoft Windows Designer, to customise ("paint”) C/S user interfaces.

This is a low-code language. It is very easy to learn, apply and inspect. On the other hand, it offers only limited support for such things as debugging, error handling, and logging.

## Action Language in USoft Definer

In USoft Definer, the Action Language is of vital importance for working with variables, branching and looping in so-called **decisions**. Working with decisions in this way makes it possible to program procedural logic in USoft Jobs.

In USoft Definer, you can script commands in the Action Language:

- In **Action Tasks**.
- In the **Yes Action** and **No Action** of Decisions.

> [!TIP]
> Please find explanations, examples and tutorials in the [Decisions](/docs/Task%20flow/Decisions) section.

In this context, a small subset of actions is particularly important:

|        |        |        |
|--------|--------|--------|
|**ActionDecision()**|**SqlScript()**|**ResourceFileUpdate()**|
|[MessageInformation()](/docs/Task%20flow/Action%20Language%20reference%20I-R/MessageInformation.md)|[MessageError()](/docs/Task%20flow/Action%20Language%20reference%20I-R/MessageError.md)|[ResourceFileUpdateKeepBackslash()](/docs/Task%20flow/Action%20Language%20reference%20I-R/ResourceFileUpdateKeepBackslash.md)|



## Action Language in USoft Windows Designer

Historically, the Action Language was the expression language for creating customised, industry-standard C/S interfaces in USoft. In this context, the language is becoming obsolete, because web UIs are replacing C/S UIs.

However, USoft C/S interfaces still have great practical value in Development and Testing. Teams use them intensively for data inspection and data management tasks.

USoft provides rich default-generated C/S interfaces as a standard part of the platform. Teams can tailor these to their specific needs at very low cost: *near-default* C/S interfaces. To create near-defaults, you mainly need to drag-and-drop objects and set properties declaratively. But the existence of the Action Language means that you are not *limited* to low-code defaults: you can still create fully customised C/S screens for special purposes that you may have.

In USoft Windows Designer, you can script command in the Action Language in **properties** that allow scripting. These are the properties associated with **events**. They and listed in the **Behavior** section of the Property Inspector, for example:

- The Post-Open property of a Window object, associated with the event of a user  opening a window;
- The Action property of a push button, associated with the event of a user pushing a button.

> [!TIP]
> For customising C/S screens, please find an alphabetic list of all actions [in this section](/docs/Task%20flow/Action%20Language%20reference).

## Scripts, actions, parameters

In all contexts where you can apply the Action Language, you write a *script* containing 1 or more *actions* (or: *commands*).

An action is identified by name and always followed by a pair of parentheses. Depending on the action, you must or may pass *input parameters,* which are passed inside the parentheses. Multiple parameters within an action call are separated by commas. In parameter values, surround string and date literals (but not number literals) by single quotes:

```
MessageLanguage( 'Admin', 'WRONG_INSTANCE_NAME', 'ERROR' )
```

> [!TIP]
> For backward compatibility, some actions support unquoted string and date parameters, but this old syntax is not recommended.

It is customary to separate multiple actions within a script by single or double newlines. Otherwise, surrounding whitespace is unimportant. In the following example call, the space between Admin and Msg is a significant part of the parameter value passed, but the space preceding the quote before Admin is insignificant:

```
MessageLanguage( 'Admin Msg', 'WRONG_INSTANCE_NAME', 'ERROR' )
```

In summary, an Action Language script looks like this:

```
*action*( *parameter*, *parameter* ...)

*action*( *parameter*, *parameter* ...)

...
```

A script contains at least 1 *action* and possibly multiple actions. Depending on the specific *action,* one or more *parameters* may be required or optional. An action may not allow parameters, or an action call may not need parameters. In these cases, empty parentheses appear:

```
*action*(  )
```

For syntax examples and explanations, please refer to the individual actions listed [in this section](/docs/Task%20flow/Action%20Language%20reference).

## Literals

Surround string and date literals by single quotes, double quotes, or back ticks ( **`** ). Leave number literals unquoted.

Quoting string and date literals makes execution faster and prevents the engine from misinterpreting the literal for something unexpected. Depending on quote type, escape strategies allow you to get a quote character as part of a literal:

|**Quote type**|**Escape strategy**|
|--------|--------|
|single quote|<p>Works as in SQL.</p><p>Escape by doubling the single quote ( **'’** ).</p>|
|double quote|<p>Works as in C and JavaScript.</p><p>Escape by prefixing a backslash ( **\\”** ).</p>|
|back tick|<p>Works as in JavaScript.</p><p>Escape by prefixing a backslash ( **\\`** ).</p>|



> [!NOTE]
> Earlier versions of the action language worked with unquoted literals. The following will work:
> but the following is recommended because faster and safer:

## Variable elements: numbered placeholders in SqlScript() and Decision SQL

The notation colon ( **:** ) + *integer* allows you to pass a value between your application and a SQL statement or SQL script. Values are passed by position: **:1** represents the first value passed or retrieved; **:2** the second, and so on.

Numbered placeholders are covered in [Host variables in SQL](/docs/Modeller%20and%20Rules%20Engine/SQL%20syntax/Host%20variables%20in%20SQL.md).

## Variable elements: named placeholders

The notation colon ( **:** ) + *name* allows you to refer to a value previously stored in a named variable.

*Examples*

```
:"global.root_folder"
```

```
:person_id
```

Technically and historically, this mechanism is related to resource settings read from the "usdi" and "usdiw" resource files in the \\APP subdirectory of the USoft installation directory.

A named variable has global scope. It remains referenceable from the time when it is set until the time when the same variable is set to a different value, or when the USoft session ends.

### Storing a value in a named variable

In the USoft action language, you can set a host variable by calling the **UpdateResourceFile()** action and passing it a resource setting. The syntax of a resource setting is the same as in the "usdi" and "usdiw" resource files:

```
*name*: *value*
```

It is customary, but not necessary, to start name with an asterisk (*) to draw attention to the fact that the variable is globally available and will overwrite any previous settings for name. An alternative way of indicating this is to start each name with the prefix "**global.**".

It is customary, but not necessary, to set properties of an object by using the following spelling for name:

```
*object.property*
```

In value, the backslash character ( \\ ) is a reserved symbol for continuing the resource setting on a new line. You can escape backslashes by calling **update-resource-keep-backslash()** instead of **UpdateResourceFile()**. This is a variant of **update-resource()**, an old but still supported synonym for **UpdateResourceFile()**.

*Examples*

```
UpdateResourceFile( 'userName: USD91_ADMIN' )
UpdateResourceFile( 'User.name: USD91_ADMIN' )

UpdateResourceFile( '*scriptFile : stdout' )
UpdateResourceFile( 'global.scriptFile : stdout' )
UpdateResourceFile( '*script.File : stdout' )

update-resource-keep-backslash( 'tempfolder:' || C:\Temp )
update-resource-keep-backslash( 'installfolder:' || :myFolder )
```

### Referring to a value stored in a named variable

To refer to a value stored in a named variable, you can use a named placeholder:

```
:*name*
```

The following is an example of using host variables in a USoft SQL context, such as SQL Command. The result of this example is the first 4 records of the result set returned by the query:

```
action ResourceFileUpdate( '*min: 1' )
action ResourceFileUpdate( '*max: 4' )
SELECT RECORDS( :min, :max ) * FROM person;
```

The following is an example of using host variables in the Yes Action of a decision, which is a USoft action language context. The expression :1 refers to the first element of the select-list of the Decision's SQL Statement:

```
SqlScript(`
set quitzeroRows False
set quitOnError True
UPDATE  t_dl_release_frame SET temp_folder = :2 WHERE bus_area = :1
;
...`,
'SALES', :1
)
```

### Referring to an object

Action calls in a job scripting context (as opposed to a Windows GUI context) are usually globally available actions that require no object identification:

```
ActionCommit()
```

Globally available actions are also widely used in a Windows GUI context, but there, you require object identification. Object names precede method names. The object identification is separated from the action call by a full stop ( **.** ):

```
*object.action*( )
```

An object name that does not contain full stops denotes the instance of a window class, as MyPersonsWindow in:

```
MyPersonsWindow.ActionAllRows( *action* )
```

This example performs *action* for all the rows in the MyPersonsWindow window.

In Windows GUI, objects exist in a containment hierarchy. You can reach descendents in this hierarchy by placing a full stop ( **.** ) between each parent object and its child object. The following method call addresses the physical text box for the field corresponding to the AREA_CODE table column in the current window. Its effect is to set this text box's background color to red:

```
query.area_code.esd_char.background( 'red' )
```

The physical text box is denoted by esd_char. The AREA_CODE table column is denoted by query.area_code. This example is a *property call,* see next section for details.

## Properties

A special subset of action calls are *property calls.* The name **background** in the following call is a *property name*. This call sets the background colour property of the window to a red colour:

```
MyPersonsWindow.background( 'red' )
```

In Windows GUI, use the **Object Activator** tool to find the available names of objects, methods and properties within a window. Search "actions examples" for more examples of command scripts in a Windows GUI context. To find property names that you can use in action scripts, see the [Property Reference](/docs/Task%20flow/Action%20Language%20reference/Property%20reference.md) article.

To script behaviour *between* windows, you can pass objects of the calling window as a *user-defined property* of the called window. The following call demonstrates this technique:

```
My_Days_Property( Days( Self() ).Window.Create() )
```

In this technique, you need to create one or more user-defined properties in the called window class (here: the Days window class). For details, search "window interaction". This object-oriented technology, based on internal object IDs, replaces an obsolete path technology based on a hierarchy of embedding runtime windows, where <- was a navigation path to the shell of the current window, <-<- a navigation path to the shell of the parent window, and **name* a wildcard navigating to the next descendent match of *name*, as explained to some length in the ac-rel() help topic.

> [!NOTE]
> For  a full explanation of this technique, go to [Window interaction](/docs/Desktop%20UIs/Scripting%20in%20USoft%20Windows%20Designer/Window%20interaction.md).

## The action keyword

In contexts that expect a SQL statement or script, you can use the **action** keyword to introduce call an Action Language script. For example, to open USoft Benchmark from a SQL Command box in a C/S interface, call:

```
action top-test()
```

## Deprecated actions

The table below lists deprecated actions. These are supported for backward compatibility.

The left-hand column shows deprecated actions. The right-hand column shows the recommended equivalent.

|**Deprecated action**|**Recommended equivalent**|
|--------|--------|
|abort-query()|QueryAbort()|
|ac-ribbon()|ActionRibbon()|
|action-all-rows()|ActionAllRows()|
|action-control()|ActionControl()|
|action-decision()|ActionDecision()|
|action-dialog-apply()|ActionDialogApply()|
|action-dialog-cancel()|ActionDialogCancel()|
|action-dialog-ok()|ActionDialogOk()|
|action-dll-execute()|ActionDllExecute()|
|action-do-nothing()|ActionDoNothing()|
|action-ribbon()|ActionRibbon()|
|action-selected-rows()|ActionSelectedRows()|
|action-start-job()|ActionStartJob()|
|application-exit()|ApplicationExit()|
|application-login()|ApplicationLogin()|
|change-password()|ChangePassword()|
|clear-field()|FieldClear()|
|clear-form()|RecordClearWindows()|
|clear-row()|RecordClear()|
|clear-table()|RecordClearTable()|
|close-table()|WindowClose()|
|command-system-background()|CommandSystemBackground()|
|command-system-foreground()|CommandSystemForeground()|
|command-windows()|CommandWindows()|
|commit()|DataCommit()|
|control-allow-resize()|ControlAllowResize()|
|control-delete()|ControlDelete()|
|control-fix-column()|ControlFixColumn()|
|control-set-active-tab()|ControlSetActiveTab()|
|control-set-focus()|ControlSetFocus()|
|control-set-insensitivie()|ControlSetInsensitive()|
|control-set-sensitive()|ControlSetSensitive()|
|convert-alternative-format()|ConvertAlternativeFormat()|
|copy-data()|DataToClipboard()|
|copy-window()|WindowToClipboard()|
|count-query()|QueryDbCount()|
|create-popup-text()|PopupEditorDialog()|
|create-row()|RecordCreate()|
|create-window()|WindowCreate()|
|cursor-first-record()|CursorFirstRecord()|
|cursor-goto-record()|CursorGotoRecord()|
|cursor-last-record()|CursorLastRecord()|
|cursor-next-page()|CursorNextPage()|
|cursor-next-record()|CursorNextRecord()|
|cursor-previous-page()|CursorPreviousPage()|
|cursor-previous-record()|CursorPreviousRecord()|
|data-commit()|DataCommit()|
|data-rdbms-statement()|DataRdbmsStatement()|
|data-rollback()|DataRollback()|
|data-to-clipboard()|DataToClipboard()|
|db-count-query()|QueryDbCount()|
|decision()|ActionDecision()|
|define-query()|QueryDefine()|
|delete-row()|RecordDelete()|
|destrpy-widget()|ControlDelete()|
|detail-box()|WindowCreateRelated()|
|dialog-apply()|ActionDialogApply()|
|dialog-cancel()|ActionDialogCancel()|
|dialog-ok()|ActionDialogOk()|
|dll-execute()|ActionDllExecute()|
|do-nothing()|ActionDoNothing()|
|duplicate-field()|FieldDuplicate()|
|duplicate-row()|RecordDuplicate()|
|dynamic-menu()|WindowCreateRelated()|
|edit-external-file()|FileEdit()|
|error-msg()|MessageError()|
|error-raise()|ErrorRaise()|
|exit()  |ApplicationExit()|
|field-clear()|FieldClear()|
|field-duplicate()|FieldDuplicate()|
|field-paste()|FieldPaste()|
|field-select()|FieldSelect()|
|file-edit()|FileEdit()|
|file-open()|FileOpen()|
|file-save-as()|FileSaveAs()|
|file-search-in()|FileSearchIn()|
|for-all-rows()|ActionAllRows()|
|for-all-selected-rows()|ActionSelectedRows()|
|goto-first()|CursorFirstRecord()|
|goto-last()|cursor-last-record()|
|goto-next()|CursorNextRecord()|
|goto-next-page()|CursorNextPage()|
|goto-previous()|CursorPreviousRecord()|
|goto-previous-page()|CursorPreviousPage()|
|goto-row()|CursorGotoRecord()|
|help()  |HelpOnControl()|
|help-on-accelerators()|HelpOnAccelerators()|
|help-on-control()|HelpOnControl()|
|help-on-keys()|HelpOnAccelerators()|
|help-on-last-message()|HelpOnLastMessage()|
|help-on-table()|HelpOnTable()|
|help-run-winhelp()|HelpRunWinhelp()|
|help-shell()|HelpRunWinhelp()|
|help-table()|HelpOnTable()|
|help-whats-this()|HelpWhatsThis()|
|help-window()|HelpWhatsThis()|
|host()  |CommandSystemBackground()|
|information-msg()|MessageInformation()|
|insert-string()|InsertString()|
|job()   |ActionStartJob()|
|lng-message()|MessageLanguage()|
|login() |ApplicationLogin()|
|lookup-dialog()|WindowCreateLookupDialog()|
|lookup-sql()|WindowCreateLookup()|
|lookup-virtual()|WindowCreateLookup()|
|message-error()|MessageError()|
|message-information()|MessageInformation()|
|message-language()|MessageLanguage()|
|message-question()|MessageQuestion()|
|message-show-list()|MessageShowList()|
|message-warning()|MessageWarning()|
|next-row()|CursorNextRecord()|
|open-file()|FileOpen()|
|open-subtype()|WindowCreateSubtype()|
|page-down()|CursorNextPage()|
|page-setup()|PageSetup()|
|page-up()|CursorPreviousPage()|
|paste-field()|FieldPaste()|
|perform-query()|QueryExecute()|
|pointer-action()|ActionControl()|
|pointer-show-waitstate()|PointerShowWaitstate()|
|popdown()|WindowMinimize()|
|popup-object-menu()|WindowObjectList()|
|popup-text-create()|PopupEditorDialog()|
|previous-query()|QueryPrevious()|
|previous-row()|CursorPreviousRecord()|
|print() |Print() |
|query-abort()|QueryAbort()|
|query-db-count()|QueryDbCount()|
|query-define()|QueryDefine()|
|query-execute()|QueryExecute()|
|query-previous()|QueryPrevious()|
|question()|MessageQuestion()|
|raise-error()|ErrorRaise()|
|rdbms-statement()|DataRdbmsStatement()|
|record-clear()|RecordClear()|
|record-clear-table()|RecordClearTable()|
|record-clear-windows()|RecordClearWindows()|
|record-create()|RecordCreate()|
|record-delete()|RecordDelete()|
|record-duplicate()|RecordDuplicate()|
|record-refresh()|RecordRefresh()|
|record-scroll-to()|RecordScrollTo()|
|record-select()|RecordSelect()|
|record-select-all()|RecordSelectAll()|
|record-single-view()|RecordSingleView()|
|record-store()|RecordStore()|
|record-undo()|RecordUndo()|
|record-write()|RecordWrite()|
|refresh-row()|RecordRefresh()|
|resource-file-update()|ResourceFileUpdate()|
|rollback()|DataRollback()|
|save-file-as()|FileSaveAs()|
|scroll-to-row()|RecordScrollTo()|
|search()|FileSearchIn()|
|select-all()|RecordSelectAll()|
|select-field()|FieldSelect()|
|select-row()|RecordSelect()|
|set-active-tab()|ControlSetActiveTab()|
|set-at-centre-of-screen()|WindowCentreScreen()|
|set-at-mouse-position()|WindowAtMousePosition()|
|set-centre-position()|WindowCentreWindow()|
|set-focus()|ControlSetFocus()|
|set-non-sensitive()|ControlSetInsensitive()|
|set-sensitive()|ControlSetSensitive()|
|set-workarea()|ControlAllowResize()|
|show-message-list()|MessageShowList()|
|show-waitstate()|PointerShowWaitstate()|
|single-row()|RecordSingleView()|
|store-row()|RecordStore()|
|subtype-box()|WindowCreateSubtype()|
|system()|CommandSystemBackground()|
|system_w()|CommandSystemForeground()|
|table() |WindowCreate()|
|toggle-fixed()|ControlFixColumn()|
|transaction()|WindowTransactions()|
|undo-row()|RecordUndo()|
|update-resource()|ResourceFileUpdate()|
|warning-msg()|MessageWarning()|
|window()|WindowCreate()|
|window-arrange()|WindowArrange()|
|window-at-mouse-position()|WindowAtMousePosition()|
|window-centre-screen()|WindowCentreScreen()|
|window-centre-window()|WindowCentreWindow()|
|window-close()|WindowClose()|
|window-create()|WindowCreate()|
|window-create-lookup()|WindowCreateLookup()|
|window-create-lookup-dialog()|WindowCreateLookupDialog()|
|window-create-related()|WindowCreateRelated()|
|window-create-subtype()|WindowCreateSubtype()|
|window-minimize()|WindowMinimize()|
|window-object-list()|WindowObjectList()|
|window-to-clipboard()|WindowToClipboard()|
|window-transactions()|WindowTransactions()|
|win-exec()|CommandWindows()|
|write-row()|RecordWrite()|



 