---
id: Web_Benchmark_settings
---

# Web Benchmark settings

Clicking the **Settings** icon:

![](./assets/bf91c10c-220b-4f47-b5b4-22f267fcd9b9.png)

brings up the "Web Benchmark settings" dialog.

### Buttons in this dialog

Pressing the **OK** button accepts any changes you make in this dialog, and stores these in browser history if applicable.

Pressing the **Reset** button resets everything to Web Benchmark default settings, which contain the settings made on the Web Benchmark control in Web Designer as well.

Pressing the **Cancel** button discards any changes you make in this dialog.

### Web Benchmark Profiler settings

|**Setting**|**Explanation**|
|--------|--------|
|Display overview of all runs|<p>Show in the profile overview the amount of time each action execution has taken The default value is Yes.</p><p>This setting is equivalent to the Web Benchmark control property "Display Overview" and allows you to change the value of this property at runtime.</p>|
|Display run times per individual action/event|<p>Show in the profile overview the amount of time each action execution has taken. The default value is Yes.</p><p>This setting is equivalent to the Web Benchmark control property "Display individual run times on overview" and allows you to change the value of this property at runtime.</p>|
|Display events profile|<p>Show the event execution profiles and events per user action in the profiler test details overview. The default value is Yes.</p><p>This setting is equivalent to the Web Benchmark control property "Display events profile" and allows you to change the value of this property at runtime.</p>|
|Display message log|Allows the user to show or hide the ‘Message log’ tab in the ‘Test run’ dialog. The default value is No, which means that the tab is hidden.|
|Default # of times to run|<p>The suggested default number of times that a test is executed when **Run profiler:**</p>![](./assets/6b758a83-9d55-4a7e-bee1-e824f870bcdb.png)

<p>is clicked. The default is 3.</p><p>This setting is equivalent to the Web Benchmark control property "Default number of times to profile" and allows you to change the value of this default at runtime.</p><p>This setting is a *default.* You can override it for each individual test before that test is started.</p>|
|Show notification area during batch run|When running one or more tests in Profiler mode, a notification area is shown on the right side of the application, showing the progress of the test run and its results so far. It also contains buttons to allow pausing the test, skipping a test, or stopping the run completely. By default, this option is set to Yes, which means the notification area is displayed during profiler runs.|
|Display debug messages in browser console|When running tests, this option shows an execution log in the browser control, which shows the current test and action being executed. The log could also be exported to a file if the browser permits this.|



### Test Recorder settings

These settings concern behavior of Web Benchmark during recording of a test. These settings can all be influenced too by equivalent properties on the Web Benchmark control that can be changed in the Web Designer.

|**Setting**|**Explanation**|
|--------|--------|
|Automatically check the value for clicked fields|<p>If this setting is set to Yes, the value of an input control in an assert action is recorded as a test action when you click on that control. This allows click-based value validation during a test.</p><p>The click itself is recorded too. If you do not want these clicks to be recorded, you can manually remove them from your test definition afterwards.</p><p>This setting is equivalent to the Web Benchmark control property "Check the value for selected fields" and allows you to change the value of this property at runtime.</p>|
|Check total number of records and range|<p>If this setting is set to Yes, the current record range and the total number of records for a data source is recorded as a test action when that data source is queried or its data set is changed (eg., with the DataSetNumbersControl).</p><p>If the control contains click events that have been defined in the Web Designer, these would fire too, and thus the click is recorded in this case as well.</p><p>This setting is equivalent to the Web Benchmark control property "Check total number of records and range" and allows you to change the value of this property at runtime.</p>|
|Check number of items in dropdown selects|<p>If this setting is set to Yes, the number of child items (option elements) in an InputControl of type 'select' is recorded as a test action when you click on that control.</p><p>If the control contains click events that have been defined in the Web Designer, these would fire too, and thus the click is recorded in this case as well.</p><p>This setting is equivalent to the Web Benchmark control property "Check number of items in dropdown selects" and allows you to change the value of this property at runtime.</p>|
|        |        |



### Test Playback settings

|**Setting**|**Explanation**|
|--------|--------|
|Test playback speed (delay)|With this setting you can change the delays between actions on a test. Although lower delays give higher speed and are thus best suited for test automation, using a higher delay allows test execution at a more watchable speed, so that you can observe the behaviour of the application better. There are several fixed values for this setting, of which ‘Very fast’ (20 ms delays) is the default. There is also a faster (5 ms) setting, but it has been found to cause tests to fail more easily on older (slower) machines.|
|Max idle time per action|This setting allows you to change the maximum amount of idle time that an action may have, i.e. the time it does ‘nothing’ when it is finished. This is different from the ‘playback speed’ in the sense that waiting for a message, displaying and hiding dialogs also are included in this idle time. Higher idle times slow down tests considerably, so a lower value is recommended. The default is 200 ms, but any value between 20 and 5000 is acceptable. A higher value than 5000 is not recommended.|
|Quiet execution (no report)|Executes a test without displaying a report when finished. By default, this option is turned off.|
|<p>Test fails on script result mismatches</p>|<p>Allows you to specify how to handle a script result mismatch. The possible options are <br/><br/>*Always:*<br/>			Whenever a script execution result does not match the expected value, immediately mark the test as failed. This is the default.</p><p>*Not for undefined and null results:*<br/>			Continue running the test in case a script execution action outputs `null` and `undefined` . This option would be considerable whenever you expect that a script result may or may not return `null` or `undefined` and those two results are acceptable in your test conditions.</p><p>*Never:*<br/>			Continue running even after script result mismatches. This option is useful if you temporarily need to ignore script results for diagnostic purposes or if your testing suite only requires script execution without result testing.</p>|
|Test fails on assertion mismatches|<p>Allows you to specify the playback behaviour in case a mismatch occurs when testing values using [assertions](/Web_and_app_UIs/Web_Benchmark_recordable_actions/assert_assertEquals_assertNotSame.md). Possible options are:<br/>			 </p><p>*Always:*<br/>			Whenever a assertion fails, immediately mark the test as failed. This is the default.</p><p>*Never:*<br/>			Continue running even after assertions mismatch. This option is useful if you temporarily need to ignore assertions checks for diagnostic purposes.</p>|



### Storage and export settings

|**Setting**|**Explanation**|
|--------|--------|
|Automatically save tests in browser storage|<p>This setting allows you to save newly created tests in the browser storage immediately when the save dialog is completed. This allows you to save your tests between browser sessions, because the next time you open the application the tests are available again, either immediately (if the ‘Automatically load definitions from browser storage` property of the Web Benchmark control is set to Yes), or by using the ‘Import from browser storage’ button on the ‘Manage tests’ dialog.</p><p>Keep in mind that storage space is very limited, about ~400 tests of average size can be stored simultaneously.</p><p>This setting is set to No by default.</p>|
|Automatically save test runs in browser storage|<p>This setting allows you to save the results of performance tests in the browser storage immediately when the test run completes. This allows you to save your test results between browser sessions, because the next time you open the application these results are available again, either immediately (if the ‘Automatically load definitions from browser storage` property of the Web Benchmark control is set to ‘Yes’), or by using the ‘Import from browser storage’ button on the ‘Manage tests’ dialog.</p><p>Test runs take up a lot of space (much more than the definition of a test itself) so use this setting sparingly, or only for small test sets. In the case of large test result sets, exporting from the ‘Profiler overview’ dialog is recommended.</p><p>This setting is set to No by default.</p>|
|Default file name for export|This setting allows you to change the prefix text used in the file name of exported files. Its default value is ‘TestSuite’, but any name is allowed as long as it contains only characters that are allowed in file names.|