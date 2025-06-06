---
id: Unary_verb_concepts
---

# Unary verb concepts

> [!NOTE]
> **See also:** [A minimal toolkit of SBVR vocabulary concepts](/docs/Business%20rules/Vocabulary%20concepts/A%20minimal%20toolkit%20of%20SBVR%20vocabulary%20concepts.md)

 

*Naming, colour-coding:*

![](./assets/37ad7661-19f7-4391-b1b1-dadca3e14957.png)

*SBVR, graphism:*

![](./assets/d0f5d0f7-6a44-442f-a7b6-6ac378d1ad42.png)

*USoft Studio, graphism:*

![](./assets/1c280f8e-206e-4ba5-a5c1-3bd95c0413f1.png)

*USoft Studio, declaration pattern:*

![](./assets/b45b8030-712f-47f1-b679-a72aa00d3cd5.png)

## About unary verb concepts

### Over time, objects go "in and out” being involved in unary verb concepts

A unary verb concept is a verb concept that involves just 1 noun concept in a role.

Use a unary verb concept when objects designated by the noun go "in and out” playing the role over time.

Examples include:

- Cars becoming available and then unavailable
- People being married or single
- Things reaching a stage or milestone in time: investigations being closed and re-opened

### Contrast unary verb concepts and categories

The fact that an object has an *innate* property that never changes over time is better modelled as a category and not as a unary verb concept:

![](./assets/6f2248f8-4306-4984-b54e-568bdc8c3345.png)

rather than:

![](./assets/a9446c25-3e1e-4b07-8932-4fe6412a91cd.png)

### Binary verb concepts are often more appropriate in USoft

In USoft you often model with the ultimate goal of producing a supporting administrative software application.

Unary verb concepts usually lead to Yes/No checkboxes in a database table when you come to implement them in a USoft application.

However, in USoft application modelling, binary verb concepts are often more practical, because the USoft platform is very strong at matching and relating instances in dual relationships. Consider having the concept:

car*is available to*rental

as an alternative to:

car*is available*

### Other verbs than 'is’

The linking verb in the middle of a unary verb concept is very likely the word **is**.

Sometimes it is another verb. In these cases, USoft Studio currently has the limitation that it cannot recognise unary verb concepts with verbs other than "is”. This is not just a limitation: there is another side to this issue. You can certainly decide to model

storage depot*has limited storage capacity*

and this would be a valid idea, but it is often more appropriate to model the storage capacity and its various possible degrees as separate concepts.