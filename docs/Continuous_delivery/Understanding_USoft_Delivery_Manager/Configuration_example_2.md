---
id: Configuration_example_2
---

# Configuration example 2

This example shows configuration of machine-specific access rights for administrator users ('super users') per computer.

This example illustrates the use of target variables in combination with added XSL. It is an example of configuration by variable substitution.

### Overview of the example

The idea in this example is to distribute super-user access rights from Development.

In Development, suppose there is a super-user called ADMIN_DEV. In each of the other environments, there is also 1 super-user, who can have a different name, but must have exactly the same access rights to the applications as ADMIN_DEV.

For each application known to USoft Authorizer, all the super-users must be assigned to the same usergroup as ADMIN_DEV in Development. Access rights for users *other* than ADMIN_DEV are not deliverable: they are set locally and must not be affected by release operations.

### Step 1: Release user-usergroup information

1. Create a task that has a task step that executes the Populate tables list action for Application = USAUTH.

2. Run the task step. See that Authorizer tables have been imported in Delivery Manager (choose Define, Application Tables to see this).

3. See that by default, the T_AUTH_USER_USERGROUP table has Deliverable = No. For this table, set Deliverable = Yes. Save work.

4. Create a task that has a task step that executes the Release deliverable appdata action for Application = USAUTH. An explanation of what is appdata and authdata is here.

5. Run the task step. See that in the **\\appdata** subfolder of the release folder, in a file called "USAUTH.xml", all the Development informatino from the T_AUTH_USER_USERGROUP table has been exported to XML. The result should look something like this (relevant values in **bold**): 

```
...
<T_AUTH_USER_USERGROUP APP_NAME="USD" USERGROUP="USD_ORA" USERNAME="ADMIN_DEV"/>
<T_AUTH_USER_USERGROUP APP_NAME="MYAPP" USERGROUP="ADMIN" USERNAME="ADMIN_DEV"/>
<T_AUTH_USER_USERGROUP APP_NAME="MYAPP" USERGROUP="MYAPPGRP" USERNAME="OTHER_USER"/>
...

```

### Step 2A: Mark up user-usergroup information

This is a simple technique and an alternative to Step 2B. This step 2A only allows you to substitute the name "ADMIN_DEV" by the variable placeholder **${SUPER_USER}.** You cannot use it to remove the non-ADMIN_DEV records, although it is fairly easy to achieve this in a separate routine by adding XSL to the task step that delivers the authdata.

For full control over mark-up and tweak, use the more complex approach of Step 2B instead.

1. After the task step that releases the authdata, define a further task step that executes the Mark up XML attribute action. Set the following parameters for this action:

|**Parameter**|**Value**|
|--------|--------|
|Replacement file|${release}\\appdata\\USAUTH.diff.xml|
|Target element|T_AUTH_USER_USERGROUP|
|Target attribute|USERNAME|
|Key name|USERNAME|
|Key value|ADMIN_DEV|



2. Run the two task steps. See that in the **\\appdata** subfolder of the release folder, the authdata now looks something like this (relevant values are in **bold**): 

```
...
<T_AUTH_USER_USERGROUP APP_NAME="USD" USERGROUP="USD_ORA" USERNAME="${SUPER_USER}"/>
<T_AUTH_USER_USERGROUP APP_NAME="MYAPP" USERGROUP="ADMIN" USERNAME="${SUPER_USER}"/>
<T_AUTH_USER_USERGROUP APP_NAME="MYAPP" USERGROUP="MYAPPGRP" USERNAME="OTHER_USER"/>
...

```

### Step 2B: Mark up and tweak user-usergroup information

This is an advanced technique and an alternative to Step 2A. If you only need to mark up the information and not (also) to tweak it, use the simpler Step 2A.

1. Run the Tools, Load Deploy Samples feature from the Delivery Manager menu. Details about this operation are here. An explanataion of what is a deploy script is here.

