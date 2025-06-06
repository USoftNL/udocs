# Example: Reservation event functional type

Service Definer allows you to define technical interfaces so that you can build an integration layer between different systems. A technical interface defines the characteristics of integrations between systems: the operations themselves, whether operations are read or write, data transport layers, data formats...

Usually the data format of choice when working with technical interfaces is XML or JSON. In Service Definer you can use a structure as input/output of your service, and Service Framework will create the XML (or JSON) message for you at runtime.

A travel agency wants to create a technical interface for message events that follow a participant in a reservation for a scheduled tour. The technical interface is a REST service. This REST service allows the operations of participant reservation, participant arrival, and participant departure. Each operation involves data in XML format.

Participant reservation is the operation of registering a new participant in a reservation. It involves data such as the following.

```language-xml
<ParticipantRegistrationEvent>
   <EventDateTime>2018-12-31T11:00:00</EventDateTime>
   <ReservationId>RES10000</ReservationId>
   <ParticipantId>PAR10000</ParticipantId>
   <Name>Jane Doe</Name>
   <Address>Unknown</Address>
</ParticipantRegistrationEvent>

```

Participant arrival is the operation of registering that a participant has arrived at a specific location to join a group (for example, when the tour starts). It involves data such as the following.

```language-xml
<ParticipantArrivalEvent>
   <EventDateTime>2019-03-10T11:00:00</EventDateTime>
   <ReservationId>RES10000</ReservationId>
   <ParticipantId>PAR10000</ParticipantId>
   <Location>Amsterdam</Location>
   <ArrivalDateTime>2019-03-10T10:00:00</ArrivalDateTime>
</ParticipantArrivalEvent>

```

Participant departure is the operation of registering that a participant has left the group (for example, at the end of the tour). It involves data such as the following.

```language-xml
<ParticipantDepartureEvent>
   <EventDateTime>2019-03-20T16:10:00</EventDateTime>
   <ReservationId>RES10000</ReservationId>
   <ParticipantId>PAR10000</ParticipantId>
   <Location>Amsterdam</Location>
   <DepartureDateTime>2019-03-20T16:00:00</DepartureDateTime>
</ParticipantDepartureEvent>

```

The following example will only show how to implement a functional type for a structure that has reusable attributes. First create a REST Service for each operation that will insert the above XML data in a PARTICIPANT_EVENT table. Use **ParticipantRegistrationEvent**,  **ParticipantArrivalEvent** and **ParticipantDepartureEvent** as names for your generated structures.

Since all XML messages have common attributes, the generated structures have also common fields. You can create a new structure ParticipantEvent that holds the common attributes. As a next step, you can create a functional type based on the new structure and use it in each participant event structure as a functional type. This way, if the ParticipantEvent changes, all types of participant events will change also.

## Create ParticipantEvent structure

1. Choose Define, Structures from the USoft Service Definer menu.

The Structures window appears.

2. Specify ParticipantEvent as the Name of the structure

3. Save.

4. Add three elements to the Tree Structure tab. Do this by right-clicking on the ParticipantEvent element.

|**Field Name**|**Type**|**Annotation**|
|--------|--------|--------|
|EventDateTime|Date    |@Column(name="EventDateTime");@XmlElement(name="EventDateTime")|
|ReservationId|String  |@Column(name="ReservationId");@XmlElement(name="ReservationId")|
|ParticipantId|String  |@Column(name="ParticipantId");@XmlElement(name="ParticipantId")|



5. Save.

## Create a functional type based on ParticipantEvent structure

1. Choose Define, Functional Types from the USoft Service Definer menu.

The Functional Types window appears.

2. Create a functional type record.

3. Set "Functional Type" = **Participant Event**.

4. Set "Super Class Name" = **com.usoft.service.ParticipantEvent**.

5. Set "Used for Class Type" = Structure.

6. Save.

## Use functional type based on the ParticipantEvent structure

1. Choose Define, Structures from the USoft Service Definer menu.

The Structures window appears.

2. Set "Query on Name" = **ParticipantArrivalEvent**.

3. Set "Functional Type" = **Participant Event**.

4. Delete the EventDateTime, ReservationId and ParticipantId fields from the Tree Structure.

5. Save.

6. Repeat the above steps for the ParticipantDepartureEvent and ParticipantRegistrationEvent structures.

###  