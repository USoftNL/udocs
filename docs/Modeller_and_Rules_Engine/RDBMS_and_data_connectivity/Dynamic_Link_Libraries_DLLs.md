---
id: Dynamic_Link_Libraries_DLLs
---

# Dynamic Link Libraries (DLLs)

You can write your own DLLs, and connect them to your application using the DllExecute() global action. The USoft API offers two functions to let your DLL communicate with USD through the resource mechanism. To use these you must include USAPI.H in your source file (in the API directory) and link the USAPI.LIB import library. USoft API can be used for all Windows Development Languages that can generate DLLs with PASCAL calling convention. For more information, and for some examples see the ACDLL.C file in the EXAMPLES\\API directory.

```
BOOL WINAPI USoftSetGlobalResource(LPSTR resourceName, LPSTR resourceValue)
LPSTR  resourceName:  A non-NULL identifier string.
LPSTR  resourceValue: A non-NULL value string.

```

This function returns TRUE on success and FALSE on failure. If the resource does not exist, it will be created.

```
BOOL WINAPI USoftGetGlobalResource(LPSTR resourceName, LPSTR* resourceValue)
LPSTR  resourceName:   The non-NULL identifier string.
LPSTR* resourceValue:  The non-NULL pointer to the value string.

```

This function returns TRUE on success and FALSE on failure (when the resource is not found).

Both API functions perform some global checking on the parameters and fail if both parameters are NULL or when "resourceName" is an empty string.

> [!NOTE]
> USoft Developer for Windows supports calls to external functions in a DLL. This must be a 32 bit DLL.

*Example*

An example using the USoft API and the DLL-function is delivered in the API directory. The example was made with MSC version 7. After creating ACDLL.DLL the following actions can be executed from the SQL Command window:

```
action DllExecute(AcDll.dll, ActionDll)
action DllExecute(AcDll.dll, Initialize)
action DllExecute(AcDll.dll, Realize)
action DllExecute(AcDll.dll, Realize, 100, 200)
action DllExecute(AcDll.dll, Destroy)

```

> [!NOTE]
> The Realize example also shows how to convert a USoft parameter list to a customized parameter list.