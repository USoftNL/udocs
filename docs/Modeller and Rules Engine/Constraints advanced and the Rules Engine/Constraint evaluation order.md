# Constraint evaluation order

A Rules Engine in USoft executes, against application data in a data model, a non-ordered collection of constraints: domain constraints and table constraints.

**Field-validation events**, **store-record events** and **commit events** cause these constraints to be *activated*. When constraints are activated, they can perform 3 types of action:

- **Corrections.** These consist of adding, changing or removing field values under the hood, on behalf of a user, as a knock-on effect of initial data manipulation that the user has performed interactively. While the word 'correction' seems to refer to resetting values that would otherwise be an error, corrections are in fact a much more general concept: *any* data manipulation performed by a constraint rather than directly by the user is considered a correction. While it is possible to warn the user of a correction, the default mode of behaviour is that corrections happen automatically and in the background.

- **Checks.** These consist of testing that values supplied or removed (whether directly by the user or indirectly by a correction) meet certain predefined conditions. Unlike corrections, checks are *restrictive:* if the values supplied or produced do not pass the test, ie., if they *violate* a condition, then processing is blocked and an error message is returned to the user.
- **Signals.** These consist of adding, at store-record time, new entries to a list of checks, called *transaction checklist,* that will be run through later at commit time.  If and when the transaction is committed, all the checks on the list are performed first. Commit will be successful only if all the checks are passed. Signals are nothing more than a way to make necessary later checks perform faster.

The picture visualises how corrections, checks and signals are activated when constraint activation events occur. Domain constraints are activated by field-validation events. Table constraints are activated by store-record events and commit events.

Each time a field is validated, a *pre-field* phase occurs first. During this phase, all domain constraints in scope for the field are handled. They give rise to field corrections and field checks.

Each time a record is stored, a *pre-store* phase occurs first. During this phase, update-on-self corrections, row checks, and transaction checklist signals are performed. As the next step, the record is said to be *stored* internally: its changes are registered and consolidated internally, ready to be committed later at commit time. Then, a *post-store* phase occurs. During this phase, cascade-to-other corrections are performed.

Each time a transaction is committed, a *pre-commit* phase occurs first. During this phase, transaction checks are performed with the help of the transaction checklist compiled earlier. Next, if all transaction checks are passed successfully, the transaction is committed, in the sense of giving the COMMIT command to the RDBMS. Exceptionally, this may be followed by a *post-commit* phase if there are chained corrections defined by table constraints that are deferred until post-commit time.

![](/api/Modeller%20and%20Rules%20Engine/Constraints%20advanced%20and%20the%20Rules%20Engine/assets/5e35ada5-08cc-4b76-a9de-837a502694d8.png)

 