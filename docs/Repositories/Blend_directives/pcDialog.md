---
id: pcDialog
---

# pc:Dialog




:::note

This article is about the **pc:Dialog**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:Dialog**

Displays a dialog window on the screen. You can use this window to ask the user interactively for information that your Blend script needs.

Returns embedded XML describing the runtime state of the dialog. See the "Return value" section.

*Syntax*

```
<pc:Dialog
     variable = "*xpath >> (any)*"
  [  variable = "*xpath >> (any)*" ... ]  >

*embedded-xml*

</pc:Dialog>
```

The optional variable assignments can be used to catch user input. See the "Catching user input" section below.

The required *embedded-xml* describes the look and behaviour of the dialog you want to produce. You can code *embedded-xml* inline, or you can read it from a file, or you can have a different script section supply it.

To determine what a dialog looks like and what it does, your embedded XML should specify dialog controls. A dialog control is a screen element with a specific look and function. For aspects of visual appearance, such as position, size and colour, you can use visual attributes.

*Example*

```xml
<example xmlns:pc="Processing.Command" xmlns:assign="Processing.Command.Assign" pc:hideme="true">
  <pc:Dialog>
    <Form w="250">
      <Title>USoft Blend dialog</Title>
      <Label dx="5" dy="10" w="40" >This is a USoft Blend dialog.</Label>      
      <Button dy="20" newline="true"><Result>OK</Result>OK</Button>
      <Button><Result>Cancel</Result>Cancel</Button>
    </Form>
  </pc:Dialog>
</example>
```

## Dialog controls

Some dialog controls only have a visible presence (Title, Label), but most controls allow the user to interact with the dialog to provide information that your Blend script needs.

This table includes XML elements that are not themselves a dialog control but contribute to make a dialog control work properly (Panel, Result).

Visual attributes (see next section) apply in the same way to a range of different controls.

|**Dialog control**|**Description**|
|--------|--------|
|Button  |A push button.|
|CheckBox|A 2-valued checkbox.|
|ComboBox|A drop-down list box in a dialog window. The user can expand the list and choose one of the alternatives.|
|FileButton|A push button leading to a Browse dialog where the user can select a **file** from the file system.|
|FolderButton|A push button leading to a Browse dialog where the user can select a **folder** from the file system.|
|Form    |The dialog window as a whole.|
|Label   |A line of hard-coded text on the dialog canvas itself.|
|Panel   |A group of radio buttons. Selecting one radio button causes the other radio buttons in the group (in the panel) to be deselected.|
|Picture |A picture on the dialog canvas itself.|
|RadioButton|A button in a panel of radio buttons. Selecting one radio button causes the other radio buttons in the panel to be deselected.|
|Result  |A value associated with a button that allows you to detect that a user has pressed the button.|
|TextBox |A field in which the user can enter or read text.|
|Title   |The title text in the window bar at the top of the dialog.|



### Button

A push button. When the runtime user presses the button, the dialog is closed.

*Syntax*

```
<Button><Result>*result-value*</Result>*prompt*</Button>
```

*prompt* is the text displayed on the button.

When the dialog runs, result-value is assigned to the result attribute of the Form element in the dialog's embedded XML. For an explanation, search "Embedded XSL" on USoft Community. This makes it possible to use result-value to test whether the runtime user pressed the button (or, in a button group, WHICH button the user pressed). The Example demonstrates this.

*Example*

```xml
<example xmlns:pc="Processing.Command" xmlns:valuedialog="Dialog.Result" xmlns:assign="Processing.Command.Assign" pc:hideme="true">
  <pc:assign-string-default
   valuedialog:title="Button example"
   valuedialog:textlabel = "Please press Proceed or Cancel." />
  <pc:Dialog
    valuedialog:ok="Forms/Form/@result='OK'" >
    <Form w="700" h="200">
       <Title><pc:value-of select="$valuedialog:title"/></Title>
       <Label dx="10" dy="20"><pc:value-of select="$valuedialog:textlabel"/></Label>
       <Button dx="10" dy="20" newline="true"><Result>OK</Result>Proceed</Button>
       <Button><Result>Cancel</Result>Cancel</Button>
    </Form>
  </pc:Dialog>
  <pc:if-then test="$valuedialog:ok"><pc:value-of select="'User pressed Proceed.'"/></pc:if-then>
</example>
```

### CheckBox

A 2-valued check box in a dialog window. The user can choose to select or deselect the check box.

*Example*

When the check box is selected, the string value of the CheckBox element is true, otherwise false.

