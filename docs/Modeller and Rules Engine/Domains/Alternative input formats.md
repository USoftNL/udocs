# Alternative input formats

In an application that accepts and displays certain date values as (for example) DD-MON-YYYY (e.g., 01-JAN-2008), it is possible to specify that end users can input values not only in that standard IO format but also in one or more **alternative input formats**, also called **alternative IO formats**, e.g. DD-MM-YYYY (01-01-2008).

The alternative input format(s) are used only at data entry time, i.e., as an input format. Once accepted, the data is always displayed using the standard IO format (the output format).

Input data is first read using the standard IO format. If there is no match, alternative input formats are used. If more than one alternative input format is defined, then alternative input formats with a lower sequence number take precedence in the matching process. The alternative input formats, and their associated sequence (or position) number are specified on the IO Format tab page of the domains window.

Alternative input formats are propagated to the Windows Designer Alternative Input Formats property in the same way as the standard IO format is propagated to the Windows Designer IO Format property. The Windows Designer enables developers to overwrite both the standard IO format and the alternative input format(s) by local settings at GUI level.

Alternative input formats can be used for IO formats for date and time values, and also for numeric and alphanumeric data.

## How to define

1. In USoft Definer, choose Define, Domains from the menu.  The Domains window opens.
2. Retrieve the domain you want to set input formats for. Click the tab.
3. In the IO Format field, type the format in which you want USoft to display the data once they are accepted.
4. In the Alternative Input Formats box, optionally type alternative other IO formats that you want USoft to recognise. Set Position to a sequence number. The alternatives are considered in the order of the Position sequence numbers.

> [!CAUTION]
> On Oracle, if you have input formats that contain interpunction symbols such as slashes or hyphens, alternative formats only work properly if you surround these symbols by double quotes. For example, if you display 01 August 2024 as 01-08-2024 (**DD-MM-YYYY**), but you also want the American 08/01/2024 input to be interpreted as this date, then on Oracle, use double quotes as in the table below. This is ONLY necessary if you use an alternative IO format at all. On **SQL Server,** by contrast, the double quotes are NOT accepted.

|** **   |**Oracle**|**SQL Server**|
|--------|--------|--------|
|**IO Format**|`DD"-"MM"-"YYYY`|`DD-MM-YYYY`|
|**Alternative input format**|`MM"/"DD"/"YYYY`|`MM/DD/YYYY`|