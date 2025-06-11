---
id: Generic_usoft_extension_functions
tags: [USoft11, USoft10]
---
# Generic -usoft- extension functions



----

`USoft 11``{.vs_11}`


:::danger

This article describes the USoft 10 product only.
In USoft 11, the web UI API was revised and improved. For full details, go to:
[Revised web UI API in USoft 11](/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

:::

----

`USoft 10``{.vs_10}`


:::note

This article covers **generic 'usoft' extension functions** as part of the [UI Library](/Web_and_app_UIs/UI_Library).
The UI Library is a mixed bag of Javascript extensions for programming UI controls in USoft web pages. Do not confuse with the structured [UDB object model](/Web_and_app_UIs/UDB_udb/UDB_udb_object.md) for data exchange between USoft web pages and a Rules Engine.

:::

USoft has defined extension functions on prototypes of objects, arrays, dates and strings. These utility functions are globally available within each USoft web application.

These functions may be called by adding the 'usoft’ infix to the function call syntax.

*Example 1*

This example calls an extension function defined for **objects**.

```js
let obj = { a: 1, b: 2, c: 3};
obj.usoft.forEachValue( (value, key) => {
      console.log(value);
});

```

The result is:

```
1
2
3
```

*Example 2*

This example calls an extension function defined for **strings**:

```js
let name = "USoftWebDesigner";
console.log(name.usoft.toKebabCase());

```

The result is:

```
usoft-web-designer
```

## Objects

This snippet shows code responsible for 'usoft’ extension functions defined for **objects**:

```js
Object.defineProperty(Object.prototype, 'usoft', {
  enumerable: false,
  get() {
    return {
      equals: (other) => UdbObject.equals(this, other),
      filterObject: (fn) => UdbObject.filterObject(this, fn),			
      findKey: (fn) => UdbObject.findKey(this, fn),			
      findObject: (fn) => UdbObject.findObject(this, fn),			
      forEachKey: (fn) => UdbObject.forEachKey(this, fn),
      forEachValue: (fn) => UdbObject.forEachValue(this, fn),
      map: (fn) => UdbObject.map(this, fn),
      mapArray: (fn) => UdbObject.mapArray(this, fn)
	  };
	}
}
```

## Arrays

This snippet shows code responsible for 'usoft’ extension functions defined for **arrays**:

```js
Object.defineProperty(Array.prototype, 'usoft', {
  enumerable: false,
  get() {
    return {
      clear: () => UdbArray.clear(this),
      compact: () => UdbArray.compact(this),			
      contains: (value) => UdbArray.contains(this, value),
      containsObject: (value) => UdbArray.containsObject(this, value),
      equals: (other) => UdbArray.equals(this, other),
      merge: (newArr, isUnique) => UdbArray.merge(this, newArr, isUnique),
      pushUnique: (obj) => UdbArray.pushUnique(this, obj)
    };
  }
}
```

Dates

This snippet shows code responsible for 'usoft’ extension functions defined for **dates**:

```js
Object.defineProperty(Date.prototype, 'usoft', {
  enumerable: false,
  get() {
    return {
      dateFormat: (format) => UdbDate.dateFormat(this, format),
      parseDate: (format) => UdbDate.parseDate(this, format)
    };
  }
}
```

## Strings

This snippet shows code responsible for 'usoft’ extension functions defined for **strings**:

```js
Object.defineProperty(String.prototype, 'usoft', {
  enumerable: false,
  get() {
    return {
      contains: (value) => UdbString.contains(this, value),
      diff: (otherString) => UdbString.diff(this, otherString),			
      encodeHTML: () => UdbString.encodeHTML(this),
      expandNumericalExponent: () => UdbString.expandNumericalExponent(this),			
      format: (obj) => UdbString.format(this, obj),
      toInitCaps: (lower) => UdbString.toInitCaps(this, lower),			
      toKebabCase: () => UdbString.toKebabCase(this)
    };
  }
}	
```

 