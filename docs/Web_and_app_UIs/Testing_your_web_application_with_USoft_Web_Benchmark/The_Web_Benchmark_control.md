---
id: The_Web_Benchmark_control
---

# The Web Benchmark control

USoft Web Benchmark is controlled by the **Web Benchmark control**. This control is a ribbon made up of a series of clickable icons and a dropdown list box:

![](./assets/f66cdef4-76bd-43c5-9191-a77e18060c3f.png)

The Web Benchmark control is embedded in the USoft web application that you are testing with USoft Web Benchmark. The application is made up of web pages. The Web Benchmark control is commonly positioned across the top of the browser area that shows the pages.

The icons are grouped in sections. Each section has its own purpose.

### Recording and playback

Recording and playback is associated with the leftmost section of the Web Benchmark control, which has the following icons:

|        |        |
|--------|--------|
|![](./assets/4d93540b-ebeb-450d-87e1-f4d4e322076d.png)

|Reset: Resets the control to its initial state. If a test was being recorded, you will be prompted to either keep it or discard it.|
|![](./assets/f0b69257-c0d6-4d69-b624-66e5f91823b2.png)

|Record:  Starts recording a new test. From the time when you click this icon, every click or value changing action on a USoft control will record one or more actions in the Web Benchmark control.|
|![](./assets/0fdf860b-9074-46a1-9d02-d2c2036edac6.png)

|Play test:  Plays the test currently selected. All actions are executed until all actions have been executed, or a situation is encountered where an action cannot be executed, for example, because the action's target control cannot be found on the page.|
|![](./assets/905d6cdf-7ae7-4429-bc24-82ad14a5fc5e.png)

|Play step:  Plays the next step of the test currently selected. Execution is paused after each action. Some recorded actions (such as messages that were encountered) may not work well here, but you are allowed to skip actions that you wish to ignore.|
|![](./assets/6b584309-93c7-439e-881e-011893eaa157.png)

|Pause:  Pauses the recording of a test. No further actions are recorded or played until the Record icon is clicked once more.|
|![](./assets/cecd666e-918b-4195-9c3f-10f635dd22af.png)

|Stop:  Permanently stops the recording of a test. The recording cannot be resumed after this.|
|![](./assets/c52b5080-63da-43a6-9d3d-38fe2c7988ba.png)

|Invoke:  Inserts a previously saved test as part of the test that is being recorded. All actions of the inserted test will be executed on playback. This feature is useful for reusing simple (short) tests that must be executed very often in other (larger) tests.|
|![](./assets/19093e86-a1a7-4849-8d52-cdd67996ceb3.png)

|Delay:  Adds a fixed delay (in seconds) to your test. Some controls (usually those with external data) may have content that is not immediately available, and may require a test to wait exclusively until this content is displayed. Adding a delay may be necessary in these cases.|
|![](./assets/90ef7598-9b3b-47d0-9d2b-78a3d58510a8.png)

|Variables:  Stores the value of the last value check (input field, title field, record ranges, etc.) in a local variable for this test. This is an advanced feature, to deal with value checks of dynamic values that differ per test execution.|
|![](./assets/f84602dd-390b-476e-949c-32728083e805.png)

|Run script: Executes a JavaScript (and allows you to view its result value). When recording, a Record icon is also present, which allows you to record the script and its result.|
|![](./assets/f9bb4ba9-ed1e-4beb-a658-80f13bc25b21.png)

|Edit:  Displays a list of all actions for the current test, and allows limited editing of these actions. This feature can be accessed during recording of a test as well.|



 

### Performance testing

These icons are relevant for performance testing. They allow you to execute recorded tests multiple times and then inspect the results.

|        |        |
|--------|--------|
|![](./assets/7251d5bb-2d89-409f-9af8-c5bc4eba8885.png)

|Run Profiler:  Executes the current test multiple times. The results are stored as a performance test that can be compared with previous runs.|
|![](./assets/581e91c6-a8f1-4485-8864-9c0d1f048beb.png)

|View runs:  Displays a report of test runs for the currently selected test.|
|![](./assets/16db5745-7971-4a41-8698-fcbb029263ab.png)

|Overview:  Displays an overview of all past test runs, with information on whether or not the last run of each test has succeeded, the error message (reason) on why the last run has failed, the amount of time the test took, and the time when it was last executed. From the overview, you can drill down to more detailed information.|



 

### Test management

These icons allow you to save the most recent test recording by name, to manage the entire set of tests currently loaded, and to manage the settings of the Web Benchmark control itself.

This area has a **Current Test** dropdown list box where you can select the test that you want to play or inspect.

|        |        |
|--------|--------|
|![](./assets/2846c825-b0ba-4182-a04c-494373cb6a6e.png)

|Save:  Saves the current test in the local repository of the Web Benchmark control. You can give the test a name and description here, that you may change later (by saving it again).|
|![](./assets/3faf1bda-2788-4240-a9d4-16f71e8621d2.png)

|Manage tests:  Allows you to manage the collection of tests you stored in the Web Benchmark control. Here you can split your list of tests into groups called test suites, save (export) to file, import from file, or store the current test in the browser’s local storage (if available).|
|![](./assets/d6552b51-ba76-4285-b84c-6065463267cd.png)

|Settings: Allows you to changes settings of the Web Benchmark control. For example, you can set an execution delay here to slow execution if you want it to run at a watchable speed. Several of the options here have their defaults taken from the properties of the Web Benchmark control as determined in USoft Web Designer.|



###  

### Test monitoring

This area allows developers to get information about the current state of the web application.

|        |        |
|--------|--------|
|![](./assets/7ec7be99-e079-4d79-84cd-9ba124ba56a2.png)

|Debug messages: Shows a history of all recent ‘Developer Alert’ messages that your application has displayed. These messages are for debugging purposes only, and only displayed when your Logging Level publication property is set to ‘DEBUG’.|
|![](./assets/2a89fc91-27a7-4001-b15f-6ec4b8a46e1e.png)

|Developer info: Shows the current state of your application. Page information (controls), data sources, manipulation transaction state, Page Engine input (ClientState) document: it can all be viewed here. This is meant as an advanced feature, for developers debugging a web application.|