---
id: Creating_a_deploy_script
---

# Creating a deploy script

**See also**

- [Deploy scripts in UDeliver](/docs/Continuous%20delivery/USoft%20Delivery%20Manager%20by%20concept/Deploy%20scripts%20in%20UDeliver.md)

To create a deploy script:

1. If you want a USoft-shipped example as a starting point, load deploy samples, then choose Release, Attachments and query the deploy sample(s) associated with the section you want a deploy script for.

Good practice at this point is to copy the USoft-shipped example under a different, user-defined name, and to continue with that copy.

2. Otherwise, choose Release, Attachments from the menu. Enter the contents of your deploy script on the Document tab from scratch.

3. Set other attributes of the attachment so that the deploy script is output where you want it. Details of this step are here.

4. Run a task step that executes a release action corresponding to the section your deploy script is for.

*Example*

If you created the deploy script for the 'servers' section, run a task step that executes the "Release server" action.

The result of these steps is that your deploy script is output to the appropriate release folder.