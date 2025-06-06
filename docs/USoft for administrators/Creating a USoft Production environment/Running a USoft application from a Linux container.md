# Running a USoft application from a Linux container

----

![](/api/USoft%20for%20administrators/Creating%20a%20USoft%20Production%20environment/assets/898a4c4e-5f69-427f-9eda-6d2be62bc812.png)



This article describes running a USoft application from a Linux container with USoft **11.0.1A.**

In this version, the option to use an Oracle database was added.

----

The container is based on Ubuntu LTS (Jammy Jellyfish, 22.04 for USoft 11.0) and includes the necessary components to run:

- Rules Service
- USoft Web Application
- USoft Service Framework (e.g., REST APIs)
- UBlendIt scripts

> [!NOTE]
> You will need to add application-specific files (like “application.con”) and configuration files to the container. This can be done either when creating a container or by using storage drivers.
> For more information on Docker storage drivers, go to: [Docker Storage Documentation](https://docs.docker.com/storage/).

## Prerequisites

- [Docker engine](https://docs.docker.com/engine/)
- [Valid credentials to USoft's Azure Container Registry (ACR)]()
- [Access to an application database](/docs/USoft%20for%20administrators/Installing%20USoft)

## USoft Docker image

To get the Docker image from the USoft Azure Container Registry (ACR), follow these steps:

1. Log in to ACR:

```
docker login usoft.azurecr.io --username <client-ID> --password <client-secret>
```

2. Pull the image:

```
docker pull usoft.azurecr.io/usoft-rulesservice:11.0.latest
```

3. Log out of ACR:

```
docker logout usoft.azurecr.io
```

Click these links for additional information:

[Docker CLI - login](https://docs.docker.com/engine/reference/commandline/login/)

[Docker CLI - pull](https://docs.docker.com/engine/reference/commandline/pull/)

[Docker CLI - logout](https://docs.docker.com/engine/reference/commandline/logout/)

[ACR authentication details](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-authentication)

## Database connection

The **USoft RulesService** container supports connections to 2 database platforms:

- Oracle (via Oracle Instant Client),
- SQL Server (via ODBC).

### Oracle

The base image comes with Oracle Instant Client pre-installed. This allows you to connect to an Oracle database out-of-the-box. To use this, simply [configure the Oracle connection string](/docs/USoft%20for%20administrators/Installing%20USoft/Oracle%20requirements.md).

> [!WARNING]
> The container runs behind a [Docker network](https://docs.docker.com/engine/network/). Please be mindful of this when setting up your connection.

### SQL Server

A connection to SQL Server can be made via ODBC. The base image includes Microsoft ODBC Driver 18 for SQL Server pre-installed. To connect to a target SQL Server database, you will need to [configure the ODBC connection](https://learn.microsoft.com/en-us/sql/connect/odbc/linux-mac/connection-string-keywords-and-data-source-names-dsns?view=sql-server-ver16).

The default odbc.ini file is located in /etc/. It follows this Connection String Syntax:

*Syntax*

```
[*rs-db-connect-string*]
Driver=ODBC Driver 18 for SQL Server
Server=*connection-type*:*host*[,*port*]
Database=*database*
TrustServerCertificate=yes
```

*Example*

```
[MYSQLSERVER]
Driver=ODBC Driver 18 for SQL Server
Server=tcp:host.docker.internal
Database=TRAVEL
TrustServerCertificate=yes
```

> [!NOTE]
> For a SQL Server instance running on the host machine, use host.docker.internal as the host.
> For an internal SQL Server instance within the [container network](https://docs.docker.com/engine/network/), use the container's name.

For more details, refer to the following resources:

- [Data source specification](https://www.ibm.com/docs/en/informix-servers/14.10?topic=file-data-source-specification)
- [SQL Server TCP/IP configuration](https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/configure-a-server-to-listen-on-a-specific-tcp-port)

> [!WARNING]
> If you run on Linux, USoft strongly recommends developing on Windows with ODBC for SQL Server. In USoft Binder, set:
> RDBMS = Odbc
> and **not** to use SQL Server as a native data source, ie., with USoft Binder set to
> RDBMS = Oledb
> Using ODBC avoids issues related to syntax differences in database functions and data types.

## Running the USoft application

### Rules Service

To run the USoft Rules Service from a Linux container, you will need a valid configuration file named

```
*rules-service*-*port*.config
```

For example:

```
RulesService-7799.config
```

This configuration file must be placed in this folder:

```
/opt/usoft/bin64
```

You will also need application-specific files, in particular “*application.*con”.

The recommended approach is to:

1. Start the container and configure the Rules Service via the web interface:

```
 http://localhost:*port*/config.ure
```

2. Once configured, save the configuration file for future use.

The application-specific files can be either [mapped](https://docs.docker.com/engine/storage/) or [copied](https://docs.docker.com/reference/cli/docker/container/cp/) into the container.

> [!WARNING]
> Ensure the database connection is properly configured, as described in the [Database connection](#Database+connection) section of this article.

> [!NOTE]
> Use [docker storage](https://docs.docker.com/engine/storage/) to make changes to the configuration file persistent.

### Service Framework

To run the USoft Service Framework from the Linux container, ensure that [application resources](/docs/Services) are defined in the USoft Service Definer. You will need the application’s service definitions to configure the service framework correctly.

## Step-by-step guide

This section tells you how to make the following available from a Linux container:

- A default USoft web application with a database located outside the container but on the same machine. This default will have the [usoft-zero](/docs/Web%20and%20app%20UIs/USoft%20template%20defaults) look-and feel.
- A USoft REST API or SOAP service.

> [!WARNING]
> The steps in this section are just an example. Avoid blindly copy-pasting without ensuring they match your specific configuration.

### 1. Pull a USoft Docker image from ACR

First you will need to pull a base USoft image. This base image contains the necessary components to host a USoft application, and you will customize it by adding your application-specific elements.

1. Open a PowerShell or CMD command-line window as Administrator.
2. Run the following commands to pull the image from the registry:

```
docker login usoft.azurecr.io --username <client-ID> --password <client-secret>
docker pull usoft.azurecr.io/usoft-rulesservice:11.0.latest
docker logout usoft.azurecr.io
```

### 2. Set up an ODBC configuration for SQL Server

1. On Windows: Create a file with the following filepath and filename:

```
C:\ProgramData\USoft\odbc.ini
```

2. Make sure this file has the following contents (example):

```
[MYSQLSERVER]
Driver=ODBC Driver 18 for SQL Server
Server=tcp:host.docker.internal
Database=TRAVEL
TrustServerCertificate=yes
```

### 3. Start the Rules Service in the container 

1. On Windows, create an empty text file with the following filepath and filename (example):

```
C:\ProgramData\USoft\RulesService-7777.config
```

2. Create and start the container (example):

```
docker container run --name MyUSoftContainer \
-v "C:\ProgramData\USoft\odbc.ini":/etc/odbc.ini:ro \
-v "C:\ProgramData\USoft\RulesService-7777.config":/opt/usoft/bin64/RulesService-7777.config \
-p 8101:7777 \
-p 8102:8093 \
usoft.azurecr.io/usoft-rulesservice:11.0.latest /opt/usoft/bin64/RulesService -a 7777 -gc host.docker.internal
```

Explanation:

- The **-v** flag maps configuration files into the container. See [docker storage](https://docs.docker.com/engine/storage/).
- The **-p** flag maps container ports to host ports. See: [docker networks](https://docs.docker.com/engine/network/).

3. Verify the container is running. Open the Docker Desktop tool. Run this command:

```
docker container ls
```

to make sure that the container is running.

4. Copy the application files into the container (example):

```
docker cp C:\usd110\app\TRAVEL.con MyUSoftContainer:/opt/usoft/app
docker cp C:\usoft\publications\TRAVEL\webpages MyUSoftContainer:/opt/usoft/publish
docker cp C:\usoft\servers\TRAVEL MyUSoftContainer:/opt/usoft/sfw
```

### 4. Configure the Rules Service in the container

1. Open a browser and navigate to:

```
http://localhost:8101/ure.config
```

2. Traverse the wizard, making sure you set these values:

|        |        |
|--------|--------|
|User, password|Enter the database login credentials.|
|Connection|Use the MYSQLSERVER connect string as specified in the “odbc.ini” file.|
|RDBMS   |`odbc`  |
|Owner   |Optionally, specify the database owner.|



The configuration wizard will write the configuration settings to the “RulesService-7777.config” file.

> [!NOTE]
> You can mount the configuration file as read-only:
> to prevent modifications when multiple containers are used.

### 5. Start the Service Framework

1. Access the Service Framework folder in the container:

```
docker exec -it MyUSoftContainer bash
cd /opt/usoft/sfw
```

2. Start the Service Framework server with the following command:

```language-java
java --add-opens java.base/java.lang=ALL-UNNAMED -Dlog4j.configurationFile=file:"log4j2.xml" -classpath MyServer.jar:lib/*:/opt/usoft/bin64/UService.jar com.usoft.uservice.urest.Main MyServer
```

### 6. Verify the application is running

You should now be able to browse the application at:

```
http://localhost:8102/myservice1/myconnection1/
```

This URL corresponds to the Service Framework configuration and should display the web application or expose the API.

## Conclusion

In this step-by-step guide, you have learned how to:

- Install Docker and configure the container
- Set up a database connection (Oracle or SQL Server)
- Start the Rules Service and Service Framework
- Deploy your application files and configure the service

For additional details or troubleshooting, refer to the official [Docker documentation](https://docs.docker.com/).