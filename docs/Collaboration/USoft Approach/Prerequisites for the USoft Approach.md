# Prerequisites for the USoft Approach

To make the USoft Approach a succes, you need to make sure all the development team members are trained in the sections of the USoft platform appropriate to their task. Standard USoft training material has 3 sections:

- Basic developer training suitable for all team members who need to understand the USoft platform.
- Expert developer training suitable for programmers or other technical colleagues who need to specialise in an area, for example, interoperability with Java, .NET, R or Python; service-based frameworks; advanced repository management or constraint writing; or DevOps-type delivery of USoft applications.
- Training for those overseeing the team effort: "product owners" in Scrum or "client representatives" in the USoft Approach. These team members are also referred to as "business rules specialists" because they have special understanding of the benefits and prerequisites of the business rules approach in a large IT project.

When you start a USoft project, make sure you have:

- A business rule strategy.
- An effective infrastructure.

## A business rules strategy

USoft gives you a lot of freedom to organise your USoft Approach exactly in the way that is most tailored to your needs and situation.

But this requires that you *make explicit choices.* You need a minimum of conventions shared by your entire team that tell everybody how business rules are put to advantage. What works for you, depends on many things:

- Is the client just interested in rules-based software deliverables, or do they (also) want to use the business rules and business vocabulary in USoft Studio themselves? This will determine to some extent who has access to what, and who is responsible for writing and validating what.
- Does the client have special wishes concerning the approach? Do they want you to apply an Agile methodology like Scrum? This will determine to some extent whether your team wants to use the rules in USoft Studio *just* as a single-point-of-truth for business specifications, or whether you want to invest in systematically mapping every business rule to software implementations so that you get traceability.

## An effective infrastructure

You need an effective **infrastructure,** an appropriate IT landscape of connected environments. A frequent mistake is to start a USoft project with too little infrastructure (not enough machines), with the misguided idea that you can always gradually add machines when needed. This usually costs more than what you gain by the postponement, and this cost often remains hidden because, to compensate for the lack of infrastructure, team members tend to perform a lot of extra manual work.

In addition to developer desktops or laptops, which are usually individualised, you should have **at least 2 shared environments** (Test and the future Production) right from the start. You can then add further environments later as needed.

A popular infrastructure is DTAP (Development, Test, Acceptance Test, Production). In DTAP, one or more computers are dedicated to Development. From there, deliverables are first transferred to Test and Acceptance Test environments, and finally to Production once all is well.

Do not confuse acceptance testing in the Acceptance Test environment with the Acceptance subphase, in which tasks are carried out to make sure that the organisation actually uses production deliverables correctly and successfully. Acceptance tests are part of the DEFINE phase. Acceptance as a task is part of the DELIVER phase.

You can set up delivery paths from the Development environment to other environments in a number of ways. In large projects, a sequential approach is often appropriate:

![](/api/Collaboration/USoft%20Approach/assets/629769ad-8741-4b8b-9b57-e1daaf60f132.png)

In smaller projects, it is often appropriate to deliver all the materials to a file-based location and distribute them to other environments from there:

![](/api/Collaboration/USoft%20Approach/assets/10f40755-0a6e-432d-bca1-087209bd826e.png)

USoft’s Delivery Manager has extensive Repository Management and Continuous Delivery features. This makes it possible to create additional environments easily, a possibility often overlooked. Get into the habit of creating a side branch for practical customer-facing purposes such as Prototype, Demo, Training, Marketing, Sales Presentation, Sandbox, Onboarding…

![](/api/Collaboration/USoft%20Approach/assets/8471f093-dbe2-4cbb-89d9-0ba6f4f9346f.png)

 