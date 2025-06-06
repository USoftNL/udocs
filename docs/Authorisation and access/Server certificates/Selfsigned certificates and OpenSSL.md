# Self-signed certificates and OpenSSL

In some circumstances, a self-signed certificate can be used in place of a certificate that has been verified by a Certificate Issuer. This could be the case in a connection that is required to be encrypted, but that will never be accessed by a browser. A direct connection via JDBC or ODBC could be an example of this. As the self-signed certificate will not be accessed by a browser, error messages warning that the certificate is not verified will not be displayed. The connection however will make use of (Transport Layer Security) which is based upon SSL (Secure Sockets Layer) technology and encrypt data because a signed certificate exists, even though it was not signed by an official Certificate Issuer.

A typical tool that can be used to generate self-signed certificates is OpenSSL. This is Open Source software, for which a small donation is requested upon download. OpenSSL is the tool that will be used in the following example procedure for generating self-signed certificates.

There are five steps required to create a self signed certificate. For each of these Steps, see the separate help topic:

Step 1: Download and install OpenSSL.
Step 2: Create a private key.
Step 3: Create a master certificate based on private key.
Step 4: Create public key and certificate signing request.
Step 5: Self-sign the certificate.

Before you can use a TLS/SSL with USoft products, there are a number of further actions that you must take. For more details, see:

- Using self-signed certificates with USoft
- Activation of TLS in the Remote Rules Service
- Activation of TLS in the Rules Service
- Activation of TLS in the JDBC Driver

> [!NOTE]
> A set of working certificate files is installed in your \<usoft_install_folder>\\CERTS\\ folder when you install USoft software. You can use these files for testing purposes, if you do not want to make your own.