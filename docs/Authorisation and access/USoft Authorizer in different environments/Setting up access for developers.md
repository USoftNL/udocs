# Setting up access for developers

USoft development tools (with the exception of USoft Binder) are themselves USoft applications. Developers need USoft Authorizer permissions in order to access the development environment.

In large and complex USoft projects with different teams and people in different roles, you can be very precise about who has access to what, in just the same way as you determine access to the runtime USoft applications that you build yourself.

Initially, however, most USoft teams start out as small, agile teams. They only require minimal concern about authorisation rules in Development, because USoft Binder creates default authorisation rules automatically.

## Default access permissions from USoft Binder

The development tools for which you need to be authorised have a "Create Tables" option in the context menu in USoft Binder.

When you run this "Create Tables" option, in addition to (re)creating database tables that the development tool needs, USoft Binder also creates default access permissions. They allow developers access to every part of the application.

Default access permissions are created in the tables of the USoft Authorizer tool. Therefore, you must run the "Create Tables" routine for USoft Authorizer as an initial action, so that you can have default permissions stored in the first place. If you do not perform this action, you do not have an authorisation layer, and you cannot organise access for yourself nor anybody else.

Initially, when you start a USoft development project:

1. Create an empty database (SQL Server) or database account (Oracle) for the new development team. Determine the database connect string that points at this database or database account.

2. Create a USoft Binder file. In this file, specify the database user name, database password, and database connect string as Project Properties (File, Project Properties, Database from the USoft Binder menu).

You can start USoft Binder by running "usbinder.exe" located in the \\bin or \\bin64 directory of your USoft installation.

3. In that USoft Binder file, add "USoft Authorizer", "USoft Definer" and "User Application" items (Item, New from the USoft Binder menu) .

4. For the "User Application" item, using Properties from the context menu, specify the Application Name.

5. Run "Create Tables" from the context menu of the USoft Authorizer item.

6. Run "Create Tables" from the context menu of the USoft Definer item.

7. Run "Create Tables" from the context menu of the User Application item.

You have now created initial access to USoft Authorizer, to USoft Definer (including the Web Designer and Windows Designer "GUI tools"), and the User Application for anybody who is allowed to know the database username and password or who is allowed to use your USoft Binder file. You can distribute copies of the USoft Binder file that carry the database password as a non-readable item, but beware that *anybody* who is sent this file will be able to access the environment unless and until you change the database password later. To avoid this security risk, it is better to distribute the password in some other way and let each colleague set up his own local Binder file. This way of working still does not guarantee that a developer password is known ONLY to the individual developer. See the "Password privacy for developers" section below for a discussion.

This initial authorisation is "one-user-per-project" authorisation. If you stick with this minimal default, USoft will log all changes as if they were done by one and the same person. You cannot trace who did what. Also, you cannot give different developers different levels of access. To do those things, read the next section.

## Personal authentication for development team members

To trace who did what, or to give different access rights to different developers, you need to introduce multiple username/password combinations, typically one for each team member.

A typical way of getting USoft to recognise and log a development team member as an individual is:

1. As the owner of the new USoft application, perform the steps in the previous section to give yourself access to the development environment. Keep the owner password to yourself. It is non-readable in USoft Binder.

2. Open USoft Authorizer and define the development team member as an Application User with Validation Agent = USoft and Account Type = Funneling. Specify a name and a password for the person.

3. From the USoft Authorizer catalogue on the left, open the following applications and associate the new user with the role specified (suggested):

|**Application**|**Role**|
|--------|--------|
|USAUTH  |ADMIN *or* USAUTH_USER*|
|USD     |ADMIN   |
|(The application under development, specified as "Application" in the "User Application" Binder item)|ADMIN   |



* For a discussion, see the "Password privacy for developers" section below.

4. Communicate the name and password to the individual colleagues.

This way, all members of your development team have complete access to all areas of USoft Definer. You can restrict the level of access for specific subsets of development team members by associating these members not with the ADMIN role for the USD application, but one of the other predefined USD roles. Read the role descriptions to find out in which way each of these roles restricts access.

After this initial stage, you will start using other USoft applications. In USoft Authorizer, you can control which user has access to which individual application. Here is a list of the application names of all USoft development tools:

|**USoft Application**|**Application Name**|
|--------|--------|
|USoft Authorizer|USAUTH  |
|USoft Definer|USD     |
|USoft BenchMark|USTESTER|
|USoft Delivery Manager|UDELIVER|
|USoft Services Manager|USERVICE|
|USoft Web Designer|USD     |
|USoft Windows Designer|USD     |



> [!TIP]
> If you use USoft Studio in combination with USoft Definer, you don't want people to change Business Rules in Definer. Business Rules "come in” from Studio via the Studio-Definer Import bridge. They should be manipulated at the source (ie., in USoft Studio).
> There are special [...NO_STUDIO developer roles](/docs/USoft%20for%20administrators/Creating%20a%20USoft%20Development%20environment/Authorising%20team%20members%20for%20USoft%20100.md) for USD that guarantee that Business Rules are not manipulated in Definer.

## Password privacy for developers

In previous versions of USoft, the functional side of access control (namely, the definition of what it is that each role, previously usergroup, has access to) was defined in USoft Authorizer, not in USoft Definer. For this reason, all development team members were usually given full access to USoft Authorizer. As a consequence, they were all able to find out about each other's passwords for the Development environment.

In USoft 10.0, you can continue this way of working by giving all team members the ADMIN role for the USAUTH application. This is perhaps suitable for small and informal development teams. The advantage is that each team member has full access to all resources and that you do not need to determine who is "superuser" and who is not.

On the other hand, because USoft 10.0 has moved the definition of what a role (previously: a "usergroup") gives access to from USoft Authorizer to USoft Definer, a developer team member can now define what each role gives access to whilst having his USoft Authorizer access restricted to his personal authorisation details. You do this by associating him with the USAUTH_USER role and not the ADMIN role of the USAUTH application. The advantage is that developers have password privacy. The disadvantage is that you must designate one or more team members as "superusers" who *do* have the ADMIN role of USAUTH, and that you are dependent on the intervention of these "superusers" for many actions in USoft Authorizer.

## Advanced options

In large development teams with complex applications, there are many ways to refine authentication and authorisation. For example, you can have single sign-on so that developers automatically log on to USoft with their OS username/password combinations.

 