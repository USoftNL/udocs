---
id: Executing_a_Job_from_the_Command_Line
---

# Executing a Job from the Command Line

To execute a job from the command line, call **runbatch.exe** with the appropriate options:

```
runbatch.exe -database-type -database database-name {-ddfile | }
-app application-name -u user-name -pw password -exe "job( job-name, parameter=value, ... )"

```

*Example*

```
runbatch.exe –oracle –database PROD –ddfile –app MYAPP –u JOHN
–pw secrid –exe "job(EXP_PERSON,INS_AFTER=01-APR-2001)"

```

In this example:

- The application tables are stored in an Oracle database with name PROD.

- **-ddfile –app MYAPP** specifies that the application definitions for the MYAPP application are read from the "MYAPP.con" flat file, instead of from repository.

- The EXP_PERSON job is executed, with the job input parameter with name INS_AFTER set to 01-APR-2001.

## Command line options for RUNBATCH.EXE

Click [here](/docs/USoft_for_administrators/USoft_command_line_syntax/runbatchexe.md) for command line options of the **runbatch.exe** command.