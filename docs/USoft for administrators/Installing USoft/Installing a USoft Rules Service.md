# Installing a USoft Rules Service

A USoft Rules Service is an API for connecting to the Rules Engine of a USoft application for web-based (as opposed to: client-server) access:

- USoft-defined web pages.
- Web services provided by the USoft application.
- Services offered by a USoft Services Platform.

Once installed, a USoft Rules Service is listed in the Services console of the Control Panel (Administrative Tools).

Before you install a USoft Rules Service, you must determine which port number it is to use. This must be a port number that is not already in use. It is possible that you need multiple Rules Services on the same machine (the same Rules Server).

> [!NOTE]
> The USoft Blend scripting framework and the USoft Delivery Manager tool offer multiple utilities for scripting Rules Service installations.

## Installing a USoft Rules Service on Windows

To install a USoft Rules Service on Windows, use the USoft Binder tool:

1. Open the USoft Binder file that gives access to the USoft application.

2. Using Item, New, create a Rules Service item.

3. Right-click on the new item, (optionally) change the default Service Name, specify the Port Number, and click the Install button.

4. Press the Start button, then press the Configure button.

A sequence of browser-based configuration dialogs appears.

5. Go through the wizard, using explanations provided for each field. Continue until you have pressed the Run button.