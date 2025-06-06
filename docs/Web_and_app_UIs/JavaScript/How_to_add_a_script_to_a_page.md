---
id: How_to_add_a_script_to_a_page
---

# How to add a script to a page

Add a script to a specific page class if you know or expect that the script will need to be called from various places on pages based on that page class (or on its descendent classes), but has no wider applicability.

To add a user-defined JavaScript script that you want to be available from within a specific page:

1. From the Pages tab of the catalog, open the page class corresponding to that page.

2. From the Controls tab of the catalog, drag a ScriptControl class onto the Page node (the top-level node) in the object tree.

3. Open the Property Inspector for the inserted ScriptControl object and set the Script Source property to the path that leads to the file that contains your script(s), for example:

```
js/MyScripts.js
```

Alternatively, you can point to the file in the Script Source property of the Page object.

If you prefer to code directly in Web Designer, you can write the script as a value of the Page's Document Script property.