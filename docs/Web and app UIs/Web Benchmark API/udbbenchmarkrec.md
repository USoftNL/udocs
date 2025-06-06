# $.udb.benchmark.rec



> [!WARNING]
> This article is under construction.

## **$.udb.benchmark.rec**

This object exposes the Web benchmark recorder engine API.

The [$.udb.benchmark.playback](#) function exposes the Web Benchmark playback engine.

### breakpoints: {}

|        |        |
|--------|--------|
|**Description**|<p>Contains all breakpoints set in the *Edit test actions and parameters* dialog. The breakpoints are only listed in the context of the currently selected test. Each breakpoint is set as a key-value (test step :`true` or `false`) pair object</p>|
|**Example**|<p>A test with a breakpoint set at step five:</p><p>breakpoints: {{5:true}}</p>|



### createWaitFunctions: ƒ (entries)

|        |        |
|--------|--------|
|**Description**|<p>Constructs the wait conditions in the Extensions dialog as Javascript functions. The entries are fetched from indexeddb via the extensions table with type “wait”. The functions are stored in the `waits` array.</p>|



### devMessages: []

|        |        |
|--------|--------|
|**Description**|<p>When [`$.udb.benchmark.events.recordmessage`](#) is triggered, the message object is pushed to this `devMessages` array. These are then displayed as developer alerts.</p>|



### expandTest: *ƒ ()*

|        |        |
|--------|--------|
|**Description**|<p>Function used to display tests in edit tests dialog.</p>|



### exportAsFile: *ƒ (file, obj, type, ext)*

|        |        |
|--------|--------|
|**Description**|<p>Exports data to file. Can be in XML format, JSON or PDF (under development). The [`$.udb.benchmark.events.export`](#) event calls this function.</p>|
|**Option**|<p>`file` : filename</p><p>`obj` : the data to export, the xml is normally created by [`$.udb.benchmark.rec.makeXML()`](#makeXml) </p><p>`type` : the content-type, currently either `application/xml` ,</p><p> `application/json  `or ` application/pdf`</p><p>`ext` : the extension for the file , by default .xml</p>|
|**Example**|<p>Export a dummy file named “TestRun” with {} as file content in json format with extension json.txt:</p><p>`$.udb.benchmark.rec.exportAsFile("TestRun", '{}' , "application/json",'json.txt');`</p>|



### findAllRunsOfTest: *ƒ (testName, options)*

|        |        |
|--------|--------|
|**Description**|<p>executed in loop as soon as you open the Overview of test runs dialog , since it finds all runs for every existing test.</p>|



### findControl: *ƒ (rec, $target)*

|        |        |
|--------|--------|
|**Description**|<p>Attempts to find the control on the displayed page. Called whenever you press the “Locate control in displayed page” button when editing a test action.</p>|
|**Options**|<p>`rec`  : the action containing the control to be located as an object.</p>|



### findFolder: ƒ (*testId*)

|        |        |
|--------|--------|
|**Description**|<p>Helper function , calls $.udb.benchmark.storageFolder.findObject</p>|



### findFolderByAlias: *ƒ (alias)*

|        |        |
|--------|--------|
|**Description**|<p>Helper function , calls $.udb.benchmark.storageFolder.findObject </p>|



### findFolderId: *ƒ (testId)*

|        |        |
|--------|--------|
|**Description**|<p>Helper function , calls $.udb.benchmark.storageFolder.findObject </p>|



### findTest: *ƒ (id, folder)*

|        |        |
|--------|--------|
|**Description**|<p>Helper function , calls $.udb.benchmark.storageFolder.mapArray</p>|



### finishEvent: *ƒ ()*

|        |        |
|--------|--------|
|**Description**|<p>Called when a single action has finished recording. Preceeded by `startEvent()`.</p>|



### formatScriptResult: *ƒ (scriptResult)*

|        |        |
|--------|--------|
|**Description**|<p>Called whenever scripts are executed to apply formatting on the script result.</p>|



### formatValues: *ƒ (scriptResult, formatCols, nesting)*

|        |        |
|--------|--------|
|**Description**|<p>Called by formatScriptResult.</p>|



### getAction: *ƒ (id, ref)*

|        |        |
|--------|--------|
|**Description**|<p>Retrieves the action of a test, either matches the id or does a search based on the input</p><p>Returns an object containing the action.</p>|
|**Options**|<p>`id` : Either the exact number or,</p><p>`lastClick` to search for the most recent click action.</p><p>Use `lastChangeable` to search for the most recent change in records.</p><p>Use `lastChange` to search for the most recent change in records.</p><p>`lastValue` to search for the most recent value set action.</p><p>`firstMessage` to search for the most recent event that is not a message.</p><p>`ref` : The reference name of the control for which this action was recorded.</p>|
|**Example**|<p>Get the first action of the test:</p><p>`$.udb.benchmark.rec.getAction(0)`</p><p>Returns:</p><p>`{  "action": "invoke",     `</p><p>`   “testName": "Test 3",     `</p><p>`   "disabled": false,     `</p><p>`   "paramSource": "newvalues",     `</p><p>`   "params": {         `</p><p>`      "a": "z"     } `</p><p><pre><code></code></pre></p>|



### getActionControlProperties: *ƒ (action, options)*

|        |        |
|--------|--------|
|**Description**|<p>-</p>|



### getAllResultsOfRun: *ƒ (runId)*

|        |        |
|--------|--------|
|**Description**|<p>Fetches all test run results. OBSOLETE</p>|



### getContext: *ƒ (options)*

|        |        |
|--------|--------|
|**Description**|<p>Used to retrieve the context of a control that is selected while recording. Returns an array of DOM elements.</p>|



### getControlValue: *ƒ (vt, $el)*

|        |        |
|--------|--------|
|**Description**|<p>A helper function that retrieves values of the selected HTML control. Used during recording.</p>|
|**Options**|<p>`vt` : the vaue type, either `“text”`  to fetch the HTML control its JQuery `text()` value.</p><p>`innerText` to fetch the DOM `innerText()` value.</p><p>`val`  to fetch values using JQuery `.val()`</p><p>`$el` : the HTML element, can be retrieved using JQuery. fetched internally using the`.findControl()` function.</p>|
|**Example**|<p>Fetches the `.val` of the HTML element with id `#user`:</p><p>`$.udb.benchmark.rec.getControlValue("val",$("#user"));`</p>|



### getCurrentAction: *ƒ ()*

|        |        |
|--------|--------|
|**Description**|<p>Retrieves the current recorded action. Returns -1 if there is none.</p>|



### getCustomValueType: *ƒ ($el)*

|        |        |
|--------|--------|
|**Description**|<p>Retrieves the Web benchmark control its “Value type” property. More about the Value type property is found [here](/docs/Web%20and%20app%20UIs/Testing%20your%20web%20application%20with%20USoft%20Web%20Benchmark/Editing%20a%20test.md).</p>|



### getInvokes: *ƒ (test, depth)*

|        |        |
|--------|--------|
|**Description**|<p>Fetches all invokes that belong to the currently selected test, including nested invokes. Returns a `udbPromise` object.</p>|
|**Example**|<p>This example retrieves all invokes.</p><p>`$.udb.benchmark.rec.getInvokes().then(function(res){console.log(res);return res});`</p><p>This example displays an array of multiple objects.</p><p>`[{"test": "Test 3"},{"test": "Test DB"},{"test": "Test DB2"}]`</p>|



### getOccurrence: *ƒ ($elem, context)*

|        |        |
|--------|--------|
|**Description**|<p>Retrieves the Occurence rank of a control. More about the Occurence Rank property is found [here](/docs/Web%20and%20app%20UIs/Testing%20your%20web%20application%20with%20USoft%20Web%20Benchmark/Editing%20a%20test.md).</p>|



### getPropertiesForElement: *ƒ ($e, event)*

|        |        |
|--------|--------|
|**Description**|<p>Retrieves all Web Benchmark properties of an element. Called when e.g. replacing a control.</p>|
|**Options**|<p>$e : </p>|
|**Example**|This example retrieves all properties of some tab named Documents on a click event:			<p>`$.udb.benchmark.rec.getPropertiesForElement($("#tabDocuments > a"),"click")`</p>|



### getScriptResult: *ƒ (script, frame, waitPromise)*

|        |        |
|--------|--------|
|**Description**|<p>Retrieves the result of a script action. Called when recording a script action. More about recording scripts can be found [here](/docs/Web%20and%20app%20UIs/Testing%20your%20web%20application%20with%20USoft%20Web%20Benchmark/The%20Web%20Benchmark%20control.md).</p>|



### getUniqueID: *ƒ (name)*

|        |        |
|--------|--------|
|**Description**|<p>Helper function for finding test control ID’s. Called by `$.udb.benchmark.rec.setTestReferencesInElement()`</p>|



### getVariableValue: *ƒ (origValue, requestedType)*

|        |        |
|--------|--------|
|**Description**|<p>Parses and retrieves variables that are used in test actions. Used when you record a variable using `$.udb.benchmark.rec.recordVariable()`, </p><p>`$.udb.benchmark.rec.findControl()` </p><p>Also called during test playback.</p>|



### invoke: false

|        |        |
|--------|--------|
|**Description**|<p>Internal flag used to skip notifications on invoked tests.</p>|



 

|        |        |
|--------|--------|
|**Description**|<p>Checks whether the action its control properties fetched via `getActionControlproperties()` has identical properties as</p><p>the last recorded change action fetched via `getAction()`</p><p> </p><p>The check is done in order to check if the same control was recorded.</p><p> </p>|





### makeXML: *ƒ (options)*

|        |        |
|--------|--------|
|**Description**|<p>Generates the XML content when exporting to file.</p><p>Returns a `udbPromise` object. </p>|
|**Options**|The options are the same as [`$.udb.benchmark.events.export`](#)|
|**Example**|<p>Generate XML for test named “test 1”:<br/><br/>`await $.udb.benchmark.rec.makeXML({target:null,list:["test 1"],singleton:false,mode:"test",runList:[]}).then(function(s){console.log(s);return s});`</p><p> </p><p>The example uses await to get the value fullfilled by the `udbPromise`.</p>|



### messageFilter: []

|        |        |
|--------|--------|
|**Description**|<p>Retrieves the list of messageFilters of extensions. For more details on message filters, please visit the following [article](#). [Deprecated.]</p>|
|**Example**|<p>This example display the “Developer info” dialog in a web UI:</p><p>`$.udb.benchmark.trigger(“dev.view”);`</p>|



### messages: []

|        |        |
|--------|--------|
|**Description**|<p>Array appended with recorded messages when triggering [`$.udb.benchmark.events.recordmessage`](#) .</p>|



### mode: null

|        |        |
|--------|--------|
|**Description**|<p>Initialization flag used to test the mode of Web benchmark.</p>|



### newTest: false

|        |        |
|--------|--------|
|**Description**|<p>Flag to check if the recorded test is a new test. Set as soon as the recording has stopped.</p>|



### origSettings: 

|        |        |
|--------|--------|
|**Description**|<p>Internally used object, the same object as `$.udb.benchmark.rec.settings`</p>|



### parameters: []

|        |        |
|--------|--------|
|**Description**|<p>Contains invocation parameters of the selected test.</p>|



### parseTestFromXML: *ƒ ($test, version)*

|        |        |
|--------|--------|
|**Description**|<p>Called by `$.udb.benchmark.rec.readXML`  , after you imported from file.</p>|



### propsList:

|        |        |
|--------|--------|
|**Description**|<p>Static object containing default properties that are used by the recorder engine for referencing purposes.</p>|



### purgeRunsOfTest: *ƒ (suiteName, testName, runList)*

|        |        |
|--------|--------|
|**Description**|<p>Performs a delete of test runs. Called as soon as you trigger `$.udb.benchmark.events.purge`</p>|



### readXML: *ƒ (xml, struc)*

|        |        |
|--------|--------|
|**Description**|<p>Reads the content of an XML file. Called as soon as you Import from file when you trigger `$.udb.benchmark.events.load`</p>|



### recordComment: *ƒ (comment)*

|        |        |
|--------|--------|
|**Description**|<p>Record a comment as test action. Called automatically when you resume a paused recording where it adds a comment to your test.</p>|
|**Example**|This example shows a call that automatically adds comment when resuming a recording.			<p>`$.udb.benchmark.rec.recordComment($.udb.benchmark.formatString("resume.record.message", [$.udb.data.date.format(new Date(), "DD-MM-YYYY HH24:MI:SS")], true));`</p>|



### recordVariable: *ƒ ()*

|        |        |
|--------|--------|
|**Description**|<p>Opens up the Record variable dialog allowing you to define variables. This function is called when you press the [Variables button](/docs/Web%20and%20app%20UIs/Testing%20your%20web%20application%20with%20USoft%20Web%20Benchmark/The%20Web%20Benchmark%20control.md) and then “Define variables”.</p>|



### recordedActions: []

|        |        |
|--------|--------|
|**Description**|<p>Contains all actions belonging to the selected test.</p>|



### replaceAllVariableValues: *ƒ (value)*

|        |        |
|--------|--------|
|**Description**|<p>Used during playback in order to do variable replacement</p>|



### requestInvocationParams: *ƒ (testObj, callback, current)*

|        |        |
|--------|--------|
|**Description**|<p>Used at the moment a test is played in order to retrieve all invocation parameters</p>|



### selectedRecId: 

|        |        |
|--------|--------|
|**Description**|<p>The selected test, its test ID number.</p>|



### setValueFromVariable: *ƒ (rec, show)*

|        |        |
|--------|--------|
|**Description**|<p>Sets the HTML control its value.</p>|



### setVariableActionsOfInvoke: *ƒ (rec, defParams)*

|        |        |
|--------|--------|
|**Description**|<p>Sets the invocation parameters on an invoke test action during playback based on the parameter type, which is either to set new values, inherit or to use the invocation parameter defaults. </p>|



### startEvent: *ƒ ()*

|        |        |
|--------|--------|
|**Description**|<p>Called when recording of a single action has started. succeeded by `finishEvent() `to indicate that the record of the step is finished.</p>|



### started: false

|        |        |
|--------|--------|
|**Description**|<p>Flag that sets to true the moment you press the record button. Only sets to false when the stop event is fired (the stop or pause button is pressed).</p>|



### storeTestRun: *ƒ (run, testObj, suite)*

|        |        |
|--------|--------|
|**Description**|<p>Stores the test run into either indexeddb or browser storage depending on `$.udb.benchmark.settings.pushStorage`.</p>|



### storeValueInVariable: *ƒ (rec, show)*

|        |        |
|--------|--------|
|**Description**|<p>Called whenever you press the “Store Value or property in Variable” button to store values into variables.</p>|



### storedMessages: []

|        |        |
|--------|--------|
|**Description**|<p>Temporary array containing messages belonging to a testrun.</p>|



### validateControl: *ƒ (rec, props)*

|        |        |
|--------|--------|
|**Description**|<p>When using a replace control ,this function checks whether the newly set control is compatible with the action being edited. Reason can be that buttons do not support setValue, test can only be done on static (div) structures, asserts require input controls, etc. If the control is invalid, it will display a message.</p>|



### variables: {}

|        |        |
|--------|--------|
|**Description**|<p>Temporarily filled with the variables used in a selected testrun. Cleared as soon as playback is finished.</p>|
|**Example**|<p>This example displays the “Developer info” dialog in GUI:</p><p>`$.udb.benchmark.trigger(“dev.view”);`</p>|



### waits: []

|        |        |
|--------|--------|
|**Description**|<p>Contains all wait condition functions that are defined in the Manage Extensions window.</p>|