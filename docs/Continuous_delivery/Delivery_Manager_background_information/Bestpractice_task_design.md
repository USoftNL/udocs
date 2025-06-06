---
id: Bestpractice_task_design
---

# Best-practice task design

*Task design* is the activity of finding out what is the optimal sequence of DTAP actions that you want Delivery Manager to perform.

Task design is especially important for the task or tasks that are going to be your *release procedure.*

This help topic contains tips for good task design.

### Signpost the release procedure

While Delivery Manager is intended also for related tasks, in practice its primary purpose is to *release application deliverables.* All other functionality is in support of this goal.

Make sure that it is absolutely clear to the entire team which task or tasks are the release procedure. There should be a single release procedure.

One way of signposting the release procedure is to place the task(s) that executes it in a task category called "Release", and not to allow any other tasks to be placed in this task category.

If you have multiple tasks for executing the release procedure, you may want to create tasks with names like "Release 1 - Standard", "Release 2 - Extras".

### Have a policy for "major" and "minor" releases

Delivery Manager only allows you to release a linear sequence of application versions that follow each other in time. It does not enforce that you release everything in each version. If you want to, you can have a release that contains only a single file or folder.

On the one hand, it is good practice to make complete packages of deliverables for each release. This way, a release package is "stand-alone". Deployers do not need any components from previous releases, which could be error-prone. Delivery Manager makes it easy to achieve this. Make sure you deliver all the components in the release procedure. Then make sure you use that procedure each time you create a new version. This way of working could be termed "full release".

On the other hand, it may be practical to be allowed releases that contain only a small fix. That way, it is easier for everybody to spot where the difference is, and many delivery tasks can be cut out. This way of working could be termed "patch release".

Have a policy for release statuses. For example, keep the principle to allow only full releases if this is acceptable in your situation. Otherwise, use a naming system for application versions that allows you to distinguish full releases (eg., '2.0.1', '2.1') from patch releases (eg., '2.0.1K').

### Prefer release tasks over simple utilities

In Delivery Manager, you can perform release operations in many alternative ways. Many deliverables can be released using release actions that aim to automate most aspects of the operation, but also by using utilities that are intended as manual actions.

If you can use release tasks, do not use simple utilities. Release tasks are less error-prone. For example, they make sure that obsolete components are automatically removed.

### Manage the "custom" section manually

Delivery Manager has a section called "custom" that is exactly that: it is the location intended to contain non-standard deliverables that are special to your application. Best practice is to clearly divide standard deliverables from custom deliverables:

- Avoid placing standard deliverables in "custom". Delivery Manager allows you to place USoft flatfiles in "custom", but this is not good practice. Use the "Release flatfiles" action, which automatically places flatfiles in the "flatfiles" section.

- Clearly signpost the delivery of custom deliverables. In your release operations, group the task steps for custom deliverables together by giving them neighbouring sequence numbers or by creating a separate task for them.

- Be aware that Delivery Manager treats the "custom" section differently from other sections. It does not automatically drop folders from "custom" every time it writes to "custom". The best design, if it is acceptable in your situation, is to start by calling the "Drop custom folder" with **${release}\\custom** as the value of the Destination Folder Path parameter. Then, fill the now empty \\custom folder by successive actions, each of which adds an individual custom deliverable. By contrast, each of the non-"custom" sections is best delivered in 1 go. If you have additional deliverables, your first choice should be to declare these as attachments.