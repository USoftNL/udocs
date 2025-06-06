# Blend deploy scripts

Blend deploy scripts are just one application of the [USoft Blend scripting framework for repository management](/docs/Repositories/Blend%20scripts%20for%20repository%20management). They are an important reason why USoft supplies USoft Blend as a scripting framework.

## Purpose of Blend deploy scripts

The purpose of Blend deploy scripts is twofold:

- To standardise and make repeatable *configuration* operations.
- To standardise and make repeatable *deployment* operations.

*Configuration* operations adapt released deliverables to machine-specific conditions in Production, Acceptance or Testing environments. For example, you may have reasons to deploy flat files in one location on the file system of a Production machine, but in a different location on a Testing machine.

USoft Delivery Manager suggests that you describe the conditions on target machines in a *registry* XML file. If you do that, Blend deploy scripts typically access the registry XML to find out what to do on a specific machine when they are run on that machine.

A detailed explanation of configuration is [here](/docs/Continuous%20delivery/Understanding%20USoft%20Delivery%20Manager/Release%20management%20Configure%20phase.md).

*Deployment* operations apply what is needed to get released deliverables to actually work. As one example, in the case of released flat files, deployment consists of moving or copying the flat file to the place in the file system where it is expected, and then restarting Rules Services so that they pick up the new version of the file. As another example, in the case of released XML data files, deployment consists typically of importing the data from the XML file into the target repository.

A detailed explanation of deployment is [here](/docs/Continuous%20delivery/Understanding%20USoft%20Delivery%20Manager/Release%20management%20Deploy%20phase.md).

## USoft Blend as a scripting tool

USoft Blend scripting is specialised in executing repository management operations around USoft applications generally, and as such, is well-suited for scripting what you want to do with deliverables on a target machine.

There are other technologies for scripting this. Some teams prefer MS PowerShell because it is non-USoft-specific and therefore widely discussed and documented on the Internet. Delivery Manager offers the possibility to store and output PowerShell scripts or other scripts instead of Blend scripts, or in addition to Blend scripts.

## Learning USoft Blend

To work with Blend deploy scripts, you need to learn the USoft Blend scripting framework. This is easier if you know XSLT 1.0, which it is built on top of, but you can also start by playing with examples in Community articles, or with sample Blend deploy scripts that USoft supplies as part of the Delivery Manager tool.

To learn USoft Blend, start [here](/docs/Repositories/Blend%20scripts%20for%20repository%20management/Learning%20USoft%20Blend%20for%20repository%20management.md).

## Working with Blend deploy scripts

### Load suggestions for a jump start

USoft does not supply ready-to-run deploy scripts because, in practice, project conditions and team standards are too divergent: it is too difficult to predict what a team needs.

However, USoft supplies *suggestions* for deploy scripts so that you do not have to start from scratch. Instead, you can load and inspect a suggestion and tweak it to your needs.

USoft suggests that as an attachment to your released deliverables:

- You include in the release a **deploy script** for each of the sections of your release folder (flatfiles, appdata, ...).
- You include in the release a **registry** file that describes machine-specific conditions. When the deploy scripts are run, they read from this registry the variable elements that are machine-specific when they are run on a specific target machine.

### Loading a sample registry

In Delivery Manager, choose Tools, Load Registry Samples from the menu. This loads one or more registry samples. You can now access and tweak the samples via Release, Registries in the menu.

A detailed explanation of registries is [here](/docs/Continuous%20delivery/USoft%20Delivery%20Manager%20by%20concept/Registries%20in%20UDeliver.md).

### Loading samples of Blend deploy scripts

In Delivery Manager, choose Tools, Load Deploy Samples from the menu. This loads a collection of sample deploy scripts (one or more for each section of deliverables) into the Attachments table. You can access and tweak these examples via Release, Attachments in the menu.

A detailed explanation of attachments is [here](/docs/Continuous%20delivery/USoft%20Delivery%20Manager%20by%20concept/Attachments%20in%20UDeliver.md).

### Delivering Blend deploy scripts

The idea of Blend deploy scripts is that they are placed in the same folders as your deliverables, so that they are delivered along with the deliverables when the folders are copied to Production machines or other target environments.

### Running Blend deploy scripts

You can run Blend deploy scripts from the command line on the target machine: depending on whether you have a \\BIN or a \\BIN64 subdirectory:

```
> *usoft-install-dir*\bin\ublendit.exe *blend-script.xml*
> *usoft-install-dir*\bin64\ublendit.exe *blend-script.xml*
```

If you release a distinct deploy script for each section, as USoft suggests you do by default, then one requirement you may or may not have is to string together multiple deploy scripts so that they automatically run one after the other. You can achieve this with the **pc:call** directive. Look up directives in the [Blend reference section on developer.usoft.com](https://developer.usoft.com/documentation/100doc/bl_usoft-blend-scripting-framewor.htm).