# C# component Example 4: Cookie enabled HTTP client

This example shows how you define a cookie enabled HTTP web client component that allows you to manage cookies throughout the client session and perform cookie based authentication. The C# component uses [CookieContainers](https://learn.microsoft.com/en-us/dotnet/api/system.net.cookiecontainer?view=net-7.0) in order to enable usage of cookies.

## REST Service description

This example assumes you are calling a USoft REST service to query a table “RESERVATIONS”, using an endpoint:

- localhost:8112/API/TRAVEL_CONN_API/reservations

The server uses HTTP Basic authentication. The endpoint allows GET and POST requests. Visit the [following](/docs/Services/Introducing%20USoft%20Services/Getting%20started%20with%20USoft%20services%20Quick%20WalkThrough.md) article to get started with creating your own USoft REST Service.

## Defining C# Component

To add the component:

1. 
2. 

```language-csharp
using System;
using System.Xml;
using USoft.Web;
using System.Collections.Generic;

class MYAPI: UHttpRequest
{
    //(string baseurl, int timeout, string[] header) : base(baseurl, timeout, header
    public MYAPI() : base("", 100, new String[]{}){}

    public static List<string> BuildHeader(string[] headersArray)
    {
        List<string> headers = new List<string>();

        if(headersArray!=null){
            for (int i = 0; i < headersArray.Length; i += 2)
            {
                headers.Add(headersArray[i]);
                headers.Add(headersArray[i + 1]);
            }
        }
        return headers;
    }

    public static void testAuthorizationHeader(string user, string pwd, List<string> header){
        // utility function to prepare basic auth header value
        string BA = basicAuth(user, pwd);
        //leaving user empty wont add authorization headers to test if cookies work.
        if(!string.IsNullOrEmpty(user)){
            header.Add("Authorization");
            header.Add(BA);
        }
    }

    public string getReservations(string user, string pwd, string[] headerData = null){

        List<string> headerList = BuildHeader(headerData);

        testAuthorizationHeader(user,pwd,headerList);
        return Visit("GET", "http://localhost:8112/API/TRAVEL_CONN_API/reservations", null, headerList.ToArray());;

    }

    public string makeReservation(string xml, string user, string pwd,  string[] headerData = null) 
    {

        List<string> headerList = BuildHeader(headerData);

        testAuthorizationHeader(user,pwd,headerList);
        
        return Visit("Post", "http://localhost:8112/API/TRAVEL_CONN_API/reservations", xml, headerList.ToArray());
    }

    public XmlDocument myCookies(string url){
        return GetCookies(url);
    }

    public void myNewCookie(){
        //AddCookie(string name, string value, string path, string domain, double expiresAfterSeconds, bool httponly, bool secure, string comment)
        AddCookie("test", "1" , "",  "usoft.com", 100,  false, false, "myFirstcookie");
    }

}


```

3. 

- Stateful component = Y;
- Lifetime = Engine Session;

4. 

5. 

 

## Code Explained

The MYAPI class is a derived class that inherits from a UHttpRequest base class, which is part of the USoft.web namespace used internally by UBlend. UHttpRequest exposes some methods that we use to make Http requests, like Visit , GetCookies and AddCookie and more.

The component provides a method getReservations() to get the reservations, but also a makeReservations() method that creates new reservations via an HTTP POST request. Both methods allow you to pass on HTTP request headers as final argument. The helper method BuildHeader() builds HTTP request headers to send along with the HTTP Request.

Another method testAuthorizationHeader() is added to demonstrate that the cookie handling works in this example. It checks if a username and password is provided and if so, it will add an Authorization HTTP request Header to the HTTP call to perform Basic authentication. If not, the HTTP request is done without any authorization set, hence relying on cookie authentication.

 

## Example usage:

To make an HTTP request via a USoft application:

1. Open the C/S Application.

2. Open SQL Command
3. Execute the following statement to first check if cookies are stored for the connection:

- select MYAPI.myCookies(‘[http://localhost:8112/API/TRAVEL_CONN_API/reservations](http://localhost:8112/API/TRAVEL_CONN_API/reservations)’);


This will return empty XML content:
 

- <cookies />

4. then perform a HTTP GET Request :
 

- select MYAPI.getReservations('YOURUSERNAME','YOURPASSWORD');

Will return all reservations:

- ```language-xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Reservations><RES_ID>255</RES_ID><TOUR_ID>6</TOUR_ID><MADE_BY>1</MADE_BY><DEALT_WITH_BY>37</DEALT_WITH_BY><PERSON_DISCOUNT>2</PERSON_DISCOUNT><GROUP_DISCOUNT>0</GROUP_DISCOUNT><PRICE>2254</PRICE><BOOK_DATE>2021-10-29T14:06:12+02:00</BOOK_DATE></Reservations>
```



5. If we again run the myCookies statement, it will now return cookie data:

 

- ```language-xml
<cookies><cookie name="TRAVEL_CONN" path="/" port="" expires="14-4-2023 16:04:27" expired="False" httponly="True" secure="False" domain="localhost" comment=""session id"" discard="False" timestamp="04/14/2023 15:54:27" version="1">70eedb4</cookie></cookies>
```



 

6. Again call getReservations, but this time omit the username and password. It will use the cookie returned by the server in the previous call to perform Cookie based authentication:
 

- select MYAPI.getReservations(null,null);

Will return the same data as earlier.


7. Similarly for the POST Request, you can add headers to the request by passing along a string parameters in SQL command:
 

- ```sql
select MYAPI.makeReservation(

'<Reservations documentName="Reservations">

<RESERVATION RES_ID="261" TOUR_ID="4" MADE_BY="10" DEALT_WITH_BY="43" PERSON_DISCOUNT=".0" GROUP_DISCOUNT=".0" PRICE="2254.0" BOOK_DATE="2021-10-29T14:06:12" CANCEL_DATE="2022-10-30T12:00:00"/>

</Reservations>'

, 'TRAVEL_DEMO','TRAVEL_DEMO',  'Accept','text/xml','Content-type','text/xml')
```



 

 

8. Finally note that you can add your own cookie to send along with the HTTP request. Run the component myNewCookie() method or the UHttpRequest its AddCookie() method directly to do so:
 

- select MYAPI.myNewCookie();

or

- select MYAPI.AddCookie('test', '1' , '' ,'usoft.com', 100,'false','false', 'myFirstcookie');

When fetching cookies this time:

- select MYAPI.myCookies('http://localhost:8112/API/TRAVEL_CONN_API/reservations');
- It results in the earlier added cookie being returned:
- ```language-xml
<cookies><cookie name="test" path="" port="" expires="14-4-2023 16:17:12" expired="False" httponly="False" secure="False" domain="usoft.com" comment="myFirstcookie" discard="False" timestamp="04/14/2023 16:15:32" version="0">1</cookie></cookies>
```