---
id: Component_rights
---

# Component rights

A **component right** is the right for a runtime user to execute (call) methods from an RDMI component defined in USoft Definer.
Conceptually, a table right is a unique combination of:

- The **role** that has the component right,
- The **component** that the component right is about.

The component right is expressed by setting, for this combination:

- A **scope** value (Foreground-and-Background, Background-only, or None).

## Component foreground scope

All job rights have an understood access type, which could be named Call.

In component rights, **foreground scope** has the following meaning:

|**Access right**|**Meaning of Component Foreground Scope**|
|--------|--------|
|Call    |<p>The right to call explicitly (ie., by name) a method of the component. This applies for example when:</p><p>- a user calls the method from SQL Command through the				`invoke component.method()`				statement.<br/></p>|



## Component background scope

In component rights, background scope has the following meaning:

|**Access right**|**Meaning of Component Background Scope**|
|--------|--------|
|Call    |<p>The right to perform some user action that indirectly triggers the calling of a component method. This occurs for example when:</p><p>- a constraint evaluated as a result of surface user action calls a method of the component.<br/>- a user presses a button in a UI and the button action is a script that calls a method of the component.<br/></p>|



## How to define a component right

> [!TIP]
> When defining job rights, be aware of dependencies between access rights. For example, if you define access to a component that itself accesses table data, also think of access to those data. To some extent, USoft Definer helps you by implementing dependencies automatically.

To define a component right for a role:

1.    Choose Define, Roles from the USoft Definer menu.

2.    If the role already exists, retrieve the record for the role. If the role is new, type the role name in the Role field, save, then press F5 (Refresh). Click the Component Rights tab to see the RDMI components listed.

You can see that by default, all the Component Rights have the value 'Default'. This value represents the scope setting for "Default Component Scope" in the upper part of the window.

By default, "Default Component Scope" has the "Foreground-and-background" scope. All this means that by default, a role is allowed to call all the components defined in the application.

3.    If this is OK, you are done. If you want to restrict component rights in some way, you now have a choice:

- If you want to make the same settings for all the components, or nearly all the components, then change the value of "Default Component Scope" at role-level.
- If you want to make a setting that is specific to one component, or only to a small group of components, then leave "Default Component Scope" alone. Instead, make settings on the Component Rights tab for individual RDMI components.