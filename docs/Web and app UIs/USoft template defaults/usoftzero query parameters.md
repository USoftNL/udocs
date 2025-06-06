# usoft-zero query parameters

You can influence the behaviour in a web application based on the usoft-zero default by setting a number of **query parameters** in the URL.

## Default language

​With the usoft-zero template default, a multi-language application can be started automatically in the desired language. English and Dutch have been predefined. When browsing the UI, pass one of these query parameters in the URL, for English and Dutch respectively:

```
language=en
language=nl
```

You can add more languages as appropriate by populating the Language section in Definer.

The following table shows 3 different ways to set or switch the application language in an application based on usoft-zero. They take precedence in the order shown:

|        |        |
|--------|--------|
|language dropdown|The usoft-zero UI comes with a language dropdown on the menu and on the cover page. Chose the language from the dropdown.|
|URL query parameter|The application can be browsed with a language query parameter as explained in the text above this table.|
|extension property|You can add a "language” *extension property* in Definer and then assign a user-specific language setting to each runtime user in Authorizer. This is explained in the text below this table.|



At development time, USoft Definer allows you to declare *extension properties* for your application. At runtime, in USoft Authorizer, for each extension property, you can assign a user-specific value for each runtime user.

For details, see [Schemas and extension properties](/docs/Authorisation%20and%20access/Roles/Schemas%20and%20extension%20properties.md).

Here is a quick way to create an extension property called "language” in USoft Definer:

```sql
invoke xml.import with
select  '<Extension_Properties documentName="Extension Properties">
    <T_EXTENSION_PROP NAME="language" CONTEXT="U" DEFAULT_VALUE="en" DESCRIPTION="" ACTIVE="Y"/>
</Extension_Properties>';
commit;
```

## Default start page

> [!WARNING]
> This property of the usoft-zero template default applies only to your Development environment.

In Development, when testing and debugging, it can be a great help to get the application to go automatically to the page that you are working on. This feature is only appropriate in Development.

When browsing the UI, pass this query parameter in the URL:

```
page=*page*
```

On startup, the application will now browse *page.*

This will only work if the browsed page does not take information from another page that is intended to be navigated as a previous step. If you have a DetailPage PERSON with details about a specific person selected previously in your application in an InfoPage PERSON, then (the names are just a suggestion):

- Create subclasses “InfoPage**_1** PERSON” and “DetailPage**_1** PERSON”.
- Make sure your cover page navigates to "InfoPage**_1** Person” and not the default ”InfoPage PERSON”.
- Make sure your "InfoPage**_1** PERSON” navigates to "DetailPage**_1** PERSON” and not to the default "DetailPage PERSON”.

You are now ready to develop, test and debug the solution by browsing with option

```language-http
?page=InfoPage_1%20PERSON
```

*Example*

In this example, the default start page option is combined with the [auto login option]():

```language-http
http://localhost:8096/myservice1/myconnection1/?autologin=TEST_USER_2&page=InfoPage_1%20PERSON
```

## Auto login

> [!WARNING]
> This property of the usoft-zero template default applies only to your Development environment.

In Development, when testing and debugging, having to constantly repeat the login ritual can be annoying. In an application based on the usoft-zero default, you can create a set-up that removes this necessity. This feature is not safe, and therefore only appropriate in Development.

In USoft Authorizer, define an Application User who has a password equal to the username.

When browsing the UI, pass this query parameter in the URL:

```
autologin=*username*
```

On startup, the application will attempt to login using *username* as the username and password.

The login page will check for the ‘autologin’ URL parameter. If it is available, the login attempt is automatically based on it. The application will automatically re-login when it is in the logged-out state.

*Example*

```language-http
http://localhost:8096/myservice1/myconnection1/?autologin=TEST_USER_2
```

## Connection not timed out

An application based on the usoft-zero default will keep the connection alive. The application will not log out on a time-out.

This is a default behaviour not influenced by URL query parameters.

This behaviour is user-friendly for developers and possibly also for end users.

## Ids for external test tools

When recording tests with an external test tool (eg., Selenium), it is preferable that elements that are referenced in the test have an id. This makes it easier to record and playback the test. Now, you can add a query parameter to the URL:

```language-http
test=yes
```

that causes ids to be added for the following fields:

- Search fields on an Info page


- Fields in the table of an Info page or related card


- Edit fields on the offcanvas on the right.