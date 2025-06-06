---
id: Troubleshooting_license_problems
---

# Troubleshooting license problems

If the license manager is not functioning properly, you may see one of the following:

- The USoft Binder can be opened normally but the response time will be slower.
- When an existing project (*.usb file) is opened in the USoft Binder, all of the icons are shown as broken icons.
- On startup of the USoft Binder a message may be displayed, stating that the license file could not be found.

Most of the problems listed below refer to a license server configuration.

A 'space' in the directory name of the license file is not permitted. An underscore should be used instead.

**License file missing**

Problem: There is no license file resident on the client. This is shown as a message under the logo on startup of the binder containing your company name.

Solution: Copy the LICENSE.DAT file to the installation directory (the directory defined during the installation of USoft).

**License manager started in wrong directory**

Problem: The license manager was started in the wrong directory on the server. The license server will function normally, but clients will not be able to use USoft. This can be checked with the lmutil tool as described below. The directory on the server where the license file is actually running from is shown.

Solution: Start the license manager from the correct directory.

**License manager is shut down**

Problem: The license manager has been shut down on the server.

Solution: Re-start the license manager.

**Client has no access to application server**

Problem: The client PC that has a license problem does not have 'access' to the server. This is a network problem that can be checked in the 'network neighborhood' of the client Windows Explorer. Look for the server and if you cannot locate it, you do not have access.

Solution: The systems manager has to grant access to this client/user, or a different server has to be chosen as the license server.

**License files on client and server have different versions**

Problem: The server and client use different versions of the LICENSE.DAT file.

Solution: Copy the LICENSE.DAT file from the server to the installation directory of the client.

**License for wrong USoft version**

Problem: A license file from the wrong USoft version is being used. When moving to newer releases the so-called feature names are changed. As a result you will need a new license file.

Solution: Contact the USoft Service Desk to get a new LICENSE.DAT file for the current USoft version.

**New license file not read**

Problem: After renewing the license file on the License Server, installed as a Windows Service, the License server does not seem to work.

Solution: Reboot your machine.

To check if your license manager is running and that the server can be reached, type the command line:

```
lmutil lmstat -a -c <path to license.dat on the client>\license.dat |more
```

To run this command you need the files: lmutil.exe, lmgrd325a.dll and a correct LICENSE.DAT file. In principle, this command can be run from any client in the network but if you are experiencing problems with just one client, it can best be run from that particular machine.

**License check failure with ODBC**

Problem: When running the ORAPI under Internet Information Server (IIS), with ODBC, an incorrect IIS security setting can lead to failure of the license check. The message that is shown reads: 'terminal remote client not allowed'.

Solution: In IIS go to the properties of your defined virtual directory. Select the tab, Directory Security and click Edit. In the Authentication Methods dialog, uncheck 'Anonymous access' and check, 'Integrated Windows authentication'.

**License check failure after upgrade**

In general, the license server is specific to a major USoft version. So, after you upgrade to a new USoft version, you need to reinstall the license server.

USoft 9.1 and 10 use FlexLM 11.15. 
USoft 9.0 uses FlexLM 11.10.
USoft 8.0 and earlier use FlexLM 8.2. 

**Corrupt registry entry**

Problem: The registry entry is corrupt.

Solution: Before attempting to edit the registry, make sure that you make a backup copy. Check the following registry entry:

```
HKEY_LOCAL_MACHINE\SOFTWARE\FLEXlm License Manager\USOFT_LICENSE_FILE
```

and make sure that the associated key points to a valid location for the correct LICENSE.DAT file. You can either edit the registry key or move the LICENSE.DAT file to solve the problem. You could also delete the registry entry and restart USoft so that a new, correct entry is made.