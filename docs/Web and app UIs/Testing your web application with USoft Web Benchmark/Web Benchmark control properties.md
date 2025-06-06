# Web Benchmark control properties

The Web Benchmark control runs with a number of property settings that determine its runtime behavior.

You can set defaults for some of these properties in Web Designer. When you publish, the Web Benchmark control will have these defaults.

You can then override these defaults in your browser at runtime. Do this by clicking the **Settings** icon:

![](/api/Web%20and%20app%20UIs/Testing%20your%20web%20application%20with%20USoft%20Web%20Benchmark/assets/31a01d84-0fc4-414f-95d1-2f0d1aae8ec2.png)

Settings iconThis opens the Web Benchmark Settings dialog.

### Behaviour properties

The Web Benchmark control has the following Behavior properties:

|**Web Benchmark control Behaviour property**|**Explanation**|
|--------|--------|
|Automatically load definitions from browser storage|Load test definitions located in the browser local storage (if any). Default value is ‘Yes’.|
|Check number of items in dropdown selects|When clicking on an InputControl of type ‘select’, count the number of child items (option elements) and record them as a test action. Default value is ‘Yes’.|
|Check the value for selected fields|When clicking on any InputControl, record that control's current value as a test action. Default value is ‘Yes’.|
|Check total number of records and range|<p>When querying a data source or changing its data set (e.g. with the DataSetNumbersControl), record the current record range and the total number of records for the data source as a test action. Default value is ‘Yes’.</p>> [!NOTE]
> This option should be disabled if the associated controls (RecordSetRangeControl and TotalNumberOfRecordsControl) are deleted on the page.

<p> </p>|
|Initial Definition File|<p>A local (or external) XML file with test definitions that are automatically loaded when your web application is opened in the browser. This XML file must be a file that was created by a test export action earlier in the “Manage Tests” dialog, which can be accessed by clicking the **Manage tests** icon:</p>![](/api/Web%20and%20app%20UIs/Testing%20your%20web%20application%20with%20USoft%20Web%20Benchmark/assets/02b1f12a-42fe-4a25-a80a-f2e9bf63a66f.png)

Manage Tests icon<p> </p>|



###  

### Profiler properties

The Web Benchmark control has the following Profiler properties:

|**Web Benchmark control Profiler property**|**Explanation**|
|--------|--------|
|Default number of times to profile|<p>The suggested default number of times that a test is executed when the **Delay** icon is clicked:</p>![](/api/Web%20and%20app%20UIs/Testing%20your%20web%20application%20with%20USoft%20Web%20Benchmark/assets/8e1da928-8abb-4f7f-8512-6f7f9ed64540.png)

Delay icon<p>The default value is 3, which means that a performance test runs 3 profiles of a single test by default.</p>|
|Display events profile|Show the event execution profiles and events per user action in the profiler test details overview. The default value is ‘Yes’.|
|Display individual run times on overview|Show in the profile overview the amount of time each action execution has taken. The default value is ‘Yes’.|
|Display overview|Show in the profile overview the amount of time each action execution has taken The default value is ‘Yes’.|