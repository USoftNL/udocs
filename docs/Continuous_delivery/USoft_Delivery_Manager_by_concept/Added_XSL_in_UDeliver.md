---
id: Added_XSL_in_UDeliver
---

# Added XSL in UDeliver

> [!NOTE]
> This  article is about the **added XSL** concept in USoft Delivery Manager ("UDeliver”).

In different places in USoft Delivery Manager, you can add an XSLT transformation to an XML result file.

This technique does not give you the full range of possibilities that you would normally have when creating your own XSLT application, such as accessing multiple source documents, or superposing multiple transformations. However, it does allow you to:

- Customise output XML relatively easily.
- Maintain XSL code in the Delivery Manager repository, where it is easily kept, traced, and modified.

An important use-case for the "added XSL" technique in USoft Delivery Manager is that it allows you to do *configuration:* to create target variable placeholders in output data files with relative ease. This, in turn, allows you to deliver data content differently on each target machine at the time when you deploy the data files. For details, read the section on the "data-add-variable" sample XSL below.

If you are not familiar with XSLT, get started by looking at XSL sample code.

### How to add XSL

To add XSL, first write the XSLT transformation you want to add. Typically, you want to use one of the *XSL samples* as a starting point; see the sections below.

Store the XSL transformation in a record in the Custom XSL table. Choose Define, Custom XSL from the menu to access this table.

Then, refer to the stylesheet by name. Do this in fields and parameters called "Added XSL". These fields are listed in the table in the next section.

Instead of simply outputting the XML result, Delivery Manager will now first apply your transformation to it, as an additional step.

### Where to add XSL

|**XSL modifying...**|**... you can add here:**|
|--------|--------|
|Registries|"Added XSL" field in the Registries window (choose Release, Registries).|
|Attachments|"Added XSL" field in the Attachments window (choose Release, Attachments).The attachment must be an XML document.|
|Deliverable appdata|<p>"Added XSL" parameter of the "Release deliverable appdata" action.</p><p>"Added XSL" parameter of the "Export deliverable appdata" action.</p>|
|(All) appdata|"Added XSL" parameter of the "Export all appdata" action.|
|Metadata|"Added XSL" parameter of the "Export metadata" action.|
|(Any)   |"Apply custom XSL" action.|



### Other options

In places where Delivery Manager does not allow you to apply "added XSL", or where you require more complex processing, you can call the Apply custom XSL action from a task step.

For example, you cannot add XSL to exported or released *metadata* files. One reason for this is that this could easily interfere with Delivery Manager using metadata comparisons for further processing, as when generating a create-tables script. But you can export or release metadata, and then apply XSL to it in a separate task step.

The "Apply custom XSL" action gives you full control over where the input comes from, and where the output goes to. If you want to avoid interference with metadata comparisons, it is advisable to set the Destination File of a call to Apply custom XSL to a *different* filepath than the Source File.

### How to use the "copy" sample XSL

You can load a sample XSLT stylesheet called "copy" and use it as an example. This "copy" stylesheet transforms the source XML into identical result XML: the XML document remains unchanged.

This is useful as a starting point if you want your output XML to be only slightly different from the source XML.

*Example* 

From an XML file of deliverable appdata, you want to remove (filter out) all columns named CREATED_BY, CREATED_ON, CHANGED_BY, CHANGED_ON.

Follow these steps to do this:

1. Choose Tools, Load Deploy Sample from the menu.

2. Choose Define, Custom XSL from the menu. Find the 'copy' document.

3. Using Record, Duplicate (F7), make a copy of this Custom XSL record and then rename it. For example, name the duplicate "remove_timestamps".

4. Add the following code as a second **\<xsl:template>** section to the "remove_timestamps" stylesheet:

```
<xsl:template match="@CREATED_ON" />
<xsl:template match="@CREATED_BY" />
<xsl:template match="@CHANGED_ON" />
<xsl:template match="@CHANGED_BY" /> 

```

5. Set the "Custom XSL" parameter of the Task Step that exports the appdata to "remove_timestamps".

### How to use the "mark-up-xml-custom" sample XSL

You can load a sample XSLT stylesheet called "mark-up-xml-custom" and use it as an example. This "mark-up-xml-custom" sample gives you a starting point for transforming an XML data file by making some attribute value in the contents *variable*. It does this by replacing actual attribute values by target variable references.

This is useful if you want some data to be different on different computers (an operation called *configuration*). 

This sample focuses on making an *attribute value* machine-specific. It is just an example to get you started. Using almost the same technique, you could easily configure *element values* instead, or even *element names* or *attribute names*.

You can easily extend the XSL to perform further data manipulation that is closely linked to the configuration itself. For example, you want to pass Authorizer access rights for "super users" or administrators from Development, but different target machines have different super user names. In this case you want to make these names variable as in the example below, but also, you probably want to deliver just the super user access rights, and exclude access rights for *other* users found in Development. You can easily write an XSLT transformation that makes the names variable and, *in the same transformation*, removes all the non-super-user records exported from Development.

*Example*

To replace the super-user name 'ADMIN_DEV' in data coming from the T_AUTH_USER_USERGROUP.USERNAME column by a variable reference:

1. Choose Tools, Load Deploy Samples from the menu.

2. Choose Define, Custom XSL from the menu. Find the 'mark-up-xml-custom' document.

3. Using Record, Duplicate (F7), make a copy of this Custom XSL record and then rename it. For example, name the duplicate "config_super_user".

4. Edit the XSL. Replace the sample prompts by actual values, as follows:

|**Sample prompt**|**Value**|
|--------|--------|
|MyElement|T_AUTH_USER_USERGROUP|
|MyAttribute|USERNAME|
|MyDestValue|${SUPER_USER}|
|MyKeyName|USERNAME|
|MyKeyValue|ADMIN_DEV|



5. Add a template that suppresses T_AUTH_USER_USERGROUP records for development users other than ADMIN_DEV.

After stripping irrelevant code, your XSL could end up looking like this:

```language-xml
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

This is the equivalent of the following SQL statement:

```sql
UPDATE    t_auth_user_usergroup
SET       username = '${SUPER_USER}'
WHERE     username = 'ADMIN_DEV'

```

5. Set the "Added XSL" parameter of the Task Step that exports or releases the authdata to "config_super_user".