---
id: Component_error_handling
---

# Component error handling

When a method is being invoked, RDMI supports the principle of exception handling for reporting errors. Subsequently, if the chosen middleware supports it, a message can be passed on with the exception to explain in detail what has gone wrong. Following the exception, the rules engine will display the returned message and will discontinue the transaction.

Here is a Visual Basic example of raising an exception.

```language-vbscript
Public Function SquareRoot(par1 As Integer) As Double
   If par1 < 0 Then
      Err.Raise vbObjectError + 1050, "USMath", "Value must be positive."
   Else
      SquareRoot = sqr(par1)
   End If
End Function
```

## Showing or suppressing component error messages

With RDMI, the new Show Component Middleware Errors application behavior property is introduced. By setting this property, developers can decide whether or not error messages returned by the COM middleware component should be displayed. A USoft message will be displayed in any case.

To show or suppress component error messages:

1. Open the Authorizer.

2. From the Authorization tab of the catalog, choose the appropriate Deployment Configuration.

3. Set the value of the Show_Component_Errors additional parameter to True or False.

4. From the menu bar, choose File, Save All, to save this setting.

## RDMI error messages

### RDMI_MIDDLEWARE_ERROR_TEMPLATE (60101)

Container message used to display errors from the component middleware layer.

### RDMI_INIT_DRIVER_FAILED (60102)

This message is returned if RDMI could not load and/or initialize the DLL which deals with the communication with the selected middleware. This can happen if the selected middleware is not installed, or if the initialization of that middleware fails. Users should check the middleware installation.

### RDMI_INVOKE_OPERATION_FAILED (60104)

Generic message returned if USoft is not able to call the specified method. The creation of the component was successful, but the calling of the method was not.

If the Show Component Errors deployment configuration parameter in the Authorizer is set to True, more specific messages returned by the component may also be displayed. If the property is set to False, users can check the message history for details.

### RDMI_TYPE_INSTANTIATION_FAILED (60105)

Generic message returned if USoft is not able to create the specified component.

If the Show Component Errors application property is set to True, more specific messages returned by the component may also be displayed. If the property is set to False, users can check the message history for details.

The error can have several causes: the component may not exist, the physical name as specified in the definer may not be correct, or perhaps a remote machine where the component resides is not switched on.

### INVOCABLE_NOT_EXIST (60106)

The specified method or protocol does not exist for the specified component. Users should check definitions of their RDMI components in the Definer.

### PARSE_ERROR_INVOCABLEPARS (60107)

The number of runtime input parameters does not match the number of input parameters as defined in the repository (i.e., in the Definer) for the specific method or protocol. If an association with the query protocol was defined, users should check parameters for the EXE method of the protocol association.

 