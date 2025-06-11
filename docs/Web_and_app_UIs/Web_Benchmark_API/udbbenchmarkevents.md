---
id: udbbenchmarkevents
---

# $.udb.benchmark.events

![](./assets/9f6d27d0-3b35-4fff-8363-195f21690bc5.png)

:::warning

This article is under construction.

:::

## **$.udb.benchmark.events**

Contains event objects that can be used to trigger Web Benchmark related events.  
You create an event listener via:

```js
$.udb.benchmark.on(<event>)
````

and you trigger these events either via

```js
$.udb.benchmark.trigger(<event>, {options})
```

where *`{options}`* is a JS key-value object.

There are several reasons you might consider using these events:

* To write extensions or plugins for web benchmark
* For test automation (e.g., auto-export results, start tests on page load, run custom JS on recording)

The events and their available options are as follows:

---

### dbimport

| Description                                                                                                                                        | Options                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Triggered as soon as you import from browser database (IndexedDB) to the local repository. The tests are copied from the tests table in IndexedDB. | - `selectedSuites: {}`: the suites to import to local repository.  - `selection: {}`: all tests of the selected test suite.  - `purge: true`: trigger the `purge` event.  - `quiet: false`: don’t display messages after import. |

---

### dbpurge

**Description**
Clears browser database tables. Also triggered as soon as you press "Clear browser database tables" in the Manage dialog.

**Options**

* `quiet: false`: If true, don’t display messages after import is complete.
* `results: false`: Clear the test results.
* `tests: true`: Clear the tests.

---

### dbremove

**Description**
Triggered as soon as you delete test selections from browser database (IndexedDB).

**Options**

* `selectedSuites: {}`: the suites to be removed.
* `selection: {}`: contains all tests of the selected test suite. Test key must equal the test name.

**Example:**

```js
$.udb.benchmark.db("tests").get({method:"sometest"}).then(function(t){
  s = {};
  s[t.method] = t;
  $.udb.benchmark.trigger('dbremove', {selection: s, selectedSuites: {}})
});
```

---

### dbsyncfinish

| Description                                                                                   |
| --------------------------------------------------------------------------------------------- |
| Triggered as soon as the synchronization of the local repository with IndexedDB is completed. |

---

### export

| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Options                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Triggered as soon as an [Export to File](/Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Saving_a_Web_Benchmark_test.md), export selected tests, or export execution logs is done. If selected tests are exported, the event is triggered with additional options that contain the test selections. First calls `$.udb.benchmark.rec.makeXML()` to generate the XML content, then creates the file for downloading using `$.udb.benchmark.rec.exportAsFile()`. | - `target: null`: If specified as a URL string, test suite XML is transmitted via AJAX POST (`application/x-www-form-urlencoded; charset=UTF-8'`). Success and error functions can be provided.  - `list: []`: Tests to export (array of test IDs).  - `singleton: true`: If true, omit invoked tests. If false, include them. - `mode: "test"`: Export a test or a test run report (`"runs"`), or both (`"all"`).  - `runList: []`: For `"runs"` or `"all"`, the test runs to export (index values). |

**Example:**
Exports the entire test suite:

```js
$.udb.benchmark.trigger("export");
```

Attempts to POST the test suite results to `usofttest/testresults`:

```js
$.udb.benchmark.trigger("export", {
  target: "usofttest/testresults",
  error: function(e) { console.log(e.status) }
});
```

---

### failtest

| Description                                                                                                                 | Options                                                                                                                      | Example                                                                                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Emitted when a single Web benchmark test execution fails. Allows you to customize failure handling (only during execution). | - `message: []`: Array of strings shown after playback.  - `singleAction: false`: Argument passed to the `.play()` method. | - Log "Failed" when a test fails:  `$.udb.benchmark.on("failtest",function(){console.log("Failed")});`  - Display an extra message on playback finish:  `$.udb.benchmark.trigger("failtest",{message:["123"]});` |

---

### load

| Description                                                                | Options                                               | Example                                                                 |
| -------------------------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------- |
| Loads test suite definition from file. If unsuccessful, outputs a message. | - `path: null`: File path of the testsuite .xml file. | `$.udb.benchmark.trigger('load',{path:"C:\\test\\TestSuite_load.xml"})` |

---

### logaction

| Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Triggered by web service actions so they can be logged to web benchmark diagnostics ("Developer info" screen). Will be merged with `logevent` in the future. |

---

### logevent

| Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Triggered by web service events so they can be logged to web benchmark diagnostics ("Developer info" screen). Will be merged with `logaction` in the future. |

---

### play

