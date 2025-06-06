---
id: ActiveX_Control_property_dialogs
---

# ActiveX Control property dialogs

An ActiveX control may have its own property dialog. You can access these dialogs from the Property Inspector by clicking the ellipses (…) button. Any changes that you make will be stored by the Windows Designer and displayed in the Property Inspector on the General tab page.

The Windows Designer supports events of ActiveX components that appear in the Windows Designer catalog as normal action list properties. This means that you can set the properties for the ActiveX controls from the Property Inspector. There is also a mechanism for simple event-handling: the properties on the Behavior page are the events of the ActiveX object. See the documentation for the ActiveX component concerned for more details of supported events.


:::note

All properties are Text properties, which means that they will only be checked at the moment that you set them: there is no editing assistance.

:::

Help text provided for an ActiveX control (if any) depends entirely on the control itself. If Help was written for the control, it may not be available if the control was not properly downloaded or otherwise copied onto the local system.

Generally, if contextual help text was written for individual properties, this text should be accessible from within the Windows Designer by clicking the What's This icon in the top right corner of the Property Inspector window, and then clicking on the property name. Some ActiveX controls come with full documentation contained in a help file. This file should be started from the file manager program.