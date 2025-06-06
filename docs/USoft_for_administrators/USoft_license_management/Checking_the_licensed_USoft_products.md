---
id: Checking_the_licensed_USoft_products
---

# Checking the licensed USoft products

A possible cause of license problems is having insufficient license.

To determine this, you can query the internal license manager component, and see which USoft products are installed:

1. In the Definer, open the SQL Command dialog.

2. Type:

```
INVOKE licensemanager.query
WITH
SELECT null

```

Depending on your license, this INVOKE statement must result in a list like the following:

```
Setup80p   31-dec-2050
Creapp80p   31-dec-2050
Authorizer80p   31-dec-2050
Definer80p   31-dec-2050
...

```