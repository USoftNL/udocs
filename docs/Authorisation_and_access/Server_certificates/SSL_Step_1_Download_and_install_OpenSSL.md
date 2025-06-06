---
id: SSL_Step_1_Download_and_install_OpenSSL
---

# SSL Step 1: Download and install OpenSSL

To download and install OpenSSL:

1. Go to   http://www.slproweb.com/products/Win32OpenSSL.html  and download:   Win32 OpenSSL v1.0.0g Light to a folder on your machine.


:::note

These instructions assume a 32-bit Windows machine. If you are using a 64-bit machine download: Win64 OpenSSL v1.0.0g Light.

:::

2. Double-click the downloaded file (Win32OpenSSL_Light-1_0_0g.exe), and run the resulting installation program.

3. On your machine, open a DOS (command prompt) window. Change directory to the “bin” subdirectory of the location where you installed OpenSSL.  For example:

**cd \\openssl\\bin** 

 

4. Enter:

**Openssl** 

Followed by <Return> and check if you receive any error messages. If no messages display, quit OpenSSL  (type q followed by <return), or Ctrl-C). OpenSSL is now installed and ready for use.

 


:::note

In the event that you receive error messages stating that you have missing C++ libraries, you will have to install the Microsoft Visual C++ 2008 Redistributable Package from:

:::

 

Go to Step 2: Create a Private Key