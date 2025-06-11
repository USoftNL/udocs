---
id: Individual_concepts
---

# Individual concepts


:::note

**See also:** [A minimal toolkit of SBVR vocabulary concepts](/Business_rules/Vocabulary_concepts/A_minimal_toolkit_of_SBVR_vocabulary_concepts.md)

:::

 

*Naming, colour-coding:*

![](./assets/3423c593-8c7a-4488-8f9c-14ecd185a2af.png)

*SBVR, graphism:*

![](./assets/c272f5e7-0c89-46d2-9499-fce2081ff403.png)

*USoft Studio, graphism:*

![](./assets/f672d197-2b84-478a-a132-e1ff62e95ac9.png)

*USoft Studio, declaration pattern:*

![](./assets/3b679cd9-0476-4e26-89ad-4191cb63c2fc.png)

## About individual concepts

An individual concept is a noun concept that corresponds to only 1 instance in reality. Individual concepts are "special”: your model will contain many regular noun concepts, and only a few individual concepts. Still, they are not unimportant. Your model is easier to read and understand if you recognise individual concepts for what they are.

In English and Dutch, individual concepts are usually spelled with one or more capital letters, but you cannot recognise them by the capital letters. Regular noun concepts are usually spelled all-lowercase (apart from capitals marking the first letter of a sentence), but not always: Gold Card customer.

Individual concepts don't have a plural, but you cannot recognise them by this fact either. Regular noun concepts that are for substances, fabrics, abstractions… also don't have a plural: electricity, wool, availability.

Mathematical numbers are individual concepts:

![](./assets/abb9635e-6643-452b-99a6-1282c02b1d20.png)

Combinations of a number and a unit of measurement are individual concepts:

![](./assets/d15dcba0-e942-4cee-9de7-79300c719f66.png)

Indications of date and time are individual concepts:

![](./assets/2ad2d2c1-ee66-4453-aac8-16a2fce7b294.png)

Names of institutions, geographical and political entities, and individual persons are individual concepts:

![](./assets/66d30173-7e08-49c5-99eb-208aa705cee1.png)

You can have a constant in a business rule:

![](./assets/82d57cd9-6a02-411b-ba1c-884365f3738e.png)

Alternatively, you can name the constant, and use the name in the business rule:

![](./assets/51c1aa27-969e-418d-a26c-b2c10fb34359.png)

If a vocabulary is for a single community, and they have 1 Advisory Board, it may be appropriate to model:

![](./assets/469779fd-381c-48b3-9b58-02ec8f882648.png)

If a vocabulary is for a government body formulating rules about advisory boards in companies, it may be more appropriate to model:

![](./assets/8ce1f5c3-4b01-465a-9662-05c9fdea50ba.png)

Likewise, if a vocabulary is for proceedings within a single country, it may be appropriate to have:

![](./assets/24190a38-edd4-4cc1-a980-45b4332ef8f4.png)

If a vocabulary deals with multiple nation states, each with their own high VAT percentage, you need:

![](./assets/85317526-04d7-4d03-81e7-95f2ddb10904.png)

In banking, many noun concepts are for subtotal amounts calculated for a specific purpose. If you can, you should tie these subtotals to *cases*, for example: counterparties or contracts, because this allows you to see them as regular noun concepts. This allows you to write business rules more successfully, as explained here. Don't conceptualise an abstraction (below on the left). Instead, conceptualise a regular noun concept that applies to multiple cases (below on the right). The words in bold show the (often subtle) differences in the wording of definitions prompted by these model differences:

![](./assets/f82177b5-ba6c-4052-a4bb-5184cb7967bd.png)

 