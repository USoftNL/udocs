# Log configuration

Service Definer's Publish feature outputs a **"****log4j.properties****"** file when you publish a server. This file contains log configuration properties. The USoft services framework uses the Log4j Java library for logging. The structure of the file is described in the log4j documentation.

There is only a single "**log4j.properties**" file per server. The file is published in the Publication File Path of the server. The file can be configured to accommodate servers in target environments at runtime.

*Example*

```
log4j.rootCategory=INFO, Server

#### Appender writes to UService.log
log4j.appender.Server=org.apache.log4j.RollingFileAppender
log4j.appender.Server.File=./logs/UService.log
log4j.appender.Server.MaxFileSize=1000KB
log4j.appender.Server.MaxBackupIndex=1
log4j.appender.Server.layout=org.apache.log4j.PatternLayout
log4j.appender.Server.layout.ConversionPattern=%d{ISO8601} %-5p %t %C - %m%n

#### Server Main.class logger
log4j.logger.com.usoft.uservice.urest.Main=INFO, Server
log4j.additivity.com.usoft.uservice.urest.Main = false

#### DynamicService class logger
log4j.logger.com.usoft.uservice.dynamic.DynamicService=INFO, DynamicService
log4j.appender.DynamicService=org.apache.log4j.DailyRollingFileAppender
log4j.appender.DynamicService.datePattern='-'dd'.log'
log4j.appender.DynamicService.File=./logs/DynamicService.log
log4j.appender.DynamicService.layout=org.apache.log4j.PatternLayout
log4j.appender.DynamicService.layout.ConversionPattern=%p %m%n

#### service class logger
log4j.logger.com.usoft.service.myservice=DEBUG, myservice
log4j.appender.DefaultTableREST=org.apache.log4j.DailyRollingFileAppender
log4j.appender.DefaultTableREST.datePattern='-'dd'.log'
log4j.appender.DefaultTableREST.File=./logs/myservice.log
log4j.appender.DefaultTableREST.layout=org.apache.log4j.PatternLayout
log4j.appender.DefaultTableREST.layout.ConversionPattern=%d{ISO8601} %-5p %C - %m%n
```