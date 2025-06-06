---
id: Annotations
---

# Annotations

USoft Service Definer uses annotations (the Java concept) primarily to map incoming and outgoing XML and JSON formats to data structures and to govern how parameters are specified in messages and URL strings.

Annotations appear as attributes of most USoft Service Definer objects. You can specify annotations for classes, services, methods, parameters, structures and fields. Check Java and Jersey Framework documentation for more explanation on annotations.

In general, each annotation is introduced by an at-sign ('@'). If an element has multiple annotations, these are separated by colons (':'), for example:

```
@Column(name="CustomerID");@XmlAttribute(name="ID")
```