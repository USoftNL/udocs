# Applications in UDeliver

An *application* is a software solution built (wholly or in part) with USoft tools, or a tool delivered by USoft to help you build such a solution. An application integrates the three levels of data storage, business rules automation, and one or more interfaces for communicating with humans or other systems or both.

The concept of *application* in Delivery Manager is the same as in other USoft tools. For example, it matches:

- Applications listed in USoft Authorizer.

- Applications as defined and used in USoft Binder, USoft Web Designer, USoft Service Definer, and USoft Windows Designer.

In addition, in Delivery Manager, if you use modular development, consumed *module* names are also considered applications.

In the same way as in USoft Authorizer, applications in Delivery Manager include not only applications and modules that you build yourself, but also applications shipped by USoft:

|**Name**|**Title**|
|--------|--------|
|USAUTH  |USoft Authorizer|
|UDELIVER|USoft Delivery Manager|
|USD     |USoft Definer|
|USERVICE|USoft Service Definer|
|USTESTER|USoft BenchMark|



To define or view applications in Delivery Manager, choose Define, Applications from the menu.

An application defined in Delivery Manager has the following properties.

### Application

The name of the application as it is also known in USoft Authorizer, USoft Binder and other USoft tools.

### Application type

"Top-level", "Module", or "USoft":

- "USoft" applications are applications shipped by USoft.
- Among the applications that you build yourself, in Delivery Manager, you must designate exactly 1 as the "Top-level" application.
- The remaining applications are "Modules".

Each module is either consumed directly by the top-level application, or indirectly because it is consumed by one of the modules, or both. Delivery Manager only keeps a flat list of modules: it does not register which applications consume which modules.

### Version

The version of the application

- that is currently being developed (top-level application), or
- that is planned to be consumed by this version of the top-level application (modules), or
- that was last shipped by USoft (USoft applications).

The version of the top-level application is set automatically by Delivery Manager to the name of the current release. The versions of modules you can optionally register yourself. Ideally, this information should coincide with the current Repository Version in the module's development repository.

Version information about the top-level application and modules is copied automatically to the packing slip when you call release actions, if the current release has "Include packing slip" = Yes.

The "Version" property of USoft applications is not registered. It is automatically set to NULL (the empty value).

### USoft version

The version of the USoft tools that the top-level application or a module is being developed with, or that consumed modules were developed with. In tasks, you can have Delivery Manager retrieve this information by calling the Extract USoft version action.

Version information about the top-level application and modules is copied automatically to the packing slip when you call release actions, if the current release has "Include packing slip" = Yes.

The "USoft version" property of USoft applications is not registered. It is automatically set to NULL (the empty value).

### Source for pre-upgrade check

The database account against which you want to check the correctness of SQL statements in **pre-upgrade** scripts.

If you have a way of working where the previous state of the application (the state of the previous release) is still available in a repository, you want to have pre-upgrade scripts checked against this state. In this case, this property should be set to the database account where this repository resides.

This property is required for the top-level application. It is relevant only when you check upgrade scripts with Processing Order = Pre-upgrade. Until such time, you can set it to the same database account as "Source for post-upgrade check", namely, the location where the application is being developed.

### Source for post-upgrade check

The database account against which you want to check the correctness of SQL statements in **pre-upgrade** scripts.

This property is relevant only when you check upgrade scripts with Processing Order = Post-upgrade.

This property is required for the top-level application. Set it to the database account where the application is being developed.

### Description

An optional field for notes about the application.

 

 