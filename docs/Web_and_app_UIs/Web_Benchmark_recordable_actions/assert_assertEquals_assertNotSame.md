---
id: assert_assertEquals_assertNotSame
---

# assert, assertEquals, assertNotSame

**See also**

- [Web Benchmark recordable actions](/Web_and_app_UIs/Web_Benchmark_recordable_actions)

## **Assert**

The **assert** recordable action in Web Benchmark is a test of the value of any modifiable input control. This action can be triggered (ie., added to the test currently being recorded) by clicking such input controls.

This action is only used on InputControls. It tests the actual value of an InputControl, independently of its displayed representation, against a given value, testing if it is exactly this value (Equals), or not (NotSame).

The **test** action differs from the **assert** action in that:

- It is able to test for specific property settings, not just for single values.
- Its value must always match: testing the opposite is not possible.

In the Edit test screen, assert actions with Assertion type = Equals are notated **assertEquals.** Assert actions with Assertion type = NotSame are notated **assertNotSame.**

## Properties of the **assert** recordable action

The following [generic target control properties](/Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Web_Benchmark_test_editing_Identifying_target_controls_and_their_properties.md) are in scope: Reference name, Source frame, Context reference name, Context occurrence rank, Record row index.

In addition, the following properties specific to this action are also in scope:

|**Property**|**Editable?**|**Explanation**|
|--------|--------|--------|
|Control type|Yes     |The type of the control element. For an input control, it is the exact input type, but for other controls it can be anything available in the list.|
|Record row index|Yes     |If encountered in a control controlled by a data source row, this field contains the row index of that row. For search fields, the rowIndex is not present, and when the “empty” row is displayed (i.e. no rows in data set), the value is -1.|
|Assertion type|Yes     |<p>Determines whether the action is for testing that the values are the same (Equals), or not the same (NotSame).</p><p>A comparison between 2 empty values evaluates to Equal.<br/>			A comparison between an empty and a non-empty value evaluates to NotSame.</p>|
|Value   |Yes     |The value the control must hold for this action to succeed.|
|Value type property|Yes     |The value type that is being tested: updatable (readonly) property, control value (for InputControl), text contents (static controls like TotalNumberOfRecordsControl), or displayed value text.|
|Within custom control|Yes     |This property is specifically set for controls that exist in controls that are not defined within Web Designer itself. For example: dialog buttons, any clickable control in a HTMLControl, etc.|



## **AssertEquals**

In Edit test screens, **assertEquals** is the notation for an **assert** action with Assertion type = **Equals**.

## **AssertNotSame**

In Edit test screens, assertNotSame is the notation for an **assert** action with Assertion type = **NotSame**.