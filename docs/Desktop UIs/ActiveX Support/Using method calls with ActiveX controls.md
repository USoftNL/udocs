# Using method calls with ActiveX controls

Automated methods of ActiveX components can be called to:

- Call methods exposed by ActiveX objects within the same GUI class (info box, dialog, or control class).
- Call actions offered by native USoft objects within the same GUI class.
- Get or set the value of any property of ActiveX objects or native USoft objects within the same GUI class.

You can use action statements where a value is needed, for example:

```
MessageInformation('You are now at ' + :"MyBrowser.LocationURL()")
```

or where an action is needed, for example, on a button that has as its Action property:

```
MyBrowser.Navigate('http://www.usoft.com')
```

If you press this button, you will navigate to USoft's web site.