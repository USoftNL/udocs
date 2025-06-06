---
id: Finishing_your_web_application_with_JavaScript
---

# Finishing your web application with JavaScript

You can **finish** your web application pages by adding JavaScript code. This is a programmer's task and consists of mixing manually coded scripts with code borrowed from selected libraries.

USoft Web Designer has built-in libraries for scripting interaction with data (the USoft DB library) and for scripting surface interface behavior (the USoft UI Library).

USoft Web Designer also facilitates the use of frameworks such as jQuery and bootstrap.

You can include scripts in web pages that are executed with or without web server interaction.

Before adding a script, you should:

1. Identify, in functional terms, what the script should do: what action(s) it needs to execute.

2. Identify the event that should dictate when the script is executed. For example:

- When the user clicks or double-clicks an object (the onclick event type).
- After the browser has finished loading a web form (onload).
- When the user presses a key over an object (onkeypress).
- When the user moves the mouse over the object (onmouseover).

3. Identify the scope of this event. For example:

- The script should execute on every page of the application.
- The script should execute on a specific type of page class.
- The script should execute only in one individual page class.
- The script should execute in each occurrence of a specific control class on some page.

Scripting is programming (coding). When you add a script, consider whether the script needs to be coded anew or existing code may (entirely or to some extent) be re-used. Existing code may be:

- Code supplied by USoft,
- User-defined code that you will have added yourself,
- Code taken from external libraries that you will have linked to the application,

or a mix of these three.