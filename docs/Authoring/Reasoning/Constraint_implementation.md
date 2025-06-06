---
id: Constraint_implementation
---

# Constraint implementation

As an alternative for forward chaining or backward chaining, you can think of a rule as a **constraint**.

The idea is that whatever happens, some situation is to be avoided. In a constraint implementation, a "red light” must go on when that situation threatens to come about:

![](./assets/19fb281f-fe55-4375-b30f-1f06fc6e955c.png)

This pattern of reasoning does not have direction: it does not "start” anywhere.

Instead, you focus on allowed and unallowed cases, not on triggering events.

![](./assets/85e1657f-8f65-462c-954a-fd511dad1c73.png)

![](./assets/e1b428c4-ca2b-4862-868c-71b1f80a28c2.png)

 