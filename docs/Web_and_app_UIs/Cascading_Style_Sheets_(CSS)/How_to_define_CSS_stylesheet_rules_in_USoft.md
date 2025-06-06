---
id: How_to_define_CSS_stylesheet_rules_in_USoft
---

# How to define CSS stylesheet rules in USoft

In order for a CSS stylesheet rule to have an effect on the published web page(s), the HTML documents that are the base for the web pages must be linked to the CSS stylesheet file that contain the stylesheet rule.

The following steps use of the fact that the **application.html** file contains by default the following instruction:

```language-xml
<link rel="stylesheet" href="css/CustStyle.css" type="text/css"/>

```

## Defining an individual CSS stylesheet rule

To define a CSS stylesheet rule that has an effect on published USoft web pages:

1. Publish your web application, or a page or a page set in your web application.

2. Copy the file:

```
*publication-folder*\WebSite\css\CustStyle.css

```

to:

```
*alternative-template-folder*\WebSite\css\CustStyle.css

```

*Explanation*

Whatever you place in the alternative template folder is written to the publication folder every time you run Publish. The "CustStyle.css" file is an empty shell intended for you to add custom stylesheet rules. Each time you run Publish, the following file is first copied to the publication folder. Next, if CSS custom settings in the file in the alternative template folder, the file is overwritten with your custom stylesheet rules.

```
*USoft-installation-folder*\PageEngine\templates\css\CustStyle.css

```

3. Determine the scope of your stylesheet rule. This gives you the selector of the rule.

4. Determine the declaration of the rule, using the syntax:

```
property : value 
```

5. Re-publish to get your stylesheet rule copied to the publication folder.

## Defining a body of multiple CSS stylesheet rules

Typically, you have *many* custom CSS stylesheet rules that you will want to organise. USoft recommends using a set of external stylesheet files.

1. Use multiple files in the alternative template folder. Give each file an evocative name. For example:

```
*alternative-template-folder*\WebSite\css\WebDesigner.css
*alternative-template-folder*\WebSite\css\CompanyStyle.css

```

2. Use CustStyle.css as a master document referencing the other files:

```
*alternative-template-folder*\WebSite\css\CustStyle.css

```

Do this by including, *at the top* of this document, import instructions such as the following:

 

```
@import "WebDesigner.css";
@import "CompanyStyle.css";

```

3. Re-publish.

 