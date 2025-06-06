---
id: Property_reference
---

# Property reference



> [!NOTE]
> This article contains **Property Reference** information for making [property calls](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md) in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## Property Reference

In the USoft Action Language, to set a Background Color property to 'red’, you need to make a call of this type:

```
MyPersonsWindow.background( red )
```

To do that, you need to know the **internal property name** of the property you want to set or get. In the example, 'background’ is the internal property name.

In some cases, you also need to know what are **allowed values** that you can set a property to.

## Internal property names

This table allows you to lookup internal property names on the basis of the property name as displayed in the Property Inspector tool of USoft Windows Designer.

|**Windows Designer property name**|**Internal property name**|
|--------|--------|
|Action  |callback|
|Actions at Startup|exe     |
|Adjust Change|adaptChangeCallback|
|Alignment|alignment|
|Allow  Neighbor|allowNeighbour|
|Allow Open Query|allowOpenQuery|
|Alternative Input Format|alternateInputFormat|
|Auto-commit|autoCommit|
|Auto-Tab|automaticTab|
|Auto-Resize|resize  |
|Background Color|background|
|Border Color|borderColor|
|Border Type|borderType|
|Border Width|borderWidth|
|Buffer Height|bufferHeight|
|Button Type|focusType|
|Caption |caption |
|Chart Size (% Of Field)|percOfWindow|
|Check Count Query|checkCountQuery|
|Check List|checkEnumsExclusive|
|Child Nodes|childTypes|
|Client  |client  |
|Client Edge|clientEdge|
|Column Alignment|columnAlignment|
|Column Manager Class|columnManagerClass|
|Context Help|contextHelp|
|Create on Demand|onDemandCreation|
|Current Line Color|cursorLineColor|
|Data Alignment|justify |
|Data Length|dataLengt|
|Default Bind|defaultBind|
|Default Value|defValue|
|Deletable|deletable|
|Detail Joined Columns|joinColumnsInDetail|
|Dialog Startup Actions|startUp |
|Dsplay All Subtype Indicators|displaySubtypeIndicators|
|Display Class|displayClass|
|Display Foreign Key|displayForeignKey|
|Display Length|displayLength|
|Display Text|echo    |
|Display Type|fDatatype|
|Displayed|displayed|
|Double-click Action|acceptCallback|
|Echo    |echo    |
|Edit action|editaction|
|Edit Mode|editType|
|Expand Tree|fullExpand|
|Expansion Level|expandLevel|
|Extra Width for Label|labelExtraWidth|
|Fast Open|resident|
|Fast-Open Priority|residentPriority|
|Fix Column on Display|fixed   |
|Fixed Length|fixedLength|
|Floor On Minimum|floorOnMinimum|
|Foreground Bitmap|bitmap  |
|Foreign Key Colour|foreignKeyColor|
|Generate List|generateEnums|
|Group   |group   |
|Group Border Title|groupTitle|
|Group Border Title Justify|groupTitleJustify|
|Height  |height  |
|Height of Internal Buffer|bufferHeight|
|Help File|helpFile|
|Help Popup|helpPopup|
|Help Topic ID|contextId|
|Highlight Current Field|highlightCursorField|
|Highlight Current Record|highlightCursorLine|
|Highlight Thickness|highlightThickness|
|Horizontal Cell Margin|cellMarginHorizontal|
|Horizontal Distance|horizDistance|
|Horizontal Scrollbar|scrollHorizontal|
|Horizontal Spacing|spacingHorizontal|
|Iconic  |iconic  |
|Image   |icon    |
|Implement Scrollbar|scroll  |
|Include Subtype Presentations|showSubtypes|
|Initial Value|value   |
|Input Allowed|inputAllowed|
|Insertable|insertable|
|Internal Height|internalHeight|
|Internal Width|internalWidth|
|IO Format|ioformat|
|Joined Columns|columns |
|Label   |label   |
|Label Position|justify |
|Label Rotation|labelRotation|
|Label Type|dataLabelType|
|Line Color|lineColor|
|Line Style|lineStyle|
|Lock Parent On Sequence|lockParentOnSeqno|
|Lookup action|lookupaction|
|Mandatory|mandatory|
|Max Character Width|useMaxCharWidth|
|Max Height|maxHeight|
|Max No of Records per Fetch|maxRows |
|Max Width|maxWidth|
|Maximize Button|maximizeBox|
|Maximized|maximize|
|Maximum No of Resident Windows|maxResidents|
|MDI Child|mdiChild|
|Menu Page|menuPage|
|Minimize Button|minimizeBox|
|Minimized|minimize|
|Minimum Height|height  |
|Minimum Width|width   |
|Mnemonic|mnemonic|
|Modal   |modal   |
|Mouse Pointer Shape|cursor  |
|No Action|noAction|
|No of Decimals|lengthAfterPeriod|
|No of Records Displayed|displayHeight|
|No of Records Displayed<br/>			(secondary info boxes)|displayHeightType|
|Node-specific Menus|useTypeMenu|
|(NULL) Prompt|nullPrompt|
|Number of Columns in Updates|numberOfUpdateColumns|
|Object Name|objectName|
|On Change|displayChangedCallback|
|On Database Error|rdbmsErrorCallback|
|On Empty Window|onEmptyWindow|
|Open Only Once|openOnlyOnce|
|Optimize Joined Column Fetch|joinedColumnsInMain|
|Oracle ROWID|hasRowid|
|Order By|orderby |
|Orientation|orientation|
|Overlay Condition|overlayCondition|
|Overlay Image|selectionOverlay|
|Page Title|groupTitle|
|Pattern |backgroundPixmap|
|Popup Menu Page|columnMenu|
|Position|seqno   |
|Post-change (columns)|postChangeCallback|
|Post-change (info boxes)|preLeaveRecordCallback|
|Post-close|postCloseCallback|
|Post-create|createRecordCallback|
|Post-delete|postDeleteCallback|
|Post-edit|postEditCallback|
|Post-fetch|postFetchCallback|
|Post-insert|postInsertCallback|
|Post-leave|leaveFieldCallback|
|Post-open|postStartupCallback|
|Post-rollback|postRollbackCallback|
|Post-update|postUpdateCallback|
|Pre-close|preCloseCallback|
|Pre-commit|preCommitCallback|
|Pre-delete|preDeleteCallback|
|Pre-exit Validation|preExitCallbacklist|
|Pre-field-entry|enterFieldCallback|
|Pre-insert Validation|preInsertCallback|
|Pre-record-entry|preRecordCallback|
|Pre-update Validation|preUpdateCallback|
|Primary Key Color|primaryKeyColor|
|Primary Key Font|primaryKeyFont|
|Prompt  |prompt  |
|Prompt For Edit|menuEditPrompt|
|Prompt For Fixed|menuFixedPrompt|
|Prompt For Lookup|menuLookupPrompt|
|Query Allowed|queryAllowed|
|Query Mandatory|queryMandatory|
|Query Some Mandatory|querySomeMandatory|
|Range Maximum|rangeHigh|
|Range Minimum|rangeLow|
|Reflect Updates|updateNotifyActive|
|Refresh Changed Records|refreshRow|
|Related Column|foreignColumn|
|Related Windows For Menu|relatedWindowsForMenu|
|Relationships|joinReferences|
|Resize Child|allowShellResize|
|Root Nodes|topName |
|Round Off Monetary Values|roundOffMoney|
|Show Icons|useBitmap|
|Show Message Numbers|showMessageNumbers|
|Show Root Lines|linesAtRoot|
|Single Selection|useSingleSelection|
|Sizable |thickFrame|
|Sort Alphabetically|sort    |
|SQL Query|query   |
|SQL Statement|sql     |
|Startup Actions|startUp |
|Static Edge|staticEdge|
|Subtype action|subtypeaction|
|Subtype Presentations|subtypePresentations|
|Synchronize Lookup|synchronizeLookup|
|System Menu|sysMenu |
|Tab Order|tabSeqno|
|Text Color|foreground|
|Text Font|font    |
|Tick Mark Frequency|tickMarkFrequency|
|Tick Mark Position|tickMarkPosition|
|Title   |title   |
|Tool Window|toolWindow|
|Topmost |topmost |
|Underlying Query|sql     |
|Uniform Cell Width|colWidth|
|Unit Lines Primary Axis|linesPrimAxis|
|Unit Lines Secondary Axis|linesSecAxis|
|Updatable|updatable|
|Updatable Only if Null|updatableIfNull|
|Uppercase|uppercase|
|Use Static Tables|useStaticTables|
|Value List|enums   |
|Value List Prompts|enumPrompts|
|Values to Query|sql     |
|Vertical Cell Margin|cellMarginVertical|
|Vertical Distance|vertDistance|
|Vertical Scrollbar|scrollVertical|
|Vertical Spacing|spacingVertical|
|View    |viewStyle|
|Virtual Color|virtualColor|
|WHERE Clause|whereClause|
|Width   |width   |
|Window Edge|windowEdge|
|X Position|x       |
|Y Position|y       |
|Yes Action|yesAction|



