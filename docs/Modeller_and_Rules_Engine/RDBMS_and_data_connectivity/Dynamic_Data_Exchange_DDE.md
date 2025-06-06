---
id: Dynamic_Data_Exchange_DDE
---

# Dynamic Data Exchange (DDE)

In a Windows environment, applications can communicate using Dynamic Data Exchange. The application that starts the conversation is called the client. The application which responds is called the server. In DDE, the client determines the topic of the conversation and the items that are exchanged, either by sending them to the server or by requesting them from it. The client may also initiate an advise loop in which it asks to be notified each time a particular item changes. USoft Developer is a DDE server and may act as a DDE client.

Dynamic Data Exchange (DDE):

- Allows inter-process communication between client and server programs using shared memory.
- Offers one-time data transfer (this is when the server gets the information). The server can change the information, but the client has to request an update of the changes.
- Offers ongoing data transfer (this is the Reflect Updates property). Clients are notified when new data becomes available.
- Differs from clipboard communication. The Clipboard cannot be initiated by the user (client). Client copies data only once.
- Is always initiated by the client. The client is in control (i.e. sends or requests information).
- Memory is allocated by the server, and is shared by the client.

Windows applications may initiate conversations with a USoft DDE server about two topics:

- Field in a currently open window.
- A SQL script command.

## Examples of DDE in use

Suppose that a university has a simple table called Results, containing three columns: Student ID, Course ID, and Course Result. The university wants the corresponding window to have a button that obtains the result from an external application.

Which steps are necessary to obtain the desired result?

- Inserting a button (see the USoft Windows DesignerHelp).
- Defining the proper action for it (see below).
- Depending upon the location of the button, defining the search specification FROM the button TO the field into which the data obtained is to be inserted (see below).

The action that establishes a DDE connection, and that requests a value from the server application is:

```
DdeRequest( server, topic, item, format, resource )
```


:::note

If you use DdeRequest(), you do not need DdeConnect() to establish the connection.

:::

In the example, the name of the server is "server". The name of the topic is "test". The name of the item is "count". The data format is CF_TEXT. The resource or property to set is "value" (i.e. the data obtained is to update the contents of the field). So, the DDE part of the "problem" is:

```
DdeRequest('server','test','count','CF_TEXT',<value>)
```

## Field topic

The value in this field may be retrieved and changed. The client can also ask to be notified whenever the field value changes.

## SQL topic

The client sends such a command to the USoft Developer server, which passes it to the SQL script interpreter. In this way, the client can send data manipulation requests to the server, which are validated by the conceptual processor before they are executed.

USoft Developer supports a number of actions to let you use it as a DDE client. Using these actions, you may initiate a conversation with a DDE server, exchange items, and close the conversation again. These actions are listed in the following table.

## Available DDE Actions

|**Action**|**Purpose**|
|--------|--------|
|DdeConnect()|Opens a conversation with a DDE server.|
|DdeDisconnect()|Closes a conversation.|
|DdeRequest()|Requests an item from the DDE server.|
|DdePoke()|Sends an item to the DDE server.|
|DdeExecute()|Makes the DDE server execute a command.|
|DdeStartAdvise()|Starts an advise loop, asking the DDE server to notify it whenever a particular item changes.|
|DdeStopAdvise()|Stops a running advise loop.|