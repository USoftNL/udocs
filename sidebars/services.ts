const services = [
        {
      type: 'category',
      label: 'Services',
      customProps: {
        icon: 'SquareDashedBottomCode',
      },
      link: { type: 'generated-index', title: 'Services', slug: '/Services' },
      items: [
        {
          type: 'category',
          label: 'Introducing USoft Services',
          link: {
            type: 'generated-index',
            title: 'Introducing USoft Services',
            slug: '/Services/Introducing_USoft_Services',
          },
          items: [
            {
              type: 'doc',
              id: 'Services/Introducing_USoft_Services/Introducing_USoft_Services',
            },
            {
              type: 'doc',
              id: 'Services/Introducing_USoft_Services/Technologies_used_in_USoft_REST',
            },
            {
              type: 'doc',
              id: 'Services/Introducing_USoft_Services/Getting_started_with_USoft_services_Quick_WalkThrough',
            },
            {
              type: 'doc',
              id: 'Services/Introducing_USoft_Services/Compiling_Java_in_Service_Definer',
            },
          ],
        },
        {
          type: 'category',
          label: 'USoft Service Definer objects',
          link: {
            type: 'generated-index',
            title: 'USoft Service Definer objects',
            slug: '/Services/USoft_Service_Definer_objects',
          },
          items: [
            {
              type: 'doc',
              id: 'Services/USoft_Service_Definer_objects/Annotations',
            },
            {
              type: 'doc',
              id: 'Services/USoft_Service_Definer_objects/Applications',
            },
            {
              type: 'doc',
              id: 'Services/USoft_Service_Definer_objects/Classes',
            },
            {
              type: 'doc',
              id: 'Services/USoft_Service_Definer_objects/Connections',
            },
            {
              type: 'doc',
              id: 'Services/USoft_Service_Definer_objects/CORS_configurations',
            },
            {
              type: 'doc',
              id: 'Services/USoft_Service_Definer_objects/File_resources',
            },
            {
              type: 'doc',
              id: 'Services/USoft_Service_Definer_objects/Functional_types',
            },
            {
              type: 'doc',
              id: 'Services/USoft_Service_Definer_objects/Example_Reservation_event_functional_type',
            },
            {
              type: 'doc',
              id: 'Services/USoft_Service_Definer_objects/Multiple_connections_and_Rules_Services',
            },
            {
              type: 'doc',
              id: 'Services/USoft_Service_Definer_objects/Queue_Services',
            },
            {
              type: 'doc',
              id: 'Services/USoft_Service_Definer_objects/Reroute_mappings',
            },
            {
              type: 'doc',
              id: 'Services/USoft_Service_Definer_objects/REST_Services',
            },
            {
              type: 'doc',
              id: 'Services/USoft_Service_Definer_objects/Servers',
            },
            {
              type: 'doc',
              id: 'Services/USoft_Service_Definer_objects/Server_properties',
            },
            {
              type: 'doc',
              id: 'Services/USoft_Service_Definer_objects/Server_administration_settings',
            },
            {
              type: 'doc',
              id: 'Services/USoft_Service_Definer_objects/Server_security_settings',
            },
            {
              type: 'doc',
              id: 'Services/USoft_Service_Definer_objects/Extending_your_response_when_a_request_is_throttled',
            },
            {
              type: 'doc',
              id: 'Services/USoft_Service_Definer_objects/SOAP_Services',
            },
            {
              type: 'doc',
              id: 'Services/USoft_Service_Definer_objects/Services_Other',
            },
            {
              type: 'doc',
              id: 'Services/USoft_Service_Definer_objects/Structures',
            },
            {
              type: 'doc',
              id: 'Services/USoft_Service_Definer_objects/Example_Custom_authorization_for_REST_services',
            },
          ],
        },
        {
          type: 'category',
          label: 'Web socket services',
          link: {
            type: 'generated-index',
            title: 'Web socket services',
            slug: '/Services/Web_socket_services',
          },
          items: [
            {
              type: 'doc',
              id: 'Services/Web_socket_services/Web_socket_services',
            },
            {
              type: 'doc',
              id: 'Services/Web_socket_services/USoft_Default_Web_Socket_Provider',
            },
            {
              type: 'doc',
              id: 'Services/Web_socket_services/Example_USoft_Default_Web_Socket_Provider_for_a_Chat_application',
            },
          ],
        },
        {
          type: 'category',
          label: 'Predefined REST services',
          link: {
            type: 'generated-index',
            title: 'Predefined REST services',
            slug: '/Services/Predefined_REST_services',
          },
          items: [
            {
              type: 'doc',
              id: 'Services/Predefined_REST_services/Predefined_REST_services',
            },
            {
              type: 'doc',
              id: 'Services/Predefined_REST_services/Getting_table_and_column_Information_with_USoft_Table_Resource',
            },
            {
              type: 'doc',
              id: 'Services/Predefined_REST_services/Retrieving_data_with_USoft_Table_Resource',
            },
            {
              type: 'doc',
              id: 'Services/Predefined_REST_services/Adding_data_with_USoft_Table_Resource',
            },
            {
              type: 'doc',
              id: 'Services/Predefined_REST_services/Updating_data_with_USoft_Table_Resource',
            },
            {
              type: 'doc',
              id: 'Services/Predefined_REST_services/Deleting_data_with_USoft_Table_Resource',
            },
            {
              type: 'doc',
              id: 'Services/Predefined_REST_services/Calling_a_batch_job_with_USoft_Job_Resource',
            },
            {
              type: 'doc',
              id: 'Services/Predefined_REST_services/URL_query_parameters_in_predefined_REST_Services',
            },
            {
              type: 'doc',
              id: 'Services/Predefined_REST_services/Versioning_predefined_REST_services',
            },
          ],
        },
        {
          type: 'category',
          label: 'Custom SOAP services',
          link: {
            type: 'generated-index',
            title: 'Custom SOAP services',
            slug: '/Services/Custom_SOAP_services',
          },
          items: [
            {
              type: 'doc',
              id: 'Services/Custom_SOAP_services/Designing_a_SOAP_service',
            },
            {
              type: 'doc',
              id: 'Services/Custom_SOAP_services/Choosing_a_SOAP_service_type',
            },
            {
              type: 'doc',
              id: 'Services/Custom_SOAP_services/Defining_a_custom_SOAP_service',
            },
            {
              type: 'doc',
              id: 'Services/Custom_SOAP_services/Defining_custom_SOAP_methods',
            },
          ],
        },
        {
          type: 'category',
          label: 'Custom REST services',
          link: {
            type: 'generated-index',
            title: 'Custom REST services',
            slug: '/Services/Custom_REST_services',
          },
          items: [
            {
              type: 'doc',
              id: 'Services/Custom_REST_services/Designing_a_custom_REST_service',
            },
            {
              type: 'doc',
              id: 'Services/Custom_REST_services/Defining_a_custom_REST_service',
            },
            {
              type: 'doc',
              id: 'Services/Custom_REST_services/Defining_custom_REST_methods',
            },
            {
              type: 'doc',
              id: 'Services/Custom_REST_services/Defining_custom_REST_input_parameters',
            },
            {
              type: 'doc',
              id: 'Services/Custom_REST_services/Defining_custom_REST_request_messages',
            },
            {
              type: 'doc',
              id: 'Services/Custom_REST_services/Defining_custom_REST_response_messages',
            },
            {
              type: 'doc',
              id: 'Services/Custom_REST_services/Defining_custom_REST_error_handling',
            },
            {
              type: 'doc',
              id: 'Services/Custom_REST_services/Limiting_the_number_of_records_returned_by_a_REST_service',
            },
            {
              type: 'doc',
              id: 'Services/Custom_REST_services/Exposing_REST_services',
            },
            {
              type: 'doc',
              id: 'Services/Custom_REST_services/Calling_a_REST_service_without_committing',
            },
          ],
        },
        {
          type: 'category',
          label: 'SQL statements in USoft services',
          link: {
            type: 'generated-index',
            title: 'SQL statements in USoft services',
            slug: '/Services/SQL_statements_in_USoft_services',
          },
          items: [
            {
              type: 'doc',
              id: 'Services/SQL_statements_in_USoft_services/SQL_statements_in_USoft_services',
            },
            {
              type: 'doc',
              id: 'Services/SQL_statements_in_USoft_services/Example_a_REST_service_for_retrieving_data_SELECT',
            },
            {
              type: 'doc',
              id: 'Services/SQL_statements_in_USoft_services/Example_a_REST_Service_for_adding_new_data_INSERT',
            },
            {
              type: 'doc',
              id: 'Services/SQL_statements_in_USoft_services/Example_a_REST_Service_for_manipulating_data_UPDATE',
            },
            {
              type: 'doc',
              id: 'Services/SQL_statements_in_USoft_services/Example_a_REST_Service_for_returning_manipulated_data',
            },
            {
              type: 'doc',
              id: 'Services/SQL_statements_in_USoft_services/Example_a_REST_Service_for_deleting_data_DELETE',
            },
          ],
        },
        {
          type: 'category',
          label: 'Organising services',
          link: {
            type: 'generated-index',
            title: 'Organising services',
            slug: '/Services/Organising_services',
          },
          items: [
            {
              type: 'doc',
              id: 'Services/Organising_services/Designing_servicespecific_interfaces',
            },
            {
              type: 'doc',
              id: 'Services/Organising_services/Modular_service_REST_SOAP_development',
            },
            {
              type: 'doc',
              id: 'Services/Organising_services/Versioning_custom_REST_services',
            },
            {
              type: 'doc',
              id: 'Services/Organising_services/Pagination_of_custom_REST_services',
            },
          ],
        },
        {
          type: 'category',
          label: 'Event processing',
          link: {
            type: 'generated-index',
            title: 'Event processing',
            slug: '/Services/Event_processing',
          },
          items: [
            {
              type: 'doc',
              id: 'Services/Event_processing/Event_processing',
            },
            {
              type: 'doc',
              id: 'Services/Event_processing/Design_patterns_for_event_processing',
            },
            {
              type: 'doc',
              id: 'Services/Event_processing/Event_processing_best_practices',
            },
            {
              type: 'doc',
              id: 'Services/Event_processing/Event_processing_Receiving_events',
            },
            {
              type: 'doc',
              id: 'Services/Event_processing/Handling_events',
            },
            {
              type: 'doc',
              id: 'Services/Event_processing/Event_handling_Example_1_Job_that_processes_queued_input_events',
            },
            {
              type: 'doc',
              id: 'Services/Event_processing/Event_handling_Example_2_Queue_service_that_processes_input_events',
            },
            {
              type: 'doc',
              id: 'Services/Event_processing/Producing_events',
            },
            {
              type: 'doc',
              id: 'Services/Event_processing/Event_production_Example_1_Model_and_rules_for_creating_output_events',
            },
            {
              type: 'doc',
              id: 'Services/Event_processing/Event_production_Example_2_Job_that_processes_queued_output_events',
            },
            {
              type: 'doc',
              id: 'Services/Event_processing/Event_production_Example_3_Queue_service_that_processes_output_events',
            },
          ],
        },
        {
          type: 'category',
          label: 'Server configuration',
          link: {
            type: 'generated-index',
            title: 'Server configuration',
            slug: '/Services/Server_configuration',
          },
          items: [
            {
              type: 'doc',
              id: 'Services/Server_configuration/Server_configuration',
            },
            {
              type: 'doc',
              id: 'Services/Server_configuration/Server_configuration_Config_element',
            },
            {
              type: 'doc',
              id: 'Services/Server_configuration/Server_configuration_Server_element',
            },
            {
              type: 'doc',
              id: 'Services/Server_configuration/Server_configuration_Authenticator_element',
            },
            {
              type: 'doc',
              id: 'Services/Server_configuration/Server_configuration_Properties_element',
            },
            {
              type: 'doc',
              id: 'Services/Server_configuration/Server_configuration_RerouteMappings_element',
            },
            {
              type: 'doc',
              id: 'Services/Server_configuration/Server_configuration_Services_element',
            },
            {
              type: 'doc',
              id: 'Services/Server_configuration/Server_configuration_HttpProtocol_element',
            },
            {
              type: 'doc',
              id: 'Services/Server_configuration/Server_configuration_Connections_element',
            },
            {
              type: 'doc',
              id: 'Services/Server_configuration/Server_configuration_Cors_element',
            },
            {
              type: 'doc',
              id: 'Services/Server_configuration/Log_configuration',
            },
            {
              type: 'doc',
              id: 'Services/Server_configuration/Multitenancy',
            },
          ],
        },
        {
          type: 'category',
          label: 'Security configuration',
          link: {
            type: 'generated-index',
            title: 'Security configuration',
            slug: '/Services/Security_configuration',
          },
          items: [
            {
              type: 'doc',
              id: 'Services/Security_configuration/Security_configuration',
            },
            {
              type: 'doc',
              id: 'Services/Security_configuration/Security_configuration_Attributes_element',
            },
            {
              type: 'doc',
              id: 'Services/Security_configuration/Security_configuration_EncryptionKey_element',
            },
            {
              type: 'doc',
              id: 'Services/Security_configuration/Security_configuration_Info_element',
            },
            {
              type: 'doc',
              id: 'Services/Security_configuration/Security_configuration_KeyStore_element',
            },
            {
              type: 'doc',
              id: 'Services/Security_configuration/Security_configuration_SamlSP_element',
            },
            {
              type: 'doc',
              id: 'Services/Security_configuration/Security_configuration_SecurityConfig_element',
            },
            {
              type: 'doc',
              id: 'Services/Security_configuration/Security_configuration_SigningKey_element',
            },
          ],
        },
        {
          type: 'category',
          label: 'Authentication in services',
          link: {
            type: 'generated-index',
            title: 'Authentication in services',
            slug: '/Services/Authentication_in_services',
          },
          items: [
            {
              type: 'doc',
              id: 'Services/Authentication_in_services/Authentication_in_services',
            },
            {
              type: 'doc',
              id: 'Services/Authentication_in_services/USoft_authentication_for_services',
            },
            {
              type: 'doc',
              id: 'Services/Authentication_in_services/SAML_authentication',
            },
            {
              type: 'doc',
              id: 'Services/Authentication_in_services/Anonymous_authentication',
            },
            {
              type: 'doc',
              id: 'Services/Authentication_in_services/Cookiebased_authentication',
            },
            {
              type: 'doc',
              id: 'Services/Authentication_in_services/logout',
            },
          ],
        },
        {
          type: 'category',
          label: 'Logging and tracing servers, services and classes',
          link: {
            type: 'generated-index',
            title: 'Logging and tracing servers, services and classes',
            slug: '/Services/Logging_and_tracing_servers,_services_and_classes',
          },
          items: [
            {
              type: 'doc',
              id: 'Services/Logging_and_tracing_servers_services_and_classes/Logging_and_tracing_servers_services_and_classes',
            },
          ],
        },
        {
          type: 'category',
          label: 'Web services',
          link: {
            type: 'generated-index',
            title: 'Web services',
            slug: '/Services/Web_services',
          },
          items: [
            {
              type: 'doc',
              id: 'Services/Web_services/How_to_define_a_web_service_and_its_methods',
            },
            {
              type: 'doc',
              id: 'Services/Web_services/Web_service_namespaces',
            },
            {
              type: 'doc',
              id: 'Services/Web_services/Runtime_architecture_of_a_web_service',
            },
            {
              type: 'doc',
              id: 'Services/Web_services/Web_service_methods_RPCoriented_vs_documentoriented',
            },
            {
              type: 'doc',
              id: 'Services/Web_services/Deploying_a_Web_Service_Provider',
            },
            {
              type: 'doc',
              id: 'Services/Web_services/Web_Service_Generated_files',
            },
            {
              type: 'doc',
              id: 'Services/Web_services/Web_Service_Certificate_files',
            },
            {
              type: 'doc',
              id: 'Services/Web_services/Web_service_error_messages',
            },
            {
              type: 'doc',
              id: 'Services/Web_services/Web_service_debugging_tips',
            },
          ],
        },
      ],
    },
]

export default services;