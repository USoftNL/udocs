# Installing USoft Developer

Before you can install or use USoft Developer, you must have a valid LICENSE.DAT file installed. This file will have been provided to you by the USoft Support desk. You should refer to the instructions provided with LICENSE.DAT for details of how to install and use it.

To download the USoft Setup executable:

```
 USDSetup-<processor>.exe 
```

from the USoft download site, contact the USoft Support desk for access requests. More on downloads.usoft.com:



## Installation steps

1. Make sure that your PC, network, and RDBMS are properly configured.

2. Double-click the file downloaded from the downloads.usoft.com site named:

```
 USDSetup-<processor>.exe
```

where processor is the bit processor of your PC. Look for x64 if you have a 64-bit processor or Win32 if you have a 32-bit processor. Wait for the Installation Wizard to initialize, and the welcome message to appear.

> [!NOTE]
> For developers working on development environments: If a day version of USoft is already installed on your system, you will be presented with a list of maintenance options at this point. You can choose to:
> When performing an overwrite, you must choose an installed version to overwrite. The only displayed versions to overwrite have the same *patch names*, but different* dayversion names*. The installed version you choose to overwrite is uninstalled afterward. More on versioning: 
>  

3. Click Next to continue.

4. You will now be asked to type details such as your name, company name and registration number (optional).Type your name, company name, registration number and click Next to continue.

You will now be asked in which folder the USoft Series products must be installed. You will also be asked to specify a location for the USoft Log folder. See



for more information about the central USoft log folder.

5. Click Next to accept the default installation folder and log folder or click Browse… if you want to specify other folders.

> [!NOTE]
> It is possible to install multiple patch versions and major versions of USoft alongside each other, e.g. 10.0.1A and 10.0.1K  or USoft 9 and 10 on one machine. This is generally intended for test or diagnostic purposes and should not reflect a production use of USoft. This can be done by selecting a different folder other other than an existing USoft install folder during the setup.

You will now be asked to type the path to your license file (LICENSE.DAT). This file will have been provided to you by the USoft Service desk. You should refer to the [License ](/docs/USoft%20for%20administrators/USoft%20license%20management)documentation for details of how to install and use it.

> [!NOTE]
> You cannot install or use USoft Series products without a valid LICENSE.DAT file. You also cannot place the LICENSE.DAT file in the same folder as the installation folder defined in the previous dialog as the installer will copy it for you.

6. Type the path to your LICENSE.DAT file or use the Browse… button to locate it and click Next to continue.

You will now be asked in which program group the program items must be installed.

7. Click Next to accept the default program group, or specify another program group first.

Once you have completed all the previous screens of the wizard, the wizard is now ready to install the USoft software.

> [!NOTE]
> If the target installation folder has similar files in use, please close all other USoft related applications and processes (Rules Services, Service Framework servers) in order to continue.

8. Click Install to start installing files. A status screen is displayed to keep you informed of progress.

Once the installation of all the files has completed, the final screen of the wizard is displayed. You can choose to launch the USoft Binder.

9. Click Finish to finish the installation process and close the Installation Wizard.

## USAPI.DLL

If USoft Developer is installed, USAPI.DLL and the example files for creating your own DLL to access USAPI.DLL will also be installed. The USAPI header and library files needed to create your own DLL are installed in the INCLUDE and LIB subdirectories of the installation directory.

If USoft Production is installed, then only USAPI.DLL will be installed, in the BIN subdirectory of the installation directory.