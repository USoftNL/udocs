# Running a deploy script

**See also**

- [Deploy scripts in UDeliver](/docs/Continuous%20delivery/USoft%20Delivery%20Manager%20by%20concept/Deploy%20scripts%20in%20UDeliver.md)

To run a deploy script delivered by USoft as a deploy sample, or a deploy script of this type that you will have written or edited manually:

1. Open a Command Prompt window with Run As Administrator = Yes.

2. Use the

```
> cd new-working-dir
```

command to change the working directory to the directory where you have placed the deploy XML script.

3. Execute the following command:

(USoft 32-bit installation:)

```
> usoft-install-dir\bin\ublendit.exe blend-script.xml
```

(USoft 64-bit installation:)

```
> usoft-install-dir\bin64\ublendit.exe blend-script.xml
```

For example:

```
> c:\USoft\usd91\bin64\ublendit.exe myscript.xml
```