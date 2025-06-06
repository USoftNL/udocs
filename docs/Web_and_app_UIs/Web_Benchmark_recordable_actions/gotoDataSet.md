---
id: gotoDataSet
---

# gotoDataSet

**See also**

- [Web Benchmark recordable actions](/docs/Web_and_app_UIs/Web_Benchmark_recordable_actions)

The **gotoDataSet** recordable action in Web Benchmark is a click on a number item in a DataSetNumbersControl.a manually inserted, explicit delay. It is used for tests that require explicit delays, e.g. to wait for the ‘Lifetime’ property of a data source to expire.can be used to add comments to tests. This has no effect on test execution.

The following [generic target control properties](/docs/Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Web_Benchmark_test_editing_Identifying_target_controls_and_their_properties.md) are in scope: Occurrence rank, Source frame.

In addition,the following properties specific for the **gotoDataSet** recordable action are also in scope:

|**Property**|**Editable?**|**Explanation**|
|--------|--------|--------|
|Reference name|Yes     |The **id** attribute value of the DataSetNumbersControl that was clicked.|
|Value   |Yes     |The dataSetIndicator number (data set page) in the DataSetNumbersControl that was clicked on.|



 