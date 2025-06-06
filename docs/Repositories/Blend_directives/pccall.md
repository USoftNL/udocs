---
id: pccall
---

# pc:call



> [!NOTE]
> This article is about the **pc:call**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:call**

Executes processing instructions represented by nodes located in a different script file, or in a different part of the current script file. The result is the same as when these nodes are passed to **ublendit.exe** on the command line, or to **select uscsxsl.blend** in a SQL command context.

This directive is a synonym of [pc:blend](/docs/Repositories/Blend%20directives/pcblend.md). Go to [pc:blend](/docs/Repositories/Blend%20directives/pcblend.md) for more information. The choice between pc:call and pc:blend is a matter of personal preference.

*Syntax*

```language-xml
<pc:call
  {
    pc:filepath = "*file-path*" |
    pc:xpath = "*root-xpath* >> *node-set*" |
    pc:id = "*id*" |
    *embedded-xml*
  }
  [ *parameter-list* ]
  [ pc:samecontext="{true|yes}" ]
/>

*root-xpath*  ::=  /*xpath*
*parameter-list*  ::=  variable = "*value*" ...	

```