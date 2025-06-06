# pc:ConsoleWrite



> [!NOTE]
> This article is about the **pc:ConsoleWrite**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:ConsoleWrite**

Evaluates XML content and writes the result to the standard output console in real time, that is: when the \<pc:ConsoleWrite> directive is encountered during a USoft Blend script run, which is earlier than the time when script execution completes.

*Syntax*

```
<pc:ConsoleWrite> *xml-content* </pc:ConsoleWrite>
```

*Example*

```language-xml
<pc:ConsoleWrite>Logging in: <pc:value-of select="$logfile"/>...<pc:newline/></pc:ConsoleWrite>
```

The output is only visible when you have a DOS console open, that is, if you are running from the command line. You do not normally see the output when you run from USoft's SQL Command windows, except if you have previously called the internal USCSCONSOLE.OPEN() method.