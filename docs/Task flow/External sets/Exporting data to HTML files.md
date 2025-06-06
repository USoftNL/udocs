# Exporting data to HTML files

You can use USoft Batch to export data in the form of HTML files to be read by a browser such as Netscape or Internet Explorer. Once this has been done, the data in the HTML files is a copy of the database: to update it you need to export again.

You define the external set in the same way as for any other export task, and you can optionally specify extra information to determine how the data in the HTML pages is to be laid out, and how the navigation between parent and child data is to be provided.

## Layout style

The layout style is the way in which the data will be displayed by the browser. You can select one of these when you define the external set. There are four possible layouts available:

1. Table (which is also the default if you do not choose anything). A table shows the data in columns, for example:

|**FIRST_NAME**|**FAMILY_NAME**|
|--------|--------|
|Rick    |O'Sullivan|
|Christine|Villery |
|Laurence|Hall    |
|Peter   |Ho      |
|James   |Siciliano|



 

2. Form. A form is a set of vertical tables, like this:

|        |        |
|--------|--------|
|FIRST_ NAME|Rick    |
|FAMILY_NAME|O'Sullivan|
|FIRST_ NAME|Christine|
|FAMILY_NAME|Villery |
|FIRST_ NAME|Laurence|
|FAMILY_NAME|Hall    |



 

3. List. A list is just a list of the data, with breaks between each record, like this:

- Rick
- O'Sullivan
- Christine
- Villery
- Laurence
- Hall

4. Justified. This is similar to a list, but has a different layout, as shown here:

- Rick O'Sullivan
- Christine Villery

> [!NOTE]
> You can use more than one layout style for different sets in the same export task.

 

## Navigation style

Navigation style is the way in which the end user can navigate through the data from the parent set to the child set and vice versa. You can choose the navigation style when you define the CHILD set. There are five possibilities, as described below.

Because you can use different layout styles for different sets in the same export task, you could, for example, use a list layout for the parent set, page jump navigation to the child data in the same file, and table layout for the child data. Once you start to work with the USoft Batch HTML export facility, you will find many ways to work with both the layout and the navigation styles.

1. Hyperlinks (which is also the default if you do not choose anything)

One document shows the parent information for each record. A link is added to a separate HTML document containing the child data. For example, the main document might look like this (assuming the default table layout has been used):

 

![](/api/Task%20flow/External%20sets/assets/d96e78e9-7624-4c41-9438-c4bba1473f94.jpg)

 

where DETAILS is the name of the child set in the export task.

Each of the entries in the DETAILS column links to a separate HTML file, so when you click one, a table such as the following could be displayed.

2. Page jumps

The parent information and the child data are in the same document. A link is added that points from the parent data to the child data.

![](/api/Task%20flow/External%20sets/assets/61d79e86-86b4-4795-9bf0-080a77aea30a.jpg)

 

In this case, all the data is present on the same page, which is useful if the data is to be printed.

 

3. Embedded blocks

The document shows the parent data with the child data immediately below it.

![](/api/Task%20flow/External%20sets/assets/3934aaec-1d9a-474a-926b-63651accd5f9.jpg)

 

All the data is contained in one page, so that it can easily be printed, if required.

 

4. Frames

When frames are used, the parent data is shown in one frame, and the child data in another.

![](/api/Task%20flow/External%20sets/assets/fd3ab574-c49e-45b3-8cea-ad39fe2f0fdc.jpg)

You must specify the frames navigation style for BOTH the parent and child sets, otherwise you will not get the correct results.

 

5. Tree view

If you want to use a tree view, the data you export must consist of parent and child data. For example, if the Travel Agency exports the TOUR and SCHEDTOUR data (with the layout style Table and the navigation style Tree View), the TOUR data will be listed in a tree view in the left frame, and as a table in the right frame.

Clicking an entry in the tree for which there is data results in the child data (from SCHEDTOUR) being displayed in a table the right frame. If there is no data for a particular entry, this is shown in the text in the tree view.

 

> [!NOTE]
> To use the Tree View, you must view the results using Internet Explorer (or another browser that supports ActiveX controls).

 

## Viewing the results

 

By default, the HTML files are placed in the folder specified as output for the Export Task.

The main file is called \<filename>.HTML, where \<filename> is the name of the output file specified for the export task.

If there are separate files for child sets, each file is named \<setname>\<number>.HTM, where \<setname> is the name of the external set, and \<number> is a sequence number from 1 upwards. For example, if the External Set for a child is called Details, then these files are called DETAILS1.HTM, DETAILS2.HTM, and so on.

If you use frames, then the top-level file is named \<setname>.HTM, and the other files are named framesrc_for\<setname>\<number>.HTM. You can use any browser to view the results.