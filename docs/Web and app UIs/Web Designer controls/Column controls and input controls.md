# Column controls and input controls

A  **column control** is a container control that groups an input control and a label. The label is used to show screen text as a prompt for the user.

A column control has **Data Source Name** and **Data Source Item** properties that tie the GUI construct to a database column.

In the following example, the column control is of type "TextColumnControl", and the input control it contains is of type "TextControl":

![](/api/Web%20and%20app%20UIs/Web%20Designer%20controls/assets/6416d3c9-1463-485d-a25c-3f675b3ae972.png)

 

### Types of input control

 

The types of input control that USoft supports by default are:

|**Input Control Type**|**Example**|
|--------|--------|
|AutoCompleteInputControl|![](/api/Web%20and%20app%20UIs/Web%20Designer%20controls/assets/c6f99f82-ecc5-4827-ad57-af13420c45df.png)

|
|TextControl|![](/api/Web%20and%20app%20UIs/Web%20Designer%20controls/assets/63897b99-f18f-47d4-9e4c-92760b753b95.jpg)

|
|TextAreaControl|![](/api/Web%20and%20app%20UIs/Web%20Designer%20controls/assets/61e6a31e-773b-4ff1-b8fc-1f680016deb3.jpg)

|
|CheckboxControl|![](/api/Web%20and%20app%20UIs/Web%20Designer%20controls/assets/f745577c-cd7e-47ab-add5-f69937b5f802.jpg)

|
|RadioControl|![](/api/Web%20and%20app%20UIs/Web%20Designer%20controls/assets/53dbda85-c7f0-42d2-a478-eb818a5449b7.jpg)

|
|SelectControl|![](/api/Web%20and%20app%20UIs/Web%20Designer%20controls/assets/0fe863fa-6ed1-4405-a9d7-c12b8491ee76.jpg)

|
|PasswordControl|![](/api/Web%20and%20app%20UIs/Web%20Designer%20controls/assets/de1ebbb9-6654-4a30-9ba5-1eabe17bb96e.jpg)

|
|HTMLAreaControl|![](/api/Web%20and%20app%20UIs/Web%20Designer%20controls/assets/8dbc5e60-be0f-4d55-8dbb-6ed60be55fa2.jpg)

|



### Using default column controls

USoft automatically creates column controls for you in the default application. These column controls are based on model definitions in USoft Definer. The realisation of these default column controls in the UI depends mostly on the Display Type attribute of the underlying domain.

### Creating your own column controls

You can also create column controls yourself. To do this, drag a column control class from the Controls catalog onto the object tree. Then, connect the control with a database column by setting the **Data Source Name** and **Data Source Item** properties manually. The column controls in the Controls catalog look like this:

![](/api/Web%20and%20app%20UIs/Web%20Designer%20controls/assets/98df1f1f-f15f-4c67-9b81-1c58e20f143a.png)

Or, you can assemble column control containers yourself by manipulating input controls directly. This also allows you to create surface controls that have no connection to the database. The input control classes in the Controls catalog look like this:

![](/api/Web%20and%20app%20UIs/Web%20Designer%20controls/assets/487a70fd-ed9d-42a5-bb17-6ab1fc745c0c.png)

### Resetting an input control's Type

Finally, you can also convert the type of an existing input control to a different type. Do this by editing the Type property of the contained Data object. Here is a mapping between input control types and values for the Type property:

|**Input Control Type**|**Value of Type property**|
|--------|--------|
|AutoCompleteInputControl|autocomplete|
|TextControl|text    |
|TextAreaControl|textarea|
|CheckboxControl|checkbox|
|RadioControl|radio   |
|SelectControl|select  |
|PasswordControl|password|
|HTMLAreaControl|htmlarea|