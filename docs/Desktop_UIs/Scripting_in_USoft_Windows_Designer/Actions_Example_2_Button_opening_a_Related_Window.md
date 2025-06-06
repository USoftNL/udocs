---
id: Actions_Example_2_Button_opening_a_Related_Window
---

# Actions Example 2: Button opening a Related Window

![](./assets/f079d86c-7955-489a-b866-96a08a1a84d8.png)

If the Participants button is pressed, a related window must be opened showing Participant child data.

Set the Action property of the Participants button to:

```
Participants_taking_part_in_Reservation.Window.Create()
```

In this action statement you do not need to specify the context, because the Info Window is the default object for this action statement.