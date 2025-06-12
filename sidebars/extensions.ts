const extensions = [
      {
      type: 'category',
      label: 'Extensions',
      customProps: {
        icon: 'Blocks',
      },
      link: {
        type: 'generated-index',
        title: 'Extensions',
        slug: '/Extensions',
      },
      items: [
        {
          type: 'category',
          label: 'RDMI Components',
          link: {
            type: 'generated-index',
            title: 'RDMI Components',
            slug: '/Extensions/RDMI_Components',
          },
          items: [
            {
              type: 'doc',
              id: 'Extensions/RDMI_Components/What_is_an_RDMI_component_and_how_do_you_create_one',
            },
            {
              type: 'doc',
              id: 'Extensions/RDMI_Components/Java_Enterprise_J2EE_components',
            },
            {
              type: 'doc',
              id: 'Extensions/RDMI_Components/Component_parameters',
            },
            {
              type: 'doc',
              id: 'Extensions/RDMI_Components/Component_state',
            },
            {
              type: 'doc',
              id: 'Extensions/RDMI_Components/Constructor_SQL',
            },
            {
              type: 'doc',
              id: 'Extensions/RDMI_Components/How_many_times_a_called_component_is_executed',
            },
            {
              type: 'doc',
              id: 'Extensions/RDMI_Components/Components_Standard_protocol',
            },
            {
              type: 'doc',
              id: 'Extensions/RDMI_Components/Query_protocol_component_table',
            },
            {
              type: 'doc',
              id: 'Extensions/RDMI_Components/Component_querying_multiple_CSV_files',
            },
            {
              type: 'doc',
              id: 'Extensions/RDMI_Components/Component_querying_a_CSV_file',
            },
            {
              type: 'doc',
              id: 'Extensions/RDMI_Components/Aggregate_protocol',
            },
            {
              type: 'doc',
              id: 'Extensions/RDMI_Components/Component_for_exporting_a_data_set_to_a_CSV_file',
            },
            {
              type: 'doc',
              id: 'Extensions/RDMI_Components/Calling_a_component',
            },
            {
              type: 'doc',
              id: 'Extensions/RDMI_Components/Component_error_handling',
            },
          ],
        },
        {
          type: 'category',
          label: 'DotNet components',
          link: {
            type: 'generated-index',
            title: 'DotNet components',
            slug: '/Extensions/DotNet_components',
          },
          items: [
            {
              type: 'doc',
              id: 'Extensions/DotNet_components/DotNet_NET_components',
            },
            {
              type: 'doc',
              id: 'Extensions/DotNet_components/C_components',
            },
            {
              type: 'doc',
              id: 'Extensions/DotNet_components/Nugets',
            },
            {
              type: 'doc',
              id: 'Extensions/DotNet_components/C_component_Example_1_Event_log',
            },
            {
              type: 'doc',
              id: 'Extensions/DotNet_components/C_component_Example_2_Tracer',
            },
            {
              type: 'doc',
              id: 'Extensions/DotNet_components/C_component_Example_3_External_DLL',
            },
            {
              type: 'doc',
              id: 'Extensions/DotNet_components/C_component_Example_4_Cookie_enabled_HTTP_client',
            },
            {
              type: 'doc',
              id: 'Extensions/DotNet_components/JavaScript_components',
            },
            {
              type: 'doc',
              id: 'Extensions/DotNet_components/UBlend_components',
            },
            {
              type: 'doc',
              id: 'Extensions/DotNet_components/Visual_Basic_components',
            },
            {
              type: 'doc',
              id: 'Extensions/DotNet_components/Web_Service_Client_components',
            },
            {
              type: 'doc',
              id: 'Extensions/DotNet_components/XSL_Stylesheets_components',
            },
            {
              type: 'doc',
              id: 'Extensions/DotNet_components/XSL_Stylesheet_component_example_Creating_a_PDF_report',
            },
            {
              type: 'doc',
              id: 'Extensions/DotNet_components/DotNetUSoft_data_provider',
            },
            {
              type: 'doc',
              id: 'Extensions/DotNet_components/Component_references_and_inheritance_for_dotNet',
            },
          ],
        },
        {
          type: 'category',
          label: 'Off-the-shelf components',
          link: {
            type: 'generated-index',
            title: 'Off-the-shelf components',
            slug: '/Extensions/Off-the-shelf_components',
          },
          items: [
            {
              type: 'doc',
              id: 'Extensions/Off-the-shelf_components/Importing_offtheshelf_components_and_models',
            },
          ],
        },
        {
          type: 'category',
          label: 'BIRT reporting',
          link: {
            type: 'generated-index',
            title: 'BIRT reporting',
            slug: '/Extensions/BIRT_reporting',
          },
          items: [
            {
              type: 'doc',
              id: 'Extensions/BIRT_reporting/BIRT_reporting',
            },
            {
              type: 'doc',
              id: 'Extensions/BIRT_reporting/BIRT_Step_1_Download_and_Install_BIRT_Software',
            },
            {
              type: 'doc',
              id: 'Extensions/BIRT_reporting/BIRT_Step_2_Create_a_BIRT_report_definition_file',
            },
            {
              type: 'doc',
              id: 'Extensions/BIRT_reporting/BIRT_Step_3_Import_and_configure_the_BIRT_offtheshelf_component',
            },
            {
              type: 'doc',
              id: 'Extensions/BIRT_reporting/BIRT_Step_4_Start_the_USoft_Rules_Service',
            },
            {
              type: 'doc',
              id: 'Extensions/BIRT_reporting/BIRT_Step_5_Call_the_BIRT_component_to_generate_the_report',
            },
            {
              type: 'doc',
              id: 'Extensions/BIRT_reporting/BIRT_Step_6_Parameterisation_of_the_BIRT_report_definition',
            },
          ],
        },
        {
          type: 'category',
          label: 'Domain and table internal components',
          link: {
            type: 'generated-index',
            title: 'Domain and table internal components',
            slug: '/Extensions/Domain_and_table_internal_components',
          },
          items: [
            {
              type: 'doc',
              id: 'Extensions/Domain_and_table_internal_components/Domain_and_table_internal_components',
            },
            {
              type: 'doc',
              id: 'Extensions/Domain_and_table_internal_components/domainCheckValue',
            },
            {
              type: 'doc',
              id: 'Extensions/Domain_and_table_internal_components/tableGetInitialData',
            },
            {
              type: 'doc',
              id: 'Extensions/Domain_and_table_internal_components/tableGetNextGeneratedUniqueValue',
            },
          ],
        },
        {
          type: 'category',
          label: 'BatchRunner internal component',
          link: {
            type: 'generated-index',
            title: 'BatchRunner internal component',
            slug: '/Extensions/BatchRunner_internal_component',
          },
          items: [
            {
              type: 'doc',
              id: 'Extensions/BatchRunner_internal_component/BatchRunner_internal_component',
            },
            {
              type: 'doc',
              id: 'Extensions/BatchRunner_internal_component/BatchRunner_job_methods',
            },
            {
              type: 'doc',
              id: 'Extensions/BatchRunner_internal_component/BatchRunnerGetJobProperty',
            },
            {
              type: 'doc',
              id: 'Extensions/BatchRunner_internal_component/BatchRunnerRunJob',
            },
            {
              type: 'doc',
              id: 'Extensions/BatchRunner_internal_component/BatchRunnerStartJob',
            },
          ],
        },
        {
          type: 'category',
          label: 'CurrentUser internal component',
          link: {
            type: 'generated-index',
            title: 'CurrentUser internal component',
            slug: '/Extensions/CurrentUser_internal_component',
          },
          items: [
            {
              type: 'doc',
              id: 'Extensions/CurrentUser_internal_component/CurrentUserGetProperty',
            },
            {
              type: 'doc',
              id: 'Extensions/CurrentUser_internal_component/CurrentUserSetProperty',
            },
          ],
        },
        {
          type: 'category',
          label: 'JSON internal component',
          link: {
            type: 'generated-index',
            title: 'JSON internal component',
            slug: '/Extensions/JSON_internal_component',
          },
          items: [
            {
              type: 'doc',
              id: 'Extensions/JSON_internal_component/JSONExport',
            },
            {
              type: 'doc',
              id: 'Extensions/JSON_internal_component/JSONImport',
            },
            {
              type: 'doc',
              id: 'Extensions/JSON_internal_component/JSONMultiExportTables',
            },
          ],
        },
        {
          type: 'category',
          label: 'RulesEngine internal component',
          link: {
            type: 'generated-index',
            title: 'RulesEngine internal component',
            slug: '/Extensions/RulesEngine_internal_component',
          },
          items: [
            {
              type: 'doc',
              id: 'Extensions/RulesEngine_internal_component/RulesEngineExecuteStatement',
            },
            {
              type: 'doc',
              id: 'Extensions/RulesEngine_internal_component/RulesEngineGetLastCaughtErrors',
            },
            {
              type: 'doc',
              id: 'Extensions/RulesEngine_internal_component/RulesEngineGetLastCaughtErrorsAsXML',
            },
            {
              type: 'doc',
              id: 'Extensions/RulesEngine_internal_component/RulesEngineGetLastGeneratedGuid',
            },
            {
              type: 'doc',
              id: 'Extensions/RulesEngine_internal_component/RulesEngineGetLastGeneratedUniqueValue',
            },
            {
              type: 'doc',
              id: 'Extensions/RulesEngine_internal_component/RulesEngineGetProperty',
            },
            {
              type: 'doc',
              id: 'Extensions/RulesEngine_internal_component/RulesEngineGetRegistry',
            },
            {
              type: 'doc',
              id: 'Extensions/RulesEngine_internal_component/RulesEngineMessageLanguage',
            },
            {
              type: 'doc',
              id: 'Extensions/RulesEngine_internal_component/RulesEngineMustExistExecuteStatement',
            },
            {
              type: 'doc',
              id: 'Extensions/RulesEngine_internal_component/RulesEnginePreCommit',
            },
            {
              type: 'doc',
              id: 'Extensions/RulesEngine_internal_component/RulesEngineRefreshAuthorization',
            },
            {
              type: 'doc',
              id: 'Extensions/RulesEngine_internal_component/RulesEngineSetProperty',
            },
            {
              type: 'doc',
              id: 'Extensions/RulesEngine_internal_component/RulesEngineSetRole',
            },
            {
              type: 'doc',
              id: 'Extensions/RulesEngine_internal_component/RulesEngineSetUser',
            },
            {
              type: 'doc',
              id: 'Extensions/RulesEngine_internal_component/RulesEngineSetUserGroup',
            },
            {
              type: 'doc',
              id: 'Extensions/RulesEngine_internal_component/RulesEngineStartCatchingErrors',
            },
            {
              type: 'doc',
              id: 'Extensions/RulesEngine_internal_component/RulesEngineStopCatchingErrors',
            },
            {
              type: 'doc',
              id: 'Extensions/RulesEngine_internal_component/RulesEngineTranslateMessage',
            },
          ],
        },
        {
          type: 'category',
          label: 'USCSXSL internal component',
          link: {
            type: 'generated-index',
            title: 'USCSXSL internal component',
            slug: '/Extensions/USCSXSL_internal_component',
          },
          items: [
            {
              type: 'doc',
              id: 'Extensions/USCSXSL_internal_component/USCSXSL_internal_component',
            },
            {
              type: 'doc',
              id: 'Extensions/USCSXSL_internal_component/USCSXSLApply',
            },
            {
              type: 'doc',
              id: 'Extensions/USCSXSL_internal_component/USCSXSLApply2File',
            },
            {
              type: 'doc',
              id: 'Extensions/USCSXSL_internal_component/USCSXSLBlend',
            },
          ],
        },
        {
          type: 'category',
          label: 'USFile internal component',
          link: {
            type: 'generated-index',
            title: 'USFile internal component',
            slug: '/Extensions/USFile_internal_component',
          },
          items: [
            {
              type: 'doc',
              id: 'Extensions/USFile_internal_component/USFile_internal_component',
            },
            {
              type: 'doc',
              id: 'Extensions/USFile_internal_component/USFileClose',
            },
            {
              type: 'doc',
              id: 'Extensions/USFile_internal_component/USFileEOF',
            },
            {
              type: 'doc',
              id: 'Extensions/USFile_internal_component/USFileOpen',
            },
            {
              type: 'doc',
              id: 'Extensions/USFile_internal_component/USFileReadBinaryFile',
            },
            {
              type: 'doc',
              id: 'Extensions/USFile_internal_component/USFileReadLine',
            },
            {
              type: 'doc',
              id: 'Extensions/USFile_internal_component/USFileReadTextFile',
            },
            {
              type: 'doc',
              id: 'Extensions/USFile_internal_component/USFileWrite',
            },
            {
              type: 'doc',
              id: 'Extensions/USFile_internal_component/USFileWriteBinaryFile',
            },
          ],
        },
        {
          type: 'category',
          label: 'USFormat internal component',
          link: {
            type: 'generated-index',
            title: 'USFormat internal component',
            slug: '/Extensions/USFormat_internal_component',
          },
          items: [
            {
              type: 'doc',
              id: 'Extensions/USFormat_internal_component/USFormatCharAddIOFormat',
            },
            {
              type: 'doc',
              id: 'Extensions/USFormat_internal_component/USFormatCharRemoveIOFormat',
            },
            {
              type: 'doc',
              id: 'Extensions/USFormat_internal_component/USFormatCharToDate',
            },
            {
              type: 'doc',
              id: 'Extensions/USFormat_internal_component/USFormatCharToDouble',
            },
            {
              type: 'doc',
              id: 'Extensions/USFormat_internal_component/USFormatCharToLong',
            },
            {
              type: 'doc',
              id: 'Extensions/USFormat_internal_component/USFormatDateToChar',
            },
            {
              type: 'doc',
              id: 'Extensions/USFormat_internal_component/USFormatDoubleToChar',
            },
            {
              type: 'doc',
              id: 'Extensions/USFormat_internal_component/USFormatIsAlphanumeric',
            },
            {
              type: 'doc',
              id: 'Extensions/USFormat_internal_component/USFormatIsXMLName',
            },
            {
              type: 'doc',
              id: 'Extensions/USFormat_internal_component/USFormatLongToChar',
            },
          ],
        },
        {
          type: 'category',
          label: 'USMeta internal component',
          link: {
            type: 'generated-index',
            title: 'USMeta internal component',
            slug: '/Extensions/USMeta_internal_component',
          },
          items: [
            {
              type: 'doc',
              id: 'Extensions/USMeta_internal_component/USMetaColumns',
            },
            {
              type: 'doc',
              id: 'Extensions/USMeta_internal_component/USMetaComponents',
            },
            {
              type: 'doc',
              id: 'Extensions/USMeta_internal_component/USMetaConstraints',
            },
            {
              type: 'doc',
              id: 'Extensions/USMeta_internal_component/USMetaDecisions',
            },
            {
              type: 'doc',
              id: 'Extensions/USMeta_internal_component/USMetaDomains',
            },
            {
              type: 'doc',
              id: 'Extensions/USMeta_internal_component/USMetaJobs',
            },
            {
              type: 'doc',
              id: 'Extensions/USMeta_internal_component/USMetaModules',
            },
            {
              type: 'doc',
              id: 'Extensions/USMeta_internal_component/USMetaRelationships',
            },
            {
              type: 'doc',
              id: 'Extensions/USMeta_internal_component/USMetaRoles',
            },
            {
              type: 'doc',
              id: 'Extensions/USMeta_internal_component/USMetaSets',
            },
            {
              type: 'doc',
              id: 'Extensions/USMeta_internal_component/USMetaTables',
            },
            {
              type: 'doc',
              id: 'Extensions/USMeta_internal_component/USMetaLanguages',
            },
          ],
        },
        {
          type: 'category',
          label: 'USPowerShell internal component',
          link: {
            type: 'generated-index',
            title: 'USPowerShell internal component',
            slug: '/Extensions/USPowerShell_internal_component',
          },
          items: [
            {
              type: 'doc',
              id: 'Extensions/USPowerShell_internal_component/USPowerShellExecuteScript',
            },
          ],
        },
        {
          type: 'category',
          label: 'USXSL internal component',
          link: {
            type: 'generated-index',
            title: 'USXSL internal component',
            slug: '/Extensions/USXSL_internal_component',
          },
          items: [
            {
              type: 'doc',
              id: 'Extensions/USXSL_internal_component/USXSL_internal_component',
            },
            {
              type: 'doc',
              id: 'Extensions/USXSL_internal_component/USXSLApply',
            },
            {
              type: 'doc',
              id: 'Extensions/USXSL_internal_component/USXSLApply2File',
            },
            {
              type: 'doc',
              id: 'Extensions/USXSL_internal_component/USXSLNode',
            },
            {
              type: 'doc',
              id: 'Extensions/USXSL_internal_component/USXSLSetGlobalXsl',
            },
            {
              type: 'doc',
              id: 'Extensions/USXSL_internal_component/USXSLSetXml',
            },
            {
              type: 'doc',
              id: 'Extensions/USXSL_internal_component/USXSLSetXsl',
            },
            {
              type: 'doc',
              id: 'Extensions/USXSL_internal_component/USXSLValue',
            },
          ],
        },
        {
          type: 'category',
          label: 'XML internal component',
          link: {
            type: 'generated-index',
            title: 'XML internal component',
            slug: '/Extensions/XML_internal_component',
          },
          items: [
            {
              type: 'doc',
              id: 'Extensions/XML_internal_component/XMLCreateDTD',
            },
            {
              type: 'doc',
              id: 'Extensions/XML_internal_component/XMLExport',
            },
            {
              type: 'doc',
              id: 'Extensions/XML_internal_component/XMLGenerateComplexType',
            },
            {
              type: 'doc',
              id: 'Extensions/XML_internal_component/XMLImport',
            },
            {
              type: 'doc',
              id: 'Extensions/XML_internal_component/XMLJSON2XML',
            },
            {
              type: 'doc',
              id: 'Extensions/XML_internal_component/XMLMultiExportTables',
            },
            {
              type: 'doc',
              id: 'Extensions/XML_internal_component/XMLQuery',
            },
            {
              type: 'doc',
              id: 'Extensions/XML_internal_component/XMLSQL2XML',
            },
            {
              type: 'doc',
              id: 'Extensions/XML_internal_component/XMLSQLExport',
            },
            {
              type: 'doc',
              id: 'Extensions/XML_internal_component/XMLSQLStatementExport',
            },
          ],
        },
        {
          type: 'category',
          label: 'Web service components',
          link: {
            type: 'generated-index',
            title: 'Web service components',
            slug: '/Extensions/Web_service_components',
          },
          items: [
            {
              type: 'doc',
              id: 'Extensions/Web_service_components/What_is_a_web_service_component',
            },
            {
              type: 'doc',
              id: 'Extensions/Web_service_components/How_to_import_web_service_definitions',
            },
            {
              type: 'doc',
              id: 'Extensions/Web_service_components/Calling_a_web_service_using_an_INVOKE_statement',
            },
            {
              type: 'doc',
              id: 'Extensions/Web_service_components/Calling_a_web_service_using_a_component_table',
            },
            {
              type: 'doc',
              id: 'Extensions/Web_service_components/Using_XSL_transformations_for_web_service_component_tables',
            },
            {
              type: 'doc',
              id: 'Extensions/Web_service_components/The_USoft_component_table_XML_format',
            },
            {
              type: 'doc',
              id: 'Extensions/Web_service_components/Finishing_creating_a_web_service_component_table',
            },
            {
              type: 'doc',
              id: 'Extensions/Web_service_components/Proxy_server_settings',
            },
            {
              type: 'doc',
              id: 'Extensions/Web_service_components/How_to_modify_existing_web_service_components',
            },
            {
              type: 'doc',
              id: 'Extensions/Web_service_components/Web_service_component_details',
            },
            {
              type: 'doc',
              id: 'Extensions/Web_service_components/Setting_a_timeout_value_when_calling_a_web_service',
            },
            {
              type: 'doc',
              id: 'Extensions/Web_service_components/DIME_messages_support',
            },
            {
              type: 'doc',
              id: 'Extensions/Web_service_components/How_to_implement_DIME_messages',
            },
            {
              type: 'doc',
              id: 'Extensions/Web_service_components/MTOM_Message_Transmission_Optimization_Mechanism_Support',
            },
            {
              type: 'doc',
              id: 'Extensions/Web_service_components/Debugging_web_service_components',
            },
            {
              type: 'doc',
              id: 'Extensions/Web_service_components/The_sendSoapMessage_function',
            },
          ],
        },
      ],
    },
]

export default extensions;