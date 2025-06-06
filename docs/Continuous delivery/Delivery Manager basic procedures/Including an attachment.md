# Including an attachment

To include an attachment:

1. Choose Release, Attachments from the Delivery Manager main menu.

2. In the Attachments window, specify the location where the attachment is to be written when you release. Do this by specifying "File name", Section, and Subfolder. Make sure the value for "File name" has a suitable file extension, for example, .txt, .xml or .sql.

The attachment is written to the location:

```
current-release-folder \ section \ subfolder \ filename 
```

where *section* is the value specified for Section, *subfolder* the value specified for Subfolder, and *filename* the value specified for "File name". To view the value of *current-release-folder*, choose Release, Current Release from the menu.

If you want the attachment to be written to the Section folder itself and not to a subfolder, then specify Subfolder = '\\'.

3. For Section = 'publications' only, you can set "Path from publication folder"= Yes if you want the attachment to be placed IN the specific publication folder that you are releasing.

If you set this flag, and you publish the MYPUB publication object, the attachment is written to the location:

```
current-release-folder \ publications \ MYPUB \ subfolder \ filename
```

4. For Section = 'servers' only, you can set "Path from server folder"= Yes if you want the attachment to be placed IN the specific server folder that you are releasing.

If you set this flag, and you publish the MYSERVER server, the attachment is written to the location:

```
current-release-folder \ servers \ MYSERVER \ subfolder \ filename
```

5. Write the document content of the attachment in the Document attribute. (Use the '...' text editor button.) Save work.

6. Make sure that the current release (Release, Current Release from the menu) has "Include attachments" = Yes.

The attachment is included with deliverables each time you deliver to the section associated with your attachment. For example, if that section is "servers", the attachment is released each time you execute the "Release server" action.

You can block an attachment so that, as long as it remains blocked, it is not delivered when you release.