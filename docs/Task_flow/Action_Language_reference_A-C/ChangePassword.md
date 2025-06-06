---
id: ChangePassword
---

# ChangePassword()



> [!NOTE]
> This article is about the **ChangePassword** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

## **ChangePassword()**

Allows an application user to change her password by providing the old password, the new password, and another instance of the new password for confirmation.

This action is used in the standard "Change Password Dialog” class that USoft provides for client/server applications.

> [!WARNING]
> This allows users to change their password while they are logged on to the USoft application.
> This is only allowed to users who are running from flat files, not to users who are running from repository.

*Syntax*

```
ChangePassword( *old-password*, *new-password*, *password-confirmed* )
```

The required *old-password* must be the password with which the user is currently logged on.

The required *new-password* is the password that must replace *old-password*.

The required *password-confirmed* must equal *new-password.*