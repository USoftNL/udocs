# Allowed values

When defining a domain, you can restrict the **values allowed** in the columns based on the domain:

- You can set predefined domain attributes. For example, if you want a number domain to have only values between 1 and 100 you can set Min. Value = 1 and Max. Value = 100.
- You can enumerate one-by-one which values are allowed. For example, you can enumerate the values 'Single', 'Married' and 'Divorced' as allowed values for columns holding a person's marital status.
- For a domain, you can specify a regular expression pattern. Only values that match that pattern are allowed in columns based on that domain.
- You can write USoft-style SQL to define business rules for domain values. You do this by creating domain constraints.

There is a link between allowed values and **display types**:

- For checkboxes, allowed values will be limited to 'Y' and 'N', or to 'Yes' and 'No'. If the column has Mandatory = No, the empty value or NULL value is a third possibility.
- If you have enumerated a very limited number of allowed values, it is appropriate to use the Option Buttons display type.
- If you have enumerated a larger set of allowed values, use a dropdown list.
- If you have a Slider a the display type of a number column,l it is appropriate to set the Min. Value and Max. Value predefined domain attributes.

## Predefined domain attributes

If predefined domain attributes cover your need, they are the easiest and most maintainable way for you to specify restrictions on allowed values:

- For a number domain, you can restrict the allowed range of numbers by setting the lower and upper boundaries of this range in the Min. Value and Max. Value attribute of the domain.
- For a number domain, you can set Decimals and Decimals Displayed to govern the way in which decimals must be entered and displayed.
- For a string domain, you can express that you only want all-uppercase values by setting the Uppercase attribute for the domain.
- You can set the domain's Fixed Length attribute to specify that the length of each value must be equal to the Column Width of the domain.

## Enumerating allowed values

To enumerate the allowed values for a domain:
1.    Open the Domains window. Get the domain record in your screen.
2.    Click the Allowed Values tab. Or click the Related List button on the toolbar, and then choose Values for this Domain.
3.    For each value that you want to define, specify the Value itself, the Position number, and a Prompt. The Value is the value as stored in the RDBMs. The position determines in what order values are shown in dropdown lists for the user to choose from. Prompt determines how the value is displayed to the user.
4.    Save your changes.

## Regular expression patterns

You can express that all the values in a domain must match a regular expression pattern. In columns based on the domain, the Rules Engine will only allow values that match that pattern. To define a regular expression pattern for a domain:
1.    Open the Domains window. Get the domain record in your screen.
2.    Click the lookup button to the right of the Pattern (Regular Expression) field.
    The "Regular Expressions Used in Domains" window appears.
3.    In this window, select a regular expression for the domain. In this window, you can also:

- Edit or add regular expression patterns.
- Test a pattern's effect on sample values.

## Domain constraints for allowed values

For a domain, you can define any number of restrictive domain constraints. Each of these constraints will check a restriction that values are subject to. If you have multiple domain constraints, each is guaranteed to perform its check independently of the other constraints.

In addition to acting restrictively, you can also get domain constraints to correct values entered by a client. A productive domain constraint will transform user data so that they become allowed values. You can choose to have this done tacitly or accompanied by a user message.