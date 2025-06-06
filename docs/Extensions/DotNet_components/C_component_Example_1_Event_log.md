---
id: C_component_Example_1_Event_log
---

# C# component Example 1: Event log

This example shows how you define a .NET component that writes to a Windows event log.
1.    In USoft Definer, from the menu, choose Define, RDMI, dotNet Components, C# Components from the Define menu. The "C#t Components" window opens.
2.    Set Name = EVENTLOG.
3.    In the Program Source field, provide the source code of the component:

```language-cs
using System;
using System.Text;
using System.Diagnostics;

class EVENTLOG
{
    public static void write(String message)
    {
        EventLog log = new EventLog();
        log.Log = "USoft";
        log.Source = "RDMI";
        log.WriteEntry(message);
        log.Close();
    }
}
```

4. Set Assembly References =

```
System.dll 
```

This field contains the .NET framework DLL names of libraries referenced by the code above. In this case the System library is referenced which resides in System.dll in the .NET framework installation folder. All the types that you are using in a C# program are defined in assemblies. Add a reference to the assembly that you use in the Assembly Reference field. If there are multiple assembly references use a semicolon (;) as a separator between the assembly names.

> [!NOTE]
> To ensure that the C# compiler can find the assembly DLLs, you must add the path of the assemblies you use to the system path (in both development and production environments). If you are working with Visual Studio you can find this path by right clicking on the assembly reference and then choosing Properties from the context menu. The Path property contains the path and the name of the assembly. If the assembly DLL is in the USoft bin directory you do not have to add that path to the system path.

5. Press Commit. USoft compiles this code.

6. Press the Check button. See that methods and parameters have been generated. To see this, click in the Method field on the Methods tab at the bottom of the window, and scroll down. A constructor method (here, with name EVENTLOG) may or may not be apparent. In addition, a method with name WRITE and 1 parameter has been generated.