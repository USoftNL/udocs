---
id: Contexts_and_result_types_in_UDeliver
---

# Contexts and result types in UDeliver

> [!NOTE]
> This article is about the **context** and **result type** concepts in USoft Delivery Manager ("UDeliver”).

A *context* is an area of application where Delivery Manager may be useful:

|**Context**|**Description**|
|--------|--------|
|Prepare |Operations performed during development and in preparation of an application release.|
|Release |Operations that consist of making application deliverables available to target machines.|
|Merge   |Operations that consist of applying knowledge about components on a target machine to adapt deliverables to deployment on that particular machine.|
|Deploy  |Operations that consist of actually implementing released, and possibly merged, deliverables on a target machine.|
|USoft routines|Operations that consist of performing a routine that is available as part of the functionality of a USoft tool (USoft Definer, Windows Designer, Web Designer, Service Definer).|
|Utilities|Non-USoft-specific, general operations, in particular file system operations.|
|Data management|Operations that consist of importing, exporting, clearing, comparing and transforming data sets other than in the context of releasing, merging or deploying those data.|



A *result type* is a type of outcome that an Action in Delivery Manager has. You can view the different result types on the Actions tab of the UDeliver catalog.

Contexts and result types are 2 ways of classifying Actions. These classifications are visible in the Actions tab of the Delivery Manager catalog. These classification may change between USoft patches. You cannot alter these classifications.

> [!TIP]
> The only purpose of the **context** and **result type** concepts is to provide wayfinding and increase understanding. They have no impact on the effect of UDeliver operations.