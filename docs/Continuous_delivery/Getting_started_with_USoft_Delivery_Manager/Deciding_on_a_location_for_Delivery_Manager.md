---
id: Deciding_on_a_location_for_Delivery_Manager
---

# Deciding on a location for Delivery Manager

USoft Delivery Manager ("UDeliver”) is a USoft application delivered by USoft, in the same way as USoft Authorizer, USoft Definer, USoft Benchmark, and USoft Service Definer. Each of these applications has its own set of tables in the database location. These sets are distinguished by table name prefixes starting with T_…, for example,

- T_AUTH_… tables for USoft Authorizer,
- T_DL_… tables for USoft Delivery Manager.

UDeliver helps you deliver applications that you have built in USoft: *user applications.* A user application runs its own tables. You can name these tables any way you like, but for obvious reasons you should avoid T_… prefixes.

In the most typical scenario, UDeliver simply delivers the user application that is built in the same database location as where UDeliver itself resides. But a UDeliver instance can potentially serve more involved purposes, because it allows you to address any application in any database location:

- You can address user applications but also USoft applications (eg., USoft Authorizer).
- You can address different versions of the same application in different database locations, for example in order to compare different versions.
- You can optionally address *multiple* user applications in the same or in different database locations.

If you have multiple user applications or application versions in different database locations, you have a choice between running **separate UDeliver instances** in multiple locations, or running a **central UDeliver instance** for all the delivery work. This central UDeliver instance could reside in a dedicated location of its own, or in the development environment of your most important user application.

> [!TIP]
> This choice is all about running UDeliver on **source** machines. The UDeliver concept of delivery is that you release deliverables from one or more source machines so that you can, as a next step, transfer and deploy these deliverables to **target** machines such as Production machines.

Choosing a central UDeliver instance only makes sense if you produce different deliverables in different database locations that are close enough in the landscape that they can be accessed by the same source machine(s). Here are 2 scenarios where you could consider using a central UDeliver instance for accessing multiple database locations.

## Scenario 1: Multiple fix repositories in a D-T-A-P arrangement

Some teams have a simple D-T-A-P (Development-Testing-Acceptance-Production) arrangement where only the D(evelopment) environment runs from repository and the T-A-P environments from files produced by UDeliver. Only Development is a source machine. The output of UDeliver is transferred to the T-A-P environments.

But other teams have a more mature ecosystem with separate fix repositories for T-A-P. This allows you to make and deliver urgent fixes ("hotfixes”) in Production even if major new work is going on in Development so that Development is temporarily unsuited for delivering fixes. In such an ecosystem, a central UDeliver instance that addresses the various fix repositories from a single location can be a good choice.

## Scenario 2: Top-level application and modules

Some teams use USoft modular development to partition application logic, but they release all the modules each time they release the top-level consumer application. With a central UDeliver instance accessing the different database locations where the different modules are developed, you can have a single Release procedure that (re)releases the entire solution each time.

> [!WARNING]
> While this way of working has become quite common, it is not actually the intended use of USoft modular development. If modules are really modular, that is, relatively independent of the consumer application, you should not typically need to release a module each time you release the consumer. In that more mature situation, each module has its own delivery executed by its own UDeliver instance. The UDeliver instance for the consumer only needs to access the database location for the consumer itself. At release time, this instance can assemble modules deliverables at file system level by calling UDeliver's **Release modules** action, instead of logging on to database locations where modules are developed.