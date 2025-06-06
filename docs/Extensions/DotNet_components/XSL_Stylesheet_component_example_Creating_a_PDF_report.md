---
id: XSL_Stylesheet_component_example_Creating_a_PDF_report
---

# XSL Stylesheet component example: Creating a PDF report

You can use a USoft [XSL Stylesheets component](/docs/Extensions/DotNet%20components/XSL%20Stylesheets%20components.md) to instantly create a PDF report from data retrieved from a Rules Engine.

If the component source is an XSL stylesheet that produces XSL-FO formatting objects and has the following top-level namespace declaration:

```
xmlns:fo="http://www.w3.org/1999/XSL/Format"
```

then, at the time when you have the component checked, extra methods are automatically generated that allow you to export the result of the stylesheet transformation to PDF or HTML; notably:

|**Method Name**|**Description**|
|--------|--------|
|CREATEBASE64PDF|Converts XSL-FO XML to **PDF**|
|CREATEPDFFILE|<p>Converts XSL-FO XML to **PDF**</p><p>Writes the result to a file</p>|
|CREATEHTML|Converts XSL-FO XML to **HTML**|
|CREATEHTMLFILE|<p>Converts XSL-FO XML to **HTML**</p><p>Writes the result to a file</p>|



> [!TIP]
> The PDF generator uses version 1.0.5 of the **Fonet.Standard** [Nuget](/docs/Extensions/DotNet%20components/Nugets.md). This nuget version is installed automatically with USoft.

*Example*

This simple report example has 2 blocks of data. The first block is a data grid that contains a summation (Sold) for each record. The second block is just a grand total (Total Sales) placed at the bottom of the report.

In this example, not only the formatting objects that determine the report composition, but also the source data that populate the report are provided by the XSL code. With this design choice, you have no need for specific input XML to apply the XSL to. For this reason, the XSL is applied to a dummy <root/> XML document.

You can apply XSL and then convert to PDF all in 1 go. Do this by nesting the 2 operations in a single statement of this type:

```sql
INVOKE  PDF_report_writer.createpdffile WITH
SELECT 	'<root/>' xml
,       'c:\temp\tours_sales.pdf' dest_file
```

Follow these steps to create this solution:

1. In USoft Definer, double-click the XSL Stylesheets node in the Model and Rules Catalog:	 		or choose Define, RDMI, Dotnet Components, XSL Stylesheets from the main menu.	 
2. Name the component "PDF_REPORT_WRITER”. In the Program Source field, specify the XSL transformation that produces the XSL-FO formatting objects you want as input for the PDF report. This example XSL-FO is in the next section.
3. Press Check. See that the checker produces, among other methods, the CREATEPDFFILE method. Save work.
4. You are now ready to call the component by the INVOKE statement shown above.

*Example XSL-FO*

The XSL stylesheet is:

```language-xml
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format">
	<xsl:output method="xml" encoding="UTF-8" omit-xml-declaration="yes"/>
	<xsl:param name="tour_sql">invoke xml.sqlexport with select tour_id, destination, tour_type, start_date, return_date, sold from pdf_tour</xsl:param>
	<xsl:param name="tour_data" select="document($tour_sql)/*"/>
	<xsl:param name="tourheader" select="$tour_data/Meta/OutputExpressions/Column/@prompt"/>
	<xsl:param name="tourrows" select="$tour_data/Rows/Row"/>
	<xsl:param name="totalprice" select="document('invoke xml.sqlexport with select sum(price) total_sales from pdf_traveller')/*/Rows/Row/Field"/>
	<xsl:decimal-format name="nl" decimal-separator=',' grouping-separator='.'/>
	<xsl:template match="/">
		<fo:root>
			<xsl:call-template name="simple-page-master"/>
			<fo:page-sequence initial-page-number="1" master-reference="A4">
				<fo:static-content font-family="Verdana" font-style="normal" font-weight="normal" font-size="10pt" white-space-collapse="false" white-space-treatment="preserve" white-space="pre" flow-name="xsl-region-before">
					<fo:block padding-bottom="0.1cm">Simple report: Tour Sales  Sheet:  <fo:page-number/>
					</fo:block>
				</fo:static-content>
				<fo:flow font-family="Courier" font-style="normal" font-weight="normal" font-size="9pt" white-space-collapse="false" white-space-treatment="preserve" white-space="pre" flow-name="xsl-region-body">
					<fo:block font-size="10pt">
						<xsl:call-template name="tour_table"/>
					</fo:block>
					<fo:block margin-left="20.5cm" margin-top="2cm">Total Sales: <xsl:value-of select="format-number($totalprice, '###.###,00', 'nl')"/>
					</fo:block>
				</fo:flow>
			</fo:page-sequence>
		</fo:root>
	</xsl:template>
	<xsl:template name="tour_table">
		<fo:table>
			<fo:table-column column-width="20mm" background-color="#88ff88"/>
			<fo:table-column column-width="25mm"/>
			<fo:table-column column-width="32mm"/>
			<fo:table-column column-width="48mm"/>
			<fo:table-column column-width="48mm"/>
			<fo:table-column column-width="48mm"/>
			<fo:table-column column-width="25mm"/>
			<fo:table-column column-width="20mm"/>
			<fo:table-column column-width="25mm"/>
			<fo:table-header>
				<fo:table-row>
					<xsl:for-each select="$tourheader">
						<fo:table-cell>
							<fo:block font-weight="bold">
								<xsl:value-of select="."/>
							</fo:block>
						</fo:table-cell>
					</xsl:for-each>
				</fo:table-row>
			</fo:table-header>
			<fo:table-body>
				<xsl:for-each select="$tourrows">
					<fo:table-row>
						<xsl:for-each select="Field">
							<fo:table-cell>
								<fo:block>
									<xsl:value-of select="."/>
								</fo:block>
							</fo:table-cell>
						</xsl:for-each>
					</fo:table-row>
				</xsl:for-each>
			</fo:table-body>
		</fo:table>
	</xsl:template>
	<xsl:template name="simple-page-master">
		<fo:layout-master-set>
			<fo:simple-page-master master-name="A4" page-height="210mm" page-width="297mm" margin-top="1cm" margin-bottom="1.05cm" margin-left="0.88cm" margin-right="0.53cm">
				<fo:region-body margin-top="3cm"/>
				<fo:region-before extent="5cm"/>
				<fo:region-after extent="1cm"/>
			</fo:simple-page-master>
		</fo:layout-master-set>
	</xsl:template>
</xsl:stylesheet>
```

This stylesheet gets data for the first area through a Logical View called PDF_TOUR. In this case, the summation (the Sold column) is performed by the Logical View and displayed by the XSL:

```sql
select		t.tour_id
,			t.destination
,			t.tour_type
,			t.start_date
,			t.return_date
,			sum( r.price ) sold
from		tour t
,			reservation r	
,			traveller tr
relate		t "FOR WHICH IS MADE" r
,			r "IS MADE FOR" tr
group by	t.tour_id
,			t.destination
,			t.tour_type
,			t.start_date
,			t.return_date
```

This stylesheet gets data for the grand total at the bottom of the report through a Logical View called PDF_TRAVELLER. In this case, the Logical View is a preparation for the summation, and the actual SUM() operation is performed in the XSL stylesheet:

```sql
select		tr.res_id
,			tr.person_id
,			r.price
from		reservation r
,			traveller tr
relate		r "IS MADE FOR" tr
```

 