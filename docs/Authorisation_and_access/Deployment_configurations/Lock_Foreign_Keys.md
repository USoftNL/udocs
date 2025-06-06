---
id: Lock_Foreign_Keys
---

# Lock_Foreign_Keys



> [!NOTE]
> This article is about the **Lock_Foreign_Keys**[deployment configuration parameter](/docs/Authorisation%20and%20access/Deployment%20configurations/Deployment%20configuration%20parameters.md).

## **Lock_Foreign_Keys**

*Allowed values*

{ True \| False }

The underlined value is the USoft factory default. It applies if you have not set this deployment parameter to a different value.

*Context*

This parameter may be set for all 3 deployment configuration contexts: Client Server, RunBatch, and Rules Service.

You can set this parameter in the Additional Parameters list at the bottom of the tab page for each context. To get there, in USoft Authorizer, choose Define, Deployment Configurations from the menu.

*Explanation*

You can use this parameter to specify whether the parent record must be locked when foreign keys are checked.