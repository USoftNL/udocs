# Security configuration: SecurityConfig element

In a **SecurityConfig.xml**security configuration file, the \<SecurityConfig> element contains a security configuration. This is the root element.There can only be a single \<SecurityConfig> element in a **SecurityConfig.xml** file.

*Example*

```language-xml
<SecurityConfig config="TRAVEL_SAML">
   <KeyStore pwd="n1u//r46" type="PKCS12">certificate value here
   </KeyStore>
   <SamlSP samlVersion="urn:oasis:names:tc:SAML:2.0:protocol" metadataURL="https://adfs.usoft.com/federationmetadata/2007-06/federationmetadata.xml" sessionName="pet_saml" spFriendlyName="PET91_saml" lifeTime="1800" landingPage="" nameQualifier="">
      <Attributes representation="adfs" description="" serviceName="travel_saml" nameIDFormats="EMAIL ">
         <Attribute require="false" friendlyName="E-Mail Address" name="http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress" />
      </Attributes>
      <Info lang="en" contactEmail="atechnicalperson@usoft.com" contactName="Technical Person" contactType="technical" organisationURL="www.usoft.com" displayName="Usoft" organisationName="USoft" />
      <SigningKey pwd="n1u//r46" type="PKCS12"> certificate value here
      </SigningKey>
   </SamlSP>
</SecurityConfig>
```

## Child elements

The following table describes child elements for the \<SecurityConfig> element:

|**Name**|**Required**|**Description**|
|--------|--------|--------|
|KeyStore|No      |Contains the security certificate for working with SSL.|
|SamlSP  |No      |Contains saml authentication configuration.|



## Attributes

The following table describes attributes for the \<SecurityConfig> element:

|**Name**|**Required**|**Type**|**Description**|
|--------|--------|--------|--------|
|config  |Yes     |String  |The name of the security configuration.|