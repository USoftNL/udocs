---
id: Web_service_methods_RPCoriented_vs_documentoriented
---

# Web service methods: RPC-oriented vs. document-oriented

----

![](./assets/ce23356b-05b0-4dc7-839e-3bc29b317664.png)



> [!CAUTION]
> In USoft 11.x, the functionality described here is **deprecated**.
Web service providers will be removed from USoft Definer and USoft Authorizer in USoft 12.x. Please use USoft Service Definer instead.

----

![](./assets/8da989b4-0598-470f-ab26-cc0a3ca4ea6a.png)



A web service is described by a WSDL (Web Services Description Language) document. A WSDL document describes how the web service is bound to a messaging protocol, in this case the SOAP protocol.

A WSDL SOAP binding can be either an RPC-oriented binding or a document-oriented binding.

> [!NOTE]
> USoft supports both both SOAP 1.1 and SOAP 1.2 protocols for web service providers. Note, however, that SOAP 1.2 is only supported for document oriented methods.

A SOAP binding can have an encoded use or a literal use. This gives us four possible style/use models:

- RPC/encoded
- RPC/literal
- document/encoded
- document/literal

In USoft, all methods of a web service belong to the same binding, so this distinction is made at method level. USoft implementation of web services supports two of those style/use models:

- RPC/encoded
- Document/literal

## RPC-oriented style

Web services that use the Remote Procedure Call (RPC)-oriented style are interface-driven: client applications invoke a web service method ('call a remote procedure') by sending parameter values and receiving parameter values.

If the operation style of a method is set to RPC-oriented, the body of the SOAP request includes a wrapper XML element for this method. The parameters of this method are embedded as child elements inside this wrapper element.

Likewise, the body of the SOAP response includes a wrapper XML element that mirrors the SOAP request message. Returning parameter are embedded as child elements inside this wrapper element.

## Document-oriented style

Web services that use the Document-oriented style are (XML) document-driven: client applications send parameters to the Web Service as XML document, instead of as a discrete set of parameter values.

If the operation style of a method is set to Document-oriented, the body of the SOAP request and response messages just contains one or more XML documents. The document-oriented style is flatter than the RPC-oriented style and does not require the use of wrapper elements.

The protocol places no constraint on how XML documents need to be structured. The handling and interpretation of the XML document is completely done at the application level.

## Differences between RPC and document-oriented web service methods

SOAP was originally designed to support only the RPC-oriented style (SOAP was intended to be an acronym for Simple Object Access Protocol) . With SOAP version 1.0, both RPC-oriented style and document-oriented style (unstructured messages) were supported.

With the document-oriented style, you can structure the contents of the SOAP body any way you like. With the RPC-oriented style, the contents of the SOAP body must conform to a structure that indicates the method name and contains a set of parameters.

An RPC-oriented SOAP request message has this structure:

```
<env:Body>
```

```
    <m:MyMethodName xmlns:m="someURI">
```

```
        <m:FirstParameter>...</m: FirstParameter>
```

```
        <m:SecondParameter>...</m: SecondParameter >
```

```
        ...
```

```
    </m:MyMethodName>
```

```
</env:Body>
```

The SOAP response message has a similar structure and contains the return value and any output parameters. Parameters can be as complex as you like.

Another difference is the encoding of the message. Literal encoding means that the Body contents conform to a specific XML schema. SOAP encoding uses a set of rules based on the XML schema data types to encode the data, but the message does not conform to a particular schema.

USoft uses literal encoding with document-oriented style and SOAP encoding with RPC-oriented style.

SOAP includes a built-in set of rules for encoding data types. This way, you can use specific data types in a SOAP message, such as integers, floats, doubles or arrays. SOAP data types are divided into two broad categories: simple (scalar) data types and complex (compound) data types.

Simple data types contain exactly one value, such as last name, price or product description. Complex types contain multiple values, such as a purchase order or a list of stock quotes.

For more information, refer to: Simple Type and Complex Type Parameters.

> [!NOTE]
> When defining a web service method in USoft, use the RPC-oriented style when dealing with simple types.

##  