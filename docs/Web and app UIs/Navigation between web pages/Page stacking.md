# Page stacking

Page stacking is a manner of realizing page navigation in Web Designer. A hierarchy (stack) of pages is established, where one page is the underlying page of another page (the current page). Stacking can be any number of levels deep.

The current page has knowledge of the underlying page. It is able to refer to information about the underlying page. This contrasts with page chaining.

You can have a stack of multiple pages. The page at the top of the stack is the current page. The others are underlying pages of the current page and of each other.

Page stacking occurs when:

- A page class is embedded in (= inserted into) another page class. The embedded page class is the current page. The host page is the underlying page.
- An element in one page uses **navigateToLookup()** or **navigateToRelated()** to navigate to another page. The page being navigated TO becomes the current page. The page being navigated FROM is the underlying page.

![](/api/Web%20and%20app%20UIs/Navigation%20between%20web%20pages/assets/dc719457-1b3b-4328-a9ff-afa178bd3ea5.png)

In a page class, in Synchronization DataSource properties, you can refer to data sources of underlying pages using a special system of reference paths

When navigating to another page using **NavigateToRelated()** or **NavigateToLookup()**, the state of underlying pages is preserved on the client.

By contrast, when navigating to another page using **NavigateTo()**, no page stacking occurs. The previous page is replaced by the next page. No reference to the previous page or its data is possible after this replacement. However, if a page being navigated TO has a data source with the same name as a data source in the page being navigated FROM, runtime data will be copied from one page to the other. This is one way to implement wizard-style insertion of records across subsequent pages.

The actions **closePage()**,  **cancelPage()** and **acceptLookupValue()** remove the current page from the stack. No reference to the page or its data is possible after the action is performed.

 