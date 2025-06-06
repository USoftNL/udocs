# How to define a web service and its methods

----

![](/api/Services/Web%20services/assets/ce23356b-05b0-4dc7-839e-3bc29b317664.png)



> [!CAUTION]
> In USoft 11.x, the functionality described here is **deprecated**.
Web service providers will be removed from USoft Definer and USoft Authorizer in USoft 12.x. Please use USoft Service Definer instead.

----

![](/api/Services/Web%20services/assets/8da989b4-0598-470f-ab26-cc0a3ca4ea6a.png)



The use of web services on the World Wide Web is expanding rapidly. Web services make it possible for diverse applications to discover each other and to exchange data via the Internet. A web service is a software system identified by a URI (Uniform Resource Indicator), whose public interfaces and bindings are defined and described using XML. Its definition can be discovered by other software systems. These systems can then interact with the web service, using XML-based messages.

USoft provides support for calling external web services in addition to support for defining and deploying web services. For more information about calling external web services see "Web Service Components".

- In the Definer, you can define a web service. This is described in the following related topics..
- How to deploy a web service is described in the Authorizer Help.

## SQL statements in web services

In the SQL statement of a web service provider method, any SQL statement is allowed (SELECT, INVOKE, UPDATE, DELETE, INSERT).

For SELECT and INVOKE statements, the output parameters are generated automatically when you click the Check button, and choose for generating new parameters. These output parameters are generated from the column expressions that occur in the SELECT clause.

In the case of an INSERT, DELETE, or UPDATE statement, since these statements have no output columns, output parameters are not generated automatically.

If you want to provide the functionality of an INSERT/DELETE/UPDATE statement, and also report back to the client (send output parameter values to the caller of the web service provider), you can use the XML import method or a USoft Batch job with output parameters.

When using the XML import method, you can use the returning XML document and transform it to match the required web service output.

When using a USoft Batch job with output parameters, you can create a job with an output parameter set, and a SQL task or Import task that performs the INSERT/UPDATE/DELETE statement, and then fill the output parameter(s) of the job with the required web service output. In the SQL statement of the web service method, you can then call the BatchRunner component. Use those methods that support output parameters.

## How to define

The first step when providing a web service is to create its definition in the Definer.

To define a web service and its methods:

1. In the Definer catalog, click Web Services (Provider).

You can also select Web Services from the Define, Web Services Provider menu.

The Web Services (Provider) info window appears.

2. Enter a Service Name for your web service and a description (optional).

The name of the service must be unique (case insensitive), and a web service provider cannot have the same name as an RDMI component.

3. On the Methods tab page, enter a name for a method.

The method name must be unique (case insensitive) within the web service, and must be a valid name for an XML element: it must start with a letter or underscore, and can only contain letters, digits, underscores, hyphens (-), and full stops (.).

4. Choose whether you want the method call to be Synchronous or Asynchronous.

When calling a synchronous method, the client application waits for a response from the web server. When calling an asynchronous method, the client application sends the message and does not wait for a response. The main difference is in error handling. In the case of an error, a synchronous method with no output parameters returns an error message to the client application and an asynchronous method does not.

You are advised to use asynchronous calls only when necessary, because the client application does not receive error messages in the case of an error.

In case of an asynchronous method, if the SQL statement has output expressions and output parameters are created, after checking the method, the service that is generated (WSDL file) has no output parameters.

5. Choose an Operation Style for the method. This can be Document-oriented or RPC-oriented.

For more information, refer to: RPC-oriented methods versus Document-oriented methods .

6. Define a SQL Statement for the method.

This is the actual implementation of the method. Any SQL Statement is allowed (SELECT, INVOKE, UPDATE, DELETE, INSERT). Refer to: SQL Statement Details of a Web Service Provider Method .

Keep in mind that:

- Document-oriented methods must always receive XML values as input parameters and return XML values as output parameters.
- For RPC-oriented methods, the format of the parameters depends on the IO Format of the specified domain.
- If the IO Format is : XML, XML values must be received and returned. Otherwise, there are no restrictions.

For more information, refer to: Rules for Parameter Values.

An input parameter has Syntax

```
:input-parameter-name
```

For example, to retrieve a value for the person_name input parameter:

```sql
SELECT   age
FROM     person
WHERE    person_name = :person_name
```

## Checking a web service method

Web service methods must be checked after they are defined. This validates the syntax of the SQL statement, and all parameters.

The method checker has two options, Generate parameters and Check existing parameters.

**Generate parameters**

With this option, when parameters are generated, old parameters for a method are deleted and default parameters are added.

**Check existing parameters**

With this option, parameters are not deleted, and the method checker determines for each expression starting with a colon in the SQL statement whether there is an input parameter with the same name.

You have to specify as many input parameters as mentioned in the SQL statement, with the same name, and as many output parameters as there are output expressions.

## Settings

The Details tab page of the Web Services (Provider) window contains deployment information. This information is subject to change at deployment time, it is displayed here to ease the development process.