```xml
<example xmlns:pc="Processing.Command" xmlns:assign="Processing.Command.Assign">
  <pc:Dialog
      assign:doaction="xslutil:test(/Forms/Form/CheckBox) and  xslutil:test(/Forms/Form/@result)">
      <Form w="300">
         <Title>Do you want this action?</Title>
         <Label dx="5" dy="5" w="30">Do action?</Label>
         <CheckBox dx="10" dy="10" name="mychoice" value="false" label="Option"/>
         <Button dy="20" newline="true"><Result>OK</Result>Proceed</Button>
         <Button><Result>Cancel</Result>Cancel</Button>
      </Form>
   </pc:Dialog>
   <pc:text pc:if="xslutil:test($doaction)">The action will be done.</pc:text>
</example>
```

### ComboBox

A drop-down list box in a dialog window. The user can expand the list and then choose one of the options listed.

*Syntax*

```
<ComboBox
  name="*name-literal*"
  select="*xpath >> node-set*"
  firstitem="*string*"
</ComboBox>
```

The required **select** attribute is an XPath expression that identifies a node set. This node set must evaluate to a collection of strings. These strings populate the drop-down list that the user chooses from.
The optional **firstitem** attribute is a string shown as the value of the ComboBox before the user has made a choice.

*Example*

This example reports what option the user chose from the list. The value selected by the user is assigned to the ComboBox element as its string value.

```xml
<example xmlns:pc="Processing.Command" xmlns:valuedialog="Dialog.Result" xmlns:assign="Processing.Command.Assign" pc:hideme="true">
  <pc:Dialog
    valuedialog:rdbmsvalue="/Forms/Form/ComboBox[@name='rdbmsvalue']/text()" >
    <Form w="700" h="200">
      <Title>ComboBox example</Title>
      <Label dx="10" dy="20">Please choose from the dropdown list and then press OK.</Label>      
      <Label newline="yes" dx="10" dy="20">RDBMS</Label>
      <ComboBox w="150" name="rdbmsvalue"  firstitem="Choose..." select="rdbms/value"  >
        <rdbms><value>oracle</value><value>sqlserver</value></rdbms>
      </ComboBox>
      <Button dx="10" dy="20" newline="true"><Result>OK</Result>OK</Button>
      <Button><Result>Cancel</Result>Cancel</Button>
    </Form>
  </pc:Dialog>
  <pc:terminate test="$valuedialog:rdbmsvalue='Choose...'" msg="Error: RDBMS must be specified."/>
  <pc:value-of select="concat( 'RDBMS = ', $valuedialog:rdbmsvalue)"/>
</example>
```

### FileButton

A push button in a dialog window that allows the user to select a file from the file system. When the user presses the button, a Browse window appears that shows the folder hierarchy of the computer's file system.

*Example*

In this example:

- file specifies a default filepath. When the Browse window is opened, the directory of this filepath is selected, so that the user can select a file from it, or navigate to a different directory.
- resultTo specifies that the file selected in the Browse window is passed to a text box in the dialog.
- resultFrom specifies that if the text box already contains a file path, this path must be used as the default filepath when the user enters the Browse window.

```xml
<example xmlns:pc="Processing.Command" xmlns:assign="Processing.Command.Assign" pc:hideme="true">

<pc:assign-string-default
   somefile = "{path:Combine(directories:Get( ),'myfile.xml')}" />

<pc:Dialog
   assign:proceed="/Forms/Form/@result='OK'"
   assign:file = "/Forms/Form/TextBox[1]/text()">
   <Form>
      <Title>Specify a file</Title>
      <Label dx="5" dy="5" w="30">File:</Label>
      <TextBox w="400" name="filebox"><pc:value-of select="$somefile"/></TextBox>
      <FileButton
         dx="10" w="90" h="20" file="{$somefile}"
         resultTo="filebox" resultFrom="filebox">File...</FileButton>   
      <Button dy="20" newline="true"><Result>OK</Result>Proceed</Button>
      <Button><Result>Cancel</Result>Cancel</Button>
   </Form>
</pc:Dialog>

<pc:if test="xslutil:test($proceed)">
   <pc:then>Ok: <pc:value-of select="$file"/></pc:then>
   <pc:else>Cancelled</pc:else>
</pc:if>
</example>
```

### FolderButton

A push button in a dialog window that allows the user to select a folder from the file system. When the user presses the button, a Browse window appears that shows the folder hierarchy of the computer's file system.

*Example*

In this example:

- directory specifies the directory that is selected by default when the user enters the Browse window.
- resultTo specifies that the folder selected in the Browse window is passed to a text box in the dialog.
- resultFrom specifies that if the text box already contains a folder path, this path must be selected by default when the user enters the Browse window.

