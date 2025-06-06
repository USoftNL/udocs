# What is a web service component?

The use of web services on the World Wide Web is expanding rapidly. Web services make it possible for diverse applications to discover each other and to exchange data via the Internet. A web service is a software system identified by a URI (Uniform Resource Indicator), whose public interfaces and bindings are defined and described using XML. Its definition can be discovered by other software systems. These systems can then interact with the web service, using XML-based messages.

For example, suppose that an insurance company needs to query governmental data that is available as a web service published by the government of the Netherlands. Instead of downloading the data needed each day, and inserting the data manually in a USoft application, the insurance company can use the web service offered by the government, and just query the USoft application when they need this data.

In the Definer, you can import web service definitions by querying the UDDI Business Registry via the New Web Service Component wizard.

## Some definitions

UDDI (Universal Description Discovery and Integration) is a technical specification for building a distributed directory of businesses and web services. Data is stored in a specific XML format. The UDDI specification includes API details for searching existing data and publishing new data.

The UDDI Business Registry is a fully operational implementation of the UDDI specification. Launched in May 2001 by Microsoft and IBM, the UDDI registry now enables anyone to search existing UDDI data. It also enables any provider of web services to register itself and its web services.

WSDL (Web Services Description Language) provides a model and an XML format for describing web services. WSDL is an XML grammar for specifying a public interface for a web service.

## Creating a web service component

You can create a web service component in two ways:

- By importing definitions from an UDDI Business Registry.
- By importing definitions from a WSDL file.

To create a web service component from an UDDI Business or from a WSDL file, see also: "How to Import Web Service Definitions".

 