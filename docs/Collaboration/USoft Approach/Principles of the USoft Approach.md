# Principles of the USoft Approach

The USoft Approach has four basic principles of delivering business software:

## Deliver business conduct

Business software is not a stand-alone product. It operates in an organisational context. Rather than just building, testing and deploying the next piece or version of software, a project team can (as part of the same effort) deliver a complete view of how the business supported by the software should operate.

This is achieved by creating specifications that formulate intended business conduct, and creating corresponding implementations in parallel. Specifications go beyond detailing the functionality of new software. They address:

- The various actions or transactions that are supported by the software.
- People, departments, partners and other parties involved in these actions.
- The structure of objects, processes, data and events that the business has to deal with.

Not all the specifications will be directly implemented in software. However, they allow a wider view, in which new software is not only introduced but also aligned to intended business conduct. In the USoft Approach, specifications are more than software specifications: they describe the target situation in a broader sense.

For specifications, the USoft Approach favours starting with **business vocabulary** and **business rules** in natural language, according to OMG's Semantics of Business Vocabulary and Rules (SBVR), possibly supplemented by diagrams or other visualisation.

For software implementations, the USoft Approach favours automated behavior in terms of **structure** and **rules,** supplemented by **interfaces -** graphical user interfaces, but also **services** - that act in a context of processes, events, message handling and data exchange.

## Deliver in short cycles

Teams to should break up new developments in small, manageable parts and to aim for end-to-end delivery of each of those parts. Being able to deliver chunks of work often is one practical indicator of quality. Another term used to refer to this idea is "continuous delivery" or "continuous development".

End-to-end delivery cycles can be short and manageable only if the parts to be delivered are small, well-defined and well-prioritised. It is the aim of the PLAN subphases to identify, define and prioritise the functionality that must be delivered within a cycle.

Short-cycled delivery has been part of the principles of Agile Development since the 90s, especially in the tradition of DSDM. The principle "Deliver in short cycles" also makes USoft suitable for teams working with Scrum.

## Deliver specifications and implementations in parallel

Many organisations are looking for this combination of specifications and corresponding implementations, because this solves the well-known problems of not knowing exactly what software does, or not knowing where in the software something has been implemented.

The USoft Approach delivers this desirable combination more fully than other platforms:

- Specifications and implementations are stored in (different tables of) the same **repository**. The basic format for both specifications and implementation is database records, not (sections of) documents. This makes it easier to be methodical about specifications and implementations, and it makes it easier to establish point-to-point and queryable two-way references between specifications and implementations.
- The USoft Approach takes a specific view of the preferred **format** of both specifications and implementations and does this in such a way that the two are more easily linked than on most other platforms.
- Specifications in USoft do not typically express the behaviour or characteristics of software, but rather the desired structure and rules of target business conduct. The USoft approach favours specifications of structure in the form of structured, modelled **business vocabulary**. It also favours specifications of rules in the form of natural-language statements that express **business rules**.  
- The format that USoft favours for implementations is well-structured data and rule-based system behavior. This maps comfortably to the favoured specification formats.

In practice, there are always many details that do not fit this general picture. On the specification side, you will have things like process flow diagrams and service-oriented, message-oriented or event-based design and architecture. On the implementation side, you will have specific routines coded in procedural or object-oriented languages. However, the general principle outlined in this section still structures a repository in which multiple formats and objects may be registered and traced with ease.

**Realistic take-it-or-leave-it strategy**

Combining specifications and corresponding implementations is an ambitious ideal. It is often seen as tedious at the time of software development. In the case of team members who focus on program code (for example, Java or .NET), their highly specialised coding skills do not clearly map to the tasks of drawing up specifications and connecting them point-by-point to implementations. Understandably, they are enclined to skip these tasks, or execute them only in small part.

The USoft Approach recognises that drawing up specifications and implementations in a structured way requires discipline. It facilitates this by taking a realistic take-it-or-leave-it strategy. Instead of enforcing the presence of parallel specifications and implementations at all times, it allows teams to have specifications that are not (yet) implemented, and even implementations that are not properly specified. It is characteristic of USoft's repository-based approach that any lack of corresponding specifications or implementations ("gaps") are highly traceable.

In the USoft Approach, the principle "Deliver specifications and implementations in parallel" is based on the fact that the USoft toolset allows you:

- to create specifications optionally, and separately from implementations.
- to create implementations optionally, and separately from specifications.
- to link corresponding specifications and implementations, again optionally.
- to trace with ease which specifications are without corresponding implementation, and vice versa.

## Deliver a central repository with distinct application tiers

USoft invites teams to create deliverables in database records rather than in files. This offers a high level of integrity. The way in which objects depend on each other is easily structured and traced.

This also applies to specifications. They are not sourced in a document but in a (USoft Teamwork or USoft Studio) table.

You can have implementations coded in a programming language such as Java or .NET, but even this external code is stored, called, and made traceable inside the central USoft development repository - in records in database tables.

A central repository strongly supports a structured approach to development because it provides a default way of doing things. In USoft, business logic is implemented by default by defining rules in the Rules Engine, except when there is an overriding argument to choose a different technology or format (for example, because of performance or architecture considerations).

Point-to-point links between specifications and implementations are easy to make, to trace, and to maintain. Contrast this with a conventional environment where specifications are in a document and implementations are in lines of code on the file system. In such an environment, despite initiatives such as Javadoc in the Java world, relating specifications to implementations demands a much higher level of team discipline.

**Distinct application tiers**

When you deliver a central repository with USoft, the toolset helps you create distinct application tiers for data structure, rules and interfaces. This results in a productive separation of concerns as the team continues to maintain the application and develop it further.