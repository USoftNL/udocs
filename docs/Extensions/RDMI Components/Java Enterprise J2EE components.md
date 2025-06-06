# Java Enterprise (J2EE) components

USoft Developer supports Java (Enterprise) components, referred to as J2EE components. USoft's support for components is realized using RDMI technology, in which methods of components can be invoked by rules, allowing USoft applications to interact with other applications.

The choice to support Java is based upon the ease of use of the Java language, the versatility and completeness of the available class libraries and the possibility of running Java components in a scalable architecture (Enterprise Java Beans, or EJB). Another advantage of Java is that the Java runtime environment is supported on nearly all computer platforms. This is important since the USoft Rules Engine is available on various platforms. In contrast to COM components, J2EE components can be invoked by Rules Engines running on any of the supported platforms.

All the definitions for J2EE components that are to be used within an application are defined in the J2EE Components window in the Definer. Choose Define, RDMI, J2EE from the Definer menu bar to access this window.

The J2EE Components window contains five tab pages. For help with completing the fields in these tab pages, use the Definer's What's this? help.

In general, the first step when defining a RDMI J2EE component is the definition of the constructor, which specifies how the component is created by the Rules Engine at the time that it is needed. A constructor for an RDMI J2EE component is defined by using a method name that matches the name of the component itself.

## Defining a method

 Methods of RDMI J2EE components can have any name except the name of the component itself. The method names are in upper case. The physical methods chosen using the Method Lookup wizard can refer to class methods, instance methods, class fields, or instance fields. Class methods and fields are recognized by the Java package name in front of the method itself whereas instance methods and fields are recognized by the default instance name "this" in front of their method name. Some examples follow.

A physical class method:

```
locale=java.util.Locale.getDefault()
```

A physical instance method:

```
this.parse(:0)
```

A physical class field:

```
datestyle=java.text.DateFormat.MEDIUM
```

A physical instance field:

```
max=this.MAX
```

## Passing arguments to methods

There are various ways to pass arguments from RDMI to J2EE component methods, literal values, placeholders and argument vectors. These are described in the "Method Invocation Syntax" section. The Method Lookup wizard automatically shows the type of argument (placeholder or argument vector) and converts the argument to a Java type.

## Limitations

The physical method calls use the same syntax as would be used in Java but limited to a single method invocation (e.g. object.toString() is allowed but object.toString().toLower() is not allowed).

The physical method syntax does not support formal declaration of objects. In other words, all variables assigned in the physical method syntax belong to the Java class: Object.

## Debugging J2EE components

 After defining a Java component in USoft, you may need to debug your component code, using an external debugging tool.

When calling a Java component, USoft starts a Java Virtual Machine. The external debugger needs to communicate with this Java Virtual Machine. For debugging purposes, you need to start this JVM with additional startup parameters.

The communication between debugger and the Java Virtual Machine uses a port number, for example: 8888. In this case, you need to specify the following resource setting in the usdiw file (for client-server applications), or in the usdi file (if the Rules Service is used):

```
*java.vm.extraStartOptions: -Xdebug |
-Xrunjdwp:transport=dt_socket,address=8888,server=y,suspend=n

```

> [!NOTE]
> You can also specify other startup parameters for the Java Virtual Machine. Refer to your Java documentation for details.

## Method lookup wizard

 The definition of method calls at development time is made much easier by the Method Lookup Wizard. This wizard offers:

- Lookup of Java archive files and Java packages.
- Lookup of available classes.
- Lookup of constructors, fields and method.

To use the Method Lookup Wizard:

1. From the Definer menu bar, choose Define, RDMI, J2EE Components.

2. Execute a query to retrieve the component that you want to work with.

3. Click the Lookup button next to Physical Method on the Method tab page. The first of the Method Lookup Wizard pages appears.

The first page of the wizard allows you to select a Java package name or a Java archive name to limit the number of component classes that will be retrieved. If you supply a Java archive, that archive should be in the class path so that it is visible in the Definer. You can then select this archive name on the first wizard page.

4. Click Next. The second Wizard page appears.

The second wizard page displays all the class names that were selected using the first wizard page.

5. From this list, one class can now be selected.

6. Click Next. The third and final wizard page appears, displaying all fields, methods and class methods of the class selected in the previous step:

You can recognize the physical constructors of the Java components by their syntax. Their syntax is:

```
 this=new java-package-name.method-name(argument, ...)
```

7. Select one of the methods and click Finish to insert the selected method into the Physical Method field of the J2EE Components window. This causes the current content (if any) to be overwritten. If this is not what you want, copy and paste the Method from the wizard to the Physical Method field.

8. The method selected from the wizard passes RDMI parameters sequentially via placeholders. For example in:

```
this=new com.usoft.connectors.Properties((U):0)
```

The ":0" will pass the first parameter of the parameter. You can edit the method to pass parameters in a different order or to pass literal values. For example, a literal value (a file name in this example) could be passed as follows:

```
 this=new com.usoft.connectors.Properties((U)"c:\props")
```

## Method invocation syntax

 This topic describes what is needed to define the methods of Java components for RDMI. You can use the Method Lookup wizard to retrieve the method definitions from Java classes.

An imported Off the Shelf component can be used as an example of how the RDMI tables are populated. Choose Define, RDMI, J2EE from the Definer menu bar and in the resulting window you can see the syntax that physical method entries use to define the mapping for the methods of components.

For calls to J2EE, this syntax is a very limited subset of the Java syntax itself.

An RDMI method can map onto a single Java physical method in the same way that RDMI works for COM, but Java method calls always include either a class or an object reference. The syntax for the Java physical method is:

```
{ class | object } . physical-method-name
```

All RDMI parameters are passed to the actual call without explicitly specifying them in the physical method (classic RDMI style). The mapping of argument types is:

