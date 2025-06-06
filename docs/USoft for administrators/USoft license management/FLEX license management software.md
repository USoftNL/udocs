# FLEX license management software

USoft Series uses FLEXlm license management software from Acresso Software. FLEXlm delivers high-performance multi-user license checks for features specified in the license file. This is a text file that can be read with any text editor.

> [!CAUTION]
> Do not edit this license file. This makes it unusable.

## Three-server redundant license servers

FLEXlm supports a set of three license servers to be used in a redundant manner. If any two of the three license servers are up and running, the system is functional and hands out its total complement of licenses.

> [!NOTE]
> The use of two license servers is strongly discouraged, because a set of redundant server nodes with only two server nodes gives you two points of failure. You must always have both server nodes running.

When redundant servers are started, they elect a master, which performs all licensing operations. The other two servers are there to provide a secure licensing mechanism in the event of hardware failure, or if the master server node needs to be rebooted. Should the master fail, if two servers are still running, one of the remaining two is elected master and licensing operations continue.

## Server node configuration

These three-server redundant servers should have excellent communications and should be on the same subnet. This often means that the three servers should be located physically close to each other. This form of redundancy requires that the servers exchange heartbeats periodically, and poor communications can cause poor performance. Redundant servers should not be configured with slow communications or dial-up links.

Three-server redundancy does not provide load-balance of licenses because with three-server redundancy, only one of the three servers is master, capable of issuing licenses. Because all clients must contact the master, all clients must have reliable networking to a single node.

## Generating a license file for redundant servers

To generate a license file that uses redundant servers, three servers must be specified when the license is created. Unlike independent servers, each SERVER line requires a port number, which can be any number from 1024 to 32000, which is unused at your end-user site.

The order of SERVER lines in the license file (for redundant servers) specifies the end user's desired selection order for the master server node. If the order of the SERVER lines does not agree in all license files, FLEMlm uses alphabetical order to determine the master and the following messages are generated in the debug log file.

```
6/26 11:00 (lmgrd) License File SERVER line order mismatch.
```

```
6/26 11:00 (lmgrd) Using alphabetical order
```

If the server order does not match, the daemons come up initially but reconnection in the event of license server node failure may not work, depending on which node fails and who the master was before the failure. If the automatic failover in the event of node failure is important, then you must ensure that the order of the service lines is consistent on all license server nodes.

When only two of the three license server nodes are up, it is possible for the client application to experience a timeout before connecting to the license server. Specifically, if the first license server in the license file is down, the client application timeouts before attempting to connect to the second server in the license file. This timeout is set to ten seconds by default, so there is a ten second delay before the license is granted.

> [!NOTE]
> If the first license server node is to be down for a while, the order of the SERVER lines in the license file which the client application reads, could be changed to avoid this timeout.

*Example*

This example demonstrates how to generate a license file for a redundant server with a license file containing the following lines.

```
# License file (server version)
SERVER AZUURMEES ANY TCP:2830
SERVER FITIS ANY TCP:2831
SERVER BUULBUUL ANY TCP:2832
DAEMON usoft c:\license\usoft.exe
```

The license file has been copied to each of the machines mentioned above. The license daemons have been started on each machine in the normal way with the command:

```
lmgrd -app -c license.dat
```

The vendor daemon on the master 'AZUURMEES' shows the following screen and you can see that connections to the slaves 'FITIS' and 'BUULBUUL' have been established.

![](/api/USoft%20for%20administrators/USoft%20license%20management/assets/25095bc8-6b9b-425d-9c96-a939928aea70.jpg)

Next, a USoft application is started up and the checkout on the master machine, 'AZUURMEES' shows the following screen:

![](/api/USoft%20for%20administrators/USoft%20license%20management/assets/ae3b7035-de4f-4531-b96a-2001a86843ea.jpg)

Finally, the network connection from the master machine, 'AZUURMEES' is removed, and you can see that the checkout is performed on the 'FITIS', which is the second machine in the license file.

![](/api/USoft%20for%20administrators/USoft%20license%20management/assets/f1e4c101-2cb0-4bf2-a282-18c779cdd475.jpg)

 