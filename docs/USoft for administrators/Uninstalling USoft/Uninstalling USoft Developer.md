# Uninstalling USoft Developer

To uninstall USoft Developer using the Control Panel:

1. From the Control Panel, choose Programs and Features. The Uninstall or change a program window is now displayed.

2. In the list view, select the USoft version you want to uninstall, click the Uninstall button above the list.

3. The uninstaller dialog is now displayed. Click Uninstall.

All files, folders, registry entries, shortcuts, etc. that are associated with USoft Series products will be removed from your system. All log files and extra files that were made after the initial installation are kept.

## Silent uninstall

To perform a silent uninstallation, you can add the flag -**uninstall**.

*Example*

```
.\USDSetup-x64.exe -q -uninstall

```

You need the exact same version installer to uninstall. If you do not have the executable anymore, you can use a PowerShell script. You also need to indicate the exact dayversion you want to uninstall. See “Versioning of USoft Developer” for details on dayversion names. An example of the PowerShell script for 64-bit versions to uninstall 10.0.0.21020:

```
$key=Get-ChildItem -Path HKLM:\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall | Get-ItemProperty | Where-Object {$_.DisplayVersion -match "10.0.0.21020"}
& $key.BundleCachePath -uninstall -q

```

To perform a silent uninstallation for 32-bit versions via PowerShell:

```
$key=Get-ChildItem -Path HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall | Get-ItemProperty | Where-Object {$_.DisplayVersion -match "10.0.0.21020"}
& $key.BundleCachePath -uninstall -q

```

 