---
id: Attachments_in_UDeliver
---

# Attachments in UDeliver

> [!NOTE]
> This article is about the **attachment** concept in USoft Delivery Manager ("UDeliver”).

**See also**

- [Including an attachment](/docs/Continuous_delivery/Delivery_Manager_basic_procedures/Including_an_attachment.md)
- [Blocking an attachment](/docs/Continuous_delivery/Delivery_Manager_basic_procedures/Blocking_an_attachment.md)

An attachment is a file stored in a CLOB in USoft Delivery Manager and associated with a release section.  

Delivery Manager automatically includes the attachment each time you call the release action that writes to the corresponding section folder, if the "Include attachments" flag for the current release is set to Yes at the time of that call, and if the attachment has Blocked = No (the default). These release actions are:

|**Section**|**Release action**|
|--------|--------|
|appdata |Release deliverable appdata|
|custom  |Release custom folder|
|flatfiles|Release flat files|
|metadata|Release metadata|
|publications|Release publication|
|scripts |Release scripts|
|servers |Release server|



You can block an attachment so that, as long as it remains blocked, it is not delivered when you release.

There are many different kinds of attachments that could be useful, such as unpack instructions and developer utilities.

## Unpack instructions

With an eye on the target machine side:

- You could include executable scripts that help operators on target machines deploy your deliverables. These could be .XML scripts processable by the new UBlendIt.exe executable delivered by USoft in the \\BIN subfolder of the USoft installation folder.

- Or you could include non-executable text instructions in the "readme.txt" style that tell operators how to deploy deliverables.

Such attachments could be placed in a "\\deploy" or "\\unpack" subfolder.

## Developer utilities

With an eye on the development environment:

- You could include utilities such as command line scripts or SQL scripts that were used to produce the deliverables and that need to be re-run to produce the same deliverables in a new situation or release.
- Or you could include non-executable text that tells developers how deliverables were made.

Such attachments could be placed in a "\\util" subfolder.