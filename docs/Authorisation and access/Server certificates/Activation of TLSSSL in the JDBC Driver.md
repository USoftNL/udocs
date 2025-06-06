# Activation of TLS/SSL in the JDBC Driver

To activate TLS in the JDBC driver:

> [!NOTE]
> You must first import a signed certificate into USoft's Certificate store and copied required files to your \<usoft install dir>\\CERTS\\ folder. See Using Self-Signed Certificates with USoft for details.

The "**jrec**" subprotocol parameter in connection strings used by JDBC nmust be changed to Jrec must be changed to **jrecs** . For example:

```
 jdbc:jrec:<APPLICATION>@<COMPUTER NAME>:<PORT NUMBER>
```

would become:

```
jdbc:jrecs:<APPLICATION>@<COMPUTER NAME>:<PORT NUMBER>
```

An example of where you can make this change is in the Publication Configuration window in the Web Designer.

 