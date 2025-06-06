---
id: WindowArrange
---

# WindowArrange()




:::note

This article is about the **WindowArrange** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **WindowArrange()**

Changes the way in which windows and icons are displayed on the screen.

*Syntax*

```
WindowArrange( *mode* )

*mode*  ::=  { WM_MDICASCADE | WM_MDIICONARRANGE | WM_MDINEXT | WM_MDIRESTORE | WM_MDITILE }
```

*Mode* indicates the action to be performed:

|**Mode**|**Description**|
|--------|--------|
|WM_MDICASCADE|Arranges windows in a cascading (overlapping) manner.|
|WM_MDIICONARRANGE|Auto-arranges iconized windows.|
|WM_MDINEXT|Moves you to the next window or list menu.|
|WM_MDIRESTORE|De-iconizes current window.|
|WM_MDITILE|Arranges windows in a tiled (non-overlapping) manner.|



 