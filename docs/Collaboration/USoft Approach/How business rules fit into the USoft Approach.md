# How business rules fit into the USoft Approach

Business rules play an important part at many times in the USoft Approach:

![](/api/Collaboration/USoft%20Approach/assets/67e8205e-f30d-4363-ad3e-f66017ed4729.png)

The purpose of the USoft Approach is to create and maintain USoft applications, which contain a Rules Engine.

In practice, USoft applications can implement business rules in many different ways, including custom-built Java or .NET code. The USoft platform has many useful features for making these different types of rule implementation traceable.

However, the most typical format for rule implementation in USoft is *SQL constraints*.

This article takes SQL constraints as an example to illustrate how business rules contribute to the success of the USoft Approach.

Here are two examples of business rules implemented as USoft SQL constraints. The first is a *restrictive* implementation: it defines something that is not allowed to occur in business data. The second is a *productive* (or: *corrective*) implementation: it defines how the Rules Engine must react when a certain data configuration occurs.

These two implementations have important advantages over conventional coding:

- The business rule *maps directly* to the constraint. This contributes to easy communication between stakeholders who formulate and validate the rule, and team members who create the constraint. This is important in the SPECIFY and IMPLEMENT tasks of the DEFINE phase when the rules first appear. It is also important in later cycles, including in the PLAN phase, when it becomes important to *trace* (locate) existing rules and constraints easily.
- The constraint is *atomic:* self-organising, not dependent on neighbouring code. As a result, if the rule is dropped, all you need to do is drop the constraint. If the rule changes, all you need to do is change the constraint. This is important in DEFINE phases after the iteration in which the rule first appeared.
- The constraint defines *data quality.* It does not just implement software behaviour at the time it is "triggered". It guarantees that all the business data in the application satisfies the logic expressed. This general and verifyable mark of quality will help in many phases, especially in building confidence with the customer for new PLAN phases.
- The constraint is *executable:* the particular fragment of SQL that it contains can be run stand-alone against any database, including "old data" or production data in an environment that you release a new application version to. This has important practical advantages. You can upgrade existing production data elegantly, so that "old data" satisfy "new rules" if that is what you require. In development and test situations, you can readily answer the question whether any set of given data satisfies the rule, or not. The upgrade advantage is important in the Release subphase of the DELIVER phase and can be realised by using the Upgrade Scripts feature of USoft Delivery Manager. The test advantage is important in the TEST tasks of the DEFINE phase and can be realised by using the Violation Reports feature in USoft Benchmark.

## Rule example 1: restrictive SQL constraint

Business rule: The same guide may not be scheduled to accompany 2 tours at the same time.

```sql
SELECT   ''
FROM     tour t1
,        tour t2
WHERE    t1.tour_id <> t2.tour_id
AND      t1.start_date between t2.start_date and t2.end_date
AND      t1.guide = t2.guide

```

This snippet of SQL code is responsible for guaranteeing, all by itself, that the rule is followed in all circumstances.

It actively prevents the data situation described by the SELECT statement, regardless of how a potential violation comes about. It is active when people try to schedule a guide at a time when she is already busy. But it is also active when tours with appointed guides are moved around on the calendar.

This business rule can return an error message whenever a violation is attempted. The error message can be the business rule itself.

## Rule example 2: productive SQL constraint

Business rule: Customers are charged an ATM transaction fee of $1.00, but if a customer generates more than 10 transactions since the last bank statement, ATM transaction fees for that period are waived.

```sql
UPDATE   transaction_fee tf
SET      tf.txn_fee_amount = 0
WHERE    tf.txn_fee_type = 'ATM'
AND      10 <=
(
       SELECT     COUNT(*)
       FROM       transaction t1
       ,          transaction t2
       RELATE     t1 "HAS" tf
       WHERE      t2.account_id = tf.account_id
       AND
             t2.transaction_date >
             (
                SELECT    MAX( a.last_statement_date )
                FROM      account a1
                RELATE    a1 "HAS" t1
                WHERE     a1.last_statement_date < t1.transaction_date
             )
       AND
       (
             t2.transaction_date <
             (
                SELECT    MIN( a.last_statement_date )
                FROM      account a1
                RELATE    a1 "HAS" t1
                WHERE     a1.last_statement_date > t1.transaction_date
             )
          OR NOT EXISTS
             (
                 SELECT    ''
                 FROM      account a3
                 RELATE    a3 "HAS" t1
                 WHERE     a3.last_statement_date > t1.transaction_date
             )
       )
)

```

This comparitively small snippet of SQL code is responsible for waiving ATM transaction fees whenever more than 10 transactions have been generated since the last statement.

This business rule executes every time an ATM transaction occurs. It will check to see if 10 transactions have already been generated since the last statement date. If there are, it sets the ATM transaction fee amount to 0. Else, it does not, in which case the original ATM transaction fee (if any), apparently set by some other rule, must be maintained.

This business rule is much more powerful than just an IF-THEN-ELSE routine. If anything happens to any data involved, such as perhaps an unforeseen correction made to a statement date for an account, then the waiver will *automatically* be re-calculated. Also, this USoft rule implementation allows you to verify the "waiver" rule against any set of static data, including existing test data sets that must now begin to obey to the rule, and even existing data in Production that must be upgraded. Whether or not it is actually desirable to upgrade all the existing Production data is a separate decision: this must be shaped and presented as a separate business rule.

### Key benefits of rules-based systems

Key benefits of rules-based systems include:

|        |        |
|--------|--------|
|SPOD    |Single Point Of Definition. Business rules and implementations are defined and stored only once in a central repository.|
|Automatic rules activation|A Rules Engine is responsible for determining which rules must be evaluated when, and in what sequence. Lower-level coding of rule activation logic is no longer required.|
|Declarative tooling|The development platform allows you to set trivial aspects of business systems declaratively, to prevent non-trivial rules from being swamped by trivial rules such as a data element being mandatory.|
|Modularity|Rule implementations are independent of database, middleware and GUI specifics of the IT context where they are deployed and also largely independent on the implementation of neighbouring rules.|
|Support for Agile change|Rule change is easier because individual, modular implementations map directly to validated rule specifications.|
|Cross-referencing capability|Cross-references between rules and the conceptual model make it easy to find and retrieve rules and to assess the impact of any change.|



###  