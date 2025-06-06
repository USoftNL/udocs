# Life time data source property

A DataSource object has a Life Time property that determines the lifecycle of the data. The Life Time property can have the following values:

|**Value**|**Explanation**|
|--------|--------|
|-1      |Data stays unchanged until it leaves the scope.|
|0       |Data is refreshed each time a data source is touched.|
|> 0     |Data is refreshed when it is read and a timeout of n seconds has passed.|