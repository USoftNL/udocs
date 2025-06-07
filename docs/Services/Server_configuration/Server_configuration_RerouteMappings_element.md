---
id: Server_configuration_RerouteMappings_element
---

# Server configuration: RerouteMappings element

In a **config.xml** server configuration file, the \<RerouteMappings> element contains [reroute mappings](/docs/Services/USoft_Service_Definer_objects/Reroute_mappings.md) for REST services:

```xml
<RerouteMappings>
   <Mapping 
      class="service-name" 
      connection="connection-name" 
      hostname="" 
      targetPath="short"/>
</RerouteMappings>
```

Reroute mappings allow shorter URLs for accessing USoft web resources.

**targetPath** is the short text string that is a placeholder for the longer underlying URL.

**hostname** is often empty, as in the example, in which case this attribute may be skipped completely. Use **hostname** to disambiguate between multiple hostnames that have been made to refer to the same USoft Service Framework server, for example at IIS level.

Within a server, a reroute mapping is specific to the combination of a REST Service identified by the **class** attribute, and a Connection identified by the **connection** attribute.

For details, go to [Reroute mappings](/docs/Services/USoft_Service_Definer_objects/Reroute_mappings.md).