## Allowed values of properties

This table allows you to lookup what are allowed values that you can set a property to.

The 2  leftmost columns identify properties and values as displayed in USoft Windows Designer. The rightmost column provides the internal value name that you need to use in Action Language calls.

|**Property**|**Value**|**Internal value**|
|--------|--------|--------|
|(All Yes/No properties)|Yes     |Y       |
|        |No      |N       |
|Alignment|Left or Top|B       |
|        |Centered|C       |
|        |Right or Bottom|E       |
|        |Justified|J       |
|        |Workarea|W       |
|Border Type|None    |0       |
|        |Normal  |1       |
|        |Group   |2       |
|        |Raised  |3       |
|        |Shadow  |4       |
|        |Sunken  |5       |
|        |Single Raised|6       |
|        |Double Raised|7       |
|        |Single Sunken|8       |
|        |Double Sunken|9       |
|Button Type|Apply   |ButtonApply|
|        |Cancel  |ButtonCancel|
|        |Default |ButtonDefault|
|        |No Check|ButtonNoCheck|
|        |Sensitive|ButtonSensitive|
|        |Standard|ButtonStandard|
|Data Alignment|Left    |L       |
|        |Center  |C       |
|        |Right   |R       |
|Display Type|Bitmap  Image|EXT_PIXMAP|
|        |Check Box|CHECK   |
|        |Dropdown List Box|OPTION  |
|        |Multi-line Text Box|LONG    |
|        |Multi-line Text Box (CLOB)|CLOB    |
|        |OLE Container|EXT_OLE |
|        |Option Buttons|RADIO   |
|        |Slides  |SCALE   |
|        |Text Box (Alpha)|ALPHA   |
|        |Text Box (Char)|CHAR    |
|        |Text Box (Date and Time)|DATETIME|
|        |Text Box (Date)|DATE    |
|        |Text Box (European Date)|EDATE   |
|        |Text Box (Integer)|INT     |
|        |Text Box (Julian Date)|JDATE   |
|        |Text Box (Money)|MONEY   |
|        |Text Box (Number)|NUMBER  |
|        |Text Box (R Integer)|RINT    |
|        |Text Box (R Money)|RMONEY  |
|        |Text Box (R Number)|RNUMBER |
|        |Text Box (Time)|TIME    |
|        |Text Document|EXT_TEXT|
|        |Text Editor|DB_TEXT |
|Label Type|None    |None    |
|        |Value   |Value   |
|        |Percent |Percent |
|        |Label   |Label   |
|        |LabelPercent|LabelPercent|
|Label Position|Left    |L       |
|        |Center  |C       |
|        |Right   |R       |
|Line Style|Lines   |Lines   |
|        |Dots    |Dots    |
|        |Both    |LinesDots|
|On Empty Window|Close Window|CloseWindow|
|        |Show Message|ShowMessage|
|        |Show Window|ShowWindow|
|Orientation|Horizontal|Horizontal|
|        |Vertical|Vertical|
|        |Xy      |Xy      |
|Synchronize Lookup|None    |None    |
|        |Non-editable Fields|NoneEditableFields|
|        |All Edited Fields|AllEditedFields|
|Tick Mark Position|None    |None    |
|        |Both    |Both    |
|        |Top     |LeftTop |
|        |Bottom  |RightBottom|



 

 

 