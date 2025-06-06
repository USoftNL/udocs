---
id: Release_management_Flag_for_release_phase
---

# Release management: Flag for release phase

When you are developing new functionality in your USoft application, or when you are fixing bugs, it's not enough to simply make changes and expect that they will be perfectly released at some later time.

### What is flagging for release?

Say you move application data from a column A to a column B. At build time, it is easy to create a new database column B, move all the data from existing column A to new column B, and then drop column A. But to make sure this happens successfully in Production and on other non-Development machines later, you must make special arrangements. Otherwise, the standard create-tables script will create column B and drop column A as part of the same default operation. The data will be lost before they can be moved.

To prevent this, a developer must have some way of signalling or *flagging* data that must be preserved during release-and-deploy, and also provide a way of knowing *how* they are preserved. This need to signal, at build time, something that must happen at release-and-deploy time applies not only to moved data, but to all kinds of other deliverables as well.

### How does USoft Delivery Manager help?

Build time is usually the best time to identify the operations that must take place at release time. Unfortunately, this task is error-prone. It is only human for a developer to focus on the changes themselves. Having to think *at the same time* about how these changes must be released and deployed later, is a tall order. USoft Delivery Manager supports developers in two ways:

- Many changes are *automatically* flagged. For example, if a developer changes a constraint, this change is automatically flagged by Delivery Manager's compare facility.

- Delivery Manager makes it easier to *simulate* delivery to a test environment with a minimum of manual action. This allows developers, at low cost, to do a test release, predict from findings what is needed at release time, and so remind themselves of changes that must be flagged.

### Upgrade scripts as explicit flags for release

A typical example of changes that cannot always be flagged automatically is the impact of *new* developments (released from Development) on *existing* data (in Production). This is not always a purely technical issue. When a financial calculation changes, the new calculation method is a business decision. But it is also a business decision whether or not existing data must be re-computed in the new way. The way that the change is flagged-for-release (or not) must be considered an integral part of the new functionality. It is the implementation of a business rule about the transition to the new situation.

This type of flagging-for-release can usually be implemented in USoft Delivery Manager itself by defining upgrade scripts*,* which are essentially instructions in SQL about how to deal with existing data during a release operation that involves rule change or data change.

Upgrade scripts are, however, just one aspect of flagging-for-release. Another example is an instruction to install a new version of some 3rd-party software, maybe a reporting tool, as part of a release of your USoft application.

Such instructions can be so diverse that USoft Delivery Manager cannot offer help with automating them. But what it can still do is offer a *structure* where the flags are easily defined, traced and remembered. A 3rd-party software executable could be placed in the **\\custom** subfolder of the Delivery Manager release folder, which makes the install instruction traceable to the release version.