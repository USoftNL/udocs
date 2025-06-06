# What is a domain?

A **domain** is a pool of values from which users can choose when providing values for a type of attribute. A type of attribute may be stored in multiple columns. These columns are said to be based on the domain.

A domain is a rich data type. Logical conditions that a value must meet to be in the domain, may be expressed by USoft constraints or regular expressions. In addition to delimiting a pool of values, a domain also specifies certain presentation aspects of columns based on the domain. For example, it may specify in which format the Rules Engine is to present stored date/time values to the user, or which type of visual control must be used in the screen for columns based on the domain.

> [!TIP]
> **Domain names: Good Style**
> A domain corresponds to a reference scheme: a way of representing things from business reality in an information system. The best domain names reflect this administrative nature: they end in such words as "ID”, "code”, “name”, "address”…
> Avoid domain names such as STRING_30. The fact that a domain contains string values is defined by its Data Type setting. A maximum width of 30 positions is defined by its Column Width setting.
> Avoid domain names such as CUSTOMER. A domain is not a business reality but an information system reality. CUSTOMER_ID is better.

*Example 1*

A CUSTOMER_FAMILY_NAME domain containing all-uppercase alphabetic strings with a maximum length of 60, such as 'SMITH'.

*Example 2*

An EMAIL_ADDRESS domain containing rules that define an acceptable e-mail address.

*Example 3*

A DISCOUNT_PERCENTAGE domain containing integers in the range 0-100. The domain could additionally specify that these integers must be shown in a Slider control that allows users to "spin" quickly to the desired value.

## Purpose of domains

'Domain' is one of the fundamental concepts of the USoft Definer model. Perhaps the primary purpose of a domain is to communicate to the RDBMS what is the desired datatype and data length of each column. In this capacity, a USoft domain is the equivalent of 'NUMBER( 8, 2 )' or 'VARCHAR( 256 )' clauses in traditional CREATE TABLE or ALTER TABLE statements.

But USoft domains serve many more purposes. They allow you to:

- Build a highly consistent data model by inviting you to re-use, where possible, column characteristics for like columns across your entire model.
- Check that only allowed values are admitted to the database.
- Handle default values and predefined data formats. Dates and times are examples of data where predefined data formats are important.
- Generate unique values that can act as a handle for identifying individual data records.

## USoft implementation

A domain is defined by a number of name-value pairs describing aspects of data values of a specific type.

A domain has a unique name. Each column based on the domain is linked to it by specifying the domain name for the column. Each USoft column must be based on exactly 1 domain.

Some domain settings are propagated to the RDBMS so that the RDBMS can create a physical column with the appropriate datatype.

Other domain settings have a technical effect in the USoft layer only. If your domain has allowed values, the Rules Engine and not the RDBMS checks that each input value is among the allowed values.

Finally, some domain settings affect the default USoft GUI for fields based on the column(s) that are based on the domain. If your domain has "Display Type" = "Dropdown List Box", possible field values to choose from are presented in a dropdown list box.