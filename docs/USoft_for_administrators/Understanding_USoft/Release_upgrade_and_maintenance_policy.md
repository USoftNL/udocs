---
id: Release_upgrade_and_maintenance_policy
---

# Release, upgrade and maintenance policy

## Release and upgrade policy

USoft has three kinds of releases. To understand how you upgrade to a new release, you need some understanding of these 3 levels.

### Major releases

Major releases (eg., 10, 11, 12) contain new functionality, changes in existing functionality, and the removal of functionality deprecated in the previous major version.

To move to the latest major release for the first time, you need to perform an upgrade procedure on the Development repository (on Definer, Delivery Manager, etc.). Sometimes you also need to perform an upgrade on Authorizer in acceptance and production environments.

A major release is usually first brought out in 1 or 2 beta versions. A beta version is used to gather feedback from customers and developers about new features.

In upgrades to major releases, most 3rd party software is updated to a recent version.

When you upgrade to a major or minor release, you cannot skip intermediate releases. If 10.1 is the last minor 10 release, then in order to upgrade from 10 to 11, you must first go to 10.0, then to 10.1, and from there to 11.0.

### Minor releases

Minor releases (10.1, 10.2, ...) contain new functionality and changes in existing functionality. In minor releases, functionality can become deprecated but deprecated functionality will not be removed in a minor release. There is no breaking of APIs. Most 3rd party software is updated to a recent version.

To move to the next minor release, you need to perform an upgrade procedure on the Development repository (on Definer, Delivery Manager, etc.) You do not need to upgrade Authorizer in acceptance and production environments. This makes it easier to upgrade to a minor release than to a major release.

When you upgrade to a major or minor release, you cannot skip intermediate releases. If 10.1 is the last minor 10 release, then in order to upgrade from 10 to 11, you must first go to 10.0, then to 10.1, and from there to 11.0.

### Patch releases

Patch releases (10.1.1A, 10.1.1B...) contain bug fixes and sometimes new functionality. Patches are usually released every two months or so, but this can vary.

In patch releases, changes in existing functionality are avoided as much as possible. There are no repository changes (= data structure changes). There is no breaking of APIs. 3rd party software updates are kept to a minimum.

To move to a new patch release, you do not need an upgrade.

When you upgrade to a later patch within the same minor, you can skip intermediate patches. For example, you can go directly from 10.1.1A to 10.1.1F.

## Maintenance policy

USoft performs maintenance on the last two major releases, with the focus on the last major release. Maintenance is only performed on the *last patch* of the *last minor.*

## Support policy

A standard USoft license entitles you to support from the USoft Support desk on the last two major releases. Standard support extends only to the *last patch* of a minor: before you report a bug or ask for help, please install the latest available patch of the specific minor, and check that your problem or suggestion still applies there.

If you require support for an older major release, contact USoft Support. This is classified as “extended support”. Extended support is not covered by standard license terms.