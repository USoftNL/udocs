---
id: udbbenchmarkevents
---

# $.udb.benchmark.events

 ![](./assets/9f6d27d0-3b35-4fff-8363-195f21690bc5.png)



> [!WARNING]
> This article is under construction.

##  

## **$.udb.benchmark.events**

Contains event objects that can be used to trigger Web Benchmark related events . You create an event listener via

 $.udb.benchmark.on(\<event>)

and you trigger these events either via

$.udb.benchmark.trigger(\<event>,{options})

where *{options}* is a JS key-value object. 

There are several reasons you might consider using these events. You can use them in order to write extensions or plugins for web benchmark. You can also use them in your test automation process by adding custom handlers, for example: to automatically export test results when tests finish, to start some specific test when opening the webpage or execute additional Javascript when recording tests.

The events and their available options are as follows:

 

### dbimport

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>Triggered as soon as you import from browser database (indexeddb) to the local repository. The tests are copied from the tests table in indexeddb. </td>
</tr>
<tr>
<td>
<strong>Options</strong>
</td>
<td>
<p>
<code>selectedSuites: {}</code> : the suites that are to be imported to local repository. </p>
<p>
<code>selection: {}</code> : selection contains all tests of the selected testsuite.</p>
<p>
<code>purge: true</code> : trigger the 
<code>purge </code>event.</p>
<p>
<code>quiet: false</code> : don’t display messages after import is complete.</p>
</td>
</tr>
</tbody>
</table>

 

### dbpurge

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>Clears browser database tables. Also triggered as soon as you press the clear browser database tables in the Manage browser database dialog.</td>
</tr>
<tr>
<td>
<strong>Options</strong>
</td>
<td>
<p>
<code>quiet: false</code> : setting to true won’t display messages after import is complete.</p>
<p>
<code>results: false</code> : clear the test results.</p>
<p>
<code>tests: true</code> : clear the tests.</p>
</td>
</tr>
</tbody>
</table>

 

### dbremove

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>Triggered as soon as you delete test selections from browser database (indexeddb)  </td>
</tr>
<tr>
<td>
<strong>Options</strong>
</td>
<td>
<p>
<code>selectedSuites: {}</code> : the suites that are to be removed.</p>
<p>
<code>selection: {}</code> : selection contains all tests of the selected testsuite. Expects the test key to be equal to the test name.</p>
</td>
</tr>
<tr>
<td>
<strong>Example</strong>
</td>
<td>
<ul>
<li>Retrieves a test object named 
<code>sometest</code> from indexeddb, then removes the test via the trigger. Uses 
<code>$.udb.benchmark.db</code>for record retrieval. the test object is wrapped prior to passing it as option:
<br>
</br>				 </li>
</ul>
<p>
<code>$.udb.benchmark.db("tests").get({method:"sometest"}).then(function(t){s = {};</code>
</p>
<p>
<code>s[t.method]=t;</code>
</p>
<p>
<code>$.udb.benchmark.trigger('dbremove',{selection:s,selectedSuites:{}})</code>
</p>
<p>
<code>});</code>
<br>
</br>			 </p>
</td>
</tr>
</tbody>
</table>

### dbsyncfinish

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>Triggered as soon as the synchronization of the local repository with indexeddb is completed.  </td>
</tr>
</tbody>
</table>

 