| Description                                                                                                                           | Options                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Example                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Triggered when Web Benchmark enters play mode (press play button or call `$.udb.benchmark.play()`). Instructs playback engine to run. | - `times: 0`: Play tests multiple times (use with `batchSet`).  - `single: false`: If true, only play the next action of the current test.  - `perfMode: false`: Initiate a test with performance info.  - `batchSet: []`: Initiate a batch of tests (key-value pairs: `{testsuite:"testname"}`)  - `reset: false`: Start a new test, deleting the current run.  - `invoke: null`: Initiate invoke execution within recording.  - `rerun: false`: Rerun failed tests after finishing. | Fetch all tests belonging to testsuite "0" and run in performance mode:    `js  $.udb.benchmark.getTests("0").then(function(tests) {      $.udb.benchmark.trigger("play", {          times: 1,          perfMode: true,          batchSet: tests      });  });  ` |

---

### playmessage

| Description                                                                                                 | Options                                                                                              |
| ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Used internally by the message handler of Web Benchmark. Triggered as soon as a message is to be displayed. | - `message: ""`: The message to display.  - `presentation: DialogBox`: How to display the message. |

---

### pullstorage

| Description                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Load tests from local browser storage into the local repository. Displays a warning prior to loading. Equivalent to pressing “Import from browser storage.” Fired via `$.udb.benchmark.saveCurrentTests()`. This event will be deprecated in the future. |

---

### purge

| Description                  | Options                                                                                                                                             |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Clears the local repository. | - `mode: "all"`: Clear all test data or only test run data using `"runs"`.  - `list: []`: Deletes specific test(s); if no list, clears all tests. |

---

### pushmessages

| Description                                           |
| ----------------------------------------------------- |
| Triggered when multiple messages are to be displayed. |

---

### pushstorage

| Description                                                                                                                                                                                       | Options                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Store tests into the local browser storage. Triggered as a result of triggering `"storetest"` (equivalent to pressing “Export to browser storage”). Will be replaced by `dbimport` in the future. | - `quiet: true`: Display a message as soon as storage is finished. |

---

### record

| Description                                                                 |
| --------------------------------------------------------------------------- |
| Base event for when you record any test action, or press the record button. |

---

### recordchange

| Description                                                                           |
| ------------------------------------------------------------------------------------- |
| Triggered when you record a change event (e.g., a `setValue` action in a text field). |

---

### recordclick

| Description                               |
| ----------------------------------------- |
| Triggered when you record a click action. |

---

### recordmessage

| Description                                         |
| --------------------------------------------------- |
| Triggered when you record a message dialog display. |

---

### recordnavigate

| Description                                       |
| ------------------------------------------------- |
| Triggered when you record a menu page navigation. |

---

### recordvariable

| Description                           |
| ------------------------------------- |
| Triggered when you record a variable. |

---

### remove

| Description                              |
| ---------------------------------------- |
| Triggered when you delete a test action. |

---

### report

| Description                                                                                                                                         | Options                                                                                                                                                                                                   | Example                                                                                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Triggered whenever Web Benchmark reports the test results and displays dialog messages (e.g., on test assertion failure or when playback finishes). | - `message: []`: Messages to display.  - `buttons: undefined`: Buttons accessible on the dialog.  - `func: undefined`: Callback function.  - `quiet: false`: Matches the "Quiet execution" setting. | Display an additional message about this being a test environment:    `js  $.udb.benchmark.on("play", function() {    $.udb.benchmark.trigger("report",{message:["THIS IS THE TEST ENVIRONMENT"]})  });  ` |

---

### resume

| Description                                                                                                    | Options                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Triggered whenever you press record on an existing test or resume a paused recording by pressing record again. | - `action: {}`: Data of the recorded test action.  - `beforeMessages: false`: Records the action for pushed messages. |

---

### stackevent

| Description                               |
| ----------------------------------------- |
| Used by the web benchmark event profiler. |

---

### start

| Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- |
| Triggered when you press record on a new test. If you try to record an existing test, `resume` is fired instead. |

---

### stop

| Description                                                                                                                                    | Options                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Triggered when the playback engine is stopped. Also part of other event chains, e.g., enabling web benchmark, or when you select/store a test. | - `paused: false`: Playback pauses are implemented via `stop` using this option. If playback is paused, the event is triggered with `paused: true`. |

---

### storetest

| Description                                                                                                                                         | Options                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Saves a Web Benchmark test. Triggered when you press Save (stores tests in the current repository). Automatically triggers the `pushstorage` event. | - `name: ""`: Name of the test.  - `desc: ""`: Full description.  - `short: ""`: Short description.  - `folder: "default"`: Test suite to store current test.  - `entry: null`: Internal test id.  - `quiet: false`: Disables additional messaging if true. |

---

### testselect

| Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Triggered as soon as you select a test via the dropdown control. Also part of other event chains, e.g., enabling web benchmark or storing a test (these actions select a test). |

---

### unstackevent

| Description                               |
| ----------------------------------------- |
| Used by the web benchmark event profiler. |