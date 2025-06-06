---
id: How_to_configure_a_web_server_for_SSL
---

# How to configure a web server for SSL

To configure your web site for an TLS connection there are three main steps:

## Step 1. Use the web server to generate a Certificate Signing Request (CSR)

Before you can enroll for a Server ID, you must generate a Certificate Signing Request (CSR) from your web server. During the creation of the CSR, the following fields are to be entered: Organization, Organizational Unit, Country, State, Locality, and Common Name.

The Common Name field is often misinterpreted and incorrectly supplied. The Common Name is typically composed of Host + Domain Name and will look like "www.company.com" or "company.com". VeriSign Server IDs are specific to the Common Name that they have been issued to at the Host level. The Common Name must be the same as the Web address you will be accessing when connecting to a secure site. For example, a Server ID for the domain "domain.com" will receive a warning if accessing a site named "www.domain.com" or "secure.domain.com". You must create a CSR for the correct Common Name. When the Server ID will be used on an intranet (or internal network), the Common Name may be one word, and it can also be the name of the server.

 

## Step 2. Use the CSR to obtain a server certificate via a certificate issuer

 Once you have generated a CSR, you are now ready to submit it to a Certificate issuer like VeriSign. To obtain a VeriSign ID, for example, you can do this by going to:

In the resulting text box labeled "CSR", enter the contents of the CSR file you have created. One way of doing this is to open the file using notepad, and to copy and paste the contents.

Here is an example of a CSR file:

```
Webmaster: webmaster@mycompany.com
Phone: 011-9990999
Server: Microsoft Key Manager for IIS Version 4.0
Common-name: azuurmees.mycompany.coml
Organization Unit: INT
Organization: My Company
Locality: Naarden
State: Noord Holland
Country: NL
MIIBHTCByAIBADBjMQswCQYDVQQGEwJOTDEWMBQGA1UECBMNTm9vcmQgSG9sbGFu
ZDEQMA4GA1UEBxMHTmFhcmRlbjEOMAwGA1UEChMFVVNvZnQxDDAKBgNVBAsTA0lO
VDEMMAoGA1UEAxMDSU5UMFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALXUNG//oiKl
L8+rpJ/WL05MwvFAp8UgNRYr-----BEGIN NEW CERTIFICATE REQUEST-----
DL0X+Y+QVcGFbRCSedP+nfgH7xaAUIDXHT2AyNGG
nwNl3jtcOWsCAwEAAaAAMA0GCSqGSIb3DQEBBAUAA0EAVlCmyy1qr9PHuJfLaAIg
Ywl+qXdzakaPF8XyM9mw0Lje+41kxhfSx2aDq7jNOT2SoJKsOOMRSW7qtJd73xQPxA==
-----END NEW CERTIFICATE REQUEST-----

```

> [!NOTE]
> Only the bold lines must be copied and pasted into the web browser.

> [!CAUTION]
> Do not include shift characters in the enrollment fields during enrollment for a Server ID, or you may receive an error message after you submit your Certificate Signing Request (CSR). The error is due to an invalid attribute or character in the CSR that you are trying to submit. The most common cause of this error are shift characters such as: (, @, #, &, !, etc. For example, if you have an "&" in your organization name, you will need to spell out the word "and" or leave out the "&".

*Example*

This example shows how to obtain online a test server certificate from VeriSign for Microsoft Internet Information Server 4.0.

To generate a public and private key pair and CSR for a Microsoft Internet Information Server 4.0:

1.Open the Microsoft Management Console (MMC) for IIS. On Windows NT, this can be reached by selecting Start-Programs-Windows NT 4.0 Option Pack-Microsoft Internet Information Server-Internet Service Manager.

2.In the MMC, expand the Internet Information Server folder by selecting the "+" sign.

3.After expanding this folder, select the "+" sign next to the computer name.

4.The Default Web Site should be available now, right click on the icon and choose Properties.

5.In the Default Web Site Properties, choose Directory Security.

6.In the Secure Communications area of this Property Sheet, select the Key Manager button.

> [!NOTE]
> If the button reads "edit" instead of "Key Manager" you already have an encryption certificate for the WWW Service installed.

7.Once you are in the Key Manager, right click the WWW icon and select "Create New Key..."

8.The Create New Key dialog appears. You will see two configuration options in this dialog. Choose "Put the request in a file that you will send to an authority." Select an appropriate filename (or accept the default). Later, you will need to copy information in this file into a form on the VeriSign web site.

9.Fill out the next dialog. Key length available will depend on the level of encryption on your version of NT Server. Normally, domestic (US and Canadian) versions of NT will have 128-bit encryption available and export versions of NT will have 40-bit. The installation of NT Service Packs may affect this as Service Packs come in both 128 and 40 bit versions.

> [!NOTE]
> Remember the password you enter. Without it, you will not be able to perform actions that access your private key material (for example, backing up or restoring a key).

10.Continue filling out the dialog. The "Common Name" of the certificate MUST be either the Name of the NT Server (if using WINS) or the Domain Name of the Server if on the Internet. For example, "www.example.com".

> [!NOTE]
> For every website that has a distinct DNS name, there must be an encryption Key installed. However, each website for SSL MUST have a distinct IP address as well. SSL does not support the use of host headers.

11.Continue form completion with Country/Region, State/Provice, and City/Locality. Do NOT abbreviate the state name. Your request will be rejected if you do so.

12.In the Your Name E-mail Address, and Phone Number fields, supply the appropriate contact information and press Finish.

Key Manager will display a key icon under the WWW icon. The key will have an orange slash through it indicating it is not complete.

13.Choose the "Computers" menu and select Exit. Choose YES when asked to commit changes.

> [!NOTE]
> If you close Key Manager and do not commit the changes, the key will not function properly. If this occurs, delete the partial key in Key Manager and create the request again.

 

## Step 3. Configure the web server to use the obtained certificate.

If the correct e-mail address was provided when requesting the certificate there should be an e-mail received from your Certificate issuer (VeriSign uses e-mail to send the test certificates).

When you receive your new Secure Server ID, you need to extract it from the e-mail message and install it on your server. To do this:

1. From your e-mail program, save the Secure Server ID to a file, such as cert.txt.

2. From the Start menu, Open the Key Manager in the Internet Server program group.

3. Select the key pair that matches your new Secure Server ID.

4. Choose Install Key Certificate from the Key menu.

5. Select the Secure Server ID file you saved in Step 1 and click Open.

6. When prompted, enter the password that you specified when creating the key pair.

7. Choose Commit Changes from the Servers menu.

8. Choose Commit all Changes from the Computers menu.

If you do not specify an IP address when installing your Secure Server ID, the same ID will be used for all virtual servers created on the system. If you are hosting multiple sites on a single server, you can specify that the ID should only be used for a particular server IP address.

 