---
id: Guide_to_Blend_debugging
---

# Guide to Blend debugging

## Manual debugging

In practice, the most common way to debug a Blend script is simply to insert temporary statements that provide messages or output for yourself as a developer to inspect. When you are done debugging, you remove these statements.
To write output to the console during script execution, call:

```xml
<pc:ConsoleWrite>
```

To output data elements as a response to the console, perhaps in order to see whether certain data are available, for string data, call:

```xml
<pc:value-of>
```

and, for node sets, call:

```xml
<pc:copy-of>
```

To send this type of debug information to a file instead of the console, redirect it:

```
> *usoft-bindir*\ublendit.exe *script-file* >log.xml
```

When debugging long scripts, you can temporarily skip sections by commenting them out:

```xml
<!--  -->
```

but it is often more practical to debug code blocks as stand-alone scripts and paste the result back into the original script when you are satisfied with it. To debug longer sections, clone the entire Blend script as a second .XML file, remove from this second script all the sections you are not interested in, debug what remains, and paste the debugged code back into the original.

## Tracemode tool

When you run a Blend script with the tracemode option:

```
> *usoft-bindir*\ublendit.exe *script-file* tracemode
```

a browser-based debugging tool is presented. This tool allows you to inspect script processing in a number of ways. For example, this tool allows you to:

- Expand and collapse script sections.
- Inspect variable values by hovering a variable placeholder.

After use, if you want to re-run the script, you must remember to first close the browser window created by **tracemode**.

## Detecting obsolete code

You can get warnings that you are using Blend commands that are either obsolete or deprecated. Add obsoleted=true when you give the command:

```
> *usoft-bindir*\ublendit.exe *script-file* obsoleted=true
```

This causes the following type of warning to appear on the console:

```
pc:assign is obsoleted. Use pc:assign-string
```

 