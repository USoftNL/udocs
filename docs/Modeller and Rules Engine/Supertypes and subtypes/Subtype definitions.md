# Subtype definitions

Some supertypes are categorised using multiple schemes. Each categorisation scheme results in a group of subtypes. For example, branches of a car rental organisation could be categorised by **owner** (depending on whether the branch is owned or leased by the branch organisation) and, alternatively, by **location**.

This results in a model with multiple **subtype sets.** In the example, subtypes 'Owned Branch' and 'Leased Branch' are in one subtype set. Subtypes 'City Agency', 'Airport Branch', and 'Hotel Desk' are in another subtype set.

![](/api/Modeller%20and%20Rules%20Engine/Supertypes%20and%20subtypes/assets/1844ce21-e203-4468-bd8b-2e1d32eca475.png)

In USoft Definer, you can model subtype sets as **subtype definitions** of which each subtype in the set is an **element**. The purpose of doing this is that, as a next step, you can easily express certain rules that may apply to the subtype set:

- You can express that the subtype set has the **exclusivity rule**. This applies when a supertype instance can be at most 1 one of the subtypes in the set. If the exclusivity rule is defined for Subtype Definition: BRANCH_LOCATION, then each Branch must be a city agency OR an airport branch OR a hotel desk. It cannot be a combination of these.

- You can express that the subtype set has the **totality rule.** This applies when a supertype instance must be at least 1 of the subtypes in the set. If the totality rule is defined for Subtype Definition: BRANCH_LOCATION, then there can only exist Branches that are a city agency, airport branch, or hotel desk. There are no other locations.

> [!CAUTION]
> It is not necessarily practical to define Subtype Definitions in USoft Definer, even if (conceptually) you can distinguish subtype sets. USoft Definer has many other constructs that may be more practical. For example, a good alternative to having the BRANCH_OWNER Subtype Definition could be to have 2 Relationships between BRANCH and ORGANISATION, one with Parent Role "OWNS" and the other with Parent Role "LEASES". The exclusivity rule could then be expressed by constraint SQL of the following type:

```
SELECT    ''
FROM      branch
WHERE     owned_by  IS NOT NULL
AND       leased_by IS NOT NULL
```

## How to define

Before defining a Subtype Definition for a subtype set, consider whether the exclusivity rule or the totality rule (or both) apply to the subtype set. If neither apply, defining the Subtype Definition serves no practical purpose.

To define a Subtype Definition:

1. Choose Define, Subtype Groups, Definitions from the USoft Definer menu.

2. Enter a Definition name, for example, BRANCH_LOCATION.

3. Enter the name of the supertype.

4. To get USoft to enforce the exclusivity rule for the subtype set, set Exclusivef to either 'Immediate' or 'Deferred'. If you choose 'Deferred', the application will not enforce the rule until the user commits. The advantage is that you avoid early error messages. The disadvantage is that the user is not informed about the rule until commit.

5. To get USoft to enforce the totality rule for the subtype set, set Total to either 'Immediate' or 'Deferred'. If you choose 'Deferred', the application will not enforce the rule until the user commits. The advantage is that you avoid early error messages. The disadvantage is that the user is not informed about the rule until commit.

6. In the Elements box, type a list of all the subtypes in the set.

7. If the exclusivity rule applies (you have set Exclusive to 'Immediate' or 'Deferred'), then for each of the listed subtypes, consider if you want USoft to de-select other subtypes if a subtype is selected. If you do, check the "Automatic Change" box.

> [!WARNING]
> *Example*
> You have a BRANCH Subtype Definition with subtypes OWNED_BRANCH and LEASED_BRANCH. You set the exclusivity rule for this subtype set.  This means that a branch cannot be at the same time an OWNED_BRANCH and a LEASED_BRANCH. You set "Automatic Change" for OWNED_BRANCH. This means that for an owned branch, if the user sets the BRANCH to LEASED_BRANCH by setting LEASED_BRANCH = 'Y' in the BRANCH record, USoft will automatically set OWNED_BRANCH = 'N' and will also attempt to drop the OWNED_BRANCH record, thereby dropping data in OWNED_BRANCH subtype columns. This automated behavior applies only when the end user updates the BRANCH record. It does not apply if the end user expresses that the branch is an owned branch by inserting a new OWNED_BRANCH record.

8. For each of the listed subtypes for which you have checked the Automatic Change box, consider if you want to check the Confirm box. If you do, the user is warned of the behavior and asked to confirm the switch to the other subtype. If you do not, the Automatic Change behavior described in Step 7 is performed silently.