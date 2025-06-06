# Scripting example 1: The period case

If you want to query data within a period of time, you can for example enter a search condition in a DATE field:

```sql
>01-jan-2006 & <31-dec-2006
```

However, a more user-friendly way to let the end-user query data within a time period, is to define a VariableSetDataSource object with two variables that represents a period of time, with a from date and a to date.

In two additional text fields, the user can then enter these dates.

Suppose, the search group of an info page contains an S_BOOK_DATE field that is connected to a BOOK_DATE column of a RESERVATION table.

To use variables to query data within a period of time, set up the data structure and configure the userface behavior:

**Setting up the data structure**

1. Open the appropriate page from the catalog.

2. From the Controls tab page of the catalog, drag a VariableSetDataSource object to the Page object in the object tree.

3. For the new VariableSetDataSource1 object, set the Name property to: period.

4. Drag two Variable objects to the period VariableSetDataSource object.

5. For these two Variable objects, set the Name property to fromDate and toDate respectively.

6. For these two Variable objects, set the Prompt property to From Date and To Date respectively.

The top of the object tree now looks like this:

![](/api/Web%20and%20app%20UIs/JavaScript/assets/a16c8c03-6091-4b1b-87ec-30cda19cba40.jpg)

**Configuring the interface behaviour**1. In the SearchColumnGroup, insert two TextColumnControl objects, with properties:

- Data Source Name: period.
- Data Source Item: fromDate and toDate respectively.

- Task Mode: Edit.

2. For the event listener of the existing Search button, insert a callClientScript action.

3. Make sure this action is executed before the executeQuery action, by adjusting the Seqno property.

4. For this action, set the Script property to:

```
var bookDate,fromDate,toDate;
bookDate="";fromDate=getValue("period","fromDate");
toDate=getValue("period","toDate");
if(fromDate!="")bookDate=">"+fromDate;
if(fromDate!="" && toDate!="")bookDate+="&";
if(toDate!="")bookDate+="<"+toDate;
setSearchValue("RESERVATION","BOOK_DATE", bookDate)
```

> [!NOTE]
> : Leave the column control in Edit mode.

5. Save your changes, and re-publish the changed web page.