# Constructor SQL

The constructor of a component is a method that is called at the moment that the component is created. The constructor is used primarily for initialization purposes.

The constructor SQL is executed at the moment the Rules Engine creates a component. The outcome of the constructor SQL, which is a SELECT or INVOKE statement, will be passed to the constructor method. The constructor method is a method of the component with the same name as the component.

The advantage of the constructor SQL is that it gives you the opportunity to create a much more flexible architecture. Some global settings of the component do not need to be made in the component itself, but can be selected from the application tables or from an external component.

For example, instead of hard-coding a connection string in an external component, the connection string can be retrieved from a database table and passed on to the constructor method:

```sql
SELECT    t.value
FROM      user_configuration t
WHERE     t.user_name = USER
AND       t.name = 'CONNECTION_STRING'

```

In this case a configuration table has been added to the application. It is very easy to change configuration settings without adjusting the components or application definition.

Note that the user_configuration table can also be a component table.

It is also possible to get the configuration information from an external component, through an INVOKE:

```sql
INVOKE    Enterprise Service.lookup WITH
SELECT    USER
,         'ORDER_PROCESSING_SYSTEM'

```

In this case the information is retrieved from a naming/directory service.

In all of these examples, the component has a constructor method that accepts one parameter, the connection string.