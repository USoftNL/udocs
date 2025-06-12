const taskFlow = [
        {
      type: 'category',
      label: 'Task flow',
      customProps: {
        icon: 'ListChecks',
      },
      link: { type: 'generated-index', title: 'Task flow', slug: '/Task_flow' },
      items: [
        {
          type: 'category',
          label: 'Introducing task flow',
          link: {
            type: 'generated-index',
            title: 'Introducing task flow',
            slug: '/Task_flow/Introducing_task_flow',
          },
          items: [
            {
              type: 'doc',
              id: 'Task_flow/Introducing_task_flow/What_is_task_flow_in_USoft',
            },
          ],
        },
        {
          type: 'category',
          label: 'Jobs',
          link: {
            type: 'generated-index',
            title: 'Jobs',
            slug: '/Task_flow/Jobs',
          },
          items: [
            {
              type: 'doc',
              id: 'Task_flow/Jobs/Defining_a_job',
            },
            {
              type: 'doc',
              id: 'Task_flow/Jobs/Executing_a_Job_from_USoft_Binder',
            },
            {
              type: 'doc',
              id: 'Task_flow/Jobs/Executing_a_Job_from_the_Command_Line',
            },
            {
              type: 'doc',
              id: 'Task_flow/Jobs/Executing_a_Job_from_within_a_USoft_Web_Application',
            },
            {
              type: 'doc',
              id: 'Task_flow/Jobs/Executing_a_Job_from_within_a_USoft_CS_Application',
            },
            {
              type: 'doc',
              id: 'Task_flow/Jobs/Executing_a_Job_from_another_Job',
            },
            {
              type: 'doc',
              id: 'Task_flow/Jobs/Executing_a_Job_from_a_Constraint',
            },
            {
              type: 'doc',
              id: 'Task_flow/Jobs/Invoking_a_job_via_Batchrunner',
            },
            {
              type: 'doc',
              id: 'Task_flow/Jobs/Getting_job_properties_from_Batchrunner',
            },
            {
              type: 'doc',
              id: 'Task_flow/Jobs/Passing_parameters_to_Batchrunner',
            },
            {
              type: 'doc',
              id: 'Task_flow/Jobs/Job_parameters_and_variables',
            },
            {
              type: 'doc',
              id: 'Task_flow/Jobs/Job_Parameters_as_Import_Task_Variables',
            },
            {
              type: 'doc',
              id: 'Task_flow/Jobs/Import_Task_Set_Virtuals_Managing_Decision_Trees',
            },
            {
              type: 'doc',
              id: 'Task_flow/Jobs/Import_Task_Set_Virtuals_in_RecordbyRecord_Computations',
            },
            {
              type: 'doc',
              id: 'Task_flow/Jobs/Job_logging',
            },
            {
              type: 'doc',
              id: 'Task_flow/Jobs/Job_error_handling_Commit_Type_and_Abort_Mode',
            },
            {
              type: 'doc',
              id: 'Task_flow/Jobs/TaskLevel_Commit_vs_RecordLevel_Commit',
            },
          ],
        },
        {
          type: 'category',
          label: 'Decisions',
          link: {
            type: 'generated-index',
            title: 'Decisions',
            slug: '/Task_flow/Decisions',
          },
          items: [
            {
              type: 'doc',
              id: 'Task_flow/Decisions/Decisions',
            },
            {
              type: 'doc',
              id: 'Task_flow/Decisions/Decision_variables_and_placeholders',
            },
            {
              type: 'doc',
              id: 'Task_flow/Decisions/Decision_branching_and_looping',
            },
          ],
        },
        {
          type: 'category',
          label: 'Tasks',
          link: {
            type: 'generated-index',
            title: 'Tasks',
            slug: '/Task_flow/Tasks',
          },
          items: [
            {
              type: 'doc',
              id: 'Task_flow/Tasks/SQL_tasks',
            },
            {
              type: 'doc',
              id: 'Task_flow/Tasks/Action_tasks',
            },
            {
              type: 'doc',
              id: 'Task_flow/Tasks/Export_tasks',
            },
            {
              type: 'doc',
              id: 'Task_flow/Tasks/Export_tasks_Creating_external_file_layout',
            },
            {
              type: 'doc',
              id: 'Task_flow/Tasks/Import_tasks',
            },
            {
              type: 'doc',
              id: 'Task_flow/Tasks/Import_task_status_files',
            },
            {
              type: 'doc',
              id: 'Task_flow/Tasks/Import_tasks_rejecting_tables',
            },
            {
              type: 'doc',
              id: 'Task_flow/Tasks/Import_tasks_Recognising_external_file_layout',
            },
            {
              type: 'doc',
              id: 'Task_flow/Tasks/Import_tasks_Working_with_parameters',
            },
            {
              type: 'doc',
              id: 'Task_flow/Tasks/Job_tasks',
            },
            {
              type: 'doc',
              id: 'Task_flow/Tasks/Messages_in_SQL_tasks_and_Import_tasks',
            },
            {
              type: 'doc',
              id: 'Task_flow/Tasks/Delayed_processing_of_tasks',
            },
            {
              type: 'doc',
              id: 'Task_flow/Tasks/Making_tasks_faster',
            },
            {
              type: 'doc',
              id: 'Task_flow/Tasks/Deactivating_and_Reactivating_Checks_and_Constraints',
            },
          ],
        },
        {
          type: 'category',
          label: 'External sets',
          link: {
            type: 'generated-index',
            title: 'External sets',
            slug: '/Task_flow/External_sets',
          },
          items: [
            {
              type: 'doc',
              id: 'Task_flow/External_sets/What_is_an_external_set',
            },
            {
              type: 'doc',
              id: 'Task_flow/External_sets/File_formats_in_external_sets',
            },
            {
              type: 'doc',
              id: 'Task_flow/External_sets/The_VARIABLE_file_format_in_external_sets',
            },
            {
              type: 'doc',
              id: 'Task_flow/External_sets/The_CSV_file_format_in_external_sets',
            },
            {
              type: 'doc',
              id: 'Task_flow/External_sets/Record_Separators_of_external_sets',
            },
            {
              type: 'doc',
              id: 'Task_flow/External_sets/External_Sets_for_Export_tasks_Child_sets',
            },
            {
              type: 'doc',
              id: 'Task_flow/External_sets/How_to_define_HTML_sets',
            },
            {
              type: 'doc',
              id: 'Task_flow/External_sets/Exporting_data_to_HTML_files',
            },
            {
              type: 'doc',
              id: 'Task_flow/External_sets/Creating_a_Template_for_exporting_to_HTML',
            },
            {
              type: 'doc',
              id: 'Task_flow/External_sets/External_Sets_for_Import_Tasks',
            },
            {
              type: 'doc',
              id: 'Task_flow/External_sets/Import_Task_Set_Virtual_Example',
            },
            {
              type: 'doc',
              id: 'Task_flow/External_sets/Storing_external_set_data_in_tables',
            },
          ],
        },
        {
          type: 'category',
          label: 'Job scheduling',
          link: {
            type: 'generated-index',
            title: 'Job scheduling',
            slug: '/Task_flow/Job_scheduling',
          },
          items: [
            {
              type: 'doc',
              id: 'Task_flow/Job_scheduling/Scheduling_a_job',
            },
            {
              type: 'doc',
              id: 'Task_flow/Job_scheduling/Modelling_scheduled_jobs',
            },
            {
              type: 'doc',
              id: 'Task_flow/Job_scheduling/Checking_if_a_job_should_run_at_all',
            },
          ],
        },
        {
          type: 'category',
          label: 'Action Language reference',
          link: {
            type: 'generated-index',
            title: 'Action Language reference',
            slug: '/Task_flow/Action_Language_reference',
          },
          items: [
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference/USoft_Action_Language',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference/Property_reference',
            },
          ],
        },
        {
          type: 'category',
          label: 'Action Language reference A-C',
          link: {
            type: 'generated-index',
            title: 'Action Language reference A-C',
            slug: '/Task_flow/Action_Language_reference_A-C',
          },
          items: [
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/About',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/acrel',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/Accept',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/actionothercontrol',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ActionAllRows',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ActionControl',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ActionDecision',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ActionDialogApply',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ActionDialogCancel',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ActionDialogOk',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ActionDllExecute',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ActionDoNothing',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ActionRibbon',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ActionSelectedRows',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ActionStartJob',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ApplicationExit',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ApplicationLogin',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ApplicationProgressHide',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ApplicationProgressSet',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ApplicationProgressShow',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ApplicationRefresh',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/Callaction',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ChangePassword',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ChangeSql',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/CommandSystemBackground',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/CommandSystemForeground',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/CommandWindows',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ComputerBrowse',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ComputeSet',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/controlsetvalues',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ControlAllowResize',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ControlDelete',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ControlFixColumn',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ControlSetActiveTab',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ControlSetFocus',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ControlSetInsensitive',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ControlSetSensitive',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/ConvertAlternativeFormat',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/Copy',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/Create',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/createapplicationtextfile',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/createconceptualfile',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/createsystemmessagefile',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/CurrentColumn',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/CurrentField',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/CurrentInfoBox',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/CursorFirstRecord',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/CursorGotoRecord',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/CursorLastRecord',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/CursorNextPage',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/CursorNextRecord',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/CursorPreviousPage',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_A-C/CursorPreviousRecord',
            },
          ],
        },
        {
          type: 'category',
          label: 'Action Language reference D-H',
          link: {
            type: 'generated-index',
            title: 'Action Language reference D-H',
            slug: '/Task_flow/Action_Language_reference_D-H',
          },
          items: [
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/DataCommit',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/DataRdbmsStatement',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/DataReport',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/DataRollback',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/DataToClipboard',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/DdeConnect',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/DdeDisconnect',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/DdeExecute',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/DdePoke',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/DdeRequest',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/DdeStartAdvise',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/DdeStopAdvise',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/DeactivateConstraint',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/Delete',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/Drag',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/ErrorRaise',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/esicreateschemafile',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/ExecuteLookupaction',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/FieldClear',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/FieldDuplicate',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/FieldPaste',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/FieldSelect',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/FileEdit',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/FileExists',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/FileOpen',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/FileSaveAs',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/FileSearchIn',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/FilterTree',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/FolderBrowse',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/FORMULA',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/GetValueFromCurrentItem',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/GotoCel',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/HasFocus',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/Help',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/HelpOnAccelerators',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/HelpOnControl',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/HelpOnLastMessage',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/HelpOnTable',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/HelpRunWinhelp',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_D-H/HelpWhatsThis',
            },
          ],
        },
        {
          type: 'category',
          label: 'Action Language reference I-R',
          link: {
            type: 'generated-index',
            title: 'Action Language reference I-R',
            slug: '/Task_flow/Action_Language_reference_I-R',
          },
          items: [
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/InsertString',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/LookupAccept',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/MenubarAddItem',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/MenubarDeleteItem',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/MenubarMarkItem',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/MenubarSetItem',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/MessageError',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/MessageInformation',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/MessageLanguage',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/MessageQuestion',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/MessageShowList',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/MessageWarning',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/Module',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/Notify',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/OnlineCall',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/PageSetup',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/PointerShowWaitstate',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/PopupEditorDialog',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/Print',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/PrintDirect',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/QueryAbort',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/QueryDbCount',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/QueryDefine',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/QueryExecute',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/QueryPrevious',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/RdbmsDisconnect',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/RecordClear',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/RecordClearTable',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/RecordClearWindows',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/RecordCreate',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/RecordDelete',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/RecordDuplicate',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/RecordRefresh',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/RecordScrollTo',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/RecordSelect',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/RecordSelectAll',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/RecordSingleView',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/RecordStore',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/RecordUndo',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/RecordWrite',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/ReevaluateTableSequence',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/RefreshConstraints',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/RefreshList',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/RefreshTree',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/Rename',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/ResourceFileUpdate',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/ResourceFileUpdateKeepBackslash',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/RuleProfilerDescription',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/RuleProfilerStart',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_reference_I-R/RuleProfilerStop',
            },
          ],
        },
        {
          type: 'category',
          label: 'Action Language Reference S-Z',
          link: {
            type: 'generated-index',
            title: 'Action Language Reference S-Z',
            slug: '/Task_flow/Action_Language_Reference_S-Z',
          },
          items: [
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/Save',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/Self',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/Set',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/setvalues',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/setworkarea',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/SetDefault',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/SetProperty',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/SetSilentErrorMessages',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/SetSilentInformationMessages',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/SetSilentWarningMessages',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/SetViewMode',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/Sort',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/SqlDefiner',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/SqlScript',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/SqlSelect',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/Unset',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/UnsetDefault',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/ValidateJob',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/WindowArrange',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/WindowAtMousePosition',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/WindowCentreScreen',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/WindowCentreWindow',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/WindowClose',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/WindowCloseAll',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/WindowCreate',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/WindowCreateLookup',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/WindowCreateLookupDialog',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/WindowCreateRelated',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/WindowCreateSecondary',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/WindowCreateSubtype',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/WindowIconize',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/WindowMinimize',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/WindowObjectList',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/WindowRestore',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/WindowToClipboard',
            },
            {
              type: 'doc',
              id: 'Task_flow/Action_Language_Reference_S-Z/WindowTransactions',
            },
          ],
        },
      ],
    },
]

export default taskFlow;