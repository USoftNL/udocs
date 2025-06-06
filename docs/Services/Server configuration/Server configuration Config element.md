# Server configuration: Config element

In a **config.xml**server configuration file, the \<Config> element defines a configuration. This is the root element.There can only be a single \<Config> element in a **config.xml** file.

*Example*

```language-xml
<Config>
   <Server 
      name="Default" 
      baseURI="http://0.0.0.0:8090/" 
      publicationLocation="C:\usoft\servers\Default\" 
      serviceDescription="REST and WSDL services"    
      advertise=
          "GenericResource,AdminResource,LoggingResource,GenericExceptionHandler,">
        <Services>
           <Service name="myservice" active="true"/>
        </Services>
   </Server>
   <Connections>
      <Connection 
          name="myconnection" 
          application="TRAVEL" 
          sessionName="myconnection" 
          sessionTimeout="600">
      <RulesServices>
          <RulesService host="localhost" port="9997"/>
      </RulesServices>
   </Connection>
</Config>
```

## Child elements

The following table describes child elements for the \<Config> element:

|**Name**|**Required**|**Description**|
|--------|--------|--------|
|Server  |Yes     |Contains configuration properties for a server and its services.|
|Connections|Yes     |Contains configuration properties for connections used to access the Rules Engine.|
|Cors    |No      |Contains configuration properties for CORS.|



## Attributes

none