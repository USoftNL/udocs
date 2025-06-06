# Target objects in other windows

Standard action statements refer to objects within the current window.

To allow different windows to interact and cooperate, you need to create user-defined properties in one window, and in the action script where you create that window, you need to pass one or more value for the user-defined properties. These values are passed as parameters or arguments of the object of the Create() method, that is, the window about to be created.

Using this technique, you can simply pass a string value from one window to another, or you can set up a two-way communication between the windows.

## Passing a string value

To simply pass a string value to a window B at the time it is opened, first create a user-defined property of type String in window B. Then call the window from, say, a button in window A by writing a action statement of this type:

```
MyNewWindow( query.name()).Window.Create()
```

In this example, an instance of the MyNewWindow class is opened, the current value in a NAME column is passed as an argument to the user-defined property in MyNewWindow. If that property is called "mySearchName", this allows you for example to write for the Post-Open event of this MyNewWindow:

```
QueryDefine()
query.family_name( mySearchName() )
QueryExecute()

```

## Two-way communication

If you want runtime windows to influence each other repeatedly, not just pass a string value at startup time, then you need to be able to refer from one window to an object in another window.

Define an object-like property of the same type as the object in the other window you want to refer to, and then pass the object as an argument to the window when you create it. In the second window, you now have a permanent reference to the object in the first window, even if it changes during the lifetime of the two windows.

For example, in one window, you could do repeated reads of a cell in a Word table in a Word document displayed in an ActiveX editor control embedded in a different window.

## Self() keyword

If you pass the current window class itself as an argument to another window, the Object Activator replaces the class name by the Self() keyword. The advantage of this is that the script will remain valid even if the window class is renamed, embedded or has a subclass made from it:

```
InfoWindow1( Self() ).Window.Create()
```