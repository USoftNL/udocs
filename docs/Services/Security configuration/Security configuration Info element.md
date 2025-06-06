# Security configuration: Info element

In a **SecurityConfig.xml**security configuration file, the \<Info> element contains basic information about an organisation and the person responsible for the SAML entity.

*Example*

```language-xml
<Info lang="en" contactEmail="atechnicalperson@usoft.com" contactName="Technical Person" contactType="technical" organisationURL="www.usoft.com" displayName="Usoft" organisationName="USoft"/>

```

## Child elements

none

## Attributes

The following table describes attributes for the \<Info> element:

|**Name**|**Required**|**Type**|**Description**|
|--------|--------|--------|--------|
|lang    |No      |String  |Specifies language used.|
|contactEmail|No      |String  |Specifies e-mail address for contact person.|
|contactName|No      |String  |Specifies the name of the contact person.|
|contactType|No      |String  |Specifies the type of contact for a person.|
|organisationURL|No      |String  |Specifies an location to which to direct an user for aditional informations.|
|displayName|No      |String  |Specifies an human readable organization name.|
|organisationName|No      |String  |Specifies an technical organization name.|