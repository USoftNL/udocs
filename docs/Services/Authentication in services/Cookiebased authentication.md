# Cookie-based authentication

Cookie-based authentication uses HTTP cookies to authenticate client requests and maintain session information. USoft Service Framework usees Cookie authentication if the **Session expiration seconds** field of the connection used to connect to the rule service has a value bigger than 0.

- If the value of this field is 0, no session is made on the server, the response does not contain a cookie.
- If the value of this field is bigger than 0, a session is created on the server, a cookie is created and sent to the client, and the client may use the cookie to log in again to the service framework.