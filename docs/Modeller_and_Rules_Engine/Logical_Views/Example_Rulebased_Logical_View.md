---
id: Example_Rulebased_Logical_View
---

# Example: Rule-based Logical View

This section discusses an example of a rule-based logical view. The chosen implementation is transitional constraints, as opposed to a batch job called by one or more constraints.

Assume you have a customer relationship management system, where customers are saved in the PERSON table and their addresses in the ADDRESS table. The ADDRESS table can store different types of addresses. You want to provide a Logical View on this model that will present customers and their home and postal addresses in a single form. In order to allow users to manipulate customer data and related home and postal address data directly through this same form, you turn the Logical View into a Rule-based Logical View.

The PERSON table has a database-generated PERSON_ID primary key. The ADDRESS table is a child table of PERSON. It has a unique primary key across the columns (PERSON_ID, ADDRESS_TYPE).

The Relationship between PERSON and ADDRESS has Delete Rule = Cascading.

### Step 1: Define and test the logical view

Define and test a new Logical View. Provide the SQL Statement, press the Check button so that USoft sets the view to Correct = Yes, then save your work.

|        |        |
|--------|--------|
|View Name:|PERSON_ADDRESS|
|Abbreviation:|P_A     |
|Object Name:|Person address|
|Object Name Plural:|Person addresses|



SQL Statement:

```sql
SELECT    p.* 
,         a1.address       home_address
,         a1.city          home_city
,         a1.country       home_country
,         a2.address       postal_address
,         a2.city          postal_city
,         a2.country       postal_country
FROM      person p
,         address a1
,         address a2
WHERE     p.person_id = a1.person_id(+)
AND       p.person_id = a2.person_id(+)
AND       a1.address_type(+) = 'HOME'
AND       a2.address_type(+) = 'POSTAL'
```

### Step 2: Set constraint flags

Set Use Constraints... flags. Because of the cascading Delete Rule between PERSON and ADDRESS, you don't need special rules for Delete, only for Insert and Update:

|        |        |
|--------|--------|
|View Name:|PERSON_ADDRESS|
|Use Constraints for Inserts:|Yes     |
|Use Constraints for Updates:|Yes     |
|Use Constraints for Deletes:|No      |



### Step 3: Plan rules

Plan ahead what are the special rules that you need.

> [!TIP]
> At this stage, it is a good idea actually to create the constraints listed. Use dummy SQL statements at this stage. Replace them by the correct SQL in a later step:

|**Constraint Name**|**Required Action**|
|--------|--------|
|UPD_P_A_KEYVALUE|Copy database-generated key value for person on insert of view record|
|INS_P_ON_INS_P_A|Insert person data on insert of new view record|
|INS_A_HOME_ON_INS_P_A|Insert home address data (if any) on insert of new view record|
|INS_A_POSTAL_ON_INS_P_A|Insert postal address data (if any) on insert of new view record|
|UPD_P_ON_UPD_P_A|Update person data on update of view record|
|INS_A_HOME_ON_UPD_P_A|Insert new home address data (if any) on update of view record|
|INS_A_POSTAL_ON_UPD_P_A|Insert new postal address data (if any) on update of view record|
|UPD_A_HOME_ON_UPD_P_A|Update existing home address data (if any) on update of view record|
|UPD_A_POSTAL_ON_UPD_P_A|Update existing postal address data (if any) on update of view record|
|DEL_A_HOME_ON_UPD_P_A|Delete erased home address data (if any) on update of view record|
|DEL_A_POSTAL_ON_UPD_P_A|Delete erased postal address data (if any) on update of view record|



### Step 4: Set column attributes

Make sure that column attributes for PERSON_ADDRESS correctly reflect the intended user interaction with the view:

|**Column**|**Mandatory**|**Input Allowed**|**Updatable**|
|--------|--------|--------|--------|
|PERSON_ID|Yes     |No      |No      |
|NAME    |Yes     |Yes     |Yes     |
|TITLE   |No      |Yes     |Yes     |
|MARITAL_STATUS|Yes     |Yes     |Yes     |
|EMAIL   |Yes     |Yes     |Yes     |
|HOME_ADDRESS|No      |Yes     |Yes     |
|HOME_CITY|No      |Yes     |Yes     |
|HOME_COUNTRY|No      |Yes     |Yes     |
|POSTAL_ADDRESS|No      |Yes     |Yes     |
|POSTAL_CITY|No      |Yes     |Yes     |
|POSTAL_COUNTRY|No      |Yes     |Yes     |



### Step 5: Retrieve database key ahead of time

Retrieve the next database-generated primary key value for PERSON_ID ahead of time, that is, before the INSERT action on the view is translated to actions on underlying tables. For this, choose an implementation that uses a transitional constraint:

|        |        |
|--------|--------|
|Constraint Name:|UPD_P_A_KEYVALUE|
|Transition Table:|PERSON_ADDRESS|
|Fire on Insert:|Always  |
|Fire on Delete:|Never   |
|Fire on Update:|Never   |



SQL Statement:

```sql
UPDATE    person_address
SET       person_id = person.GetNextGeneratedUniqueValue()
WHERE     person_id IS NULL
```

### Step 6: Deal with INSERT of person data

Translate INSERT of person data in the view to INSERT of person data in the PERSON table:

|        |        |
|--------|--------|
|Constraint Name:|INS_P_ON_INS_P_A|
|Transition Table:|PERSON_ADDRESS|
|Fire on Insert:|Always  |
|Fire on Delete:|Never   |
|Fire on Update:|Never   |



SQL Statement. The first WHERE clause is needed to force this constraint to be handled AFTER the UPD_P_A_KEYVALUE constraint retrieves the database-generated key value:

