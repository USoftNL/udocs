---
id: Handling_events
---

# Handling events

The Rules Engine is responsible for handling received event data by processing **business rules** that apply to this data. These business rules are defined in USoft Definer.

Business rules are usually implemented in **constraints,** but when you process input events, it is often attractive to define **jobs** to start processing and to activate the constraints. Rules for event processing tend to have **special characteristics** compared to other types of rules.

### Constraint implementations

Different types of contraints have different advantages in event processing:

- **Standard constraints** react to data change in any table column that appears (= is mentioned) in the constraint's SQL statement. The evaluation time depends on characteristics of the table(s) that appear in the constraint's SQL statement, as well as on the complexity of the constraint's SQL statement. Standard constraints guarantee an excellent level of data integrity because they are able to guarantee that a business rule is always enforced.
- **Transitional constraints** have a specified **transition table.** They allow you to handle data as soon as an incoming record is stored in this transition table. They only fire when the transition table is manipulated. They do not fire if other tables mentioned in the constraint's SQL statement (if any) are manipulated. Transitional constraints can refer, in their logic, to both **old** and **new** column values of records being manipulated in the transition table. Transitional constraints are merely triggers that respond to data manipulation. They do not guarantee data integrity in the same way as standard constraints.

- **Post-commit constraints** allow you to control transaction behaviour. A post-commit constraint will fire after a transaction is successfully finished. It will start a new transaction. This mechanism is useful for controlling the flow of event processing.

See USoft Definer Help for details on how to define constraints.

### Jobs as a means to start processing

You can implement most every kind of rules-based event processing just by modelling data and writing constraints.

However, to *start* an event processing task, it is attractive (in addition) to define a USoft **job** in USoft Definer. When the runtime application calls the job, processing starts and the underlying constraints network is activated.

This technique gives you better control of error handling, better traceability, and improved atomicity. With a job, you can:

- Control what happens to errors.

- Influence transaction behaviour (commit, rollback).
- Add useful trace and log information, such as the date-time when the incoming event was received, the date-time when the event was processed, and the date-time when an output message was sent. This data may be used, among other things, when interpreting the result of performance tests.

See USoft Definer Help for details on how to define jobs.

### Rules for event processing have special characteristics

An event-driven application takes a different view on data integrity than an application built for request-response mechanisms.

Request-response mechanisms include communication with an end user who manipulates data in an interactive screen. By contrast, in general, event processing requires that data integrity violation does not stop processing. Instead, errors should become output error events that are logged to a database or to a file. Because of this, USoft event-driven applications should use restrictive constraints and restrictive relationships with care. The default should be to avoid restrictions on data where possible, producing traceable error data instead.