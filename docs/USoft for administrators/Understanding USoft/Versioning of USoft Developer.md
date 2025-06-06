# Versioning of USoft Developer

USoft Developer is normally produced in *dayversions:* a unique product version for each working day.

By preference, you should install a patch. A patch is a dayversion that has gained official status and has been given a *patch name.* 

After a patch release, next dayversions automatically carry the next patch name. For example, if the 10.0.1M patch is released on July 24, 2020:

- The next dayversion, that of of July 25, is the first with patch name 10.0.1N.
- The immediately preceding dayversions, which led up to this patch release, have the patch name of 10.0.1M.

Patches are referred to by *patch name.* Dayversions (including dayversions that are patches) are referred to by *dayversion name*.

## Patch name

A version of USoft Developer is usually referred to by *patch name* in the following format, for example, in Release Notes:

```
*major*.*minor*.*patch-name*
*patch-name*  ::=  *DL*

```

where *patch-name* consists of a digit *D* (1-9) followed by a capital letter *L* (A-Z; hence the term *letter patch*), for example:

```
1N

```

For example, the USoft Developer 10.0 patch that was released in July 2020 with patch name 1N is usually referred to as:

```
10.0.1N

```

## Dayversion name

By contrast, the installer registers a version in the Windows registry in a fully numerical format, in which patch name and release day are both represented:

```
*major.minor.patch-numberpatch-number  *::=*  DS.yyday*

```

where *D* is the same digit (1-9) as in the patch name, *S* is a sequence number that is the position of the "patch letter" in the alphabet, *yy* is the two last digits of the year (for example '19' for the year '2019'), and *day* is a sequence number that is the position within the year of the release day on the calendar.

For example, a dayversion in preparation of patch 10.0.1**N** (letter 14 of alphabet) that was released on 24th of July (day number **206**) in 20**21** is registered as:

```
10.0.114.21206

```

A later dayversion, built for a quick bug fix on 30th of July (day number **212**), is registered as:

```
10.0.114.21212

```

This means that the last number is always unique, no matter what patch version. This helps the installer to understand what it should do with previous versions that are already installed. The installer can only overwrite versions that have the same patch name, but a different day version. Otherwise, the installer will execute default installation steps instead of overwriting steps.

For example, a 10.0.1N of 30th July can overwrite a 10.0.1N of 24th July, but not a 10.0.1M version.