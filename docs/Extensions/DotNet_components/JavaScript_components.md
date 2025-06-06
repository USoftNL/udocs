---
id: JavaScript_components
---

# JavaScript components

A  **JavaScript component** is an RDMI component for which the Program Source is expressed in the JavaScript language.

You can define a JavaScript component in 2 different ways:

- By starting from a generated stub. You provide name, method and parameters. USoft automatically generates and compiles a JavaScript stub that you can then customise.
- By starting from JavaScript code. You provide JavaScript Program Source code. USoft compiles the code for you.

The purpose of defining a JavaScript component is that you can make RDMI calls to its methods in your USoft application.This technique is analogous to defining and calling C# components.

## Defining a JavaScript component

To define a JavaScript component:

1. Open the JavaScript Components window from the Definer catalog or main menu. From the Definer catalog, on the Model and Rules tab, expand the Components and DotNet Components nodes and double-click the JavaScript Components node. From the Definer main menu, choose Define, RDMI, DotNet Components, JavaScript Components.
2. Provide a Name for the component, for example, MYJAVASCRIPT. Provide the component code in the Program Source pane. Here is an example of valid program source code:

```js
class MYJAVASCRIPT
{
  myeval(myparam)
  {
    return eval(myparam);
  }
}
```

3. Press the Check button in the top-right corner of the window. When asked “Do you want to generate new methods and parameters?”, answer Yes. See that the MYEVAL method is generated in the lower part of the window. Save work.
4. Open the application and test-run the component. Either of the following should yield '2’ in the case of the example:

```sql
invoke myjavascript.myeval with select '1 + 1';

select myjavascript.myeval( '1 + 1' );
```