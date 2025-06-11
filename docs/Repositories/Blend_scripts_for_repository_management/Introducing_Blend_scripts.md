---
id: Introducing_Blend_scripts
---

# Introducing Blend scripts

**USoft Blend** is a scripting framework that is proprietary to the USoft platform and has a broad range of practical applications. It combines operating system file paths, XML fragments, XPath expressions, and SQL statements to provide a complete and highly expressive tool. You can use USoft Blend to pack, exchange, install, deliver and maintain small and large USoft solutions: from snippets to complete business applications.

USoft Blend is an alternative for conventional command-line scripts (such as Windows PowerShell scripts). PowerShell is easier to learn and use because it is widely documented on the Internet. Blend, on the other hand, is easier for operations that require USoft proprietary routines and other routines that USoft specialises in, such as:

- Generating database tables on the basis of metadata ("create tables”, creapp.exe).
- Generating .CON, .ESI, .UMG and .SMG flat files.
- Publishing, installing and starting services from USoft Service Definer, including web servers for Web Designer pages.
- Publishing Web Designer publications.
- Configuring and starting USoft Rules Services.
- Exporting and importing data between Rules Engine-governed repositories and external XML files.

For those familiar with XSLT, Blend offers tremendous power in the area of set-oriented processing, because most operations can easily be made to iterate over nodes in node sets.

USoft Blend adds to the USoft platform:

- A script processor that interprets commands for standard USoft procedures. These commands may be mixed with more general utility commands such as creating a folder on the file system or running an OS command.
- XSLT 2.0-like features such as dynamic XPath expressions, string manipulations, regular expressions and mathematical functions.
- Convenience functions such as diffs on node sets, file IO functions (path, directory, file, copy, move, zip), date formatting functions, device info functions, Text2XML converters, registry manipulation functions, and a stopwatch.
- The possibility to store string values and XML fragments in variables during script processing. Variable values may be queued, stacked, listed, and contained in dictionaries.
- The possibility for scripts to interact with the user in dialogs and on the console.

USoft Blend may be called from the command line, but equally from a USoft runtime context, for example, from the SQL Command tool of a USoft application.


:::note

USoft Blend is technically a USoft-proprietary XSLT 1.0 application enriched with extension functions programmed in C#. For this reason, USoft Blend incorporates all the expression types and data types valid in XPath 1.0, the expression language embedded in XSLT 1.0, as well as the system of implicit data type conversion implemented in XSLT and XPath.
USoft Blend consists of an XSLT stylesheet with extension elements and a set of extension functions programmed in .NET. The stylesheet processes XML elements in a USoft Blend script as directives (instructions) by calling, through an XSLT template that matches a given directive, one or more of the programmed functions.

:::

## Purposes

USoft Blend is a general-purpose technology but in the practice of USoft projects, it is most frequently encountered in the areas of **repository management** and **continuous delivery**.

Here are some purposes of Blend in the area of repository management:

- Importing, exporting and comparing appdata or metadata via a Rules Engine.
- Cloning a USoft repository in order to obtain a tutorial, demo or test environment.
- Maintaining and initialising test data.

The purpose of Blend in the area of continuous delivery is:

- [Blend deploy scripts](/Continuous_delivery/Blend_deploy_scripts/Blend_deploy_scripts.md).