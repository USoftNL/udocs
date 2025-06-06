# pc:return



> [!NOTE]
> This article is about the **pc:return**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:return**

In a number of directives that return XML content, narrows that XML down to a subset of nodes that you want to see as the return value.

*Syntax*

```
<*pc:directive*
     pc:return="*xpath >> node-set*" />
```

The value of **pc:return** is an xpath applied, as a filter, to the directive's output XML.

If this value is an absolute location path, the root node is considered the root node of the return XML. Likewise, if this value is a relative location path, the context node is considered the root node of the return XML. To put this differently, as an example, the outcome of all of the following is identical:

```language-xml
<pc:Directory filepath="c:\temp" pc:return="/" />
<pc:Directory filepath="c:\temp" pc:return="/*" />
<pc:Directory filepath="c:\temp" pc:return="*" />
<pc:Directory filepath="c:\temp" />
```

*Example*

```language-xml
<pc:Directory filepath="c:\temp" pc:return="/Directory/File" />
```

The return value looks like this:

```language-xml
   <File filepath="c:\temp\assets.xml" filename="assets.xml" lastwrite="2019/0215105815" />
   <File filepath="c:\temp\resources.xml" filename="resources.xml" lastwrite="2019/0215105800" />
```

 