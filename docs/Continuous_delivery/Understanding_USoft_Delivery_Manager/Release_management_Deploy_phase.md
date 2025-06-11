---
id: Release_management_Deploy_phase
---

# Release management: Deploy phase

*Deploy* is the operation of upgrading a target machine to a new version of your USoft application by applying the instructions and data contained in the delivery of that version.

Exactly what must be done to deploy each deliverable depends on the type of deliverable. For example:

- A new publication made in Web Designer must be deployed by replacing the old publication files by the new and then restarting the local Rules Services in scope.

- New metadata (for example, new constraints made in USoft Definer) must be deployed by replacing the old flatfiles by new flatfiles and then restarting the local Rules Services in scope, if the target machine runs from repository. They must be deployed by running delivered metadata XML files if the target machine runs from repository.

## Deploy scripts

It is good practice to deliver instructions about how to deploy each type of deliverable. These can take the form of step-by-step text instructions, executable Powershell scripts, or executable USoft [Blend deploy scripts](/Continuous_delivery/Blend_deploy_scripts/Blend_deploy_scripts.md).

Delivery Manager facilitates the inclusion of an appropriate USoft Blend script for each type of deliverable. As an example, here are the steps for including a default script for deploying flatfiles on target machine TM:

- Load the default registry XML by choosing Release, Load Registry Sample from the menu.
- Edit the registry XML so that it identifies the USoft installation directory on TM, as well as the names and port numbers of the Rules Services in scope on TM.
- Load the default deploy scripts by choosing Release, Load Deploy Samples from the menu.
- Run a task step executing the **Release flat files** action.

The result is that an appropriate USoft Blend deploy script is placed in the **\\flatfiles** release folder. When deployers run the script after delivery, the delivered flatfiles are automatically copied to the correct location, and the Rules Services are restarted.

[Configuration example 1](/Continuous_delivery/Understanding_USoft_Delivery_Manager/Configuration_example_1.md) illustrates the use of a registry for configuring machine-specific information, combined with a deploy script that reads this information at the time when deliverables are deployed.