---
id: Chart_controls
---

# Chart controls

**Chart controls** and their associated **chart data controls** can be found under the Controls tab of the Controls Tree.

Chart controls present data in an appealing graphical format, for example in a bar chart, a line chart, or a pie chart.


:::note

For visual examples of chart controls, scroll further down.

:::

When data in the underlying data sources change, these changes will reflect in the chart controls.

To create a chart control, you need:

- a ChartControl for the chart itself,
- a ChartDataControl for each set of data to be displayed (some types of chart require more than one),
- TableDataSources that hold the chart column data.


:::tip

**ChartControl** and **ChartDataControl** are explained in the next sections of this article.

:::

Here are the general steps for creating a chart control in USoft Web Designer.

1. Insert a ChartControl object from the Controls tab of the catalog. Find the ChartControl control class by expanding the DataControl class on the Controls tab of the Web Designer catalog.

2. Insert one or more ChartDataControls for each set of data to be displayed by the ChartControl.

3. Add a Table Data Source that contains the data to be displayed. Set its ‘Initial State’ property to ‘Query Records’, so that it is queried when the Chart Control is viewed.

4. Set the ‘Data Source Name’ property of the Chart Control and the Chart Data Controls to the data source you have just added.

5. Set the ‘X-Axis Column’ property to the table column that will deliver the values for the Horizontal axis of the chart.

6. Set the ‘Main Chart Type’ of the Chart Control to the type of chart to be displayed. Or, if a mixed chart type is to be used, set the ‘Chart Type’ property for each Chart Data Control. The different types of charts (including the amount of Chart Data Controls needed for each data set) is explained in the Chart Control section.

7. For each Chart Data Control, set the ‘Data Source Item’ property to the columns that represent the data that must be displayed.

8. Set the ‘Color’ property for each Chart Data Control if a different color than the defaults is desired.

9. Set the ‘Chart title’ and ‘Chart subtitle’ to give the Chart Control a name. These titles are displayed at the top of the chart.

## ChartControl

You can find the ChartControl control class in Web Designer’s Controls Catalog as a child of DataControl:

![](./assets/83773fe2-e8a2-42b1-abb1-cb64a1cc38c7.png)

ChartControl is a DataControl: it can contain data source information, i.e. references to data sources on the page, and their columns.

ChartControl acts as the holder of a graphical chart and contains most of its properties. ChartControl can only contain ChartDataControls and EventListeners.

ChartControl uses a third-party library called Apex Charts, which contains extensive support for more than a dozen types of different charts. The documentation of this third-party library can be found at:

