# Running a task

To run a task in the Delivery Manager tool interface (you can also run a task programmatically, see end of this article):

1. Find the task in the Tasks catalog on the left hand side.

2. Right-click on it and choose Run from the context menu.

The Run Tasks window is displayed with the task in it.

3. Check that the task has Correct = Yes.

If Correct = No, you cannot run. Re-check the task:

- On the Tasks tab in the catalog, right-click on the task you want to check.
- Choose Define from the context menu. The Define Tasks window is displayed.
- Press the Check button.

4. Select the task steps you want to run by setting them to Active = Yes. Make sure that any steps you do NOT want to run have Active = No.

You can use the "Set All", "Set All Inactive", en "Set Active From Here" buttons in the icon ribbon or in the Run menu:

![](/api/Continuous%20delivery/Delivery%20Manager%20basic%20procedures/assets/a58ce9a2-9a6c-44d5-a5c7-72789cc48fd8.png)

To use the "Set Active From Here" button, first click on the first step in the list that you want to run, and then press the button.

5. Use the Rewind, "Run Next", and "Run All Next" buttons at the bottom of the window to run your active task steps:

![](/api/Continuous%20delivery/Delivery%20Manager%20basic%20procedures/assets/4e4a9d23-f7ce-406f-b18c-8fba7bc9cc29.png)

To run the steps with Active = Yes one-by-one (recommended), press the "Run Next" button (the button in the middle).

To run all steps with Active = Yes in one go, press the "Run All Next" button (the button on the right).

Each time you run a step, that step is set to Done = Yes, whether or not any errors were raised during execution. You can undo this flag (ie., set Done = No) for repeated execution. Do this by pressing the Rewind button (the button on the left).

> [!WARNING]
> It is best to run task steps one-by-one because Delivery Manager only features interactive error messages. By running task steps one-by-one, you can react to any unforeseen events before you continue with the next step. Once you know actions will execute successfully, you can use the "Run All Next" button to reduce work, especially if you need to execute the task repeatedly or if it has many steps.

## Error handling during runs

Delivery Manager handles errors *interactively* when you run task steps.

**Interactive error messages only**

When task steps are run, errors (if any) appear as dialog boxes on the screen. Delivery Manager typically logs on to a repository and a USoft tool and then calls a function that you can also call manually from that tool screen (by pressing a button, activating a menu option, ...). Any errors appear as they would if you had chosen to activate the function manually.

If a task step or a sequence of task steps completed without any error messages appearing, you can assume that the execution was successful.

**Error logging**

Delivery Manager does not have any overall error logging mechanism. Instead, for each executed task step, errors are logged (or not) as if you called the function manually.

Similarly, the Delivery Manager "Run Tasks" window does NOT register any errors raised. For each task step that you run, the "Run Tasks" window registers Done = Yes when Delivery Manager has finished running the task step, whether or not errors were raised. In other words, "Done" implies only: "this task step was executed". It does NOT imply: "this task step ran without errors".

When you press the Run All Next button and there are multiple tasks with Active = Yes and Done = No, Delivery Manager will NOT terminate execution as soon as an error is raised. Instead, it will produce interactive errors for each of the task steps. When the run is completed, there is no persistent record of the errors raised.

The Run All Next button is appropriate only for tasks that you run repeatedly and that you expect will run without errors.

If you are not in a position to predict that a task will run without errors, it is better to execute the task steps one-by-one by pressing the Run Next button repeatedly. This way, when an error appears, you know which task step has produced it is easier to correct the error.

**Errors do not block processing**

When you run a task step, it is possible that errors are raised during execution of that task step. These errors are thrown by the application called by the task step, in the database account or file system location specified in the task step. The error probably blocks execution of whatever the application was trying to do. But Delivery Manager does not itself terminate processing.

This means in particular that, when you execute multiple task steps in one go using the Run All Next button, an error raised by one task step does NOT keep Delivery Manager from executing the next task step.

## Running a task programmatically

You can run a task programmatically by calling the DL_EXECUTE_TASK job of Delivery Manager:

```sql
INVOKE batchrunner.dl_execute_task WITH
SELECT 'MyTask' dl_task
```

> [!TIP]
> When you call DL_EXECUTE_TASK, all the Task Steps that have Active = Yes are executed.