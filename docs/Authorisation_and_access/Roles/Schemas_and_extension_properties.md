---
id: Schemas_and_extension_properties
---

# Schemas and extension properties

With schemas and extension properties, you can make available application-specific runtime properties for the application, for roles, and for users.

This allows you, for example, to store extra runtime information about users, such as e-mail addresses or phone numbers. Prior to the introduction of schemas and extension properties in USoft 10.0, USoft Authorizer was not aware of any user properties beyond the username and password.

USoft Definer is the design-time environment for **defining** (creating) these extension properties.

USoft Authorizer is the runtime environment for **setting** or resetting these extension properties to a value. The property definitions are read from the application.CON flat file (or from repository tables when you are in Development) into USoft Authorizer as part of the Fill Authorizer Tables routine in USoft Authorizer. This causes the properties to appear in the Authorizer windows for the Application, for Roles, and for Users.

**Schemas** allow you to declare extension properties in a technology-specific format, and then to generate extension properties on the basis of that format. Currently, USoft supports the generation of properties from SCIM schemas. Similar future functionality is planned for ADFS and LDAP.

> [!WARNING]
> The term schema does not refer to relational data structure or metadata. It refers to a predefined data structure in SCIM, ADFS or LDAP.

## Defining an extension property

To define and test an extension property:
1.    In USoft Definer, choose Define, Extension Properties from the menu. Type the Name of the property, select the Context of the property (Application, Role, or User), define an optional Default Value and type a Description. The Description is important because this is the information that runtime administrators will have to go by when they want to use the property in USoft Authorizer in Production.
    The property is set to Active = Yes by default. Setting Active = No for a property has the same runtime effect as removing the property.

> [!NOTE]
> The Descriptors related box at the bottom of the Extension Properties window applies only when you generate extension properties from a schema.

2.    To test the runtime effect, in USoft Authorizer, run Fill Authorizer Tables for the application. Choose Tools, Fill Authorizer Tables from the menu and then specify the application name, or double-click the application in the Authorization catalog tab and then press the Fill Authorizer Tables button.
3.    See that the property is now made available and is (re)settable to a value at the correct level (Application, Role or User).

> [!TIP]
> At runtime, the [internal component](/docs/Extensions/CurrentUser_internal_component) allows you to get or set values of extension properties for the current user dynamically.

## Generating extension properties from a schema (for e.g., SCIM)

This functionality is currently supported only for SCIM.
To generate extension properties from a SCIM schema:
1.    In USoft Definer, choose Define, Schemas from the menu. Set Protocol Type = SCIM, type the Name of the property, and select the Context of the property (Application, Role, or User).
2.    In the Schema box, paste the SCIM schema that you want to generate properties from. The following is the first section of a typical SCIM schema for user properties:

```language-json
{
   "name": "User",
   "id": "urn:ietf:params:scim:schemas:core:2.0:User",
   "description": "User Account",
   "schemas": [
      "urn:ietf:params:scim:schemas:core:2.0:Schema"
   ],
   "attributes": [
      {
         "referenceTypes": [],
         "name": "userName",
         "type": "string",
         "multiValued": false,
         "description": "Unique identifier for the User, typically used by the user to directly authenticate to the service provider. Each User MUST include a non-empty userName value.  This identifier MUST be unique across the service provider's entire set of Users. REQUIRED.",
         "required": true,
         "caseExact": false,
         "mutability": "readWrite",
         "returned": "default",
         "uniqueness": "server"
      },
      {
         "referenceTypes": [],
         "subAttributes": [
            {
               "referenceTypes": [],
               "name": "formatted",
. . .
```

3.    Press Generate Properties. At the bottom of the window, in the Extension Properties related box, see that a list of properties generated from the schema in the Extension Properties.
    The generated properties are an addition to the overall list of Extension Properties. To see this, choose Define, Extension Properties from the Definer menu and query. See that the generated properties have Descriptor related information.
4.    To test the runtime effect, in USoft Authorizer, run Fill Authorizer Tables for the application. Choose Tools, Fill Authorizer Tables from the menu and then specify the application name, or double-click the application in the Authorization catalog tab and then press the Fill Authorizer Tables button.
5.    See that the generated properties are now made available and are (re)settable to a value at the correct level (Application, Role or User).

 