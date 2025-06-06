---
id: Client_sessions
---

# Client sessions

In previous versions, when the user had no server requests for a longer period of time, it could happen that the session on the server was timed-out. The next server request resulted in a nasty error message and the login page was thrown into place discarding all uncommitted manipulations that were made.

Although the functionality has changed, it is not fixed completely. What has been changed is that the application installs a timeout that logs out after a given period of time. By default this period is 15 minutes. This period can be altered by calling the following function:

*Syntax*

```
.setTimeout([options])
```

where **[options]** are options passed to the function.

Returns nothing.

The **setTimeout** function changes what happens when a client session ends when the user has no server requests for a period of time. The **[options]** parameter is an object that can have the following items:

- **minutes**:  Period of time in minutes. Default is 15.
- **func:** Function to be called when period of time is exceeded. Default is **$.udb.showLogin()**.

*Example*

```
$.udb.setTimeout({ minutes: 10 });
```

It is possible to override the default function to show a warning dialog for a moment of time before showing the login. When the user responds to that dialog, a server request could reinstate the server session.