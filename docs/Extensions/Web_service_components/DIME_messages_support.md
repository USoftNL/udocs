---
id: DIME_messages_support
---

# DIME messages support

Direct Internet Message Encapsulation (DIME) is a Microsoft-proposed internet standard for sending and receiving SOAP messages along with additional attachments like binary files, using standard transfer protocols like HTTP.

The Web Service Component in USoft allows you to send attachments of various types along with your SOAP message using the DIME format. Creating a Web Service Component using the New Web Service Component wizard does not automatically create the right method definition for sending DIME messages. You will have to change the definition of your Web Service Component method in order to be able to send attachments along with your SOAP message.