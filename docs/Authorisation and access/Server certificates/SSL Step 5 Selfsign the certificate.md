# SSL Step 5: Self-sign the certificate

We are now going to self-sign the certificate. If you need a Certification Authority-signed certificate, you will have to send the certificate signing request file (**usoft.com.csr**) to the CA. They will then sign the resulting certificate (**usoft.com.crt**) and claim your identity over the internet. Before you can use this new certificate, you must also request and install a CA root certificate. This can be obtained from the CA.

If you intend to self-sign the certificate, using the example request file created above, in the dos window opened above, type:

**openssl x509 -req -days 365 -in usoft.com.csr -CA usoftca.cer -CAkey usoftca.key -set_serial 01 -out usoft.com.crt**

> [!NOTE]
> For this version, you must use the filenames specified in these examples.

 

You should see something like the following:

![](/api/Authorisation%20and%20access/Server%20certificates/assets/0edfc2ff-8375-48f2-98fc-3e988963d8cb.png)

 

> [!NOTE]
> The pass phrase is the one created in Step 2: Create a private key.

 

You have now got a self-signed certificate, (**usoft.com.crt**) valid for 365 days.

Before you can use a TLS/SSL with USoft products, there are a number of further actions that you must take.

 