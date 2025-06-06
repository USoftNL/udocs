# $.udb.upload()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **upload()** function of the [udb object](/docs/Web%20and%20app%20UIs/UDB%20udb).

## **$.udb.upload()**

Handles a request for uploading one or more submitted files to the server's file system.

Returns a Promise object.

This function allows you to script a fully customised file-upload facility, as opposed to relying on the predefined options of Web Designer's FileUploadControl control class. One advantage of custom scripting is that you are not restricted to predefined validation rules but instead, you can provide validation rules on-the-fly using runtime variables. One downside of custom scripting is that you cannot offer a drag-drop area to drop files on: the only option you have is to offer a file selection dialog.

*Syntax*

```js
.upload( *options* )

*options*  ::=  {
    target: *target*,
    extensions: *extensions-array*,
    params: *params*,
    maxSize: *max-size*,
    maxNameLength: *max-name-length*,
    multiple: *multiple*,
    targetName: *target-field-name*,
    retryLimit: *retry-limit*,
    showDialog: *show-result-dialog*
}

*extensions*            :=  [ extension-string, ... ]
*params*                :=  { name : value, ... }
*max-size*              :=  { real-number | 5 }
*max-name-length*       :=  { integer     | 175 }
*multiple*             :=  { true        | false }
*retry-limit*           :=  { integer     | 0 }
*show-result-dialog*    :=  { true        | false }
```

*Options *is a struct that can contain the following items, all of which are optional.

*Target* is a string representing the (relative) target URI or URL where the uploaded files must be sent to. This is the default endpoint for the Page Engine Resource defined in Service Definer. Set *target* to 'fileupload' if you have a no reason to use a different name. For security reasons, only use relative URIs or URLs that are in the same domain of the web application. Deviations may result in security risks or in disfunctional upload handling.

*Extensions-array* is a string array used to contain the allowed extensions for files to be uploaded. The default is the empty array [], which means that all extensions are allowed.

*Params* is a struct of name-value pairs that are needed for the upload process on the server. By default, the object is an empty set.

*Max-size* is a real number, ie., an integer or a fractional number, indicating in MBs the maximum file size allowed for uploading. The default is 5, which means that files with a maximum size of 5MB are allowed.

*Max-name-length* is an integer indicating the maximum number of characters in the name of the uploaded file(s). The default is 175 characters.

*Multiple* is a boolean that determines whether or not it is allowed to upload multiple files in 1 operation.

*Target-field-name* is a string representing the form field name that the target URL expects to contain the uploaded files. In our default implementation, this property can be ignored, because the server checks all form input fields for uploaded file information. However, in some (older) implementations, a specific form field name may be expected.

*Retry-limit* is an integer indicating the maximum number of times that an upload request may be attempted again if the first time would fail. The default is 0, which means that no repeat attempts are allowed.

*Show-result-dialog* is a boolean indicating whether a dialog is shown reporting on the result of the file-upload operation. The default is true.

*Example*

```js
$.udb.upload({
    target: 'fileupload',
    extensions: ['pdf', 'doc', 'docx', 'html'],
    maxSize: 10,
    params: {
        SUBJECT_ID: $.udb("SUBJECT").rows('current').cols('ID').val(),
        SUB_TYPE: $.udb("SUBJECT").rows('current').cols('SUBTYPE').val()
    }
});
```

 