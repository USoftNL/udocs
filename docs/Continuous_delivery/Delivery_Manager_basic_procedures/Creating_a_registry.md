---
id: Creating_a_registry
---

# Creating a registry

For more information about registries, go to the Registries help topic.

To create a registry:

1. If you want a USoft-shipped example as a starting point, load registry samples, then choose Release, Registries and query the registry sample(s).

2. Otherwise, choose Release, Registries from the menu. Enter your registry on the Input XML tab from scratch.

3. Make sure Current = Yes. You can only have a single current registry. Setting this flag causes the Current flag for other registries (if any) to be set to No.

4. Make sure that for the Current Release (Release, Current Release from the menu), "Put current registry" = Yes.

5. Run any task step that executes a release action. Release actions are actions with names that start with "Release ...", eg., "Release server" or "Release flatfiles".

Your registry is created as a file named "registry.xml" in the current release folder.