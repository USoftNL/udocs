# Server configuration: Connections element

In a **config.xml**server configuration file, the \<Connections> element contains configuration properties for connections used to access the Rules Service. This element has \<Connection>,  \<RulesServices>,  \<RulesService>,  \<UsedIn>,and \<Service> child elements.

*Example*

```language-xml
<Connections>
   <Connection name="myconnection" application="TRAVEL" sessionName="myconnection" sessionTimeout="600">
      <RulesServices>
         <RulesService host="localhost" port="9997"/>
         <RulesService host="localhost" port="9998"/>
      </RulesServices>
   </Connection>
   <Connection name="customconnection" application="TRAVEL" sessionName="myconnection" sessionTimeout="600">
      <RulesServices>
         <RulesService host="localhost" port="9997"/>
      </RulesServices>
      <UsedIn>
         <Service name="mycustomservice"/>
      </UsedIn>
   </Connection>
</Connections>

```

## Connections element

**Child elements**

The following table describes child elements for the \<Connections> element:

|**Name**|**Required**|**Description**|
|--------|--------|--------|
|Connection|No      |Contains configuration properties for a connection used to access the Rules Service.|



**Attributes**

none

## Connection element

**Child elements**

The following table describes child elements for the \<Connection> element:

|**Name**|**Required**|**Description**|
|--------|--------|--------|
|RulesServices|No      |Contains configuration properties for all Rules Services used in a connection.|
|UsedIn  |No      |Contains a collection of services that are using this connection. If this element does not exists, the information defined at development time (in Service Definer) is used.|



**Attributes**

The following table describes attributes for the \<Connection> element:

|**Name**|**Required**|**Type**|**Description**|
|--------|--------|--------|--------|
|name    |Yes     |String  |The name of a connection.|
|application|Yes     |String  |The USoft application name as defined in Authorizer.|
|sessionName|Yes     |String  |The session name that a connection uses.|
|sessionTimeout|Yes     |Integer |The session timeout in seconds.|



## RulesServices element

**Child elements**

The following table describes child elements for the \<RulesServices> element:

|**Name**|**Required**|**Description**|
|--------|--------|--------|
|RulesService|No      |Contains configuration properties for a Rules Services used in a connection.|



**Attributes**

none

## RulesService element

**Child elements**

none

**Attributes**

The following table describes attributes for the \<RulesService> element:

|**Name**|**Required**|**Type**|**Description**|
|--------|--------|--------|--------|
|host    |Yes     |String  |The name of the system that is hosting the Rules Service|
|port    |Yes     |Integer |The port number that the Rules Service is using to listen for requests.|



## UsedIn element

**Child elements**

The following table describes child elements for the \<UsedIn> element:

|**Name**|**Required**|**Description**|
|--------|--------|--------|
|Service |No      |One of the services that are using this connection.|



**Attributes**

none

## Service element

**Child elements**

none

**Attributes**

The following table describes attributes for the \<Service> element:

|**Name**|**Required**|**Description**|
|--------|--------|--------|
|name    |Yes     |The name of a Service, as defined in the Service element.|