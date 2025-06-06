# pc:GetVariables



> [!NOTE]
> This article is about the **pc:GetVariables**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:GetVariables**

Returns a full list of the names and values of variables currently referenced.

*Syntax*

```
<pc:GetVariables />
```

Returns an XML document in the "Processing:Command" namespace with a \<pc:Variables> document node and, for each variable, a \<pc:Variable> element with a name attribute that contains the name of the variable, and with the following content:

- For a string variable, a text node representing the current value of the variable.
- For a node set variable, a literal XML fragment representing the current value of the variable.
- For a queue variable, a list of \<Queue> elements containing queued variable values, in the document order in which the values were enqueued.

*Example*

```language-xml
<pc:assign-string mystring="HelloUniverse"/>
<pc:defs><somexml>Hi</somexml></pc:defs>
<pc:assign-nodeset mydefs="{preceding-sibling::pc:defs/*}"/>
<pc:void select="variable:Enqueue('iamaqueue', 2)"/>
<pc:void select="variable:Enqueue('iamaqueue', 1)"/>
<pc:void select="variable:Enqueue('iamaqueue', 'somestring')"/>
<pc:GetVariables/>
```

An example result value is:

```language-xml
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

 