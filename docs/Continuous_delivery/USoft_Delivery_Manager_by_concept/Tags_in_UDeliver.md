---
id: Tags_in_UDeliver
---

# Tags in UDeliver

 


:::note

This article is about the **tag** concept in USoft Delivery Manager ("UDeliver”).

:::

*Tags* are a mechanism for organising target variables into subgroups. This allows you to move subgroups of variables to different places in the registry, using a registry's added XSL.

This is the only purpose of tags. As long as you do not want to control the place of variables in the registry, there is no point in creating tags.

### Creating tags
To create a tag:

1. Choose Release, Tags.

2. In the Tag field, type the name of the tag.

3. In the child box, make a list of target variables that you want to tag with the new tag.

Alternatively, starting from the perspective of the target variables you want to tag, choose Release, Target Variables and specify the tag(s) for each variable in the Tags tab page.

### How tags affect the registry

If you tag target variables with tags:

|**Target variable**|**Tags**|
|--------|--------|
|`${SUPER_USER}`|admindb_users|
|`${PORT_NR}`|        |
|`${LOG_DIR}`|admin   |



then each \<Setting> element for a tagged target variable will get a \<Tagged_with> child element:

```
<Registry>
  <Computers>
    <Computer name="PROD_BS01">
      <Settings>
        <Setting name="${SUPER_USER}" value="ADMIN_1">
          <Tagged_with>
            <Tag name="admin"/>
            <Tag name="db_users"/>
          </Tagged_with>
        </Setting>
        <Setting name="${PORT_NR}" value="6677"/>
        <Setting name="${LOG_DIR}" value="C:\temp\logs">
          <Tagged_with>
            <Tag name="admin"/>
          </Tagged_with>
        </Setting>
      ...

```

### Making use of tags

Once you have Tag elements in the registry, you can take control of where variable settings appear in the registries that are delivered.

Do this by applying an added XSL transformation to the registry. In the XSL, you can now select all the settings tagged with the "admin" tag by writing an XPath expression such as:

```
...Setting[Tagged_with/Tag[@name='admin']]...
```

When you work in this way, you typically want to strip the original tag information from the output. Do this by including this line:

```
<xsl:template match="Tagged_with"/>
```