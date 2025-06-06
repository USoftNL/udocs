---
id: Avoid_abstractions_if_you_can
---

# Avoid abstractions if you can

> [!TIP]
> This tip is closely related to : [Avoid type concepts if you can](/docs/Business_rules/How_to_model_a_vocabulary_successfully/Avoid_type_concepts_if_you_can.md).

An *abstraction* is a noun concept for a phenomenon or situation viewed in general, as opposed to: viewed as applying to particular cases. Broadly speaking, abstractions are theory. Particular cases are what you come across in practice. Here are a few abstractions:

![](./assets/7c82bf9a-b7cc-4328-84f6-cd21c4762b25.png)

Abstractions are great for wording general guidelines or policies:

text-align:center;"In situations of high demand, branch desk must take all necessary measures to ensure maximum availability.”

text-align:center;"Customer privacy must be guaranteed during the completion of every customer transaction.”

But abstractions are **not good** for business rules. Business rules must be [practicable](/docs/Business_rules/Good_elements_of_guidance/A_good_element_of_guidance_is_practicable.md). They must really tell people what they should do in a given situation.

One big difference is that abstractions don't have a plural form, whereas things applied to multiple cases usually do have a plural form. In other words: business rules work better with *countable* things, and abstractions are not countable. Contrast:

![](./assets/2042ca5e-f23d-49c9-a14f-c2457a193062.png)

For abstractions that are names of [individual concepts](/docs/Business_rules/Vocabulary_concepts/Individual_concepts.md) (left), it is often possible to find a "countable” [noun concept](/docs/Business_rules/Vocabulary_concepts/Noun_concepts.md) (right) that is a better alternative:

![](./assets/df7c098d-87c5-4635-8e3d-081e371ce765.png)

Here are some abstractions that you can view as a general concept but also as an individual concept:

![](./assets/d05f16a6-f581-4289-bdc1-5a9e80f29362.png)

With this type of abstraction, if you are looking for a countable alternative, you usually need some more creativity. You may need to invent a [unary](/docs/Business_rules/Vocabulary_concepts/Unary_verb_concepts.md) or [binary](/docs/Business_rules/Vocabulary_concepts/Binary_verb_concepts.md) verb concept. If you already have rules in the area, these rules probably need to be completely rewritten:

![](./assets/d5ba19a1-4d8f-4975-a197-d836a9cbf58e.png)

> [!NOTE]
> The example with the *is in-high-demand* unary verb concept is discussed in more detail in Example 4 of [Stepping stones](/docs/Business_rules/How_to_model_a_vocabulary_successfully/Stepping_stones.md).

> [!TIP]
> An abstraction like car maintenance could be perfectly all right if you only have rules with ‘car maintenance’ that talk about ‘car maintenance’ in a general way, not rules that go into what actually *happens* during car maintenance.
> You could have scheduling rules that just mention ‘car maintenance’ as a reason why cars are unavailable to clients at certain times. They are an example of “rules that just talk about car maintenance in a general way”.