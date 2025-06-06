---
id: MessageLanguage
---

# MessageLanguage()



> [!NOTE]
> This article is about the **MessageLanguage** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **MessageLanguage()**

Displays a system message in the language specified at startup. System messages are defined in USoft Definer.

*Syntax*

```
MessageLanguage( *category*, *name*, *type*, *yes-action*, *no-action*, *value*, ... )

*type*  :=  { 'INFORMATION' | 'WARNING' | 'ERROR' | 'QUESTION' }
```

*Category, name* and *type* are required. *Category* is the category of the message as defined in USoft Definer. *Name* is the name of the message. *Type* is the type of message.

You can specify the y*es-action* and *no-action* only if *type* is QUESTION, in which case these parameters are required.

*Value(s)* are values to be substituted as parameters in the message text (if any). You need as many* values* as the message has parameters. Multiple *values* are separated by commas.

*Example*

(Post-change property of Instance field:)

```
ActionDecision( CHECK_INSTANCE_NAME, CurrentColumn() )
```

(Decision SQL of decision CHECK_INSTANCE_NAME:)

```sql
SELECT     :1
WHERE NOT EXISTS (
  SELECT     ''
  FROM       t_instance
  WHERE      name = :1
)
```

(Yes Action of decision CHECK_INSTANCE_NAME:)

```
MessageLanguage( 'Admin Msg', 'WRONG_INSTANCE_NAME', 'ERROR', :1 )
```

 