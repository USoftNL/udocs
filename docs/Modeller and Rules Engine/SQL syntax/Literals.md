# Literals



> [!NOTE]
> This article is about **Literals** as part of the [SQL syntax](/docs/Modeller%20and%20Rules%20Engine/SQL%20syntax) that USoft supports.

## **Literals**

## Boolean literals

The SQL language does not have a separate boolean data type. You must use string literals to represent the idea of 'true’ and 'false’.

> [!TIP]
> Best practice in USoft applications is to use capital letter 'Y’ for 'true’ and capital letter 'N’ for 'false’, even if the application is otherwise in a different language than English.

Since SQL has the concept of the NULL value to represent 'unknown’ (the absence of a column value), it may be said that SQL has a 3-valued system of evaluating booleans (True, False, Unknown). See "The NULL value” later in this article.

## String literals

String literals are surrounded by single quotes:

```
'USA'
```

Single quotes in values are escaped by adding an extra single quote:

```
'Anna''s car.'
```

## Number literals

Number literals are notated as is:

```
5440
```

> [!TIP]
> A special concern with number literals is the use of . and , (comma) as group separator symbols. These symbols are interpreted variously as group separators or as decimal separators. This depends on a number of settings in your technology stack. This applies when inputting number literals and also when rendering returned number values. For details, see IO Formats.

## Date and time literals

The SQL language does not have a literal notation for date and time values. You are reduced to notating dates and times are strings. You need to apply conversion functions to indicate which part of the string represents which part of the date and time. This applies when inputting date and time literals, and also when rendering returned date and time values. You can use the USoft-native DATE_TO_CHAR() and CHAR_TO_DATE() functions for this.

> [!TIP]
> A stack of defaulting mechanisms is in operation here. Your OS may have ways to input and render dates and times. Your RDBMS also intervenes - for example, Oracle stores time values by default (using midnight as default time) even if you only use the date part, but SQL Server differentiates between storing dates without time and storing dates with time.

The USoft DEFAULT_DATE_FORMAT Rules Engine parameter determines the date IO format that the Rules Engine falls back on if no other date format information is available. For more details on date and time IO formats, see IO Formats.

## The NULL value

SQL has the concept of the NULL value to represent 'unknown’ (the absence of a column value). The NULL value is represented case-insensitively by an unquoted sequence of letters N-U-L-L:

```
NULL
```

> [!WARNING]
> NULL values are a source of errors generally. This is especially true in a USoft context, because any comparison with NULL evaluates to False (see [Comparison operators](/docs/Modeller%20and%20Rules%20Engine/SQL%20syntax/Comparison%20operators.md) for this), and this causes a constraint to remain without effect.
> For this reason, best practice is to make database columns mandatory whenever you can.