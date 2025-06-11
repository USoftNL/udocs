---
id: What_is_an_RDMI_component_and_how_do_you_create_one
---

# What is an RDMI component and how do you create one?

A  **component** is a piece of software that is made known to a USoft application so that its methods may be called from constraints, jobs or other USoft constructs.

The component may be coded in a general-purpose object-oriented language such Java or .NET, or in a more specialised language such as Python or R.

Components are the primary interface for a USoft Rules Engine to communicate with the outside world. Calls to component methods that are made from USoft constraints will execute automatically each time the Rules Engine decides to take action to implement a rule. This USoft principle is known as Rules-Driven Method Invocation (RDMI).

USoft has 3 types of RDMI components.

|        |        |
|--------|--------|
|**Custom components**|Components that you write yourself or borrow from an outside source and that you make available to USoft Definer.|
|**Internal components**|Components that are built-in in USoft Definer. These components are available to developers without any special action being required.|
|**Off-the-shelf components**|<p>External components that USoft supplies but that are not built-in by default.</p><p>Unlike internal components, you must perform a simple install action to make these available.</p><p>Unlike internal components, installed off-the-shelf components can be tailored to your needs.</p>|



## Creating a custom component

1. Develop and test the class you want to use in a USoft application. Do this in a language-specific IDE (away from USoft).

2. In USoft Definer, in the catalog, double-click the appropriate subnode of the Components node. In the window, copy-and-paste your code in the program source field. In the Name field, give the component the same name as your programmed class. Save work.

3. In the case of .NET components, specify DLL locations in the Assembly References field. For more information, click the "What's This” icon on the right-hand side of the icon ribbon below the Definer menu, then click the Assembly References field.

4. Press Check. This causes USoft to generate method and method parameter declarations for you.

5. Consider what else is needed to make the USoft calls that you want to make to this component. Special action may or may not be needed in the following fields:

- You may need to make settings about the component's [state](/Extensions/RDMI_Components/Component_state.md) or lack of statefulness.
- You may need to define [Constructor SQL](/Extensions/RDMI_Components/Constructor_SQL.md).
- You may need to define a [query protocol](/Extensions/RDMI_Components/Query_protocol_component_table.md) or [aggregate protocol](/Extensions/RDMI_Components/Aggregate_protocol.md).

## Internal RDMI components

USoft ships a set of *internal RDMI components* for general tasks. These are an integral part of the platform. They are called in the same way as other RDMI components.  The only difference is that they are automatically available: you do not need to declare the component as an RDMI component first.

[Details about these internal components](/Extensions).

|**Internal RDMI component**|**Purpose**|
|--------|--------|
|domain  |Checking a value against rules laid down for a given domain.|
|table   |Getting the next value that will be generated as a unique value for a column of a given table.|
|BatchRunner|Executing a job|
|CurrentUser|Getting and setting user properties for the current user|
|RulesEngine|Programmatically controlling the behaviour of the current Rules Engine|
|USCSXSL |Extending the XSLT 1.0 processor|
|USFile  |Interacting with the file system|
|USFormat|Performing conversions between various IO formats.|
|USMeta  |Query metadata information for programmatic use|
|USPowerShell|Executing PowerShell® scripts from within a USoft application|
|USXSL   |Transforming XML documents with XSLT 1.0|
|XML     |Exporting and importing XML data, creating DTDs, sending queries in XML to the Rules Engine, converting SQL to XML|



## Off-the-shelf RDMI components

USoft offers a variable library of [off-the-shelf components](/Extensions/Off-the-shelf_components/Importing_offtheshelf_components_and_models.md) that you can choose to install after you have installed USoft.

##  