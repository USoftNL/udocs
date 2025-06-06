# Pattern 6: Customised lookup query

This design pattern helps the user of a lookup window. It prevents the user from selecting lookup data that later turn out not to be allowed.

Tours have periods (Start Dates, Return Date). Guides are scheduled to accompany Tours. There is a business rule saying that a guide cannot accompany 2 tours at the same time: 2 tours that have overlapping periods on the calendar.

The USoft default offers a step-out-and-come-back navigation to a lookup page where the user can select a Guide for a Tour:

![](/api/Web%20and%20app%20UIs/Page%20and%20data%20source%20constructs/assets/07a55666-52d6-43ed-9e8c-7911fe2844d7.png)

The problem here is that the default underlying query in the lookup page proposes *all* the Guides for selection, including Guides that will later lead to an error because they already accompany another tour during the same period:

```sql
SELECT   *
FROM     GUIDE
```

The solution is to restrict the lookup query to:

```sql
SELECT   *
FROM     GUIDE g
WHERE NOT EXISTS
(
   SELECT   ''
   FROM     TOUR t
   WHERE    t.TOUR_ID <> :TOUR_ID
   AND      t.START_DATE < :RETURN_DATE
   and      t.RETURN_DATE > :START_DATE
   and      t.GUIDE = g.PERSON_ID
)

```

This notation is just to convey the general idea. In this notation, the colon (:) represents “current” ("the tour ID currently selected in the screen”). You will see that colons are used in the same way in the finished solution.

## How to build

Have a calling page "6.1” as a subclass of the default Tours info page class:

![](/api/Web%20and%20app%20UIs/Page%20and%20data%20source%20constructs/assets/cbe2a223-fb90-4119-9ae0-3b212279987d.png)

 

Have a called lookup page "6.2” as a subclass of the default lookup page class for the TOUR - GUIDE relationship:

 

![](/api/Web%20and%20app%20UIs/Page%20and%20data%20source%20constructs/assets/43459289-9a9f-4799-aafe-8be504b5cf86.png)

 

In the "6.1” page, set the **Lookup Page** property of the GUIDE column of the TOUR data source to:

```
Guides Lookup 6.2
```

In the "6.2” page, insert a **beforeexecutequery** event handler in the GUIDE data source:

![](/api/Web%20and%20app%20UIs/Page%20and%20data%20source%20constructs/assets/e01e1d2d-7af1-4c42-a13e-6651b00b86b1.png)

Set the script of this **beforeexecutequery** event handler to:

```js
var rcTOUR = $.udb('../TOUR').rows('current');
options.options.hostvars = {
   thistourid: rcTOUR.cols('TOUR_ID').val(),
   thisstartdate: rcTOUR.cols('START_DATE').val(),
   thisreturndate: rcTOUR.cols('RETURN_DATE').val()       
};
```

Set the **Where Clause** property of the GUIDE data source to:

```sql
NOT EXISTS
(
      SELECT     ''
      FROM       tour t
      WHERE      t.tour_id <> :thistourid
      AND        t.start_date < 
                 usformat.chartodate( 
                   :thisreturndate, 'DD-MM-YYYY' )
      AND        t.return_date > usformat.chartodate( 
                   :thisstartdate, 'DD-MM-YYYY' )
      AND        t.guide = ${getMainDataSourceAlias()}.person_id
)
```