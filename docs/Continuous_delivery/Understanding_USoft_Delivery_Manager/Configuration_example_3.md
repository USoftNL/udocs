---
id: Configuration_example_3
---

# Configuration example 3

This example shows how to perform a merge of source-side and target-side server properties when you deploy a Server defined in USoft Service Definer. When the server is deployed on a specific target machine, it will have a list of properties that combines:

- Source-side properties supplied (*released*) from Development and
- Other properties (*target-side properties*) that are machine-specific and declared in a registry.

This example shows the use of XSLT transformation during deployment. It is an example of configuration by XSL transformation.

Good command of the XSLT 1.0 language is required, as well as a minimal grasp of the USoft REST service framework.

### Step 1: Declare and release a server with server properties

1. In USoft Service Definer, declare an example Server object named, say, "MYSERVER1".

2. Make sure you define a couple of server properties for "MYSERVER1", even if they are just dummy properties that will at least allow you to grasp the outcome of this configuration example.

2. In USoft Delivery Manager, define a task with a task step that executes the Extract servers action in the database account where you have defined MYSERVER1.

3. Run the task step. See that Delivery Manager has extracted the server information (choose Define, Extracted Server Objects).

4. Add a task step that executes the Release server action for "MYSERVER1".

5. Run this task step. See that a .JAR file and supporting files have been released to the **\\servers** subfolder of the current release folder. One of the supporting files is "config.xml". See that the server properties are described in this "config.xml" file.

### Step 2: Describe machine-specific server properties in registry

1. Run the Tools, Load Registry Samples feature from the Delivery Manager menu. More information about this feature is here. An explanation of what is a registry is here.

2. In the current registry (choose Release, Registries and find the registry with Current = Yes), define some additional and machine-specific server properties, making sure these have different property names than the source-side properties defined in Service Definer:

3. Make sure the Current Release (choose Release, Current Release) has Put Current Registry = Yes.

4. Re-run the task step that releases MYSERVER1. Check that the machine-specific server properties have been correctly output to a file named "registry.xml" in the release folder.

### Step 3: Output deployment XSL that merges source-side and target-side properties

1. Run the Tools, Load Deploy Samples feature from the Delivery Manager menu. More information about this feature is here. An explanation of what is a deploy script is here.

2. Check that you have an attachment (choose Release, Attachments) with File Name = "deploy.xml" and Section = servers and Blocked = No.

This attachment must have Subfolder =

```
\
```

and "Path from server folder" = Yes.

3. Check that you have an attachment (choose Release, Attachments) with File Name = "deploy.xsl" and Section = servers and Blocked = No.

This attachment must have Subfolder =

```
\using
```

4. Re-run the task step that releases MYSERVER1. Check that the "deploy.xml" attachment has been output to the server release folder and the "deploy.xsl" attachment to its **\\using** subfolder.

5. Inspect "deploy.xml" and see that this script applies the "deploy.xsl" transformation before actually deploying the server deliverables. This is performed by the **\<pc:apply2file>** command.

6. Inspect "deploy.xsl" and check that this transformation combines source-side server properties from "config.xml" with target-side properties from the registry.

### Step 4: Merge source-side and target-side properties

1. Run the "deploy.xml" script. See that the resulting "config.xml" has the combined list of source-side and target-side properties.

 

 

 

 

 