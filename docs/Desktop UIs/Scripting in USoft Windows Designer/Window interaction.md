# Window interaction

Windows can interact with each other. You can set up a permanent interaction between two windows by creating one or two user-defined properties of Window type, and then writing the appropriate action statements.

Assume, one window contains a button that opens another window by performing a Window.Create() call. The window that contains the button is the calling window, and the window that is opened is the created window. After creation, the calling window and the created window can interact in three ways:

1. The created window affects the calling window.2. The calling window affects the created window.3. Both windows affect each other; a two-way window interaction is set up.

*Example*

Suppose, in a travel agency application, a Bookings window contains a button. If the user presses the button, a Days window is created and opened on the screen. Bookings is the calling window and Days is the created window:

![](/api/Desktop%20UIs/Scripting%20in%20USoft%20Windows%20Designer/assets/40fe8c52-87ae-4462-976a-8fb84ede5d3c.png)

After creation, window interaction between Booking and Days can take one of three forms:

1. Days can affect Bookings.

2. Bookings can affect Days.

3. Both windows can affect each other.

![](/api/Desktop%20UIs/Scripting%20in%20USoft%20Windows%20Designer/assets/3b706b0c-fe9b-4574-8f80-24151555a0a1.png)

To set up a permanent window interaction, select one of the related topics:

### The Created Window Affects the Calling Window

To let the created window affect the calling window:

 1. From the Windows Designer catalog, open the to be created window.

2. Open the Object Activator.

3. In the object pane of the Object Activator, select the window object at the top.

4. Click the Properties tab page.

5. Click the New button.

6. Define a user-defined property of the calling window type. You are advised to use a consistent naming convention.

*Example 1*

Suppose the calling Bookings window opens the created Days window. For the Days window, define a user-defined property UDPBookings of type: Bookings.

1. From the Windows Designer catalog, open the calling window. In the example, this is the Bookings window.

2. Insert a button, and set the Action property to:

```
created-window( Self() ).Window.Create()
```

This action statement:

- Opens the window that is to be created.
- Sends the calling window as value to the user-defined property of the created window, within the Self() keyword.

You can use the Object Activator to construct this action statement. For a Travel Agency example that explains how to do this, see: Actions Example 11.

In the Bookings and Days example, the corresponding action statement is:

```
Days( Self() ).Window.Create()
```

3. From now on, the created window can affect the calling window.

*Example 2*

To set the background color of the Bookings window to red, insert a button in the Days window, and set the Action property to:

```
UDPBookings.background( red )
```

 

### The Calling Window Affects the Created Window

To let the calling window affect the created window:

 1. From the Windows Designer catalog, open the calling window.

2. Open the Object Activator.

3. In the object pane of the Object Activator, select the window object at the top.

4. Click the Properties tab page.

5. Click the New button.

6. Define a user-defined property of the to be created window type. You are advised to use a consistent naming convention.

*Example 1*

Suppose the calling Bookings window opens the created Days window. For the Bookings window, define a user-defined property UDPDays of type: Days.

1. From the Windows Designer catalog, open the calling window. In the example, this is the Bookings window.

2. Insert a button, and set the Action property to:

```
user-defined-property( created-window().Window.Create() )
```

This action statement:

- Fills the user-defined property with the created window.

- Implicitly opens this window.

In the Bookings and Days example, the corresponding action statement is:

```
UDPDays( Days().Window.Create() )
```

3. From now on, the calling window can affect the created window.

*Example 2*

To set the background color of the Days window to red, insert a button in the Bookings window, and set the Action property to:

```
UDPDays.background( red )
```

 

### Both Windows Affect Each Other

Assume, one window contains a button that opens another window by performing a Window.Create() call. The window that contains the button is the calling window, and the window that is opened is the created window. After creation, both windows can affect each other; a two-way window interaction can be set up.

To set up a two-way window interaction:

1. From the Windows Designer catalog, open the to be created window.

2. Open the Object Activator.

3. In the object pane of the Object Activator, select the window object at the top.

4. Click the Properties tab page.

5. Click the New button.

6. Define a user-defined property of the calling window type. You are advised to use a consistent naming convention.

 

*Example 1*

 

Suppose, the calling Bookings window opens the to be created Days window. For the Bookings window, define a user-defined property UDPDays of type: Days.

 

1. In the calling window, insert a button, and set the Action property to:

```
user-defined-property( created-window( Self() ).Window.Create() )
```

This action statement:

- Sends the calling window as value to the user-defined property of the created window, within the Self() keyword.
- Implicitly opens the to be created window.
- Fills the \<UDPCreated> user-defined property with the created window.

In the Bookings and Days example, the corresponding action statement is:

```
UDPDays( Days( Self() ).Window.Create() )
```

2. From now on, both windows can affect each other.

 

*Example 2*

 

To set the background color of the Days window to red, insert a button in the Bookings window, and set the Action property to:

```
UDPDays.background( red )
```

To set the background color of the Bookings window to red, insert a button in the Days window, and set the Action propre to:

```
UDPBookings.background( red )
```

 

### Clearing the Reference To a Closed Window

If you have set up a permanent window interaction between two windows, where both windows can affect each other, it can occur that the user closes one of these windows. In this case, the other window still contains a reference to the closed window in its user-defined property.

You have to clear this reference manually to avoid subsequent actions leading to unexpected results or error messages.

Suppose the calling Bookings window opens the Days window. Both windows have a user-defined property that can be filled with a reference to the other window. That is:

- The calling Bookings window contains a UDPDays user-defined property.
- The created Days window contains a UDPBookings user-defined property.

To clear the reference to a window that is closed manually:

 

1. For the Bookings window, set the Post-close property to:

```
UDPDays.UDPBookings( '' )
```

This clears the reference in the Days window to the (closed) Bookings window.

 

2. For the Days window, set the Post-close property to:

```
UDPBookings.UDPDays( '' )
```

This clears the reference in the Bookings window to the (closed) Days window.

 

3. For all methods defined in the Bookings window that perform an action in the Days window (that can be closed), define a decision with Decision SQL statement:

```
:"UDPDays()" is NOT NULL
```

and set the Yes action to the desired action statement, and do not define a No action.

 

4. For all methods defined in the Days window that perform an action in the Bookings window (that can be closed), define a decision with Decision SQL statement:

```
:"UDPBookings()" is NOT NULL
```

and set the Yes action to the desired action statement, and do not define a No action.

 