---
id: How_to_add_a_script_to_an_object
---

# How to add a script to an object

Add a script to an object if you know or expect that it really belongs to that object and will not need to be callable from any other object in the application.

To add a JavaScript script to an object:

1. First, insert the appropriate event listener object.

2. In this event listener object, insert a callClientScript action.

3. For this action, set the Script property to the script text.

4. Save work and (re-)publish.

Instead of writing the script in the Script property, you can also write it in an external file and call that file by pointing to it from the Script Source property, but this is unlikely to be practical.

 

 