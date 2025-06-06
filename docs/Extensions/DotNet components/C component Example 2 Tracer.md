# C# component Example 2: Tracer

Microsoft supplies debugging tools under the name of Sysinternals at the following URL:

```
http://technet.microsoft.com/en-us/sysinternals/default
```

You can download a tool named **dbgview.exe** from this location. You can use this tool to catch trace information from a .Net application used in a USoft application.

The following example illustrates how you could make use of dbgview.exe.

1. Download and install dbgview.exe.

2. Create a file with the extension .cs, e.g. myTrace.cs.

3. Type the following code into the myTrace.cs file:

```language-cs
#define TRACE
using System;
using System.Diagnostics;

class TRACE
{
    public static void write( String message )
    {
        Trace.AutoFlush = true;
        Trace.Indent();
        Trace.WriteLine( message);
        Trace.Unindent();
        Trace.Close();
    }
}
```

4. In USoft Definer, create a new DotNet Component named TRACE

5. Provide the full path and filename of the file created in step 2 as the Program Source, e.g. C:\\Program Files\\myCode\\myTrace.cs

6. Specify the Assembly reference: System.dll

7. Save and check.

8. Start dbgview.exe from Sysinternals.

9. Start the USoft application.

10.Execute the following command in the SQL Command Dialog Box:

```
SELECT TRACE.WRITE( ‘Testing C# trace’ );
```

The listing in dbgview.exe will show the message.