```xml
<example xmlns:pc="Processing.Command" xmlns:assign="Processing.Command.Assign" pc:hideme="true">

<pc:assign-string-default
   somepath = "{path:GetFullPath(path:Combine('..'))}" />

<pc:Dialog
   assign:proceed="/Forms/Form/@result='OK'"
   assign:path = "/Forms/Form/TextBox[1]/text()">
   <Form>
      <Title>Specify a path</Title>
      <Label dx="5" dy="5" w="30">Path:</Label>
      <TextBox w="400" name="pathbox"><pc:value-of select="$somepath"/></TextBox>
      <FolderButton
         dx="10" w="90" h="20" directory="{$somepath}"
         resultTo="pathbox" resultFrom="pathbox">Folder...</FolderButton>   
      <Button dy="20" newline="true"><Result>OK</Result>Proceed</Button>
      <Button><Result>Cancel</Result>Cancel</Button>
   </Form>
</pc:Dialog>

<pc:if test="xslutil:test($proceed)">
   <pc:then>Ok: <pc:value-of select="$path"/></pc:then>
   <pc:else>Cancelled</pc:else>
</pc:if>
</example>
```

### Form

The canvas that displays the content of a dialog. The visual realisation of the dialog as a whole.

*Example*

```xml
<example xmlns:pc="Processing.Command" xmlns:valuedialog="Dialog.Result" xmlns:assign="Processing.Command.Assign" pc:hideme="true">
  <pc:Dialog>
    <Form w="700" h="200">
       <Title>Form example</Title>
       <Label dx="10" dy="20">This is a dialog.</Label>      
       <Button dx="10" dy="20" newline="true"><Result>OK</Result>OK</Button>
    </Form>
  </pc:Dialog>
</example>
```

### Label

A hard-coded text label displayed in a dialog window.

*Example*

```xml
<example xmlns:pc="Processing.Command" xmlns:valuedialog="Dialog.Result" xmlns:assign="Processing.Command.Assign" pc:hideme="true">
<pc:assign-string-default
   valuedialog:title="Label example"
   valuedialog:textlabel = "Please press the OK button."
   />
   <pc:Dialog >
   <Form w="700" h="200">
      <Title><pc:value-of select="$valuedialog:title"/></Title>
      <Label dx="10" dy="20"><pc:value-of select="$valuedialog:textlabel"/></Label>
      <Button dx="10" dy="20" newline="true">OK</Button>
   </Form>
   </pc:Dialog>
</example>
```

### Panel

A group of radio buttons in a dialog window. Each time one of the radio buttons in the panel is selected, all the other radio buttons in the panel are automatically deselected.

The panel attribute of the RadioButton element specifies to which panel the radio button belongs.

*Example*

```xml
<example xmlns:pc="Processing.Command" xmlns:assign="Processing.Command.Assign">
   <pc:Dialog
      assign:doaction="xslutil:test(/Forms/Form/Panel/RadioButton[1]) and  xslutil:test(/Forms/Form/@result)">
      <Form w="300">
         <Title>Do you want this action?</Title>
         <Label dx="5" dy="5" w="30">Do action?</Label>
         <Panel newline="true" dx="30" name="ask"/>
         <RadioButton panel="ask" w="60" h="60" name="actionchoice" value="false" label="Yes, do"/>
         <RadioButton panel="ask" w="60" h="60" name="actionchoice" value="true" label="No"/>      
         <Button dy="20" newline="true"><Result>OK</Result>Proceed</Button>
         <Button><Result>Cancel</Result>Cancel</Button>
      </Form>
   </pc:Dialog>
   <pc:text pc:if="xslutil:test($doaction)">The action will be done.</pc:text>
</example>
```

### Picture

A picture displayed in a dialog window.

*Example*

In this example:

- location is a filepath pointing to the file that contains the picture.
- scale provides a way to scale the picture's dimensions: scale="2" causes it to double in height and width. The default is scale="1".

```xml
<example xmlns:pc="Processing.Command" xmlns:assign="Processing.Command.Assign" pc:hideme="true">
  <pc:Dialog >
     <Form w="400" h="200">
        <Title>Dialog</Title>
        <Picture x="20" y="20" name="mypicture" location="c:\temp\applet.ico" scale="2"/>
     </Form>
  </pc:Dialog>
</example>
```

### RadioButton

A radio button in panel of radio buttons in a dialog window. Each time one of the radio buttons in the panel is selected, all other radio buttons in the panel are automatically deselected.

