# BIRT reporting

BIRT (Business Intelligence and Reporting Tools) is an open-source Eclipse and Java-based reporting system. Eclipse BIRT is supported by USoft using an off-the-shelf component named BIRT. Using BIRT, you can generate reports in various formats, for example: PDF, HTML, DOC, and XLS. BIRT includes features making it possible to add graphs (SVG is possible). Data can be imported from a variety of data sources, such as JDBC, XML, (CSV) Flat Files, etc. USoft supports Eclipse BIRT version 3.7.2 and higher. For more information about Eclipse BIRT, visit http://www.eclipse.org/birt/phoenix/

Eclipse BIRT is not shipped with the USoft software distribution. However, you can download Eclipse BIRT components from the Eclipse website. To use BIRT with USoft you need the Eclipse BIRT runtime environment, and to design BIRT reports you need the Eclipse BIRT Report Designer. You will also need to import and configure the USoft BIRT off-the-shelf component, which is shipped with the USoft software distribution.

Before you can generate a BIRT report from USoft, you must perform the following tasks:

- BIRT Step 1: Download and Install BIRT Software
- BIRT Step 2: Create a BIRT report definition file
- BIRT Step 3: Import and configure the BIRT off-the-shelf component
- BIRT Step 4: Start the USoft Rules Service
- BIRT Step 5: Call the BIRT component to generate the report
- BIRT Step 6: Parameterisation of the BIRT report definition

## Troubleshooting your BIRT connection

The more commonly occurring error messages when using BIRT are explained below.

```
Failed to invoke com.usoft.birt.Start.loadJars(argv[0])  of component method BIRT.BIRT:
```

The path in the BIRT component constructor is not checked for correctness when it is defined, so any path will set the constructor to correct after pressing the check button. The message above will be displayed if an incorrect path is used at runtime.

```
Failed to invoke rep.generateHTML( (U)argv[0], (U)argv[1],([O) array ) of component method BIRT.GENERATEHTML: java.lang.Exception: Object rep or Class rep in statement "rep.generateHTML" was not found
```

This message is generated at runtime if a constructor for the BIRT component has its Correct flag disabled.

```
org.eclipse.birt.report.engine.api.EngineException: Failed to initialize emitter.
```

This message is displayed if the BIRT component is working correctly, but but you have provided an incorrect path to the BIRT report definition file.