---
id: CSS_selectors_in_stylesheet_rules
---

# CSS selectors in stylesheet rules

A  **selector** in a style sheet rule (the part before the left curly brace) may be:

- An HTML element.
- A Web Designer class.
- A Web Designer domain class.
- A Web Designer ID.
- An inline style attribute.

Selectors can be contextual: apply in certain contexts only.

## HTML Elements as Selector

All HTML element types are possible selectors within style sheet rules.

To set a "default" style property for a document, you can set the property on an element from which all visible elements descend. In HTML documents, the BODY element serves this function. For example, the style sheet rule below specifies a blue, italic, Helvetica font for the whole document:

```language-css
body{
    font-family: helvetica;
    font-style: italic;
    color: blue;
}
```

## Web Designer Classes as Selector

To make it possible to define specific style sheet rules for typical Web Designer objects like buttons, groups, or grids, all Web Designer objects are classed.

For each object, the XML Tag Name property specifies this class. For example, the SaveButton in the BottomButtonGroup has class: ButtonControl, and a TextColumnControl has class: ColumnControl. You can change this XML Tag Name property if required.

This classification is stored in the repository and in the generated (GUI) XML documents. These documents represent the internal page structure and presentation definitions of all pages. The important thing is that at run time, these class definitions are also generated into the client HTML documents. Here is a fragment of a generated client HTML file:

```language-xml
<table id="ResultRecordRangeGroup" class="ContainerControl" style="width:100%;">
   <tr>
      <td>
         <div id="ResultLabel" class="ResultLabelControl">Results</div>
     </td>
     ...
   </tr>
 </table>
```

In cascading style sheets, you can attach a style sheet rule to all elements of the same class by preceding the class name with a period symbol. For example, this style sheet rule specifies that all HTML elements that belong to the LabelControl class have a blue background color:

```language-css
.LabelControl{
    background-color: blue;
}
```

You can also define style sheet rules for a specific HTML element that belongs to a specific class. This style sheet rule specifies the alignment of TD elements that belong to the GridCellControl class:

```language-css
td.GridCellControl{
    vertical-align: middle;
    text-align: center;
}
```

## Web Designer Domain Classes

Web Designer classes are specified in the class attribute of HTML elements in the client HTML documents. For example:

```language-html
<input class="InputControl">
```

Examples of Web Designer classes are ColumnControl, ButtonControl, GridCellControl, and ContainerControl. You can use these class names in your style sheet rules.

Some Web Designer classes have specific characteristics that can also be added to the class list of HTML elements in client HTML documents. These characteristics concern typical domain attributes.


:::warning

The default list of domain classes for a Web Designer class is NOT shown in the Property Inspector.

:::

To add domain classes to the class list:

1. Determine on which level you want to add domain classes. This can be specified:

- For a single input control in a page, for example: Data (TextControl).
- For a single column control, for example a TextColumnControl.
- For all input controls, by opening the InputControl object from the Controls tab page of the catalog.
- For all specific input controls, like all TextControl objects.

2. For the input control or column control, set the Add domain classes to class list property to: Yes.

By defining style sheet rules for domain classes, you can enhance the usability for your users. Here are some suggestions of how you can use these domain classes:

|        |        |
|--------|--------|
|Mandatory|You can highlight mandatory fields in a page. This way, it is immediately clear to your users which fields they have to complete.|
|Key     |You can highlight primary key fields in a page. This way, it is immediately clear which column values identify a specific record.|
|Uppercase|You can choose another font for fields with UPPERCASE data.|
|MultiLine|You can add an extra border or change the background color for fields with a height of multiple lines.|
|Insensitive|You can change the background color or the font type for insensitive fields, for example for non-updatable fields, or non-queryable fields in a Search group. This domain class is set when the State property has been set to insensitive.|
|Url     |For fields that contain a URL that can be clicked to navigate to another location, you can change the font color.|



## Web Designer IDs As Selector

Within one page, all Web Designer objects have a unique ID. Examples of these IDs include:

- SaveButton, CheckButton, NewButton, and DeleteButton button controls. "SaveButton" is the unique ID, ButtonControl is the class of the SaveButton control.
- A "TitleLabel" LabelControl.
- A "SearchGroup" ContainerControl.
- A "SearchButton" ButtonControl.

Just as with classes, these IDs are generated into the client HTML documents. Here is an example:

```
<div id="TitleLabel" class="TitleLabelControl">Tours</div>
```

By using the (HTML) ID attribute as a selector, you can set style properties for each individual HTML element. You can attach a style sheet rule to a specific HTML element by preceding the ID name with the "#" symbol. For example, this style sheet rule specifies that all HTML elements with ID "Prompt" are in italics:

```language-css
#Prompt{
    font-style: italic;
}
```

## Inline style attribute as selector

Using CSS, you can specify an inline style attribute for all types of HTML elements.

In Web Designer, you can specify this CSS inline style setting for an object by setting the Style (Layout) property.

Here is a typical example of an inline style setting that can be set on an object:

```language-css
border-width: 3px
```

The resulting HTML contains a DIV element:

```
<div id="GroupControl1" class="ContainerControl" style="borderwidth:3px">    ...</div>
```

## Contextual selectors

A contextual selector consists of several simple selectors separated by spaces (all selectors described up to now are simple selectors). Only those HTML elements that match the last simple selector are addressed.

For example, this style sheet rule specifies that all list elements (LI) that occur within an unordered list (UL), no matter how many levels deep, have a small font size:

```language-css
UL LI{
 font-size: small;
}
```

The following example specifies that all INPUT elements (the actual buttons) that occur any level deep within an HTML element with ID "SearchButtonGroup", have a font size of 70% relative to the font size of the parent element.

```language-css
#SearchButtonGroup input { font-size: 70%;}
```