---
id: The_world_of_rules
---

# The world of rules

## Why business rules?

In software development, we produce a lot of text and diagrams in spreadsheets, documents and specialised tools. All this work contributes to discovering what the client needs and then realising it and making it maintainable.

USoft has chosen business rules as its primary means of expression. Business rules are a specific format: you really enter a world that you would not otherwise enter.

Business rules standards, methods and techniques have been around for at least 30 years. Compared to standards such as object-oriented programming and process flow modelling, they have remained a minority sport but they have always persisted in the background as a well-founded approach.

### Business rules are flexible

Business rules are designed with flexibility in mind. It is demonstrably easier to change or drop a rule in a structure of business rules and be confident that “the rest still works” than to change or drop something in a long-winded specification document or process flow diagram. Business rules and definitions form a network of atomic propositions. Each proposition is true or false relatively independently of neighbouring rules and definitions.

### Business rules are inviting to validate

A rule is a proposition that can be said to be true or false. This is a comfortable format if you are asked to validate it. Is this what we want, or isn’t it?

### Business rules are easy to use

Because a rule is stated in natural and everyday language, there is no learning curve. Even people who have just onboarded can understand many rules without asking many questions.

### Business rules are a perfect fit for a Rules Engine

USoft manufactures software applications primarily by building Rules Engines. Business rules are the format of choice for specifying what a Rules Engine must do. If you drop or change a rule, you only need to drop or change the corresponding element in the Rules Engine, and “the rest will still work”. There is a natural mapping between specifications and software implementations.

## Contributors

Over the years, contributors have shaped and refined business rule methodology to what it is today.

### Roots in Object-Role Modelling (ORM)

The business rules methodology is rooted in the conceptual modelling technique known as Object-Role Modelling (ORM), connected with the names of Terry Halpin and Sjir Nijssen among many others.

Theoretically, ORM opens another avenue than Object-Oriented programming (OO) in that it concentrates on roles that objects play, more than on properties and methods of objects.

### Controlled Natural Language

Another angle has been the search for *patterns* in rule writing. Natural language is great because all stakeholders know it already, but it has many quirks and irregularies, and 10 different ways to say 1 thing, so expressing yourself in natural language in an IT project is ambitious: you need a unified, simplifying approach.

Ronald Ross and Graham Witt have been among those categorising types of rule and natural language expressions. The RuleSpeak initiative is a valiant attempt to summarise best-practice tips in short brochures.

### Semantics of Business Vocabulary and Rules (SBVR)

The Object Management Group (OMG) published the [Semantics of Business Vocabulary and Rules](/Business_rules/Positioning_business_rules/Semantics_of_Business_Vocabulary_and_Rules_SBVR.md) (SBVR) specification in 2008. This has been a major driver for USoft to put together its rule specification approach and supporting toolware. SBVR provides the sound theoretical basis that would otherwise be hard for an IT vendor to invent.

### Enterprise Ontology

[Enterprise Ontology](/Business_rules/Positioning_business_rules/Enterprise_Ontology.md) is mostly associated with the academic work of Jan Dietz at the TU Delft in the Netherlands. It distinguishes 4 *aspect models:* transactions, fact models, business rules, and processes. This initiative clearly defines what business rules are and how they relate to the wider context in which they operate.

## Business rules, a definition

Here is a definition of ‘business rule’ that USoft subscribes to:

**“A business rule is an element of guidance that allows actors in a specific, recurrent business situation to know what to do.”**

A business rule helps people in the business to know *what to do* in a given situation.

This seems like an open door, but it provides a direction. It helps you differentiate business rules from other things. For example, software requirements are different things. They tell you *what people need*. This is quite different from *what they need to do*.