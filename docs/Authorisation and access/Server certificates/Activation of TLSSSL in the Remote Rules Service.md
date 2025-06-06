# Activation of TLS/SSL in the Remote Rules Service

Activate TLS in the Remote Rules service:

> [!NOTE]
> You must first import a signed certificate into USoft's Certificate store and copied required files to your \<usoft install dir>\\CERTS\\ folder. See Using Self-Signed Certificates with USoft for details.

1. Open the Control Panel from the Start menu.

2. Double-click the Administrative Tools icon, and in the resulting list, double-click the Data Sources (ODBC) icon.

The ODBC Data Source Administrator utility displays.

> [!NOTE]
> IF you are using a 64-bit machine, Windows may display the incorrect ODBC Data Source Administrator by default, so the list of available data sources will appear to be empty. You can start the correct version of the data source administrator using the following command:
> **%SystemRoot%\\SysWOW64\\odbcad32.exe**
> This could be added as a shortcut in the Administrative Tools window for convenience.

3. Choose the User DSN or System DSN tab and click Add to create a data source

*or:*

Double-click an existing data source to display the USoft Remote Rules Service API Configurator and click the Help button on the dialog for assistance.

4. From the Create a New Data Source wizard, double-click USoft Remote Rules Service 8.0

The USoft Remote Rules Service API Configurator dialog is displayed. You can now set up the data source configuration, by completing the entries in this dialog. Click the Help button on the dialog for assistance.

5. To enable TLS, check the Use TLS checkbox.