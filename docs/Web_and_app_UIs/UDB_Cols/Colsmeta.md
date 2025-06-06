---
id: Colsmeta
tags: [USoft11, USoft10]
---
# Cols.meta()



----

`USoft 11``{.vs_11}`


:::danger

This article describes the USoft 10 product only.
In USoft 11, the web UI API was revised and improved. For full details, go to:
[Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

:::

----

`USoft 10``{.vs_10}`


:::note

This article is about the **meta()** function of the [Cols object](/docs/Web_and_app_UIs/UDB_Cols).

:::

## **Cols.meta()**

Gets the meta data container of the first column in a set of columns. If you already have a column container, this method is a shortcut for having to make a detour via **$.udbMeta**.

Returns a **colsMeta** object.

*Syntax*

```js
*cols*.meta()
```

*Example*

Use as a shortcut:

```js
var cs = $.udb("EMP").rows('current').cols("NR");
var csMeta = cs.meta();
```

Instead of:

```js
var cs = $.udb("EMP").rows('current').cols("NR");
var csMeta = $.udbMeta(cs.ds()).cols("NR");
```

 