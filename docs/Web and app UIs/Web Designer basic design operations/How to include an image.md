# How to include an image

Images can be used either as a replacement for textual labels, or as background patterns. In both cases, you need to specify the name of a GIF or JPG image file.

To include an image:

1. From the catalog, open the page in which you want to include an image.

2. In the object tree, select the group object into which you want to insert the image.

3. Choose Insert, ImageControl from the menu.

4. Select the inserted ImageControl object, and open the Property Inspector.

5. Set the Image property to the required filename.

Image files must be stored in folder:

```
*alternative-template-folder*\WebSite\images
```

*Explanation*

All image files stored in the alternative template folder will be copied to the publication folder when you run Publish.

At runtime, the image object automatically stretches itself to the size of the image.

6. Save.