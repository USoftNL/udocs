# System-defined publication properties

A publication configuration has a number of system-defined publication properties. When pages are published, the values of these properties are substituted in published files.

Publication properties are displayed in the Properties tab in the bottom half of the Publication Configurations tab or window. Find this tab or window by choosing Publish, Publication Configurations from the main menu.

**Benchmark**

Specifies whether or not the Benchmark Control scripts should be loaded in the application. The possible values are:

- **false** (the default): Benchmark scripts will not be loaded and run, and any Benchmark Control defined on a page will not be displayed.
- **true**: The scripts are loaded, and any page being run with it will be enhanced by the Web Benchmark scripts. The Benchmark Control will also be visible, if present on your pages.

To add the Benchmark Control functionality to your application, use the ApplicationPageWithBenchmark page as the StartPage, or see How to add the Benchmark Control to an existing application.

**BrowserTitle**

Specifies the title that is displayed at the top left of the browser when using the Web application. The default value is USoft Web Application.

**DefaultPassword**

Specifies the password for the default user. This property is optional.

**DefaultUser**

Specifies the user who gets access to the generated web pages by default. The credentials provided here and for the DefaultPassword property are used to log on automatically to pages for which the Logon Required property has been set to Yes. The use of DefaultUser/DefaultPassword ensures that the application will not display login dialogs.

----

![](/api/Web%20and%20app%20UIs/Publication%20configurations/assets/85199e84-dd1b-4d5a-9a48-83bbb0f4a7a9.png)



**Framework**

Dropped in USoft 11.0. Specifies the initial web design framework that you use for designing your published material. For more information, go to Frameworks.

**jQueryCompatibility**

Dropped in USoft 11.0. Handles compatibility issues with earlier versions of Web Designer applications. If you do not have backward compatibility issues, set this property to 'default'.

Possible values other than 'default' are: 'usoft7', 'usoft8', 'usoft9'.

For example, when this property is set to 'usoft7', buttons have the same appearance as USoft7 Web applications.

**jQueryUITheme**

Dropped in USoft 11.0. Specifies the theme that is used to display jQuery UI objects. Possible values of the property are:

- none: no jQuery UI is included
- local
- base (the default)
- Predefined theme definition from http://jqueryui.com/themeroller, or one you have made yourself. See How To Apply A Different jQuery Theme.

----

**LogFolder**

Specifies the default Logging Folder. If a value is not specified for this property (default), logging will be to the \<publication_folder>/logs folder.

**LogInPage**

Specifies the Login page. The default is the ApplicationLogInPage page.

**LoggedOutPage**

Specifies the default page shown when an end user has logged out from the web application. The default is the LoggedOutPage page.

**StartPage**

Specifies the page that end users see once they are logged in into the web application. The default is the ApplicationPage page. When using the Benchmark Control (Benchmark property must be set to 'True'), use the  ApplicationPageWithBenchmarkPage as default instead.

> [!NOTE]
> Run-time, you can overrule the value for the StartPage property by adding the following parameter to the URL in the Address bar of your browser: ?$StartPage.