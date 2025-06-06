---
id: pcServiceInstall
---

# pc:ServiceInstall



> [!NOTE]
> This article is about the **pc:ServiceInstall**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:ServiceInstall**

Installs a Windows service on the local computer. This could be a USoft Rules Service, a server defined in USoft Service Definer (Service Framework server, or "SFW server"), or a non-USoft-specific service.

*Syntax*
 

```
<pc:ServiceInstall
      servicename="*servicename*"
      servicepath="*absolute-path*"
      servicedescription="*servicedescription*"
      servicestartup="*servicestartup*" />

*servicedescription*  ::=  { *servicename*@*publication-file-path* | *text-literal* }

*servicestartup*  ::=  { manual | automatic | disabled | delayed |
                       waitfor:*servicename*[,*servicename*...] }
```

The required **servicename** is the Windows service name by which you want to install the service.

The required **servicepath** is an absolute path leading to the .exe file that is able to install the service. For USoft-specific executables see the sections below.

The required **servicedescription** must have the format *servicename*@*publication-file-path* if you are installing a server for the USoft Service Framework. Otherwise, **servicedescription** is any description text. The value of **servicedescription** shows up in the Windows Services panel.

The optional **servicestartup** determines the Windows service's Startup Type. If you choose the option:

```
waitfor:*servicename*[,*servicename*...]
```

then the service can only start after the specified other service(s) has (have) been started first. See Example 1 in the "Installing a USoft SFW Server" section below.

## Installing a USoft Rules Service

The **servicename** of a USoft Rules Service is conventionally, but not necessarily,

```
RulesService-*port*
```

where *port* is the port number where the computer is listening for requests.

The **servicepath** of a USoft Rules Service must be set to:

```
*usoft-bin-dir*\RulesService.exe
```

This executable program will look in the USoft BIN directory for a Rules Service configuration file by the following name:

```
*servicename*.config
```

You can generate such a file by using pc:ConfigRulesService.

For the purpose of installing a Rules Service, the pc:ServiceInstall directive is also allowed to appear, without any attributes, as a child element of pc:ConfigRulesService.

*Example*

```language-xml
<pc:ServiceInstall
    servicename="RulesService-7779"
    servicepath="C:\usd91\bin64\RulesService.exe"
    servicedescription="USoft version 9.1.1B logging in: C:\Users\S4200\AppData\Local\Temp\USoft_logs\rules_service" />
```

## Installing a USoft SFW server

The **servicename** of an SFW server is conventionally, but not necessarily, the following name. This is also the **servicename** format that Service Definer generates for an SFW server in Development. You can view this name in Service Definer as Windows Service Name on the Server State tab of the Servers window for a server.

```
*servername-port*
```

The **servicepath** of a server defined in USoft Service Definer must be set to:

```
*usoft-bin-dir*\UService.exe
```

The **servicedescription** of an SFW server is required to have the following format, which communicates both the Windows Service name and the Publication File Path leading to the .JAR file and accompanying configuration files as published from Service Definer. This is also the **servicedescription** format that Service Definer generates for an SFW server in Development. You can view this name in Service Definer as the first line of the "Description" value on the Server State tab of the Servers window for a server:

```
*servicename*@*publication-file-path*
```

If you want to make sure that your SFW server does not start until the Rules Service(s) it depends on are started, specify:

```
servicestartup="RulesService1[,RulesService2...]"
```

*Example 1*

```language-xml
<pc:ServiceInstall
    servicename="Default-8090"
    servicepath="c:\usd91\bin64\UService.exe"
    servicedescription="Default-8090@C:\USoft\servers\Default\" />
```

*Example 2*

```language-xml
<InstallSFWServer xmlns:pc="Processing.Command">
   <pc:terminate test="not(wrights:HasAdminRole())" msg="{concat('Admin role is required. Available roles:', wrights:Roles())}"/>
   <pc:assign-string-default
      SFW_server_name="Default"
      serviceport="8090"
      SFW_publication_file_path = "C:\USoft\servers\Default\"
      logfile="{service:ServiceLogFile()}"
      serviceexepath="{path:Combine(xslutil:USoftBinDir(), 'UService.exe')}"
      servicename="{concat( $SFW_server_name, '-', $serviceport)}"
      servicedescription="{concat($servicename, '@', $SFW_publication_file_path)}"
      servicestartup = "waitfor:RulesService-9157,RulesService-9158"/>
   <pc:terminate test="service:ServiceIsInstalled($servicename)" msg="{concat('Service ', $servicename, ' is already installed.')}"/>
   <pc:ServiceInstall
         servicename="{$servicename }"
         servicepath="{$serviceexepath }"
         servicedescription="{$servicedescription }"
         startuptype="{$servicestartup }" >
      <pc:Failed>
         <pc:msg/>
         <pc:comment-of>
            <pc:text>Logfile is: </pc:text><pc:value-of select="$logfile"/>
         </pc:comment-of>
      </pc:Failed>
      <pc:Succeeded>Service <pc:value-of select="$servicename"/> installed successfully.</pc:Succeeded>
   </pc:ServiceInstall>   
</InstallSFWServer>
```

## Installing a non-USoft-specific service

To install a non-USoft-specific Windows service, specify as **servicename** the Windows Service name by which you want the service to be known.

Specify as **servicepath** the executable of the program that knows how to install the service. While it is possible that configuration details are programmed inside the executable, it is more likely that you are expected to provide these details in some predefined way, for example in a configuration file in a specified location and with a specified name. Depending on the program, servicedescription can be a free-format field for comments (as with USoft Rules Services), or it may be required to contain configuration detailsConsult the program's documentation for these details.

In all cases, the Startup Type is an attribute of Microsoft Windows' implementation of services and is visible in the Services console. Consult MS Windows help for details on Startup Type.