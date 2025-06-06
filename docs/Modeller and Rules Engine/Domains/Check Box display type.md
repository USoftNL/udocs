# Check Box display type

A **check box** is a control for showing data that represent a choice between 2 options.
One option is affirmative. This option is typically represented by a database value such as 'Y', 'yes', 'On', 'true' or '1'. It is visually presented in a check box like this:

![](/api/Modeller%20and%20Rules%20Engine/Domains/assets/4f779835-a00e-4a33-b0d6-62b5b79e5cb4.png)

The other option is negative. This option is typically represented by a database value such as 'N', 'no', 'Off', 'false' or '0'. It is visually presented in a check box like this:

![](/api/Modeller%20and%20Rules%20Engine/Domains/assets/73e0df37-4947-4053-a2f8-8a59f42d77e3.png)

## Quick help: check boxes

Define a domain with Display Type = Check Box, then for each check box, define a column based on the domain. 

The following are typical settings for a check box domain:

|        |        |
|--------|--------|
|Domain Name|CHECK_BOX_N|
|Data Type|(a character datatype of your choice)|
|Column Width|1       |
|Display Type|Check Box|
|Default Value|N       |



 

On the Allowed Values tab, enter:

|**Value**|**Position**|**Prompt**|
|--------|--------|--------|
|N       |1       |N       |
|Y       |2       |Y       |



 

These example settings are for a domain with the negative, unchecked ("No") option as the default. If your application also requires check boxes with the affirmative, checked ("Yes") option as the default, then create a second domain:

|        |        |
|--------|--------|
|Domain Name|CHECK_BOX_Y|
|Data Type|(a character datatype of your choice)|
|Column Width|1       |
|Display Type|Check Box|
|Default Value|Y       |



 

On the Allowed Values tab, enter:

 

## When to use check boxes

Use a check box when there are 2 exactly options and the user can understand from the check box prompt what both options are.

For example, a check box for "Active" is good because the user will understand that an unchecked box means "not active", "switched off". A check box for "Married" is probably not so good, because the meaning of the unchecked state is likely to be unclear: does it mean "divorced", or "single", or both, or perhaps "unknown" or "unspecified"?

In USoft applications, the most successful check boxes are often those modelled for a finished state, with prompts such as "Processed", "Hard copy created", "Unsubscribed", as opposed to check boxes for a command ("Create hard copy", "Unsubscribe").

 

## Allowed values

A domain with the Check Box display type must have exactly 2 allowed values.

You can choose any values you like. Choose 'N' and 'Y' if you have no reason to do otherwise.

USoft Definer maps the value with the **lowest** Position number to the **unchecked** or negative state:

**Because of Position = 1, the 'N' value corresponds to the unchecked state of the checkbox** 

 

USoft Definer does not allow you to give the lowest Position number to a value that is commonly interpreted as affirmative, such as 'Y', 'Yes', 'On', 'true'', '1'. This is to keep you from designing check boxes that will probably feel "the wrong way around".
The prompt of the allowed values is unimportant. With a check box, the only text element presented to the end user is the column prompt.

 

 

## Default value

Almost always, it is good design to set the default state of a check box. This is the check box's initial state if the user does not manipulate the check box as soon as she introduces (inserts) the record.

Set the default state by setting Default Value for the domain. Set Default Value either to the "yes-value" or the "no-value" specified on the Allowed Values tab.

If you don't specify Default Value, and a column based on the domain has Mandatory = Yes, the default state of the check box for that column corresponds to the allowed value with the lowest Position number. Do not rely on this mechanism. It is better to specify the Default Value explicitly in all cases.

 

## 2-value and 3-value check boxes

You get a check box with 2 possible states if you set Mandatory = Yes for a column based on a check box domain:

![](/api/Modeller%20and%20Rules%20Engine/Domains/assets/9c24456c-0255-4a2e-a3e5-23fdc124d609.png)

You get a check box with 3 possible states if you set Mandatory = No for a column based on a check box domain. The 3rd value corresponds to the NULL value in the database:

![](/api/Modeller%20and%20Rules%20Engine/Domains/assets/73a3d812-5828-44d0-aec6-654df7ce6b1c.png)

3-value check boxes are rarely the best solution. Instead, consider using a 3-value Option Buttons display type where all the values are non‑NULL:

![](/api/Modeller%20and%20Rules%20Engine/Domains/assets/c7f77e07-d384-45dc-b56a-4f8666d594c5.png)

Functionally, this is better because users will more readily understand what the options mean. Technically it is also better, because you avoid NULL values. NULL values make constraint writing, GUI design, service design and reporting more difficult.

 