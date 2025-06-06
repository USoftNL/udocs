---
id: Setting_a_timeout_value_when_calling_a_web_service
---

# Setting a timeout value when calling a web service

To specify a timeout value when calling a web service, modify the constructor method of the web service component by adding the following line:

```
this.setTimeout((i) 'n' )
```

where n is the number of milliseconds that the client application waits for the web service response.