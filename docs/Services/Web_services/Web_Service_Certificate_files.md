---
id: Web_Service_Certificate_files
---

# Web Service Certificate files

----

![](./assets/ce23356b-05b0-4dc7-839e-3bc29b317664.png)




:::danger

In USoft 11.x, the functionality described here is **deprecated**.

:::
Web service providers will be removed from USoft Definer and USoft Authorizer in USoft 12.x. Please use USoft Service Definer instead.

----

![](./assets/8da989b4-0598-470f-ab26-cc0a3ca4ea6a.png)



## Calling a Web Service with SSL

In order to call a web service with SSL, or to import a WSDL file that uses SSL, or to publish a UDDI registry, the certificate used by the web server that is accessed must be imported in the Authorizer.

By convention, a URL that requires an SSL connection starts with https: instead of http.

## Creating a certificate file

To create a Certificate File to be imported in Authorizer:

1. Open Internet Explorer.

2. Specify the internet address you want to access (the web service URL, the WSDL file URL, or the URL used to publish to UDDI).

3. Double click the SSL Secure icon on the status bar. The Certificate dialog appears.

When accessing the web page, you might get a Security Alert message, that the security certificate was issued by a company that you have not chosen to trust. In this case click the View Certificate button to open the Certificate dialog.

4. Click the Details page and click the Copy to File button.

5. The Certificate Export Wizard appears. On the second page choose DER encoded binary X.509 (.CER) or Base-64 encoded X.509 (.CER).

6. On the third page, specify a file to export the certificate and then finish the wizard.

## Importing a certificate file

To import a Certificate in Authorizer:

1. From the Authorizer menu, select Tools, Import Digital Certificate.

2. Specify the name of the file where the certificate was exported.

3. Specify a unique name for your certificate.

4. Click OK.

## Deleting a certificate file

To delete a Certificate in Authorizer:

1. From the Authorizer menu, select Tools, Import Digital Certificate.

2. Click the View Existing Certificates button.

3. Select the SSL certificate that you want to delete.

4. Click the Delete SSL Certificate button.