---
id: CurrentUserGetProperty
---

# CurrentUser.GetProperty



> [!NOTE]
> This article is about the **GetProperty** method of the [CurrentUser internal component](/docs/Extensions/CurrentUser_internal_component).

## **CurrentUser.GetProperty**

In the runtime application, gets the value set for the current user of an extension property defined for the User context. Such a property is defined in USoft Definer. Its value is set in USoft Authorizer.

> [!NOTE]
> This retrieves property values set at the time when the runtime application was started.

Returns the value if it is available. Otherwise, returns the NULL value.

*Syntax*

```sql
SELECT CurrentUser.GetProperty( *property-name* )
```

The required *property-name* is a string that is the name of the extension property.

*Example*

```sql
SELECT CurrentUser.GetProperty( 'email' )
```

 