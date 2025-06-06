# Running from flat files or repository

In each environment, you run your USoft application(s) for a specific purpose: Test, Acceptance, Production, Sales Demo, Prototype, Tutorial, Classroom Course...

In general, a USoft application in a repository may be run:

- From flat file.
- From repository.

USoft is a repository-based development platform by definition. For this reason, in the Development environment, you always run from repository. Because Delivery Manager allows you to deliver the same kind of USoft flat files that you can also produce from within the development tools (files with extensions .CON,  ESI, .UMG, .SMG), one option you have is to run from repository *only* in Development and to run all other environments from flatfile:

![](/api/Continuous%20delivery/Delivery%20Manager%20background%20information/assets/96fc001a-2998-4ca4-92ab-f3ff9ef104ae.png)

Running all target environments from flat fileBecause Delivery Manager also allows you to deliver metadata to .XML files that are re-importable into databases on target machines, another option is to have target environments that run from repository. For example, you could have the following ecosystem of 7 environments in which 4 environments are repository-based:

![](/api/Continuous%20delivery/Delivery%20Manager%20background%20information/assets/ccdb131a-2ca2-4765-a912-6f87b4d10286.png)

Fix environments running from repository on target machinesEnvironments that run from repository allow you to make changes to the metadata. The ecosystem shown here allows you, in each of Test, Acceptance, and Production, to make changes to the application independently of what is currently going on in Development. For example, if a bug must urgently be fixed in Production, you can make and test the fix in the Production Fix (Prodfix) environment and then re-create flat files that you deliver to Production. The advantage is that you do not need to wait for other ongoing work to be finished and tested before something new can be delivered from Development. The drawback is that re-applying the Production fix to the other repository-run environments is a separate and essential task that requires discipline and book-keeping: if you forget this task (referred to as *backporting*), the bug will be re-appear in Production when you next copy deliverables between the repository-run environments.

This help topic has only discussed two typical extremes. Many other set-ups are possible. For example, you could have a way of working where, as a rule, you only run from repository in Development, but occasionally you create a repository-run copy of Development to let a second team work on a special area of a big application, away from the building pit of the regular Development team. When the second team is done, their work is backported to Development and their repository copy is discontinued. USoft Teamwork Object Shopping is a USoft technology specialised in separating a repository area from its surroundings and exporting it so that it may be re-imported into another repository (in this case, into Development).