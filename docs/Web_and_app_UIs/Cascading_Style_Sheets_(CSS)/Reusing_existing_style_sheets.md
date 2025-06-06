---
id: Reusing_existing_style_sheets
---

# Reusing existing style sheets

To make it easier to integrate the generated web pages into an existing web site, you can reuse your existing style sheet rules. The selector of a style sheet rule; the part before the left curly brace, specifies what elements are affected by the declaration. If these elements occur in the generated web pages, these elements will get the required look-and-feel.

Each Web Designer control has an internal ID and belongs to a Class. The default values are the internal Web Designer Class and ID, for example:

- Class: ContainerControl
- Id: SearchColumnGroup

These internal Class and ID can be changed by setting the XML Tag Name and Id properties.

For example, suppose that an existing style sheet rule specifies that all buttons that belong to the ThreeDButton class have a three-dimensional outset border. Your current web site contains many buttons with this look. Here is the style sheet rule:

.ThreeDButton {    border-style: outset;    border-width: 2pt}

In Web Designer, for each individual button you can specify that it must look like a ThreeDButton, by setting its general Class property to: ThreeDButton.

You can also specify for each Web Designer control an alternative Id property. For example, you can change the Id property of a LabelControl with default value 'Title' to 'Heading' because your existing web site already contains HTML elements with ID 'Heading' that have a specific look.

> [!CAUTION]
> The default list of domain classes for a Web Designer class is NOT shown in the Property Inspector.

## Setting the class List or ID of an object

To set the class list or Id of an object:

1. In the object tree, select the object for which you want to change the class list or Id.

2. Change the Class List property or the Id property to the required class or ID name. This is not case-sensitive.

3. Save your changes, and re-publish the changed web pages.

## Setting the default class of an object

To set the default class of an object:

1. In the object tree, select the object for which you want to change the default class.

2. Change the XML Tag Name property to the required class. This is not case-sensitive.

3. Save your changes, and re-publish the changed web pages.

## Setting a CSS Property For a Group of Objects

Suppose, you want to provide some TextColumnControl objects on a web page with specific style characteristics. For example, you want a red background for all mandatory fields.

To implement this:

1. Group all required TextColumnControl objects within a new Group1 group object. See "How to Group Objects".

2. For the new Group1 object, set the Id property to: RedColorGroup.

3. Define the style sheet rule:

```language-css
#RedColorGroup input.ColumnControl{
    background-color: red
}
```

This style sheet rule specifies that within the HTML element with ID: RedColorGroup, all input elements that belong to the ColumnControl class (all actual text boxes) get a red background color.

This style sheet rule is an example of a contextual selector.

## Attaching a single control to multiple CSS classes

The class attribute of an HTML element can contain a space-separated list of class values. This is called a class list. This way, you can attach one HTML element to more than one class, for example:

```
<td class="myFont myBorder">text</td>
```

You can define two generic style sheet rules that both affect this <td> element. One style sheet rule specifies font-characteristics:

```language-css
.myFont {
    font-family: Eurostile, Arial, Helvetica, sans-serif;
    font-size: 80%;
    font-weight: bold;
}
```

And another style sheet rule specifies border characteristics:

```language-css
.myBorder {
    border-style: inset;
    border-width: 4;
}
```

Within Web Designer, you can specify that one control belongs to more than one Class, by separating these classes in a list, and setting the Class List property to:

```
MyFont MyBorder
```