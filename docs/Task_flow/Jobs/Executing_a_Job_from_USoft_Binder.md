---
id: Executing_a_Job_from_USoft_Binder
---

# Executing a Job from USoft Binder

You can execute jobs by activating items in a USoft Binder file.

This is a convenient way of testing USoft Batch jobs in Development or Test environments.

This is also a convenient way of enabling more technical end users, such as Administrators, to perform a given job repeatedly, especially if input parameters do not change between job runs. In this case, define the USoft Binder file and distribute them to end users. If input parameters do not change between job runs, all you need to explain is how to run the Binder item. If input parameters do change, you need to explain to end users how they are set.

## Creating a Batch Runner item in USoft Binder

1. Create a USoft Binder file, or open a USoft Binder file that connects to the correct database account. For details, go to the USoft Binder Guide.

2. From the menu, choose Item, New, select "Batch Runner", and press the Add button.

3. Right-mouse-click on the new Batch Runner item and choose Properties. Fill out the Properties dialog.

If you add multiple job names in the Jobs list, these will be executed one-by-one in the order specified.

To set input parameters for each job, read the next section.

4. Click OK, then choose File, Save from the menu, or press Ctrl + S, or click the Save icon.

## Setting input parameters

To set input parameters for a job that is run from a USoft Binder item:

1. Right-mouse-click the Batch Runner item in the USoft Binder work area and choose Properties, or choose Item, Properties from the menu.

2. If the job is in the Jobs list, click on it and then click Edit. Otherwise, click Add and type the name of the job.

The "Edit Job Name and Parameters" dialog appears.

3. In the Job Parameters field, set values for any parameters required, using the following syntax:

```
parameter=value,...

```

For example:

```
destination=AFRICA,tour_type=ISLAND SUNTANNER

```

As the example shows, items are comma-separated, and you must NOT use quotes for string values in this dialog. *Parameter* is case-insensitive. *Value*  is case-sensitive.

4. Click OK to close the "Edit Job Name and Parameters" dialog.

5. Click OK again to close the Properties sheet.

6. Click OK, then choose File, Save from the menu, or press Ctrl + S, or click the Save icon.

 