# CORS configurations

A  **CORS configuration** is a set of rules exposed by a server that express the extent to which the server allows cross-domain requests. A cross-domain request is a request that programmatically gets or sets resources that have their origin on a different server.

Each server in USoft Service Definer must be associated with exactly one CORS configuration. This configuration determines the CORS HTTP Headers that the server will issue as a response to an initial client request. Access to any cross-domain resources called by the client as part of the initial REST service call will be checked against the CORS rules dictated by the configuration. If the rules are too restrictive, the request will fail.

## Default CORS configuration

If you do not currently want to enforce specific CORS rules, simply associate your server with the 'Default' CORS configuration delivered as part of the USoft Service Definer. This configuration contains the most permissive rule settings possible (cross-domain requests are allowed from all origins, via all four methods: GET, PUT, POST, DELETE, and so on).

## CORS Rules

A CORS configuration is made up of a set of at least 1 CORS Rules record. Creating multiple CORS Rules records for a configuration only makes sense if these records have different settings for the **Allow Origin** attribute, pointing to different domains (or sets of domains) on the Internet, so that for each cross-domain request exactly 1 of the CORS Rules records applies. If you have the same CORS Rules for all domains, you must have a single CORS Rules record with **Allow Origin** set to "*" (the wildcard for 'all domains').

In addition to **Allow Origin** attribute, each CORS Rules record has the following attributes. Each maps to an HTTP Header that is part of the CORS protocol, as follows:

|**CORS Rule attribute**|**CORS HTTP Header name**|
|--------|--------|
|Allow Methods|Access-Control-Allow-Methods|
|Allow Headers|Access-Control-Allow-Headers|
|Expose Headers|Access-Control-Expose-Headers|
|Max Age |Access-Control-Max-Age|
|Allow Credentials|Access-Control-Allow-Credentials|



Elements in attribute values are separated by commas. For example attribute values, look at the CORS Rules records of the 'Default' CORS configuration.

> [!TIP]
> If you have a long list of comma-separated values in the Allow Methods, Allow Headers, or Expose Headers field, right-mouse-click and choose Values. This allows you to view or query the values in a manageable list.

## Viewing CORS configurations

To view a CORS configuration:

1. Choose Define, Servers from the menu.

2. In the Servers window, retrieve a server (press F2, F3 to retrieve all). Alternatively, you can double-click a server in the Servers folder in the catalog on the left-hand side.

3. Click the Security tab.

4. Click the 'View All Configurations' button at the 'CORS configuration' field.

A window or tab appears with a list of CORS configurations in the top half of the window/tab. The bottom half of the window/tab displays all the CORS Rules records that belong to the configuration that you have selected in the top half.

## Defining a new CORS configuration

To define a new CORS configuration:

1. Choose Define, Servers from the menu.

2. In the Servers window, retrieve a server (press F2, F3 to retrieve all). Alternatively, you can double-click a server in the Servers folder in the catalog on the left-hand side.

3. Click the Security tab.

4. Click the 'View All Configurations' button at the 'CORS configurations' field.

A window or tab appears with a list of CORS configurations in the top half of the window/tab. The bottom half of the window/tab displays all the CORS Rules records that belong to the configuration that you have selected in the top half.

5. Click in an empty line in the top half of the window/tab. Type the Configuration Name of your new configuration and a short Description.

6. Click in the bottom half of the window/tab and type the CORS Rules records that you want to define for this configuration. Save work.

For your new configuration to become active, you need to associate it with a server, publish, and restart that server.

## Associating a (new) CORS configuration with a server

To associate a (new) CORS configuration with a server:

1. Choose Define, Servers from the menu.

2. In the Servers window, retrieve the server (press F2, type the Server name, then press F3 to retrieve). Alternatively, you can double-click the server in the Servers folder in the catalog on the left-hand side.

3. Click the Security tab.

4. Click the small lookup arrow to the right of the CORS Configuration field (just left of the 'View All Configurations' button). From the dropdown list, choose the CORS configuration that you want to associate with the server.

###  