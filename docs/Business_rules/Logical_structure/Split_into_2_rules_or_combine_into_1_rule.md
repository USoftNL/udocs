---
id: Split_into_2_rules_or_combine_into_1_rule
---

# Split into 2 rules or combine into 1 rule?

Rules in a body of shared guidance are supposed to be silently connected by a universal AND.

As a consequence, if conditions are separated by AND at the highest level, you effectively have 2 logical rules rolled into 1 language statement.

![](./assets/72c16c9a-8874-4777-a951-efba7dfbb5fb.png)

You can split this into 2 rules without changing or losing meaning:

![](./assets/c53f3b19-39ce-4f94-833f-a21c1956cc99.png)

Should you split or combine? There is a trade-off here. Split rules are shorter and easier to read. Combined rules can make it easier to see at a glance what the preconditions are for a specific situation to apply:

![](./assets/b2af50b7-4ebd-4f0a-a53c-2658400e0762.png)

Notice that the second condition build on the first ("that branch”). This seems a further argument for combining them in 1 rule. But also notice that USoft Studio will automatically present the 2 rules when they both need to be visible:

![](./assets/aa74568c-53e0-481b-b635-346e0055d546.png)

 

Here is another example where you have this trade-off:

![](./assets/ba40919a-0bd6-4ce5-b842-e46e3297803a.png)

If there are *many* conditions and they are needed only in 1 place, combining them into 1 rule is a lot less work and makes for easier reading:

![](./assets/a69586b7-5012-4f93-9dc3-cc25f251f337.png)

Compare to:

![](./assets/cb10f24a-d318-467b-b530-19d1dbb07b6c.png)

 