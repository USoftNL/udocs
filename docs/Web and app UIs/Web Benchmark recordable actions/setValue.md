# setValue

**See also**

- [Web Benchmark recordable actions](/docs/Web%20and%20app%20UIs/Web%20Benchmark%20recordable%20actions)

The **setValue** recordable action in Web Benchmark change in any InputControl. The target can be an actual InputControl, but also a field in an input dialog, or a field in dynamically generated HTML or custom controls.

The following [generic target control properties](/docs/Web%20and%20app%20UIs/Testing%20your%20web%20application%20with%20USoft%20Web%20Benchmark/Web%20Benchmark%20test%20editing%20Identifying%20target%20controls%20and%20their%20properties.md) are in scope: Reference name, Occurrence rank, Source Frame, Context reference name, Context occurrence rank.

In addition, the following properties are also in scope for the **setValue** recordable action:

|**Property**|**Editable?**|**Explanation**|
|--------|--------|--------|
|Control type|Yes     |The exact control name as it is defined in Web Designer.|
|Element type|Yes     |The type of the control element. For an InputControl, it is the exact input type, but for other controls it can be anything available in the list.|
|Record row index|Yes     |If encountered in a control controlled by a data source row, this field contains the row index of that row.|
|Value   |Yes     |The value that was entered or selected for this control.|
|Within custom control|Yes     |This property is specifically set for controls that exist in controls that are not defined within Web Designer itself. For example: dialog buttons, any clickable control in a HTMLControl, etc.|