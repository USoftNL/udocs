---
id: Cascading_Style_Sheets_CSS
---

# Cascading Style Sheets (CSS)

Cascading Style Sheets (CSS) provide a simple mechanism for adding style (e.g. fonts, colors, spacing) to web documents. This section describes how to use cascading style sheets with the generated web pages.
One of the fundamental features of CSS is that style sheets cascade: more than one style sheet can influence the presentation of a document. Cascading is a fundamental feature of CSS, because any single document could very well end up with style sheets from multiple sources: the browser, the HTML author, the designer, and possibly the user.
Each web browser has a default style sheet that presents documents in a reasonable manner. HTML authors can attach a preferred style sheet, while the reader may have a personal style sheet. HTML authors need to write style sheets only if they want to suggest a specific style for their documents.
All information about Cascading Style Sheet technology that is NOT in this section or its sub-sections, can be found in the Cascading Style Sheet specification of the World Wide Web Consortium (W3C):

```
http://www.w3.org/Style/CSS/
```

## Example

Here is an example of a simple style sheet rule:

```
H1 { color: green }

```

This is a simple style sheet that contains one rule. A rule is a statement about one stylistic aspect of one or more elements. A style sheet is a set of one or more rules that applies to an HTML document. This rule sets the color of all first-level headings (H1).

A rule consists of two parts:

- The **selector** is the part before the left curly brace. This is the link between the HTML document and the style. The selector specifies what elements are affected by the declaration. In the example, the selector is H1.
- One or more **declarations**. A declaration states a rule. It sets a property of the element(s) designated by the selector(s) to a value.

Selectors can be grouped in comma-separated lists:

```
H1,H2,H3 { color: green }

```

`H1, H2, H3 {...}`

As the example shows, each declaration has two parts separated by a colon:

```
property : value

```

Between the curly braces, you can have multiple declarations separated by semicolons.
