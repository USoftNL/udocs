---
id: USoft_Default_Web_Socket_Provider
---

# USoft Default Web Socket Provider

The USoft Default Web Socket Provider allows you to implement a WebSocket serviceand gives you access to utility functions for connecting to the Rules Engine. It also provide access to *broadcast* and *send* functions.

## broadcast( String message )

This function may be called from code in the Implementation field of methods to distribute messages to all connected clients.

*Syntax*

```
public void broadcast( String message ) 

```

The required **message** is the message to be distributed.

## send( String message )

This function may be called from code in the Implementation field of methods to send back a message exclusively to the web socket client who made the current request.

*Syntax*

```
public void send( String message ) 

```

The required **message** is the message to be sent back to the web socket client who made the current request.

The "USoft Default Web Socket Provider" functional type takes care of the websocket handshake and gives you the possibility to write your own implementation against the following event methods:

|**Event method**|**Explanation**|**Purpose**|
|--------|--------|--------|
|onConnect|The code in this method will run when the socket connection is open.|Initialise variables used in the implementation|
|onClose |The code in this method will run when the socket connection is closed.|Unload variables used in the implementation|
|onMessage|The code in this method will run when a message is received by the server.|Add your custom implementation|
|onError *|The code in this method will run when an unexpected exception is raised while processing a web socket message. See the "Error handling" section below.|Add custom error handling|



## Error handling

Remove the **onError** method from the methods list if you want to fall back on USoft Service Framework's default implementation of error handling. In this default implementation:

- The socket connection is kept open on error;
- The error message is logged to the log file.

If you created a new web socket service via Services, New WebSocket Service in the main menu, the default implementation of error handling is that:

- The socket connection is kept open on error;
- The error message is logged to the log file;

- A message is sent back to the client that originated the request.