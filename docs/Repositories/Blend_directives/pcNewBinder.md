---
id: pcNewBinder
---

# pc:NewBinder




:::note

This article is about the **pc:NewBinder**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:NewBinder**

Generates a USoft Binder file with the "Common Properties for Repository and Application" option.

*Syntax*

```
<pc:NewBinder
    filepath="*filepath*"
    projectname="*project-name*"
    projecttype="*project-type*"

    user="*user*"
    pwd="*password*"
    storepassword="{true|false}"
    rdbms="*rdbms*"
    connection="*connection*"
    owner="*owner*"

    separate="{true|false}"
    dduser="*user*"
    ddpwd="*password*"
    ddstorepassword="{true|false}"
    ddrdbms="*rdbms*"
    ddconnection="*connection*"
    ddowner="*owner*"

    module="*module*"
    language="*language*"
    variables="*variables*"   >

*item-element*
    ...

*item-element*  ::=  < *item-element-name item-attributes* />

*item-element-name*  ::=  { Definer        | DeliveryManager | 
                              ServiceDefiner | Upgrade |
                              WebDesigner    | WindowsDesigner | 
                              Authorizer     | BatchRunner |
                              BenchMark      | FreeObject      | 
                              RulesService   | UserApplication }

    <Definer name="Definer" special=""/>
    <DeliveryManager name="WindowsDesigner" application="{$user}" special="" showlogo="true"/>
    <ServiceDefiner name="WindowsDesigner" application="{$user}" special="" showlogo="true"/>
    <Upgrade>
    <WebDesigner name="WebDesigner" application="{$user}" special=""/>
    <WindowsDesigner name="WindowsDesigner" application="{$user}" special="" showlogo="true"/>
    <Authorizer name="Authorizer" special=""/>
    <BatchRunner>
     <BenchMark>
    <FreeObject>
    <RulesService name="RS" servicename="TEST" port="7777" startatboot="false" />
    <UserApplication name="Application" application="{$user}" special=""/>

</pc:NewBinder>

*project-type*  ::=  { 0 | 1 }

*rdbms*  ::=  { oracle | sqlserver }
```

The required filepath is the filename and location on the file system where the Binder file is generated. If the file already exists, it is silently overwritten.

The required projectname is the Project Name that you want to appear in the Project tab of the generated Binder file.

The required projecttype is the Project Type (Development or Production) that you want to appear in the Project tab of the generated Binder file:

- If project-type = 0, Project Type = Development.
- If project-type = 1, Project Type = Production.

The required user, owner, pwd, storepassword, rdbms and connection are (respectively) the User, Owner, Password, "Use Password Next Time", RDBMS, Database and Owner properties as found on the Database tab of the generated Binder file.

Use the separate attribute to specify that the Binder is to use separate settings for repository and data.

If you use separate settings:

- Set the User, Password, "Use Password Next Time", RDBMS, and Database, and Owner properties for the Repository by setting dduser, ddowner, ddpwd, ddstorepassword, ddrdbms, ddconnection, ddowner.
- Set the User, Password, "Use Password Next Time", RDBMS, and Database, and Owner properties for the Application by setting user, pwd, storepassword, rdbms, connection, owner;
- Use the module, language, variables attributes to set the corresponding Binder items as found on the Project tab.


:::note

For the USoft concepts of User and Owner, go to [USoft Binder for administrators](/docs/USoft_for_administrators/USoft_Binder/USoft_Binder_for_administrators.md).

:::

For each of the *optional item-elements* (Authorizer, ...), an corresponding item is generated in the Binder file. Each *item-element* has a required **name** attribute. This is the name displayed in the list item of the generated Binder file. In addition, *item-elements* may have attributes that correspond to settings known to USoft Binder, In combination with a given *item-element-name*, attributes may be required, optional, or inappropriate, in the same way as in the USoft Binder application itself. For example, **application** is not possible with Definer; **program** is functionally required for **FreeObject**.

```
application
program
servicename
showlogo
special
startatboot
startin
startupoptions
```

*Example*
 

```language-xml
<pc:NewBinder
    filepath="c:\temp\mybinderH.usb"
    projectName="TEST"
    projectType="0"
    user="TEST"
    owner="TEST"
    pwd="TEST"
    rdbms="oracle"
    connection="XE" >

    <Authorizer name="Authorizer" special=""/>
    <Definer name="Definer" special=""/>
    <WebDesigner name="Web Designer" application="{$user}" special=""/>
    <WindowsDesigner name="Windows Designer" application="{$user}" special="" showlogo="true"/>
    <UserApplication name="User Application" application="{$user}" special=""/>
    <RulesService name="Rules Service" servicename="TEST" port="7777" startatboot="false" />

</pc:NewBinder>
```

 