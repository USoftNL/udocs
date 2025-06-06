# MTS Example 2: component sample code

The sample code below shows what an MTS component usually looks like. To make a connection, ADO is used, but you can also use the OLE-DB or the ODBC API. You should use these APIs as for a normal connection to a database. The 'Commit' or 'Rollback' call must be replaced by the SetComplete or SetAbort call of the context object. The code of the Bank Sample application components is also provided with the Sample Bank application. You can use this to obtain more details.

Here is the code of a simple component that inserts an amount of money in an account in the Bank Sample Application. It is written with ADO.

Component::Insert(int account_no, int amount)

```
{
    ADOConnection* adoCoConnection = NULL;
    String statement = "UPDATE Account SET Balance = Balance "+ amount +
"WHERE AccountNo = " + account_no;
    IObjectContext *ObjectContext = NULL;
    // Get the Context Object from your component. (This is not needed if you use COM+).
GetObjectContext(&ObjectContext);
    // Create an ADO Connection object
    CoCreateInstance (CLSID_CADOConnection,
NULL,
CLSCTX_INPROC_SERVER,
IID_IADOConnection,
(LPVOID *) &adoCoConnection);
    // Open a connection to a Rules Engine
adoCoConnection->Open ("Your connection String", NULL, NULL, -1);
   // Execute the statement
    adoCoConnection->Execute(statement, NULL , -1, NULL);
   // Resource cleanup    
    if (adoCoConnection) adoCoConnection->Release();
   // Finish
    ObjectContext->SetComplete();
}

```