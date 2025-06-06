---
id: Replacing_a_license_file
---

# Replacing a license file

USoft license management uses two license files: one on the License Server and one on each client installation. When a new license file has to replace the old one, the license files in both locations should be replaced.

### Replacing the LICENSE.DAT file on the Client

The license file for the client installation can be found in the folder where USoft is installed. For a typical installation, this is: C\\Program Files\\USD8.

> [!NOTE]
> There is no need to replace the LICENSE.DAT file at the location that was indicated during the installation procedure. Following installation of USoft products, this LICENSE.DAT file is no longer used.

### Replacing the LICENSE.DAT file for the license server

The license file for the License Server can be found in the folder that has been indicated as the license server folder.

> [!NOTE]
> If necessary, you can double-check the name of your License Server by opening the LICENSE.DAT file in a text editor. The name of your License Server is stored in the line that reads: "SERVER". This directory can change, on your request, between license files.

To replace the LICENSE.DAT file for a license server:

- Stop the license server
- Replace the old LICENSE.DAT with the new LICENSE.DAT
- Start the license server again

> [!NOTE]
> 1: When this license server is installed as an NT service, the license server must be stopped from within the NT service manager. This is no need to uninstall the service and reinstall the service when there are no changes in the path to the license file.

> [!NOTE]
> 2: If the path to the license server has changed, the license should be uninstalled after the license service has been stopped. After replacing the LICENSE.DAT file, the service can be reinstalled and started again. It might be necessary to boot your machine.