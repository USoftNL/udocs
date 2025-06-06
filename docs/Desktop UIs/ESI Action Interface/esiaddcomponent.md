# esi-add-component()

*Syntax*

```
esi-add-component(<context id>, <class>, <name> [, <class2>, <name2>, ...])
```

**Description**

This action is only used for implicit controls.

This action will add an IMPLICIT component definition to a previously defined window class (esi-add-subclass(), or esi-add-info-window()). Note that this does not really instruct a component to be created by another class/component. It just provides a place to store configurationsfor the component IFit is created. If this component object is created, then it will be configured as specified.

To define that a component object is to be created explicitly by the ESI engine, use esi-insert-control instead. It is NOT possible to explicitly instruct ESI to create an implicit control).

The \<context id> specifies where in the existing hierarchy (previous calls to esi-add-component()) this component object should be added. A context identifier has the form:

```
*<application class name>*<window class name><component id>
```

where \<component id> is a series of component names, each preceded by a period.

- *\<name> indicates a class with name \<name>
- \<component 1>.\<component 2> indicates that \<component 2> is a component of \<component 1>

The \<name> is any text of no more than 92 characters, with only double quotes (") excluded.

If more than one pair of \<class> and <\name> is specified, all subsequent pairs will be added as a component of the predecessor.

```
esi-add-component(<context id>,<class1>,<name1>,<class2>,<name2>)
```

will add component \<name1> to the context specified by \<context id> and, if that was successful, add component \<name2> to the context specified by \<context id>.\<name1>.

Calling this action will implicitly start a transaction on your ESI repository. This action will only PREPARE changes in the ESI repository. It has no effect on your ESI repository, until you call esi-save().

A message will be issued:

- If the \<context id> cannot be resolved (error).
- If one component already exists and is not derived from the requested class (error).
- If all components already exist (warning message only, the action call does not do anything).