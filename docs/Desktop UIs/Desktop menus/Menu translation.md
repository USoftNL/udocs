# Menu translation

You might want to translate the default menu option names (such as File, Edit, Window and Help) into the local language with new mnemonics.

To translate the menu options:

1. Add your translation as usual to the list of translated application strings. See "Translating Your Application" in the Definer help for more information. If you also want to change the mnemonic, read further steps.

2. In the translated string, add '&' before the letter that is to be the new mnemonic. For example, '&Venster' will make V as the mnemonic for the translated string Venster (=Window in Dutch).

3. To prevent the original mnemonic from appearing; in the menu option table, add '&' in the original menu line before its mnemonic and delete the explicit mnemonic. For example, for Window, it should be '&Window' and the mnemonic should be empty.

> [!WARNING]
> However, there is a special rule concerning the translation of Window and Help Menu Options. To ensure that the translations work properly, define the following command lines in the User Application:
> and
> For example, in the Dutch translation they will be:
> and