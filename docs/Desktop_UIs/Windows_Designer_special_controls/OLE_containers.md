---
id: OLE_containers
---

# OLE containers

USoft Developer allows you to include OLE (= Object Linking and Embedding) containers in your application. These containers can hold objects from any Windows application that supports OLE, such as the Explorer, Word, Video for Windows, and so on. These objects are stored in the database in the form of Binary Large Objects (BLOBs). By double clicking on such an object, the end-user can either edit the object with the "original" application, or in case of multimedia files (for example WAV and AVI) play the particular clip.


:::note

The options for manipulating OLE objects in your application can all be accessed by clicking the right mouse button.

:::

### Defining an OLE field

To define an OLE field in your application:

1. Start the Definer.

2. Add a domain that has the LONGRAW data type, no column width, and the Ole Container display type.

3. Define a field that is based on the newly added domain.

4. Save your changes.

Your application now has an OLE field. Depending upon whether you changed a previously existing field or added a new one, you will have to generate the application tables again. Moreover, to make the OLE field available to end users, you must, of course, (re)generate the flat files for your application.

### Embedding an object in an OLE field

To embed an object in an OLE field:

1. Start your application.

2. Open the appropriate info window.

3. Fill out any (mandatory) fields that precede the OLE field, then make sure that the OLE field has focus.

After clicking on, or tabbing to, the particular field, it has a "dotted" border to indicate that it has focus.

4. (Optional) Click the RIGHT mouse button, choose View, and then Status.

You will now be kept up-to-date with respect to "changes" to the OLE container. These status messages will be displayed within the OLE field.

5. Using drag-and-drop or cut-and-paste, insert an object from any application that supports OLE.

For example: drag and drop a Word 6 document from the File Manager into the OLE field.

6. Click the RIGHT mouse button, choose View, and then Object.

Depending upon the type of object, you will either see the product logo of the application from which the object originated, or the object's contents (e.g. the text in a Word file).

If the contents display in a distorted fashion, use the Stretch, Ratio, or Zoom options from the View menu.

If you are unsure of the origin of some object in a OLE field, use the Class option from the View menu.

### Editing an embedded object

You can modify an embedded object directly from the USoft OLE Container. When you double-click an embedded object, it opens the original application so that you can edit the object. Some of the menus and toolbars in USoft OLE Container are temporarily replaced by those in the original application.

To edit an embedded object directly:

1. Double-click the embedded object.

2. Edit the object.

3. Do one of the following:

- If you are editing the object in a separate application window, choose either Exit or Quit from the File menu to return to USoft OLE Container.
- If you are editing the object in an application that temporarily replaces the USoft OLE Container menus and toolbars, click anywhere outside the embedded object to return to USoft OLE Container.


:::note

Some embedded objects, such as video and sound clips, play when you double-click them, as opposed to opening the source application to allow you to edit the object.

:::

### Linking to another file using OLE

To create a link from an OLE container in USoft to another file:

1. Start your application.

2. Open the appropriate info window.

3. Fill out any (mandatory) fields that precede the OLE field, then make sure that the OLE field has focus.

After clicking on, or tabbing to, the particular field, it has a "dotted" border to indicate that it has focus.

4. Click the RIGHT mouse button, choose View, and then Status.

You will now be kept up-to-date with respect to "changes" to the OLE container. These status messages will be displayed within the OLE field.

5. From the OLE Object menu, choose Insert.

6. Select the Create From File tab.

7. In the File Name box, type or select the name of the file to which you want to link.

If you do not see the file that you want to embed, select a different drive or directory, or choose the Find File button to search for the file you want.

To display the linked object as an icon in the USoft OLE Container document, select the Display As Icon check box.

8. Select the Link check box, and then choose the OK button.

Using this procedure, you can create a link only to an entire file; you cannot link to a selection in a file. To link to a selection from a file, see How to Link to a Selection From a File.


:::note

The USoft OLE Container updates links each time you open the application and each time the data in the source document changes.

:::

### Linking to a selection from a file

You can create a link to share information between a USoft application and a file created in another application. To do this, you must be running both applications under Windows, and both applications must support object linking and embedding (OLE). To create a link to a selection from another file:

1. Start your application.

2. Open the appropriate info window.

3. Fill out any (mandatory) fields that precede the OLE field, then make sure that the OLE field has focus.

After clicking on, or tabbing to, the particular field, it has a "dotted" border to indicate that it has focus.

4. Click the RIGHT mouse button, choose View, and then Status.

You will now be kept up-to-date with respect to "changes" to the OLE container. These status messages will be displayed within the OLE field.

5. Make sure that you save the source file before you link the information.

6. In the application in which the information you want to link was created, open the source file and then select the information you want to link.

7. Drag the selection to the USoft OLE container.

8. Hold down the Shift key, and drop the selection at the insertion point where you want to insert the linked information.

### Editing linked information

You should edit linked information in the source application so that the changed information is reflected both in the source file and in the destination document after you update the link. To edit linked information:

1. Select the linked information you want to edit.

2. From the OLE Object menu, choose the Open command.

The USoft OLE Container opens the original (source) application.

3. In the source file, make the changes you want, and then save the file.