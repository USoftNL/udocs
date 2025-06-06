# JDBC example

## Step 1: Loading the USoft JDBC driver classes

This code illustrates how to load the USoft JDBC driver classes within a Java program:

```
//Step 1
try
{
    Class.forName("com.usoft.jrec.JrecDriver");
}
    catch (ClassNotFoundException e)
{
    System.err.println("USoft JDBC driver not found: " +
    e.getMessage());
}

```

## Step 2: Opening a connection to the Rules Engin

The generic syntax of the connection string is:

```
jdbc:jrec:application@host:port

```

Here is an example code fragment that shows how to connect to a Rules Engine for the TRAVEL application:

```
String myconnection = "jdbc:jrec:TRAVEL@localhost:7777";
String user = "SomeUser";
String password = "SomePassword";
Connection c = null;
try
{
    c = DriverManager.getConnection(myconnection, user, password);
    c.setAutoCommit(false);
}
    catch (SQLException e)
{
    System.err.println("Can't establish connection" + e);
}

```

## Step 3: Selecting records

After a connection has been established, the various JDBC classes can be deployed to insert, update and retrieve data. This example code fragment retrieves all records from some PERSON table into a JDBC record set. This PERSON table has been defined in a USoft repository.

```
ResultSet set = null;
try
{
    String sql = "SELECT * FROM Person";
    stmnt = c.createStatement();
    set = stmnt.executeQuery(sql);
}
catch (SQLException e)
{
    System.err.println("Failed t execute query: " + e);
}

```

A generic way to show the contents of this PERSON table is:

```
//Step 3, continued
if (set != null)
{
    int columns = 0;
    try
    {
        ResultSetMetaData meta = set.getMetaData();
        columns = meta.getColumnCount();
                
        for (int i=1;i<=columns;i++)
        {
            System.out.print(meta.getColumnLabel(i) + "(" + meta.getColumnTypeName(i) + ")");
            System.out.print("\t\t");
        }
        System.out.println();
    }
    catch (SQLException e) {System.err.println(e); }
        
    try
    {
        while (set.next())
        {
            for (int i=1;i<=columns;i++)
            {
                Object obj = set.getObject(i);
                System.out.print(obj);
                System.out.print("\t");
            }
            System.out.println();                            }
    }
    catch (SQLException e){    System.err.println(e); }
}

```

## Step 4: Closing the connection

```
If (c != null)
{
    try
    {
        c.commit();
        c.close();
    }
    catch (SQLException e)
    {
        System.err.println("Close connection failed, " + e);
    }
}

```