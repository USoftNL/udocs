# Job rights

A **job right** is the right for a runtime user to execute (call) a job defined in USoft Definer.
Conceptually, a table right is a unique combination of:

- The **role** that has the job right,
- The **job** that the job right is about.

The job right is expressed by setting, for this combination:

- A **scope** value (Foreground-and-Background, Background-only, or None).

## Job foreground scope

All job rights have an understood access type, which could be named Execute.
In job rights, **foreground scope** has the following meaning:

|**Access type**|**Meaning of Job Foreground Scope**|
|--------|--------|
|Execute |<p>The right to execute the job by actually selecting and naming it:</p><p>- from a USoft Binder file when you execute a Batch Runner item for which you have declared the Job Name (and any input parameters)<br/>- in SQL Command by executing an				`invoke batchrunner.job-name`				command,<br/>- in a REST API call when you call a job by using the job name,<br/>- on the command line when running the				`runbatch.exe`				command for the job.<br/></p>|



## Job background scope

All job rights have an understood access type, which could be named Execute.
In job rights, **background scope** has the following meaning:

|**Access type**|**Meaning of Job Background Scope**|
|--------|--------|
|Execute |<p>The right to perform some user action that indirectly triggers execution of the job, without the job name being apparent. This occurs for example when:</p><p>- A user pushes a button in a UI and the button action is a script executing the job;<br/>- A user calls a different job that executes the job as a subjob (as a Job Task);<br/>- A user calls a different job that executes the job through				`invoke batchrunner.job-name`				in a SQL task.<br/></p>|



## How to define a job right

> [!TIP]
> When defining job rights, be aware of dependencies between access rights. For example, if you define access to a job that itself calls other jobs, also think of access to those other jobs. To some extent, USoft Definer helps you by implementing dependencies automatically. For dependencies, see "Understanding roles and access rights”.

To define a job right for a role:
1.    Choose Define, Roles from the USoft Definer menu.
2.    If the role already exists, retrieve the record for the role. If the role is new, type the role name in the Role field, save, then press F5 (Refresh). Click the Job Rights tab to see the jobs listed.
    You can see that by default, all the Job Rights have the value 'Default'. This value represents the scope setting for "Default Job Scope" in the upper part of the window.
    By default, "Default Job Scope" has the "Foreground-and-background" scope. All this means that by default, a role is allowed to execute all the jobs defined in the application.
3.    If this is OK, you are done. If you want to restrict job rights in some way, you now have a choice.
    If you want to make the same settings for all the jobs, or nearly all the jobs, then change the value of "Default Job Scope" at role-level.
If you want to make a setting that is specific to one job, or only to a small group of jobs, then leave "Default Job Scope" alone. Instead, make settings on the Job Rights tab for individual jobs.

 

 

 