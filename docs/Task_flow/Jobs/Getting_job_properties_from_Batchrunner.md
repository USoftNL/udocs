---
id: Getting_job_properties_from_Batchrunner
---

# Getting job properties from Batchrunner

You can get a runtime property of a batch job currently being executed from the Batchrunner component.

This type of call returns a runtime property of the batch job currently being executed.

*Syntax*

```sql
INVOKE     BatchRunner.GetJobProperty WITH
SELECT     { 
             data_directory
           | task:data_directory 
           | task:filename
           | task:set:filename
           | jobname
           | inputset
           | outputset 
}

```

The optional parameter that corresponds to the information you want to retrieve must be passed.

*Example*

```sql
INVOKE     BatchRunner.GetJobProperty WITH
SELECT     CURRENT_ACCOUNT:INPUT_SET_1:filename

```

## Parameters

|**Parameter**|**Returns**|
|--------|--------|
|*data_directory*|The data directory for the job.|
|*task*:*data_directory*|The data directory for the specified *task.*|
|*task*:*filename*|The filename for the *task*.|
|*task*:*set*:*filename*|The filename for the export task set if *task* is an export task.The filename for the driving set if *task* is an import task.|
|*jobname*|The name of the job being executed.|
|*inputset*|The name of the Input Parameter Set of the job being executed.|
|*outputset*|The name of the Output Parameter Set of the job being executed.|



 