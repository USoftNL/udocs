---
id: Configuration_by_XSL_transformation
---

# Configuration by XSL transformation

USoft Delivery Manager facilitates the configuration of XML deliverables through the use of XSLT 1.0 transformations.

This requires command of the XSLT 1.0 language. It allows you greater freedom in exactly how you want to configure your deliverables than is possible with variable substitution. You can include additions and deletions, and you can change the structure of the information in your deliverables. However, this strategy is limited to XML-based deliverables.

Delivery Manager favours XSLT 1.0 as a vehicle for achieving the transformation of XML data sets and XML application deliverables. Using XSLT, you can mix and combine various features from the Delivery Manager toolkit:

|**Delivery Manager XSLT feature**|**Description**|
|--------|--------|
|Added XSL|Ability to transform a deliverable just before it is written to the release folder|
|Custom XSL,  Apply custom XSL action|Ability to transform a deliverable just after it has been released, at any point in a task (ie., as a separate task step)|
|Deploy scripts merging delivered data with registry data("merge scripts")|Ability for deployers to run a delivered deploy script that will merge:source-side information in a deliverable and target-side information in a registry prior to actual deployment.|



For more information about the technique of "adding XSL", go to the "Added XSL" help topic.

For more information about the technique of applying custom XSL to released deliverables, go to the help topic describing the "Apply custom XSL" action.

To create deploy scripts merging delivered data with registry data, follow the general steps in the sections below.

Configure example 3 is an example of configuration by XML transformation.

### Merge scripts Step 1: Prepare deliverables = source-side information

Examples of source-side information that is a source for merge scripts include:

- XML files containing deliverable authorisation data.
- XML files containing configuration information for deployers of servers developed in Service Definer.

Make sure that :

- The information coming from Development as the source-side input for your merge is XML-based.
- This information is actually correct at the level of contents, and optimally usable at the level of XML structure and element/attribute naming.
- The procedure for releasing this information (through the use of Delivery Manager *release actions*) is properly implemented, tested and repeatable.

### Merge scripts Step 2: Prepare registry = target-side information

"Target-side information" is often, and not incorrectly, thought about as "machine-specific settings". However, instead of being "machine-specific", they could be specific at other levels, for example, target environments, target instances, target administrator users. Also, instead of being "settings" with the simple structure of a name-value pair, they could be instructions to add, delete, or conditionally transform entire groups of settings.

Make sure that:

- All the target-side information needed to successfully transform the information of Step 1 is available in the registry.
- The registry is correctly output when Delivery Manager release actions are called.

### Merge scripts Step 3: Prepare XSLT transformation

1. Write and test an XSLT transformation (an XSLT stylesheet) that takes the source-side deliverable of step 1 as the source tree, and the registry of Step 2 as an additional source document. Here is a typical beginning of such an XSLT stylesheet:

```xml
<?xml version="1.0" encoding="windows-1252"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="xml" encoding="UTF-8" omit-xml-declaration="no" indent="yes"/>
  <xsl:param name="computername"/>
  <xsl:param name="targetname"/>
  <xsl:variable name="reg" select="document('../../registry.xml')"/>
  <xsl:variable name="ConfiguredElements" select="$reg//Computer[@name=$computername]/ConfiguredElement[@targetName=$targetname]"/>
  <xsl:template match="...">
    ...

```

2. Deliver the XSLT stylesheet by including it in your release as an attachment. You can release the XSLT stylesheet as a file with extension .XSL in a **\\using** subfolder of the release folder where the deliverable is placed.

### Merge scripts Step 4: Apply XSLT transformation at pre-deploy time

1. Using the deploy sample scripts provided as a starting point, apply the transformation as a step in the deploy script that is taken prior to the actual deployment step. If you use the USoft Blend scripting framework to write your deploy script, the syntax for applying the transformation is:

```xml
<pc:apply2file xml="{$sxmlfile}" xsl="{$susingrelpath}" filepath="{$stargetpath}" variable1="{$variable1}" variable2="{$variable2}" ... />
```

In the case of the example in Merge scripts Step 3 (previous section), the variable name-value pairs could look like this:

```xml
<pc:apply2file xml="{$sxmlfile}" xsl="{$susingrelpath}" filepath="{$stargetpath}" computername="{$thiscomputer}" targetname="{$targetname}" ... />
```

A working example of this type of deploy script is provided as a deploy sample for configuring a Service Framwork server, ie., a server defined in USoft Service Definer.

2. Deliver the deploy script by including it in your release as an attachment. You can release the deploy script as a file named "deploy.xml" with extension .XML in the same release folder as where you place the actual deliverables to be configured.