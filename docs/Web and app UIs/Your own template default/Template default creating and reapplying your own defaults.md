# Template default: creating and re-applying your own defaults

## USoft defaults and custom defaults

Each USoft web application UI is based on a [template default](/docs/Web%20and%20app%20UIs/USoft%20template%20defaults/Template%20defaults%20as%20a%20concept.md). USoft 11 ships with 2 [USoft template defaults](/docs/Web%20and%20app%20UIs/USoft%20template%20defaults): usoft-zero and usoft-classic. Usoft-zero is the default. If you want usoft-classic, you need to [switch to it](/docs/Web%20and%20app%20UIs/USoft%20template%20defaults/Template%20default%20Switching%20to%20usoftclassic.md).

Instead of selecting a USoft template default, you can also have a template default of your own.

All template defaults make use of the USoft factory default. To create your own default, therefore, you need to know what the factory default is and where it is located, so that you can modify it.

## Factory default

In Web Designer, the *factory default* is a standard structure of page and control classes that USoft supplies as an initial library. This library is a static collection of Page classes and Control classes - static in the sense that it is absolutely identical for all USoft web applications.

A template default is a structured selection from this class library. In USoft Web Designer, the structure of classes defined as your template default is visible in the Pages catalog and the Controls catalog on the left-hand side of the tool interface. When you inspect these classes in the catalogs, you will see the only variable elements are subclasses that USoft creates automatically on the basis of **metadata**. Metadata are essentially relational data models. Unlike the factory default itself, they are application-specific. They are data you define in USoft Definer, especially table names and relationship names.

- For Page classes, there are leaf-node subclasses based on metadata under nodes with names such as InfoPage, LookupPage, RelatedPage.
- For Control classes, there are leaf-node subclasses based on metadata under nodes with names such as TableDataSource.

Through subclasses based on metadata, USoft automatically delivers instant web UIs based on data models. This is one powerful low-code capability of the USoft platform.

> [!NOTE]
> The factory default is described by the following 2 XML files:

## Your own template default

To define your own template default, you use a special extension script that allows you to give instructions or directives about how the factory default XML must be moulded to become your desired template default.

> [!WARNING]
> Defining a template default is *replacing* the factory default. Appreciate that choosing, or creating, or changing a template default is completely different from [applying paintings](/docs/Web%20and%20app%20UIs/USoft%20template%20defaults/Template%20defaults%20as%20a%20concept.md) a template default.

Syntax principles for the special directives are explained later in this article. The actual commands are listed in a number of reference articles hyperlinked at the very end of this article.

For an application, to turn the factory default into a template default:

1. On the file system, create and edit a custom XML script containing the special instructions that define your template default.
2. From USoft Binder, open Web Designer, making sure that the application you want to import the instructions for is correctly specified in the Application field of the Properties sheet of the Binder item.
3. From the Web Designer menu, choose Tools, Import Default Definition. In the dialog, locate the file with your instructions. Press OK.

> [!CAUTION]
> USoft recommends you only import a template default initially, that is, **before** doing any Web Designer work. If you import or re-import later, this could have adverse implications for existing paintings. No mechanism or tooling is offered for analysing these implications beforehand or debugging them afterwards, nor indeed to debug or upgrade the imported instructions themselves.
> To create an initial template default, work in a sandbox environment until you are happy with the result. Do not start production work in Web Designer before that time.

After import, your instructions are “picked up” by Web Designer and should reflect in the Pages and Controls catalogs that you get to see on the left-hand side. The instructions are imported as records into ESI tables (eg., T_E_TYPE). These records are specific to the application.

When you come to create a second application, you can choose if you want that second application to have the same template default as the first, or a different template default, or the factory default. The terminology “template” is used because you can re-apply the same customised default to multiple applications or Development environments.

No separate operation is needed to deliver the template default when you release your application to Production. When you publish web pages, the resulting page XML will be based on the template default as a matter of fact.

## Template default scripting

The script directives use extra attribute directives and placeholders to describe the template default that you want. Their syntax may look familiar if you know Vue.js.

### e-for directive

In template default instructions, you can use the **e-for** directive to iterate over a list of items.

*Syntax*

```
e-for="*item* in *items*"
```

where *items* is the source data list and *item* is an alias for the element iterated over. The **e-for** directive will duplicate the element and all of its containing elements for each element in *items*.

The *item* alias can be used in placeholders that have a “moustache” syntax (= are surrounded by curly braces). A placeholder allows you to declaratively bind ESI XML to the repository data.

*Example*

```language-xml
<esi:class name="{table.getName()}" access_type="ownership" e-for="table in dictionary.getTables()">
  …
</esi:class>

```

If the metadata describe 3 tables TABLE_A, TABLE_B, TABLE_C, this example template instruction translates into:

```language-xml
<esi:class name="TABLE_A" access_type="ownership">
   …
</esi:class>
<esi:class name="TABLE_B" access_type="ownership">
   …
</esi:class>
<esi:class name="TABLE_C" access_type="ownership">
   …
</esi:class>

```

The number of possible expressions within the placeholder is limited, but you can concatenate values:

```language-xml
<esi:class name="{'Info ' + table.getName()}" access_type="ownership" e-for="table in dictionary.getTables()">
	<esi:heritage name="{table.getName()}"/>
</esi:class>

```

### e-if directive

The directive *e-if* is used to conditionally render a block. The block will only be rendered if the directive's expression returns a true value. You can express a logical negation by prefixing an exclamation mark (**!**):

```language-xml
<esi:property name="deletable" value="false" e-if="!table.isDeleteAllowed()"/>
<esi:property name="insertable" value="false" e-if="!table.isInsertAllowed()"/>
<esi:property name="updatable" value="false" e-if="!table.isUpdateAllowed()"/>

```

## Template defaults: Reference Guide

[Template default: Dictionary](/docs/Web%20and%20app%20UIs/Your%20own%20template%20default/Template%20default%20Dictionary.md)

[Template default: Domain Allowed Values](/docs/Web%20and%20app%20UIs/Your%20own%20template%20default/Template%20default%20Domain%20allowed%20values.md)

[Template default: Relationships, Relationship Columns](/docs/Web%20and%20app%20UIs/Your%20own%20template%20default/Template%20default%20Relationships.md)

[Template default: Roles](/docs/Web%20and%20app%20UIs/Your%20own%20template%20default/Template%20default%20Roles.md)

[Template default: Tables, Table Columns](/docs/Web%20and%20app%20UIs/Your%20own%20template%20default/Template%20default%20Tables.md)