---
id: Superdomains_Inheritance_of_domain_properties
---

# Superdomains: Inheritance of domain properties

When you define a domain, you can optionally indicate that the domain has a **superdomain**. If a domain has a superdomain, domain attributes are inherited from that superdomain following certain rules. This section describes how a subdomain inherits attributes from its superdomain.

> [!TIP]
> You can also apply in 1 go a collection of popular settings called **template domain**. Template settings are usually appropriate for a specific type of domain (such as a domain for Short Text or a domain for Yes/No flags). This is a different mechanism described [here](/docs/Modeller_and_Rules_Engine/Domains/Template_domains_Popular_domain_settings.md).

## Always inherited

The following attributes of superdomains are always inherited by their subdomains, or by columns defined on them. These attributes cannot be changed at the subdomain level:

- Data Type
- Column Width (see the Note below)
- Decimals
- Decimals Displayed
- Uppercase
- Fixed Length

A domain constraint defined for a superdomain is also executed for the subdomains.

## Inherited if defined for superdomain

The following attributes are only inherited if they have been defined at the superdomain level. If they have the empty value (NULL) at the superdomain level, you can still set them to a value at the subdomain level:

- IO Format
- Min. Value
- Max. Value

## Inherited, but may be overruled

The following attributes are inherited, but can always be overruled at the subdomain level:

- Default Value
- Help Text
- Description
- Display Length
- Display Type
- Generate Unique Values

## Not inherited

Allowed Values, Alternative Input Formats, and Comments defined for a superdomain are not inherited by subdomains.