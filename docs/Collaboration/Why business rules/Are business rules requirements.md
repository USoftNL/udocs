# Are business rules requirements?

A business rule such as:

![](/api/Collaboration/Why%20business%20rules/assets/25e13e07-b47c-4883-a52f-2cfd5ffaf1fe.png)

looks very much like a requirement. If you do Scrum and you use Jira or a different issue tracker as a requirements management tool, you have "tickets" that contain small bits of text expressing what must be done ("built", "implemented"). In an issue tracker, you can register and track-and-trace that the item has been scheduled, built, implemented, tested... It is very easy to image that the business rule of this example is the text of such an issue or ticket.

It is true that most business rules have many things in common with itemised requirements in issue tracker tools.

At the same time, the semantics behind the two are different. Business rules describe how a business is *run,* whether or not aspects of it are supported by software. Software requirements describe how software must *change* to accommodate a new situation: they are part of a *project* to change something.

Rules apply until they are no longer in force. Requirements (in most methodologies) become fairly useless once the project phase they belong to has been completed.

Otherwise, business rules and requirements operate at the same level. They are not about the "why": the motivations or reasons of the organisation to do something in a certain way. They are also not about the "how": the actual way in which operators or software solve the problem. They are both at the intermediate "what" level: this level is more concrete than an underlying wish, motivation or policy; but it is not as concrete as an actual solution.

There is also an interdependency, a kind of circular movement: rules *give rise to* requirements: because you want to run your business a certain way, you have requirements a certain way. Conversely, once you come to implement such a requirement, this changes not just your software, but also your business conduct: implemented requirements change the daily run of your business.

In summary:

![](/api/Collaboration/Why%20business%20rules/assets/2816b8db-2114-49c1-b9f3-1a64a370f875.png)

Some USoft teams like to *combine* business rules and user stories. If you want to do that, read the sections about user stories in the USoft Studio in-product documentation.

 