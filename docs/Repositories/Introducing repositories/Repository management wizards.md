# Repository management wizards

You can start the following wizards from the command line. They allow you to perform [basic repository management tasks](/docs/Repositories/Introducing%20repositories/Introducing%20repositories.md) by filling out dialogs (wizard steps).

## NewUDevelop

This wizard allows you to create a new USoft development environment from scratch. The first NewUDevelop dialog looks like this:

![](/api/Repositories/Introducing%20repositories/assets/7ecea579-0616-490f-b6aa-6d2e14e1cd66.png)

To start the NewUDevelop wizard from the command line, execute:

```
> *usoft-bin-dir*\ublendit.exe newudevelop
```

> [!TIP]
> To find the *usoft-bin-dir* directory path, in a SQL command box, run:

## CloneUDevelop

This wizard allows you to clone an entire repository to a different location. It gives you the choice between copying the repository directly at database level or reading it from a data export file where you exported the source data previously. The first CloneUDevelop dialog looks like this:

![](/api/Repositories/Introducing%20repositories/assets/a7a5b127-db9a-4338-a3fe-2bf589cbea2b.png)

To start the CloneUDevelop wizard from the command line, execute:

```
> *usoft-bin-dir*\ublendit.exe cloneudevelop
```

## CompareUDevelop

This wizard allows you to compare two different versions of the same repository. The first CompareUDevelop dialog looks like this:

![](/api/Repositories/Introducing%20repositories/assets/1b0fa6c9-69c0-4d3b-8880-42da4fa4ae7f.png)

To start the CloneUDevelop wizard from the command line, execute:

```
> *usoft-bin-dir*\ublendit.exe compareudevelop
```