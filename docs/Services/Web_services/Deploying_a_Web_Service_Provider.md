---
id: Deploying_a_Web_Service_Provider
---

# Deploying a Web Service Provider

----

![](./assets/ce23356b-05b0-4dc7-839e-3bc29b317664.png)



> [!CAUTION]
> In USoft 11.x, the functionality described here is **deprecated**.
Web service providers will be removed from USoft Definer and USoft Authorizer in USoft 12.x. Please use USoft Service Definer instead.

----

![](./assets/8da989b4-0598-470f-ab26-cc0a3ca4ea6a.png)



This topic describes how to deploy a web service in USoft Authorizer, after you have defined this web service provider in USoft Definer.

## Step 1. Import the Web Service Provider in the Authorizer

Before you can deploy a web service in USoft Authorizer, you need to import the web service in USoft Authorizer.

To import, run the Fill Authorizer Tables routine. Web services are imported when authorisation tables are filled.

## Step 2. Define a UDDI Business

Each time a business or service is published to an UDDI registry, an authentication token is required. Authentication tokens are opaque values that are required for all publishing operations. Some Operator Sites have an external mechanism defined for users to get an authentication token. For Operator Sites that do not have this mechanism, a user/password based authentication is made.

> [!CAUTION]
> You can import UDDI businesses that are already published, and add more services to it. From the Tools menu, select UDDI Registry, Import UDDI Business. A wizard opens. This wizard is the same as the one used for defining web service components in the Definer.

**How to create a UDDI Registry**

To create a new UDDI Registry:

1. In USoft Authorizer, from the Define menu, select Web Services Provider, UDDI Registries.

You can also double click the UDDI Registries item on the Web Services Provider catalog tab page.

2. Specify a name for the UDDI registry.

3. Specify the HTTP address of its publication URL and query URL.

**How to create a new publish account**

To create a new publish account:

1. In USoft Authorizer, from the Define menu, select Web Services Provider, Publish Accounts.

You can also double click the Publish Accounts item on the Web Services Provider catalog tab page.

2. Specify a user name and a password for the authentication process with UDDI Registries when publishing a business/service or a user name and an authentication token (if the Operator Sites have an external mechanism defined for users to get an authentication token).

**How to create or remove a UDDI Business**

To create a UDDI Business (company definition):

1. In USoft Authorizer, from the Define menu, select Web Services Provider, UDDI Businesses.

You can also double click the UDDI Businesses item on the Web Services Provider catalog tab page.

2. Specify a name for your business (this is the only required field).

This is the place to define information about the actual business: name, description and a list of contact persons.

**How to publish a UDDI Business to UDDI Registries**

To publish a business to UDDI Registries, a publish account and UDDI Registries are required.

1. Click Publish To UDDI Registry to register the business in UDDI.

The Publish UDDI Business to UDDI Registry dialog appears asking for proxy server settings of that computer.

A Proxy server is located between a client application, for example a Web browser, and a real server. It intercepts all requests to the server to see if it can fulfill them. If not, it forwards the request to the server. To use a Proxy server, a client needs to specify a proxy address and a proxy port number (the proxy settings).

2. If you are using an authenticated proxy server, specify a User Name and Password for the user that is about to publish the business to UDDI. Only basic authentication is possible.

Default Proxy settings are filled in: the settings used by the Internet Explorer.

If you want to remove an UDDI Business from the UDDI registry, click the "Remove from UDDI Registry..." button.

## Step 3. Associate the Web Service Provider with an UDDI Business

In order to register a service in UDDI, the service must be associated with a business.

To associate a service with an UDDI business:

1. In USoft Authorizer, from the Define menu,select Web Services Provider, Associated Web Services.

You can also double click the Associated Web Services item in the UDDI business that you want to use from the Web Services Provider catalog tab.

2. Select a predefined web service and specify the details for the associated web service.

For a description of the fields, refer to the Definer help topic: "Detailed Web Service Settings".

## Step 4. Publish the Web Service

To Publish a Web Service:

1. Click the Press "Publish Web Service..." button from the Associated Web Services window to make a service available.

The Publish Web Service wizard opens.

2. On the Publication Options tab page:

A web service can be deployed in the following ways:

- Make the service available for the other user – in this case do not check Publish Web Service to UDDI Business registry nor Create WSDL file
- Make the service available for the other users and provide a WSDL file – in this case check only Create WSDL file
- Make the service available for the other users and publish it to UDDI Business Registries – in this case check only Publish Web Service to UDDI Business registry
- Make the service available for the other users, provide a WSDL file and publish it to UDDI Business Registries – in this case check Publish Web Service to UDDI Business registry and Create WSDL file

3. On the UDDI Business tab page:

This page is available only if the Publish Web Service to UDDI Business registry check box was selected.

On this page, you can modify the business where the service is published, the UDDI Registry where the service is located, and the user that does the publication.

4. On the Web Service Details, and Web Service Files Location tab page:

On these tab pages, you can modify the values added when associating a service to a business.

5. On the Proxy Server tab page:

This page is available only if the service is published to UDDI.

If the service is published to UDDI and the business was not previously published to UDDI, the business will be published too.

After the publication is ready, a report is generated with all successful actions and erroneous situations.

## Step 5. Setting up password encryption

When you create a web service, it is recommended to use an application user with the validation agent set to: USoft Encrypted.

This can be specified in the User field in the Associated Web Services window in USoft Authorizer.