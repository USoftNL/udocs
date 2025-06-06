---
id: NumberDecimalSeparator
---

# NumberDecimalSeparator




:::note

This article is about the **NumberDecimalSeparator**[Rules Engine property](/docs/Modeller_and_Rules_Engine/Rules_Engine_properties).

:::

## **NumberDecimalSeparator**

The **NumberDecimalSeparator** Rules Engine property determines how decimal separators in number values are displayed.

By default, this setting is taken from the setting as specified for the current language (for details, see Defining languages in the USoft Community knowledge base), but it is possible to overrule this temporarily by calling [RulesEngine.SetProperty](/docs/Extensions/RulesEngine_internal_component/RulesEngineSetProperty.md) and specifying the requested separator.

The setting will stay active for the remainder of the session or until another call to RulesEngine.SetProperty. A setting can be reset to the default value as specified with the current language by setting it to NULL.

## Setting this property

You can reset this property by executing:

```sql
SELECT RulesEngine.SetProperty( 
    'NumberDecimalSeparator'
,   { '*separator-character*' | NULL } )
```

where *separator-character* may be any single character, with the exception of currency symbols ($, £ and €), '*', '+', '-', letters and numbers. The only letter allowed is the 'B' to indicate a blank (a space).

If you specify NULL, the specified separator is switched back to the default value as specified for the language.

This entire statement is case-insensitive, including the property name.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'NumberDecimalSeparator' )
```

This entire statement is case-insensitive, including the property name.

## Other separator properties

There are 4 Rules Engine properties affecting separators in number and money fields:

|**Rules Engine property**|**Affects**|
|--------|--------|
|CurrencyDecimalSeparator|Decimal separators in money values|
|CurrencyGroupSeparator|Group separators in money values|
|NumberDecimalSeparator|Decimal separators in number values|
|NumberGroupSeparator|Group separators in number values|