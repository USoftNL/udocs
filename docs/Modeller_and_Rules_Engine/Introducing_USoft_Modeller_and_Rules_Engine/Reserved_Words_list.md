---
id: Reserved_Words_list
---

# Reserved Words list

## What is the Reserved Words list?

The Reserved Words list is a list of words that USoft does not allow you to use as the name of an object in USoft Definer.

For example, if the list contains the word ADD, developers are disallowed to create a Table, Logical View, Column, Constraint, Component or Role by the name of ADD. An error message is given instead.

The purpose of Reserved Words is to protect developers at the earliest possible time from technical problems with words that have a special meaning in some technology. For example, ADD is a badly chosen table name, because ADD is a keyword in the SQL language and therefore the RDBMS does not allow you to have a FROM clause that reads FROM ADD.

## What determines the Reserved Words list?

By way of suggestion, USoft creates a Reserved Words list of 300-odd technical words that could lead to problems. This happens when you run Create Tables for Definer, but only if:

- You run Create Tables with the "Load Initial Data” flag (the default), and:
- There are no Reserved Words already present.

As a team, you are free to create or change or expand the Related Words list as you see fit.

Access the Reserved Words list from the Definer menu by choosing **Tools, Options, Reserved Words.**


:::tip

The risk of dropping a Reserved Word from the list suggested by USoft is different from one word to the other.
However, in general, USoft recommends you stick by the suggested list. Good practice is to name your own objects only by words that steer clear of any possible mix-up with technicalities.

:::
