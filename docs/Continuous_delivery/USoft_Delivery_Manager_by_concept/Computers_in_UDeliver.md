---
id: Computers_in_UDeliver
---

# Computers in UDeliver


:::note

This article is about the **computer** concept in USoft Delivery Manager ("UDeliver”).

:::

A  *computer* is a physical machine that participates in your DTAP arrangement. In that role, it is also referred to as an environment.  

Each computer is uniquely identified by the following call to the RulesEngine internal component:

```
select RulesEngine.GetProperty( 'ENV COMPUTERNAME' )
```

You can register a computer name in the Computers window in Delivery Manager. However, it is important to note that the **only** purpose of registering a computer name in this way is that it lets you register target variables for that computer. This, in turn, allows you to create deploy scripts that substitute different values for different computers using the same deliverables (the process of *configuration*).

For this reason, it is not typically necessary to register source-side machines. On the other hand, if you use configuration, it is often practical to register development machines and test machines so that you can test configuration on these machines.