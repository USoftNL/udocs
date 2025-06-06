---
id: Folder_paths_and_file_paths
---

# Folder paths and file paths

In many places in Delivery Manager, you must specify where folders and files are located on the file system. All folder paths and file paths must meet the following conditions:

- A path may not contain any forward slashes ('/').
- A path may not end in a backslash ('\\').

A path leads to a *file* if the last element in the path is a file name, and otherwise it leads to a *folder.* In practice, a file name is usually easy to recognise by its file extension (.XML, .TXT, .PDF and so on). It is important that you use a path leading to a folder when a folder is called for, and a path leading to a file when a file is called for, but Delivery Manager does not enforce this. The distinction cannot be made by a machine because folder names are also allowed to contain full stops, and conversely, file names do not necessarily have a file extension.

Delivery Manager has three *path types:*

|**Path type**|**Description**|**Examples**|
|--------|--------|--------|
|Absolute path|A path starting with a drive letter followed by a backslash, or with a double backslash ('\\\\').|C:\\temp\\backupC:\\temp\\backup\\readme.txtc:\\\\\\fs.usoft.com\\app$\\Releases\\2.0.1\\scripts|
|Relative path|A path starting with a single backslash ('\\').|\\custom\\initial\\data\\|
|Variable path|A path starting with a source variable that has an absolute path as its value.|${release}\\2.0.1\\scripts${release}|



### Using absolute paths

You must provide an absolute path when specifying:

- Folder attributes of Computers (Install Folder, Temp Folder, Unpack Folder).
- Folder attributes of Releases (Root Folder, Release Folder, Temp Folder).

In addition, in all places where you can use a variable path, you are also allowed to use an absolute path.

### Using relative paths

You must provide a relative path when you specify the subfolder where an attachment must be placed in. The path is relative to the section folder that you choose for the attachment.

You must also provide a relative path when specifying files and folders that you want "blocked" in the sense that you do not want them included in a release. You can "block" files and files:

- that would otherwise be copied from the previous release;
- that would otherwise be included in a publication defined in USoft Web Designer;
- that would otherwise be included in a server defined in USoft Service Definer.

In these cases, the path is relative to, respectively,

- the previous release folder,
- the current publications section folder, or
- the current "servers" section folder.

### Using variable paths

In all places where you can use a variable path you can also use an absolute path.

You must provide a variable or absolute path when specifying a task step parameter of type "Folder or file".

You must also provide a variable or absolute path in each SQL statements that is:

- A path expression in a task step parameter of type "SQL Command".
- An SQL Statement in an upgrade script.

### Capital letters in folderpaths and filepaths

Delivery Manager only runs on the Windows OS. On this OS, paths are case-insensitive. For this reason, on principle, you are allowed to spell capital letters or lowercase letters to the same effect.

However, Delivery Manager replaces capitals in the following positions by lowercase characters:

- Capitals in source variable names: '${RELEASE}' and '${Release}' are corrected to '${release}'.
- Capitals in the first subfolder of ${release} and ${previous}: '${release}\\Custom\\MyFile' is corrected to '${release}\\custom\\MyFile'.