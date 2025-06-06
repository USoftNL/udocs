---
id: SQL_conditions
---

# SQL conditions



> [!NOTE]
> This article is about **SQL conditions** as part of the [SQL syntax](/docs/Modeller_and_Rules_Engine/SQL_syntax) that USoft supports.

## **SQL conditions**

SQL conditions are used:

- In WHERE and HAVING clauses in queries and subqueries.
- In ON clauses in join constructs.

*Syntax*

USoft supports all industry-standard SQL condition constructs. These syntax options are an integral part of the standard SQL language. There are no USoft extensions in this area.

```sql
*condition-list*       ::=  *condition  logical-connector  condition* ...

*condition*            ::=  {     *operand  comparison-operator  operand*    |
                           NOT( *operand  comparison-operator  operand* )  }

*operand*              ::=  {  *column-expression* | *literal*  }

*comparison-operator*  ::=  {  *math-operator*  |  *sql-operator*  }
*math-operator*        ::=  {  =  |  !=  |  >  |  >=  |  <  |  <=  |  <>  }
*sql-operator*         ::=  {  
                                { LIKE  |  IN  |  EXISTS  |  BETWEEN } |
                            NOT { LIKE  |  IN  |  EXISTS  |  BETWEEN } |

                            IS NULL |
                            IS NOT NULL
                          }

*logical-connector*    ::=  {  AND  |  OR  }
```

The syntax of sql-operator constructs is not detailed above. These constructs are all different: LIKE calls for a wildcard pattern and has an optional ESCAPE clause, IN calls for an enumeration, EXISTS for a subquery, and BETWEEN for two column expressions connected by AND, while IS NULL is an operator for comparing a value with the NULL value. See SQL operators for details.

*Example 1*

This condition matches ARISTO products with an ID not higher than 6000 produced after February 1, 2022:

```sql
      product_name = 'ARISTO'
AND   product_id   <= 6000
AND   production_date  >  CHAR_TO_DATE( 'DD-MON-YYYY', '01-FEB-2022' )
```

*Example 2*

This condition matches ARISTO products except all ARISTO products from Australia and except all ARISTO products of type Consumer:

```sql
        product_name = 'ARISTO'
AND NOT ( country = 'AUSTRALIA' OR type = 'CONSUMER' )
```

*Example 3*

This conditions matches all tours to Brazil that do not have a guide:

```sql
t.destination = 'BRAZIL'
AND NOT EXISTS (
    SELECT   ''
    FROM     person  p
    WHERE    p.person_id = t.guide_id
)
```

 