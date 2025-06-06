---
id: esiaddsubclass
---

# esi-add-subclass()

*Syntax*

```
esi-add-subclass(<new window class name>, <window class name>)
```

**Description**

This action adds a new info box or dialog class definition, derived from an existing one. The \<new window class name> parameter must be unique with respect to all info box and dialog classes. The second parameter must not be one of the Base Tables classes (i.e. not a direct subclass of the Base Table class). You can use this action to:

- Create a window class similar to an existing window class.
- Create a new style class as a subclass of one of the four pre-defined style classes.