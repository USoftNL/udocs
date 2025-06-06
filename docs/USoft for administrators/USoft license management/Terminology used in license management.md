# Terminology used in license management

**License Daemon**

This is a program that runs on the License Server and maintains a count of the number of concurrent users of each USoft component. It is only required for counted licenses.

**License Server**

This is only required for counted licenses. You must assign a computer on your network as the license server and install and run the license daemon on this computer before using USoft Series products.

**Concurrent user**

One user, working on one client will be counted as one user, regardless of the number of USoft components they are starting.

**What are Features?**

A feature represents a USoft Component. For example: User Application, Definer. It can also represent an RDMI component.

The version number follows the feature name. For example: Definer80p is USoft Developer version 8 production.

When issuing a new release, new feature names will be introduced. As a result, your old LICENSE.DAT file will not function in this new release and you will need a new LICENSE.DAT file.