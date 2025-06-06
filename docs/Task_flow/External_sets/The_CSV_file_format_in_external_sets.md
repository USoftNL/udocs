---
id: The_CSV_file_format_in_external_sets
---

# The CSV file format in external sets

CSV format is that used for export and import by many applications, such as Microsoft's Access, Excel, and Word. The format is defined as follows.

Records are terminated by a "newline" character.

Columns are separated by a comma.

If a field contains a comma, double quote or newline character, it must be enclosed in double quotes. In other situations you may optionally enclose the field in double quotes anyway.

For import tasks, double quotes in the import data must be represented as two sets of quotes, one of which will be removed during the import process. For example the following record, consisting of two fields, can be successfully imported:

```
1,"This is a double quote "" in the CSV import data"

```

If a field starts with the quote, USoft Batch assumes that it is a field enclosed in quotes. The field may then contain the quote doubled, as shown above, as well as the comma and newline characters.

If the first character is not the quote, then the string may contain the quote, which should not be doubled, but it may not contain the comma or the newline character.

For export tasks, when a string field contains a comma, newline character or double quote, USoft Batch will enclose the whole field in double quotes. Every double quote occurring in the string is replaced by two double quotes.

It is also possible to use a different delimiter instead of the double quotes.