---
id: Display_types
---

# Display types

Each domain has a **display type**. A display type specifies how columns based on that domain are represented in the interface (for example as an ordinary input field, as a checkbox, or as a set of option buttons).

|**Display type**|**Specifies**|
|--------|--------|
|Bitmap Image|External bitmaps (only the filename is stored in the database, the data itself is kept in an external file).|
|Check Box|Presents a check box that can be checked or cleared.|
|Dropdown List Box|Presents a dropdown list of allowed values. Useful for data with not too many values.|
|Multi-line Text Box|Allows long texts to be entered (the exact length is determined by your RDBMS).|
|OLE Container|Creates a large field in which OLE objects are inserted via the right mouse menu. Developers can also insert OCXs using the Windows Designer.|
|Option Buttons|Presents a group of (radio) buttons, one for each allowed value. Only one value can be chosen. Useful for data with only a few values, and where a quick view of the allowed values is necessary.|
|Slider  |Presents a scale (continuum) of values, with a "thumb" or "slider" that can be moved like a scroll bar.|
|Text Box (Alpha)|A-Z     |
|Text Box (Character)|All 256 ASCII characters (by default: AAAA, with the number of A's depending on the column width).|
|Text Box (Date)|Dates in the format MM-DD-YY. (If you use this data type, do NOT specify the column width.)|
|Text Box (Date and Time)|Date and time (by default: DD-MON-YY HH24:MI:SS)|
|Text Box (European Date)|Dates in the format DD-MM-YY. (If you use this data type, do NOT specify the column width.)|
|Text Box (Integer)|Whole numbers (integers) only. (If you use this data type, do NOT specify the column width.)|
|Text Box (Julian Date)|Dates in the format DD-MON_YY). (If you use this data type, do NOT specify the column width.)|
|Text Box (Money)|Amounts of money (by default: [-]ZZZZZ9[.99] ).|
|Text Box (Number)|Numeric characters (0-9), plus (+) and minus (-), exponent indicators (E, e). Default: [-]ZZZZZ9[.ZZZ].<br/>			The number of Z's before the decimal separator depends on the data length. The number of Z's after the decimal separator depends on the number of decimal places allowed.|
|Text Box (R Integer)|Displays a right-adjusted version of the Text Box (Integer) display type.|
|Text Box (R Money)|Displays a right-adjusted version of the Text Box (Money) display type.|
|Text Box (R Number)|Displays a right-adjusted version of the Text Box (Number) display type.|
|Text Box (Time)|Time (by default: HH24:MI:SS).|
|Text Document|External texts (only the filename is stored in the database, the data is in an external file). The Edit button starts WordPad with the referenced file.|
|Text Editor|Creates a field with an Edit button that opens the popup Text Editor.|



 