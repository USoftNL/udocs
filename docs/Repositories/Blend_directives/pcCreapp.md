---
id: pcCreapp
---

# pc:Creapp



> [!NOTE]
> This article is about the **pc:Creapp**[ Blend directive](/docs/Repositories/Blend_directives).

## **pc:Creapp**

Runs the USoft "create-tables" routine for a specified or implied application in a specified database connection.

Returns a report of tables created and operations executed, in the same way as when the operation is started by selecting "Create Tables" in USoft Binder.

*Syntax*

```
<pc:Creapp
     application="*application*"
     rdbms="*db-platform*"
     database="*db-connection*"
     user="*user*"
     pwd="*password*"
     owner="*owner*"
     job="*job*"
     droptables="*droptables*"

     { assign:result="" | pc:return="" }

/>

*db-platform*  :=  { jdbc | oledb | oracle  }    
*droptables*    :=  { yes | no }
```

If **application** is not specified, it is set to user. If **owner** is not specified, it is set to user.

**User** and **pwd** are both required, except for logging on to SQL Server via Windows Authentication, in which case they must both be left empty.

If the optional **job** is set, **job** must be the name of an existing USoft Batch job in application, and this job is executed as the last step of the "create-tables" routine.

- On Oracle, the required rdbms, database, user and pwd together enable access to the database location where the "create-tables" routine is run.
- On SQL Server, the database server is identified by database, with the part following the colon ( : ) identifying the specific database within the database server.

You can suppress the return report by adding, alternatively, assign:result="" or pc:return="".

> [!TIP]
> This operation is equivalent to running "Create Tables" from the context menu of a USoft Binder item, or (for the user application) choosing Tools, Physical Tables Create from the USoft Definer menu, or (for individual user application tables) pressing the Create Table button in the Tables window of USoft Definer.