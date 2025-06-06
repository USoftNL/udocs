# Time constraints

USoft Production has an application timer that allows scheduled constraint execution. The timer consists of an application table T_APP_TIME, and an executable USCLOCK.EXE that updates T_APP_TIME with the current database time at regular intervals.

*Example*

You can use a time constraint for future changes of customer addresses. Suppose, customers can announce a new address and the date from which the new address takes effect. The application must automatically replace the old address with the new address at the right time.

This data is stored in a separate NEW_ADDRESS table.

When the date arrives, the automatic update of the only record in the T_APP_TIME table causes the evaluation of a productive SET_NEW_ADDRESS constraint that updates the PERSON table.

This constraint has SQL statement:

```
UPDATE     person p
SET     
(
           p.address
,          p.city
,          p.area_code
) =
(
    SELECT     na.address
    ,          na.city
    ,          na.area_code
    FROM       new_address na
    ,          t_app_time tt
    WHERE      na.person_id = p.person_id
    AND        tt.app_year =  TO_NUMBER( TO_CHAR( na.from_date,'YYYY' ))     
    AND        tt.app_month = TO_NUMBER( TO_CHAR( na.from_date,'MM' ))
    AND        tt.app_day =   TO_NUMBER( TO_CHAR( na.from_date,'DD' ))
)
```

with transition properties:

```
Transition Table =    T_APP_TIME
Fire On Insert =      Never
Fire On Delete =      Never
Fire On Update =      UsedColumns
```

## The T_APP_TIME table

The T_APP_TIME table is predefined in every user application definition, and can be created in the same way other tables are created. When the application timer is running, table T_APP_TIME contains exactly one record that reflects the current "application" date and time.

Constraints that are defined on T_APP_TIME, and that are successful, have the effect of scheduled updates of the database.

The T_APP_TIME table contains the following columns:

- APP_WEEKDAY (1=Sunday, 7=Saturday)
- APP_YEAR (4 digits, not century based)
- APP_MONTH (1=January, 12=December)
- APP_DAY
- APP_HOUR
- APP_MINUTE
- APP_SECOND

All columns have the NUMBER data type and contain an integer.

## The Application Timer

The application timer (USCLOCK.EXE) can be run continuously against the USoft Developer-built application. The timer keeps the T_APP_TIME table synchronized with the database time by incrementing it at fixed intervals. After each increment and the execution of the constraints that are evaluated by the increment, the application timer commits the transaction. The application timer rolls back the transaction and stops if it encounters a violation as a result of an increment.

The application manager should ensure that only one instance of the application timer is running against a T_APP_TIME table.

The application timer contains an instance of the USoft Rules Engine. When USCLOCK.EXE is started, it reads the constraints from the repository or from flat files. For this reason, you must stop and restart the timer when you have changed the constraints on T_APP_TIME.

When the application timer is started, it first checks the current record in T_APP_TIME. When the application time is too far behind the database time, it reports an error and aborts. Otherwise, the application timer will quickly update the application time to synchronize it with the database time. In this way all intermediate updates are performed as if the timer had been running all the time. This is important to remember when the application timer is restarted after it has stopped, for example, because of a violation that occurred.

By default, the application timer continuously displays the current time. This allows you to see that it is working. The timer displays the database time, which may differ from the local time on the PC.

> [!NOTE]
> You should only write productive constraints for use with the timer. You should also make sure that when such constraints are evaluated, they cannot lead to violations, or messages requiring user interaction.

## Starting and stopping the Application Timer

You can start the application timer from the USoft Binder. Add a USoft Application Timer project item to your project and edit the item properties. These are:

- Interval: this is the time between successive increments of the application time. The default value is one minute.
- Max time since last update: this is the maximum time difference between the database clock and the application clock that the application timer will allow when it is started. If the application time is further behind the database time than this value, the application timer stops and displays an error message. The default value is 24 hours.
- A Verbose check box, which if left unchecked, disables start-up messages and the continuous display of current time.

Refer to the USoft Binder help for more information about the USoft Binder and how to use it.

While the application timer is running, you may minimize its window. To stop the application timer, restore its window, make it active and press CTRL+C or CTRL+BREAK. Do not close the window, log off, or shutdown while the application timer is running. Depending upon your RDBMS, the database connection may not be properly closed and database locks may not be released if the timer is stopped in this way.

 