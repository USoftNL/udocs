---
id: message
---

# message

**See also**

- [Web Benchmark recordable actions](/Web_and_app_UIs/Web_Benchmark_recordable_actions)

The **message** recordable action in Web Benchmark is the presentation of a message. This may be a message from the server (Page Engine), or a locally displayed message. This includes developer messages.
If the message presentation type is AlertBox, then the closing of this alert is included by this action. If it is DialogBox, then an additional click action on the “Close” button of the dialog must be recorded.

The following properties is in scope for the **message** recordable action:

|**Property**|**Editable?**|**Explanation**|
|--------|--------|--------|
|Message type|Yes     |<p>The way this message is displayed (its presentation type).</p><p>Message type = AlertBox applies to simple alerts, which are not shown during playback since the button clicks on these cannot be automatically recorded/played. DialogBox is a good alternative for this. Message types other than Custom are rarely used.</p>|
|Value   |Yes     |<p>The actual message, with all of its whitespace reduced to single spaces.</p><p>This value may be changed to represent only part of the message. This option is useful when testing with messages with dynamic content.</p>|



 