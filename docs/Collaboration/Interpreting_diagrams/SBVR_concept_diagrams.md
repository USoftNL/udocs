---
id: SBVR_concept_diagrams
---

# SBVR concept diagrams

This article is for developers responsible for USoft implementations. It tells them how to interpret (= read) SBVR concept diagrams in USoft Studio so they understand better what is expected of them.

If you want to *create* SBVR concept diagrams, please go to the Home page of USoft Studio. On the Help tile, on the Diagrams tab, open the PDF document about SBVR diagrams.

## What is an SBVR concept diagram?

USoft uses the practical terms of "SBVR diagram" or "SBVR concept diagram" informally, but they could lead to confusion. The formal specification "Semantics of Business Vocabulary and Rules" (SBVR) published by the Object Management Group (OMG) is not normative about any form of diagramming. It does use a subset of UML diagramming techniques informally in order to visualise concept structure, and thus support better understanding of the specification. This type of diagram is what may be created in USoft Studio as an "SBVR diagram".

Here is a small example of an SBVR concept diagram:

![](./assets/57116afc-4839-4e75-9ad1-3fc74730c626.png)

As you can see, an SBVR concept diagram is characterised by boxes connected by lines that have small black dots in their middle. Each diagram in USoft Studio is mapped to a formulation. If your project has a SBVR diagram, you can find it by finding the formulation that represents it, and then clicking on the "here" link in that formulation. Formulations representing SBVR diagrams often actually *talk* about SBVR diagrams, in which case you can easily find them by searching for the letters 'sbvr':

![](./assets/e3eaa177-b30a-4a20-ae0c-4d4a0632758d.png)

> [!CAUTION]
> It is possible that these formulations do not use the letters 'sbvr' but only, for example, the word 'diagram', or only words describing what the diagram is about. The ending "... is located here" is necessary for a formulation to represent a diagram.

## What is an SBVR concept diagram *for* ?

An SBVR diagram is ideal for visualising how noun concepts ("green" concepts) and verb concepts ("blue" concepts) are interrelated, what different relationships exist between them.

A diagram in USoft Studio is not just a drawing. It offers rich additional practical functionality:

- You can see a definition of a depicted concept by hovering it with the mouse.
- You can click on a "green" or "blue" concept to get, in a sidepane on the right, a structured list of all formulations that use the concept. All the business rules that use the clicked concept appear in the sidepane at this point. If you find one is missing, you can add it.
- In the sidepane, you can do further navigation, or change, drop or add formulations.
- Any text used in the diagram is *automatically* linked to concepts known in USoft Studio project. As a consequence, any text that is NOT green or blue in the diagram is guaranteed NOT to exist as a concept. The fact that "specifies" in the example diagram at the top of this article is black and not green, tells you that there currently exists no such concept as 'rental *specifies* car model'.

An SBVR diagram does not typically offer semantic information that is not already in the formulations themselves. It merely adds a visual depiction of concept structure.

## Binary verb concepts

Binary verb concepts, or binary fact types, are verb concepts ("blue concepts") that involve noun concepts ("green" concepts) in 2 places. Each noun concept involves plays a *role* in the verb concept. Binary verb concepts are depicted by a line connecting 2 boxes:

![](./assets/86b85356-7df2-40c0-83a0-686c18fcbfd0.png)

or, alternatively, by a diamond connecting to 2 boxes:

![](./assets/6dc726a6-46d1-41f4-94b3-85db1fe8f5b1.png)

## Unary verb concepts

Unary verb concepts, or unary fact types, are verb concepts ("blue concepts") that involve a single noun concept (a "green" concept). The noun concept involved plays the *role* in the verb concept. Unary verb concepts are depicted by a box and a diamond connected by a line:

![](./assets/90f7aa7d-f752-41b8-9f87-0636ef3bbd82.png)

## N-ary verb concepts

N-ary verb concepts are verb concepts ("blue concepts") that involve noun concepts ("green" concepts) in more than 2 places. Each noun concept involves plays a *role* in the verb concept. N-ary verb concepts are depicted by a diamond and as many boxes as there are noun concepts involved. The diagram is connected to each of the boxes:

![](./assets/b5dfb243-ed97-4481-9574-b4ca65e886d0.png)

> [!NOTE]
> The USoft Studio language engines that process and colour-code formulations are not capable of recognising n-ary verb concepts in natural language. As a consequence, an n-ary verb concept is unlikely in USoft Studio to be colour-coded as intended. In SBVR documents, n-ary verb concepts are commonly colour-coded with an alternation of green and blue text, but no red or black text:
> car*is available to*rental*on*rental day

## Categories

A category is a noun concept that is a "special case": it shares all the characteristics of another noun concept, the *more general concept*, but it also has one or more characteristics that set it apart. A category is depicted by an arrow line pointing from the category to the more general concept:

![](./assets/1a244fc8-370f-4492-94e0-4ddef71ea0f2.png)

A category can have one or more categories of its own. This can result in entire tree structures of categories (not shown).

A concept can have 2 or any higher number of categories. If categories are mutually exclusive (a *segmentation*), they share the same arrowhead. The picture on the right is equivalent to the picture on the right except that it implies that a one-way rental is never also a car transfer:

![](./assets/07eac36c-8d99-40af-97b1-22183565dc10.png)

## Roles

A role is a point of involvement where a noun concept is involved in a verb concept. In a business domain, there is often a noun that names such a point of involvement, such as "employer" and "employee" in:

![](./assets/53707e67-b2bd-4079-b78a-4d4138747baf.png)

Role names may be placed close to the end of the line that connects the noun concept box to the black dot or the diamond representing the verb concept.

In SBVR, the roles are different concepts than the *general concepts* represented by the boxes. Business speakers, at least those using Western natural languages, typically don't take notice of the difference: they might just as easily speak of "employers hiring people" than of "organisations hiring people".

If a role name is very close to the line, it simply floats in space:

![](./assets/06a075a2-e153-49ae-b9e4-a2632e4a9974.png)

If it is further away, it is connected to the line end by a small dotted line:

![](./assets/f394fa20-1267-4ae5-af63-2d4375c6653f.png)

USoft allows also to represent a role as a box (below). This box can have further connections to other concepts.

![](./assets/ecb04634-74bc-41cc-a83f-804213876414.png)

Here is an example of roles in an n-ary verb concept:

![](./assets/e1a5b3a8-14ca-40c4-8303-1ac2076558a1.png)

## Nominalisations

A nominalisation is a noun concept that summarises a verb concept. It serves as "umbrella term" for the verb concept. A nominalisation is depicted by a box connected by a dotted line to the diamond that represents the verb concept:

![](./assets/f5544e73-0ea5-4b3e-b031-6835fd057ad5.png)

##  

 

##  

 