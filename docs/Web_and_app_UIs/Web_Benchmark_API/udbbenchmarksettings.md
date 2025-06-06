---
id: udbbenchmarksettings
---

# $.udb.benchmark.settings



> [!WARNING]
> This article is under construction.

## **$.udb.benchmark.settings**

Provides access to USoft [Web Benchmark settings](/docs/Web%20and%20app%20UIs/Testing%20your%20web%20application%20with%20USoft%20Web%20Benchmark/Web%20Benchmark%20settings.md). For each resource, refer to the corresponding Web benchmark setting highlighted in the descriptions for full details.

Typical usage of this property would be whenever you need to automatically adjust settings (e.g. modify playback speed for specific tests) during test playback . You can use script execution actions to make these adjustments without requiring GUI interaction. 

> [!WARNING]
> When editing the settings , use $.udb.benchmark.saveSettings() to store your settings.

The following resources are exposed.

### $.udb.benchmark.settings.DEBUG

Non-editable property used to indicate whether web benchmark is running in debug mode. This property is set by $.udb.benchmark.debug.

Type: boolean

Default: false

### $.udb.benchmark.settings.DELAY

Sets "Test Playback speed (delay)".

Type: number

Possible values: 1-5000

Default: 5 ms

### $.udb.benchmark.settings.EXPORT_NAME

Sets "Default file name for export".

Type: string

Default: TestSuite

### $.udb.benchmark.settings.MAX_IDLE_TIME

Sets "Max idle time per action".

Type: number

Possible values: 1-5000

Default: 20 ms

### $.udb.benchmark.settings.MAX_LENGTH_SHORT_DESC

Sets the maximum allowable length of the Short description field when saving tests.

Type: string

Default: 40 characters

### $.udb.benchmark.settings.MIN_DELAY

A threshold that limits the value that can be set for the DELAY option.

Type: number

Possible values: 1-5000

Default: 5 ms

### $.udb.benchmark.settings.RERUN_COUNT

Sets "After profile run, retry failed tests".

Type: number

Possible values: 0-9999

Default: 0

### $.udb.benchmark.settings.clearVariables

Sets the "Clear variables at each new test execution" flag.

Type: boolean

Default value: true

### $.udb.benchmark.settings.debugMsg

Sets "Display debug messages in browser console".

Type: boolean

Default value: true

### $.udb.benchmark.settings.defaultFolder

Sets "Default storage test suite". Can be any name.

Type: string

Default value: "default"

### $.udb.benchmark.settings.failAssert

Sets "Test fails on assertion mismatches".

Type: string

Possible values: "always", "never"

Default value: "always"

### $.udb.benchmark.settings.failScript

Sets "Test fails on script result mismatches".

Type: string

Possible values: "always", "never", "undefined"

Default value: "always"

### $.udb.benchmark.settings.flags.checkRanges

Sets "Check total number of records and range".

Type: boolean

Default value: true

### $.udb.benchmark.settings.flags.checkSelects

Sets "Check number of items in dropdown selects".

Type: boolean

Default value: true

### $.udb.benchmark.settings.flags.checkValues

Automatically checks the value for clicked fields.

Type: boolean

Default value: true

### $.udb.benchmark.settings.flags.loadStorage

Specifies whether or not you prefer to automatically load the test definitions from the browser's local storage, if available. This property can be set via the Web Designer BenchmarkControl.

Type: boolean

Default value: true

### $.udb.benchmark.settings.perf.profileTimes

Sets "Default # of times to run".

Type: number

Default value: 1

### $.udb.benchmark.settings.perf.showArea

Sets "Show notification area during batch".

Type: boolean

Default value: true>

### $.udb.benchmark.settings.perf.showEvents

Sets "Display events profile".

Type: boolean

Default value: true

### $.udb.benchmark.settings.perf.showLogs

Sets "Display message log".

Type: boolean

Default value: false

### $.udb.benchmark.settings.perf.showRunTimes

Sets "Display run times per individual action/event".

Type: boolean

Default value: true

### $.udb.benchmark.settings.pushStorage

Sets "Test and result storage method".

Type: string

Possible values: "indexeddb", "storage", "none"

Default value: "indexeddb"

### $.udb.benchmark.settings.quiet

Sets the quiet execution (no report) option.

Type: boolean

Default value: false