In the Web Services (Provider) window, you need to define certain additional settings to access the Rules Service:

|**Setting**|**Description**|
|--------|--------|
|Application|The USoft application on which the SQL statement is executed. If the Rules Service is not started for the application, the client application receives an error message.|
|User/Password|The credentials used by a client application to access the Rules Service. You can encrypt these credentials. For more information, refer to Help topic: Using an Encrypted Password, in the Authorizer Help.In the Authorizer, you can restrict or fine-tune table access for this user. Especially for tables used in the SQL statement of a web service method.|
|Host Name|The computer name where the Rules Service runs.|
|Port Number|The port that the Rules Service uses to communicate with client applications.|
|Access Point File|The physical location where the ASHX server page, generated by USoft, is created.|
|Access Point URL|The URL used by a client application to access the web service.|
|WSDL File|The physical location on the disk where the WDSL file, generated by USoft, is created.|
|WSDL URL|The URL used by the client application to access the WSDL file.|
|Target Namespace|The namespace used for the WSDL file. By default, this is the same as WSDL URL.|



 

> [!NOTE]
> USoft supports both both SOAP 1.1 and SOAP 1.2 protocols for web service providers. Note, however, that SOAP 1.2 is only supported for document oriented methods.

## Generated files

When a web service provider is created (after clicking the Create Web Service button in the Definer, or after using the "Publish a Web Service Provider" wizard in the Authorizer), two files are generated:

- an ASP.NET HTTP Handler file (.ashx).
- a "web.config" file.

The first file (.ashx) is the actual entry point of the web service. This is the Access Point File specified in the Web Service Provider window (in the Definer) or the Associated Web Services window (in the Authorizer). The HTTP handler can handle SOAP 1.1 as well as SOAP 1.2 requests.

The generated "web.config" file is located in a folder with the same name as the service plus the word “Config”; for example, if your web service name is “StockQuote”, the folder name is StockQuoteConfig. The structure of the generated "web.config" file is the same as for all ASP.NET configuration files. It starts with a “configuration” element as root node and then it uses the “appSettings” predefined configuration section provided by the .NET Framework.

The settings stored in the "web.config" file are key-value combinations:

|**Key** |**Value**|
|--------|--------|
|Port    |The port number on which the rules service used by the web service is running|
|Host    |The host name on which the rules service used by the web service is running|
|ApplicationName|The application on which the rules service used by the web service is running|
|User    |The default user used to log on to the rules service when a web service request is handled.|
|Password|The default password used to log on to the rules service if a web service request is handled.|
|Debug   |Determines if the web service is running in debug mode or not. Possible values are Yes and No. In debug mode, if an error occurs, the client application receives a messages that contains technical information about the error. If the web service provider is published from Definer, the value of Debug key is set to Yes. If the web service provider is published from Authorizer, the value of the Debug key is set to No.|
|method#*method-name*|<p>(There are as many keys of this type as there are methods defined in the web service provider.)The combination (in this order) of:</p><p>The first XML element name expected by the method in the SOAP body of the web service request.</p><p>- A hash symbol (#).<br/>- 'S' if the method is synchronous or 'A' if the method is asynchronous,<br/>- Another hash symbol (#).<br/>- 'rpc' if the method is RPC-oriented or 'document' if the method is document-oriented.<br/></p><p>*Example*</p>`SUM#S#rpc`|



 

> [!NOTE]
> If no User/Password keys are used, the service uses basic authentication to login to the rules service. That means that the user name and password passed by the client via an HTTP Authorization header are used to connect to the rules service.

## The WSDL document

WSDL (Web Services Description Language) provides a model and an XML format for describing Web Services. WSDL is an XML grammar for specifying a public interface for a web service.

A WSDL document contains:

- Interface information about all publicly available functions.
- Data type information about all message requests and responses.
- Binding information about the transport protocol to be used.
- Address information about the location of the specified service.

For example, a WSDL document could contain the following relevant XML elements:

1. definitions

The definitions element must be the root element of a WSDL document. It defines the name of the web service and declares multiple namespaces used in the document.

2. types

The types element provides data type definitions that are used to describe the messages exchanged.

3. message

The message element describes a one-way message. This can be a request or response message. It defines the name of the message and contains zero or more message part elements. These elements represent the parameters of the message.

4. portType

The portType element combines multiple message elements into a complete operation. Each operation refers to an input message and output message.

5. binding

The binding element describes how the service is implemented on the wire. It specifies concrete protocol and data format specifications for the operations and messages defined by a particular portType.

6. service

The service element describes the address for invoking the specified service. Since USoft web services are soap services, this URL starts with soap:address.

You can generate a Web Service Provider definition directly from a WSDL document.

This is especially useful in so called 'contract-first' situations where the WSDL is defined and agreed upon between parties before the building of the Web Service provider starts. By generating the definitions from the WSDL, implementation gets a head start.

To import a web service provider directly from a WSDL document, choose Define, Web Services Provider, Import Web service from WSDL... from the Definer menu, and follow the instructions.