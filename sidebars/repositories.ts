const repositories = [
        {
      type: 'category',
      label: 'Repositories',
      customProps: {
        icon: 'FolderGit2',
      },
      link: {
        type: 'generated-index',
        title: 'Repositories',
        slug: '/Repositories',
      },
      items: [
        {
          type: 'category',
          label: 'Introducing repositories',
          link: {
            type: 'generated-index',
            title: 'Introducing repositories',
            slug: '/Repositories/Introducing_repositories',
          },
          items: [
            {
              type: 'doc',
              id: 'Repositories/Introducing_repositories/Introducing_repositories',
            },
            {
              type: 'doc',
              id: 'Repositories/Introducing_repositories/Repository_management_wizards',
            },
            {
              type: 'doc',
              id: 'Repositories/Introducing_repositories/Globally_Unique_Keys_G_U_Ks',
            },
          ],
        },
        {
          type: 'category',
          label: 'Version control',
          link: {
            type: 'generated-index',
            title: 'Version control',
            slug: '/Repositories/Version_control',
          },
          items: [
            {
              type: 'doc',
              id: 'Repositories/Version_control/Versioncontrolled_repositories',
            },
            {
              type: 'doc',
              id: 'Repositories/Version_control/Versioncontrolled_local_branches',
            },
            {
              type: 'doc',
              id: 'Repositories/Version_control/Version_control_Create',
            },
            {
              type: 'doc',
              id: 'Repositories/Version_control/Version_control_Connect',
            },
            {
              type: 'doc',
              id: 'Repositories/Version_control/Version_control_Synchronize_Temporarily_Disable_Disconnect',
            },
          ],
        },
        {
          type: 'category',
          label: 'USoft XML formats',
          link: {
            type: 'generated-index',
            title: 'USoft XML formats',
            slug: '/Repositories/USoft_XML_formats',
          },
          items: [
            {
              type: 'doc',
              id: 'Repositories/USoft_XML_formats/USoft_XML_formats',
            },
            {
              type: 'doc',
              id: 'Repositories/USoft_XML_formats/XML_table_section_syntax',
            },
            {
              type: 'doc',
              id: 'Repositories/USoft_XML_formats/DML_instruction_tags',
            },
            {
              type: 'doc',
              id: 'Repositories/USoft_XML_formats/XML_singletable_document_format',
            },
            {
              type: 'doc',
              id: 'Repositories/USoft_XML_formats/XML_multitable_document_format',
            },
            {
              type: 'doc',
              id: 'Repositories/USoft_XML_formats/usoftxml_processing_instruction',
            },
            {
              type: 'doc',
              id: 'Repositories/USoft_XML_formats/XML_representation_of_date_values',
            },
            {
              type: 'doc',
              id: 'Repositories/USoft_XML_formats/XML_representation_of_queries',
            },
            {
              type: 'doc',
              id: 'Repositories/USoft_XML_formats/MetaRowsFields_document_format',
            },
            {
              type: 'doc',
              id: 'Repositories/USoft_XML_formats/XML_error_messages',
            },
          ],
        },
        {
          type: 'category',
          label: 'USoft JSON format',
          link: {
            type: 'generated-index',
            title: 'USoft JSON format',
            slug: '/Repositories/USoft_JSON_format',
          },
          items: [
            {
              type: 'doc',
              id: 'Repositories/USoft_JSON_format/USoft_JSON_format',
            },
            {
              type: 'doc',
              id: 'Repositories/USoft_JSON_format/JSON_representation_of_date_values',
            },
            {
              type: 'doc',
              id: 'Repositories/USoft_JSON_format/Metainstruction_properties_in_JSON',
            },
          ],
        },
        {
          type: 'category',
          label: 'Data flow control with XML or JSON',
          link: {
            type: 'generated-index',
            title: 'Data flow control with XML or JSON',
            slug: '/Repositories/Data_flow_control_with_XML_or_JSON',
          },
          items: [
            {
              type: 'doc',
              id: 'Repositories/Data_flow_control_with_XML_or_JSON/Data_flow_control_with_XML_or_JSON',
            },
            {
              type: 'doc',
              id: 'Repositories/Data_flow_control_with_XML_or_JSON/Example_Simple_XML_or_JSON_export',
            },
            {
              type: 'doc',
              id: 'Repositories/Data_flow_control_with_XML_or_JSON/Example_XML_import',
            },
            {
              type: 'doc',
              id: 'Repositories/Data_flow_control_with_XML_or_JSON/Example_JSON_import',
            },
            {
              type: 'doc',
              id: 'Repositories/Data_flow_control_with_XML_or_JSON/How_import_XML_or_JSON_is_processed',
            },
            {
              type: 'doc',
              id: 'Repositories/Data_flow_control_with_XML_or_JSON/Obsolete_children_on_import',
            },
            {
              type: 'doc',
              id: 'Repositories/Data_flow_control_with_XML_or_JSON/Generating_key_values_for_parentchild_data_on_import',
            },
            {
              type: 'doc',
              id: 'Repositories/Data_flow_control_with_XML_or_JSON/XML_import_Known_problems_and_workarounds',
            },
            {
              type: 'doc',
              id: 'Repositories/Data_flow_control_with_XML_or_JSON/Example_XML_export_with_DTD_name_and_IO_formats',
            },
            {
              type: 'doc',
              id: 'Repositories/Data_flow_control_with_XML_or_JSON/Example_XML_or_JSON_export_in_combination_with_USFile',
            },
            {
              type: 'doc',
              id: 'Repositories/Data_flow_control_with_XML_or_JSON/Example_Simple_XML_query',
            },
            {
              type: 'doc',
              id: 'Repositories/Data_flow_control_with_XML_or_JSON/Example_XML_query_with_Orderby_attributes',
            },
            {
              type: 'doc',
              id: 'Repositories/Data_flow_control_with_XML_or_JSON/XQuery',
            },
          ],
        },

        //  This section is empty...
        //     {
        //       type: 'category',
        //       label: 'Data transformation with XSLT',
        //       items: [
        //       ],
        //     },

        {
          type: 'category',
          label: 'Object shopping',
          link: {
            type: 'generated-index',
            title: 'Object shopping',
            slug: '/Repositories/Object_shopping',
          },
          items: [
            {
              type: 'doc',
              id: 'Repositories/Object_shopping/About_object_shopping',
            },
            {
              type: 'doc',
              id: 'Repositories/Object_shopping/Defining_a_shopping_basket_and_taking_it_to_a_different_place',
            },
            {
              type: 'doc',
              id: 'Repositories/Object_shopping/Object_shopping_via_the_clipboard_copypaste',
            },
            {
              type: 'doc',
              id: 'Repositories/Object_shopping/Overwrite_behaviour_in_Object_Shopping',
            },
            {
              type: 'doc',
              id: 'Repositories/Object_shopping/Inclusion_rules_for_Business_Areas',
            },
            {
              type: 'doc',
              id: 'Repositories/Object_shopping/Inclusion_rules_for_EAR_diagrams',
            },
            {
              type: 'doc',
              id: 'Repositories/Object_shopping/Inclusion_rules_for_Implementations',
            },
            {
              type: 'doc',
              id: 'Repositories/Object_shopping/Inclusion_rules_for_Tables_Views_and_Relationships',
            },
            {
              type: 'doc',
              id: 'Repositories/Object_shopping/Inclusion_rules_for_Domains',
            },
            {
              type: 'doc',
              id: 'Repositories/Object_shopping/Inclusion_rules_for_Jobs',
            },
            {
              type: 'doc',
              id: 'Repositories/Object_shopping/Inclusion_rules_for_Roles',
            },
            {
              type: 'doc',
              id: 'Repositories/Object_shopping/Export_logs',
            },
            {
              type: 'doc',
              id: 'Repositories/Object_shopping/Importing_from_USoft_Studio_into_USoft_Definer_11',
            },
            {
              type: 'doc',
              id: 'Repositories/Object_shopping/Importing_from_USoft_Studio_into_USoft_Definer_10',
            },
          ],
        },
        {
          type: 'category',
          label: 'Modular development',
          link: {
            type: 'generated-index',
            title: 'Modular development',
            slug: '/Repositories/Modular_development',
          },
          items: [
            {
              type: 'doc',
              id: 'Repositories/Modular_development/Modules_as_a_concept',
            },
            {
              type: 'doc',
              id: 'Repositories/Modular_development/Interface_objects',
            },
            {
              type: 'doc',
              id: 'Repositories/Modular_development/Modules_as_plugins',
            },
            {
              type: 'doc',
              id: 'Repositories/Modular_development/Modules_as_a_working_agreement_between_teams',
            },
          ],
        },
        {
          type: 'category',
          label: 'Blend scripts for repository management',
          link: {
            type: 'generated-index',
            title: 'Blend scripts for repository management',
            slug: '/Repositories/Blend_scripts_for_repository_management',
          },
          items: [
            {
              type: 'doc',
              id: 'Repositories/Blend_scripts_for_repository_management/Introducing_Blend_scripts',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_scripts_for_repository_management/Learning_USoft_Blend_for_repository_management',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_scripts_for_repository_management/Tips_and_tricks_for_USoft_Blend_beginners',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_scripts_for_repository_management/Understanding_USoft_Blend',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_scripts_for_repository_management/Calling_USCSXSL',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_scripts_for_repository_management/Guide_to_Blend_debugging',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_scripts_for_repository_management/Guide_to_Blend_expressions_and_data_types',
            },
          ],
        },
        {
          type: 'category',
          label: 'Blend directives',
          link: {
            type: 'generated-index',
            title: 'Blend directives',
            slug: '/Repositories/Blend_directives',
          },
          items: [
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/Blend_directives',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcAppendFile',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcapply',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcapply2file',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcassignboolean',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcassignbooleandefault',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcassignnodeset',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcassignnodesetdefault',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcassignnodesetfromjson',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcassignnumber',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcassignnumberdefault',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcassignstring',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcassignstringdefault',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcblend',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pccall',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pccase',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pccommentof',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcCompare',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcConfigRulesService',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcConsoleWrite',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcConvertFormatAndCulture',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pccopyof',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcCopyDirectory',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcCopyFile',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcCopyFileOverwrite',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcCreapp',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcCreateConceptualFile',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcCreateDirectories',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcDatabaseExists',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcdefault',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcdefinebooleanflags',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcdefs',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcDeleteDirectories',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcDeleteFile',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcDialog',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcDirectory',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcDropDatabase',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pceach',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcelse',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcerrormsg',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcerrortextmsg',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcevaluate',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcFailed',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcGenerateKeySchema',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcGetRulesEngineProperty',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcGetVariables',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcif',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcifnotthen',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcifthen',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcignorewhitespace',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcindent',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcindentchars',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcLoadVariables',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcLoadVariablesOverwrite',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcmessage',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcMoveFile',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcMoveFileOverwrite',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcmsg',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcnbs',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcNewBinder',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcNewDatabaseForUSoft',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcnewline',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcNewUDevelop',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcnonbreakingspace',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcPowerShell',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcprocessinginstruction',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcProgramSystemDir',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcRdbmsStatement',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcReadFile',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcReadFiles',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcReadXmlFile',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcReadXmlFiles',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcReplaceVariables',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcreturn',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcRulesServiceList',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcRunRulesService',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcSaveVariables',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcServiceInstall',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcServiceList',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcServiceStart',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcServiceState',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcServiceStop',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcServiceUninstall',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcSetRulesEngineProperty',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcSetRulesServiceConnection',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcSqlStatement',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcStopRulesService',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcSucceeded',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcswitch',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pctab',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcterminate',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pctext',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pctextmsg',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcthen',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcUserTempDir',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcUSoftSystemDir',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcUSoftTempDir',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcValidateSchemas',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcvalueof',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcvoid',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcWinCommand',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcWriteFile',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcXmlExport',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcXmlImport',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcXmlImportApply',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcZipExtractFiles',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcZipFile',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcZipFileCreate',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcZipFileCreateFromDir',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcZipFileEntry',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcZipReplace',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_directives/pcZipUpdate',
            },
          ],
        },
        {
          type: 'category',
          label: 'Blend attributes',
          link: {
            type: 'generated-index',
            title: 'Blend attributes',
            slug: '/Repositories/Blend_attributes',
          },
          items: [
            {
              type: 'doc',
              id: 'Repositories/Blend_attributes/Blend_attributes',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_attributes/assignvariable',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_attributes/pchideme',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_attributes/pcif',
            },
          ],
        },
        {
          type: 'category',
          label: 'Blend functions',
          link: {
            type: 'generated-index',
            title: 'Blend functions',
            slug: '/Repositories/Blend_functions',
          },
          items: [
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/Blend_functions',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/booleanflagsShow',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/booleanflagsToBoolean',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/clipboardGetText',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/datesShowInputFormats',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/directoriesDirectoryContent',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/directoriesDirectoryExists',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/directoriesGet',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/environmentMachineName',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/filesFileExists',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/filesReadFile',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/filesXmlFile',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/guidnewguid',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/oracleUSoftConnectString',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/pathCombine',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/pathGetFileName',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/pathGetFullPath',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/rulesserviceReadConfig',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/serviceServiceState',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/sqlDataTableSetExport',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/sqlSqlStmnt',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/stringsAposssed',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/stringsEndsWith',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/stringsjoin',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/stringsQuoted',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/stringsReplace',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/stringsReplaceVariables',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/stringsREReplace',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/stringsStartsWith',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/stringsStartsWithIgnoreCase',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/stringsText2Xml',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/stringsTitleCase',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/stringsToLower',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/stringsToUpper',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/variableIsDefined',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/variableSet',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/variableTypeOf',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/wrightsHasAdminRole',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/xslutilapplyTemplate',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/xslutiljson2xml',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/xslutilnodeset',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/xslutilSleep',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/xslutiltest',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/xslutilUserTempDir',
            },
            {
              type: 'doc',
              id: 'Repositories/Blend_functions/xslutilUSoftDir',
            },
          ],
        },
      ],
    },
]

export default repositories;