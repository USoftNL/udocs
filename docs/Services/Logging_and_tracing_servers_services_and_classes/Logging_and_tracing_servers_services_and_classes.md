---
id: Logging_and_tracing_servers_services_and_classes
---

# Logging and tracing servers, services and classes

Log messages and trace information are important elements in problem diagnosis. USoft provides log and trace possibilities on multiple objects and different levels.

## Log level

Servers, services and classes may have their own level of logging. Whenever a message is added to the log, the message is logged with a certain level. This level determines how important the message is. In the table below, each next level includes the log activity of the previous level:

|        |        |
|--------|--------|
|None    |No log is created.|
|Fatal   |Only fatal error conditions are logged. These conditions may cause the application to abort.|
|Error   |Error events that still allow the application to continue, are also logged.|
|Warnings|Warnings about potential problems are also logged.|
|Information|General informational messages are also logged. These messages provide less detailed or more important information than debug messages, and are of interest to non-developers.|
|Debug   |Debug messages are also logged. These messages are of interest to those debugging or troubleshooting the solution. Debug message are more important than trace messages. They are possibly only meaningful to developers.|
|Trace   |Trace messages are logged. These are very low-level debugging messages for troubleshooting, that give for example the exact point where the execution thread is.|



## Sources of logged messages

Messages in log files for servers, services and classes may be written as a result of:

- The runtime activity of the Services Framework.
- The developer of the class or service including log commands.

Messages produced by the runtime Services Framework are only logged at one of the 4 levels in the table below. The **Debug** level is reserved for the developer of the services. This enables the developer to add his own debug information without getting the “noise” from the runtime Services Framework. Of course, a service developer may want to use other log levels as well. Go to the next section to read how, as a developer, you can add your own log messages.

The table describes, for each log level, the situation in which messages come from the runtime Services Framework:

|        |        |
|--------|--------|
|Error   |Messages are logged when an error happens in the Services Framework as a result of a problem with a service or class implementation. For example, the fact that a connection with the Rules Service cannot be made when the implementation of a method attempts to execute a SQL Statement.|
|Warnings|Messages are logged when the Services Framework detects a call that might lead to potential errors. For example when a statements returns multiple rows, but the implementation is only asking for one row instead of using structure arrays.|
|Information|Messages are logged that qualify as information-level messages. These are one-time messages. For example, a message that the server starts, that resources that are loaded at startup, that the server stops.|
|Trace   |Messages are logged by the runtime Services Framework to help the developer of a service debug her work. For example, a message reporting on the SQL statement being executed, the parameters sent to the statement, or the connection that was used to execute a statement.|



## Adding your own log messages

As a developer, you can add log activity when you determine the Implementation of a method.

To add your own messages to a log file, you must create in the Implementation of a method a Logger object, and then call one of the following methods: fatal, error, warn, info, debug or trace.

*Example*

```language-java
Logger log = Logger.getLogger(this.getClass()); /* this will create a logger for the current class */
log.debug("<your debug message>");
```

> [!NOTE]
> : The Services Framework uses the Apache log4j Java-based logging utility.

## Accessing log information

When a server, services or classes have a logging level defined, different log files are created in the

```
<publication folder of the server>/log
```

folder.

The "UService.log" file contains all the server, services or classes messages.

Classes and services may have their own log level. In this case, the messages for the specific class or service are logged in a "\<class name>".log file.

Another way to access logged information is to set the Allow browsing of Logs server attribute. This attribute is on the Administration tab of the Servers window or tab. If you do that, when the server is running, you may browse the log files at `<server base URI /docs/Logging.html`.