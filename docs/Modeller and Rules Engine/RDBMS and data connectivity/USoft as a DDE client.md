# USoft as a DDE client

This section describes how to use a USoft application as a DDE Client. This involves starting and finishing the conversation, requesting and sending items, executing commands, and running advise loops in order to be notified when a certain item changes.

## Starting and finishing DDE conversations

DDE conversations are conversations with a particular service about a particular topic. Before items can be exchanged or commands sent, a DDE connection must be established. When the conversation is finished, the connection must be closed. Each connection can be uniquely identified by its service name and its topic. This means that a client cannot have two conversations with the same service about the same topic at the same time.

To start a DDE conversation, call:

```
DdeConnect( service, topic )
```

To finish a DDE conversation, call:

```
DdeDisconnect( service, topic )
```

*Service* is the name with which the DDE server has registered itself. The name of the service is usually identical to the application name. The server name of USoft Developer is "USoft Developer".

*Topic* is the name of the topic. The topic must be supported by the server.

## Requesting and sending items

In a DDE conversation, the client may send items to the server and request items from it. USoft Developer supports sending field values to a DDE server and retrieving field values from it. These fields are fields from currently open windows. The item name of a particular field is "ObjectNamePlural.ColumnName" (where "ObjectNamePlural" is the Object Name Plural as defined in the repository, and "ColumnName" is the name of the column underlying the field).

When you request or send an item, you must specify its format, which is one of the available Windows data formats. You must also specify the resource of the current Field that is either set to the requested item or queried to obtain the value of the item to be sent.

To request an item, call:

```
DdeRequest( service, topic, item, format, resource )
```

To set an item in the server, call:

```
DdePoke( service, topic, item, format, resource )
```

*Service* and *topic* refer to a current DDE conversation, which must have been opened by a call to DdeConnect().

*Item* is the requested item.

*Format* is the format in which this item is to be delivered. The standard string representing the MS Windows data format is CF_TEXT.

*Resource* is the resource of the current object that should be set to the value returned by the call to DdeRequest(). At this moment, only the "value" resource is supported. This means that DdeRequest() can only be used to set a value in the current field. This may be the field from which this action is called or the client of the decision calling this action.

## Executing a command

Some DDE servers can execute commands. These commands are identified by command strings, which can be sent to them within the current conversation.

To send a command to a DDE server, call:

```
DdeExecute( service, topic, string )
```

*Service* and *topic* identify the conversation as part of which the command is sent. This conversation must have been started with:

```
DdeConnect( service, topic )
```

and must not have been finished with:

```
DdeDisconnect( service, topic )
```

*String* is the command to be executed by the server.

## Running an advise loop

A DDE client can express interest in a particular item maintained by the DDE server by starting an advise loop for that item. The server notifies the client whenever that item changes, as long as the client has not stopped the advise loop. You may run only one advise loop for each item in a particular conversation.

To start an advise loop from USoft Developer, call:

```
DdeStartAdvise( service, topic, item, format, resource )
```

*Service* and *topic* uniquely identify the current conversation, which must have been started with:

```
DdeConnect( service, topic )
```

and may not have been finished with

```
DdeDisconnect( service, topic )
```

*Item* is the item in which the client wants to express an interest.

*Format* is the format in which it should be delivered.

*Resource* is the resource of the current object that should be set to the value returned by the call to DdeRequest(). At this moment, only the "value" resource is supported. This means that DdeRequest() can only be used to set a value in the current field. This may be the field from which this action is called or the client of the decision calling this action.

To stop a running advise loop, call:

```
DdeStopAdvise( service, topic, item )
```

*Service* and *topic* identify the current conversation. *Item* is the item in which the client expressed interest.