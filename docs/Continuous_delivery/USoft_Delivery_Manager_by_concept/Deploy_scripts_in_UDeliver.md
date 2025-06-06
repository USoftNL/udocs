---
id: Deploy_scripts_in_UDeliver
---

# Deploy scripts in UDeliver

> [!NOTE]
> This article is about the **deploy script** concept in USoft Delivery Manager ("UDeliver”).

**See also**

- [Creating a deploy script](/docs/Continuous%20delivery/Delivery%20Manager%20basic%20procedures/Creating%20a%20deploy%20script.md)
- [Running a deploy script](/docs/Continuous%20delivery/Delivery%20Manager%20basic%20procedures/Running%20a%20deploy%20script.md)
- [Loading deploy samples](/docs/Continuous%20delivery/Delivery%20Manager%20basic%20procedures/Loading%20deploy%20samples%20and%20added%20XSL%20samples.md)

A *deploy script* is a file-based script written in some script language, typically MS PowerShell or USoft Blend.

### Automated deployment operations

A deploy script allows you to automate the deployment of deliverables on a target machine because it consistst of machine-processable instructions about what to do with the deliverables.

For example, if you deliver a user application called MYAPP, during deployment on a target machine you will have flat files (MYAPP.CON, MYAPP.ESI...) that you want placed in a specific folder. You can make a deploy script that copies the flat files from the folder where they were delivered to the target folder.

### Configuration to target machine

In the UDeliver framework, deploy scripts have knowledge of configuration: the adaptation of deliverables to specific characteristics of the target machine. For example, you may want to deploy application data by logging is as some DBA user on the database, but this DBA user has a different name on different target machines. In the UDeliver framework, deploy scripts read this kind of machine-specific information from a registry file.

### Deploy scripts in UDeliver are deliverables

The UDeliver framework allows you to define deploy scripts as part of what you release: deploy scripts are deliverables in their own right, and their contents may be stored in the UDeliver repository and exported from there.

If you decide to work in this way, you can store a deploy script as an attachment associated with a section. An attachment is a file that UDeliver exports to the release folder on the file system automatically whenever you call a release action. A section is simply a subfolder in the release folder. This way, if you have deploy instructions about what to do with flat files, you can define a deploy script as an attachment to the "flatfiles” section.

Some teams decide they want to produce and maintain deploy scripts away from UDeliver. If you decide to work in this way, you can still have UDeliver task steps that include your deploy scripts in the release. Such task steps will copy files or folders as part of the UDeliver release task.

### Sample Blend deploy scripts

USoft provides sample Blend deploy scripts for teams who want to leverage the USoft Blend scripting framework for deployment purposes. These samples are suggestions about what to do with deliverables on a target machine. These samples also serve as sample code for learners of Blend.