2. Choose Define, Custom XSL. Find the "mark-up-xml-custom" sample XSL document and make a copy of it under a different name, say, "super-users".

3. Edit your "super-users" XSL transformation so that:

- For each of the T_AUTH_USER_USERGROUP records for the ADMIN_DEV user, the super-user name is turned into the **${SUPER_USER}** target variable placeholder.

- Records for users other than ADMIN_DEV are skipped.

The result could look something like this:

```xml
<?xml version="1.0" encoding="windows-1252"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="xml" encoding="UTF-8" omit-xml-declaration="no"/>
<!-- Infix placeholder ${SUPER_USER}  -->
<xsl:template match="T_AUTH_USER_USERGROUP[@USERNAME='ADMIN_DEV']/@USERNAME">
  <xsl:attribute name="{local-name()}">${SUPER_USER}</xsl:attribute>
</xsl:template>
<!-- Skip data other than for super-user -->
<xsl:template match="T_AUTH_USER_USERGROUP[@USERNAME!='ADMIN_DEV']"/>
<!--  Default template  -->
<xsl:template match="*|@*|comment()|processing-instruction()|text()">
  <xsl:copy>
    <xsl:apply-templates select="*|@*|text()|comment()|processing-instruction()"/>
  </xsl:copy>
</xsl:template>
</xsl:stylesheet>

```

4. In the Define Tasks window (choose Define, Tasks), find the task step from Step 1 that releases the authdata, and in the Parameters box, set Added XSL = super-users. More information about added XSL is here.

5. Re-run the release task. See that in the **\\appdata** subfolder of the release folder, the authdata now looks something like this (relevant values are in **bold**): 

```
...
<T_AUTH_USER_USERGROUP APP_NAME="USD" USERGROUP="USD_ORA" USERNAME="${SUPER_USER}"/>
<T_AUTH_USER_USERGROUP APP_NAME="MYAPP" USERGROUP="ADMIN" USERNAME="${SUPER_USER}"/>
...

```

### Step 3: Declare computers in registry

1. Run the Tools, Load Registry Samples feature from the Delivery Manager menu. Details about this operation are here. An explanation of what is a registry is here.

2. Make sure you declare the different computers in the registry XML:

```
...
  <Computers>
    <Computer name="COMPUTER_1">
    ...
    <Computer name="COMPUTER_2">
    ...

```

3. Check that the Current Release (choose Release, Current Release) has Put Current Registry = Yes.

4. Re-run the release task. See that your registry information is output to the release folder, to a file named "registry.xml".

### Step 4: Declare computer settings

1. Choose Release, Computers and enter the computername of each of the computers. Save work.

2. Choose Release, Target variables and create a target variable named **${SUPER_USER}.** Press the Populate button. For each computer, specify what the super user is called on that computer. Save work.

3. Re-run the release task. See that in the "release.xml" file, settings have been added describing super user names of different computers:

```
...
<Computers>
  <Computer name="COMPUTER_1">
    <Settings>
      <Setting name="${SUPER_USER}" value="ADMIN"/>
      ...
  <Computer name="COMPUTER_2">
    <Settings>
      <Setting name="${SUPER_USER}" value="SYSTEM"/>
      ...

```

### Step 5: Substitute variables during deployment

1. Check that you have an attachment (choose Release, Attachments) with File Name = deploy.xml and Section = appdata and Blocked = No.

2. Check that the Current Release (choose Release, Current Release) has Include Attachments = Yes.

3. Re-run the release task.

4. Distribute the released folder-and-file structure to a target machine.

5. Open the "deploy.xml" deploy script. Find the line responsible for variable substitution (search for 'settings' or 'replace').

6. See that when you run the "deploy.xml" script, the local super user name is substituted when the T_AUTH_USER_USERGROUP records are imported.


:::tip

The first time you try to get this working, run the script but comment out the data import operation. That way, you can check that the substitution works correctly.

:::

 

 