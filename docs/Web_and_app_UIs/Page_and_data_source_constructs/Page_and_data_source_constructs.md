---
id: Page_and_data_source_constructs
---

# Page and data source constructs

|**Pattern**|**Title**|**Description**|
|--------|--------|--------|
|1       |[Single-record and multi-record areas](/docs/Web_and_app_UIs/Page_and_data_source_constructs/Pattern_1_Singlerecord_and_multirecord_areas.md)|<p>Some columns appear in a multi-record grid and in Search fields.</p><p>Other columns appear in a single-record display in a side pane: they show details of the record currently selected in the grid.</p>|
|2       |[Search-and-Results across two pages](/docs/Web_and_app_UIs/Page_and_data_source_constructs/Pattern_2_Searchandresults_across_two_pages.md)|<p>Enter query conditions on page 1. View query results on page 2.</p><p>“Wizard” type buttons for going from page 1 to page 2 and back.</p><p>Page 2 re-displays the search conditions selected in page 1.</p>|
|3       |[Create-and-Confirm across two pages](/docs/Web_and_app_UIs/Page_and_data_source_constructs/Pattern_3_Createandconfirm_across_two_pages.md)|<p>Insert a new data record on page 1. Commit this Insert on page 2.</p><p>“Wizard” type buttons for going from page 1 to page 2 and back.</p><p>Page 2 re-displays the data entered on page 1.</p>|
|4       |[Master-detail form on a single page](/docs/Web_and_app_UIs/Page_and_data_source_constructs/Pattern_4_Masterdetail_form_on_a_single_page.md)|<p>On a single page: Search parent block, Results parent block, and automatically synchronised Results child block.</p>|
|5       |[Parent box and follow-on insert](/docs/Web_and_app_UIs/Page_and_data_source_constructs/Pattern_5_Parent_box_and_followon_insert.md)|<p>Parent data block re-presents data from previous page.</p><p>Added block for optional Insert of a new related record in a different table.</p>|
|6       |[Customised lookup query](/docs/Web_and_app_UIs/Page_and_data_source_constructs/Pattern_6_Customised_lookup_query.md)|Lookup query restricted to a Where Clause that takes data from the calling page into account.|
|7       |[Classic joined column](/docs/Web_and_app_UIs/Page_and_data_source_constructs/Pattern_7_Classic_joined_column.md)|Standard foreign key field with added joined column from parent table.|
|8       |[Job called by web page](/docs/Web_and_app_UIs/Page_and_data_source_constructs/Pattern_8_Job_called_by_web_page.md)|<p>Customised lookup behaviour executes a job and displays the job output data.</p><p>SQLDataSource contains job invocation statement and returns job output parameter.</p>|