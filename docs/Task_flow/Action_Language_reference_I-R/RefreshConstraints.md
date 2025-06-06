---
id: RefreshConstraints
---

# RefreshConstraints()




:::note

This article is about the **RefreshConstraints** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **RefreshConstraints()**

Refreshes all constraints in a running application. Calling this action removes all constraints from the memory of the running application. When starting a new transaction, the necessary constraints will be read from the repository again. During development, this action allows you to read new or changed constraints without having to restart your application.

*Syntax*

```
RefreshConstraints()
```

Alternatively, you can also make use of the Auto_Refresh_Constraints additional parameter to automatically refresh constraints. Go to the USoft Authorizer Guide for details.