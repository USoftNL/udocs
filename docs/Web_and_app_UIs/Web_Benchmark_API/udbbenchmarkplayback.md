---
id: udbbenchmarkplayback
---

# $.udb.benchmark.playback()

:::warning

This article is under construction.

:::

## **\$.udb.benchmark.playback()**

This function exposes the Web benchmark playback engine API.

The [$.udb.benchmark.rec](#) object exposes Web benchmark recording engine. Unlike $.udb.benchmark.rec , this object is of type function instead of an object type.

### actions: `{..}`

|        |        |
|--------|--------|
|**Description**|<p>All [recordable actions](/docs/Web_and_app_UIs/Web_Benchmark_recordable_actions) in Web Benchmark are processed via this object during playback. The following actions are accessed as functions with the action being passed as parameter:</p><p>- `assert` : `*ƒ*`<br/>- `click` : `*ƒ*`<br/>- `comment` : `*ƒ*`<br/>- `delay` :`*ƒ*`<br/>- `gotoDataSet` :`*ƒ*`<br/>- `invoke` :`*ƒ*`<br/>- `message` :`*ƒ*`<br/>- `navigateMenu` :`*ƒ*`<br/>- `navigateToLookup` :`*ƒ*`<br/>- `script` :`*ƒ*`<br/>- `setValue` :`*ƒ*`<br/>- `test` :`*ƒ*`<br/>- `variable` :`*ƒ*`<br/></p>|
|**Example**|<p> </p>|

### clear: `*ƒ ()*`

|        |        |
|--------|--------|
|**Description**|<p>Clears the profile actions, events and logs of the \$.udb.benchmark.perf object.</p>|

### execute: `*ƒ (singleAction)*`

|        |        |
|--------|--------|
|**Description**|<p>Called as soon as the play event is triggered.</p>|
|**Option**|<p>`singleAction: false` : this option is `true` is the play step button is pressed instead of play.</p>|

### finish: `*ƒ (testId, skip)*`

|        |        |
|--------|--------|
|**Description**|<p>Called as soon as the last </p>|
|**Example**|<p> </p>|

### getSelectorString: *ƒ (rec)*

|        |        |
|--------|--------|
|**Description**|<p> </p>|
|**Example**|<p> </p>|

### highlight: *ƒ ($el)*

|        |        |
|--------|--------|
|**Description**|<p> </p>|
|**Example**|<p> </p>|

### next: *ƒ (singleAction)*

|        |        |
|--------|--------|
|**Description**|<p> </p>|
|**Example**|<p> </p>|

### play: *ƒ (singleAction)*

|        |        |
|--------|--------|
|**Description**|<p> </p>|
|**Example**|<p> </p>|

### startTest: *ƒ (singleAction)*

|        |        |
|--------|--------|
|**Description**|<p> </p>|
|**Example**|<p> </p>|

**testWaitConditions: ƒ (rec, singleAction)**

|        |        |
|--------|--------|
|**Description**|<p> </p>|
|**Example**|<p> </p>|

**trimMessage: ƒ (msg)**

|        |        |
|--------|--------|
|**Description**|<p>Utility function.</p>|
|**Example**|<p> </p>|

### waitForTest: *ƒ (singleAction)*

|        |        |
|--------|--------|
|**Description**|<p> </p>|
|**Example**|<p> </p>|
