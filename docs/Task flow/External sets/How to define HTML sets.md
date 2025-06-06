# How to define HTML sets

You can turn an existing external set into an HTML set, or you can define a new HTML set yourself.

### Turning an existing external set into an HTML set

To turn an existing external set into an HTML set:

1. In the External Sets definition window, retrieve the record for the external set.

2. Select the HTML Set subtype indicator.

3. Open the HTML Set subtype window and specify HTML Set attributes.

### Defining a new HTML set

To define a new HTML set:

1.Choose Define, Sets, HTML Sets.

The HTML Sets window is displayed.

2.In the Set Name field, type a unique name for the set.

3.Define the SQL statement that describes the external set.

4.If you want to have USoft Batch compute the set elements for you, click the Compute button. You can then change these, if required. Child sets have to be added manually.

5.Do not specify a File Format. For HTML sets, this setting is not applicable.

6.Specify HTML Set attributes to determine the output look and feel of your HTML report.

7.For each element of the external set:

- In the Sequence field, type a (sequence) number to indicate the left-to-right ordering of the elements within the set.
- In the Element Name field, type a unique name for the element.
- In the Data Type field, click the lookup button and select a data type supported by your RDBMS.
- In the Length or Format fields, specify either the length, or the format of the element.
- If the element itself is a set, click the Child Set lookup button and select an item from the list that appears.

### Defining HTML set attributes

To define HTML set attributes for your HTML set:

1. Choose a navigation style from the dropdown list.

2. Choose a layout style from the dropdown list.

3. Enter the template file name. If you leave this field empty, the DEFAULT.HTM file will be used.

4. If you are using frames, enter the name of the template frame file. If you leave this field empty, the FRAME.HTM file will be used.

5. Enter the page title.

 