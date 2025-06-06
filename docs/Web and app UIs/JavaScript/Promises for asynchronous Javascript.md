# Promises for asynchronous Javascript

> [!NOTE]
> This article explains the idea of promises and tells you why and how to code .**then()**, **.catch()** and **.finally()** clauses in USoft web applications.
> It gives some explanation about USoft's [udbPromise](#The+udbPromise+object) object and how it is different from Javascript's standard Promise object.

**Promises** are a JavaScript feature that represents the eventual completion (or failure thereof) of an operation of an asynchronous nature.

Promises make web applications more responsive. They use as much of the browser's execution capabilities as possible. Promises have been integrated into every aspect of the USoft Web API.

> [!CAUTION]
> Promises in USoft can lead to unexpected results that are difficult to debug. To avoid this, make sure that you can predict the way in which operations in **.then()** branches follow each other. For details, go to the [Promises in USoft](#Promises+in+USoft) section of this article.

## A better alternative for asynchronous calls

Previous USoft versions relied on AJAX (Asynchronous JavaScript and XML). AJAX made it possible for the first time to retrieve data from the server asynchronously, in the background, without the need to refresh a web page, and without interfering with the display and behaviour of the existing web page.

But this technology was comparatively cumbersome. It left little room for flexibility. The next step in an asynchronous execution could only be executed from a .success() or .error() function in an options object passed to a function, resulting in ‘tree-like’ execution structures. If multiple nodes in such a tree required the same code to progress, this could result in duplicated code, or in the necessity to call independent functions.

Here is an example of this OLD usage. The error handling code must be duplicated because it may be called from two API functions: the **dsc.refresh()** function, and the **dsc.executeQuery()** function.

```js
$.udb('DEPT').executeQuery({
  success: function() {
    if ($.udb("DEPT").rowCount()>0) {        
      $.udb('MANAGER').refresh({    
        async: false,   //synchronous execution
        success: function() {    
          //....
        },
        error: function() {
          console.log("Something went wrong");
        }
      });
    }
  },
  error: function() {
    console.log("Something went wrong");
  }
});
```

 With promises, the code looks a lot simpler:

```js
$.udb('DEPT').executeQuery()
  .then(function() {
    if ($.udb("DEPT").rowCount()>0) {        
      $.udb('MANAGER').refresh();
    }
  })
  .then(function() {    
    //....
  })    
  .catch(function() {
    console.log("Something went wrong");
  });
```

The error handling code is no longer duplicated. Instead of deeply nested, indented function calls, you have a structure that looks a lot more like synchronous (single-lane) execution flow.

Calling a function asynchronously was already possible before USoft 10. The "async" option was used to indicate asynchronous handling and subsequent actions were defined in a success or an error function. This technique is still supported but the "async" option is now obsolete and you are encouraged to use .then() and .catch() in place of the success and error options, even if the old structures may be used in combination with promises.

## Promises in USoft

> [!WARNING]
> Don't just execute a function when you make a call to the USoft UDB library. That way, the function just returns undefined, not a promise.
> Instead, use the **return** keyword to make sure that you *return the promise:* the promise object that the UDB call evaluates to.
> This is the only way to guarantee that a chain of asynchronous USoft operations will execute as intended. This section explains.

In this example, a USoft web page has a button. When the user presses the button, the application commits whatever the user had been doing. Then, if this initial commit is successful, 3 further operations are executed in this order:

- A price is calculated for the current record.
- This price calculation is committed.
- The user navigates to a different page.

Note the **return** keywords introducing these 3 operations**:**

```js
$.udb.commit({ quiet: true })
  .then( function() {
	return $.udb.executeSQLStatement('calculate-price',
	  {
		hostvars: {
		  TOUR_ID: $.udb('TOUR').rows('current').cols('TOUR_ID').val()
		}
	  });
  })
  .then( function () {
    return $.udb.commit({ quiet: true });
  })
  .then( function() {
    return $.udb.navigateToRelated( "Tour Days of this Tour", { quiet: true } );
  });
```

The **return** keywords are necessary because they guarantee that further processing waits until the operation has returned a promise value.

Without **return**, the function simply returns the undefined value and not a promise. This is not what you want, because this way, you cannot know how the asynchronous operations will interact.

Let's first consider why the price calculation needs a commit. Web applications are stateless. USoft is built in such a way that pending data operations will be remembered on the client and re-sent with each next server call, thus mimicking SQL transaction handling as we know it from stateful applications. While executeSQLStatement() does not actually commit the calculation, commit could still happen later, for example when the user explicitly presses the Save button. But... in the example, in the next .then() branch, the application navigates away from the page. This causes any unsettled business in the previous page, in this case: the price calculation, to be completely annulled.

Next, let's see why **return** is essential to predict that this necessary commit is effective. Here is the same example code, but without **return** keywords:

```js
$.udb.commit({ quiet: true })
  .then( function() {
	$.udb.executeSQLStatement('calculate-price',
	  {
		hostvars: {
		  TOUR_ID: $.udb('TOUR').rows('current').cols('TOUR_ID').val()
		}
	  });
  })
  .then( function () {
    $.udb.commit({ quiet: true };
  })
  .then( function() {
    $.udb.navigateToRelated( "Tour Days of this Tour", { quiet: true } );
  });
```

With this code, the page navigation will be successful but not the price calculation. Why not the price calculation? The second commit will not wait until a promise returns from the executeSQLStatement branch. It will execute before the price calculation reports back that it has successfully completed. The second commit was coded specifically to commit the price calculation, but it will be ineffective in doing this. Then, in the 3rd operation, the user navigates away to a different page, annulling the price calculation forever.

You can inspect more closely what happens if you add log messages before and after each operation:

```js
$.udb.commit({ quiet: true })
  .then( function() {
    console.log('1');
	$.udb.executeSQLStatement('calculate-price',
	  {
		hostvars: {
		  TOUR_ID: $.udb('TOUR').rows('current').cols('TOUR_ID').val()
		}
	  }).then( function() {
	    console.log('2');
        });;
  })
  .then( function () {
    console.log('3');
    $.udb.commit({ quiet: true }
	).then( function() {
	  console.log('4');
    });
  })
```

Running this code will not commit the price calculation. It will produce the following on the console:

```
1
3
4
2
```

This shows that the commit branch (‘3’, then '4’) does not wait for the price calculation branch to complete. The price calculation branch will eventually complete (this is what produces '2’ in the log), but too late to be effective. If you navigate away after the commit, as in the earlier example, then the price calculation branch will probably be abandoned altogether: the number '2’ will never appear on the console.

Running the same code with the **return** statements added *will* commit the price calculation. It will produce the following on the console:

```
1
2
3
4
```

## How does a promise help you in USoft?

This section briefly discusses the general advantages of promises. Find out more from any textbook or tutorial on Javascript promises.

A promise comes into play when you call an asynchronous function that returns a Promise (or udbPromise, see below) object. This object is guaranteed to have one of 2 states: it will be either *fulfilled* (success, resolve) *unfulfilled* (failure, reject). It won't be fulfilled and then later rejected. If it's fulfilled, it's fulfilled only once.

This neat response structure simplifies error handling, especially if you have a sequence (*chain*) of multiple asynchronous calls that depend on each other's result.

You can react to a Promise coming back *fulfilled* by writing one or more **.then()** clauses.

You can react to a Promise coming back *unfulfilled* by writing one or more **.catch()** clauses. Do not confuse with the **catch(exception) { … }** Javascript block syntax.

You can add a **.finally()** clause that is executed *after* the **.then()** or the **.catch()** clause have finished executing. That is, the **.finally()** clause will execute regardless of the promise being fulfilled or not.

Order is important. The **.then()** clause must be placed before the **.catch()** clause. Otherwise, the **.then()** clause will only fire if an error occurs, and moreover, it will only execute after that error has been handled.

*Example*

First, you create a row in a data source on the current page, passing hard-coded column values for the new row. Then, if this is successful, you execute a query on the data source.

```js
$.udb("RESERVATION").rowCreate({
  rows:[
    { TOUR_ID: 51,
      MADE_BY: 18,
      DEALT_WITH_BY: 1 }
  ]
}).then(function(){
  return $.udb("RESERVATION").executeQuery()
})
```

> [!NOTE]
> If the row has a generated primary key value, executing the query is one way of getting this value displayed in the page.

## Where USoft implements promises

Below is an alphabetic list of USoft functions that return a promise. They are the functions that offer a 'promise’ option in their syntax.

From USoft 10.0.1I, instead of a standard Promise object, these USoft functions actually return a USoft-specific variation called udbPromise object. The small difference between Promise and udbPromise is explained later in this article. In USoft 9.1, these functions returned themselves, i.e. the 'this' object. For example, a data source collection returned that collection as a result. If these values are still needed for some reason, or if handling with promises is undesirable for some reason, then just set the ‘promise’ option to ‘false’:

```js
var rc = $.udb('DEPT').executeQuery({promise: false, async: false}).rows();
```

Some **.each()** iteration functions have a new ‘promise’ function parameter. Any **.then()** clause called after the **.each()** function is called after every promise has been settled (ie., has been either resolved or rejected). Here, too, you can pass the ‘false’ value to revert to pre-promise behaviour.

With the four navigation API functions:

```
$.udb.closePage()
$.udb.navigateTo()
$.udb.navigateToLookup()
$.udb.navigateToRelated()

```

keep in mind here that the** .then()** clause is executed on the target page, while the **.catch()** clause on the original page.

Here are the USoft functions that return a Promise (or: from USoft 10.0.1I: udbPromise) object by default:

|        |        |
|--------|--------|
|$.udb.acceptLookupValue(options)|dsc.executeQuery(options)|
|$.udb.cancelWindow(options)|dsc.gotoDataSet(dsi, options)|
|$.udb.checkData(options)|dsc.getDataSet(options)|
|$.udb.closePage(options)|dsc.refresh(options)|
|$.udb.commit(options)|dsc.rowCreate(options)|
|$.udb.executeSQLStatement(id, options)|rowSets.each(fn, promise)|
|$.udb.getMenu(options)|rowSets.execute(fn, promise)|
|$.udb.login(user, password, options)|rowSets.gotoDataSet(index, options)|
|$.udb.logout(options)|rows.each(fn, promise)|
|$.udb.navigateTo(page, options)|rows.refresh(options)|
|$.udb.navigateToLookup(page, options)|rows.rowDelete(options)|
|$.udb.navigateToRelated(page, options)|rows.rowRemove(options)|
|$.udb.rollback(options)|rows.select(options, val)|
|$.udb.groupRequests(fn, options)|rows.values(values, promise)|



## Upgrading to promises

Pre-USoft 10 asynchronous Javascript continues to run on USoft 10.

However, in USoft 10, promises have become the new standard. USoft recommends you use promises wherever possible. Upgrading seems rather straightforward but there are some important caveats.

In USoft 9.1 scripts, and to a lesser extent in USoft 9.0 scripts, the success function supplied to the options parameter is replaced by a **.then()** call placed after the API function. Similarly, the error function is replaced by a **.catch()** call.

Here is OLD usage:

```js
$.udb.executeSQLStatement( 'DeleteSAP', {
  hostvars: {'sapID': rc.cols('SUBJECT_ASSESSMENT_PERSON_ID').val(),
    'start_dat': rc.cols('START_DATE').val()
  },
  success: function() {
    $.udb('SUBJECT_ASSESSMENT_QUEST_PERSON_RCC').refresh();
  },
  error: function() {
    $.udb.rollback({quiet:true});
  }
});
```

Here is the NEW counterpart:

```js
$.udb.executeSQLStatement( 'DeleteSAP', {
  hostvars: {'sapID': rc.cols('SUBJECT_ASSESSMENT_PERSON_ID').val(),
    'start_dat': rc.cols('START_DATE').val()
  }
})
.then(function() {
  return $.udb('SUBJECT_ASSESSMENT_QUEST_PERSON_RCC').refresh();
})
.catch(function() {
  return $.udb.rollback({quiet:true});
});
```

Using success and error functions is still possible in this kind of code, but not encouraged. Generally, success and error functions are executed prior to .then() and .error() clauses, but the order may be difficult to determine.

## Debugging upgraded code

If you have difficulty upgrading existing code to promises, there are 3 things you can do:

- With functions that have a 'promise' option, you can set promise:false. This will cause the function to revert to its pre-promise behaviour.
- With iteration functions that have a new 'promise' function parameter, you can pass the 'false' value. Use this if execution deviates from expected behaviour.
- You can set the JQueryCompatibility publication configuration parameter in Web Designer to usoft9. This is a last resort, as it will turn off promise-related behaviour in the API functions across the board.

## The udbPromise object

From USoft 10.0.1I, instead of returning the standard Javascript Promise object, we return a USoft-specific object called **udbPromise.** This is just a thin wrapper around Promise that allows USoft to add some extra functionality to Promise. What it adds is that the *context* of execution of the asynchronous function is passed automatically to the **.then()**, **.catch()** and **.finally()** clauses.

This is convenient when calls to functions such as $.udb(*ds*).rowCreate() or $.udb.checkData() must be followed by further calls that must execute in the same context. Prior to udbPromise, context was not automatically preserved, so that a USoft developer had to preserve it by calling [$.udb.executeInContext()](/docs/Web%20and%20app%20UIs/UDB%20udb/udbexecuteInContext.md).

The problem that **udbPromise** solves is illustrated by the different outcomes of the following 2 snippets. In this example, the promise body contains a call to **setTimeout()**, which is an asynchronous call defined in the context of the global object (the window**object, in the case of a browser), so that it causes context to switch away from ApplicationFrame. As you can see, udbPromise solves this by passing the execution context as a separate argument.

*Standard implementation with Promise* 

```js
new Promise(function(resolve, reject) {
  $.udb.executeInContext( "ApplicationFrame", function() {
    try {
      setTimeout(function(){resolve()},1000);
    } catch(exception) {
        reject(exception);
      }
  });
})
.then(function(){console.log($.udb.currentFrameId)});
```

When you run this in a browser console, the following is logged:

```
> undefined
```

*Enhanced implementation with udbPromise*

```js
new udbPromise(function(resolve, reject) {
  try {
    setTimeout(function(){resolve()},1000);
  } catch(exception) {
    reject(exception);
  }
},"ApplicationFrame" )
.then(function(){console.log($.udb.currentFrameId)});
```

When you run this in a browser console, the following is logged:

```
> ApplicationFrame
```

 