---
id: Field_validation
---

# Field validation



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article covers **field validators** as a way of getting early user feedback. This is part of the [UI Library](/docs/Web%20and%20app%20UIs/UI%20Library).
> The UI Library is a mixed bag of Javascript extensions for programming UI controls in USoft web pages. Do not confuse with the structured [UDB object model](/docs/Web%20and%20app%20UIs/UDB%20udb/UDB%20udb%20object.md) for data exchange between USoft web pages and a Rules Engine.

Field validation is attractive for for early user feedback. USoft has field validation built in by default. An adjusted version of the jQuery validator plug-in is incorporated (jquery.validate.js) to facilitate this. The plug-in comes with a default set of validators. The entire control is well documented at http://jqueryvalidation.org/documentation/.

USoft provides an additional set of validators that can be found in the **usoft.ui.validator.js** file:

|**Validator**|**Explanation**|
|--------|--------|
|pattern |Allows a field value to be validated against a regular expression.|
|biccode |Checks that the field value is a valid BIC code.|
|iban    |Checks that the field value is a valid IBAN code.|
|udb-mandatory|Checks that the field value meets the Mandatory check defined at domain level.|
|udb-numeric|Checks that the field value meets the number format check defined at domain level.|
|udb-ioformat|Checks that the field value meets the IO Format check defined at domain level.|
|udb-value-list|Check that the field value is one of the allowed values defined for the domain.|



- If a field value is validated as being **correct**, the value 'valid' is added to its class list.
- If a field value is validated as being **incorrect**, the value 'error' is added to its class list.
- If one of the domain checks is violated, the value 'domain-error' is added to the class list.

Additionally, an error message is displayed as visual feedback to the user, where applicable.