### export

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>
<p>Triggered as soon as an 
<ahref="/docs/Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Saving_a_Web_Benchmark_test.md">Export to File</a> ,Export selected tests or Export Execution logs is done. If selected tests are exported, the event is triggered with additional options that contain the test selections. First calls 
<ahref="#">
<code>$.udb.benchmark.rec.makeXML()</code>
</a> To generate the XML content, afterwards it creates the file for downloading using</p>
<p>
<ahref="#">
<code>$.udb.benchmark.rec.exportAsFile()</code>
</a>
</p>
</td>
</tr>
<tr>
<td>
<strong>Options</strong>
</td>
<td>
<p>
<code>target: null</code>:</p>
<p>If 
<code>target</code> is specified as url string, the test suite XML is transmitted to the target url using an AJAX POST request. Uses 
<code>application/x-www-form-urlencoded; charset=UTF-8'</code> as content type. You can pass success and error functions along as option.
<br>
</br>			                             
<br>
</br>
<code>list: []</code>: the list of tests to export if individual test exports are done. Expects an array of test ID’s.
<br>
</br>
<br>
</br>
<code>singleton: true</code>: setting to 
<code>true</code> will omit invoked tests. the 
<code>false</code> setting will include invoked tests.</p>
<p>
<code>false</code> .</p>
<p>
<br>
</br>
<code>mode: "test"</code> : either export a test or a test run report using 
<code>“runs”</code></p>
<p>Or export both results using 
<code>“all”</code></p>
<p> </p>
<p>
<code>runList: []</code> : if using 
<code>“runs”</code> or 
<code>“all”</code> , the list of test runs to include in the export. Expects index values.</p>
</td>
</tr>
<tr>
<td>
<strong>Example</strong>
</td>
<td>
<ul>
<li>Exports the entire test suite , similar to pressing the “Export to File” button:</li>
</ul>
<p>
<code>$.udb.benchmark.trigger("export");</code>
</p>
<p> </p>
<ul>
<li>Attempts to POST the test suite results to url 
<code>usofttest/testresults</code> , which returns a 405 HTTP status code.</li>
</ul>
<p>
<code>$.udb.benchmark.trigger("export",{target:"usofttest/testresults",error:function(e){console.log(e.status)}})</code>
</p>
<p> </p>
</td>
</tr>
</tbody>
</table>

 

### failtest

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>Emitted whenever a single Web benchmark test as soon as test execution failed. This allows you to customize test failure handling. Triggering this event is only applicable during test execution.</td>
</tr>
<tr>
<td>
<strong>Options</strong>
</td>
<td>
<p>
<code>message:[]</code> : displays a custom message as soon as the playback is finished. </p>
<p>Accepts an array of type 
<code>string</code></p>
<p>
<code>singleAction:false</code> : passed along as an argument of the original function parameter of the 
<code>.play()</code> method.</p>
</td>
</tr>
<tr>
<td>
<strong>Example</strong>
</td>
<td>
<ul>
<li>Make sure that “Failed” is logged to the console when a test fails:</li>
</ul>
<p>
<code>$.udb.benchmark.on("failtest",function(){console.log("Failed")});</code>
</p>
<p> </p>
<p> </p>
<ul>
<li>Display an additional message when playback is finished.</li>
</ul>
<p>
<code>$.udb.benchmark.trigger("failtest",{message:["123"]});</code>
</p>
</td>
</tr>
</tbody>
</table>

 

### load

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>Loads test suite definition from file. If unsuccesfull, it will output a message.</td>
</tr>
<tr>
<td>
<strong>Options</strong>
</td>
<td>
<p>
<code>path:null</code> : The file path of the testsuite .xml file.</p>
</td>
</tr>
<tr>
<td>
<strong>Example</strong>
</td>
<td>
<code>$.udb.benchmark.trigger('load',{path:"C:\test\TestSuite_load.xml"})</code>
</td>
</tr>
</tbody>
</table>

 

### logaction

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>When web service actions occur, this event is triggered in turn so that those actions can be logged to web benchmark diagnostics (the “Developer info” screen). This event and the 
<code>logevent</code> will be merged in the future.</td>
</tr>
</tbody>
</table>

 

### logevent

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>When web service events are triggered, this event is triggered in turn so that those events can be logged to web benchmark diagnostics (the “Developer info” screen). This event and the 
<code>logaction</code>will be merged in the future.</td>
</tr>
</tbody>
</table>

 

