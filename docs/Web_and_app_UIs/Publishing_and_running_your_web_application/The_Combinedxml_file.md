---
id: The_Combinedxml_file
---

# The Combined.xml file

> [!NOTE]
> This article applies to USoft 9.0 only. In USoft 9.1 and later, the Combined.xml file has been replaced by the [Combined JSON Object](/docs/Web_and_app_UIs/Publishing_and_running_your_web_application/The_Combined_JSON_object.md).

----

![](./assets/7d40b001-4cf4-4e08-a2eb-6c503b96f1b9.png)



Each time a client browser requests data, the USoft Page Engine makes a new Combined.xml file merging design-time data specifications and runtime data values. This file is stored in the \<Web Publication>\\logs folder and is visible only if the logging level is set to Debug.

The Combined.xml file has the following basic structure: a main Combined element with five child elements:

```language-xml
<Combined>    
     <Data/>    
     <Messages/>
     <Auth/>
     <State/>    
     <Page/>
</Combined>
```

This figure shows a more detailed structure of this Combined.xml file when the Tours page is opened in a client browser:

Two important elements in the Combined.xml file are the Data element and the Page element.

The Data element contains Rows elements. A Rows element contains all data for a specific page, and has a mode attribute, which can be:

- E (Edit) - this mode is used by the Results page.
- S (Search) - this mode is used for search conditions.

These Rows elements contain Row elements. A row element contains the record data currently being searched, browsed or edited, if any.

The Page element contains all presentation definitions relevant for the current page. For example, it specifies what the various ContainerControls, LabelControls, GridControls, and ButtonControls look like.

These presentation definitions are taken from the published (ESI) XML files in the \<Web Publication>\\xml folder (which are, in turn, taken from the Web Designer repository).

----

 