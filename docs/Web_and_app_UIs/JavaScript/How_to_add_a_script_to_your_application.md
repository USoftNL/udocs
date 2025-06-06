---
id: How_to_add_a_script_to_your_application
---

# How to add a script to your application

To add a user-defined script that you want to be available from any point in your application:

1. Code the script and place it in the appropriate subfolder of your Alternative Template Folder. For example, you could code additional JavaScript in a file called "MyScript.js" and place it in the appropriate "js" subfolder of the Alternative Template Folder.

2. Find the name of the start page class of your publication. This is the name of the StartPage Property of the Publication Configuration that you use for publishing your application.

3. From the Pages tab of the catalog, open this page class.

4. From the Controls tab of the catalog, drag a ScriptControl class onto the Page node (the top-level node) in the object tree.

5. Open the Property Inspector for the inserted ScriptControl object and set the Script Source property to the path that leads to the file that contains your script(s), for example:

```
js/MyScripts.js
```

6. Save work and (re-)publish.

Alternatively, you can skip Steps 2-5 and use the default

```
js/CustScript.js
```

(for JavaScript code) or the default

```
css/CustStyle.css
```

(for CSS code) files. These default files are included in the publication by default because they are referred by the HTML header of the "application.html" initial document. First make a copy of the file in the appropriate "js" or "css" subfolder of the Alternative Template Folder. Then add your user-defined code to that copy. When finished, save and (re-)publish.

If you prefer, you can also declare application-level scripts by adding an extra \<script> tag in the HTML header of the initial document:

1. Copy the "application.html" file from your Publication Directory to the "WebSite" subfolder of the Alternative Template Folder.

2. In the copy, add a \<script> tag identifying the location of the user-defined script(s).

3. (Re-)publish.

Adding a \<script> tag in the HTML is perhaps more maintainable if, for some reason, you use different start pages for different publications based on the same repository. It does, however, have a drawback. It could require work at a future time when you upgrade to a different USoft version, since any changes that USoft might make to "application.html" will not automatically come through.