---
id: Defining_a_shopping_basket_and_taking_it_to_a_different_place
---

# Defining a shopping basket and taking it to a different place

In the steps below, a Constraint is shopped from one repository to another as an example. You can also shop via the clipboard using Copy-Paste.

### Step 1: Create Export Definition

1. In the repository from which you want to export, from the USoft Definer main menu, choose Teamwork, Object Shopping, Definitions.

The Export Definitions window or tab opens.

2. In the Export field, type a name for the export, for example: MY_EXPORT.

3. In the Default Filename field, type a default filepath for the export file, for example: c:\\temp\\my-export.xml.

4. Click the Constraints tab. Using the lookup button, identify the constraint you want to transfer, or make a list of multiple constraints that you want to transfer in one go.

5. Save work.

### Step 2: Create export file

1. Press the Create File button in the top right corner.

The Create Export File dialog opens. See that you are about to export the specified constraint(s) to the filepath you specified and that the export will be in XML format.

2. Press OK.

The export file is created in the location specified. You can open the file and inspect the contents you are about to transfer.

### Step 3: Import

1. In the repository where you want to import the specified constraint(s),  open USoft Definer.

2. From the USoft Definer main menu, choose Teamwork, Object Shopping, Import from File.

The Import From XML dialog opens.

3. Press the Browse button and select the file you exported in step 2.

4. Press Next.

The constraint(s) in the export file is (are) added to the constraints in the target repository (if any). If a constraint with the same name already existed in the target repository, the content is overwritten.

##  

 