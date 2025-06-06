---
id: Installing_a_serverbased_license
---

# Installing a server-based license

To install a server-based license:

1. You will first need to obtain the license server software and a valid server based license. Contact USoft Customer Support to obtain the license server software and a valid server based license (license.dat). 

2. On the machine that will be used as a license server, copy the obtained license.dat and extract the license server software to the same install directory. Make sure that the license.dat file is in the same directory as the usoft.exe file.

- The license directory can be customized in the license.dat at the line that reads DAEMON, e.g if the chosen install directory is *C:\\license,* the license.dat should have the following line:	- DAEMON usoft **C:\\license\\usoft.exe**> [!WARNING]
> You can freely modify the license directory and port number usage (e.g the lines that contain *TCP:xxxx *or* port=xxxxxxx*) in the license file. Please do not edit any other details in the license file. Modifying the license file incorrectly can result in a corrupt license where the license manager fails to read the license.




- The files that you obtain are packed in a .zip file and consist of:	- installs.exe (Windows service installer for lmgrd.exe)
- usoft.exe (vendor daemon)
- lmgrd.exe (FLEXlm license manager daemon)
- lmutil.exe (command line utility for license server)
- lmtools.exe (GUI utilities for managing FLEXlm license servers)
- lmwin.exe (FLEXlm test program, a GUI client application that uses the Trivial API)



3. If you have an existing USoft installation, then replace the existing license.dat file in the install directory of USoft with the license.dat obtained in step 1. If you have not installed USoft yet, then you need to provide the obtained license.dat of step 1 file during the setup.

> [!NOTE]
> If necessary you can double-check the name of your License Server by opening the LICENSE.DAT file in a text editor. The name of your License Server is stored in the line that reads: "SERVER". Make sure the name of the listed server matches the (host)name of the target server.
> To check the hostname of your server, use the *ping* command. Type 'ping \<servername>'. The response will tell you if the server name is valid or not. Otherwise you can use the *hostname *command in windows to check your hostname.

> [!NOTE]
> When a file server is also used as a license server you could use the installation directory as the license directory for the license server. In this way, with only one file being used by all clients and the license server, a correct synchronization between server and client LICENSE.DAT files is guaranteed. There is one drawback. If you uninstall USoft, you will also remove the LICENSE.DAT file from the license server. Remember to make a copy before uninstalling USoft.

> [!NOTE]
> The license server makes a log file directory in the root folder. It is always called 'flexlm'. If you do not want extra directory entries, it is a good idea to make the license directory '\<root>\\flexlm\\'. There is no other way of preventing the extra entry.

 

## How to start and stop the license server from command line

To start and stop the License server Daemon:

Type the following command to start the license server:

```
lmgrd -app -c <path to license server directory>\license.dat
```

Type the following command to stop the license server:

```
lmutil lmdown -c <path to license server directory>\license.dat
```

## How to start and stop the license server as a Windows service

To start and stop the license server as a service:

The license server as a service can be started by typing the command line:

```
installs -n "USoft License Manager" -c <path to license server directory>\license.dat -l <desired logfile> -e <path to license server directory>\lmgrd.exe
```

This service can be activated like any other service and can be restarted when the server is rebooted.

The license server as a service can be stopped within the Windows Services , accessed from the Control Panel.

The license server as a service can be removed by typing the command line:

```
installs -r -n "USoft License Manager" -c <path to license server directory>\license.dat -l <desired logfile> -e <path to license server directory>\lmgrd.exe
```

##  

 