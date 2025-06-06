# Rule structure

For developers, it is helpful to understand how business rules are structured: what is their anatomy. Rules have both a *concept structure* and a *logical structure.* 

## Concept structure

The meaning of business rules, as indeed the meaning of any textual software requirements, depends on the meaning of underlying *verb concepts* and *noun concepts* that are used to formulate the rule:

![](/api/Collaboration/Concept%20structure%20for%20developers/assets/cad2c3b0-3315-4865-8e8b-28a266148a0d.png)

**Business rules are built on a structure of verb concepts and noun concepts**

## USoft Studio

USoft Studio offers automatic colour-coding that shows this underlying structure. Verb concepts appear in blue italic type. Noun concepts appear in green underlined type. You can click on blue and green words to get more information about a colour-coded concept:

![](/api/Collaboration/Concept%20structure%20for%20developers/assets/288baf77-153e-4af8-b9fc-ccd27e6e4d35.png)

You can hover a concept to get a definition. Here, the colour-coded word 'Guides' is being hovered with the mouse:

![](/api/Collaboration/Concept%20structure%20for%20developers/assets/bb0bd0cb-76b3-4ae0-9e7c-0becada96a23.png)

You can search by concept using the Fast Search Box in the top right corner:

![](/api/Collaboration/Concept%20structure%20for%20developers/assets/1aae3ae6-e72d-4de2-b532-9182268882a1.png)

## Logical structure

Each business rule is not only a formulation that uses concepts. It is also a *proposition:* a statement that can be seen to be true or false. As such, it has logical structure.  

More than concept structure, logical structure is something that most trained professionals in IT are very familiar with. It is the kind of structure expressed by *logical operators.* In English, the principal logical operators are: IF, THEN, ELSE, NOT, AND, OR. Business rules are structured mostly by first-order (propositional) logic, but with the notable addition of modal operators ("must", "may").

The visual below shows the relationship between rule, logical structure, and underlying concept structure by giving an example. The logical structure is highlighted in red:

![](/api/Collaboration/Concept%20structure%20for%20developers/assets/2ff3ad84-a045-448e-bf57-035e702765ac.png)

## Necessities vs. possibilities

A **necessity** is a business rule that expresses a necessity (an absence of alternatives) or an obligation (an absence of permission):

```
"Incoming passengers must pass ID control before they are allowed to pass customs."

```

Necessities may be expressed in many ways, for example, by "... must ... ", or by a combination of "may" and a negation element ("... may only ...", "... may not ...").

By contrast, a **possibility** (or **advice**) is a business rule that indicates that some course of action is open without being mandatory:

```
"An online booker may pick a seat."

```

```
"A client may be offered an upgrade if no car is available in the requested category."

```