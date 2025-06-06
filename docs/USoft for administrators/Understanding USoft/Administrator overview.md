# Administrator overview

USoft is a tool platform for developing and running data-intensive, rules-based applications.

This help topic first provides a general overview of a runtime USoft environment (Production, Acceptance, or Testing). Then it briefly considers development environments where developers create USoft applications.

A runtime USoft environment has a relational database, one or more **Rules Engines**, and (if there are web-based clients) one or more **Rules Services:**

![](/api/USoft%20for%20administrators/Understanding%20USoft/assets/5cb20a66-fc33-4ba8-adc1-0281d901428d.png)

## Rules Engine

The core of a USoft runtime application is a piece of software called a **Rules Engine**. The Rules Engine accesses a relational database (Oracle, SQL Server) on behalf of USoft runtime users.

The Rules Engine applies business rules to whatever data manipulation users attempt, thus garanteeing a high level of data quality. Under normal conditions, users never access the database directly: they talk to the Rules Engine. The Rules Engine talks to the database on their behalf.

The Rules Engine can run from flat files or directly from the RDBMS ("run from repository"). In non-development environments it normally runs from flat files placed in the \\APP subdirectory of the USoft installation directory. These flat files have meaningful file extension names. Of the following set, only the ".con" file is essential for running the Rules Engine:

|        |        |
|--------|--------|
|*application*.con|The Rules Engine for *application*|
|*application.*esi|Windows GUI for *application*|
|*application*.smg|System messages used in *application*|
|*application.*umg|Application text strings needed to run *application* in multiple languages|



## Rules Service

Web-based client interfaces access a Rules Engine by connecting with a **Rules Service** which, in turn, connects to a Rules Engine. These client interfaces include interactive web pages and web services, such as REST services and SOAP services.

On runtime servers, USoft typically offers a Windows interface for administration and debugging purposes. This interface is typically accessed by using a Windows application called **USoft Binder** which is the "usbinder.exe" executable in the \\BIN or \\BIN64 subdirectory of the USoft installation directory.

A Rules Service runs as an MS Windows Service. It is visible in the MS Services panel but is typically started, stopped and administered through a USoft HTML-based console called **ure.config.** This console is a sequence of wizard-type pages. One way to start this console is from a USoft Binder file. Open the USoft Binder file, choose File, New, Rules Service from the menu, then right-mouse-click on the Rules Service item in the list view and press Configure.

Local runtime clients access the Rules Engine directly, without the intervention of a Rules Service. Local clients include USoft Windows applications and batch-oriented executables.

## Development environment

A USoft application is developed by a small, horizontal team of developers who all have remote access to the same database or database account (the *repository)* from their individual desktops or laptops.

While Rules Engines in non-Development environments typically runs from flat files, developers typically run the Rules Engine they are developing by connecting directly to a shared database or database account ("running from repository"). This allows them to see each other's work immediately and it stops them from constantly having to re-generate new flat files.

Developers use the Windows application to test and debug the rules tier (= the non-Web part) of their solution. They use a locally installed Rules Service and web server (IIS) to test and debug the Web tier of their solution.

 