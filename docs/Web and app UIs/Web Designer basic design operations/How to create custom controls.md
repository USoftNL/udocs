# How to create custom controls

To create a custom control that you can then insert into web pages:

1. Click Controls in the Web Designer Catalog.
2. Right-mouse-click the type of control that you want to make a custom variant of, and choose New. A new control class is added. In the example, "DIV- New” has been added in this way as a custom control class:

![](/api/Web%20and%20app%20UIs/Web%20Designer%20basic%20design%20operations/assets/832cad47-2656-4508-9fa7-fd4f9baad9f3.png)

“DIV - New” is a custom control class3. Rename the custom control if you like, and set properties for it that make it special in comparison with the parent control class.

4. You can now . Do this by inserting your custom control into an object of a Page class: open the Page class, then drag the custom control class from the Controls tab onto the place where you want to insert it in the object tree on the right.

> [!CAUTION]
> This technique gives you optimal re-use of specification work, but if you use the control class in multiple pages, and you change the custom control later, you do NOT get warnings about the consequences for all the pages you used it in.