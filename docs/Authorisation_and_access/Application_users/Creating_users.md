---
id: Creating_users
---

# Creating users

To create a user:

1. Right-click on Users in the project catalog, and choose New User.

The New User wizard appears.

2. Enter the requested information in each of the wizard's dialogs.

Alternatively, you can choose to set all the properties of the new user manually:

1. Choose Define, Application Users.

The Application Users window appears.

2. Enter the name of the new user.

3. If the user is to have direct access to the database, enter the RDBMS user name.

4. Click the Validation Agent button, and from the dropdown list choose the party that is to validate the user name and password.

5. If USoft or USoft Hashed was chosen as the Validation Agent, enter the password for the user. Note that this is not echoed to the screen: each character you type is shown as an asterisk for security reasons.

6. If Mapped Account was chosen as the Validation Agent, enter the mapped user.

7. If LDAP or External Service was chosen, the agent info required by the (application developer defined) RDMI component for credential checks can be added.


:::note

**NOTE 1:** For RDBMS and Funnel users, click the Update button, and the Update User Rights window appears. For more information, see " Database grants "

:::


:::note

**NOTE 2:** If a user accesses the RDBMS both directly and through a funnel account, choose 'RDBMS'. This could be the case, for example, if the user accesses the client-server application directly, but accesses the Web application through a funnel account.

:::

 