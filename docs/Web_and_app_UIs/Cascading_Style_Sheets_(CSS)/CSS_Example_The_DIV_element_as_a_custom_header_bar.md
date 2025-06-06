---
id: CSS_Example_The_DIV_element_as_a_custom_header_bar
---

# CSS Example: The DIV element as a custom header bar

In HTML pages, the DIV element marks the beginning of a new division. DIV elements let you organise web page content in rectangular boxes.

## DIV element as a custom header bar

Follow these steps to add a custom header bar like this:

![](/api/Web_and_app_UIs/Cascading_Style_Sheets_(CSS)/assets/5fd9b570-6d42-4a88-9a69-fef53bd3312e.png)

across the top of all the pages in your web application.

### Publication configuration

These steps assume that you use the following settings (which are default in USoft 10) in the publication configuration that you publish against:

|**Property**|**Value**|
|--------|--------|
|Framework|auto    |
|StartPage|ApplicationPage|



### ApplicationPage

In Web Designer, open the ApplicationPage class. Make the following changes to the object tree:

- In ApplicationPage, insert a DIV. Set its Id and Name properties to: myHeader.
- In the DIV, insert an ImageControl. Set its Id and Name properties to: myLogo. Set its Image property to: usoft-header-logo.png.

The default ApplicationPage is set up in such a way that elements appear side-by-side. This is what causes the menu to appear to the left side of the page contents.

You need to set this up differently now, so that the page will appear UNDER the new header bar:

- In ApplicationPage, insert a new GroupControl. Move ApplicationMenu and ApplicationGroup into this new GroupControl.
- For ApplicationPage, set Orientation = Vertical. For the new GroupControl, set Orientation = Horizontal.
- Where necessary, use the Position attribute to make sure that the objects appear in the order that you want.

The object tree should now look something like this:

![](/api/Web_and_app_UIs/Cascading_Style_Sheets_(CSS)/assets/fbf035ca-9f8e-4b79-97f7-3bcf57f3ddb0.png)

### CSS

In your Alternative Template Folder, make sure you have a file called like this:

```
*alternative-template-folder*\WebSite\css\CustStyle.css
```

in this CustStyle.css file, add:

```language-css
#myHeader {
	background-color: #00274d;
	width:100%;
	height: 50px;	
	padding: 10px 20px 10px 20px;
}

#myLogo {
	height: 30px;
}	
```

 Publish and run. Tweak the result.


:::note

If you want to get rid of an unnecessary vertical scrollbar, try adding 30 (pixels) to the **Height Offset** property of the objects that need to allow for the inserted header bar, for example, the ApplicationMenu object.

:::
