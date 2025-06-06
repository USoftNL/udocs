---
id: CurrentUserSetProperty
---

# CurrentUser.SetProperty




:::note

This article is about the **SetProperty** method of the [CurrentUser internal component](/docs/Extensions/CurrentUser_internal_component).

:::

## **CurrentUser.SetProperty**

In the runtime application, sets or resets, for the current user, an extension property defined for the User context. Such a property is defined in USoft Definer. Its value is set in USoft Authorizer.

This method updates the value in the Authorizer table immediately, using a separate transaction. If this is successful, the value as held internally is also updated.

Returns 'Y' if the operation was successful, otherwise 'N'.

*Syntax*

```sql
SELECT CurrentUser.SetProperty( *property-name, property-value* )
```

The required *property-name* is a string that is the name of the extension property. The required *property-value* is a string that is the new value.

*Example*

```sql
SELECT CurrentUser.SetProperty( 'email', 'new_address@user.com' )
```

 