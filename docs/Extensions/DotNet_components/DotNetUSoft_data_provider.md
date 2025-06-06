---
id: DotNetUSoft_data_provider
---

# DotNet-USoft data provider

There are two ways you can use application data in a .NET component defined in USoft Definer:

- By passing application data as parameters to the component.
- By executing a query, from the .NET code, to the running Rules Engine using a .NET-USoft data provider. This provider is called "REDataProvider" and is delivered in assembly file "REDataProvider.dll". "REDataProvider" has the following classes:

|**Class**|**Description**|
|--------|--------|
|USoftCommand|Represents a SQL statement to execute against a running Rules Engine. Inherits from DbCommand|
|USoftConnection|Represents a connection to a running Rules Engine. Inherits from DbConnection|
|USoftDataReader|Provides a way of reading a forward-only stream of rows from a running Rules Engine. Inherits from DbDataReader|
|USoftParameter|Represents a parameter to a USoftCommand. Inherits from IDataParameter|
|USoftParameterCollection|Represents a collection of parameters associated with a USoftCommand. Inherits from ArrayList, IDataParameterCollection.|



To connect back to the Rules Engine you need to derive your class from a predefined RulesEngine class. In order to acquire a connection to the Rules Engine you need to call the predefined **getConnection()** function. This function returns a USoftConnection object. Using this object, you can work with the connection object in the standard ADO.Net manner.

*Example*

```language-cs
using System;
using System.Data;
using UsoftDataProvider;
class RulesEngineSQL
{
public static string sql = "SELECT p.email_address FROM person p, participant pt WHERE p.person_id = pt.person_id and pt.res_id = ?";
}
class DBExample : RulesEngine
{
public void InformParticipans(int reservation_id, string message)
{
USoftConnection conn = getConnection();
conn.Open();
USoftCommand cmd = (USoftCommand)conn.CreateCommand();
cmd.CommandText = RulesEngineSQL.sql;
USoftParameter p = new USoftParameter("reservation_id", DbType.Int32);
p.Value = reservation_id;
cmd.Parameters.Add(p);
IDataReader reader = cmd.ExecuteReader();
while (reader.Read())
{
String email = reader.GetString(0) ;
//send an email to participant
}
reader.Close();
conn.Close();
}
}
```

For more information on .NET data sources, refer to http://msdn.microsoft.com.

> [!NOTE]
> To take advantage of planned future developments related to cross referencing of SQL within C# code, declare all your SQL statements as static attributes in the RulesEngineSQL class.