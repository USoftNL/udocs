# Managing Web Benchmark tests

You can manage recorded tests by clicking **Manage tests:**

![](/api/Web%20and%20app%20UIs/Testing%20your%20web%20application%20with%20USoft%20Web%20Benchmark/assets/31c2de8a-0226-40ce-afb5-3105b366e703.png)

To make tests easier to manage, you can group related tests by placing them in a test suite. In Web Benchmark, each test is always in exactly 1 test suite. Test suites are a simple grouping mechanism that allows you to apply the same operation to all the tests in a test suite.

### Clearing the repository

You can delete all user-defined tests and test suites, leaving only the system-defined "Default" test suite. To clear the repository:

1. Press the "Clear repository" button at the top of the screen.

###  

### Importing from file

You can import tests and test suites that you have stored on file earlier. To import from file:

1. Press the "Import From file" button at the top of the screen.

 

### Exporting the repository to file

You can export the entire repository of tests and test suites to file. The entire repository is exported, regardless of any selection you may have made in the screen. The file can later be re-imported using the Import From File button. To export to file:

1. Press the "Export to file" button at the top of the screen.

 

### Exporting selected tests to file

You can export selected tests to file:

1. In the "Test suites" area on the left, click the test suite from which you want to select tests for export.

2. In the "Tests..." area on the right, select the tests you want to export. Use the checkboxes.

3. At the "Export the selected tests" icon, check "include invoked tests" if you want to include all tests not yet in your selection but invoked by tests in your selection, or uncheck if you want to prevent this.

4. Click the "Export the selected tests" icon.

 

### Importing from browser storage

You can imports all tests and test suites currrently stored in the browser history.

> [!CAUTION]
> Existing tests and test suites with the same name (if any) are silently overwritten.

To import from browser storage:

1. Press the "Import from browser storage" button at the top of the screen.

 

### Exporting to browser storage

You can export all tests and test suites to browser storage. The entire repository is exported, regardless of any selection you may have made in the screen. CAUTION: Web Benchmark tests and test suites already in browser storage (if any) are silently overwritten.Browser history storage space is very limited. It amounts to ~2Mb per domain, and "localhost" is considered a domain by itself. If you keep many tests or large tests, do not store performance test results with them. Export performance test results from the ‘Profiler overview’ dialog instead, and then remove them.

To export to browser storage:

1. Press the "Export to browser storage" button at the top of the screen.

 

### Deleting tests

To delete tests:

1. In the "Test suites" area on the left, click the test suite from which you want to delete tests.

2. In the "Tests..." area on the right, select the tests you want to delete. Use the checkboxes.

3. Click the "Delete the selected tests" icon.

 

### Moving tests to test suites

Each test is in exactly 1 test suite. When you record a new test, it is initially placed in the "Default" test suite. To move tests to a different test suite:

1. In the "Test suites" area on the left, click the test suite that has the test(s) that you want to move to a different test suite.

2. In the "Tests..." area on the right, select the tests you want to move. Use the checkboxes.

3. At the "Move selected tests..." icon, in the dropdown list box, select the test suite that you want to move the selected tests to.

4. Click the "Move selected tests..." icon.

 

### Deleting test suites

To delete a test suite including all the tests it contains:

1. In the "Test suites" area on the left, select the test suite(s) that you want to delete. Use the checkboxes. You cannot delete the "Default" test suite.

2. Click the "Delete the selected test suites" icon.

 

### Adding a new test suite

To add a new test suite:

1. In the "Test suites" area on the left, click the "Add a new test suite" icon.

2. Enter an ID, Name, and Description for the new test suite, then press OK.

You are now ready to move tests to the new test suite if you like. See the "Moving..." section above in this help topic.

 

 