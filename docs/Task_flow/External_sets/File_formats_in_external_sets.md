---
id: File_formats_in_external_sets
---

# File formats in external sets

The file formats supported for external sets are FIXED, FIXEDVLE, VARIABLE, CSV.

### FIXED

In the FIXED format, each record occupies a fixed number of positions. If the data is shorter, the positions at the end are spaces.

*Example*

```
1001 P.M. JOHNSON 7 MAY 1968 new employee, no experience

```

When you choose FIXED, there is no need for any record separator characters. All columns are matched based on the length of the elements of the external set.

### FIXEDVLE

The FIXEDVLE format is the same as the FIXED format, except that the length occupied by each record is variable. The last data element does not contain trailing spaces.

*Example*

```
1001 P.M. JOHNSON 7 MAY 1968 new employee, no experience

```

The FIXEDVLE file format (Fixed Length with Variable-Length Last Element) is especially useful if you want to import or export a LONG or a CLOB field. This LONG or CLOB field has to be the last set element of the external set. Note that LONG fields are limited to 32K characters, so you are advised to use CLOB fields for larger numbers of characters.

### VARIABLE

In the VARIABLE format, a combination of string values and number values is possible. String values are marked by single quotes.

*Example*

```
1001,'P.M.','JOHNSON','7 MAY 1968','new employee, no experience'

```

### CSV

In the CSV (Comma-Separated Values) format, the only separator between data elements is the comma. Double quotes are used as an escape mechanism, ie., to signify that a comma is part of the data element.

*Example*

```
1001,P.M.,JOHNSON,7 MAY 1968,"new employee, no experience"

```

## Other settings

In addition to the file format settings, a number of other settings can affect the exact look of data in an export file:

- For each external set element, the data type determines a number of output aspects. For example, if a field in a VARIABLE file format corresponds to an external set element with the NUMBER data type, then the value will not be surrounded by quotes. There is a wide choice of data types, and not all of them are supported by all platforms. For more information, see the lists of supported data types for the various RDBMS platforms in the USoft Definer Help (look for the index entries for "data types").
- Depending on the data type and file format, the data length setting may have an effect on the spacing between fields in the file. Generated data length is derived from domain specifications, but can be changed manually for each external set element.
- Formats sch as date formats are derived from IO Format specifications (at domain level), but these can also be changed manually for each external set element.