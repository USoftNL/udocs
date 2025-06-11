---
id: test
---

# test

**See also**

- [Web Benchmark recordable actions](/Web_and_app_UIs/Web_Benchmark_recordable_actions)

The **test** recordable action in Web Benchmark is a test of the value of a static control (ie., a control that you cannot change by a setValue action). Static controls includes title labels (both of pages and dialog controls), record ranges (TotalNumberOfRecordsControl and RecordRangeControl most specifically), but also the element counts of any select dropdowns. This action can be triggered (ie., added to the teest currently being recorded) by clicking such static controls.

This action can also be used to test for certain property settings (such as for the Updatable property) of InputControls.

The **test** action differs from the **assert** action in that:

- the **test** action is able to test for specific property settings, not just for single values.
- the value of the **test** action must always match: testing the opposite is not possible.

The following [generic target control properties](/Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Web_Benchmark_test_editing_Identifying_target_controls_and_their_properties.md) are in scope: Reference name, Occurrence rank, Source Frame, Context reference name, Context occurrence rank.

The following property is in scope for the **test** recordable action:

|**Property**|**Editable?**|**Explanation**|
|--------|--------|--------|
|Control type|Yes     |The exact control name as it is defined in Web Designer.|
|Element type|Yes     |The type of the control element. For an input control, it is the exact input type, but for other controls it can be anything available in the list.|
|Record row index|Yes     |If encountered in a control controlled by a data source row, this field contains the row index of that row. For search fields, the rowIndex is not present, and when the “empty” row is displayed (i.e. no rows in data set), the value is -1.|
|Test type|Yes     |The property type that is being tested: control value, or child count (e.g. options in a select dropdown).|
|Value   |Yes     |The value the control must hold for this action to succeed.|
|Value type property|Yes     |The value type that is being tested: updatable (readonly) property, control value (for InputControl), text contents (static controls like TotalNumberOfRecordsControl), or displayed value text.|
|Within custom control|Yes     |This property is specifically set for controls that exist in controls that are not defined within Web Designer itself. For example: dialog buttons, any clickable control in a HTMLControl, etc.|