---
id: Patterns_Regular_Expressions
---

# Patterns (Regular Expressions)

You can use a regular expression (regex) pattern to define the subset of values that is acceptable for a domain.

If you do that, in columns based on the domain, only input values that match the regex pattern will be accepted.

*Example*

Use this pattern:

```
^[A-Za-z]*$
```

 to express that a domain must only accept all-letter (ie., alphabetic) values.

Define the pattern as follows. A user who attempts to input "AUSTRALIA23” in a column based on the domain will get the error: “Value must contain only letters. AUSTRALIA23 rejected.”

|        |        |
|--------|--------|
|Name    |ALPHABETIC|
|Description|Letters only, no digits or special characters.|
|Pattern |^[A-Za-z]*$|
|Custom Message|Value must contain only letters. \<input> rejected.|



> [!TIP]
> A regular expression only allows you to create **restrictive** rules: if an input value does not match the regex, it is rejected, and an error message is given.
> To create **productive** rules (input value is automatically changed to an acceptable version), use a domain constraint.

## Finding or creating the regex to apply

To find or create the regex to apply to a domain:

1. From the Definer menu, choose Define, Domains and retrieve the domain you want to apply the regular expression to.
2. Click the small lookup button to the right of the “Pattern (Regular Expression) field. The "Regular Expressions used in Domains” window opens. See that each regular expression has a Name, Description and Pattern. To see the Pattern, select the Name in the grid.
3. Find the regex you want to apply, or create your own regex. Use the in-window Query menu option if you need help finding a regex in a long list. Use the in-window Record menu option if you want to create your own regex or if you want to drop a regex.
4. Make sure your regex has a unique Name, a suitable Description, and the correct Pattern, and then press OK. Back in the Domains window, save work.

## Testing a regex

Before you press OK, you can test sample input values to see whether or not they match the pattern. Type the sample value into the "Input Data to Test” field, then press the Test button:

- If the sample value matches the pattern, the Test Result box remains empty.
- If the sample value does not match the pattern, the Test Result box shows the error message that will be presented to the user.

## Error message

Custom Message is empty by default. If you leave Custom Message empty, the following default message is produced:

```
The value ‘*value*’ is not a valid *name*.
```

where *value* is the value submitted by the end user at runtime, and *name* is the all-lowercase version of the name of the regex. For example:

```
The value 'AUSTRALIA23’ is not a valid alphabetic.
```

You can customise the error message.Type the message you want in the Custom Message box. In the message text, you can use the following special keywords. They are substituted at runtime.

|**Keyword**|**Substituted by**|
|--------|--------|
|`<name>`|The Name of the regex|
|`<description>`|The Description of the regex|
|`<regex_value>`|The Pattern of the regex|
|`<input>`|<p>The input value that raised the error</p><p>by not matching the regex pattern</p>|