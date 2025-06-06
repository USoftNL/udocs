---
id: gotoDataSet
---

# gotoDataSet

**See also**

- [Web Benchmark recordable actions](/docs/Web%20and%20app%20UIs/Web%20Benchmark%20recordable%20actions)

The **gotoDataSet** recordable action in Web Benchmark is a click on a number item in a DataSetNumbersControl.a manually inserted, explicit delay. It is used for tests that require explicit delays, e.g. to wait for the ‘Lifetime’ property of a data source to expire.can be used to add comments to tests. This has no effect on test execution.

The following [generic target control properties](/docs/Web%20and%20app%20UIs/Testing%20your%20web%20application%20with%20USoft%20Web%20Benchmark/Web%20Benchmark%20test%20editing%20Identifying%20target%20controls%20and%20their%20properties.md) are in scope: Occurrence rank, Source frame.

In addition,the following properties specific for the **gotoDataSet** recordable action are also in scope:

|**Property**|**Editable?**|**Explanation**|
|--------|--------|--------|
|Reference name|Yes     |The **id** attribute value of the DataSetNumbersControl that was clicked.|
|Value   |Yes     |The dataSetIndicator number (data set page) in the DataSetNumbersControl that was clicked on.|



 