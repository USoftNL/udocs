---
id: invoke
---

# invoke

**See also**

- [Web Benchmark recordable actions](/Web_and_app_UIs/Web_Benchmark_recordable_actions)

The **invoke** recordable action provides the usage of subtests by making it possible to call the execution of some subtest from the execution of an embedding (invoking) test. Short frequently used tests can be recorded as normal tests, and then be invoked as subtests.

Invokes within invokes are allowed, but looping is not allowed: a test must end at some point. If you add an invoke action with the **Invoke** icon:

![](./assets/4a6d96d0-8cbd-4436-bbdb-6019b0f55839.png)

then Web Benchmark checks that loops do not occur, but by changing invoked test names manually later, you could still cause a loop to occur. Loops will probably cause the test execution to crash or to hang, so this is not recommended.

The following property is in scope for the **invoke** recordable action:

|**Property**|**Editable?**|**Explanation**|
|--------|--------|--------|
|Test name|Yes     |The name of the test to be invoked.|




:::note

If the invoked test requires you to pass input parameter values, these values must be entered as part of this action, or else the playback engine will report them as missing.

:::

 