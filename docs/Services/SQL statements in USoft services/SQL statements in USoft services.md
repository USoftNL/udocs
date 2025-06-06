# SQL statements in USoft services

USoft Service Definer lets you create REST services on the basis of SQL statements.

One of the advantages of this facility is that it enables non-Java-programmers to create full-fledged REST functionality. All that is needed is a functional analysis of what data the REST service should retrieve or manipulate in the RDBMS. This functionality is expressed in simple SQL statements. You can have USoft Service Definer generate practically all the Java code that you need to make many typical REST services work. For this, you do not need any Java programming skills.

In Service Definer, a SQL statement expresses a data retrieval or data manipulation action to be executed on behalf of a service caller by the underlying USoft Rules Engine.

Valid SQL statements include all SELECT, INSERT, UPDATE, DELETE and INVOKE statements that the Rules Engine accepts to handle. SELECT, INSERT, UPDATE, DELETE statements must operate on one of the Tables or Logical Views declared in the underlying USoft model. INVOKE must operate on one of the RDMI (= Rules-Driven Method Invocation) components declared as part of the underlying USoft model.

Each statement in USoft Service Definer is part of a specific Application.

## Passing runtime values to SQL statements

The chief difficulty in building REST services executing SQL is to let the caller pass runtime values to bind variables. This is almost always necessary because the caller must usually be able to control which data are retrieved or manipulated.

### Passing an array of values NOT in a structure

As long the array of values passed by the caller is NOT a structure, objects are passed to the SQL method in the order in which they appear in the array. The first hostvar ( with the colon-name syntax **:myhostvar** ) found in the SQL statement will use the first item in the array, and so on.

The caller must pass the values in the exact order in which they are expected by the SQL statement. A random example of a SQL statement with placeholders is:

```sql
INSERT INTO Pet (
    id, 
    name, 
    tag, 
    ownerName
)
VALUES (
    :id, 
    :name, 
    :tag, 
    :owner
)
```

> [!TIP]
> In the SQL statement, the spelling of the host variable that is in a structure (here, **Pet**) must match the name of the structure case-sensitively.

### Mixing structures and string values

You can also mix structures and other values, for example, simple strings:  

```sql
INSERT INTO Pet (
    id, 
    name, 
    tag, 
    ownerName
)
VALUES (
    :Pet.id, 
    :name, 
    :Pet.tag, 
    :owner
)
```

This example uses a reference to a structure, then a simple string, then a second reference to the structure, and then a second string. The object passed contains the structure and the 2 string values. For the 2nd reference to the structure, the same instance of the structure is used as for the 1st.

But it does not really matter where the structure is in the array. The structure is picked up by looking for the **Entity** annotation, as explained in [Structures](/docs/Services/USoft%20Service%20Definer%20objects/Structures.md).