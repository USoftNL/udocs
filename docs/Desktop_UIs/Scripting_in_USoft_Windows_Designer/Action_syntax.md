---
id: Action_syntax
---

# Action syntax

You script an action by writing an action script on an event property. A typical event property is the Action event property of a button. When the user presses the button, the script associated with the button's Action property is executed.

An action script is made up of one or more *statements,* each of which is either an *action statement* or a *value attribution*:

```
statement
statement
...

statement          ::=  { action-statement | value-attribution }

action-statement   ::=  object-path.action( parameter, ... )
object-path        ::=  [step. [step. ...]] object

value-attribution  ::=  property-path( value )
property-path      ::=  object-path.property

```

An action script consists of one or more statements. Each additional statement is written on a new line.

An *action statement* consists of a required *action* namefollowed by required parentheses. Depending on the situation and on the action you are calling, one or more *parameters* may be necessary or optional. Parameters (if any) are placed between the parentheses and are separated by commas.

The target object of the action may need to be specified, or it may remain implicit. The target object of the

```
MessageInformation()
```

action always writes to the user screen, so this target object is not specified. With the action

```
RecordDelete()
```

**,** if there is a single info box in scope, the fact that it is the target object can remain implicit, but if you have multiple info boxes you must specify which is the target object.

To specify the target object, you write an object path. An object path identifies an object as being the target of the action, and leads to this object. It may consist simply of the object name, or it may involve a sequence of one or more prefixed steps that lead to the object, much like a folder-and-file path leads to a file on the file system. Steps are separated by full stops. The Object Activator tool has been specially designed to help you write object paths.

As an alternative object path syntax, USoft Windows Designer supports old-style navigation paths involving the `<-` (arrow back) and ***** (asterisk) symbols.

Object names in action statements cannot contain spaces. Use an underscore (_) instead of a space. If you use the Object Activator to compose action statements, this happens automatically.

An object path points to an object within the same window as the event property associated with the action script. To cause an action to have an effect outside this current window, see Target objects in other windows.

*Examples*

```
RecordDelete()
```

```
Tab_1.Page_1.MyBrowser_1.Navigate('www.usoft.com')
```

A  *value attribution* sets the value of a property of a target object. The property is addressed by writing a property path: an object path leading to the target object, followed by a full stop, the property name, and required parentheses.

*Examples*

For details on the single-quoted expressions in parentheses, see the Expressions section.

```
Info_Box_1.displayHeight( '200' )

```

```
query.name.value( 'SMITH' )
```

```
Variables.Text_Box_1('Rosemary''s Baby')
```

## Expressions

Properties in action statements and value references in value attributes are expressions which are either string literals or property references. String literals must be single-quoted as shown in the examples above. Property references, used to get the current value of a property, consist of a property path with empty parentheses. If the target object is a field or variable that is able to hold a literal value, you can optionally address the value of the field by using or omitting the **value** keyword.

*Examples*

This action statement makes a browser control navigate to a web address held by a "Text Box 1" variable:

```
MyBrowser_1.Navigate( Variables.Text_Box_1() )
```

This value attribution assigns to a "Text Box 2" variable the database value currently retrieved into a NAME field:

```
Variables.Text_Box_2( query.name() )Variables.Text_Box_2( query.name.value() )
```

As an old-style, alternative way of expressing references to values held in column controls or variables, you can write a colon (**:**) followed by either an object path or, in the case of column controls, the name of the column that the control is based on. To make sure that the scope of the colon is unambiguous, surround the argument of the colon by double quotes:

```
:"query.field_1()"

```

```
:NAME
```

 