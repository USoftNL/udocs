---
id: Deployment_configurations
---

# Deployment configurations

A **deployment configuration** is a set of parameter-value pairs. In this set, each of a fixed set of [deployment configurations parameters](/Authorisation_and_access/Deployment_configurations/Deployment_configuration_parameters.md) is set to a specific value. These settings influence the runtime behavior of USoft during a session.

When a user logs on to the application, exactly 1 deployment configuration is selected:

- If the application runs with distinct roles, this is the deployment configuration of the default role of the user logging on.
- If the application runs with merged roles and all the roles to be merged have the same deployment configuration, this is the deployment configuration of those roles.
- If the application runs with merged roles and not all the roles to be merged have the same deployment configuration, this is the 'LAN' deployment configuration if present, or otherwise the first deployment configuration in alphabetical order.

When you run Create Tables for USoft Authorizer, USoft automatically creates a deployment configuration called 'LAN'. When you run Fill Authorizer Tables in USoft Authorizer, USoft associated all the imported roles with this 'LAN' deployment configuration by default.


:::tip

Do not differentiate between deployment configurations unless and until you have a clear need. Until that time, use the 'LAN' default.

:::


:::tip

You can influence a number of other aspects of Rules Engine behaviour by setting [Rules Engine parameters](/Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/Rules_Engine_parameters.md).

:::

## Contexts

A deployment configuration has settings for different deployment configuration *contexts*. A setting applies only for users who run the application in the applicable context.

Thus, almost every parameter allows 3 individual settings, one for each of the 3 contexts. A small number of parameters apply to one context only.

|**Deployment configuration context**|**Description**|
|--------|--------|
|Client Server|Behavior of the Rules Engine if accessed interactively through a USoft client/server interface which is either the USoft default application|
|RunBatch|Behavior of the Rules Engine if accessed by running a USoft batch job in batch mode, that is, by running "runbatch.exe" as opposed to calling the job in an interactive routine such as a screen button executing INVOKE BATCHRUNNER statement.|
|Rules Service|Behavior of the Rules Engine if accessed by a USoft Rules Service.|



###  

 