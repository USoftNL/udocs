# Subtype indicators

For each subtype table you define, USoft automatically creates a *subtype indicator* column in the supertype table. A subtype indicator is a Yes/No flag that indicates, for each subtype, if a given supertype instance (a supertype record) is also of the subtype.

Physically, a subtype indicator is a database column storing 'Y' and 'N' values.

Subtype indicators are used in USoft's GUI implementation of subtypes.

*Example*

You define 2 subtypes of PERSON:

|**Table Name**|**Supertype**|
|--------|--------|
|GUIDE   |PERSON  |
|STAFF   |PERSON  |



As a result, the PERSON table will contain 2 subtype indicators. Here is an example record for a person called SMITH who is a guide, but not a member of staff:

|**Columns in table PERSON**|**Example values**|
|--------|--------|
|PERSON_ID|884     |
|NAME    |SMITH   |
|...     |...     |
|GUIDE   |Y       |
|STAFF   |N       |



## Tips for good design

USoft automatically creates each subtype indicator as a column based on the BOOLEAN template domain. This domain, by default, has Default Value = N.

- Keep the BOOLEAN domain for each subtype indicator.

- Do not change the Default Value: keep Default Value = N at the level of the BOOLEAN domain, and do not specify any Default Value at column level.