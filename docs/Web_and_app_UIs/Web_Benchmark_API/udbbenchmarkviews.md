---
id: udbbenchmarkviews
---

# $.udb.benchmark.views




:::warning

This article is under construction.

:::

## **$.udb.benchmark.views **

Contains view related objects and functions that are accessed via Web Benchmark GUI. The Web Benchmark GUI accesses the $.udb.benchmark API via these views. Every main Web benchmark dialog is constructed via these view objects, they are:

- Manage tests
- Developer info
- Edit actions and parameters
- Overview of last test runs
- Manage extensions

These views are displayed by triggering their events. The functions they contain are primarily used to construct dialogs so they are not discussed in a wider context.

### dev

|        |        |
|--------|--------|
|**Description**|<p>Displays the “Developer info” dialog, intended for debugging purposes. This view is displayed whenever you press the “Developer info” button.</p>|
|**Example**|<p>This example displays the “Developer info” dialog in the web UI:</p><p>`$.udb.benchmark.trigger(“dev.view”);`</p>|



### edit

|        |        |
|--------|--------|
|**Description**|Displays the “Edit test actions and parameters” dialog,. This view is displayed whenever you press the “Edit” button.|
|**Options**|<p>`complete: true` : Determines whether the dialog is ready for final display or not.</p><p>`test: null` : Opens the dialog of a certain test. [Obsolete?]</p><p>`testId` : Opens the dialog of a certain test in case an invoked test is opened. You can locate the testId using `$.udb.benchmark.rec.findTest(‘testname’).id`</p><p>`expand: false` : Opens the dialog with expanded action rows.</p><p>`refresh: false` : Only refreshes the view contents.</p>|
|**Example**|<p>This example displays the “Edit test” dialog in Web Benchmark</p><p>`$.udb.benchmark.trigger(“edit.view”);`</p>|



### extend

|        |        |
|--------|--------|
|**Description**|Displays the “Manage extensions” dialog,. This view is displayed whenever you press the “Extend” button.|
|**Example**|<p>This example displays the “Manage extensions” dialog in Web Benchmark:</p><p>`$.udb.benchmark.trigger(“extend.view”);`</p>|



### manage

|        |        |
|--------|--------|
|**Description**|Displays the “Manage tests” dialog,. This view is displayed whenever you press the “Manage tests” button.|
|**Options**|<p>`refresh: false` : Only refreshes the view contents <br/>`mode: "tests"` : Opens the “Manage tests” dialog.</p><p>Use the `appdata` option to open  the “Manage application variables” window.</p><p>Use the `database` option to open the “Manage browser database” window.</p>|
|**Example**|<p>This example displays the “Manage tests” dialog in Web Benchmark:</p><p>`$.udb.benchmark.trigger(“manage.view”);`</p>|



### options

|        |        |
|--------|--------|
|**Description**|Contains default options of certain views as a convenience object. This object is not itself a view.|



### perf

|        |        |
|--------|--------|
|**Description**|Displays the “Overview of last test runs” dialog,. This view is displayed whenever you press the “Overview” button.|
|**Options**|<p>`mode: "overview"` : Displays the “Overview of last test runs” dialog</p><p>Use the `tests` option together with `testId` to display the “Test runs for \<test>” dialog.</p><p>Use `runs` together with `testId` and `perfRun` to display the “Details of test run” dialog.<br/>`testId: null` : The test to display in case of mode `tests`. You can locate the testId using `$.udb.benchmark.rec.findTest(‘testname’).id`</p><p>`perfRun: null `: The run to display in case of mode `run`. Expects an array of test runs.</p>|
|**Example**|<p>This example displays the “Overview of last test runs” dialog in Web Benchmark:</p><p>`$.udb.benchmark.trigger(“perf.view”);`</p><p>This example display the Details of test ID 5 , the second run and the fifth:</p><p>`$.udb.benchmark.trigger(“perf.view”, {mode:”run”,testId:5,perfRun:[“1”,”4”]);`</p>|



### show()

|        |        |
|--------|--------|
|**Description**|The function that prepares a view for displaying. All top-level view events (e.g. `edit.view`) call this function to prepare a dialog without context. This function in turn calls the view specific `show()` function, since each view has its own `.show()` in order to do prepare the view specific content. The actual display is executed by using [`$.udb.benchmark.dialog`](#)|
|**Options**|<p>`evt: {}` : Expects an event object to be passed as input parameter.</p><p>`options: {}` : Additional options to pass on.</p>|



### util

|        |        |
|--------|--------|
|**Description**|Contains utility functions and static fields. This object is not itself a view.|