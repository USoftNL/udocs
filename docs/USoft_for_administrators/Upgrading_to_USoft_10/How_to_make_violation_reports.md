---
id: How_to_make_violation_reports
---

# How to make violation reports

In an upgrade to USoft 10.0, use violation reports twice:

- For the source repository (before upgrade), using USoft Benchmark Version 9.1.
- For the target repository (after upgrade), using USoft Benchmark Version 10.0.

Each time, **create** all the violation reports, **inspect** them, **fix** any violations reported, and then run and inspect the violation reports again, until all violations have been fixed.


:::note

When upgrading, you want reports on the constraints of the Definer , Service Definer, in the Authorizer, Delivery Manager and Benchmark. If you create violation reports for the User application you will get a report on the constraints of the user application, which is not the point of a repository upgrade.

:::

### Creating violation reports

To create violation reports for an application (e.g. Definer):

1. Start the application item from USoft Binder, and in the application, choose View, SQL Command.

2. In the SQL Command tab or window, enter

```
action TopTest()
```

then press the Execute button.

The USoft BenchMark toolbox appears in the context of the application.

3. On the file system, create an empty directory for the violation reports, for example:

```
c:\temp\violations
```

4. In the USoft BenchMark toolbox, double-click the Report Configurations object in the Test Database list.

The Report Configurations window is displayed.

- In the Name field, type a name such as **UPGRADE_FROM_9_1**.
- In the "File for relationships" field, type a filepath such as **c:\\temp\\violations\\relationships.html**.
- In the "File for constraints" field, type a filepath such as **c:\\temp\\violations\\constraints.html**.

Save work. Do this by pressing Save in the USoft BenchMark Toolbox.

In the top right corner of the Report Configurations window, in the Create Report box, press Relationships...

Next, press Constraints...

5. In the USoft BenchMark Toolbox, click the Data button. Then, in the Violation Reports box at the bottom, click the Columns... button.

The Column Violations window is displayed.

Leave the Table Name and Domain Name fields empty. Make sure all the checkboxes are checked.

In the File name fields, change the default into a complete filepath, for example, change:

```
Uppercase.html
```

to 

```
c:\temp\violations\Uppercase.html
```

Press OK.

5. In the directory on the file system, check that all the violation reports have been created.

### Fixing violations

Inspect the violation reports one by one.

If there are violations, change the application data in such a way that they no longer violate the relationship settings, constraints or column settings reported.

Create and inspect the violation reports again. Continue until all the violations have been fixed.