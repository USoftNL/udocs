---
id: Learning_USoft_Blend_for_repository_management
---

# Learning USoft Blend for repository management

This section is for developers who want to learn how to write and use USoft Blend scripts.

To get started with USoft Blend, all you need is an installation of the USoft platform.

## Your first "Hello, world!” script

1.    Click the Windows Start button, then type "cmd".
2.    Right-mouse click on the "Command Prompt - Desktop app" item and choose Run As Administrator.
3.    In the Administrator: Command Line window, at the prompt, type:

```
> cd *working-dir*
```

    where *working-dir* is an unimportant lab directory where you can try out new things, for example:

```
> cd c:\tryout\blend
```

4.    Using a text editor, create a text file in the try-out directory you have chosen. Give the file an appropriate name, for example, blend.xml, and make sure that its contents read like this:

```language-xml
<example xmlns:pc="Processing.Command" pc:hideme="false">
  <pc:ConsoleWrite>Hello World!</pc:ConsoleWrite>
</example>
```

5.    Find out where your USoft BIN dir is. This is the \\BIN64 subdirectory of your USoft installation directory, or the \\BIN subdirectory if you have a 32-bit installation.
6.    In the "Administrator: Command Line" window, at the prompt, type:

```
c:\tryout\blend> *usoft-bindir*\ublendit.exe blend.xml
```

Press Enter. This passes your blend.xml script to the USoft Blend processor.
7.    See that the result is:

```language-xml
<example xmlns:pc="Processing.Command" pc:hideme="false">
     Hello World!
</example>
```

8.    In the script, set pc:hideme="true" instead of  pc:hideme="false". Save work.
9.    Re-run the script: select the "Administrator:Command Line" window again, press the Arrow-Up key, which brings your most recently used command back to the prompt, and then press Enter. See that the result is:

```
Hello World!
```

## Your first useful script

Now on to a more useful task. This example automates the deletion of a file from your file system. In the same way, you can have Blend scripts that connect to USoft applications, create or drop tables or even entire databases, import data, perform file system and other OS operations, export and zip your application tables, compare your repositories...
1.    Click the Windows Start button, then type "cmd".
2.    Right-mouse click on the "Command Prompt - Desktop app" item and choose Run As Administrator.
3.    In the Administrator: Command Line window, at the prompt, type:

```
> cd *working-dir*
```

    where *working-dir* is an unimportant lab directory where you can try out new things, for example:

```
> cd c:\tryout\blend
```

4.    Using a text editor, create a text file in the try-out directory you have chosen. Give the file an appropriate name, for example, blend.xml, and make sure that its contents read like this:

```language-xml
<example xmlns:pc="Processing.Command">
   <pc:assign workingdir="{directories:Get()}"/>
   <pc:assign deletefile="{path:Combine($workingdir,'deletethis.txt')}"/>
   <pc:DeleteFile source="{$deletefile}"/>
</example>
```

5.    Create some dummy text file in the try-out directory. Give the file the name of **deletethis.txt**. This file does not need to have any content.
6.    Find out where your USoft BIN dir is. This is the \\BIN64 subdirectory of your USoft installation directory, or the \\BIN subdirectory if you have a 32-bit installation.
7.    In the Administrator: Command Line window, at the prompt, type:

```
c:\tryout\blend> *usoft-bindir*\ublendit.exe blend.xml
```

    Press Enter. This passes your blend.xml script to the USoft Blend processor.
8.    See that the result on the console is:

```language-xml
<example xmlns:pc="Processing.Command" pc:hideme="false">
   <!--files:DeleteFile(c:\myworkingdir\deletethis.txt) -->
</example>
```

9.    See that the result in the file system is that the **deletethis.txt** file has been removed.

## Next steps for learning more USoft Blend

Developers can have many different purposes for USoft Blend, and many different kinds of background knowledge and coding habits with scripting (eg., Powershell scripting) and XSLT. It is hard to offer a formal tutorial that will please everybody. Instead, here are some pointers for wayfinding that hopefully can help you compose your own optimal learning trajectory.

### Understanding directives, functions, utilities and resources

Blend is made up of **directives, functions, resources,** and **utilities.** For a beginner, it is helpful to understand the difference between these 4.

Directives and functions are the "commands”: the script language. You need to know about them, or be able to look them up, in order to write your own Blend scripts. Resources are snippets of sample code that you can use as a starting point: copy and tweak them to your own needs. Utilities are just ready-made pieces of software that you use as-is: their relationship with Blend is that USoft created them as Blend implementations. More explanation is [here](/docs/Repositories/Blend%20scripts%20for%20repository%20management/Understanding%20USoft%20Blend.md).

If you like to learn by grasping concepts, click [here](/docs/Repositories/Blend%20scripts%20for%20repository%20management/Understanding%20USoft%20Blend.md), and read that entire article through to the end.

If you like to learn by experimenting, use the entrypoints given below to find directives, functions, resources and utilities, and to use them in a sandbox situation.

### Tips and tricks for USoft Blend beginners

Once you have a basic grasp of USoft Blend, make sure you read the [Tips and tricks for USoft Blend beginners](/docs/Repositories/Blend%20scripts%20for%20repository%20management/Tips%20and%20tricks%20for%20USoft%20Blend%20beginners.md) article. This will help you avoid typical problems that many beginners have.

### Reference information

Many people find it easy to read code examples along with explanatory text and then copy the code and test and tweak it to their needs. For this type of per-item reference information, go to:

[Blend directives](/docs/Repositories/Blend%20directives)

[Blend attributes](/docs/Repositories/Blend%20attributes)

[Blend functions](/docs/Repositories/Blend%20functions)

### Experimenting from the command line

Some people prefer to explore, browse and run code from the command line immediately. You can try, for example:

For experimenting with directives:

```
> *usoft-bindir*\ublendit.exe pc

> *usoft-bindir*\ublendit.exe pc p=drop

> *usoft-bindir*\ublendit.exe pc pc:DropDatabase

> *usoft-bindir*\ublendit.exe call:pc:DropDatabase
```

For experimenting with functions:

```
> *usoft-bindir*\ublendit.exe functions

> *usoft-bindir*\ublendit.exe functions ns=strings

> *usoft-bindir*\ublendit.exe functions p=title
```

For experimenting with resources:

```
> *usoft-bindir*\ublendit.exe resources

> *usoft-bindir*\ublendit.exe getresource:AskValue > AskValue.xml

> *usoft-bindir*\ublendit.exe resource:AskValue
```

For experimenting with utilities:

```
> *usoft-bindir*\ublendit.exe

> *usoft-bindir*\ublendit.exe help

> *usoft-bindir*\ublendit.exe newudevelop
```

> [!TIP]
> *usoft-bindir* is a placeholder for the USoft “\\BIN” subdirectory of your USoft installation:

### Delivery Manager : example deploy scripts

If you use Blend in a context of delivery, and you release, configure and deploy your USoft application with USoft Delivery Manager, then a good place to start is by trying out the built-in example deploy scripts. Delivery Manager has a sample deploy script for each type of deliverable, that you can tweak to your team's needs.

An explanation of Blend deploy scripts is [here](/docs/Continuous%20delivery/Blend%20deploy%20scripts/Blend%20deploy%20scripts.md).