When a radio button is selected, the string value of the RadioButton element is true, otherwise false.

*Example*

```xml
<example xmlns:pc="Processing.Command" xmlns:assign="Processing.Command.Assign">
   <pc:Dialog
      assign:doaction="xslutil:test(/Forms/Form/Panel/RadioButton[1]) and  xslutil:test(/Forms/Form/@result)">
      <Form w="300">
         <Title>Do you want this action?</Title>
         <Label dx="5" dy="5" w="30">Do action?</Label>
         <Panel newline="true" dx="30" name="ask"/>
         <RadioButton panel="ask" w="60" h="60" name="actionchoice" value="false" label="Yes, do"/>
         <RadioButton panel="ask" w="60" h="60" name="actionchoice" value="true" label="No"/>      
         <Button dy="20" newline="true"><Result>OK</Result>Proceed</Button>
         <Button><Result>Cancel</Result>Cancel</Button>
      </Form>
   </pc:Dialog>
   <pc:text pc:if="xslutil:test($doaction)">The action will be done.</pc:text>
</example>
```

### Result

A value associated with a push button. This value can be used to determine what happens when the button is pressed by a runtime user.

*Syntax*

```
<Button><Result> *result-value* </Result>*prompt*</Button>
```

When the dialog that contains the button is run, *result-value* is assigned to the result attribute of the Form element in the dialog's embedded XML. This makes it possible to use *result-value* to test whether the runtime user pressed the button (or, in a button group, WHICH button the user pressed). The Example demonstrates this.

You can only use a limited number of allowed values for the value of the Result element, because the Windows OS needs to know how to interpret the event:

|**Return value (case-insensitive)**|**Interpreted by Windows OS as**|
|--------|--------|
|ok      |OK      |
|cancel  |Cancel  |
|abort   |Abort   |
|ignore  |Ignore  |
|no      |No      |
|none    |None    |
|retry   |Retry   |
|yes     |Yes     |
|(other) |Cancel  |



*Example*

```xml
<example xmlns:pc="Processing.Command" xmlns:valuedialog="Dialog.Result" xmlns:assign="Processing.Command.Assign" pc:hideme="true">
  <pc:assign-string-default
   valuedialog:title="Button example"
   valuedialog:textlabel = "Please press Proceed or Cancel." />
  <pc:Dialog
    valuedialog:ok="Forms/Form/@result='OK'" >
    <Form w="700" h="200">
       <Title><pc:value-of select="$valuedialog:title"/></Title>
       <Label dx="10" dy="20"><pc:value-of select="$valuedialog:textlabel"/></Label>
       <Button dx="10" dy="20" newline="true"><Result>OK</Result>Proceed</Button>
       <Button><Result>Cancel</Result>Cancel</Button>
    </Form>
  </pc:Dialog>
  <pc:if-then test="$valuedialog:ok"><pc:value-of select="'User pressed Proceed.'"/></pc:if-then>
</example>
```

### TextBox

A field for data entry in a dialog window.

*Syntax*

```
<TextBox
  name="*name-literal*"
  select="*expr*"
  multiline="*multiline*"
  passwordchar="*passwordchar*"
</TextBox>

multiline  ::=  { yes | no }
```

If the optional **select** attribute is used, its value is displayed in the field when the runtime user enters the dialog. It is a default value: the user can choose to overwrite it. **Expr** is either a string literal or an XPath expression.

If you set multiline="yes", the field is allowed to be multi-line, that is: it is able to have variable height. Use the **h** attribute to set the height you want:

```xml
<TextBox name="editor" multiline="yes" h="150" w="250" />
```

The optional **passwordchar** attribute may be used to mask password input. It masks each character typed by the runtime user by displaying passwordchar instead of the input character. passwordchar is a single non‑whitespace character, typically an asterisk ( * ).

*Example*

This example asks the user to provide a password.

```xml
<example xmlns:pc="Processing.Command" xmlns:valuedialog="Dialog.Result" xmlns:assign="Processing.Command.Assign" pc:hideme="true">
  <pc:Dialog
    valuedialog:passwordvalue="/Forms/Form/TextBox[@name='password']/text()">
    <Form w="700" h="200">
      <Title>TextBox example</Title>
      <Label dx="10" dy="20">Please enter password.</Label>
      <Label newline="true" dx="10" dy="20" w="50">Password</Label>
      <TextBox dx="10" w="150" name="password" passwordchar="*" />
      <Button dx="10" dy="20" newline="true"><Result>OK</Result>OK</Button>
    </Form>
  </pc:Dialog>
  <pc:terminate test="$valuedialog:passwordvalue=''" msg="Error: Password must be specified."/>
</example>
```

