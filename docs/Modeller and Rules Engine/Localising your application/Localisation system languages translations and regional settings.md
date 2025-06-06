# Localisation: system languages, translations, and regional settings

## Understanding localisation

### What is localisation?

Localisation is an umbrella term for measures that you take to ensure that your USoft application is easy-to-use for end users from different language communities or regional communities. You can use this to translate an entire application between distinct languages (English and French), but also to provide for regional preferences (British and American spellings of English).

In addition, USoft localisation covers **separator** symbols for the representation of number values. This allows you to "translate” between the preference of most English-speaking countries to place a period between the whole number and trailing decimals, and a comma between digit groups, as in the currency notation  € 1,050.50, and the preference in most European countries to do the reverse (€ 1.050,50).

> [!TIP]
> Calendar date representation is also variable due to regional preferences, but this area is not yet covered by USoft localisation.

### The role of the OS and the RDBMS in localisation

The OS and the RDBMS, the 2 chief software layers that underlie USoft, have localisation settings of their own. If you as a developer do not make localisation settings at the USoft level (by using the USoft System Language concept, as explained in the rest of this article), then your runtime USoft application may or may not take clues from the OS or the RDBMS for localisation, depending on the settings made.

### The role of USoft in localisation

As a rule, if you make localisation settings at the USoft level, then these will override whatever localisation settings you have at OS or RDBMS level.

To you as a developer, USoft offers only a certain measure of localisation. You cannot *fully determine* language and other regional displays and behaviour in your end user's screen.

At the USoft level...

… You can provide a desired translation of your message texts and screen prompts. Users may always, of course, decide to apply 3rd-party translation software to what you provide, but that would be a separate operation that is beyond any developer's control.

… You can provide language-dependent or region-dependent defaults for separator symbols in number values, but what you provide could be overridden by other software, in particular the browser (see next section).

… You cannot provide language-dependent or region-dependent date representations, but you can choose specific default date representations (using domain IO formats), independently of language or region.

### The role of the browser

In interactive web applications, browsers offer to the end user a variety of localisation settings that may influence what you provide as part of your application. Moreover, browsers increasingly display automatic localisation behaviour, perhaps on the basis of sites previously browsed by the end user. As a USoft developer who provides web pages, you cannot, of course, influence these forms of "surface behaviour”, All you can do is provide the best defaults.

Browsers also have user options to explicitly tap from localisation information available in the end user’s OS. (This works slightly differently between e.g. Chrome, Firefox, Edge.) If the end user uses these options, the OS settings are made to apply to the surface level of the browser interface. In other words, this creates an exception to the basic rule that any USoft settings will override any OS settings.

## The System Language concept in USoft

In USoft you achieve localisation by defining **system langages**. A system language is a collection of settings that determines how the following are represented to a given runtime user of your application:

- Messages, for example, an error message raised when the user violates a business rule.
- Application strings, for example, a field prompt shown next to an input field in a webpage.
- Separator symbols for decimals and groups in number values and money values.

### Default system language

The USoft factory default has English-language messages and application strings, and separator symbols that are customary in English-speaking countries. If this is all you need, you do not need to take any action in the area of localisation. USoft comes with a system language called “default”. This is what will be used:

|**System language**|**Name**|
|--------|--------|
|(USoft default)|default |



### Single-language translation

If all your end users speak Swedish instead of English, you may want to *translate* your application.

Even if you do not require English at all, USoft recommends you leave the 'default’ system language in place: instead of overwriting it, create an *additional* system language that you will provide to all your end users. Why? First, keeping the default at hand is practical during the translation task. Second, you never know if you need it unexpectedly in the future.

Call the target language by its ISO 639-1 language code, for example, 'sv’ for Swedish:

|**System language**|**Name**|
|--------|--------|
|(USoft default)|default |
|Swedish |sv      |



### Multi-language application

If one and the same USoft application must serve multiple language or regional communities, you need to define a system language for each. Use ISO 639-1 language codes. If one of the required languages is English, rename and overwrite the USoft 'default’ and call it 'en’:

|**System language**|**ISO 639-1 language code**|
|--------|--------|
|(USoft default) = English|en      |
|Swedish |sv      |
|Dutch   |nl      |



## How to define a system language

To define a system language and its associated separator symbols:

1. In USoft Definer, from the menu, choose Tools, Language, System Languages. Press F2-F3 to see existing languages.
2. Name a new language on a new line, or overwrite a language to rename. Language names are case-sensitive. You can name a language by any string, but it is good practice to use ISO 639-1 language codes as shown in the tables in the previous section.

> [!NOTE]
> The advantage of ISO 639-1 language codes is that Internet software such as browsers may increasingly be able to offer additional functionality for the language automatically, for example spelling or translation help.

3. Press Save/Commit. Click in the Property Name field in the child box. Press F2-F3. You see the following (4) default separator symbols for the system language:

|        |        |        |
|--------|--------|--------|
|CURRENCYDECIMALSEPARATOR|.       |(period)|
|CURRENCYGROUPSEPARATOR|,       |(comma) |
|NUMBERDECIMALSEPARATOR|.       |(period)|
|NUMBERGROUPSEPARATOR|,       |(comma) |



4. If necessary, change these settings. For example, for the Netherlands, decimal separator symbols must be commas and group separators must be periods, which is just the reverse of what is proposed here as a default. Save/Commit work.

The (2) CURRENCY… settings will apply to field values based on columns that have a domain with (*a*) a Display Type set to "Text Box (Money)" or "Text Box (R Money)”, or (*b*) an IO Format that includes a currency symbol such as ‘$’. They will only have an effect if the domain’s IO Format actually includes a marker for decimal separators or group separators, respectively. The IO format marker for decimal separators is a period (‘.’, as in ‘ZZZ9.99’). The marker for group separators is a comma (‘,’, as in ‘ZZ9,999’).

The (2) NUMBER… settings will apply to field values based on columns that have a domain with a numeric data type, for example, ‘NUMBER’.. They will only have an effect if the domain’s  IO Format actually includes a marker for decimal separators or group separators, respectively. The IO format marker for decimal separators is a period (‘.’, as in ‘ZZZ9.99’). The marker for group separators is a comma (‘,’, as in ‘ZZ9,999’).

> [!TIP]
> You can reset separator settings dynamically by calling the RDMI internal component named ‘RulesEngine’: for example:

 

## Next steps

[Translating system messages and application strings](/docs/Modeller%20and%20Rules%20Engine/Localising%20your%20application/Translating%20system%20messages%20and%20application%20strings.md)

[Providing localisation to end users](/docs/Modeller%20and%20Rules%20Engine/Localising%20your%20application/Providing%20localisation%20to%20end%20users.md)