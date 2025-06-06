---
id: About_object_shopping
---

# About object shopping

**Object shopping** is the facility offered in the Teamwork, Object Shopping menu of USoft Definer. This facility enables you as a developer, without any coding, to compose a "shopping basket" or Export Definition of related objects (such as Domains, Tables, Roles, Components...). You can now export this collection of objects and import it in a different repository.

This facility has the built-in intelligence to include objects that are necessary for the objects that you place in the basket to work in a different repository. It uses **inclusion rules** for this.

This facility makes use of XML export and import features. Over and above object shopping, USoft offers an entire toolkit of features for exporting, importing, transforming, comparing, and reporting repository data using XML and XSLT technology.

Object Shopping is transparent across RDBMSs. For example, you can shop objects from Oracle into SQL Server.

## Shopping GUI objects

Object Shopping is limited to non-GUI objects, but:

- In USoft Windows Designer, you can export individual interface definitions or groups of definitions. You can then import the result in another repository. Please go to the Windows Designer Guide for more information.
- In USoft Web Designer, you can export and import Classes listed in the Page Class and Control Class tree hierarchies. You can then import the result in another repository, provided that all the objects that the transferred object refers to (inherits from) exist in the target repository. Please go to the Web Designer Guide for more information.

## Objects excluded from Object Shopping

The following objects are excluded from the Object Shopping mechanism. They are never automatically included in any other object:

- Business rule history entries.
- Current version.
- Data types.
- Design documents.
- EAR diagrams.
- GUI applications.
- Joined columns (as opposed to Database columns).
- Menu Pages. Pages (create in Web Designer).
- Page Sets.Test needs.
- Web Service Providers.
- Window classes.

 