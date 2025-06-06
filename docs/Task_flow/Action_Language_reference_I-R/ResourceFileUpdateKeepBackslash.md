---
id: ResourceFileUpdateKeepBackslash
---

# ResourceFileUpdateKeepBackslash()

Changes the value of a resource in the in-memory resource database, treating any backslash ( \\ ) as a literal.

*Syntax*

```
ResourceFileUpdateKeepBackslash( '*resource*' )

*resource*  :=  *name*:*value*
```

The required *resource* contains the resource name followed by a colon (:) and the new value to which the resource is updated.

*Example*

```
ResourceFileUpdateKeepBackslash( 'tempdir: c:\temp' )
```

 