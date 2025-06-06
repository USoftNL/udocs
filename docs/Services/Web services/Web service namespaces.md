# Web service namespaces

----

![](/api/Services/Web%20services/assets/ce23356b-05b0-4dc7-839e-3bc29b317664.png)



> [!CAUTION]
> In USoft 11.x, the functionality described here is **deprecated**.
Web service providers will be removed from USoft Definer and USoft Authorizer in USoft 12.x. Please use USoft Service Definer instead.

----

![](/api/Services/Web%20services/assets/8da989b4-0598-470f-ab26-cc0a3ca4ea6a.png)



An XML schema definition (XSD) is a document that describes the valid format of an XML document, in terms of the allowed XML elements and attributes, the number of occurrences of XML elements, and more. XSD makes it easier to validate documents based on namespaces.

A namespace is a collection of names that are used in XML documents as element types and attribute names. A namespace is uniquely identified by a URI reference (Uniform Resource Indicator).

Since the element and attribute names in an XML document may also occur in an XML document from another source, there must be a way to differentiate between the elements that come from the different sources. This is what namespaces secure.

Names from XML namespaces may appear as qualified names. This is a name containing a single colon, separating the name into a namespace prefix and a local part. The prefix or alias, which is mapped to the URI reference, selects a namespace. The combination of the universally managed URI namespace and the document's own namespace produces identifiers that are universally unique.

In an XML schema document, the line

**xmlns:xsd = "http://www.w3.org/2001/XMLSchema"**

specifies that all XML schema elements are to be prefixed with an xsd: element. For example:

**<xsd:MySchema...>**

Since a web service uses XML based messages to exchange data with a client application, and this application needs to know the structure of the exchanged data, the web service provider has to supply one or more XML schema definitions for this data.

## How to define a web service namespace

To define a Namespace for an XML schema:

1. From the Define, Web Services Provider menu, select Namespaces.

2. Define a Namespace Alias to be used as prefix when exchanging data with the client application.

3. Define a Namespace to identify the URI reference.

4. Optionally, for the XML schema definition that you provide, define a Location.

By default, when installing USoft, one Namespace is already defined for standard data types recommended by W3C:

- Alias = xsd
- Namespace = http://www.w3.org/2001/XMLSchema

This default Namespace supports all simple datatypes, like strings, integers, decimals and date/time datatypes. For this default Namespace, no location has to be specified.

 

 