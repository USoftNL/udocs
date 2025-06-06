---
id: Hardware_and_operating_system_requirements
---

# Hardware and operating system requirements

## Disk space

For a production environment, a minimum of 500 MB of disk space is required.

For a development environment, a minimum of 1 GB is required.

## Memory

Required memory is difficult to gauge as it depends on a number of different parameters, such as the size of the USoft application(s) and the number of other applications running on the same machine.

For a production environment, a minimum of 2 Gb of RAM is recommended.

For a development environment, 4 Gb is recommended.

## Operating system version

> [!NOTE]
> USoft 11 and 10 are **64-bit only.** They require a 64-bit operating system. USoft 9.1 is still provided as a 32-bit application.

USoft runs on the following versions of the Microsoft Windows operating system.

Make sure updates are installed to ensure the latest .Net version is present.

If you are running Windows Server and you are using USoft Web Designer, you may need to install the **WebView2** browser control for web page previews. ( [https://developer.microsoft.com/en-us/microsoft-edge/webview2/](https://eur01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdeveloper.microsoft.com%2Fen-us%2Fmicrosoft-edge%2Fwebview2%2F&data=05%7C02%7CRob.van.Haarst%40usoft.com%7C795a5e5a859c4620372b08dc16ae16e3%7C8361bffb9c4c4ddf9983fdac0a131912%7C0%7C0%7C638410184165756545%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=y84z6Wx4vgBXcNFaQNrbfr9pfo27%2BGDVOpRbjvW2CuQ%3D&reserved=0). )

|        |        |
|--------|--------|
|USoft 11.0|<p>Windows 11</p><p>Windows 10</p><p>Windows Server 2022</p><p>Windows Server 2019</p><p>Windows Server 2016</p>|
|USoft 10.1|<p>Windows 11</p><p>Windows 10</p><p>Windows Server 2022</p><p>Windows Server 2019</p><p>Windows Server 2016</p>|
|USoft 10.0|<p>Windows 10</p><p>Windows Server 2019</p><p>Windows Server 2016</p>|
|USoft 9.1|<p>Windows 10</p><p>Windows Server 2016</p><p>Backwards only: Windows Server 2012 R2 (version 6.3)</p>|
|USoft 9.0|<p>Windows 7 (version 6.1)</p><p>Windows Server 2012 R2 (version 6.3)</p><p>Windows Vista (version 6.0)</p><p>Windows Server 2008 R2 (version 6.1)</p><p>Windows 8</p><p>Windows 8.1</p>|



## Operating system configuration

### Environment variables

Check that the path to the connection DLLs of the RDBMS you are using, for example C:\\ORANT\\BIN has been set., To do this, use System, Environment Settings from the Control Panel.

### Write access to TMP and TEMP directories

USoft needs a working directory on the file system for general purposes. USoft Setup will ask you to provide a filepath to a temporary folder. If for some reason this folder is not available USoft will fall back on TMP and TEMP directory settings. Specify these as in the following examples. Make sure you have write access to the folders you specify.

```
set tmp=c:\tmp
set temp=c:\temp
```

 

 