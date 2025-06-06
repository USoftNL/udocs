---
id: User_account_mapping
---

# User account mapping

Account mapping allows authentication of a USoft account using the credentials of another account. For example, validation of a USoft application user named User1 using the password of an operating system user named User2. This has the advantage of reducing the number of passwords a user has to know. Typically, a set of USoft application accounts that serve different application roles might be authenticated by the password of one single account, optionally the password of the user's operating system account.

In the USoft Authorizer, account validation is specified for each funneling user. Setting the Validation Agent to "Account Mapping" allows the use of account names in USoft that differ from the account against which the validation takes place.

For example, two different USoft users, User1 and User2, could be validated against the credentials of operating system user OS1. For that scenario, User1, User2 and OS1 are added in the authorizers application users. The validation agent of user OS1 is set to "Operating System". The validation agents for User1 and User2 are set to "Mapped Account", with the mapped user field set to OS1. In this scenario, OS1 may but does not have to be a USoft application user. User1 and User2 are application users but can have different user groups.

In the example, User 1 and User2 may have different rights by assigning them to different user groups, but they share the same credentials of the mapped user OS1. In this way, the User1 and User2 accounts can be given to a person as USoft accounts for different roles.

A Mapped Account can be mapped onto another Mapped Account. The purpose of this is to allow accounts to stay mapped regardless of how the Validation Agent of the underlying account may change in time.

> [!NOTE]
> If an account that is used in a mapping has its name changed or is deleted, subsequent logon attempts for the mapped accounts will fail. For example, if User2 is a mapped account on User1 and User1 is validated with validation agent "USoft", User2 can log on using the password set for User1. Changing User1 to use User3 will allow User3 to log on with the password originally set for User1 but User2 will no longer be able to log on.