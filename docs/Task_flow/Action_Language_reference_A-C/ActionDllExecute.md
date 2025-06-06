---
id: ActionDllExecute
---

# ActionDllExecute()



> [!NOTE]
> This article is about the **ActionDllExecute** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

## **ActionDllExecute()**

Allows you to call functions in custom-built Dynamic Link Libraries for MS Windows.

*Syntax*

```
ActionDllExecute( *library-name*, { *function-name* | *function-number* }, *parameters* )
```

The required *library-name* is the name of the DLL to be called.

The required *function-name* or *function-number* is the name or number of the function to be executed.

*Parameters* are the parameters expected by the function (if any).

DLLs called by this action can be developed in any Windows development language, as long as exported functions conform to the Pascal Calling Convention:

```
void EXPORT WINAPI
MyCustomDllFunction ( HWND, hWnd, params, num-params )
```

In this syntax:

- *hWnd* is a window object (a window handle) of USoft Developer.
- *Params* is an array of character strings representing the parameter list of the ActionDllExecute() action.
- *Num-params* is an integer representing the number of parameters of the ActionDllExecute() action.