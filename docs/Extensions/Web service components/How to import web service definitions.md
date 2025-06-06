# How to import web service definitions

To import web service definitions:

1. In the Definer catalog, click the Modeller and Rules Engine tab page.

2. Expand the Components folder.

3. Right-click the Web Service Components folder, and select New Web Service Component.

This wizard contains six dialogs. The first dialog is the Import Web Service dialog.

4. In the Import Web Service dialog, specify where you want to import from.

You can import from the UDDI Business registry, or directly from a WSDL location.

The WSDL File location can be either an HTTP address or a file name with path where the WSDL file can be found. With the Browse button, you can only fill a file path. If a URL is needed, you have to type it in. The location that you use here must be accessible to the users that access this web service component.

Default Proxy settings are filled in. See also Proxy Server Settings .

5. If you are using an authenticated proxy server, specify a User Name and Password for the user that is about to query the Web Service for a WSDL file. Only basic authentication is possible.

6. Click Next.

If you have chosen WSDL, read further with step 12.

7. In the Query UDDI Businesses dialog, select a predefined UDDI Business Registry from the dropdown list, or enter a URL manually.

8. Specify a search string for the UDDI Business Name, and click Find.

You can use wildcards like '%' in the search string. UDDI Business can be searched once a UDDI Business registry and a business name are provided.

9. If there are UDDI Businesses found, select one from the list, and click Next.

10. In the Web Services Dialog, select a Service Name, and click Next.

11. In the Web Service Bindings dialog, select a Binding record.

By clicking the Show technical model button, you can view the Definition URL (if it exists), or the Access Point otherwise. In some cases, the Access Point contains the Definition URL.

Click Next.

If the Definition URL does not exist, and Access Point is not a WSDL file, read further with step 13.

12. In the Web Service Methods dialog, select a Method Name.

By clicking the Show parameters button, you can view the parameters of the selected method.

Click Next.

13. In the Component Table Options dialog, you can change the internal name of the default Web Service Name, configure it as a component table, and specify Component Table details.

The Query method is the Web Service method that is called when querying the component table.

For more information, see also: "Calling a Web Service Using a Component Table".

14. Click Finish.

The Web Service component, its methods and parameters are created.