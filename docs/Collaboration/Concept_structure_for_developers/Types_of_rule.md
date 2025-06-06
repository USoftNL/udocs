---
id: Types_of_rule
---

# Types of rule

As a developer in a USoft team, it helps to think about rules as having different types. At the same time, the advantages are limited. Sometimes, confusion looms.

There are many different ways in which you can classify a business rule by type. For example, you can classify a rule by its formal characteristics, or by the way in which it has been implemented (whether in software, or differently, or not at all). Graham Witt, in his *Writing Effective Business Rules* (Morgan Kaufmann 2012), proposes a practical classification, based partly on formal characteristics but mainly on business purpose. The remainder of this article uses the main categories of his subdivision.

The USoft Studio tool is designed primarily to hold 2 types of language sentences. First, the special category of **definitional rules:** natural-language statements that define and describe a structure of underlying concepts and the constraints governing this structure. Second, sentences that express **behavioural business rules,** which we will here subdivide informally into **data rules, activity rules** and **party rules** here, just to get a sense of how you can subdivide business rules by their purpose.

**Definitional rules,** also called **structural rules,** formulate a necessity that is in some way immutable. Actors in the business cannot violate ("go against") a definitional rule. This is either because it is a law of nature:

```
"Water freezes at 0 degrees."

```

or because the rule is not under jurisdiction of the business, but set by a government or regulator:

```
"The high VAT percentage in the Netherlands is 19 percent."

```

or because the rule words something that the business has decided is true *by definition*, something that it stipulates as a structure to build business rules on:

```
"Each car transfer is either a one-way rental or an internal transfer."

```

A special type of definitional rule is a **definition**, which describes and delimitates the meaning of a concept:

```
"An internal transfer is a car movement performed by an EU-Rent employee."

```

## Fact-form and rule-form

In the wake of the [RuleSpeak](https://www.rulespeak.com/en/) initiative, USoft recommends using "is" (*fact-form*) for definitions and definitional rules, and the modal auxiliaries "may" or "must" (*rule-form*) for the remaining categories. "Must" is used for necessities. "May" is used for necessities if combined with "only" or with "not". Otherwise, "may" is used for possibilities:

|**Type**|**Form**|
|--------|--------|
|Definition, definitional rule|... is ...|
|Necessity|<p>... must …</p><p>... may only …</p><p>... may not ...</p>|
|Possibility|... may ...|



## USoft Studio classification labels

Returning to the chief Witt categories, USoft Studio attempts to qualify definitional rules by displaying the classification of **Term** or **Definition,** or sometimes **Category** or **Synonym.** For the remaining types of rule, it displays either **Necessity** or **Possibility**. You cannot influence this classification. It is merely an attempt by the tool to help you:

|**Type**|**Form**|**USoft Studio classification label**|
|--------|--------|--------|
|Definitional rule|... is ...|Term, Definition|
|<p>Data rule</p><p>Activity rule</p><p>Party rule</p>|<p>... must …</p><p>... may only …</p><p>... may not ...</p>|Necessity|
|<p>Data rule</p><p>Activity rule</p><p>Party rule</p>|... may ...|Possibility|



## Definitional rules, data rules, activity rules, party rules

**Definitional rules** or **structural rules** have been discussed at the beginning of this article.

A **data rule** describes some criteria that must be satisfied (demonstrated) by some data that is stored permanently, or that is included in some business transaction:

```
"A postal code for an address in the Netherlands must be made up of 4 digits and 2 capital letters."

```

```
"Each marital status must be either Single, or Married, or Divorced."

```

But data rules also describe more complex forms of data integrity, that can only be checked by comparing different related data elements, for example:

```
"The same guide must not be registered to conduct two tours that overlap on the calendar."

```

(It is doubtful if this is a true data rule. See the "Boundaries between rule types are not hard and fast." section below.)

It is tempting to consider a data rule as implicitly of a restrictive nature, but some forms can be implemented productively. A system could set any marital status that is not an allowed value to 'Single' by default. The guide example could be implemented by automatically removing, in case of conflict, the second (later) booking of the guide person.

An **activity rule** describes some criteria that must be satisfied by a process or operation while it is going on. Activity rules can be implemented restrictively:

```
"A passenger may not check in more than 24 hours before the departure time of the flight."

```

Or they can be implemented productively:

```
"Each passenger boarding a high-risk flight must undergo a security check at the gate."

```

A **party rule** describes the authorisation that a group of people has, or does not have, to either perform an activity, or to access a certain type of data (possibly under a set of additional conditions). A party rule either restricts authorisation to a subgroup with the notable effect of disallowing others:

```
"Only a patient and his GP may see medical information classified as Confidential."

```

or it states that it is the special responsibility and privilege of a party to execute something, a type of party rule that could be categorised at the same time as an **activity rule**:

```
"A special discount granted to a managed account must be approved by the local branch manager."

```

## Why bother with rule types?

Thinking about rule types can help you understand exactly what the client or rule writer wants to achieve with the rule. At the same time, distinctions between rule types are tenuous (see the next section).

Rule types *can* point the way to implementation types. There is a natural affinity between rule type and USoft implementation level. "Non-functionals" are not really (business) rules at all, but descriptions of things that target implementations must satisfy, such as "The company logo must appear on every mobile page".

|**Rule type**|**Implementation level**|**USoft tool**|
|--------|--------|--------|
|Definitional rule|Data model|USoft Definer|
|Data rule|Rules Engine|USoft Definer|
|Activity rule|Task flow|Batch section of USoft Definer (jobs, tasks, micro-flow)|
|Activity rule|Interface functional design|USoft Web DesignerUSoft Service DefinerUSoft Windows Designer|
|Party rule|Authorisation|Roles section of USoft DefinerUSoft Authorizer (user-role associations)|
|Non-functionals|Interface physical design|USoft Web DesignerUSoft Windows Designer|
|Non-functionals|Performance, speed|(any)   |
|Non-functionals|Security|Authentication in USoft Authorizer|



But this table must not be taken to define a necessary mapping. The danger is to become rigid. Many times, you need implementation at multiple levels. A party rule may require implementation at role level for security and, in parallel, at interface level for user-friendliness. A data rule may require implementation in the Rules Engine for data integrity, and special measures in a service API to achieve understandability or avoid frequent errors.

## Boundaries between rule types are not hard and fast

If the reason for having the rule:

```
"The same guide must not be registered to conduct two tours that overlap on the calendar."

```

is that tours are organised in such a way that it is *physically impossible* for one and the same person to conduct two overlapping tours, it could be argued this is a true data rule: it is not there to prevent human activity that could violate it, it is only there to prevent bad planning data in the data system. But you can also argue that this is data that *reflects* the way activities are planned and will be conducted. Certainly it is not a "data rule" to the same extent as the following rule, which is really only about data:

```
"The Australian tax office must keep all income tax administration available for 7 years after imposition."

```

One of the primary purposes of most USoft applications is to guarantee a high level of data quality in data that reflect business activity. At this level, what the data represent and therefore what they must look like is key. Whether you consider the rule to be "about data" or "about activity" is hardly relevant, and therefore it is not essential to talk about "registration" at all.


:::tip

For this same reason, often in USoft, you might as well leave out data activity verbs like "register", "record", "assign", "identify".

:::

An acceptable way to express the rule as input for the intended data integrity would be:

```
"A guide must not conduct two tours that overlap on the calendar."

```

even if this is humanly impossible for a guide to achieve. A slightly more natural expression could be:

```
"A guide cannot conduct two tours that overlap on the calendar."

```

 

 