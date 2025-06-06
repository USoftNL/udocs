---
id: ESI_Action_Interface__Introduction
---

# ESI Action Interface - Introduction

The ESI action interface enables you to use external programs to define the look and feel of your application, rather than use the Windows Designer. Using the ESI action interface involves writing and executing scripts in batch mode with action calls that insert the required objects and controls, set their properties, etc.

> [!WARNING]
> A thorough understanding of the internal object architecture and the hierarchical relationships between objects is required to use this feature successfully.

> [!WARNING]
> Do NOT use both the ESI action interface and the Windows Designer on the same application GUI.

 

## Differences between Windows Designer interaction and ESI action interface

When you set the properties of objects in the Windows Designer, you are "painting" objects and their components through WYSIWYG functionality. This WYSIWYG functionality mediates between what you are doing in the Windows Designer, and how these classes are represented/defined internally in the ESI repository. This mediation is possible because you are working on example instances of classes. You are editing by example.

If you use the ESI action interface, you edit the ESI object model directly via scripts with action calls. You do NOT work on example instances, and there is no mechanism to mediate for you. Therefore, there is much for you to understand before you use the ESI action interface:

|        |        |
|--------|--------|
|**Subject**|**Remark**|
|Session edits|What an ESI action script does basically is to perform an edit session. That is, you open an existing application or create a new one, and then you perform class definition and class manipulation activities.|
|Class definition|In the class definition activity, you add or delete classes by calling the corresponding actions (instead of doing it interactively).|
|Class manipulation|In the class manipulation activity, you repeatedly select components, modify their properties, and then save your work.|
|Component selection|To select components you must manually provide context identifiers, (rather then by means of pointing and clicking).|
|Property modification|Properties are modified by setting properties, and by inserting or deleting controls. Again this is done by calling the corresponding actions.|



 

 