---
id: Registries_in_UDeliver
---

# Registries in UDeliver


:::note

This article is about the **registry** concept in USoft Delivery Manager (“UDeliver”).

:::

**See also**

- [Loading registry samples](/docs/Continuous_delivery/Delivery_Manager_basic_procedures/Loading_registry_samples.md)
- [Creating a registry](/docs/Continuous_delivery/Delivery_Manager_basic_procedures/Creating_a_registry.md)

A *registry* is an XML document that acts as a mini-database describing how target machines are different from Development machines: it provides data needed for *configuration.*

You typically use a single registry in your DTAP arrangement, but Delivery Manager allows you to keep several and switch between them.

The structure and contents of this registry are free-format. You can tailor every aspect of the registry to your needs.

Configure example 1 illustrates the use of a registry for configuring machine-specific information, combined with a deploy script that reads this information at the time when deliverables are deployed.

### Strategies for using registry data in deployment

USoft Delivery Manager provides help and examples for 2 typical strategies of using registry data.

*Strategy 1 - Computer-specific sections*

You can describe computer-specific information by mentioning computernames. For example, you can distribute flatfiles to different locations on different machines by providing sections of registry data such as:

```
<Registry>
  <Computers>
    <Computer name="PROD_BS01">
      <Locations>
        <Flatfiles>C:\USoft\91\app</Flatfiles>
        <Logs>C:\Users\Default\AppData\Local\Temp\Logs</Logs>
        ...
    </Computer>
    <Computer name="PROD_BS02">
      <Locations>
        <Flatfiles>C:\USD91\APP</Flatfiles>
        <Logs>C:\Users\Default\AppData\Local\Temp\Logs</Logs>
        ...
    </Computer>
    ...

```

Deploy scripts can tap into this registry data and distribute a set of flatfiles to the correct location on each machine by heeding only the registry section that corresponds to the computername of the computer where the deploy script executes.


:::note

While registries describe target machines and source variables do not, teams have reported that variable substitution in registries is generally useful. For this reason, from USoft 10.0.1C, you can use [source variables](/docs/Continuous_delivery/USoft_Delivery_Manager_by_concept/Source_variables_in_UDeliver.md) in registry XML. They are automatically substituted by values when you release the registry. The substitutions can be previewed on the Settings tab in the Registries window.

:::

*Strategy 2 - Computer settings*

You can express computer-specific information as name-value pairs, where the name is a placeholder in this format:

```
${MyPlaceholder}
```

For example:

```
<Registry>
  <Computers>
    <Computer name="PROD_BS01">
      <Settings>
        <Setting name="${ADMIN_USER}" value="ADMIN_1">
        ...
    </Computer>
    <Computer name="PROD_BS02">
      <Settings>
        <Setting name="${ADMIN_USER}" value="ADMINISTRATOR">
        ...
    </Computer>
    ...

```

You can then position these same placeholders in specific places in your deliverables: in upgrade scripts, deliverable data, Service Framework config files, and Web Designer published files. For each occurrence of a placeholder, deploy scripts can read the corresponding computer-specific value from the registry and replace the placeholder by the value just before deploying the deliverable on the target computer.

### Delivery Manager support for registries

Registry XML data may be produced by any USoft or non-USoft software. If possible, it is attractive to organise the information in a single data structure that is published for each application version (each release) and that is accessible for each deliverable type.

If you keep a registry in Delivery Manager itself, then each time you execute a release action, Delivery Manager automatically outputs an XML file named **registry.xml** to the current release folder (if you do not switch this feature off).

If you keep name-value pairs for computer-specific settings, Delivery Manager automatically mixes these settings into the **registry.xml** file it produces.

If necessary, you can customise the registry format to your liking, especially if you associate settings with tags.

### How to write a registry manually

Follow these steps to write a registry manually:

1. Choose Release, Registries from the menu.

2. Give the registry a name and write, or copy-paste, the XML code in the Document field.

3. Make sure the registry that you want to output has the Current = Yes flag. Only 1 registry can be current at any one time. If you set this flag for a registry record, any other registry records will automatically get Current = No.


:::tip

You can get a jump start by loading a registry sample provided by USoft. Choose Tools, Load Registry Sample from the menu.

:::

### How to import a registry

If you have software that collects, stores or processes information about target computers, you may want to extract this information and transfer it into a Delivery Manager registry XML. There are many options for automating this transfer. If the information is in structured data, for example, in an already existing USoft application that stores information about such things as "instances" or "application variables" describing computer-specific settings, then a good implementation could be to create a Task that calls the "Export application data" action in that repository, and then imports the result into the Registry table.

### How to release the registry

The registry stored in Delivery Manager is automatically (re)released each time you call a release action, that is, an action named "Release...". To release the registry:

1. Make sure the registry you want to release has the Current = Yes flag.

2. Make sure the Current Release has the Put Current Registry = Yes flag.

3. Run a Task Step that executes any action named "Release...".

The registry is released as a file named **registry.xml** in the release folder. This is the folder named after the application version you are releasing.

### How to mix in computer-specific settings

You can get Delivery Manager, just prior to releasing the registry, to mix computer-specific settings into the registry XML. The result will look like this:

```
<Registry>
  <Computers>
    <Computer name="PROD_BS01">
      <Settings>
        <Setting name="${ADMIN_USER}" value="ADMIN_1">
        ...
    </Computer>
    <Computer name="PROD_BS02">
      <Settings>
        <Setting name="${ADMIN_USER}" value="ADMINISTRATOR">
        ...
    </Computer>
    ...

```

To get Delivery Manager to mix in computer-specific settings in this way:

1. Make sure that the registry XML actually contains **\<Computer>** nodes representing each computer for which you want to have settings mixed in, as in the example.

2. Declare the settings in Delivery Manager by declaring computers, target variables, and computer settings.

3. Run a Task Step that executes any action named "Release...".

The settings automatically appear in the **registry.xml** file that is output to the release folder:

- Each setting maps to a **\<Setting>** element with a parent **\<Settings>** element that is child of a **\<Computer>** element identifying the computer.
- The **name** attribute of the **\<Computer>** element identifies the computer by computername.
- Any existing **\<Setting>** element (and its contents) at this point in the XML is silently overwritten.
- If no corresponding **\<Computer>** element exists in the registry XML, the setting is ignored.

### How to customise the registry format

You can customise the way in which the computer settings appear in the registry XML:

1. Choose Define, Custom XSL, create a new custom XSL transformation, and give it any name, for example 'registry-transform'.

2. In the Document field, write an XSL transformation that transforms the registry to what you want.

3. Choose Define, Registries, retrieve the registry record with Current = Yes, and set the Added XSL field to 'registry-transform'.

4. If you want a specific subset of settings to move to a specific place in the registry, associate all the settings in that set with the same tag. This causes **\<Tag>** child elements to appear in the generated XML, in this format:

```
    ...
    <Computer name="PROD_BS01">
      <Settings>
        <Setting name="${ADMIN_USER}" value="ADMIN_1">
          <Tagged_with>
            <Tag name="admin"/>
            <Tag name="Users"/>
            ..

```

5. Use these additional child elements in 'registry-transform' so that the correct settings are positioned in the correct place in the XML. You may want 'registry-transform' to strip the tag information in the process.