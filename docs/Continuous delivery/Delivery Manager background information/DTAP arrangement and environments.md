# DTAP arrangement and environments

When you develop a USoft application, you typically keep versions of the application in multiple *environments.* An environment is a physical computer, or a virtual machine acting as a physical computer, where USoft has been installed and where application deliverables are built or have been copied to.

A typical arrangement, informally known as a *DTAP street,* is made up of 4 environments: D(evelopment) - T(est) - A(cceptance) - P(roduction):

- Deliverables are created in Development, then
- copied to Test to be approved by a test team or by fellow developers, then
- copied to Acceptance to be scrutinised by the commissioning party or prospective end users, and finally
- copied to Production where they become available to the actual application users:

![](/api/Continuous%20delivery/Delivery%20Manager%20background%20information/assets/89caae7e-1c4f-416c-97a9-08df32d2aa52.png)

'DTAP street': 4 environments that Delivery Manager manages software delivery betweenYou can choose to have more or fewer environments than the 4 environments depicted here. In early stages of a project, and in prototyping situations, it is common to have a single environment for Test and Acceptance. In a large project we often see multiple extra environments for different purposes, such as training, sales demos, separate environments for functional testing, performance benchmarking, debugging, and delivery of emergency Production fixes.

### Linear approach

One approach to copy each deliverable from one machine to the other, always following the same path. This is, strictly, the only approach that really fits the term 'DTAP street': it is a linear progression. This way, newly built software is always initially copied only to Test. If and when it is approved there, it is copied to Acceptance. If and when it is found acceptable there, it is finally copied to Production:

![](/api/Continuous%20delivery/Delivery%20Manager%20background%20information/assets/5bde36ac-836c-4b73-8e7d-69d4cdcb01ba.png)

Linear approach

If you use a linear approach, at each given point in time, each next environment in the progression has a version that is equal or lower to the version that is in the previous environment, for example:

![](/api/Continuous%20delivery/Delivery%20Manager%20background%20information/assets/0fe94bdb-f049-43a7-915f-f17d00685d81.png)

Versions in a linear approach### Hatch approach: principle

A hatch approach is slightly different from a linear approach. It is what Delivery Manager encourages you to use as a first choice. In this approach, each time you have finished a version in Development, you place it in a special *hatch* location where other environments can pick it up:

![](/api/Continuous%20delivery/Delivery%20Manager%20background%20information/assets/25b4bc74-0bc1-4472-a0fb-7813bf997c42.png)

Hatch approachA hatch approach is more flexible than a linear approach in that each environment can pick up the new versions when it is ready for it, independently of how other environments are doing. Acceptance may be ahead of Test at some times, and behind at other times. All released versions are stored at the hatch level and remain available there:

![](/api/Continuous%20delivery/Delivery%20Manager%20background%20information/assets/45897ba1-505d-487d-9385-0cb4c88a0f0a.png)

Versions in a hatch approach### Hatch approach: file-based deliverables

In the hatch approach that USoft Delivery Manager supports, all deliverables are placed in the hatch in file-based formats. This is true even though USoft applications are data-intensive and many deliverables will be in the form of database records. Instead of copying databases at the RDBMS level, Delivery Manager converts database content into some form of "flat file" before it is placed in the hatch. After database content is picked up by a target machine, it is imported into a local database.

For example, in USoft you have the option to run an application "from flat file" or "from repository":

- If the target machines are to run the application "from flat file", you instruct Delivery Manager to generate flat files (.CON, .JOB, .ESI, .UMG, .SMG files) in Development and place the result in the hatch.

- If the target machines are to run the application "from repository", you instruct Delivery Manager to export the metadata to an .XML flat file that may be re-imported by the target machine.

Some deliverables are already file-based by nature, for example, the output of the publication process in USoft Web Designer. Such deliverables are placed in the hatch as they are.

The advantage of having only file-based deliverables is that the hatch is easily transferred to a target machine by an administrator who has no knowledge of USoft. Picking up USoft deliverables from the hatch is a simple procedure that may be executed at file system level:

1. Make sure you have a single "delivered" folder on each target machine for USoft deliverables.

2. Each time you deliver, clear the "delivered" folder if it contains any contents from a previous delivery.

3. Copy the most recently delivered folder from the hatch to the "delivered" folder.

![](/api/Continuous%20delivery/Delivery%20Manager%20background%20information/assets/cfbccb25-e1f5-4c35-a22f-27450910feac.png)

Picking up version 1.4.22 of application TRAVEL from the hatch and placing it on a target machineMaybe the USoft installation (in delivered folder "\\delivered\\usoft-install") must be executed by the server administrator, but database scripts (in delivered folder "scripts") must be run by a DBA. With file-based hatches, it is easy to achieve this type of task division. Each party picks up the deliverables that she is responsible for deploying.