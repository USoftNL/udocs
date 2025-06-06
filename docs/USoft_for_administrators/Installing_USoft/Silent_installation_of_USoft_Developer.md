---
id: Silent_installation_of_USoft_Developer
---

# Silent installation of USoft Developer

You can perform a silent installation. This will install the USoft Developer without presenting an interactive interface. The silent installation can be performed by calling the installer from a command line with a -**q**, -**quiet** or -**silent** flag.

The silent installation will run with default parameters unless optional parameters are added. The table below indicates possible optional parameters and their default values.

## Parameters

|**Parameter**|**Stands for**|**Default value**|**Notes**|
|--------|--------|--------|--------|
|CMD_INSTALLDIR|Installation Directory|C:\\Program Files\\USoft *patch‑name*|Do not end with backslash|
|CMD_LOGDIR|Log Directory|*%temp-dir%*|Do not end with backslash|
|CMD_LICENSEDIR|License Directory|C:\\License\\|Do not end with backslash|
|CMD_PROGRAMGROUP|Program Group|USoft Series *patch-name*|For Start Menu|
|CMD_DESKTOPSC|Desktop Shortcut|*(empty)*|Empty input for no shortcut|
|CMD_COMPANY|User Company|*(empty)*|        |
|CMD_USER|Username|*(empty)*|        |
|CMD_REGNO|User's registration number|*(empty)*|        |
|LAUNCHBINDER|Launch Binder|*(empty)*|Empty input for no launch after install.|
|OVERWRITE|Overwriting a certain version|*(empty)*|Empty input for not overwriting a version|



To set parameters to non-default values, use this syntax:

```
parameter="value"

```

> [!TIP]
> If you use Powershell, add single quotes around the argument:

*Example*

This example performs a silent install with certain parameters set to non-default values:

```
.\USDSetup-x64.exe CMD_INSTALLDIR="C:\USoft\USoftDeveloper" CMD_LOGDIR="C:\temp" CMD_LICENSEDIR="C:\MyLicenseDir\license" -q -install

```

## Silent overwrite

You can also perform a silent overwrite (uninstall an old version and install the new version with the same parameters as the old one) by adding an OVERWRITE argument to the command. The value needs to be the year/day number of the day version that is installed. For example, if you want to overwrite an installation of a version that is built on 22nd of February 2021:

```
.\USDSetup-x64.exe -install OVERWRITE="21053" -quiet

```

You can add arguments to tweak some settings if desired, for example if you want to overwrite install to a different location:

```
.\USDSetup-x64.exe -install OVERWRITE="21053" -quiet CMD_INSTALLDIR="C:\Program Files\USoft10.0Custom"

```