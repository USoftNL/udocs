---
id: pcdefinebooleanflags
---

# pc:define-boolean-flags




:::note

This article is about the **pc:define-boolean-flags**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:define-boolean-flags**

Adds items to the list of pairs of strings interpreted as boolean true() and boolean false() by USoft Blend flag-based string-to-boolean conversion. By default, this list is composed of the following 2 pairs:

```
true     false
yes      no
```

There is no return value. You can get the list of items by calling the booleanflags:Show() function.

*Syntax*

```
<pc:define-boolean-flags>
*flag*
     ...
</pc:define-boolean-flags>

*flag*  ::=  

    <flag> true="*true-string*" false="*false-string*" </flag>
```

*Example*

The result of this Example is that the following strings are (case-insensitively) considered by USoft Blend flag-based string-to-boolean conversion:

```
true       false
yes        no
Accepted   Declined
Approved   Rejected
```

```language-xml
<pc:define-boolean-flags>
     <flag true="Accepted" false="Declined"/>
     <flag true="Approved" false="Rejected"/>
</pc:define-boolean-flags>
```

 