---
id: Executing_ESI_actions
---

# Executing ESI actions

ESI actions can either be executed via the SQL Command dialog in your application, or directly from the command line using the USoft Binder.

To execute ESI actions via SQL Command:

1. Make a copy of the USoft Application item in the Binder.

2. Start the application, and then choose Tools, SQL Command from the menu bar.

3. Type in the required actions, or open the script file that contains the actions, and then click the Execute button.

To execute ESI actions from the Binder:

1. Write your actions in a .TXT file.


:::note

Every action call must be on ONE line, and that each line must start with the ACTION keyword.

:::

2. Make a copy of the USoft Application item in the USoft Binder.

3. In the Special field, type:

```
-run <filename>
```

where \<filename> is the name of your .TXT file. This option runs the script and then exits the application immediately.

4. Double-click the Binder item.