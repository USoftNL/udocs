# Configuration by variable substitution

> [!WARNING]
> This technique is about [target variables](/docs/Continuous%20delivery/USoft%20Delivery%20Manager%20by%20concept/Target%20variables%20in%20UDeliver.md) and not [source variables](/docs/Continuous%20delivery/USoft%20Delivery%20Manager%20by%20concept/Source%20variables%20in%20UDeliver.md). In other words, it is about deploy-time and not release-time replacement of the variable placeholder by an actual value.

USoft Delivery Manager facilitates configuration by supporting *target variable settings.* This is an optional mechanism. You can choose to use all aspects of it, some aspects of it, or not use it at all.

[Configuration example 2](/docs/Continuous%20delivery/Understanding%20USoft%20Delivery%20Manager/Configuration%20example%202.md) is an example of configuration by variable substitution.

Configuration by variable substitution is a 3-step process:

### Step 1. Marking up deliverables with variable placeholders

You can *mark up* deliverables so that they contain *placeholders* for *target variables* in specific places, replacing (for example)

```
<WebApplication logDir="C:\Program Files\USoft\logs"> 
```

by:

```
<WebApplication logDir="${LOG_DIR}">
```

How do you get mark-up in deliverables? This depends on the type of deliverable and on the place where you want to insert the variable reference:

**Method 1 - Manual edit**

When writing upgrade scripts, something you do in Delivery Manager itself, you can type placeholders such as **${LOG_DIR}** directly into the SQL code.

**Method 2 - "Mark up XML attribute" action**

You can call the "Mark up XML attribute" action and let Delivery Manager write a variable placeholder into an XML attribute for you. This option is open if you want a variable placeholder as an XML attribute. It applies chiefly to the marking of XML data files as produced by Delivery Manager or by USoft's standard XML.EXPORT.

**Method 3 - "Mark up text file" action**

You can call the "Mark up text file" action and let Delivery Manager do a string replacement into a text file, where the replacement string contains the variable placeholder. This option is open if you want a variable placeholder in a file other than an XML data file, for example, the "application.html" file produced by Web Designer.

**Method 4 - Custom XSL**

You can gain full control over the conditions under which you want to place a variable placeholder in target XML. This option requires that you write snippets of XSLT code. When releasing XML data files with metadata, authorisation data or application data, you can add XSL that mixes variable placeholders into the XML. USoft Delivery Manager helps you do that by letting you load the "mark-up-xml-custom" XSL template as a starting point.

In general, XSL transformations can be used to perform configurations on XML deliverables that go far beyond parameter substitution. Delivery Manager provides samples of this use of XSLT in the area of server configuration. This XSLT shows how you can, for example, build (for each target machine) a list of deployable Server Properties that come partly from delivery and partly from the registry.

### Step 2. Registering name-value pairs in a registry

You can register name-value pairs called *target variable settings,* or *computer settings,* in a *registry*: this allows you to choose different values for different machines:

```
  ...
    <Computer name="PROD_BS01">
      <Settings>
        <Setting name="LOG_DIR" value="C:\Program Files\USoft\logs"/>
        ...
    </Computer>
    <Computer name="PROD_BS02">
      <Settings>
        <Setting name="LOG_DIR" value="C:\Usd91\logs\WebApplication"/>
        ...
    </Computer>
    ...

```

You can get Delivery Manager to generate these Setting elements for you by [setting target variables](/docs/Continuous%20delivery/Delivery%20Manager%20basic%20procedures/Setting%20a%20target%20variable.md) in the tool.

If you don't like the standard way in which the settings are mixed into the XML, you can take control of this yourself, using [tags](/docs/Continuous%20delivery/USoft%20Delivery%20Manager%20by%20concept/Tags%20in%20UDeliver.md).

You can preview the result on the Added XSL tab of the Registries window. To actually *output* (release) this result, create the registry.

### Step 3. Providing deploy scripts that replace variable placeholders

You can provide *deploy scripts* that are to be run after the deliverables have been placed on a specific target machine. These scripts contain the instruction to replace variable placeholders by the setting applicable for that variable on that target machine:

```
  ...
  <pc:assign-nodeset registry="../registry.xml"/>
  <pc:assign-nodeset settings="{$registry/Computers/Computer[@name=$thiscomputer]/Settings}"/>
  ...
 <pc:WriteFile filepath="{$outfile}">  
  <pc:copy-of select="strings:ReplaceVariables($infile, $settings, 'name', 'value', '')"/>
 </pc:WriteFile>

```

USoft Delivery Manager helps you do this by providing a collection of default deploy scripts for each type of deliverable. You can use these as a starting point. You can load these deploy samples by choosing Release, Load Deploy Samples from the menu.