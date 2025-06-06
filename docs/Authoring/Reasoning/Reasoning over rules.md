# Reasoning over rules

People and Rules Engines can reason over natural-language rules, determine what they mean for specific cases, combine multiple rules about the same business area, and find out if rules are contradictory or redundant.

This is possible on condition that, "behind” the natural-language form, the rule has a formal logical structure. In other words, the rule can be *considered* or *rewritten* as a formal structure. The main building blocks of the structure are logical operators (IF, THEN, ELSE, AND, OR, NOT) and noun concepts and verb concepts:

![](/api/Authoring/Reasoning/assets/3e7f9444-538b-4f9e-b2a2-14ad4f71a3ef.png)

![](/api/Authoring/Reasoning/assets/fba66416-fd61-4cce-8bf2-1d8a0ee2e7d8.png)

This example illustrates that:

- A sentence has multiple *clauses*. One clause words the *conclusion.* The other clauses word *conditions.*
- Logical operators play a role *between* clauses. They connect clauses.
- Noun concepts and verb concepts play a role *within* clauses.

In addition to logical operators, noun concepts and verb concepts, the natural-language rules contain well-documented implicitly available elements such as comparison operators (eg. more than), mathematical operators (eg., minus), and group functions (eg., the sum of).

Business rules do not depart from conventional first-order propositional logic except that the main clause has a modality operator: it is a claim of necessity, obligation, possibility or permission, or the reverse (absence of necessity, and so on). A good way to make this explicit is by rewording using impersonal verbs (**it is… that...**). The example may be rephrased to:

```
It is not permitted that a person is registered as a driver if not

(    she has a valid driving license and:

     - she is over 23 years of age, or

     - she has had the driving license for more than 3 years.

)
```

For a rule, universal quantification is understood. This can be made explicit by rephrasing further:

```
For all persons (

            It is not permitted that the person is registered as a driver if not

    (            she has a valid driving license and:

               - she is over 23 years of age, or

               - she has had the driving license for more than 3 year.

    )

)
```

This is not the place to include an explanation of propositional logic. The sole aim of this article has been to drive home the point that natural-language rules have an underlying logical structure that machines or humans can use to draw conclusions.

Further guidance in this section concentrates on

- **patterns of reasoning** that come into play when people use your rule (forward chaining, backward chaining, constraint implementation).
- **practical implications** of logical structure and patterns of reasoning for rule authors.

 