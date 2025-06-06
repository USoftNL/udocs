# Windows GUI exports and reports

## ESI flat file

To deliver your Windows application to a target environment running from flat files, such as a Production or Acceptance environment, you generate an .ESI flat file containing all the definitions you have made in Windows Designer.

The .ESI file contains specifications made in Windows Designer in the same way that the .CON file contains specifications made in USoft Definer.

To generate an ESI flat file:

1. From the menu bar, choose Tools, Generate Flat File.

The Generate Flat File dialog appears.

2. Type the name of the application, or click the Browse button to locate an existing ESI file.

3. Click OK.

## GUI class export

You can generate an XML export file for a specific GUI class. You can subsequently import the file into a different repository or application.

### Exporting a GUI class

To create a GUI class export file:

1. In the Windows Designer catalog, select the GUI class for which you want to create an XML export file.

2. From the context menu, choose Export.

The Export dialog appears.

3. Specify the file name and directory of the file to be created, and click OK.

### Re-importing a GUI class

To re-import a GUI class export file into a target repository or application:

1. In USoft Binder, open a Binder file pointing to the target repository or application, or create such a file.

2. From this Binder file, open the Windows Designer.

3. Check that the target repository or application meets all prerequisites for importing the XML export file:

- The superclass of the GUI class must exist in the target repository.
- For the tables, columns and relations, used in the GUI class, the target repository must contain the same conceptual definitions as in the source repository.

- If the GUI class uses menu pages or refers to decisions, these definitions must also be the same as in the source repository.

- The superclass(es) in the target repository must contain the same members as in the source repository.

XML export files only contain those Windows Designer paintings that are locally set on the GUI class.

4. From the menu bar choose Tools, Import....

The Import dialog appears.

5. Specify the file name identifying the export file, or click Browse, and click OK. If inconsistencies are detected, a Report on Import Dialog is opened with further details.

## Application XML report

You can produce an XML representation of your entire Windows application:

1. Choose Tools, Report on Application.

2. In the dialog, click the OK button.

3. In the dialog, click the Save As button to save the report on your file system.