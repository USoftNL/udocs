# Menu sensitivity

Menu sensitivity is the fact that menu options may be made available in certain situations, and unavailable in others. When they are unavailable, their text prompt appears in a greyed-out colour.

You can determine under what circumstances a menu option must be available by setting and unsetting **Sensitivity properties**. You can see these properties when you right-mouse-click the menu option and then choose Properties. Use the Property Inspector's **Show Help** button to learn more on what each sensitivity property does.

Menu sensitivity propagates to the menu toolbar (the icon ribbon). When a menu option is available, any corresponding icon is also clickable. When a menu option is unavailable, any corresponding icon appears in a non-clickable state.

> [!NOTE]
> You can also make a menu option state-sensitive by using the action:

```
MenubarSetItem(<itemname>,{'ON'|'OFF'}
```