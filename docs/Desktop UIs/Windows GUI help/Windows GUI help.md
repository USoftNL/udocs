# Windows GUI help

By default, USoft Developer offers status bar help that displays the help text of the particular column that the end-user clicks on. If no help has been defined for a particular column, the help text of the underlying domain will be displayed. Similarly for menu options, the status bar will display a short description of the nature/purpose. The same text will also be displayed if you choose the (default) What's This? option from the Help menu.

Usually, this help will not be very useful (either because of its limited length, or because it can only be text). Linking an external help file to your application offers far more possibilities for providing information related to the application, or application component.

## External Help File Types

There are two main help file types supported by USoft:

- WinHelp (.HLP extension): Supported by Windows operating systems up to and including Windows XP. This help file format is not supported by Vista or Windows 7.
- Compiled HTML Help (.CHM file extension): Supported by Windows operating systems up to and including Windows 7. We recommend that you use this format.

## How to open a help file

The simplest way of activating help is to define a menu option that open the help file in its appropriate environment.

To open a help file: sse the Windows Designer to add a menu option to the Help menu that performs the following action:

```
HelpRunWinhelp(<help_filename>)
```

> [!NOTE]
> The help file identified by \<help_filename> can be either a WinHelp file (.HLP extension) or a Compiled HTML Help file (.CHM file extension).

By default, the file is searched for in the working directory. If required, specify the path to your help file as well. For example:

```
HelpRunWinhelp('%SystemDir%\help\yourhelp.chm')
```

> [!NOTE]
> References to SystemDir are internally mapped to the version key.