[https://apexcharts.com/docs/](https://apexcharts.com/docs/)

In a ChartControl, you define the main properties of the chart, such as the column containing the x-axis data labels, the chart titles, and the chart type. Open the Property Inspector on ChartControl to inspect properties. Click on a property name and read the explanation in the Help tile (yellow background).


:::tip

If you do not see Help text, click the ‘?’ icon in the icon ribbon near the top of the Property Inspector.

:::

### Events

There are three events that add extra behavior to a Chart Control:

|**Event**|**Description**|
|--------|--------|
|click   |Adds a click event on the data points of the Chart Control. While clicking on them already has the effect of selecting the associated record in the data source, this click event enables additional behavior.|
|chartoptions|<p>Replaces the generated option values of the Chart Control with different ones. This allows modification of default behavior and adding additional effects such as annotations and trend lines. This event supercedes the ‘Extra Plot Options’ property in most cases.</p><p>For advanced usage only.</p>|
|chartdata|<p>Replaces the data retrieval from data sources and allows adding data from external data sources, such as REST URI’s. The data needs to be formatted manually in the appropriate structure that the ApexChart library understands.</p><p>For advanced usage only</p>|



## ChartDataControl

You can find the ChartDataControl control class in Web Designer’s Controls Catalog as a child of DataControl:

![](./assets/6c38d1a9-8237-425b-8f82-b1caede81406.png)

Open the Property Inspector on ChartDataControl to inspect properties. Click on a property name and read the explanation in the Help tile (yellow background).


:::tip

If you do not see Help text, click the ‘?’ icon in the icon ribbon near the top of the Property Inspector.

:::

### Combining multiple ChartDataControls into a data set

Normally one Chart Data Control represents one set of data for a Chart Control. However, several Chart types require multiple columns of data for their representation, and therefore multiple Chart Data Controls must be linked together for this purpose. To combine multiple Chart Data Controls to form one data set, you must:

1. Set the ‘Chart Type’ property of these Chart Data Controls to the same value, or set the ‘Main Chart Type’ to the correct type.

2. Set the ‘Series Name’ property for each of these Chart Data Controls to the same value.

3. The controls that you want to combine must be in consecutive order, i.e. no other Chart Data Controls with a different ‘Series Name’ value may be interposed between them.

4. If more data sets are needed, repeat Steps 1-3, but use a different (new) name in Step 2.

Typical chart types that require multiple Chart Data Controls are:

- Scatter and Heatmap, which require two controls. One for the X position and one for the Y position of the data point. For obvious reasons, the Scatter chart typically requires both data source items to be of a numeric value type.
- Time Line, which requires two controls. One for the starting time position and one for the ending time position of the data point. For obvious reasons, this chart type typically requires both data source items to be of value type ‘Date’, although it is also possible to just use a numeric column.

## Chart types

With the term ‘data set’ we refer to the column specified in the ChartDataControl that contains the data to be displayed. Most charts require 1 ChartDataControl per data set, some however require two or even more. Combining more Chart Data Controls to one data set is done by setting the same ‘Series Name’ to several consecutive Chart Data Controls. See the ChartDataControl section for more information.

Various chart types are supported by the Chart Control. Some can be mixed together in one chart, i.e. the Area, Bar and Line chart types. In this case, the Chart Type property of the Chart Control should be used to determine the chart type of each data set, otherwise just using the ‘Main Chart Type’ of the Chart Control suffices.

Here are some chart types.

### Line chart

Can be mixed with Area and Bar chart. Multiple data sets allowed by using multiple Chart Data Controls. Data can be stacked as well.

*Example 1*

![](./assets/fbc1bfb2-8981-4e0c-b4f8-5b85f3afcaa2.png)

*Example 2*

![](./assets/86fa465e-8bb7-4d80-97d6-ed5b5120f045.png)

### Area chart

Can be mixed with Line and Bar chart. Multiple data sets allowed by using multiple Chart Data Controls. Data can be stacked as well.

*Example*

![](./assets/b81e5228-c399-477a-91b3-13d0562bb3e1.png)

### Bar chart

Can be mixed with Area and Line chart. Multiple data sets are allowed by using multiple Chart Data Controls. Data can be stacked as well. If Orientation property is set to ‘Horizontal’, the X and Y axis are swapped and the bars are drawn horizontally. If stacking is used and negative values exist, then these are drawn in both directions.

*Example*

![](./assets/16ce5aab-25fd-4850-951f-7c03853c451f.png)

### Pie chart

A pie chart only requires and supports a single data series. Therefore only the first Chart Data Control is used, even if several are specified.

*Example*

![](./assets/4e827c78-9e45-44f9-8b4f-bf8e291856b4.png)

Here are some variations on the pie chart. This is a **donut chart**:

![](./assets/170df5f9-63df-4bd1-8652-e3447a630821.png)

This is a **radial bar chart**:

![](./assets/f6aa52c2-87a3-492b-94a2-2ce7f105f9ec.png)

### Scatter chart

A scatter chart requires two Chart Data Controls per data set.

*Example*

![](./assets/728baa10-e237-4768-969e-c9e5cedf0397.png)

The first Chart Data Control defines the X value, the second defines the Y value. Both controls therefore have the same Series Name property value:

![](./assets/dcb4fc63-b331-4746-a682-f6c77b434627.png)

**Radar chart**

Radar charts may have multiple data sets, one per Chart Data Control. Negative values can be rendered too (and are rendered as the inner parts of the radar figure). The X-Axis labels are rendered at the outer edges.

*Example*

![](./assets/f4bb9a4b-7c3c-47c5-9e6b-9086108fc8f6.png)

### Heat map chart

Heat map charts are rendered line per line alongside the Y-Axis, one data series at a time.

*Example*

![](./assets/8ea01a22-f60f-4942-b729-82a4a277466e.png)

### Time line chart

A time line chart needs two Chart Data Controls per data set. The first is used for the start time of a data point. The second is used for the end time.

*Example*

![](./assets/f9398e6c-008b-4ea0-8f5c-feeac17ba4e7.png)

Both controls require a data source item that is either numeric, or (preferably) of Date-time type, and the same value in Series Name, like the Scatter chart:

![](./assets/901ddb9a-922d-45ba-a8e6-a799da4b440b.png)

The X-Axis values are rendered along the Y-Axis, there it is not required to set the Orientation property to Horizontal for this chart, because time lines are typically rendered in a horizontal view.

Also, X-Axis labels may also exist multiple times, in which case on the same line more than one group is rendered.

### Brush chart

Brush charts are used as a selector on a detail chart, to view a smaller area of the entire data set whilst also seeing the width of the entire set (which is displayed within the brush chart itself). These brush charts are usually of Line, Bar or Area chart type, whereas the detail chart would usually be a Bar chart. For a brush chart, you do not have to define a data source name and item, as it typically inherits / copies the data directly from its detail chart.

*Example*

![](./assets/c84ad7e5-1a49-48fa-88ca-b19ab4df6c0c.png)

Using the grey selection area on the brush chart, different values can be displayed on the detail chart on the left. The (smaller) brush chart is created by making a new Chart Control with the appropriate styling and size, and by setting its ‘Brush Chart For’ property with the value of the ‘Id’ property of the detail chart. For both charts, the type Line Chart is chosen, with Orientation property set to ‘Horizontal’.

##  