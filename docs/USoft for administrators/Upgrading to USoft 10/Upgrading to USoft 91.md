# Upgrading to USoft 9.1

## Development Environment

To upgrade your repository tables from USoft 9.0 to USoft 9.1, use the Upgrade tool provided in USoft Binder:

1. In USoft Binder, choose Item, New from the menu and choose Upgrade.
2. Double-click the new Upgrade Tool item.
3. Choose File, Start Upgrade from the menu, or click this icon:

![](/api/USoft%20for%20administrators/Upgrading%20to%20USoft%2010/assets/3eb6ad7e-a067-4cc3-8df9-a62bf618c968.png)

## Production Environment

To upgrade authorization tables, you can:

- Use the Upgrade tool in USoft Binder (see previous section in this article), *or:*
- Run the ‘Create Tables’ context menu option on the Authorizer item in USoft Binder, *or:*
- Execute as DBA or owner the following database script:

```
<SystemDir>/Util/Upgrade/Upgrade_Authorizer_90_To_911_<Database>.sql
```

On MS SQL Server, this USoft version no longer uses the TABLE_SEQUENCE_NUMBERS table for the generation of sequence numbers. Instead, SQL Server RDBMS sequences are used.

When running against SqlServer you should be aware that as of this version, USoft does not use the TABLE_SEQUENCE_NUMBERS table for the generation of sequence numbers anymore. Instead SqlServer sequences are used.

These sequences must be generated in the Production environment for all the tables using a sequence as key. You can generate a script from USoft Definer. The sequences must be set to the correct value to avoid duplicate key errors. This can be done by executing the following action from the SQL Command dialog:

```
reevaluatetablesequence()
```

 