---
id: RulesEngineMessageLanguage
---

# RulesEngine.MessageLanguage



> [!NOTE]
> This article is about the **MessageLanguage** method of the [RulesEngine internal component](/docs/Extensions/RulesEngine%20internal%20component).

## **RulesEngine.MessageLanguage**

Returns a USoft-defined or user-defined message. Translates the message into the runtime language if a translation in that language is available for the message.

This method may be called from, eg., a SQL Task in a USoft Batch job.

> [!WARNING]
> It is not possible to use this method to display messages in web pages of a USoft application.

*Syntax*

```sql
SELECT RulesEngine.MessageLanguage (
    *category,   name,   type* [, *parameter* ... ]
)

*type*  :=  [ INFORMATION | WARNING | ERROR | QUESTION ]
```

The required *category* is the category that the message belongs to, as specified in the System Messages record for the message. The required *name* is the logical name of the message as specified in the System Messages record for the message. *Name* is unique within the message category.

The required *type* must be one of the following:

|        |        |
|--------|--------|
|INFORMATION|Shows an information message. Processing continues.|
|WARNING |Shows a warning message. Processing continues.|
|ERROR   |hows an error message and causes a violation. Processing is blocked.|
|QUESTION|Shows a question with a Yes and a No button. If the user selects Yes, the value 1 is returned. If the user selects No, the value 2 is returned.|



With QUESTION, you can define additional behavior depending on the value returned. The QUESTION type can only be used within a Client-Server application. If used in a web application, Batch Runner, or the Remote Rules Service API, an error message is returned.

*Parameter* values are required for messages that have defined parameters. The number of parameters required in the calling statement must be equal to the number of parameters defined for the system message. Parameter values in the call are assigned to defined parameters by position. The position is indicated by the Seqno attribute of the defined parameters.

*Example 1*

This results in the information message: "15 record(s) committed" or, if Dutch is set as the runtime language, in the information message "15 rijen opgeslagen".

```sql
INVOKE  RulesEngine.MessageLanguage WITH
SELECT  'Frequent End User Msg'
,       'COMMIT'
,       'INFORMATION'
,       '15'
```

*Example 2*

Suppose that when a contract is signed, the user must decide whether the contract must be frozen or not. You can write a transitional constraint to achieve this:

```sql
UPDATE      contract
SET         frozen= 'Y'
WHERE 1 =
(
    INVOKE    RulesEngine.MessageLanguage WITH
    SELECT    'MyCategory'
    ,         'MSG_QUESTION_FREEZE_CONTRACT'
    ,         'QUESTION'
    ,         ID
    WHERE     OLD(signed) = 'N'
    AND       signed = 'Y'
)
```

 