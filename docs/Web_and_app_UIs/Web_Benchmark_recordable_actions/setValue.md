---
id: setValue
---

# setValue

**See also**

- [Web Benchmark recordable actions](/Web_and_app_UIs/Web_Benchmark_recordable_actions)

The **setValue** recordable action in Web Benchmark change in any InputControl. The target can be an actual InputControl, but also a field in an input dialog, or a field in dynamically generated HTML or custom controls.

The following [generic target control properties](/Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Web_Benchmark_test_editing_Identifying_target_controls_and_their_properties.md) are in scope: Reference name, Occurrence rank, Source Frame, Context reference name, Context occurrence rank.

In addition, the following properties are also in scope for the **setValue** recordable action:

|**Property**|**Editable?**|**Explanation**|
|--------|--------|--------|
|Control type|Yes     |The exact control name as it is defined in Web Designer.|
|Element type|Yes     |The type of the control element. For an InputControl, it is the exact input type, but for other controls it can be anything available in the list.|
|Record row index|Yes     |If encountered in a control controlled by a data source row, this field contains the row index of that row.|
|Value   |Yes     |The value that was entered or selected for this control.|
|Within custom control|Yes     |This property is specifically set for controls that exist in controls that are not defined within Web Designer itself. For example: dialog buttons, any clickable control in a HTMLControl, etc.|