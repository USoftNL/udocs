---
id: Reviewing_your_development_platform
---

# Reviewing your development platform

The steps in this section help you find the best way for your team to organise your development platform.

When you read these lines, you may already have a USoft development platform in place. These steps help you adapt and expand this platform to make sure that:

- It works well with the current Delivery Manager product, dealing also with its limitations.
- It follows best practice as much as possible.

## Step 1: Review USoft installation policies


:::tip

**TIP 1:** If you use multiple development computers, use the same USoft patch on each of these machines at any one time.

:::


:::tip

**TIP 2:** If you use multiple development computers, consider installing USoft in the same local folder on each machine.

:::


:::tip

**TIP 3:** Avoid having more USoft installations on a given machine than you absolutely need at any one time. 1 installation per machine is the ideal.

:::


:::tip

**TIP 4:** Prefer official patch releases. Avoid using non-official USoft dayversions if at all possible. If not, switch to the next patch as soon as possible.

:::

A  *USoft installation* is the result of running the USoft Setup routine. This routine installs the USoft product on a computer. Physically, a USoft installation is a set of executables and other files in a local folder of your choice, for example:

```
c:\Usd90
c:\Program Files\USoft\100

```


:::warning

If you can help it, avoid spaces in filepaths. The space between "Program” and "Files” in the last example is not ideal.

:::

The USoft product is released in official patches that carry names like:

```
10.0.1H
```

An important limitation of Delivery Manager is that it is not guaranteed to handle differences between patch releases if repository changes have occurred between those patches. This has consequences if you have multiple USoft installations on a single machine, but also if you have multiple development machines. Valid reasons for having multiple development machines include:

- Multiple developers who use their own physical PC or laptop but connect to the same shared USoft repository.
- Different development environments or teams for different modules of your application.
- Having Delivery Manager run from a different machine or database account (or both) than the USoft development tools. There are arguments for and against this.

One capability of Delivery Manager is to log on to remote database locations and carry out standard USoft operations there. These include generating flat files, publishing web pages and REST servers, and exporting metadata or application data to file. These remote operations are automatically carried out against the local USoft installation that Delivery Manager uses itself. This is the USoft installation located in the folder identified by the result of the query:

```
select RulesEngine.GetProperty( 'SystemDir' )
```

### Step 2: Review shared folder policies


:::tip

**TIP 1:** Create a shared release folder or folder drive that all developing team members have read-write access to, for example:
If you have multiple developers, Delivery Manager release management works best if they all release their work to the same common location. This is comparable to a production tree in a version management tool such as .Git.

:::


:::tip

**TIP 2:** If you use Publication Configurations in Web Designer, make sure to place the Alternative Template Folder ("Alt folder") in a subfolder of the shared release folder:
In Web Designer, the Alt Folder is a source element in the same way as the Web Designer database records: the publication process draws on a combination of the two. In the same way as developers share the repository records, they should be sharing a single instance of the Alt folder.

:::


:::tip

**TIP 3:** For the following path attributes in USoft tools, use a *local* path, for example:

:::

The reason why it is good practice to use a local path for these purposes is that, in a Delivery Manager context, these paths become relatively unimportant. They enable development-time testing and debugging, of course, but otherwise they only serve as interim locations from where the deliverables are released to the release folders (TIP 1), their final destination. You create clarity for the team by having local interim folders, as opposed to shared destination folders.

### Step 3: Review application versioning policies


:::tip

Have a policy in place for naming versions of your application, including naming the versions of all modules (if any).

:::

When you use Delivery Manager, you must name each application version that you plan to release. It is customary to use names like the following for major releases:

```
1.0
1.1

```

and names like the following for minor (or *patch*) releases:

```
1.0.5
1.0.5F

```

but you could use any naming policy that suits you, including names such as

```
1.1 Beta
```

In Delivery Manager, the name of your application version is automatically also the name of your release and your release folder.

When you start using Delivery Manager, you must decide what is the first application version name that you want to release with it. You are asked to supply this version name when you initialise the release tree.