### play

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>Triggered when Web benchmark enters play mode as soon as you press the play button or call 
<code>$.udb.benchmark.play()</code>. This event instructs the playback engine to run.</td>
</tr>
<tr>
<td>
<strong>Options</strong>
</td>
<td>
<p>
<code>times:0 </code> : play the tests multiple times (comes together with batchSet option)</p>
<p>
<code>single: false</code> :</p>
<p>only play the next action of the current test. This option is 
<code>true </code>when you press the Play step button, 
<code>false</code> when you press the play button,</p>
<p>
<code>perfMode: false</code> : initiate a test with performance info being stored</p>
<p>
<code>batchSet: []</code>  :</p>
<p>initiate a batch of tests (instead of the currently selected test). Expects key ,value pair of test objects, in following format 
<code>{testsuite:”testname”}</code>.</p>
<p>
<code>reset: false</code> : initiate a new test while deleting the current testrun</p>
<p>
<code>invoke: null</code> : initiate an invoke execution within recording (i.e. NOT an actual playback)</p>
<p>
<code>rerun: false</code> : rerun failed tests after finished.</p>
</td>
</tr>
<tr>
<td>
<strong>Example</strong>
</td>
<td>
<p>Fetch all tests beloning to testsuite named “0” using
<ahref=""> $.udb.benchmark.getTests() </a>and trigger a play event that runs all those tests once using the performance mode:
<br>
</br>			 </p>
<pre>
<codeclass="language-javascript">$.udb.benchmark.getTests("0").then(function(tests){  
<br>
</br>
<br>
</br>             $.udb.benchmark.trigger("play", {
<br>
</br>
<br>
</br>                    times: 1,
<br>
</br>
<br>
</br>                    perfMode: true,
<br>
</br>
<br>
</br>                    batchSet: tests
<br>
</br>
<br>
</br>                });
<br>
</br>
<br>
</br>}</code>
</pre>
<p> </p>
</td>
</tr>
</tbody>
</table>

 

### playmessage

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>USed internally by the message handler of Web Benchmark. Triggered as soon a a message is to be displayed by Web benchmark</td>
</tr>
<tr>
<td>
<strong>Options</strong>
</td>
<td>
<p>
<code>message: “”</code>  : The message to display.</p>
<p>
<code>presentation: DialogBox</code> : How to display the message.</p>
</td>
</tr>
</tbody>
</table>

 

### pullstorage

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>
<p>Load tests from local browser storage into the local repository. Will display a warning prior to loading. This trigger is equal to pressing the “Import from browser storage” button. Automatically fired via 
<code>$.udb.benchmark.saveCurrentTests() </code>.</p>
<p>This event will be deprecated in the future, since browser storage will be deprecated in the future.</p>
</td>
</tr>
</tbody>
</table>

 

### purge

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>Clears the local repository. </td>
</tr>
<tr>
<td>
<strong>Options</strong>
</td>
<td>
<p>
<code>mode:”all”</code> : clear all test data or only clear test run data using 
<code>“runs”</code></p>
<p>
<code>list: []</code>  : deletes a specific test. If no list is provided, all tests are cleared.</p>
</td>
</tr>
</tbody>
</table>

 

### pushmessages

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>Triggered when multiple messages are to be displayed</td>
</tr>
</tbody>
</table>

 

### pushstorage

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>
<p>Store tests into the local browser storage. Triggered as a result of triggering 
<code>“storetest” </code>This trigger is equivalent to pressing the “Export to browser storage” button. </p>
<p>Since browser storage will be deprecated in the future, 
<code>dbimport </code> will be replacement for this event.</p>
</td>
</tr>
<tr>
<td>
<strong>Options</strong>
</td>
<td>
<p>
<code>quiet:true</code> : displays a message as soon as the storage is finished.</p>
</td>
</tr>
</tbody>
</table>

 

### record

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>This is a base event for when you record any type of test action. Also triggered when you press the record button.</td>
</tr>
</tbody>
</table>

 

### recordchange

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>triggered when you record a change event, such as whenever a setValue action is recorded (changing values in a text field for instance).</td>
</tr>
</tbody>
</table>

 

### recordclick

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>triggered when you record a click action.</td>
</tr>
</tbody>
</table>

 

### recordmessage

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>triggered when you record a message dialog display.</td>
</tr>
</tbody>
</table>

 

### recordnavigate

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>triggered when you record a menu page navigation.</td>
</tr>
</tbody>
</table>

 

### recordvariable

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>triggered when you record a variable</td>
</tr>
</tbody>
</table>

 

### remove

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>Triggered when you delete a test action.</td>
</tr>
</tbody>
</table>

 

### report

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>Triggered whenever Web benchmark reports the test results and displays dialog messages, e.g. when a test assertion fails or when the Playback of a test is finished.</td>
</tr>
<tr>
<td>
<strong>Options</strong>
</td>
<td>
<p>
<code>message: []</code> :  the messages to be displayed</p>
<p>
<code>buttons: undefined </code>:Buttons that are made accessible on the dialog.</p>
<p>
<code>func: undefined</code> : a callback function.</p>
<p>
<code>quiet: false</code> : this value matches the Quiet execution web benchmark setting.</p>
</td>
</tr>
<tr>
<td>
<strong>Example</strong>
</td>
<td>
<p>When a test is played, display an additional message about this being a test environment:</p>
<p>
<code>$.udb.benchmark.on("play",function(){</code>
</p>
<p>
<code>$.udb.benchmark.trigger("report",</code>
</p>
<p>
<code>{message:["THIS IS THE TEST ENVIRONMENT"]}</code>
</p>
<p>
<code>)});</code>
</p>
</td>
</tr>
</tbody>
</table>

 

### resume

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>Triggered whenever you press record on an existing test or when you resume an already paused recording by pressing the record button again.</td>
</tr>
<tr>
<td>
<strong>Options</strong>
</td>
<td>
<p>
<code>action: {}</code> : contains the data of the recorded test action.
<br>
</br>
<code>beforeMessages: false</code> : records the action for pushed messages.</p>
</td>
</tr>
</tbody>
</table>

 

### stackevent

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>Used by the web benchmark event profiler.</td>
</tr>
</tbody>
</table>

 

### start

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>Triggered whenever you press record on a new test. If you try to record an existing test, 
<code>resume</code> is fired instead.</td>
</tr>
</tbody>
</table>

 

### stop

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>
<p>Triggered when the playback engine is stopped.</p>
<p>Also part of other event chains, for example when you first enable web benchmark or when you select or store a test.</p>
</td>
</tr>
<tr>
<td>
<strong>Options</strong>
</td>
<td>
<code>paused:false</code> : Playback pauses are implemented via the stop as well using this option. when a playback is paused instead of stopped, the stop event is triggered with
<code> paused:true</code> as option.</td>
</tr>
</tbody>
</table>

 

### storetest

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>Saves a Web Benchmark test. This event is triggered when you press store via the Save button, which stores tests in the current repository. Automatically triggers the
<code>pushstorage</code> event.</td>
</tr>
<tr>
<td>
<strong>Options</strong>
</td>
<td>
<p>
<code>name: ""</code> : the name of the test.</p>
<p>
<code>desc: ""</code> : the full description of the test.</p>
<p>
<code>short: ""</code> : the short description of the test.</p>
<p>
<code>folder: 'default' </code>: specify the test suite to store the current test.</p>
<p>
<code>entry: null</code> : the internal test id.</p>
<p>
<code>quiet: false </code>: disables additional messaging if true.</p>
</td>
</tr>
</tbody>
</table>

 

### testselect

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>
<p>Triggered as soon as you select a test via the dropdown control.</p>
<p>Also part of other event chains, for example when you first enable web benchmark or when you store a test, since those actions result in an initial test selection.</p>
</td>
</tr>
</tbody>
</table>

 

### unstackevent

 


<table>
<tbody>
<tr>
<td>
<strong>Description</strong>
</td>
<td>Used by the web benchmark event profiler.</td>
</tr>
</tbody>
</table>

 

 