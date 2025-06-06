# Component references and inheritance for dotNet

You can have a dotNet component 'A' *refer to* a dotNetcomponent 'B'. Such a reference allows you to use the methods and variables of 'B' in calls to 'A'.

It is also possible to have a component 'C' *inherit* another component 'D'. This inheritance causes 'C' to contain the methods and variables of 'D' implicitly.

### Component refers to other component

To have a dotNet component 'A' *refer to* a dotNet component 'B', all you need to do is to declare an object of type 'B' in the Program Source of component 'A', as the Example shows.

You cannot have reference circles. If 'A' refers to 'B' and 'B' refers to 'X', then 'X' cannot refer to 'A'.

*Example*

Component A:

```language-cs
using System;

public class A{
   public B b;

   public A(){
      b = new B();
   }

   public int AddOne(int val){
      return val + 1;
   }
   public int AddTwo(int val){
      return b.AddTwo(val);
   }
}
```

Component B:

```language-cs
using System;

public class B{
   public B(){}

   public int AddTwo(int val){
      return val + 2;
   }
}
```

To test, try these calls:

```
select A.AddOne(1);
select A.AddTwo(1);

```

### Component inherits from other component

To have a dotNet component 'C' *inherit* methods and variables from a dotNet component 'D', simply extend class C by class D:

```
public class C : D
```

Inheriting abstract methods is not supported at this time.

*Example*

Component C:

```language-cs
using System;

public class C : D{
   public C(){} 

   public string Hello(){
      return "Hello world";
   } 
}
```

Component D:

```language-cs
using System;

public class D{
   public  string Bye(){
      return "Bye world";
   }
}
```

To test, try these calls:

```
select C.Hello();
select C.Bye(); 

```

### Notes on name resolution

If 'X' *refers to* 'Y' or 'X' *inherits* 'Y', you can set Assembly References for 'X' to:

```
Y
```

This is optional. If you don't do this, the compiler will give you a warning.

If the compiler can't find a class within the Program Source of a component itself, it will automatically look for the class in other components within the same instance of USoft Definer.

A limitation is that the compiler will NOT look for the class in any interface components exposed by synchronised modules that your USoft Definer instance may consume.