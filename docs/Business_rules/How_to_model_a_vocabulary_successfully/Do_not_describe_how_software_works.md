---
id: Do_not_describe_how_software_works
---

# Do not describe how software works

Business rules enthusiasts like to stress that they "bridge the gap between business and IT”. They point out that business rules are all about business conduct and not about IT details, and moreover use natural language that everybody understands, so business rules are ideally suited to keep IT people from getting too technical.

But in USoft, we use business rules not only to understand "the business” but also to build a software application with a Rules Engine inside. That application supports, facilitates the business. It is embedded in the business; it is an integral part of it. The distinction between business and IT is not as clear-cut as it first seemed. You don't have the luxury of not needing to talk about software - it's everywhere.

So where do you draw the line?

A good general tip is: **try to talk about what software does, but not about how it works.**

More specific tips are in the sections below.

## Human tasks can be delegated to software

USoft Studio is based on concepts from [Enterprise Ontology](/docs/Business%20rules/Positioning%20business%20rules/Enterprise%20Ontology.md) and [SBVR](/docs/Business%20rules/Positioning%20business%20rules/Semantics%20of%20Business%20Vocabulary%20and%20Rules%20SBVR.md). This is not a world where software behaviour takes centre stage, as it would in certain forms of Requirement Analysis. Instead, software is only considered a tool, a means to get things done. Rules answer the principal question of *what people must do* and who is responsible for doing what. The question of whether they use software, and to what extent, is considered only secondary. Tasks may be fully delegated to software, partly delegated to software, or not delegated to software at all. You can implement a business rule like:

![](./assets/55747b6e-0eaa-4d02-b335-75833baf4c37.png)

without any automation at all: it could be simply an instruction to desk personnel. The other extreme is that, whenever possible, your IT system automatically assigns a free upgrade as soon as it detects the non-availability of the requested type of car. In between these extremes, shades of part-automation are also possible: the best solution might well be that software *suggests* a free upgrade in certain situations, perhaps by offering a list of options but leaving the decision to the human end-user.

The amount of automation (if any) is not considered essential to the rule. The rule is said to “stay the same” independently of how much an IT system does to enforce or facilitate the rule. Rules say *what* must happen, not *how* it must be implemented.

Delegation also carries the idea that software is not *responsible* for the rule being followed. Software does not follow the business rules: it merely operates *on behalf of* people who try to follow the business rules.

In a project for an alarm system, business rules could say what sort of warning messages people should get under what circumstances. They could also cover non-functional aspects such as the amount of time that the warning system is allowed to be offline. But they should not explain *how* the alarm system works, or how it should be operated. Business rules are not end-user documentation.

## Design-time implementation of business rules

A different angle to this discussion is to say that a rule can be enforced at *design* *time* or at *use time.* Take the previous example:

![](./assets/55747b6e-0eaa-4d02-b335-75833baf4c37.png)

If you leave it to desk personnel to offer free upgrades, you implement at *use time* - when the rule is “used” by people on the workfloor to get an answer to what they must do in a given situation.

If you fully automate free upgrade assignments, you implement at *design time* - when the software is planned and built. Software is only one of many things that organisations can implement at design time. This rule:

![](./assets/0dc1cc48-04a1-44ba-812a-7e307390e37f.png)

could be enforced by positioning barriers and stewards in such a way so that transfer passengers have no other way to gain the shopping areas than by passing identity control first. That would be implementation at design time. Or imagine that an architect is expected to design a new terminal in such a way that the rule is enforced *by design*, by the very construction of the building.

The organisation could *want* to specify who they delegate a rule to. It could be their wish that the rule is to be delegated to a specific agent (the architect, the software designer). But a wish is not a business rule: it’s a requirement.

Do not allow that the rule *says* it should be implemented by the architect as part of a building revamp. Simply have the organisation identify the subset of business rules that are addressed to the architect. Hand this subset of rules to him or her. They will become a specific section of his project specifications. There will be many other specifications, most of which will be of a more architectural nature.

## Personification

> [!NOTE]
> This section is seemingly in contradiction with what went before. But it still recommends that you limit yourself to talking about *what* software does, not *how* *it works.*

In the department of a large trading bank, they use 10 different applications that contribute to calculating how much risk a loan application is supposed to carry. Most of these systems have been around for decades. They have names like

![](./assets/50b0633b-0c82-4468-baf9-43cef581ae6c.png)

People in the bank mainly want to specify which application does what, what are the names and meanings of the subtotals they calculate, and how they pass the outcomes to each other for further processing. The stated objective for having business rules is to find out about data flow in the existing IT landscape, possibly to create an Enterprise Service Bus between the legacy applications at a later stage.

In this environment, you should use *personification*: you should feel free to use the name of an application as if it were a person or other responsible party.

![](./assets/9f7bb304-0f90-4c8e-8e19-e429d65e8f4c.png)

> [!WARNING]
> With personification, you lose the flexibility of saying what you want *independently* of which application does what.

> [!TIP]
> A system cannot violate a rule in the same way that people can decide to violate business rules. But modelling an IT system like a person is not far-fetched. Like people, software can fail or regress: it can usually follow a rule but violate it at other times.