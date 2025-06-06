---
id: RulesEngineTranslateMessage
---

# RulesEngine.TranslateMessage



> [!NOTE]
> This article is about the **TranslateMessage** method of the [RulesEngine internal component](/docs/Extensions/RulesEngine_internal_component).

## **RulesEngine.TranslateMessage**

Returns a USoft-defined or user-defined message text. Translates the message into the runtime language if a translation in that language is available for the message.

Allows an external component connecting to the Rules Engine in a non-interactive setting (that is, through a programmatic call not involving a human interface) to make use of USoft's localisation/translation capabilities.

External components generate their own log information and error messages. These messages are often hard-coded in the component and by default do not take advantage of USoft's translation capability. The TranslateMessage method offers this capability in this setting.

*Syntax*

```sql
SELECT RulesEngine.TranslateMessage (
    *category*
,   *name*
[,  *parameter* ... ]
)
```

The required *category* is the category that the message belongs to, as specified in the System Messages record for the message. The required *name* is the logical name of the message as specified in the System Messages record for the message. *Name* is unique within the message category.

*Parameter* values are required for messages that have defined parameters. The number of parameters required in the calling statement must be equal to the number of parameters defined for the system message. Parameter values in the call are assigned to defined parameters by position. The position is indicated by the Seqno attribute of the defined parameters. 

*Example*

```sql
INVOKE  RulesEngine.TranslateMessage WITH
SELECT  'Frequent End User Msg'
,       'COMMIT'
,       '15'
```

This results in the information message: "15 record(s) committed" or, if Dutch is set as the runtime language, in the information message "15 rijen opgeslagen".

 