- RDMI String -> Java String Object
- RDMI long integer-> Java Integer Object
- RDMI double -> Java Double Object
- RDMI Date -> Java Util Date Object
- RDMI Boolean -> Java Boolean Object

For example:

```
java.lang.System.getProperty()
```

Arguments can be explicitly passed via a placeholder that represents the RDMI variable. The syntax is:

```
{ class | object } . {physical-method-name} ( :n, :m ... )
```

For example:

```
java.lang.Integer.parseInt(:0)
```

parses a string in argument :0 into an integer.

Arguments can be casted to non-RDMI compliant Java types. The syntax is:

```
{ class | object } . physical-method-name ( (cast-specifier):argument, ... )
```

For example:

```
java.lang.Integer.toHexString((i):0)
```

creates a hexadecimal representation of the integer in :0.

Here the Integer is casted to a Java native integer. Without the cast, the native method would be called with a Java Integer Object as its argument. Java would return an invalid method call

> [!NOTE]
> See "Typecasts" for more information on the use of typecasts in method invocation.

Possible type casts are specified in the typecast appendix.

Literal arguments are understood.

For example:

```
java.lang.Integer.toHex((i)"15")
```

Return values of method calls can be assigned to transient objects instead of being returned as an RDMI result. For example:

```
 myfile=java.lang.File.createTempFile(:0, ".txt")
```

The myfile object can be used during the lifetime of the RDMI object, so that, for example, another RDMI call can make the call:

```
 myfile.exists()
```

A single RDMI method can map on multiple physical methods. New lines separate the physical methods. The result passed to RDMI is the result of the last call that returns a result. For example:

```
myfile=java.lang.File.createTempFile(:0, ".txt")myfile.exists()

```

All arguments may be passed into an array to a call as follows:

```
com.usoft.connectors.JdbcTable.InsertRow(argv)
```

where **argv** is mapped onto a Java Array of String objects ( **String[]** ). 

This syntax makes it easy to define generic components that inspect their arguments before processing them. This includes the possibility of using a variable number of arguments. For example, EAI table components can implement their QueryExe method by a physical method:

```
somejavacomponent.QueryExe(argv)
```

The somejavacomponent component, for example, processes its arguments by looping over the argument vector as in:

```
for (int i=0; I < argv.length; I++) process(argv[i]);
```

## Typecasts

Arguments passed in RDMI methods often need to be typecast to an appropriate Java type. Typecasts serve to convert method call arguments to the appropriate Java types. They are applied in physical method definitions in RDMI component definitions. For example, one could pass a string containing an integer to a Java method in one of the following ways, in the RDMI physical method definition:

```
new java.math.BigDecimal("10.123" )
```

In the case above, the constructor method of BigDecimal is invoked to accept a string.

```
new java.math.BigDecimal( (double)"10.123")
```

In this case the constructor method of BigDecimal is invoked to accept a double. The typecast (double) converted the string "10.123" to a double and is passed as a double precision floating point number to the BigDecimal constructor.

More complex typecasts are also used. For example, consider a physical constructor that deploys a hashtable:

```
my_hashtable=new java.util.Hashtable()
```

Whenever the hashtable itself is passed as an argument, either in a subsequent call to a Java method in the constructor or in another RDMI physical method definition, the argument has to be typecasted. The reason for this is that the newly created object my_hashtable is known to the RDMI system as a generic object and not as a hashtable. So in a subsequent call to a Java method, the  my_hashtable object would be accessed and passed as in the following example, taken from the physical method of an RDMI component for the invocation of an enterprise Java bean:

```
my_hashtable=new java.util.Hashtable()   
my_hashtable.put((O)javax.naming.Context.INITIAL_CONTEXT_FACTORY,(O):0)   
my_hasttable.put((O)javax.naming.Context.PROVIDER_URL,(O):1)   
ctx = new javax.naming.InitialContext((Hashtable)my_hashtable)

```

In this case, my_hashtable is created, populated and typecast and passed in the last line. Whether the typecast is needed depends on the argument definition in the invoked Java method, it may accept an Object, it may only accept a specific class. Note that :0 and :1 refer to the first and second RDMI arguments.

The RDMI Java Invoker (internally this software package had the name "joker") software has a table with common typecasts and aliases for common typecasts. For example, a typecast (java.lang.Integer) is in this table but also the alias: (Integer) and (I). The basic typecast (int) has alias (i).

The Definer/RDMI/J2EE method lookup wizard automatically inserts the appropriate typecasts.

The predefined typecasts can be listed using the following invocation:

```
com.usoft.joker.Joker.showCasts()
```

To show the typecast list, this line can be added as a physical method to an RDMI component in the definer and the RDMI component method can be invoked in an application. Alternatively, the JVM Off The Shelf component contains a generic method to invoke methods in an application, Thus, adding JVM to a test application allows application time invocations of Java methods as shown in the following examples that can be run in SQL Command:

```
SELECT jvm.call( 'com.usoft.joker.Joker.showCasts() U' );
```

Where the "U" at the end denotes that the result is supposed to be casted to a string, otherwise a Java Object would be returned.

It is possible to add typecasts to the typecast table, typically this would be applicable in a constructor of an RDMI component that uses the user-defined cast in one of its (physical) method definitions.

```
com.usoft.joker.Joker.addCast( user defined cast specification )
```

For example, to add a typecast (my_string), type the following statement in SQL Command:

```
SELECT jvm.call ('com.usoft.joker.Joker.addCast("my_string:java.lang.String")');
SELECT jvm.call ('com.usoft.joker.Joker.showCast("my_string") U')

```

To look up all casts associated with strings, using a regular expression, type the following in SQL Command:

```
SELECT jvm.call ('com.usoft.joker.Joker.showCast(".*ring.*") U')
```