---
id: Oracle_requirements
---

# Oracle requirements

Your Oracle RDBMS must be active before you attempt to install and run USoft Developer. The client PC must have been set up with the appropriate Oracle client software, and connections to the RDBMS must be working. Refer to your Oracle documentation for details.

There are a number of specific system requirements which must be satisfied if you intend to use USoft Developer with an Oracle RDBMS. You must check that your system complies with these requirements before you proceed with the installation of USoft Developer.

Refer to your Oracle documentation for more detailed explanations of the requirements described here.

## Supported versions of Oracle

### USoft 11.0

USoft 11.0 supports the following versions of the Oracle RDBMS:

- Oracle Client 23c
- Oracle Client 21c
- Oracle Client 19c

Most drivers for older Oracle versions remain available in USoft 11.0, but proper working is not guaranteed, and support requests are only solved for the latest drivers from the above list.

### USoft 10.1

USoft 10.1 supports the following versions of the Oracle RDBMS:

- Oracle Client 12c (obsolete)
- Oracle Client 18c
- Oracle Client 19c

Most drivers for older Oracle versions remain available in USoft 10.1, but proper working is not guaranteed, and support requests are only solved for the latest drivers from the above list.

## Oracle network software for client PCs

If you use the Oracle RDBMS, you need Oracle client software to run Oracle on a network.

## Creating USoft tables in Oracle

USoft Developer must be able to create tables in Oracle. Refer to your Oracle documentation for details of how to set up new users, and how to grant them CREATE TABLE, CREATE PROCEDURE, CREATE SEQUENCE, CREATE ROLE, and CREATE VIEW privileges. These privileges are only required for the application owner.

## Tablespaces

If you install the complete USoft Product Set, table space for up to 300 tables, plus the associated indexes and sequences, will be required. This requirement will increase as applications are developed. As a guide, 10 Mb of table space will be required to install the complete USoft product set. Refer to your Oracle documentation for details of how to alter table space settings. For additional USoft Developer users, the table space requirement will depend on your environment:

- If each user has their own repository, add 10 Mb per user.
- If all users share the repository, add 1 Mb per user.
- For each Web Designer user account, reserve 10 Mb of table space.

 