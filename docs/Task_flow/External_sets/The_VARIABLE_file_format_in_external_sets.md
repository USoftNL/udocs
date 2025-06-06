---
id: The_VARIABLE_file_format_in_external_sets
---

# The VARIABLE file format in external sets

Records are terminated by a newline character.

When you choose VARIABLE as the file format, USoft Batch will look for (import) or insert (export) commas as column separators in the external file.

If a string contains a comma, a newline character, or a single quote, the string must be enclosed in single quotes. In other cases you may use the string delimiters if you wish, but they are not mandatory.

For import tasks, single quotes in the import data must be represented as two quotes, one of which will be removed during the import process. For example the following record, consisting of two fields, can be successfully imported:

**1,'This is a single quote '' in the variable import data'**

If a field starts with the quote, USoft Batch assumes that it is a field enclosed in quotes. The field may then contain the quote doubled, as shown above, as well as the comma and newline characters.

If the first character is not the quote, then the string may contain the quote, which should not be doubled, but it may not contain the comma or the newline character.

When exporting, if the data contains the string delimiter, or record separator, USoft Batch encloses the data in string delimiters automatically, and every occurrence of the string delimiter is automatically escaped (doubled).

For external sets, the following fields are surrounded by the string delimiter (by default a single quote):

- All fields with one of the following **data types**: CHAR, TEXT, DATE, SMALLDATE, VARCHAR, VARCHAR2
- All fields of which the data contains the **string delimiter** (by default a single quote).
- All fields of which the data contains the **column separator** (by default a comma).
- All fields of which the data contains the **record separator** (by default a newline).

Every occurrence of the string delimiter in the actual data is replaced by two consecutive string delimiters.

## Notes

You can also specify a different string delimiter using the string_delimiter parameter. If you do this, you must remember that any string that then contains the (new) delimiter must itself be delimited using the new character, and that the character must be doubled inside the string (for import tasks). This applies to both CSV and VARIABLE file formats.

For example, suppose that you have the following string in an import process:

 

```
This is a percent % sign

```

 

If you now change the string delimiter to %, you must enclose the string in delimiters, and also code the symbol in the string twice, as follows:

 

```
%This is a percent %% sign%

```

 

In the same way, if you change the column separator using the colsep parameter, you must allow for any strings that contain the new separator, and enclose them within the correct string delimiters. In this case, you do not need to double the symbol in the string.

 