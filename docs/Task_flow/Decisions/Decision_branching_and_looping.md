---
id: Decision_branching_and_looping
---

# Decision branching and looping

USoft uses SQL as its primary expression language. SQL has WHERE clauses for conditional behavior and functions such as DECODE( ) to select a value based on some output value, but it does not fully support branching and looping in the way that procedural languages do.

With Decisions, you can combine SQL expressions with branching. Based on the outcome of a SQL statement, the application branches either into the Yes Action or the No action.

You can easily construct complex decision trees with repeated branching, because in the Yes Action and No Action scripts you can call sub-decisions using [ActionDecision()](/docs/Task_flow/Action_Language_reference_A-C/ActionDecision.md).

You can also achieve looping, because it is possible to call a decision from its own Yes Action. In addition, you can call a decision that you passed through earlier, which gives you repeated looping through the same sequence of decisions until some value is reached or computed.

> [!TIP]
> It’s easy to lapse into procedural programming in this area. Do not forget that you can write a Decision SQL statement that retrieves *multiple rows* and that the Decision Yes Action is automatically executed for each of the retrieved rows, with the correct variable bindings. Prefer this kind of looping if it fulfills your need.

The **Decision Tree** and **Caller Tree** utilities in the Decisions window help you visualise and navigate structures of Decisions that call each other or themselves.

*Example*

This example calls itself in the Yes Action until some result (in this case, a unique name) is reached, at which time it branches into the No Action.

In the Decision SQL, the :1 and :2 placeholders are input parameters passed when the CP_PASTE_COMPONENT decision is called. In the circular calls made from the last line of the Yes Action script, they correspond to :1 and :2 in that line:

```
ActionDecision( CP_PASTE_COMPONENT, :1, :2 )

```

In the Yes Action, the :1 placeholder corresponds to the first value retrieved by SELECT (i.c., the string **COPY**), and the :2 placeholder corresponds to the second value retrieved by SELECT. The No Action in this case has no placeholders, but it could use :1 and :2 in the same way as the Yes Action.

(Decision Name:)

```
CP_PASTE_COMPONENT

```

(Decision SQL:)

```sql
/* Loop until we have a unique name */
SELECT   'COPY'
,        DECODE( :1, NULL, NULL, NVL(:2, 1) + 1 )
FROM     T_RDMI_COMPONENT
WHERE    COMPONENT_NAME = DECODE( 
             :1
         ,   NULL
         ,   :"globals.objectName"
         ,   :"globals.objectNamePrefix" || :"globals.objectName" 
         )

```

(Yes Action:)

```
ResourceFileUpdate( 'global.objectNamePrefix:' || :1 || :2 || '_' )
ActionDecision( CP_PASTE_COMPONENT, :1, :2 )

```

(No Action:)

```
ResourceFileUpdate( 'global.keyColumn:COMPONENT_NAME' )
ResourceFileUpdate( 'global.maxLength:100' )
ActionDecision(CP_PASTE_IMPORT)

```