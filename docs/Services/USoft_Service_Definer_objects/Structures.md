---
id: Structures
---

# Structures

A structure is, in functional terms, a named list of fields that correspond to data with specific format characteristics. For example, a structure called "CustomerDetails" could have the following fields:

- Customer ID
- Surname
- First Name
- Address
- Country
- Email address

In technical terms, a structure is a helpful instrument for mapping output columns and host variables of a SQL statement executed by a REST method to formatting on the client side (that is, on the side of the caller of the service).

## Creating a structure

The easiest way to create a structure is to have it derived from a SQL statement as part of generating a method implementation from SQL. You can also derive a structure from a SQL statement or from a table definition as a separate action.

Finally, it is also possible to create a structure by defining all its aspects manually in the Structures window or tab. To do this, choose Define, Structures from the menu.

## Mapping between fields in a structure and XML and JSON messages

Structures in USoft Service Definer are used to easily consume and produce, in a REST service, both JSON and XML data formats. You can use the same structure to generate JSON or XML or both.

## Accepts attribute

If a structure is specified as input parameter of a REST method, you can have the runtime Services Framework convert the XML or JSON format of the posted input data to fields in the structure. Do this by specifying, in Service Definer, one of the following media types as the value of the **Accepts** attribute of the method:

|        |        |
|--------|--------|
|text/xml|XML request messages are accepted|
|application/json|JSON request messages are accepted|
|text/xml;application/json|Both XML and JSON request messages are accepted|



At runtime, the client specifies the actual format of the request message by setting the **Content-Type** HTTP header.

The **Accepts** attribute must be empty if the HTTP verb is GET. The default value for the Accepts attribute is 'text/xml'.

## Produces attribute

Likewise, if a structure is specified as return parameter of a REST method, you can have the runtime Services Platform pass the return data produced by the method as either XML or JSON. Do this by specifying, in Service Definer, one of the following media types as the value of the Produces attribute of the method:

|        |        |
|--------|--------|
|text/xml|XML response messages are accepted|
|application/json|JSON response messages are accepted|
|text/xml;application/json|Both XML and JSON response messages are accepted|



At runtime, the client specifies the actual format of the reponse message by setting the **Accept** HTTP header.

The default value for the Produces attribute is 'text/xml'.

## Mapping between fields in a structure and SQL input or output columns

Structures in USoft Service Definer are also used to easily get or set the output or input of a SQL statement.

At runtime, USoft will automatically fill the fields of a structure with the output of a SELECT statement if the field specifies a mapping to a output column in the SQL Statement. The mapping may be specified as Annotation of a field, using the syntax:

```
@Column(name="<label name>")
```

*Example*

```
@Column(name="RES_ID")
```

This indicates that a field corresponds to an output column of a SQL Statement that has RES_ID as its column name or alias name.

## Mapping between fields in a structure and SQL host variables

If a structure is specified as input parameter of a REST method, you can have the runtime Services Framework automatically setting host variables in a SQL Statement to incoming data values. Do this by setting the Annotation attribute of the field using the syntax **@Column(name="\<host variable name>")**.

In this scenario,you do not need to create structures by manual coding. The necessary structures are automatically created when you generate a REST method from the SQL statement. In the SQL statement, the name of the structure is used in the host variable. The syntax is **:\<structure name>.\<field name>**.

*Example*

In this SQL statement, the name of the structure is 'MyPersonNameStructure':

```sql
UPDATE    person
SET       (
              first_name
,             family_name
) =
(    SELECT    :MyPersonNameStructure.FirstName
,             :MyPersonNameStructure.SurName
)
WHERE     person_id = :id

```

The input parameter ':id' in the WHERE clause is of a different type than the host variables in the SET clause. This input parameter is passed at runtime as part of the request URL of the REST service.

In this example, the structure is used as follows in the Implementation of the method:

```
Integer result = (Integer)sql( "UPDATE_PERSON" , new Object[]{ objMyPersonNameStructure, id } );

```

where UPDATE_PERSON is the name of the SQL statement.

## Dealing with multiple rows (arrays)

If the output of a SQL statement has multiple rows you can use arrays of structures to receive all rows. The syntax is: **MyReservationStructure[]**, where **MyReservationStructure** is the name of the structure. For example, you can write as the Implementation of a method:

```
MyReservationStructure[]  reservations = ( MyReservationStructure[])sql( MyReservationStructure[].class, "GET_CURRENT_BOOKINGS"  );

```

If the output or input of a REST Service contains has a list of elements held in an XML or JSON array, you can use the same syntax **MyReservationStructure[]** in the Type field of the Parameter. Such a list of elements could look like this in XML:

