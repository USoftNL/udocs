---
id: Deployment_configuration_parameters
---

# Deployment configuration parameters

You can set about 15 different *deployment configuration parameters* that influence the runtime behavior of the USoft Rules Engine in various contexts. A list is below.

You can set these parameters independently for 3 *contexts*:

- Client Server
- Runbatch
- Rules Service

In theory, you can declare multiple Deployment Configurations (multiple sets of deployment configuration parameters) and attach these to different Applications or Roles.

In practice, most teams use the default 'LAN’ deployment configuration for all applications and roles, and they make parameter settings within this 'LAN’ configuration.

### Setting a deployment parameter

To set a deployment parameter:

1. Choose Define, Deployment Configurations from the USoft Authorizer main menu.

The Deployment Configurations info window is opened.

2. Query the 'LAN' deployment configuration by pressing the F2 key and then the F3 key.

3. Select the deployment context for which you want to make the setting. Do this by selecting a tab page (Client Server, RunBatch, or Rules Service).

4. On the tab page, find the deployment parameter you want to set. It is either in the General box at the top, or in the Additional Parameters list at the bottom of the tab page.

5. Set the value of the parameter. Save Work.

|**Deployment configuration parameter**|
|--------|
|[Cache Size](/docs/Authorisation_and_access/Deployment_configurations/Cache_Size.md)|
|[Max Prepared Checks](/docs/Authorisation_and_access/Deployment_configurations/Max_Prepared_Checks.md)|
|[Allow_Disable_Constraint](/docs/Authorisation_and_access/Deployment_configurations/Allow_Disable_Constraint.md)|
|[Auto_Refresh_Constraints](/docs/Authorisation_and_access/Deployment_configurations/Auto_Refresh_Constraints.md)|
|[Batch_Loglevel](/docs/Authorisation_and_access/Deployment_configurations/Batch_Loglevel.md)|
|[Lock_Foreign_Keys](/docs/Authorisation_and_access/Deployment_configurations/Lock_Foreign_Keys.md)|
|[Max_Constraint_Depth](/docs/Authorisation_and_access/Deployment_configurations/Max_Constraint_Depth.md)|
|[Max_Driver_Conditions](/docs/Authorisation_and_access/Deployment_configurations/Max_Driver_Conditions.md)|
|[Number_of_Update_Columns](/docs/Authorisation_and_access/Deployment_configurations/Number_of_Update_Columns.md)|
|[Optimize_Changed_Table](/docs/Authorisation_and_access/Deployment_configurations/Optimize_Changed_Table.md)|
|[Request_Log_Size](/docs/Authorisation_and_access/Deployment_configurations/Request_Log_Size.md)|
|[Show_Component_Errors](/docs/Authorisation_and_access/Deployment_configurations/Show_Component_Errors.md)|
|[Show_Rdbms_Errors](/docs/Authorisation_and_access/Deployment_configurations/Show_Rdbms_Errors.md)|
|[SQLServer_Option_Fast_1](/docs/Authorisation_and_access/Deployment_configurations/SQLServer_Option_Fast_1.md)|
|[Wait_for_Lock](/docs/Authorisation_and_access/Deployment_configurations/Wait_for_Lock.md)|



 