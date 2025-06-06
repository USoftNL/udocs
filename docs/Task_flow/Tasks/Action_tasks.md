---
id: Action_tasks
---

# Action tasks

An **action task** is an operation defined by a call to one of the function offered by USoft's proprietary action language a SQL statement, for example, MessageInformation(), CommandWindows(), or ActionDecision().

You can use action tasks for many purposes, for example, to:

- Print exported data.
- Start external applications to further process exported data.
- Issue messages from a job.

### Defining an Action Task

To define an action task:

1. Double-click the Action Tasks node in the batch catalog, or choose Define, Tasks, Action Tasks.

The Action Tasks window or tab opens.

2. In the Action Name field, type a unique name for the action task. The name can be up to 30 characters long.

3. In the Text field, enter your action, or list of actions, for example:

```
MessageInformation('Batch Job completed.')

```

In a list, actions must be separated by new lines. The actions are executed in the order they appear in the list. For conditional branching, call ActionDecision() and write conditional actions in the Yes Action and No Action attributes of the called decision. For looping, in USoft, give preference to SQL cursors. If you really need to loop action scripts, you can cause a Decision to call itself.

4. Save work.

### Action Tasks executed outside USoft

If you want to have the job executed outside the USoft environment by means of RUNBATCH.EXE, your Action Task can only use the ActionStartJob(), CommandWindows(), ActionDecision(), FileExists() and DataRdbmsStatement() actions, as well as those described at Deactivating and Reactivating Checks and Constraints. This is because these actions run in the background, and require no interaction with a USoft instance.