```sql
INSERT INTO person
(
          person_id
,         name
,         title
,         marital_status
,         email
)
SELECT    pa.person_id
,         pa.name
,         pa.title
,         pa.marital_status
,         pa.email   
FROM      person_address pa
WHERE     pa.person_id IS NOT NULL
AND NOT EXISTS
(   
      SELECT        ''   
      FROM          person p   
      WHERE         p.person_id = pa.person_id
)
```

### Step 7: Deal with INSERT of address data in new view records

Translate INSERT of address data in a NEW view record to INSERT of address data in the ADDRESS table (2 constraints):

|        |        |
|--------|--------|
|Constraint Name:|INS_A_HOME_ON_INS_P_A|
|Transition Table:|PERSON_ADDRESS|
|Fire on Insert:|Always  |
|Fire on Delete:|Never   |
|Fire on Update:|Never   |



SQL Statement. The first WHERE clause is needed to force this constraint to be handled AFTER the UPD_P_A_KEYVALUE constraint retrieves the database-generated key value:

```sql
INSERT INTO address 
(
   person_id
,  address_type
,  address
,  city
,  country
)
SELECT
          pa.person_id
,         'HOME'
,         pa.home_address
,         pa.home_city
,         pa.home_country
FROM      person_address pa
WHERE     pa.person_id IS NOT NULL
AND
(
          pa.home_address IS NOT NULL    
    OR    pa.home_city IS NOT NULL    
    OR    pa.home_country IS NOT NULL
)
AND NOT EXISTS
(     
      SELECT     ''
      FROM       address a
      WHERE      a.person_id = pa.person_id
      AND        a.address_type = 'HOME'
)
```

### Step 8: Deal with INSERT of address data in existing view records

Translate INSERT of address data in an EXISTING view record to INSERT of address data in the ADDRESS table (2 constraints):

|        |        |
|--------|--------|
|Constraint Name:|INS_A_HOME_ON_UPD_P_A|
|Transition Table:|PERSON_ADDRESS|
|Fire on Insert:|Never   |
|Fire on Delete:|Never   |
|Fire on Update:|Used Columns|



SQL Statement:

```sql
INSERT INTO address
(
          person_id
,         address_type
,         address
,         city
,         country
)
SELECT    pa.person_id
,         'HOME'
,         pa.home_address
,         pa.home_city
,         pa.home_country
FROM      person_address pa
WHERE
(
          pa.home_address IS NOT NULL  
   OR     pa.home_city IS NOT NULL  
   OR     pa.home_country IS NOT NULL
)
AND NOT EXISTS
(
    SELECT      ''
    FROM        address a
    WHERE       a.person_id = pa.person_id    
    AND         a.address_type = 'HOME'
)
```

### Step 9: Deal with UPDATE of address data

Translate UPDATE of address data in an EXISTING view record to UPDATE of address data in the ADDRESS table (2 constraints):

*Constraint 1*

|        |        |
|--------|--------|
|Constraint Name:|UPD_A_HOME_ON_UPD_P_A|
|Transition Table:|PERSON_ADDRESS|
|Fire on Insert:|Never   |
|Fire on Delete:|Never   |
|Fire on Update:|Used Columns|



SQL Statement:

```sql
UPDATE address a
SET 
(          
          a.address
,         a.city
,         a.country
) =
(
   SELECT     pa.home_address  
   ,          pa.home_city   
   ,          pa.home_country   
   FROM       person_address pa   
   WHERE      pa.person_id = a.person_id
)
WHERE     a.address_type = 'HOME'
```

*Constraint 2*

|        |        |
|--------|--------|
|Constraint Name:|UPD_A_POSTAL_ON_UPD_P_A|
|Transition Table:|PERSON_ADDRESS|
|Fire on Insert:|Never   |
|Fire on Delete:|Never   |
|Fire on Update:|Used Columns|



SQL statement:

```sql
UPDATE address a
SET 
(          
          a.address
,         a.city
,         a.country
) =
(    
     SELECT   pa.postal_address   
     ,        pa.postal_city   
     ,        pa.postal_country   
     FROM     person_address pa   
     WHERE    pa.person_id = a.person_id
)
WHERE     a.address_type = 'POSTAL'
```

### Step 10: Deal with DELETE of address data

Translate DELETE of address data in an EXISTING view record to DELETE of address data in the ADDRESS table (2 constraints):

*Constraint 1*

|        |        |
|--------|--------|
|Constraint Name:|DEL_A_HOME_ON_UPD_P_A|
|Transition Table:|PERSON_ADDRESS|
|Fire on Insert:|Never   |
|Fire on Delete:|Never   |
|Fire on Update:|Used Columns|



SQL Statement:

```sql
DELETE FROM      address a
WHERE            a.address_type = 'HOME'
AND EXISTS
(
      SELECT     ''
      FROM       person_address pa
      WHERE      pa.person_id = a.person_id
      AND        pa.home_address IS NULL
      AND        pa.home_city IS NULL
      AND        pa.home_country IS NULL
)
```

*Constraint 2*

|        |        |
|--------|--------|
|Constraint Name:|DEL_A_POSTAL_ON_UPD_P_A|
|Transition Table:|PERSON_ADDRESS|
|Fire on Insert:|Never   |
|Fire on Delete:|Never   |
|Fire on Update:|Used Columns|



SQL statement:

```sql
DELETE FROM      address a
WHERE            a.address_type = 'POSTAL'
AND EXISTS
(
      SELECT     ''
      FROM       person_address pa
      WHERE      pa.person_id = a.person_id
      AND        pa.postal_address IS NULL
      AND        pa.postal_city IS NULL
      AND        pa.postal_country IS NULL
)
```