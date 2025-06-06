---
id: Creating_a_USoft_Development_environment
---

# Creating a USoft Development environment

To create a development environment for USoft Developer:

1. Install, configure and start a development database. Make sure you meet USoft's RDBMS requirements, you can find more information [here](/docs/USoft_for_administrators/Installing_USoft).

2. Install the USoft Developer product on each developer machine. Click the executable file delivered by USoft and follow the steps of the installation wizard. For more information, step out to help topic Installing USoft Developer.

3. Create the USoft Development Repository for the team. For more information, step out to help topic [Installling a USoft Development Repository](/docs/USoft_for_administrators/Creating_a_USoft_Development_environment/Installing_a_USoft_Development_repository.md).

4. Create USoft Binder files for team members.

USoft Binder is an application for letting developers and client/server runtime users access USoft functionality. For each developer and for each project, create a USoft Binder file that contains all the settings and commands for that project.

On each developer machine, create a USoft Binder file by running the "usbinder.exe" program and then choosing File, New from the menu. The most important installation step is to connect the developer to the database tables. Do this by entering the correct database user, database password and database connect string in the File, Project Properties, Database dialog.

Make sure that for all USoft Binder files in the development environment, you specify Project Type = "Development" (the default).

For more information, see the USoft Binder help topics.

5. If the team is planning to create USoft web interfaces, create a web development infrastructure.

This involves setting up either an IIS web server or a USoft Services Platform. Strictly, in a development environment, the USoft Web Designer product component contains all the functionality you need for customising web pages, but in practice, you can only develop, test and debug web pages effectively by simulating the Production situation and browsing resulting HTML pages in the same way that your runtime end users will.

For setting up USoft Web Designer with IIS, see USoft Web Designer articles in the Knowledge Base. For setting up an instance of the USoft Services Platform, see USoft Service Definer articles.