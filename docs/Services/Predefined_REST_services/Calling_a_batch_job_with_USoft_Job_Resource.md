---
id: Calling_a_batch_job_with_USoft_Job_Resource
---

# Calling a batch job with USoft Job Resource

To be able to call a batch job through a REST service based on "USoft Job Resource" functionality, you first need to:

- Define a predefined USoft REST service based on "USoft Job Resource",
- Associate it with a server and a connection,
- Publish it, and
- Set up a test environment.

These tasks are explained in [Predefined REST services](/docs/Services/Predefined_REST_services/Predefined_REST_services.md).

## Calling a batch job

To call a batch job:

1. Compose a URL of the following type:

```
http://<host-name>:<port-number>/<service-uri>/<connection-name>/<job-name>[;<parameter-name>=<value>[;<parameter-name>=<value>...]]
```

where \<service-uri> is the “Relative URI Path” of the REST service.

For example:

```
http://localhost:8090/myservice/myconnection/RUN_DAILY_REPORT
http://localhost:8090/myservice/myconnection/PROCESS_BOOKING;booking_id=1158

```

2. Set the HTTP verb to either **GET** or **POST** (whichever is most intuitive).

3. Send the request. In POSTMAN, press the Send button.

## Specifying output parameters

By default, a job call that executes successfully will not return any details to the caller: you get a standard "200 OK" response and possibly a neutral response such as "\<Empty/>".

To give more details back to the caller, create output parameter. First, at design time, associate an Output Parameter Set with the job you call. Then, at runtime, in the callng URL, pass parameter values with the help of the **columns** keyword, as follows:

```
http://host:port/myservice/myconnection/JOBNAME/PARAM1=one;PARAM2=two/columns;COLUMN1;COLUMN2
```

where COLUMN1 and COLUMN2 are column names of the job's Output Parameter Set.

A predefined REST service defined with USoft Job Resource can have only a single row of output parameters. This contrasts with predefined REST services built with USoft Table Resource, where you can have multiple rows of output parameters.

## URL characters in batch parameter values

In batch parameter values, by default you cannot use characters that have a special meaning in a URL, such as the forward slash ('/'). The following would not work:

```
http://host:port/myservice/myconnection/JOBNAME/PARAM1=one;PARAM2=t/w/o
```

You can get around this problem by passing PARAM2 as a URL query parameter. URL query parameters are introduced by a question mark ('?'):

```
http://host:port/myservice/myconnection/JOBNAME/PARAM1=one;?PARAM2=t/w/o
```

 