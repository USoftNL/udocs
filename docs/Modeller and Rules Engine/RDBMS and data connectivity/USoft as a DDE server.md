# USoft as a DDE server

USoft Developer can act as a DDE server for your own C programs. Such "clients" may converse with it about two topics: Field and SQL.

The Field topic allows them to retrieve and set values of fields in currently open windows. The SQL topic allows them to send commands to the USoft Developer SQL script interpreter. Using these commands, they may execute SQL DML statements and call USoft Developer actions.

## Using the Field topic

In a conversation with USoft Developer about the Field topic, you may specify a particular field as an item. This field must be in a window that is currently open. If you request a value from a field, you receive the value from the current record. If the end-user moves to the next record and you request the value of the same item again, you receive the value of the new record.

To refer to a field value, use ObjectNamePlural.ColumnName, where ObjectNamePlural is the Object Name Plural as defined in the repository, and ColumnName is the name of the column underlying the current field.

You may request the current value of an item, poke a new value into it and start an advise loop for it. Your client receives notification of a change in the item value whenever the end user changes a value in the field referred to in the item specification. This change does not necessarily occur in the record which was the current record at the moment that the advise loop was started.

To start a conversation about the Field topic, call the DdeConnect() function from the Windows DDL library:

```
HSZ   hszService;
HSZ   hszTopic;
HCONV hConv = (HCONV)NULL;
hszService = DdeCreateStringHandle(
    idInst,
    (LPCSTR)"USoftDeveloper",
    CP_WINANSI);
hszTopic = DdeCreateStringHandle(
    idInst,
    (LPCSTR)"Field",
    CP_WINANSI);
hConv = DdeConnect(
    idInst,
    hszService,
    hszTopic,
    NULL);

```

To retrieve the value of a particular field, send a DDE request for a particular item to the USoft DDE server.

To retrieve the current value in the Name field in the Persons window, the item name is "persons.name", where Persons is the Object Name Plural and Name is the name of the column underlying the Name field.

To send a request for the "persons.name" item to the USoft DDE server, write the following procedure:

```
HSZ hszItem;
HDDEDATA hData;
DWORD lpcbData;
LPSTR pData;
char buf[BUFSIZ];
hszItem = DdeCreateStringHandle(
    idInst,
    (LPCSTR)"persons.name",
    CP_WINANSI);
hData = DdeClientTransaction(
    (LPBYTE)NULL,
    0,
    hConv,
    hszItem,
    CF_TEXT,
    XTYP_REQUEST,
    DDE_TIMEOUT,
    NULL);
pData = (LPSTR)DdeAccessData(
    hData,
    &lpcbData);
lstrcpy(buf, pData);

```

To poke data back into the "persons.name" item, write the following procedure:

```
hszItem = DdeCreateStringHandle(
    idInst,
    (LPCSTR)"persons.name",
    CP_WINANSI);
pData = (LPSTR) "New value";
hData = DdeCreateDataHandle(
    idInst,
    pData,
    lpcbData,
    0L,
    hszItem,
    CF_TEXT,
    0);
DdeClientTransaction(
    (LPBYTE) hData,
    -1,
    hConv,
    hszItem,
    CF_TEXT,
    XTYP_POKE,
    DDE_TIMEOUT,
    NULL);

```

## Using the SQL topic

In a conversation with USoft Developer about the SQL topic, you may send commands to the USoft DDE server, which are passed to the SQL script interpreter. This interpreter understands SQL DML statements but not DDL statements. In other words, it allows you to manipulate the data in the database, but not to create new tables and views or change existing ones. Before a DML statement is executed, it is checked by the conceptual processor, so the execution of these SQL statements never results in the violation of database integrity.

In addition to SQL statements, the SQL Command interpreter can run the global actions of USoft Developer, such as MessageInformation(), DataCommit() and CommandSystemBackground().

To send a SQL statement to the USoft DDE server, write the following procedure:

```
HSZ   hszService;
HSZ   hszTopic;
HCONV hConv = (HCONV)NULL;
hszService = DdeCreateStringHandle(
    idInst,
    (LPCSTR)"USoft Developer",
    CP_WINANSI);
hszTopic = DdeCreateStringHandle(
    idInst,
    (LPCSTR)"SQL",
    CP_WINANSI);
hConv = DdeConnect(
    idInst,
    hszService,
    hszTopic,
    NULL);
pData = (LPSTR) "update persons \
    set name = 'Jansen' \
    where person_id = 1514";
hData = DdeCreateDataHandle(
    idInst,
    pData,
    lpcbData,
    0L,
    hszItem,
    CF_TEXT,
    0);
DdeClientTransaction(
    (LPBYTE) hData,
    -1,
    hConv,
    hszItem,
    CF_TEXT,
    XTYP_EXECUTE,
    DDE_TIMEOUT,
    NULL);

```