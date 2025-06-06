---
id: Published_CSS_files
---

# Published CSS files

You can use cascading style sheets (CSS) to define a set of styles that override the browser standard HTML styles. For example, you could use a cascading style sheet to set a specific font style, size, and color attribute for all H1 elements in HTML files. Cascading style sheets also let you adjust layout and formatting for HTML elements or for entire documents, for example line spacing, justification, and border properties.

CSS technology can be used to add formatting (colors, fonts, backgrounds, positioning, etc) to XML or HTML.

Most often, cascading style definitions are stored in a document that is separate from the HTML pages to which it applies. A single cascading style sheet can then be linked to many different HTML pages. This lets you give all web pages a consistent design.

## The CustStyle style sheet

You can use the CustStyle style sheet to include the selectors for customizing the style of the generated web pages with forms.

Here are the contents of the initial CustStyle style sheet:

```language-css
body{
}
table{
}
td{
}

.ui-button-icon-primary.ui-icon.folder{
    height: 16px;
    width: 16px;
    background-image: url(../images/folder.png) !important;
}
```