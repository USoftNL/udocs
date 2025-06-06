---
id: FileExists
---

# FileExists()



> [!NOTE]
> This article is about the **FileExists** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **FileExists()**

Checks if a file exists on the file system or not. If it exists, the "global.fileExists" variable is set to 'True'. If it does not exist, it is set to 'False'. "global.fileExists" is a system-defined global variable.

After you have executed the FileExists() action, you can use the global.fileExists variable to get the result. Refer to the value as follows:

```
:"global.fileExists"
```

*Syntax*

```
FileExists( *filepath* )
```

The required *filepath* is the path specifying the location and name of the file you want to check the existence of.

*Example*

On a button object you could script:

```
FileExists(:"Text Box 1")
ActionDecision(TEST_FILE_EXISTS)
```

The decision TEST_FILE_EXISTS could then look like this:

 

(Decision SQL:)

```
:"global.fileExists" = 'True'
```

 

(Yes Action:)

```
MessageInformation('The file exists.')
```

 

(No Action:)

```
MessageInformation('The file does NOT exist.')
```

 