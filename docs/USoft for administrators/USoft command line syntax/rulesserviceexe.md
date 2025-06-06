# rulesservice.exe

Starts a USoft Rules Service under the conditions specified.

*Syntax 1*

This syntax uses an equal sign ( = ) between option and value. Each *option=value* pair requires a separate entry (an entry with its own equal sign):

```
> RulesService.exe -*option=value* [-*option=value* ...]
```

*Syntax 2*

This syntax uses a space between *option* and *value*. The name of an option with multiple values needs to appear only once:

```
> rulesservice.exe -*option value value* ... [-*option value value* ...]
```

## Options

The table below lists command line options available for use with the rulesservice.exe command.

|**Option**|**Purpose**|
|--------|--------|
|`-a port`|Specifies which port the Rules Service is to use. May be omitted when a filepath is specified with the **-f** option and the filename ends in *-port*.|
|`-c name`|<p>Specifies a name for the Rules Service configuration.</p><p>The name of the configuration file will be *name* appended with **-port.config**.</p>|
|`-config`|<p>Specifies that only a Rules Service configuration file is to be created, and no Rules Service needs to be started.</p><p>If you use this option, you need to supply a port number.</p>|
|`-exe`  |(Windows only) Indicates that the Rules Service is to be started as a command line process rather than as a Windows service.|
|`-f filepath`|<p>Specifies a filepath that is the location of the Rules Service configuration file.</p><p>If filepath ends in a filename ending in **-port.config**, the -a option may be omitted.</p>|
|`-gc controlling-host`|<p>Specifies which systems are allowed to configure the Rules Service. This can be an IP address or a Windows system name. More than one controlling-host may be listed.</p>> [!TIP]
> **localhost** is always allowed to configure a Rules Service.

|
|`-help` |Displays this information and exits.|
|`-tls`  |Indicates that the Rules Service is to be started in Secure Socket mode. This is the equivalent of setting the "Use TLS" flag in a Rules Service item in USoft Binder.|



## Examples

*Example 1*

```
> RulesService.exe -gc=124.125.126.127 -gc=USNYCUT456 -a=8888
```

*Example 2*

```
> RulesService.exe -gc 124.125.126.127 USNYCUT456 -a 8888
```

 