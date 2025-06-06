# Messages

In a web application, messages (both information and violation messages) can be displayed in several ways:

- **Alert Box** (default): For each message type, the messages are displayed in one popup window.
- **No Messages**: No messages are displayed.
- **Message Area**: All messages are displayed in a message area. You need to include the Message Area object manually.
- **Use Buttons**: For each message type, the messages are displayed when the user clicks the appropriate button. These buttons are only enabled if there are messages to display.
- **Custom**: Messages are displayed as defined in your own CSS style sheets and JavaScript.

You can choose one of these options by setting the Message Presentation property to the desired value. This property can be set at page level.