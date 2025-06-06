---
id: Modelling_scheduled_jobs
---

# Modelling scheduled jobs

You can model facts about [scheduled jobs](/docs/Task%20flow/Job%20scheduling/Scheduling%20a%20job.md) as part of your USoft application model.

### Idea

USoft is specialised in modelling data structures and business rules.

It's a good idea to actually model all relevant information about scheduled jobs. This applies to:

- Information about what job should be started and when
- Information about parameters to be passed to the jobs
- Information about authorisation of user groups to run batch jobs

### Advantages

Here are some advantages of this technique:

- You have full control over the functionality of the scheduled jobs. For example, you could model that jobs are of different types. Each type could be triggered under a different set of conditions.
- You have all the technical USoft programming options available. You can have job scheduling via constraints, iterative decisions, subject to data constellations or to role authorisation, combined with interactive triggering by users...
- Job scheduling can be associated with menu options and authorisation rules. For instance, a group of users could be enabled to schedule a job indirectly, without also being able to call the jobs directly (interactively).
- Job scheduling can be defined at development time, at runtime, or a mix of the two.

### How to model job scheduling

Every team has different requirements. You should not add refinements until you really need them, but here are a few tips.

You typically need at least a parent table of **job runs** where you keep the fact that a job with a given name must (next) execute at a given date-and-time. When jobs run, you likely want to enrich this data by storing after-the-fact information in extra columns, such as when the job run finished (timestamp columns), and whether the job ended successfully or with errors (status columns).

Jobs typically take input parameter values, so you also typically need at least a child table that keeps name-value pairs of **job run parameters** that you pass to each job run. Different job parameters have not only different *values,* but also different *names* and *datatypes*, and not every job takes the same *number* of parameters. For all these reasons, it is usually difficult to code a single job execution call for different scheduled jobs. But you can easily bridge these differences in a number of ways, for example by branching in decision Yes Actions and No Actions.