---
id: Job_logging
---

# Job logging

### Log files

When a job executes, it produces a log file. This log file is named by default:

```
job-name timestamp .log

```

```
timestamp  :=  HHMMSSLL

```

where HHMMSSLL is the time at which the job was executed (hours, minutes, seconds, and milliseconds).

An example of logfile content is:

```
Jun 23 16:07:18 2007: Information: Started batch

```

```
Jun 23 16:07:19 2007: Information: Starting job "MARTYN3".

```

```
Jun 23 16:07:21 2007: Information: Ended job "MARTYN3".

```

```
Jun 23 16:07:21 2007: Information: Batch finished normally

```

### Log files, location

Log files are created by default in the log directory that was specified during the installation of the USoft product set and may be queried by the statement

```
SELECT   RulesEngine.GetProperty( 'USoftLogDir' )

```

To use a different log file name or log file directory (or both), use the -logfile predefined parameter. If jobs are invoked from within other jobs,and they are invoked using the same log file name in their calls, the output of all these jobs is appended to the same file. If the names are different, and no path is specified, the log file is created in the same folder as the previous file that was created.

If a log file with the specified name and location already exists, logging information will be appended to existing file content. You can specify that you want to overwrite the existing log file. Use the -wlogifle predefined parameter.

### Log levels

There are three log levels for log files produced by job execution: Information, Error, and No Logging. The default log level of all batch jobs can be controlled using the Batch_Loglevel deployment configuration setting in the Authorizer. RunBatch.exe, client server GUI and Rules Services each have their own set of deployment configuration settings. Jobs running in each of these contexts respond to the log level setting that applies to the context.