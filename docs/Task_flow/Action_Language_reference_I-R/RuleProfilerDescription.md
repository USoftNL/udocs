---
id: RuleProfilerDescription
---

# RuleProfilerDescription()




:::note

This article is about the **RuleProfilerDescription** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **RuleProfilerDescription()**

Adds or changes the description of the currently active profiler session. The purpose of this action is to enable stand-alone USoft BenchMark profiling during a batch job. Calling this action is only effective if the profiler has been started.

*Syntax*

```
RuleProfilerDescription( *description* )
```

The required *description* is the description of the currently active profiler session.