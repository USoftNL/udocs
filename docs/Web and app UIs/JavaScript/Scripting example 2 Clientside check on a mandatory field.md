# Scripting example 2: Client-side check on a mandatory field

You can check mandatory columns before saving. Suppose an inserted person record cannot be saved if the Family Name field has no value. In this case, a message must be shown to prompt the user to enter a Family Name:

1. From the catalog, open the appropriate page.

2. For the SaveButton in the BottomButtonGroup, delete the existing commit action. Instead, for the onclick event listener, insert a callClientScript action.

3. For the callClientScript action, set the Script property to:

```js
if ( getValue("PERSON","FAMILY_NAME") == "" )
alert('Please enter a value for Family Name.')
else
commit()
```

> [!NOTE]
> The **getValue** JavaScript method is defined in the *publication-folder*/js/interface.js file.

4. Save your changes, and publish your application.

In the corresponding web page, a message pops up if the user does not enter a value for Family Name and then clicks Save.