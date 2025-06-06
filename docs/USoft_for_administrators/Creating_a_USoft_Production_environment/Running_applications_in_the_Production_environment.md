---
id: Running_applications_in_the_Production_environment
---

# Running applications in the Production environment

This topic offers some guidelines for speeding up startup times for the application, and for increasing performance of the application itself.

For optimum performance, applications should be run from flat files in the production environment. Make sure that the "-ddfile" option, and the application name are specified on the command line that starts the application.

- It is important that the Windows Designer is NOT enabled when starting the application in the production environment. Make sure that the "-wd" option (normally used to enable the Windows Designer) is NOT specified on the command line that starts the application.
- To run your application from flat files on Windows, the .CON and (if any) .ESI files for the application must be in your \<install_dir>\\APP directory.
- Performance will suffer if you run an application on a central server, especially if you use network drivers that are also running on the server. Best performance will result from running client versions of network drivers, and running the application on the client.