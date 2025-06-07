---
id: Security_configuration_SamlSP_element
---

# Security configuration: SamlSP element

In a **SecurityConfig.xml**security configuration file, the \<SamlSP> element contains SAML authentication configuration.

*Example*

```xml
<SamlSP samlVersion="urn:oasis:names:tc:SAML:2.0:protocol" metadataURL="https://adfs.usoft.com/federationmetadata/2007-06/federationmetadata.xml" sessionName="pet_saml" spFriendlyName="PET91_saml" lifeTime="1800" landingPage="" nameQualifier="">
   <Attributes representation="adfs" description="" serviceName="travel_saml" nameIDFormats="EMAIL ">
      <Attribute require="false" friendlyName="E-Mail Address" name="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress" />
   </Attributes>
   <Info lang="en" contactEmail="atechnicalperson@usoft.com" contactName="Technical Person" contactType="technical" organisationURL="www.usoft.com" displayName="Usoft" organisationName="USoft" />
   <SigningKey pwd="p3Gl+pQ3omt+3Crp49c1qErOw+w=" type="PKCS12"> certificate value here
   </SigningKey>
</SamlSP>
```


:::note

The **\<SigningKey>** child element can be left empty, but this is not recommended in a publicly deployed environment.

:::

## Child elements

The following table describes child elements for the \<SamlSP> element:

|**Name**|**Required**|**Description**|
|--------|--------|--------|
|Attributes|No      |Contains a collections of attributes used in SAML assertions.|
|Info    |No      |Specifies basic information about an organization and a person responsible for SAML entity.|
|EncryptionKey|No      |Contains security certificate used for encrypting SAML assertions|
|SigningKey|No      |SigningKey element contains security certificate used for signing SAML assertion.|



## Attributes

The following table describes attributes for the \<SamlSP> element:

|**Name**|**Required**|**Type**|**Description**|
|--------|--------|--------|--------|
|samlVersion|Yes     |String  |SAML version used by Service Definer.Service Definer supports only version 2.0, the coresponding URI value is urn:oasis:names:tc:SAML:2.0:protocol. Do not change this value.|
|lifeTime|Yes     |Integer |The lifetime of the SAML session in seconds. NOTE:  When using SAML authentication, the connection session expiration seconds is not used, instead this field is used as lifetime for the generated authentication cookie.|
|landingPage|Yes     |String  |An URI that is automatically visited after logging in or logging out from the Identity Provider.|
|sessionName|Yes     |String  |The name of the SAML session. This name is used as part of the authentication cookie sent to the client. This contains the value from the Entity Name field in a SAML Configuration in Service Definer.|