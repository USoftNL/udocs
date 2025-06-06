# Example: USoft Default Web Socket Provider for a Chat application

The following step-by-step instructions are for creating a WebSocket service that retrieves text messages, saves them in a chat table, and echoes them back to all active clients along with the name of the user who has sent the message and the timestamp of the message.

## Defining the model

1. In USoft Definer, select Tables, Database Tables from the Define menu.

2. Provide the name CHAT_MESSAGE for your new table.

3. Provide values for Abbreviation, Object Name and Object Name Plural fields.

4. Add the following columns:

|**Name**|**Data Type for domain**|**Prompt**|**Key** |
|--------|--------|--------|--------|
|ID      |generated NUMBER|Id      |1       |
|USERNAME|NVARCHAR2(50)|User Name|No      |
|MESSAGE_TEXT|NCLOB   |Message |No      |
|RECEIVED_ON|DATETIME|Timespamp|No      |



5. Save changes.

6. Add a constraint that updates the USERNAME and RECEIVED_ON columns on INSERT:

```sql
UPDATE   chat_message
SET      username = user
,        received_on = current_date()

```

7. Make the constraint transitional:

|        |        |
|--------|--------|
|Transition Table|CHAT_MESSAGE|
|Fire on Insert|Always  |
|Fire on Update|Never   |
|Fire on Delete|Never   |



 

8. Check the constraint. Save changes.



## Defining the job

1. Define a job NEW_CHAT_MESSAGE that will receive a text message as an input parameter set, insert the text message into the CHAT_MESSAGE table, and return the message along with the current user name and current time.

2. Define an Input Parameter Set named **CHAT_MESSAGE_IN** with the following elements:

|**Name**|**Data Type**|
|--------|--------|
|MESSAGE_TEXT|NCLOB   |



3. Define an Input Parameter Set named **CHAT_MESSAGE_OUT** with the following elements:

|**Name**|**Data Type**|
|--------|--------|
|USERNAME|NVARCHAR2(50)|
|MESSAGE_TEXT|NCLOB   |
|RECEIVED_ON|DATETIME|



4. Define a SQL task containing the following statements, and include it in the job:

Insert a message in CHAT_MESSAGE table :

```sql
INSERT INTO   chat_message (message_text)
SELECT        message_text
FROM          chat_message_in

```

Output the message along with the current user name and current time :

```sql
INSERT INTO chat_message_out(
           username
,           message_text
,           received_on
)
SELECT      user
,           message_text
,           current_date()
FROM        chat_message_in

```

5. Save changes. Check the job.

6. Configure and start a rule service for your application on port **9997**.

## Creating the WebSocket service for receiving messages

1. In Service Definer, create a connection for your application that uses a Rules Service on port 9997.

2. Choose Define, SQL Statements and add a statement that will insert received text messages into the CHAT_MESSAGE table.

Statement Name = NEW_CHAT_MESSAGE

Statement:

```sql
INVOKE   BatchRunner.NEW_CHAT_MESSAGE WITH
SELECT   :message "MESSAGE_TEXT"
,        'true'     "-quiet"

```

3. Create a new Structure to receive the output of the statement. Choose Derive Structure from Tools menu. Specify:

|        |        |
|--------|--------|
|Return Structure Name|ChatResponseDerive|
|Structure from SQL Statement|Yes     |
|SQL Statement Name|NEW_CHAT_MESSAGE|



 

4. Choose Services, New WebSocket Service from the menu.

5. Provide a name for the service, e.g. ChatService. Press OK. Service Definer generates a WebSocket service.

6. Provide an implementation for the onMessage method based on the NEW_CHAT_MESSAGE statement.

```language-java
ChatResponse response = (ChatResponse)sql( ChatResponse.class, "NEW_CHAT_MESSAGE" , new Object[]{ message } );

//transform ChatResponse  structure to json string
javax.xml.bind.JAXBContext jc = javax.xml.bind.JAXBContext.newInstance(new Class[]{ChatResponse.class}, null);
javax.xml.bind.Marshaller jm = jc.createMarshaller();
jm.setProperty(org.eclipse.persistence.jaxb.MarshallerProperties.MEDIA_TYPE, "application/json");
jm.setProperty(org.eclipse.persistence.jaxb.MarshallerProperties.JSON_INCLUDE_ROOT, new Boolean(true));
java.io.StringWriter sw = new java.io.StringWriter();
jm.marshal(response, sw);

//broadcast resut to all active clients
broadcast(sw.toString());
```

7. Click the Connections tab and specify the connection that you want the service to use. Save.

8. Click the SQL Statements tab and specify the statement with the name NEW_CHAT_MESSAGE. Save.

9. Click the Servers tab and specify the server where you want to publish the service, for example, the default server called 'Default'. Save.

10.To make testing of your service easier, specify that the WebServer socket does not require authentication. In the Annotations field of the server add:

```
@AuthNone(user="(your user name)", password="(your passwword)")

```

*Example*

```
@AuthNone(user="USoftUser", password="USoftPassword")

```

where the combination USoftUser, USoftPassword is defined as valid credentials in Authorizer.

## Publishing the solution

1. Choose Define, Servers, and retrieve the record of the Server where you expose the service.

2. With input focus on this record, choose Publish, Publish and Restart from the menu.

## Creating a test client and testing the implementation

To test your WebSocket service you need a client application. You can download an existing test tool that supports native WebSockets or create your own  html/JavaScript client. Following is an unpainted html/JavaScript web page that you can use to test the ChatService WebSocket service.

1. Save following html/JavaScript code as **chatApp.html**

```language-html
<!DOCTYPE html>
<html>
<head>
    <title>WebsSockets</title>
</head>
<body>
    <div id="chatControl">
        <input id="message" placeholder="Type your message">
        <button id="send">Send</button>
    </div>
    <ul id="chat" style="list-style-type: none"></ul>

   <script>
//Establish the WebSocket connection and set up event handlers
ws = new WebSocket("ws://localhost:8090/ChatService");
ws.onmessage = msg => updateChat(msg);
ws.onclose = () => alert("WebSocket connection closed");

// Add event listeners to button and input field
document.getElementById("send").addEventListener("click", function (e) {
   sendAndClear(document.getElementById("message").value)
});

document.getElementById("message").addEventListener("keypress", function (e) {
    if (e.keyCode === 13) { // Send message if enter is pressed in input field
        sendAndClear(e.target.value);
    }
});

function sendAndClear(message) {
    if (message !== "") {
        ws.send(message);
        document.getElementById("message").value = "";
    }
}

function updateChat(msg) { // Update chat-panel and list of connected users
    var data = JSON.parse(msg.data);
   var li = document.createElement("li");
   li.innerHTML = '<div style="font-size: 11px;color: gray;">User ' + data.ChatResponse.USERNAME + ' on ' + data.ChatResponse.RECEIVED_ON + '</div>' + data.ChatResponse.MESSAGE_TEXT;
   document.getElementById("chat").appendChild(li); 
}
   </script>   
</body>
</html>
```

2. Change the web socket (ws) address in following line if you use a different port number

```
ws = new WebSocket("ws://localhost:8090/ChatService");

```

3. Open chatApp.html in a browser and send messages via the edit box provided in the page. Both browsers receive all messages.

Open in a Client/Server application the Chat Message info window. Query the window and see that messages are saved in the database.