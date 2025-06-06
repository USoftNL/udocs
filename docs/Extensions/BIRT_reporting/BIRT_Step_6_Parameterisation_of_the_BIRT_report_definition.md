---
id: BIRT_Step_6_Parameterisation_of_the_BIRT_report_definition
---

# BIRT Step 6: Parameterisation of the BIRT report definition

BIRT obtains  the data it requires data from USoft using the USoft Rules Service. The JDBC connection string to the USoft rules service contains a hostname and port number. To facilitate easy deployment of this report definition where multiple data sources are present, you can parameterize the definition to simplify configuration changes. You can create one report parameter that contains both  host name and port number variables. You can then use this parameter in the connection string of each data source that points to a USoft Rules Service. To do this follow the steps below:

1. In the BIRT Report Designer’s Data Explorer, right-click Report Parameters, and choose New Parameter from the resulting menu.

![](./assets/4ae5aaec-4a95-48f9-b946-2f2d5a725a16.png)

2. The New Parameter dialog appears. In the Name field of this dialog, type the name HOSTPORT and press OK.

![](./assets/e43a2f82-42a7-41e7-bb6e-1c5dce24119c.png)

Your BIRT design now contains a HOSTPORT Report Parameters item.

![](./assets/4a41c551-85f5-4091-8741-c02c23c8b897.png)

3. To use this new parameter in your data source connection string, double click the appropriate data source item in the list of Data Sources to open the Edit Data Source dialog, and select Property Binding from the list in the left-hand pane. The Property Binding screen appears.

![](./assets/b66e4348-6b92-4535-af04-79843ed7ac54.png)

4. Edit the contents of the JDBC Driver URL field so that it now contains:

```
jdbc:jrec:USERNAME@ + params[“HOSTPORT”].value
```

5. Press OK.

The command that you use in SQL Command to start the report generation using BIRT will now use the following Syntax

```sql
SELECT birt.generatepdf(
         '<path to report definition file>'
       , '<path to outputfile>'
       , 'HOSTPORT'
       ,'localhost:8888>')
```

or 

```sql
INVOKE   birt.generatepdf WITH 
SELECT   '<path to report definition file >'
,        '<path to outputfile>'
,        'HOSTPORT'
,        'localhost:8888>'
```

> [!NOTE]
> The actual command that you use depends upon Rules Service settings. The settings you need can be found on the last page of the Rules Service configuration tool, accessible from the USoft Binder.