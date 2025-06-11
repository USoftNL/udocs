---
id: Template_domains_Popular_domain_settings
tags: [USoft11]
---
# Template domains: Popular domain settings

`USoft 11``{.vs_11}`

A *template domain* is a popular collection of domain settings provided by USoft. A template domain is usually appropriate for a typical base data type often found in USoft applications, such as "Short text” or “Boolean”.

When you create a domain, you can optionally take one of the template domains and use it as a starting point for your own domain. To keep things simple, it's usually a good idea to introduce only minimal differences, or even no differences at all, between your new domain and the template. Introduce changes only if you have a specific reason.


:::note

Template domains are not only a quick and convenient way of creating a domain of a specific type.
They also play a role if you decide to create columns by drawing them in EAR diagrams.

:::

Here are the 9 template domains of USoft 11:

|**Template domain**|**Description**|
|--------|--------|
|BINARY  |Binary large objects (images, media)|
|BOOLEAN |Yes/No flag|
|DATE    |Day on the calendar|
|DATETIME|Day and clock time on the calender|
|DECIMALS|Numeric, with decimals, eg. for amounts of money|
|GUID    |Globally unique identifier (GUID)|
|INTEGER |Numeric, whole numbers|
|LONG_TEXT|Text of unspecified length as appears in multi-line text editors|
|SHORT_TEXT|Text of limited length as appears in single-value text fields|




:::tip

You can also have **superdomain** settings and have these inherited by subdomains at lower levels. This is a different mechanism explained [here](/Modeller_and_Rules_Engine/Domains/Superdomains_Inheritance_of_domain_properties.md). This mechanism only extends to selected domain attributes.

:::

## Importing and viewing template domains

When you run Create Tables for your instance of USoft Definer, the 9 template domains are automatically imported into the tool. You can inspect their settings in the Definer Catalog (Model and Rules, Domains, Template Domains) or via the Definer main menu (Define, Template Domains).

## Creating a domain based on a template domain

To create a domain based on a template domain:

1. Type a Domain Name for your new domain in an empty line in the Domains window. You open this window from the Definer menu via Define, Domains, or from the Definer Catalog via Model and Rules, Domains (double-click).
2. In the Template Domain field, select the template domain from the dropdown list and click the Apply button.
3. Save work.

You can now introduce differences between your own domain and the template domain if you like.

## Changing a template domain

USoft recommends you create a new domain of your own if you want to introduce changes compared to the USoft template domains. It's a good idea to identify these changes in the Description field of the new domain.

However, you may have reasons to change the template domain itself. For example, your team may decide to create Boolean columns (for Yes/No flags) by drawing EAR diagrams and also to prefer 0/1 values rather than Y/N values for these flags. In this situation, change the BOOLEAN template domain.


:::tip

If you make changes to a template domain, any existing domains based on the template will remain unaffected unless you re-apply the template to the domain by pressing the Apply button.

:::

To make changes to a template domain:

1. In USoft Definer, open the template domain from the menu via Define, Template Domains or from the catalog via Model and Rules, Domains, Template Domains.
2. Make changes and save work.

## Re-applying a template domain to a domain of your own

To re-apply a template domain to an existing domain of your own:

1. Retrieve your domain in the Domains window.
2. In the Template Domain field, choose the template you want to re-apply (if it is not already selected).
3. Press the Apply button.

This re-applies settings to all aspects of the domain:

- Domain attributes
- Allowed values
- IO Formats
- Alternative IO formats

in many cases, it will cause settings that you made to revert to NULL.