### Title

The text displayed in the window bar of a dialog.

*Example*

```xml
<example xmlns:pc="Processing.Command" xmlns:valuedialog="Dialog.Result" xmlns:assign="Processing.Command.Assign" pc:hideme="true">
  <pc:Dialog>
    <Form w="700" h="200">
       <Title>This is a title.</Title>
       <Label dx="10" dy="20">This is a dialog.</Label>      
       <Button dx="10" dy="20" newline="true"><Result>OK</Result>OK</Button>
    </Form>
  </pc:Dialog>
</example>
```

## Visual attributes

Many dialog controls support attributes for determining visuals aspects such as position, size and colour.

### Position attributes

|        |        |
|--------|--------|
|dx      |The horizontal offset of the control relative to its **x** position.|
|dy      |The vertical offset of the control relative to its **y** position.|
|newline |<p>By default, controls are positioned from left to right next to each other.</p><p>A control with **newline="true**" is displayed on a new line relative to the previous control.</p>|
|x       |<p>The control's horizontal distance (in pixels) from the left side of the dialog window.</p><p>The default is 0 (zero).</p>|
|y       |The control's vertical distance (in pixels) from the top side of the dialog window.<br/>			The default is 0 (zero).|



### 
Size attributes

|        |        |
|--------|--------|
|h       |The height of the control (in pixels).|
|multiline|**multiline="yes"** causes a TextBox control to be multi-line, that is: to be able to have variable height. Set the actual height you want by using the **h** attribute.|
|w       |The width of the control (in pixels).|



### Colour attributes

|        |        |
|--------|--------|
|fgcolor |Foreground colour. In the case of controls that display text: font color.|
|bgcolor |Background colour.|



### Font and text attributes

|        |        |
|--------|--------|
|bold    |<p>bold="yes": the Bold font is applied.</p><p>bold="no": the non-Bold font is applied.</p>|
|fontsize|The size of the font (in pixels).|
|tip     |A text message that pops up when the user hovers the control.|



## Catching user input

You can catch user input by using a name attribute for an input control, for example, for a text box:

```xml
<TextBox name="username" />
```

You can then catch what the user typed in the text box. Assign a variable at the level of the pc:Dialog element, like so:

```xml
<pc:Dialog
   assign:userinput="/Forms/Form/TextBox[@name='username']/text()"
 ...
/>
```

To refer to the value supplied by the user, write:

```
$userinput
```

## Hiding password input

You can hide password characters being typed by a runtime user by specifying the following passwordchar attribute of a TextBox element:

```xml
<TextBox passwordchar="*" />
```

## Reacting to button events

You can use a Result child element of Button to associate the event of the user pressing the button to a value. The value associated with the user's button push is returned in the return attribute of Form. This allows you to test what the user did, and respond accordingly.

*Example*

```xml
<example xmlns:pc="Processing.Command" xmlns:assign="Processing.Command.Assign" pc:hideme="true">
  <pc:Dialog
       assign:proceed="/Forms/Form/@result='OK'">
       <Form w="250">
      <Title>USoft Blend dialog</Title>
      <Label dx="5" dy="10" w="40" >Please press OK to dismiss this dialog.</Label>      
      <Button dy="20" newline="true"><Result>OK</Result>OK</Button>
       </Form>
  </pc:Dialog>

  <pc:if test="xslutil:test($proceed)">
      <pc:then>The user pressed OK.</pc:then>
      <pc:else>Cancelled</pc:else>
   </pc:if>
</example>
```

## Return value

The return value of this Example:

```xml
<example xmlns:pc="Processing.Command" xmlns:assign="Processing.Command.Assign" pc:hideme="true">
  <pc:Dialog>
    <Form w="250">
      <Title>USoft Blend dialog</Title>
      <Label dx="5" dy="10" w="40" >This is a USoft Blend dialog.</Label>      
      <Button dy="20" newline="true"><Result>OK</Result>OK</Button>
      <Button><Result>Cancel</Result>Cancel</Button>
    </Form>
  </pc:Dialog>
</example>
```

is:

```xml
<Forms><Form name="Form0" result="OK"><Label name="Label0">This is a USoft Blend dialog.</Label></Form></Forms>
```

The return value is automatically suppressed if you assign a variable like so (as in Example 2 in the previous section):

```xml
<pc:Dialog assign:variable=""/>
```

and also if you include a pc:return attribute. Consequently, you can simply suppress output by coding:

```xml
<pc:Dialog pc:return=""/>
```

 