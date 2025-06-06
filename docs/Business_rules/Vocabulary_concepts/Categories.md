---
id: Categories
---

# Categories


:::note

**See also:** [A minimal toolkit of SBVR vocabulary concepts](/docs/Business_rules/Vocabulary_concepts/A_minimal_toolkit_of_SBVR_vocabulary_concepts.md)

:::

 

*Naming, colour-coding:*

![](./assets/c3281552-7c7f-48ae-814b-0578eae8123b.png)

*SBVR, graphism:*

![](./assets/952f3e7d-e4be-4bcd-8430-bcef1984f8e1.png)

*USoft Studio, graphism:*

![](./assets/38c399fc-4ce7-423f-9b2b-3e12612b387e.png)

*USoft Studio, declaration patterns:*

![](./assets/c15ef03d-dce1-4ff9-bedf-10b54d565595.png)

## About categories

### Categories and more general concepts

A category is a "special case” of another noun concept, its *more general concept.*

Cars are a category of vehicles. They have all the properties of vehicles, such as being a means of transport and perhaps having wheels. In addition, they have properties of their own, such as being motorised, having 4 wheels, and being primarily intended for the transport of persons.

Instances of a category have all the properties that instances of its more general concept have, and in addition, one or more special properties of their own. These special properties cause them to be instances not just of the more general concept but also of the category.

### Taxonomies

A **taxonomy** is a structure where each category has exactly 1 more general concept:

![](./assets/49bb4c32-9e4f-4fb1-94e1-b5e7a531fed6.png)

You can also have structures of categories that are not taxonomies. Categories in such structures have multiple more general concepts:

![](./assets/3544af98-31a5-42ef-b7b6-8b3ad87d7120.png)

### Segmentations

A **segmentation** is a structure where where each instance of a more general concept falls in exactly 1 of multiple categories. You can indicate a segmentation in a diagram by a single arrow line with a split base, rather than individual arrow lines:

![](./assets/6dd9af22-d6b6-48ea-9f73-369a8d1411a9.png)

Diagrams have only informative, accessory status. Make sure you also formulate a structural rule:

**“Each agency is exactly one of the following:**

**- airport desk**

**- city branch**

**- hotel desk.”**

Please note that the following diagram perhaps *suggests* a segmentation to many readers, but does not imply anything about the way in which agencies fall into the 3 categories:

![](./assets/e13e5397-2691-44be-a3f4-30a64cf4a4b8.png)

### Contrast categories with unary verb concepts

Categories are for collections of *innate* properties: characteristics that instances have all the time. Contrast with unary verb concepts. Do not model:

![](./assets/fe2c3ef9-3758-459a-abe3-3c0b0aee6d9e.png)

Instead, model:

![](./assets/94edb140-e437-4499-8995-922a1553d2f8.png)

### Do not over-model categories

Do not get into the habit of distinguishing intricate structures of categorisation if this not essential for your purpose, which in USoft is often to achieve a software application that is fit for purpose.

Categories seem to give a sense of clarity, especially in their diagram form, but in reality they are likely to introduce unnecessary complexity.