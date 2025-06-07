---
id: pcSaveVariables
---

# pc:SaveVariables




:::note

This article is about the **pc:SaveVariables**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:SaveVariables**

Saves, to a specified file, a full list of the names and values of variables currently referenced. You can retrieve this information with pc:LoadVariables later.

*Syntax*

```
<pc:SaveVariables 
     pc:filepath="*file-path*" 
     pc:include="*csv-list*" 
     pc:exclude="*csv-list*" 
/>
```

The required **pc:filepath** is a full path pointing at the file in which you want to save the variables.

The optional **pc:include** allows you to specify a subset of variables that you want to save.

The optional **pc:exclude** allows you to specify a subset of variables that are found in the file but that you do NOT want to save.

## Result file

The result file contains an XML document in the "Processing:Command" namespace with a \<pc:Variables> document node and, for each variable, a \<pc:Variable> element with a name attribute that contains the name of the variable, and with the following content:

- For a string variable, a text node representing the current value of the variable.
- For a node set variable, a literal XML fragment representing the current value of the variable.
- For a queue variable, a list of \<Queue> elements containing queued variable values, in the document order in which the values were enqueued.

*Example*

```xml
<pc:assign-string mystring="HelloUniverse"/>
<pc:defs><somexml>Hi</somexml></pc:defs>
<pc:assign-nodeset mydefs="{preceding-sibling::pc:defs/*}"/>
<pc:void select="variable:Enqueue('iamaqueue', 2)"/>
<pc:void select="variable:Enqueue('iamaqueue', 1)"/>
<pc:void select="variable:Enqueue('iamaqueue', 'somestring')"/>
<pc:SaveVariables pc:filepath="c:\temp\output.xml" />
```

Example content of the "c:\\temp\\output.xml" result file is:

```xml
<pc:Variables xmlns:pc="Processing.Command">
    <pc:Variable name="mystring">HelloUniverse</pc:Variable>
    <pc:Variable name="mydefs">
         <somexml>Hi</somexml>
     </pc:Variable>
     <pc:Variable name="iamaqueue">
       <Queue>2</Queue>
       <Queue>1</Queue>
       <Queue>somestring</Queue>
     </pc:Variable>
</pc:Variables>
```

 