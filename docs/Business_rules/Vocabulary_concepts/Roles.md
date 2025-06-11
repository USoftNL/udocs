---
id: Roles
---

# Roles


:::note

**See also:** [A minimal toolkit of SBVR vocabulary concepts](/Business_rules/Vocabulary_concepts/A_minimal_toolkit_of_SBVR_vocabulary_concepts.md)

:::


:::warning

This article is about **role** as a concept in SBVR conceptual modelling and USoft Studio diagramming. This is completely different from **role** in USoft Definer and USoft Authorizer as an authorisation concept in USoft implementations.

:::

*Naming, colour-coding:* 

![](./assets/fc216863-34dc-4a8e-a11c-0f83e2e5b3aa.png)

*SBVR, graphism:*

![](./assets/4c011e83-3371-48bf-ac06-730b8f346af4.png)

*USoft Studio, graphism:*

(free-floating role names:)

![](./assets/0be60fe9-9e35-4657-99e7-60cfe69da24f.png)

(role names connected to the line end by a dotted line:)

![](./assets/7b7f6ce4-aa9e-4214-a497-fd085d8b924d.png)

(role box:)

![](./assets/b72b6cba-56b4-44bf-8045-414f64e4f236.png)

*USoft Studio, declaration patterns:* 

![](./assets/2e864b7e-ea84-4834-8f0b-53e7aeaabace.png)

There are no specific declaration patterns that allow USoft Studio to understand that you are creating a role rather than a regular noun concept (a so-called *general concept*). Below are just 3 suggestions for formulations you can use when creating a role.

![](./assets/342ce5d1-0fba-4e3a-9259-872b109a1389.png)

## About roles

### General concepts vs. roles

A role is a noun concept that corresponds to things based on their playing a part in a verb concept. Person in the example is a *general concept,* but employee is a *role* because it is based on persons playing a part in labour contracts. It is about people playing a role in the verb concept ‘person*works for*company’. Unlike general concepts, roles are an integral part of the binary verb concept they belong to.


:::note

USoft usually just talks about "(regular) noun concepts”, but SBVR is specific: a *general concept* is a noun concept that is not a role and not an individual concept.

:::

A role does not have a definition of its own. Its meaning depends completely on the meaning of the verb concept it belongs to.

### Do you really need to make the distinction?

In a USoft context, the distinction betweeen general concept and role can appear tenuous. Compare Example 1 and Example 2.

*Example 1*

![](./assets/cb10c0ac-6a12-4a05-9ae1-103815517669.png)

*Example 2*

![](./assets/446a1b08-f06b-40f2-a8da-c6c7ccd07adf.png)

Practitioners on USoft projects can have a tendancy to model Example 2, which is close to data modelling. Example 1 is more correct from a business modelling point of view. There is a practical trade-off, because USoft Studio is not yet able to recognise an occurrence of the verb concept in rule formulations such as "… a person's date of birth ...”. This is a shortcoming of the toolware, because linguistically, this is automatable. It is derivable that this formulation is an occurrence of the verb concept not just of Example 1 but also of Example 2.

The role concept is also helpful to keep in mind at times when you are making sense of a business reality. In the following case, booker could become the name of your foreign key column in the relationship:

![](./assets/6ceb71ec-96d7-43d2-a764-fd63dbe10fcd.png)

If making a booking is exactly what a person turns into a client, then model:

![](./assets/cb836e84-4071-4eb2-affc-38c5bfc77248.png)

Some noun concepts fit the role concept like a glove: trainer and trainee in:

![](./assets/5791fd56-6438-46e7-a61d-1f7b37d653f3.png)

### Categories vs. roles

At a tour operator, if bookers are persons in their role of persons booking tours (that is: if *that* is what distinguishes them from non-booker persons), then model a role and not a category, even if it is true that bookers are a subset of persons:

![](./assets/6c373bc8-fb4c-4bdf-9fa5-6c0aa64aa597.png)

 