```xml
<MyReservationStructures>
    <MyReservationStructure participants="1" id="160">
        <destination>AUSTRALIA</destination>
        <tour>53</tour>        
        <type>ISLAND SUNTANNER</type>
    </MyReservationStructure>
    <MyReservationStructure participants="3" id="157">
        <destination>AUSTRALIA</destination>
        <tour>54</tour>
        <type>ISLAND SUNTANNER</type>
    </MyReservationStructure>
    <MyReservationStructure participants="1" id="182">
        <destination>BRAZIL</destination>
        <tour>144</tour>
        <type>RAINFOREST RIDE</type>
    </MyReservationStructure>
</MyReservationStructures>

```

Or it could look like this in JSON:

```language-json
[
    {
        "participants": 1,
        "id": 160,
        "destination": "AUSTRALIA",
        "tour": 53,
        "type": "ISLAND SUNTANNER"
    },
    {
        "participants": 3,
        "id": 157,
        "destination": "AUSTRALIA",
        "tour": 54,
        "type": "ISLAND SUNTANNER"
    },
    {
        "participants": 1,
        "id": 182,
        "destination": "BRAZIL",
        "tour": 144,
        "type": "RAINFOREST RIDE"
    }
]
```

## Remodeling the XML structure of incoming and outgoing messages

Using annotations, you can map data in incoming and outgoing XML messages variously to XML elements or to XML attributes:

- To specify that a field of a structure maps to an element in the XML structure, specify **@XmlElement(name="\<xml element name>")** as Annotation for the field.
- To specify that a field of a structure maps to an attribute in the XML structure, specify **@XmlAttribute(name="\<attribute name>")** as Annotation for the field.

*Example*

You have a REST service that produces the following XML response message on the basis of a structure named **MyPersonStructure**:

```xml
<MyPersonStructure>
  <PERSON_ID>137</PERSON_ID>
  <FIRST_NAME>Johnny</FIRST_NAME>
  <FAMILY_NAME>LOGAN</FAMILY_NAME>
</MyPersonStructure>

```

You want this output to look like this:

```xml
<Client ID="137">
  <FirstName>Johnny</FirstName>
  <Surname>LOGAN</Surname>
</Client>

```

To achieve this, follow these steps:

1. Change the annotation for the structure from @Entity;@XmlRootElement(name="MyPersonStructure") to:

```
@Entity;@XmlRootElement(name="Client")
```

2. Change the annotation for the PERSON_ID field from @Column(name="PERSON_ID");@XmlElement(name="PERSON_ID") to:

```
@Column(name="PERSON_ID");@XmlAttribute(name="ID")
```

Note in particular that **@XmlElement** was replaced by **@XmlAttribute**.

3. Change the annotation for the FIRST_NAME field from @Column(name="FIRST_NAME");@XmlElement(name="FIRST_NAME") to:

```
@Column(name="FIRST_NAME");@XmlElement(name="FirstName")
```

4. Change the annotation for the FAMILY_NAME field from @Column(name="FAMILY_NAME");@XmlElement(name="FAMILY_NAME") to:

```
@Column(name="FAMILY_NAME");@XmlElement(name="Surname")
```

## Accessing data from a structure in the Implementation of a Method

In the Implementation code of a method, you can access data from a structure, for example (for a structure named "MyBookingStructure"):

```
Reservation reservation = (Reservation)sql(   Reservation.class, "MyBookingStructure", new Object[]{ id }  );

```

and then use that data in a subsequent sql() function in that same Implementation code, for example:

```
CountryHighlights[] highlights = (CountryHighlights[])sql(   CountryHighlights[].class, "GET_COUNTRY_HIGHLIGHTS", new Object[]{ reservation.destination }  );

```

## Deriving structures from SQL statements or tables

You can derive a structure from an existing SQL statement (defined in USoft Service Definer) or from an existing table definition (defined in USoft Definer).

This is useful when you want to create a method implementation programmatically (ie., by manual coding in Java) and you need a definition of the field names and datatypes of the return data structure.


:::danger

When you generate a method implementation from a SQL statement, USoft Service Definer will create the entire method implementation including a structure derived from the statement. If you work in this way, you do NOT need to derive a structure as a separate action.

:::

To derive a structure from a statement or table definition:

1. Choose Tools, Derive Structure from the menu.

2. In the Derive Structure dialog, specify the Return Structure Name that you want for the structure.

3. If you want to derive the structure from a SQL statement, select 'Derive Structure from SQL Statement' and specify an existing SQL statement name. You can use the lookup button to select such a name from a list.

4. If you want to derive the structure from a table definition, select 'Derive Structure from Table', specify the application that the table is part of (you can use the lookup button to select an existing application name), and type the table name.

5. Click OK.

The structure is now derived. You can find it under Structures in the Catalog on the left-hand side, or by retrieving it in the Structures window or tab (choose Define, Structures from the menu).