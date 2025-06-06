---
id: Writing_an_upgrade_script
---

# Writing an upgrade script

To write an upgrade script for the top-level application:

1. Choose Define, Upgrade scripts, Current from the menu.

2. In the Upgrade Scripts box, specify the new script's Processing order,  Script Seqno and Processing Mode.

3. In the SQL Statements box, specify the SQL statements to be included in the script. For each statement, do this by setting the Seqno attribute and then writing the statement in the SQL Statement field or tab page.

4. Press Check to have the script checked:

- Scripts with Processing Mode = Pre-upgrade will be checked against the database account indicated as "Source for pre-upgrade check".
- Scripts with Processing Mode = Post-upgrade will be checked against the database account indicated as "Source for post-upgrade check".
- Scripts with Processing Mode = Database are automatically considered checked. They are set to Checked = Yes regardless of what they contain.

5. Save work.

You can release your script by defining a task and calling "Release scripts" as a step of that task. Only SQL statements that you have marked as Active = Yes will be output to the release folder.