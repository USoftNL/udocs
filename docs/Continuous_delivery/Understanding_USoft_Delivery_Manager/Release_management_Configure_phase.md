---
id: Release_management_Configure_phase
---

# Release management: Configure phase

To *configure* is to make an arrangement of interdependent hardware and software components on a given system (computer, machine).

In USoft Delivery Manager, *Configure* is the operation of tailoring deliverables (or the way in which they are deployed) to the required situation on a specific target machine. For example, you may want a USoft web application to log information to a file in a folder called

```
C:\Program Files\USoft\logs
```

on one machine, but in

```
C:\Usd91\logs\WebApplication
```

on another machine.

Best practice is to keep configuration to a minimum. If you have no special reason to name a USoft log directory differently between target machines (or even between a target machine and Development), then you should choose the same folder name on each machine.

Still, there are often practical reasons why configuration remains desirable.

Delivery Manager supports 2 special configuration strategies. They are both optional. If you want to use them, you will have to script parameters and values yourself, but Delivery Manager proposes an effective and manageable framework in which you can do this.

|**Configuration strategy**|**Use for**|**Requires**|
|--------|--------|--------|
|[Configuration by variable substitution](/docs/Continuous_delivery/Understanding_USoft_Delivery_Manager/Configuration_by_variable_substitution.md)|<p>XML-based and text-based deliverables</p><p>Parameterisation on the basis of name-value pairs</p><p>Parameterisation by target computer</p><p>Parameterisation by something else than target computer, eg., environment, instance, user, etc.</p><p>Same variable substituted in multiple places</p><p>Find-and-replace in text-oriented deliverables</p>|Understanding of simple, standardised XSLT mechanisms as exemplified in Delivery Manager sample code|
|[Configuration by XSL transformation](/docs/Continuous_delivery/Understanding_USoft_Delivery_Manager/Configuration_by_XSL_transformation.md)|<p>XML-based deliverables only</p><p>More complex substitutions (transformations)</p><p>Changes that include additions and deletions</p><p>Changes that include redistribution of information across files</p><p>Creation of additional deliverables</p>|Ability to implement XSLT 1.0 transformations|



 