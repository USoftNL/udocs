# Installing your application on a server

Once you have completely developed your business application with USoft Developer, you may wish to deploy the application by installing the flat files for the application on an application server. To do this, you need to install USoft Production on the server, and provide each client with a shortcut to the USoft Developer executable. The Target property for the shortcut on each of the client PCs must specify the following command line:

```
path\usd.exe -ddfile -app application
```

Where *path* is the path to the directory on the server machine where the USoft Developer executable (USD.EXE) is located.

Note that the flat files for the application must be installed in the APP subdirectory of the USoft Production installation tree.