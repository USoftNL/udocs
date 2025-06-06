---
id: Published_JSON_files
---

# Published JSON files

The published JSON (= JavaScript Object Notation) files, with file extension .js, contain jQuery instructions that allow client browsers to build the correct application behavior including the required data interaction. The content is generated from information stored in the Web Designer repository.

Here is an example of a part of a JSON .JS file for a page based on a database table called TOUR.

Published .JS files appear in the "xml" folder of the Publication Directory.

```
$.udb.registerPage({
name:"Tours",
dsObjects:{
"DS57":{ds:{"name":"TOUR","type":"Table","alias":"DS57","hasCount":true,"lifeTime":-1,"path":"Tours/TOUR","containsGetValue":false,"autoQuery":false,"initialState":"None","associatedDataSource":"","linkDataSource":"","onEmbeddedPage":false,"pageAlias":"P1","tableName":"TOUR","deletable":true,"insertable":true,"updatable":"true","maxDataSetSize":20,"isDefault":true,"joined":false,"setFirstRecAsDefaultSelectedRec":true},columns:{
"$58":{"label":"Destination","alias":"DESTINATION","type":"C","embedded":false,"displayLength":20,"defValue":"","helpText":"Destination of this tour","inputAllowed":true,"mandatory":true,"updatable":"true","valueList":null},
"$59":{"label":"Type","alias":"TOUR_TYPE","type":"C","embedded":false,"displayLength":30,"defValue":"","helpText":"Type of this tour","inputAllowed":true,"mandatory":true,"updatable":"true","valueList":null},
"$60":{"label":"Number of Days","alias":"NUM_DAYS","type":"C","embedded":false,"displayLength":3,"defValue":"","helpText":"Duration of this tour in days","valueType":"Real","inputAllowed":true,"mandatory":true,"updatable":"true","valueList":null},
"$61":{"label":"Maximum Age","alias":"MAX_AGE","type":"C","embedded":false,"displayLength":2,"defValue":"","helpText":"Maximum age allowed for participants joining this tour","valueType":"Real","inputAllowed":true,"updatable":"true","domain":"AGE","valueList":[{"name":"18","value":"","prompt":"18","displayed":true},{"name":"35","value":"","prompt":"35","displayed":true},{"name":"50","value":"","prompt":"50","displayed":true},{"name":"65","value":"","prompt":"65","displayed":true}]},
"$66":{"label":"Description","alias":"DESCRIPTION","type":"C","embedded":false,"displayLength":0,"defValue":"","helpText":"Description of highlights of this tour","inputAllowed":true,"updatable":"true","valueList":null}
}, rel:[],links:[],lookup:[]}},

controlsObj:{
"Tours":{name:"Page",props:{"num":1,"alias":"P1","id":"Tours","class":"Page","isPreview":false,"version":1.0,"documentScriptType":"text/javascript","logonRequired":true,"messagePresentation":"AlertBox","modalMessageWindow":true,"topPage":false,"messageType":"All","orientation":"Vertical","tableName":"TOUR","title":"Tours"},children:{
 "TitleLabel":{name:"LabelControl",props:{"id":"TitleLabel","class":"TitleLabelControl","label":"Tours"}},
 "SearchGroup":{name:"GroupControl",props:{"id":"SearchGroup","class":"GroupControl","num":55,"orientation":"Horizontal","header":"Search options"},children:{
  "SearchColumnGroup":{name:"GroupControl",props:{"id":"SearchColumnGroup","class":"GroupControl","num":56,"orientation":"Vertical"},children:{
   "S_DESTINATION":{name:"ColumnControl",props:{"id":"S_DESTINATION","class":"ColumnControl","orientation":"Horizontal","addCssClass":true,"alias":"DS57","mode":"S","alignData":true,"tableName":"TOUR","column":"$58"},children:{
    "Prompt":{name:"LabelControl",props:{"id":"Prompt","class":"LabelControl","label":"Destination"}},
    "Data":{name:"InputControl",props:{"id":"Data","class":"InputControl","addCssClass":true,"type":"text","mode":"S","num":69,"displayLength":20,"label":"Destination","uppercase":true,"helpText":"Destination of this tour","mandatory":true}}}},
   "S_TOUR_TYPE":{name:"ColumnControl",props:{"id":"S_TOUR_TYPE","class":"ColumnControl","orientation":"Horizontal","addCssClass":true,"alias":"DS57","mode":"S","alignData":true,"tableName":"TOUR","column":"$59"},children:{
    "Prompt":{name:"LabelControl",props:{"id":"Prompt","class":"LabelControl","label":"Type"}},
    "Data":{name:"InputControl",props:{"id":"Data","class":"InputControl","addCssClass":true,"type":"text","mode":"S","num":72,"displayLength":30,"label":"Type","uppercase":true,"helpText":"Type of this tour","mandatory":true}}}}}},
  "SearchButtonGroup":{name:"GroupControl",props:{"id":"SearchButtonGroup","class":"GroupControl","num":28,"orientation":"Horizontal","verticalAlign":"bottom"},children:{
   "SearchButton":{name:"ButtonControl",props:{"id":"SearchButton","class":"ExtraSearchButton","defaultButton":"S","imageClass":"ui-icon-search","label":"Search"},events:{
"click":function(event, options, caller){
$.udb("DS57").executeQuery();
}

```