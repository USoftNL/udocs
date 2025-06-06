# The application.html initial document

When a client connects to a USoft web application, it receives an *initial HTML document* that contains all the information needed to boot the application. This HTML document provides:

- The \<html> and \<head> tags that provide the overall structure of the browsed HTML.
- References to all the .js and .css files needed for the client to further interpret the delivered application and convert all the content to browsable HTML.
- Substitution variables that have global (= application-wide) scope, such as **${Encoding}** and **${LogLevel}.** 

### Location

The initial document is embodied by the file "application.html". This file can be found as a simple HTML text file in location:

```
<installation-directory>\PageEngine\templates\WebSite\application.html
```

where *installation-directory* is the local USoft installation directory.

Each time you publish the application, a flat copy of this source file is written to:

```
<publication-directory>\WebSite\application.html
```

where *publication-directory* is the value of the Publication Folder attribute of the publication configuration that you publish against.

- In the process, substitution variable placeholders are replaced by values. See the "Substitution variables" section below.

- To edit or replace other elements of "application.html" than these variables, see the "Editing or replacing application.html" section below.

### Format: HTML5

The HTML version of the initial "application.html" document is HTML5.

This may be altered if necessary by manually editing the content of the document. To do this, please refer to the last section in this help topic.

### Substitution variables

The "application.html" source file:

```
<installation-directory>\PageEngine\templates\WebSite\application.html
```

contains placeholders for substitution variables that have global ( = application-wide) scope, for example, **${Encoding}** and **${LogLevel}**.  

Each time the application is published, these placeholders are replaced by values and the result is copied to:

```
<publication-directory>\WebSite\application.html
```

where *publication-directory* is the value of the Publication Folder attribute of the publication configuration that you publish against.

As a developer, you supply values for almost all of these variables in USoft Web Designer by setting properties of the publication configuration that you publish against.

The substitution of these variables is the ONLY adjustment that Publish makes. To add or change other aspects of "application.html", read the next section.

### Editing or replacing "application.html"

To make other changes to "application.html" than setting values of substitution variables (previous section), follow these steps:

1. Copy the source file:

```
<installation-directory>\PageEngine\templates\WebSite\application.html
```

to:

```
<alternative-template-folder>\application.html
```

and make sure that substitution variable placeholders such as **${LogLevel}** are preserved.

The *alternative-template-folder* is your publication configuration' s Alternative Template Folder. By default, it is the **\\alt** subfolder of the parent folder of the publication directory.

2. Use a text editor to edit "application.html" in the alternative template folder, then save work.

3. Re-publish the application.

4. Check that your edits are correctly published to:

```
<publication-directory>\WebSite\application.html
```