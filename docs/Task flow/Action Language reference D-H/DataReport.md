# DataReport()



> [!NOTE]
> This article is about the **DataReport** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **DataReport()**

Generates a report of a window. The report contains information such as:

- The SQL being used (main query and extra queries).
- Query conditions of columns.
- Whether columns are displayed or not.
- Queried data.

*Syntax*

```
DataReport( *file*, *use-io-format* )

*use-io-format*  :=  { 'UseIOFormat' | } 
```

The required f*ile* is the name of the file to write the report to.

If the value 'UseIOFormat' is passed for *use-io-format,* then data in the report is represented in the format as displayed in the window, i.e., using any IO presentation formats for numbers or dates that cause that data to look differently from stored data.

If *use-io-format* is not passed, then data in the report will be represented as stored in the RDBMS.

*Example*

```
DataReport( 'c:\temp\MyReport.xml', 'UseIOFormat' )
```

 