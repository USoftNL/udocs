# Upgrading the Production environment to USoft 10.0

To upgrade to USoft 10.0, first [upgrade to USoft 9.1](/docs/USoft%20for%20administrators/Upgrading%20to%20USoft%2010/Upgrading%20to%20USoft%2091.md). Then, upgrade to USoft 10.0 as a separate action.

Production environments contain not only application tables with end user data, but also USoft Authorizer tables. When you plan to upgrade the environment to USoft 10.0, you must plan to have these tables upgraded.

To upgrade USoft Authorizer tables in production, you can:

- Use the Upgrade tool from the Binder,
- *or:* Execute as DBA or owner the following database script:	
```
<SystemDir>/Util/Upgrade/Upgrade_Authorizer_91_To_100_<Database>.sql
```

 



> [!CAUTION]
> When you upgrade a Production environment to USoft 10.0, do NOT run the standard Create Tables routine for USoft Authorizer. You could lose valuable usergroup information. Instead, do one of the following. Option 2. is possibly more indicated for Production environments:
1.    Use the upgrade tool as described in [Upgrading the Development Environment to USoft 10.0](/docs/USoft%20for%20administrators/Upgrading%20to%20USoft%2010/Upgrading%20the%20Development%20environment%20to%20USoft%20100.md). The upgrade tool automatically detects that there are no development tables and will only upgrade the authorization tables.
2.    Use the database script which can be found in the "util\\Upgrade" folder in your installation. The folder contains an upgrade script for Oracle and for MS Sql Server.

> [!TIP]
> *Explanation:* The data structure changes between USoft Authorizer 10.0 and previous versions of USoft Authorizer are impredictable. Your old usergroup-based data must be restructured and become the new role-based data. Therefore you must run a version-specific upgrade routine.