---
id: Authorising_team_members_for_USoft_91
---

# Authorising team members for USoft 9.1

> [!TIP]
> This article is about authorising team members in a **USoft 9.1** development environment.
> For the USoft 10.0 situation, click [here](/docs/USoft%20for%20administrators/Creating%20a%20USoft%20Development%20environment/Authorising%20team%20members%20for%20USoft%20100.md).

When you created authorisation tables, the Create Tables options you ran has automatically granted yourself, as repository owner, access to the USoft Authorizer tool.

You now need to use USoft Authorizer to set up access rights to USoft Developer for the other development team members.

Team members play typical roles in a project. Think of developers, architects, analysts and administrators. USoft recommends that you assign each team member to one of more of such user groups and then specify authorization for each user group. Each project is different but to give you a quick start, USoft has pre-defined typical user groups for you, for which you can change or drop access rights later as required.

In addition to the USD application, development team members may also need to access other USoft applications used in your project, such as USoft BenchMark (default application name USTESTER).

Access rights and membership of user groups can be changed at any time.

## Authorising team members in Development

1. As the owner, from the USoft Binder file, open the Authorizer item.

2. Run the Load Definer User Groups option from the Tools menu in the Authorizer.

3. Register all the database users you have created for the development team members as Application Users (Define, Application Users).

4. For each database user, specify that he or she has access to the USD application. This is the USoft Developer tool. You do this by specifying the database user as a member of one of the user groups of the USD application. The Authorizer has a New User Wizard which makes it easy for you to complete this task.

5. Finally, since developers log on to the RDBMS using their own database user name, each of them (except the repository owner) needs to be granted access to the repository tables at RDBMS level, too. Grant these RDBMS privileges by running the Update Application Rights tool in the Authorizer. Each time you extend access rights to new users, you need to re-run this utility.

 

 