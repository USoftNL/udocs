---
id: DotNet_NET_components
---

# DotNet (.NET) components

DotNet (.NET) is a Microsoft software framework that supports of a variety of programming languages. These include C#, F#, C++, (a modern version of) Visual Basic, and JavaScript.

Class libraries in .NET can often be used from multiple languages. Not every library is available in every context. .NET comes in multiple versions and variants, including .NET Core (for mobile and Linux platforms), but also versions for Windows machines that offer more extended functionality, for example ASPX.

USoft offers extensive functionality for integrating .NET code with the USoft Rules Engine. To do this, in USoft Definer, you define a .NET component. .NET components in USoft are RDMI components. As such, they may be called from many USoft SQL-based contexts, including constraints that implement rules.

> [!WARNING]
> A .NET component will raise errors if you started the USoft executable (eg., Usd.Exe, or if started from USoft Binder, usbinder.exe) from an abbreviated file path, eg., "C:\\PROGRA~1”, as opposed to a full file path, eg., "C:\\Program Files”.
> In older USoft versions, if you start from a Binder file (.usb), the value of the registry key:
> may be an abbreviated path. This may be the case if you initially installed USoft in a path containing a space, eg., "C:\\Program Files".
If this is the reason why a .NET component raises errors, the workaround is to change the value of the registry key to a full path.
> From USoft 10.0.L, USoft Binder will internally expand abbreviated paths to full paths, thereby resolving this issue automatically.

USoft supports different types of .NET component:

|**.NET Component Type**|**Expression language**|
|--------|--------|
|C# component|C#      |
|JavaScript component|JavaScript|
|UBlend component|USoft Blend script|
|Visual Basic component|Visual Basic|
|Web Service Client component|SOAP    |
|XSL Stylesheets component|XSLT 1.0|



> [!WARNING]
> In addition to these 6 types, the Language dropdown box in the Components windows also shows the XML value. This value is reserved for future use. Currently, USoft sets Language = XML if the Program Source is recognised as XML but not as XSLT.

All of these types use .NET technology, but in very different ways:

- The C#, JavaScript, and Visual Basic types give you familiar or "classic" code embedding. On the basis of the object-oriented code that you declare, USoft Definer extracts method names and parameters, and these methods become callable from USoft contexts using function call syntax.
- The Web Service Client allows you to call a third-party SOAP service.
- The UBlend and XSL Stylesheets types offer more USoft-specific implementations based on XSLT that use .NET either under the hood or for callable functions.

## Argument type mapping for dotNet

The following table shows the mapping between RDMI argument types and .NET argument types:

|**RDMI Type**|**.NET Type**|
|--------|--------|
|String  |String, string|
|Boolean |Bool, Boolean|
|Date    |DateTime|
|Double  |Double, double|
|Long Integer|Int32, int, long|
|Binary Object|Byte[], byte[]|
|Variable|Object[]|



Only those .NET types listed above are supported in the communication between USoft and .NET.

## Static members

A C# class can contain static or non-static members. A static member belongs to the class rather than to the object of the class. That means that when calling from USoft a static member of a stateless component, no object will actually be created and no constructor will be called. When calling from USoft a non static member an object will always be created (even for stateless components) and the default constructor will be called.

 