# Input validation

In your web page, you can have **instant validation** of the value supplied by the user in an input control. This is particularly important in text fields where the user types characters.

## What is instant validation?

Input controls with instant validation show up as correct if the value supplied is considered valid:

![](/api/Web%20and%20app%20UIs/Web%20Designer%20controls/assets/f67e503a-b223-4908-b8ad-01dae09b8eb5.png)

They show up as incorrect in the opposite case:

![](/api/Web%20and%20app%20UIs/Web%20Designer%20controls/assets/2ffaf1e4-8d38-4485-9eb2-fb38443ba568.png)

If the value is invalid, an error message is displayed. You can have the message displayed in a pop-up message box. The user must click the OK button to continue:

![](/api/Web%20and%20app%20UIs/Web%20Designer%20controls/assets/0b41e92d-1af3-481d-9faf-f0071e65ac42.png)

Or, you can have the message appear immediately below the input control:

![](/api/Web%20and%20app%20UIs/Web%20Designer%20controls/assets/93e630d9-894d-45ea-82c4-a0357e97542d.png)

## Background: Instant validation and the Rules Engine

USoft specialises in rules, including input validation rules. By default, you define rules in USoft Definer. This ensures high data quality: the rules are always enforced, not only when values are supplied via a web page UI.

One downside of this architecture is that, from the point of view of a web page user, rules may be checked relatively late: you don't run into the Rules Engine until the time when you go to the database. To counter this drawback, USoft makes an effort to check many rules earlier by propagating the rule definition automatically to the web page. This way, for example, regular expression restrictions on domains, or Mandatory = Yes restrictions on columns, are checked at an early time in your web page. However, certain rule checks still take place relatively late, for example, domain constraints expressed in SQL.

Another downside is that the Rules Engine has no knowledge of the graphic design of web pages: it is unable to apply a number of user-friendly strategies such as colours, icons, and the positioning of feedback messages relative to input fields.

Instant validation overcomes these 2 downsides. As a USoft developer, you must remain sensitive to the fact that instant validation applies only to the web page where you specify it, and only for the input controls you specify it for. If you want USoft to guarantee that validation takes place in *any* circumstance, consider expressing validation both as instant validation in the web page and ALSO in a domain constraint or other Definer setting at the back end.

## How to create instant validation

You create instant validation at the level of an **input control.** Find the following 3 properties that together determine instant validation:

- Validation Rules
- Validation Moment
- Validation Feedback

> [!TIP]
> In a multi-record display, you find these properties at the level of the GridCellControl.
> In a single-record display, you find these properties at the level of the **Data** descendant object of the column control.

### Validation Rules

This property determines which validation rules are checked. Here you define, for example, that a value may only contain alphabetic characters or that it may not exceed some maximum length. For details, in the Property Inspector, read the Help text for the Validation Rules property.

> [!WARNING]
> How? In Property Inspector, click the Validation Rules property. Then click the “question mark” toggle icon near the top if you don't see any Help text displayed:

### Validation Moment

This property determines at what times, ie., under what circumstances, input values are validated:

**Always**

Validation takes place when the value in the input control is being queried or changed.
•    If the value was invalid and the user fixes this, the field is immediately marked as correct (reward early).
•    If the value was valid and the user invalidates it, the field is immediately marked as incorrect (punish early).

**Change**

Validation takes place when the value in the input control is being changed.
•    If the value was invalid and the user fixes this, the field is immediately marked as correct (reward early).
•    If the value was valid and the user invalidates it, the field is immediately marked as incorrect (punish early).

**Change (Reward Early, Punish Late)** (the default:)

Validation takes place when the value in the input control is being changed.
•    If the value was invalid and the user fixes this, the field is immediately marked as correct (reward early).
•    If the value was valid and the user invalidates it, the field is not marked as incorrect until the user leaves the field, or performs an equivalent other action (punish late).

**Validate**

Validation takes place the moment the validate() method is called.
•    If the value was invalid and the user fixes this, the field is immediately marked as correct (reward early).
•    If the value was valid and the user invalidates it, the field is immediately marked as incorrect (punish early).

**Validate (Reward Early, Punish Late)**

Validation takes place the moment the validate() method is called.
•    If the value was invalid and the user fixes this, the field is immediately marked as correct (reward early).
•    If the value was valid and the user invalidates it, the field is not marked as incorrect until the user leaves the field, or performs an equivalent other action (punish late).

### Validation Feedback

If an input value is found invalid, this property determines how the error message is displayed to the user. There are 2 options:

**MessageBox** (the default)

A message box pops up with the error message. The user must click the OK button in the message box to continue.

**At Control**

The error message is displayed immediately next to the input field.