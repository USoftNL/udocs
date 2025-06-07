---
id: Configuration_example_1
---

# Configuration example 1

In this example, different machines have different installation directories where the released application flatfiles must be deployed. The example shows how to configure these machine-specific installation directories.

This example illustrates the use of a registry for machine-specific information, combined with a deploy script that reads this information.

### Step 1: Release machine-specific information in a registry

1. Run the Tools, Load Registry Samples feature from the Delivery Manager menu. More information about this feature is here. An explanation of what is a registry is here.

2. Choose Release, Registries from the menu. Find the registry that has Current = Yes. Tailor the XML so that it specifies installation directory information for each separate machine:

```
...
  <Computers>
    <Computer name="COMPUTER_1">
      <Installations>
        <Installation installdir="c:\usd91"/>
        ...
    <Computer name="COMPUTER_2">
      <Installations>
        <Installation installdir="c:\USoft\USoft91"/>
        ...    

```

3. Create a task with a task step that executes the Release flatfiles action.

4. Make sure that the Current Release (choose Release, Current Release) has Put Current Release = Yes.

5. Run the task step. See that flatfiles have been released to the **\\flatfiles** release folder. See that your registry XML has been released to a file called "registry.xml" one level higher.

### Step 2: Release a deploy script that reads the registry information at deploy time

1. Run the Tools, Load Deploy Samples feature from the Delivery Manager menu. More information about this feature is here. An explanation of what is a deploy script is here.

2. Choose Release, Attachments from the menu. Retrieve the sample that has File Name = deploy.xml and Section = flatfiles. Make sure the attachment has Subfolder =

```
\
```

and Blocked = No.

3. Re-run the task step that releases the flatfiles. Check that a "deploy.xml" script has been output that reads the installation directories from the registry (most relevant code is **bold**): 

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root xmlns:pc="Processing.Command" xmlns:assign="Processing.Command.Assign">
<pc:terminate test="not(wrights:HasAdminRole())" 
  msg="{concat('Admin role is required. Available roles:', wrights:Roles())}"/>
<pc:assign-default workingdir="{directories:Get()}"/>
 <!-- Extract registry data -->
 <pc:assign-nodeset reg="{files:XmlFile('../registry.xml')}"/>
 <pc:assign 
         installdir="{$reg//Computer[@name=environment:MachineName()]//Installation/@installdir}"/>
 <pc:assign sourcedir="{$workingdir}" destdir="{path:Combine($installdir, 'app')}"/>
 <!-- Deploy new or changed flatfiles -->
 <pc:assign-nodeset 
         myfilteredlist="{directories:DirectoryContent($workingdir, '*.*', '1', '', '')}"/>
 <pc:each using="directories:DirectoryContent($workingdir, '*.*', '1', '', '')" 
         select="Directory/File[not(@filename='deploy.xml')]" assign:result="@filename">
  <pc:CopyFileOverwrite source="{path:Combine($sourcedir,$result)}" 
                destination="{path:Combine($destdir,$result)}"/>
 </pc:each>
 <!-- Restart rulesservices -->
 <pc:each using="$reg" select="//Computer[@name=environment:MachineName()]" 
         assign:rulesservices="//RulesService">
  <pc:each select="$rulesservices" assign:servicename="@winServiceName">
   <pc:ServiceStop servicename="{$servicename}"/>
   <pc:ServiceStart servicename="{$servicename}"/>
  </pc:each>
 </pc:each>
</root>

```

### Step 3: Distribute and run

1. Distribute the released file-and-folder structure to a target machine.

2. On this target machine, run the deploy script. Click here for details on this step.

See that the flatfiles have been correctly deployed to the directory specified for that target machine.