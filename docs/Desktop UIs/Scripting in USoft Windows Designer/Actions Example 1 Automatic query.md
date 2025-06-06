# Actions Example 1: Automatic query

An info window must query all records automatically as soon as it is opened.

Set the Post-open property of the Info Window to:

```
QueryExecute()
```

![](/api/Desktop%20UIs/Scripting%20in%20USoft%20Windows%20Designer/assets/9138fa16-ccd8-42b9-b215-1653db3ede6a.png)

This is a very simple action statement:

- You do not need to specify the target object. The Info Window itself is the default object for this action statement.
- You do not need to specify parameters, because the QueryExecute() method does not require any.