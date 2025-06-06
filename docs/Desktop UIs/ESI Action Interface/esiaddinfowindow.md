# esi-add-info-window()

*Syntax*

```
esi-add-info-window(<new info window class name>, <base table class name>, <style class name>)
```

**Description**

This action adds a new info window class definition, DERIVED from a subclass of the built-in Base Table class and from one of the style classes. The \<new info window class name> parameter must be unique with respect to all info box and dialog classes. The \<base table class name> parameter must specify a Base Table class name (to indicate which Base Table subclass you want to use). The \<style class name> must specify the name of a style class. This can be either one of the predefined style classes or a user-defined style class—see esi-add-subclass(). You are NOT allowed to call this action if there is an open transaction on your repository.

This action enables you to add new window class definitions by multiple inheritance from a style class and a Base Table class.