# Producing events

Producing events is about creating **output events.** An output event is a business fact that is deemed relevant for software outside the USoft application itself, and therefore is registered ("created") by the Rules Engine as a fact that must be advertised (signalled) externally.

The decision to create an output event is driven by rules and implemented in the Rules Engine. Usually, the number of output events is lower than the number of input events.

When an output event is created, best practice is to place it in a queue table. In synchronous processing (where a queue table is not strictly necessary), the event is sent immediately after being placed in the queue. In asynchronous processing (where a queue table is mandatory), a separate queue service must get a signal that the queue table has new data to be processed.

Output events may be sent to various destinations that use different standards. In synchronous processing, they are sent by an RDMI Component. In asynchronous processing, they are sent either by an RDMI Component or by the Service Framework.