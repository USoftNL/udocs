---
id: Getting_started_with_Web_Benchmark
---

# Getting started with Web Benchmark

To get started with USoft Web Benchmark, add the Web Benchmark control to your web application:

## Using a script

1. Add the following code to CustScript.js:

```js
function applicationOnloadActions(){
  //this function is called upon the onload of every page in the application
  $(":BenchmarkControl").remove();
  $.udb.ui.core.addControl({
    "BenchmarkControl":{
      "name":  "BenchmarkControl",
      "props":{
        "class": "BenchmarkControl"
      , "id": "BenchmarkControl"
      , "loadstorage": true
      }
    }
  }
  , "BenchmarkControl"
  , $("body"));

  $(":BenchmarkControl").prependTo($("body"));
}
```

2. Set the **Benchmark** publication property to True (the default is False). Re-publish and browse.

## Using a control


:::warning

This method allows you to embed Web Benchmark visually in exactly the way you require. The drawback of this method is that Web Benchmark could lose its proper context when navigating between web pages takes place, unless the application runs entirely within a frame control and the Web Benchmark control is placed outside this frame control.

:::

1. In USoft Web Designer, open the Publication Configuration against which you want to publish your web application. Do this by using the Publish option in the Web Designer menu.

2. Set the **Benchmark** publication property to True (the default is False).

Next time you publish, the libraries of Web Benchmark are loaded. Its test references are added to your controls. This allows Web Benchmark to trace where you clicked during a recording session.

3. Add the Web Benchmark control to the application start page. This is the page indicated by the **StartPage** publication property.

If your current StartPage is the default "ApplicationPage", the easiest way to achieve this is to reset the **StartPage** publication property to "ApplicationPageWithBenchmark". "ApplicationPageWithBenchmark" is a default application page supplied by USoft which inherits from the default "ApplicationPage" but has the Web Benchmark control inserted into it.

Alternatively, you can manually insert the **BenchmarkControl** control from the Controls tab into your published pages in any other way that you see fit. The Web Benchmark control is horizontally oriented. If you choose to insert it manually, the best location for it is almost always across the top of the page.

If you want to switch regularly between having and not having the Web Benchmark control, define one Publication Configuration that includes the Web Benchmark control in all the application pages, and another Publication Configuration that does not include it at all. Use the second Publication Configuration in USoft Delivery Manager. This way, Web Benchmark is by default switched off when you release the web pages to Production.