# Using self-signed certificates with USoft

You are now finished with OpenSSL, as you have generated the keys and certificates required to work with the Rules Service and Remote Rules Service.

Copy all the following required files from the “bin” subdirectory of the location where you installed OpenSSL  (e.g. openssl\\bin ) to the USoft certificate folder (\<usoft_install_dir>\\CERTS\\). The files you must copy are:

- usoft.com.crt
- usoft.com.key
- usoftca.cer
- usoftca

> [!NOTE]
> For this version, you must use the filenames specified in these examples.

> [!NOTE]
> A set of working certificate files is installed in your \<usoft_install_folder>\\CERTS\\ folder when you install USoft software. You can use these files for testing purposes, if you do not want to make or use your your own.

## Importing usoftca.cer into USoft’s certificate store

 

To make sure that the Remote Rules Service JDBC driver can make use of SSL, We need to import the master certificate **usoftca.cer** into USoft’s certificate store using USoft Authorizer. To do this:

1. From the Authorizer menu, select Tools, Import Digital Certificate.

2. Specify usoftca.cer as the name of the file where the certificate was exported. You can use the browse button to browse to  the \<install_dir>\\CERTS\\ folder.

3. Specify usoftca as the unique name for your certificate.

4. Click OK.

 

> [!NOTE]
> For this version, you must use the filenames specified in these examples.