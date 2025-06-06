---
id: BIRT_Step_5_Call_the_BIRT_component_to_generate_the_report
---

# BIRT Step 5: Call the BIRT component to generate the report

To call the BIRT off-the-shelf component, and generate a report:

Start the USoft application, and open the SQL Command window from the Tools menu.

In SQL command execute one of the following commands:

```sql
SELECT birt.generatepdf ('path-to-report-definition', 'path-to-output-file')
```

Or 

```sql
INVOKE birt.generatepdf WITH 
SELECT 'path-to-report-definition', 'path-to-output-file'
```

Where

- *path-to-report-definition* is the location of the BIRT report definition file created using the BIRT Report Designer.
- *path-to-output-file* is the location of the report that you wish to generate.
- GENERATEPDF can be replaced by one of the following methods, if an output file with a format other than Portable Document Format (PDF) is required.

- GENERATEDOC for a Microsoft Word document
- GENERATEHTML for HTML
- GENERATEXLS for a Microsoft Excel spreadsheet.

Optionally, to facilitate easy deployment of this report definition where multiple data sources are present, you can parameterize the report definition and use variables in the command used to start the generation of the report.