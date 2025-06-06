---
id: Getting_started_with_USoft_100_authorisation
---

# Getting started with USoft 10.0 authorisation

## Getting started with authorisation in a NEW application

This section is about getting started with authorisation when you create a **new** application with the USoft 10.x platform, as opposed to upgrading an existing USoft application from a previous version.

In your first prototypes, authorisation is NOT likely to be your primary concern. You first want to try out and visualise some of the main functionality without immediately shielding areas off from specific groups of users.

For this reason, by default, a USoft 10.x application is **open to all users** unless and until you take specific action in the area of authorisation.

This default behaviour is visible because it is implemented by a special initial **role** called ADMIN:

- Your new application automatically has an initial role called ADMIN.

- In USoft Definer, when you create a table, a job or a component, this new resource is associated by default with this ADMIN role. Users who have the ADMIN role therefore have access to all new resources.
- In Development, when you run Create Tables for your application in USoft Binder, you are automatically given the ADMIN role to your application. This gives you default runtime access to all new resources.

To view the ADMIN role and the fact that it has default access to all resources:

1. In USoft Definer, choose Define, Roles from the menu. The Roles info window opens.

2. Query the ADMIN role. See that this role has full table rights, job rights and component rights. You can see this by clicking on the Table Rights, Job Rights and Component Rights tabs.

You can see that all the rights have the value of Default. Because the 6 "Default ... Scope" settings are Foreground-and-Background for the role, and Foreground-and-Background is the widest scope allowing full access, the ADMIN role has full access to all resources unless and until you change this.

## Getting started with authorisation after upgrade from USoft 9.1

This section is about getting started with USoft 10.0 authorisation after you have **upgraded** an existing USoft 9.1 application to USoft 10.0 using the Upgrade Tool.

In this situation, the Upgrade Tool will have:

- converted all your 9.1 **user groups** into 10.0 **roles**.
- transferred your **table rights** and **column rights** from USoft Authorizer to USoft Definer.
- left your application running with **distinct roles**, as opposed to running with merged roles.

The result of all this is that in the new situation, the access rights associated to each role are equivalent to the access rights that the user group with the same name had in the old situation.

To plan your authorisation in this situation, the only explicit decision you need to take is whether you want to switch to the new merged-roles mode. If you do that, you may want to re-organise some of your access rights.

Apart from this decision, you can just continue to work on authorisation like you did before, except that you don't give access rights to **user groups** in **USoft Authorizer** anymore. Instead, you now give access rights to **roles** in **USoft Definer**.

 

 