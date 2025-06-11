---
id: click_clickButton_clickRow
---

# click, clickButton, clickRow

**See also**

- [Web Benchmark recordable actions](/Web_and_app_UIs/Web_Benchmark_recordable_actions)

## **Click**

The **click** recordable action in Web Benchmark is a click on a single element, such as an input field, a title label, a hyperlink, a tab, etc. This is the most generic recordable click action. Clicks on buttons and menus and clicks for data set navigation have their own actions (clickButton, navigateMenu, clickRow).

## Properties of the **click** recordable action

The following [generic target control properties](/Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Web_Benchmark_test_editing_Identifying_target_controls_and_their_properties.md) are in scope: Reference name, Source frame, Context reference name, Context occurrence rank, Record row index.

In addition, the following properties specific to the** click** action are also in scope:

|**Property**|**Editable?**|**Explanation**|
|--------|--------|--------|
|Element type|Yes     |The type of the control element. For an input control, it is the exact input type, but for other controls it can be anything available in the list.|
|Record row index|Yes     |If encountered in a control controlled by a data source row, this field contains the row index of that row. For search fields, the rowIndex is not present, and when the “empty” row is displayed (i.e. no rows in data set), the value is -1.|
|Click type|Yes     |This field determines if the click is a regular (single) click, or a doubleclick.|
|Control type|Yes     |The exact control name as it is defined in Web Designer.|
|Within custom control|Yes     |This property is specifically set for controls that exist in controls that are not defined within Web Designer itself. For example: dialog buttons, any clickable control in a HTMLControl, etc.|



## **clickButton**

The **clickButton** recordable action is a click on any button except lookup buttons, which have their own action (navigateToLookup).

Clicking lookup buttons is special because it involves getting information from the associated InputControl.

The following [generic target control properties](/Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Web_Benchmark_test_editing_Identifying_target_controls_and_their_properties.md) are in scope: Reference name, Occurence rank, Source frame, Context reference name, Context occurrence rank.

There are no properties specific to the **clickButton** action.

## **clickRow**

The **clickRow** recordable action is a click on a non-specified element of a multi-record control. This involves for example clicking on the “white space” of a record in a ReplicatedColumnsControl, or the table cells in a GridControl, without clicking on an actual InputControl of that row.

The following [generic target control properties](/Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Web_Benchmark_test_editing_Identifying_target_controls_and_their_properties.md) are in scope: Reference name, Source frame, Context reference name, Context occurrence rank.

There are no properties specific to the **clickRow** action.