---
id: How_to_implement_DIME_messages
---

# How to implement DIME messages

To implement the use of DIME messages, you must add a new parameter after importing a Web Service Component into your repository. This parameter must be the last parameter in the list. This parameter will be used for file names that will be sent as attachments along with the SOAP message in the web service call. The parameter must have InList mode and Variable data type.

You can now call the web service component with attachments from your application:

```sql
INVOKE <web-service-component>.<method>
WITH
SELECT <input-parameter-1>, ... <input-parameter-n>, <file-name-1>... <file-name-n>
```

Where file names must contain the path.

If you do not have a WSDL file for your web service, or if you do not want to use the web service component wizard, you can still create a web service component definition that sends a DIME message to a web service:

1. From the menu, select Define, RDMI, Web Service Components.

2. Fill in a name for your web service.

3. Create a constructor method with the following Physical Method:

```
this=new com.usoft.WebServiceClient.CallWebService()
```

4. The constructor method must have the same name as the component.

On the Constructor tab, select the Active checkbox and Check the constructor SQL.

5. Create another method that will send the DIME message, with Physical method:

```
ar=com.usoft.joker.Util.newArray( (U)'java.lang.String',(i)'1' )
com.usoft.joker.Util.setArray( (O)ar,(i)'0',(O):4 )
this.sendDimeMessage( (U):0,(U):1,(U):2,(U)'',(U):3,([U)ar )
```

6. Add the following parameters to this method:

|**Seqno**|**Name**|**Mode**|**DataType**|
|--------|--------|--------|--------|
|0       |url     |In      |String  |
|1       |soap_body|In      |String  |
|2       |soap_header|In      |String  |
|3       |dir     |In      |String  |
|4       |files   |InList  |Variable|
|5       |result  |Return  |String  |



7. Now you can call this method from your application:

```
INVOKE <web service component name>.<method name>
```

```
WITH
```

```
SELECT < url used to access your web service>,
```

```
    <the soap body of the soap message>,
```

```
    <the soap header of the soap message if any, otherwise null>,
```

```
    <the folder where all files are located. It can be null>,
```

```
    <file name 1>,
```

```
    <file name 2>,
```

```
    ...
```

```
    <file name n>
```