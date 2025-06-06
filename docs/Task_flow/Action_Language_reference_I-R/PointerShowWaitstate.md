---
id: PointerShowWaitstate
---

# PointerShowWaitstate()




:::note

This article is about the **PointerShowWaitstate** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **PointerShowWaitstate()**

Indicates that a potentially time-consuming action is busy, by displaying an hourglass mouse-pointer. All input from keyboard or mouse is captured.

*Syntax*
 

```
PointerShowWaitstate( *switch* )

*switch*  :=  { ON | OFF }
```

Set *switch* to ON to start indicating that the application is busy. Set *switch* to OFF to stop indicating this. Each time you switch this on, make sure that you switch it off at some later point so that the mouse pointer returns to normal. There is no way for the end user to switch this off.