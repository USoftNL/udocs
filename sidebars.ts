import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sidebar: [
    {
      type: 'category',
      label: 'Getting started',
      link: { type: 'doc', id: 'Getting_started/index' },
      customProps: {
        id: 'getting-started-main',
      },
      items: [
        {
          type: 'category',
          label: 'General information',
          link: {
            type: 'generated-index',
            title: 'General information',
            slug: '/General_information',
          },
          items: [
            {
              type: 'doc',
              id: 'Getting_started/General_information/Welcome_to_USoft_Knowledge_Base',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Business rules',
      link: {
        type: 'generated-index',
        title: 'Business rules',
        slug: '/Business_rules',
      },
      items: [
        {
          type: 'category',
          label: 'Positioning business rules',
          link: {
            type: 'generated-index',
            title: 'Positioning business rules',
            slug: '/Business_rules/Positioning_business_rules',
          },
          items: [
            {
              type: 'doc',
              id: 'Business_rules/Positioning_business_rules/Business_rule_examples',
            },
            {
              type: 'doc',
              id: 'Business_rules/Positioning_business_rules/The_world_of_rules',
            },
            {
              type: 'doc',
              id: 'Business_rules/Positioning_business_rules/Semantics_of_Business_Vocabulary_and_Rules_SBVR',
            },
            {
              type: 'doc',
              id: 'Business_rules/Positioning_business_rules/Enterprise_Ontology',
            },
            {
              type: 'doc',
              id: 'Business_rules/Positioning_business_rules/Rules_rely_on_concept_structure',
            },
            {
              type: 'doc',
              id: 'Business_rules/Positioning_business_rules/A_business_rules_primer',
            },
            {
              type: 'doc',
              id: 'Business_rules/Positioning_business_rules/Rules_and_definitions_are_interrelated',
            },
          ],
        },
        {
          type: 'category',
          label: 'Vocabulary concepts',
          link: {
            type: 'generated-index',
            title: 'Vocabulary concepts',
            slug: '/Business_rules/Vocabulary_concepts',
          },
          items: [
            {
              type: 'doc',
              id: 'Business_rules/Vocabulary_concepts/A_minimal_toolkit_of_SBVR_vocabulary_concepts',
            },
            {
              type: 'doc',
              id: 'Business_rules/Vocabulary_concepts/Noun_concepts',
            },
            {
              type: 'doc',
              id: 'Business_rules/Vocabulary_concepts/Binary_verb_concepts',
            },
            {
              type: 'doc',
              id: 'Business_rules/Vocabulary_concepts/Nary_verb_concepts',
            },
            {
              type: 'doc',
              id: 'Business_rules/Vocabulary_concepts/Unary_verb_concepts',
            },
            {
              type: 'doc',
              id: 'Business_rules/Vocabulary_concepts/Categories',
            },
            {
              type: 'doc',
              id: 'Business_rules/Vocabulary_concepts/Synonyms',
            },
            {
              type: 'doc',
              id: 'Business_rules/Vocabulary_concepts/Individual_concepts',
            },
            {
              type: 'doc',
              id: 'Business_rules/Vocabulary_concepts/Examples_instances',
            },
            {
              type: 'doc',
              id: 'Business_rules/Vocabulary_concepts/Roles',
            },
            {
              type: 'doc',
              id: 'Business_rules/Vocabulary_concepts/Nominalisations',
            },
          ],
        },
        {
          type: 'category',
          label: 'How to model a vocabulary successfully',
          link: {
            type: 'generated-index',
            title: 'How to model a vocabulary successfully',
            slug: '/Business_rules/How_to_model_a_vocabulary_successfully',
          },
          items: [
            {
              type: 'doc',
              id: 'Business_rules/How_to_model_a_vocabulary_successfully/Let_business_rules_do_the_talking',
            },
            {
              type: 'doc',
              id: 'Business_rules/How_to_model_a_vocabulary_successfully/Consider_SBVR_diagrams_as_helpful_but_secondary',
            },
            {
              type: 'doc',
              id: 'Business_rules/How_to_model_a_vocabulary_successfully/Consider_transactions_and_events_as_key',
            },
            {
              type: 'doc',
              id: 'Business_rules/How_to_model_a_vocabulary_successfully/Avoid_abstractions_if_you_can',
            },
            {
              type: 'doc',
              id: 'Business_rules/How_to_model_a_vocabulary_successfully/Avoid_type_concepts_if_you_can',
            },
            {
              type: 'doc',
              id: 'Business_rules/How_to_model_a_vocabulary_successfully/Model_reality_not_data',
            },
            {
              type: 'doc',
              id: 'Business_rules/How_to_model_a_vocabulary_successfully/Do_not_describe_how_software_works',
            },
            {
              type: 'doc',
              id: 'Business_rules/How_to_model_a_vocabulary_successfully/Stepping_stones',
            },
          ],
        },
        {
          type: 'category',
          label: 'Good elements of guidance',
          link: {
            type: 'generated-index',
            title: 'Good elements of guidance',
            slug: '/Business_rules/Good_elements_of_guidance',
          },
          items: [
            {
              type: 'doc',
              id: 'Business_rules/Good_elements_of_guidance/Good_elements_of_guidance',
            },
            {
              type: 'doc',
              id: 'Business_rules/Good_elements_of_guidance/A_good_element_of_guidance_is_practicable',
            },
            {
              type: 'doc',
              id: 'Business_rules/Good_elements_of_guidance/A_good_element_of_guidance_is_severable',
            },
            {
              type: 'doc',
              id: 'Business_rules/Good_elements_of_guidance/A_good_element_of_guidance_accommodates',
            },
            {
              type: 'doc',
              id: 'Business_rules/Good_elements_of_guidance/A_good_element_of_guidance_is_selfcontained',
            },
            {
              type: 'doc',
              id: 'Business_rules/Good_elements_of_guidance/Light_World_Assumption',
            },
            {
              type: 'doc',
              id: 'Business_rules/Good_elements_of_guidance/A_good_element_of_guidance_is_factbased_not_eventbased',
            },
          ],
        },
        {
          type: 'category',
          label: 'Logical structure',
          link: {
            type: 'generated-index',
            title: 'Logical structure',
            slug: '/Business_rules/Logical_structure',
          },
          items: [
            {
              type: 'doc',
              id: 'Business_rules/Logical_structure/Business_rules_have_logical_structure',
            },
            {
              type: 'doc',
              id: 'Business_rules/Logical_structure/Split_into_2_rules_or_combine_into_1_rule',
            },
          ],
        },
        {
          type: 'category',
          label: 'Business rules in a project',
          link: {
            type: 'generated-index',
            title: 'Business rules in a project',
            slug: '/Business_rules/Business_rules_in_a_project',
          },
          items: [
            {
              type: 'doc',
              id: 'Business_rules/Business_rules_in_a_project/The_need_for_project_management',
            },
            {
              type: 'doc',
              id: 'Business_rules/Business_rules_in_a_project/Tips_for_a_good_start',
            },
            {
              type: 'doc',
              id: 'Business_rules/Business_rules_in_a_project/The_need_for_a_general_approach',
            },
            {
              type: 'doc',
              id: 'Business_rules/Business_rules_in_a_project/Core_business_events',
            },
            {
              type: 'doc',
              id: 'Business_rules/Business_rules_in_a_project/Business_rules_and_Agile',
            },
          ],
        },
        {
          type: 'category',
          label: 'USoft Studio',
          link: {
            type: 'generated-index',
            title: 'USoft Studio',
            slug: '/Business_rules/USoft_Studio',
          },
          items: [
            {
              type: 'doc',
              id: 'Business_rules/USoft_Studio/USoft_Studio_quick_tour',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Modeller and Rules Engine',
      link: {
        type: 'generated-index',
        title: 'Modeller and Rules Engine',
        slug: '/Modeller_and_Rules_Engine',
      },
      items: [
        {
          type: 'category',
          label: 'Introducing USoft Modeller and Rules Engine',
          link: {
            type: 'generated-index',
            title: 'Introducing USoft Modeller and Rules Engine',
            slug: '/Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine',
          },
          items: [
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/Info_windows',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/Shortcut_keys',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/Defining_and_executing_queries_in_info_windows',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/Wildcards_and_operators_in_info_windows',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/Manipulating_records_in_info_windows',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/Lookup_windows',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/Related_windows',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/Subtype_windows',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/Dialogs',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/The_Objects_List',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/The_Transactions_window',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/The_Workspace',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/The_Find_In_Repository_dialog',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/The_Toolbar',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/The_Catalog',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/Create_Flat_Files_tool',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/SQL_Command_tool',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/SQL_Objects_Crossreference_information',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/Generate_HTML_Reports',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/Reserved_Words_list',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/Bridge_Wizard',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/SQL_Definer',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/Rules_Engine_parameters',
            },
          ],
        },
        {
          type: 'category',
          label: 'Domains',
          link: {
            type: 'generated-index',
            title: 'Domains',
            slug: '/Modeller_and_Rules_Engine/Domains',
          },
          items: [
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Domains/What_is_a_domain',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Domains/Template_domains_Popular_domain_settings',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Domains/Data_types',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Domains/Display_types',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Domains/Check_Box_display_type',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Domains/Dropdown_List_Box_display_type',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Domains/Option_Buttons_display_type',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Domains/Patterns_Regular_Expressions',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Domains/Unique_values',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Domains/Allowed_values',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Domains/IO_formats',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Domains/Alternative_input_formats',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Domains/Default_date_format',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Domains/Superdomains_Inheritance_of_domain_properties',
            },
          ],
        },
        {
          type: 'category',
          label: 'Tables, columns and relationships',
          link: {
            type: 'generated-index',
            title: 'Tables, columns and relationships',
            slug: '/Modeller_and_Rules_Engine/Tables,_columns_and_relationships',
          },
          items: [
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Tables_columns_and_relationships/What_is_a_table',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Tables_columns_and_relationships/How_to_define_a_table_and_its_columns',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Tables_columns_and_relationships/Generating_tables',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Tables_columns_and_relationships/What_is_an_index',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Tables_columns_and_relationships/What_is_a_column',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Tables_columns_and_relationships/Virtual_columns_joined_columns',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Tables_columns_and_relationships/What_is_a_relationship',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Tables_columns_and_relationships/Cardinality_in_relationships',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Tables_columns_and_relationships/How_to_define_a_relationship',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Tables_columns_and_relationships/The_RELATE_keyword',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Tables_columns_and_relationships/External_tables',
            },
          ],
        },
        {
          type: 'category',
          label: 'Constraints',
          link: {
            type: 'generated-index',
            title: 'Constraints',
            slug: '/Modeller_and_Rules_Engine/Constraints',
          },
          items: [
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints/Constraints',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints/Domain_constraints',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints/Constraint_messages',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints/Transitional_constraints',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints/Transitional_constraint_troubleshooting',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints/Deferred_table_constraints',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints/Recursive_constraints',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints/Constraint_comments',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints/USoft_Rule_Language',
            },
          ],
        },
        {
          type: 'category',
          label: 'Logical Views',
          link: {
            type: 'generated-index',
            title: 'Logical Views',
            slug: '/Modeller_and_Rules_Engine/Logical_Views',
          },
          items: [
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Logical_Views/Logical_Views',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Logical_Views/Limitations_of_Logical_Views',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Logical_Views/Rulebased_logical_views',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Logical_Views/Example_Rulebased_Logical_View',
            },
          ],
        },
        {
          type: 'category',
          label: 'Supertypes and subtypes',
          link: {
            type: 'generated-index',
            title: 'Supertypes and subtypes',
            slug: '/Modeller_and_Rules_Engine/Supertypes_and_subtypes',
          },
          items: [
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Supertypes_and_subtypes/What_are_supertypes_and_subtypes',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Supertypes_and_subtypes/How_to_define_a_subtype_table',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Supertypes_and_subtypes/Subtype_indicators',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Supertypes_and_subtypes/Selecting_subtype_data',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Supertypes_and_subtypes/Inserting_supertype_and_subtype_data',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Supertypes_and_subtypes/Updating_supertype_and_subtype_data',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Supertypes_and_subtypes/Deleting_supertype_and_subtype_data',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Supertypes_and_subtypes/Relationship_Inheritance_from_supertype_to_subtype_RELATE',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Supertypes_and_subtypes/Constraints_on_supertypes_and_subtypes',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Supertypes_and_subtypes/Transitional_constraints_on_supertypes_and_subtypes',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Supertypes_and_subtypes/GUI_implementation_of_subtypes',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Supertypes_and_subtypes/Designing_subtypes_successfully',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Supertypes_and_subtypes/Subtype_definitions',
            },
          ],
        },
        {
          type: 'category',
          label: 'Testing a Rules Engine with USoft Benchmark',
          link: {
            type: 'generated-index',
            title: 'Testing a Rules Engine with USoft Benchmark',
            slug: '/Modeller_and_Rules_Engine/Testing_a_Rules_Engine_with_USoft_Benchmark',
          },
          items: [
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Testing_a_Rules_Engine_with_USoft_Benchmark/Getting_started_with_USoft_Benchmark',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Testing_a_Rules_Engine_with_USoft_Benchmark/Recording_and_playing_tests',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Testing_a_Rules_Engine_with_USoft_Benchmark/Managing_application_data_as_test_data',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Testing_a_Rules_Engine_with_USoft_Benchmark/Debugging_constraints_and_constraint_performance',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Testing_a_Rules_Engine_with_USoft_Benchmark/Interpreting_Profiler_information',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Testing_a_Rules_Engine_with_USoft_Benchmark/Adding_extra_checks_to_your_tests',
            },
          ],
        },
        {
          type: 'category',
          label: 'Constraints advanced and the Rules Engine',
          link: {
            type: 'generated-index',
            title: 'Constraints advanced and the Rules Engine',
            slug: '/Modeller_and_Rules_Engine/Constraints_advanced_and_the_Rules_Engine',
          },
          items: [
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints_advanced_and_the_Rules_Engine/The_USoft_Rules_Engine',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints_advanced_and_the_Rules_Engine/Where_are_the_rules',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints_advanced_and_the_Rules_Engine/Constraint_conceptual_model',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints_advanced_and_the_Rules_Engine/Constraint_activation_events',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints_advanced_and_the_Rules_Engine/Storerecord_event_overview',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints_advanced_and_the_Rules_Engine/Constraint_evaluation_order',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints_advanced_and_the_Rules_Engine/Chained_corrections',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints_advanced_and_the_Rules_Engine/Transaction_checks',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints_advanced_and_the_Rules_Engine/Cascadetoother_corrections',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints_advanced_and_the_Rules_Engine/Driving_table',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints_advanced_and_the_Rules_Engine/Constraint_key_query',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints_advanced_and_the_Rules_Engine/Transaction_checklist_signals',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints_advanced_and_the_Rules_Engine/Row_checks',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints_advanced_and_the_Rules_Engine/Updateonself_corrections',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints_advanced_and_the_Rules_Engine/Field_corrections_and_field_checks',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints_advanced_and_the_Rules_Engine/Preconditions_and_postconditions',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints_advanced_and_the_Rules_Engine/Lock_and_commit_management',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints_advanced_and_the_Rules_Engine/Startup_constraints',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Constraints_advanced_and_the_Rules_Engine/Time_constraints',
            },
          ],
        },
        {
          type: 'category',
          label: 'Tuning your application',
          link: {
            type: 'generated-index',
            title: 'Tuning your application',
            slug: '/Modeller_and_Rules_Engine/Tuning_your_application',
          },
          items: [
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Tuning_your_application/Tuning_your_application',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Tuning_your_application/Rules_Engine_optimisation_techniques',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Tuning_your_application/General_SQL_tuning_tips',
            },
          ],
        },
        {
          type: 'category',
          label: 'RDBMS and data connectivity',
          link: {
            type: 'generated-index',
            title: 'RDBMS and data connectivity',
            slug: '/Modeller_and_Rules_Engine/RDBMS_and_data_connectivity',
          },
          items: [
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/RDBMS_and_data_connectivity/RDBMS_connection_recovery',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/RDBMS_and_data_connectivity/USoft_for_Oracle',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/RDBMS_and_data_connectivity/USoft_for_ODBC',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/RDBMS_and_data_connectivity/JDBC_Rules_Engine_connectivity',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/RDBMS_and_data_connectivity/JDBC_example',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/RDBMS_and_data_connectivity/USoft_Remote_Rules_Service_API_for_ODBC',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/RDBMS_and_data_connectivity/Dynamic_Link_Libraries_DLLs',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/RDBMS_and_data_connectivity/Connecting_nondatabase_users_to_a_USoft_application',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/RDBMS_and_data_connectivity/Dynamic_Data_Exchange_DDE',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/RDBMS_and_data_connectivity/USoft_as_a_DDE_client',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/RDBMS_and_data_connectivity/USoft_as_a_DDE_server',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/RDBMS_and_data_connectivity/Microsoft_Transaction_Server_MTS',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/RDBMS_and_data_connectivity/MTS_Example_1_The_Bank_Sample_application',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/RDBMS_and_data_connectivity/MTS_Example_2_component_sample_code',
            },
          ],
        },
        {
          type: 'category',
          label: 'Localising your application',
          link: {
            type: 'generated-index',
            title: 'Localising your application',
            slug: '/Modeller_and_Rules_Engine/Localising_your_application',
          },
          items: [
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Localising_your_application/Localisation_system_languages_translations_and_regional_settings',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Localising_your_application/Translating_system_messages_and_application_strings',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Localising_your_application/Providing_localisation_to_end_users',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Localising_your_application/Dynamic_language_switching',
            },
          ],
        },
        {
          type: 'category',
          label: 'Error messages',
          link: {
            type: 'generated-index',
            title: 'Error messages',
            slug: '/Modeller_and_Rules_Engine/Error_messages',
          },
          items: [
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Error_messages/USoft_XML_message_format',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Error_messages/XSL_transformations_for_editing_messages',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Error_messages/Customising_messages',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Error_messages/XSL_editing_effects_on_error_logging',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Error_messages/Switching_between_end_user_messages_and_developer_messages',
            },
          ],
        },
        {
          type: 'category',
          label: 'Rules Engine properties',
          link: {
            type: 'generated-index',
            title: 'Rules Engine properties',
            slug: '/Modeller_and_Rules_Engine/Rules_Engine_properties',
          },
          items: [
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/AllowSetManipulations',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/Application',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/BatchLogLevel',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/BinDir',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/ConceptualFile',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/ConstraintsActive',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/CurrencyDecimalSeparator',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/CurrencyGroupSeparator',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/Database',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/DefaultDateFormat',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/DeferRestrictiveRelationalChecks',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/EndUserMsgs',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/Env',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/LockForeignKeys',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/LockParentOnSeqno',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/MaxConstraintDepth',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/MaxDriverConditions',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/NumberDecimalSeparator',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/NumberGroupSeparator',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/NumberOfUpdateColumns',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/OsUserHomeDir',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/OsUserName',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/OsUserTempDir',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/Rdbms',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/RdbmsVersion',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/RecordFactsCacheSize',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/RowsCommitted',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/ShowComponentErrors',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/ShowMiddlewareErrors',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/ShowRdbmsErrors',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/SystemDir',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/TempTablesAtOwner',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/USoftLogDir',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/USoftTempDir',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/UniqueKeyCheck',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/UpdateSupertypeOnInsert',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/Version',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/Rules_Engine_properties/WaitForLock',
            },
          ],
        },
        {
          type: 'category',
          label: 'EAR diagrams',
          link: {
            type: 'generated-index',
            title: 'EAR diagrams',
            slug: '/Modeller_and_Rules_Engine/EAR_diagrams',
          },
          items: [
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/EAR_diagrams/EAR_diagrams',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/EAR_diagrams/How_to_draw_objects_in_an_EAR_diagram',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/EAR_diagrams/How_EAR_diagrams_map_to_Definer_records',
            },
          ],
        },
        {
          type: 'category',
          label: 'SQL syntax',
          link: {
            type: 'generated-index',
            title: 'SQL syntax',
            slug: '/Modeller_and_Rules_Engine/SQL_syntax',
          },
          items: [
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/SELECT',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/Join_constructs',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/INSERT',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/UPDATE',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/DELETE',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/Table_aliases',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/COMMIT',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/ROLLBACK',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/UNION',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/UNION_ALL',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/MINUS',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/EXCEPT',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/INTERSECT',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/INVOKE',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/Literals',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/Column_expressions',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/Pseudocolumns',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/Host_variables_in_SQL',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/Group_functions',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/SQL_conditions',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/Logical_operators',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/Comparison_operators',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/Mathematical_operators',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/SQL_operators',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_syntax/Function_calls',
            },
          ],
        },
        {
          type: 'category',
          label: 'SQL functions',
          link: {
            type: 'generated-index',
            title: 'SQL functions',
            slug: '/Modeller_and_Rules_Engine/SQL_functions',
          },
          items: [
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/SQL_functions_AC',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/SQL_functions_DH',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/SQL_functions_IM',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/SQL_functions_NR',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/SQL_functions_SZ',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/ADD_DAYS',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/CASE_DECODE',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/CAST',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/CONCAT',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/CURRENT_DATE',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/DATALENGTH_LEN',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/DATE_TO_CHAR',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/DATEDIFF_IN_DAYS',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/ELAPSEDQUERYTRANSACTIONTIME',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/ELAPSEDTRANSACTIONTIME',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/GUID',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/INSTR',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/OLD',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/RECORDS',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/ROLE',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/SESSION_ID',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/SUBSTR',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/TIMESTAMP_TO_DATE',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/TO_CLOB',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/TRANSACTION_DATE',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/TRUNC_TRUNCATE',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/USERGROUP',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_functions/RDBMS_functions',
            },
          ],
        },
        {
          type: 'category',
          label: 'SQL for ODBC',
          link: {
            type: 'generated-index',
            title: 'SQL for ODBC',
            slug: '/Modeller_and_Rules_Engine/SQL_for_ODBC',
          },
          items: [
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_for_ODBC/ODBC_SQL_syntax',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_for_ODBC/ODBC_functions_used_by_USoft_applications',
            },
            {
              type: 'doc',
              id: 'Modeller_and_Rules_Engine/SQL_for_ODBC/ODBC_scalar_data_types',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Task flow',
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
    {
      type: 'category',
      label: 'Authorisation and access',
      link: {
        type: 'generated-index',
        title: 'Authorisation and access',
        slug: '/Authorisation_and_access',
      },
      items: [
        {
          type: 'category',
          label: 'Introducing USoft authorisation',
          link: {
            type: 'generated-index',
            title: 'Introducing USoft authorisation',
            slug: '/Authorisation_and_access/Introducing_USoft_authorisation',
          },
          items: [
            {
              type: 'doc',
              id: 'Authorisation_and_access/Introducing_USoft_authorisation/Introducing_USoft_authorisation',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Introducing_USoft_authorisation/Getting_started_with_USoft_100_authorisation',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Introducing_USoft_authorisation/How_to_plan_authorisation',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Introducing_USoft_authorisation/Merged_roles',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Introducing_USoft_authorisation/How_to_change_the_Rules_Engine_cache_refresh_frequency_for_authorisation',
            },
          ],
        },
        {
          type: 'category',
          label: 'Roles',
          link: {
            type: 'generated-index',
            title: 'Roles',
            slug: '/Authorisation_and_access/Roles',
          },
          items: [
            {
              type: 'doc',
              id: 'Authorisation_and_access/Roles/Understanding_roles_and_access_rights',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Roles/DDL_rights',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Roles/Table_rights',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Roles/Column_rights',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Roles/Role_conditions',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Roles/Access_rights_for_different_table_types',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Roles/Access_rights_for_supertypes_and_subtypes',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Roles/Job_rights',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Roles/Component_rights',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Roles/Module_rights',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Roles/First_Menu_Pages_of_roles',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Roles/Testing_roles_and_menus',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Roles/Schemas_and_extension_properties',
            },
          ],
        },
        {
          type: 'category',
          label: 'Application users',
          link: {
            type: 'generated-index',
            title: 'Application users',
            slug: '/Authorisation_and_access/Application_users',
          },
          items: [
            {
              type: 'doc',
              id: 'Authorisation_and_access/Application_users/Creating_users',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Application_users/Associating_users_with_roles',
            },
          ],
        },
        {
          type: 'category',
          label: 'USoft Authorizer in different environments',
          link: {
            type: 'generated-index',
            title: 'USoft Authorizer in different environments',
            slug: '/Authorisation_and_access/USoft_Authorizer_in_different_environments',
          },
          items: [
            {
              type: 'doc',
              id: 'Authorisation_and_access/USoft_Authorizer_in_different_environments/Setting_up_access_for_developers',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/USoft_Authorizer_in_different_environments/USoft_Authorizer_as_a_Productiontime_application',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/USoft_Authorizer_in_different_environments/USoft_Authorizer_as_a_module',
            },
          ],
        },
        {
          type: 'category',
          label: 'Authentication and USoft',
          link: {
            type: 'generated-index',
            title: 'Authentication and USoft',
            slug: '/Authorisation_and_access/Authentication_and_USoft',
          },
          items: [
            {
              type: 'doc',
              id: 'Authorisation_and_access/Authentication_and_USoft/Authentication_and_USoft',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Authentication_and_USoft/Account_funneling',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Authentication_and_USoft/Frontend_users_and_RDBMS_users',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Authentication_and_USoft/User_account_mapping',
            },
          ],
        },
        {
          type: 'category',
          label: 'Deployment configurations',
          link: {
            type: 'generated-index',
            title: 'Deployment configurations',
            slug: '/Authorisation_and_access/Deployment_configurations',
          },
          items: [
            {
              type: 'doc',
              id: 'Authorisation_and_access/Deployment_configurations/Deployment_configurations',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Deployment_configurations/Deployment_configuration_parameters',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Deployment_configurations/Cache_Size',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Deployment_configurations/Max_Prepared_Checks',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Deployment_configurations/Allow_Disable_Constraint',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Deployment_configurations/Auto_Refresh_Constraints',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Deployment_configurations/Batch_Loglevel',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Deployment_configurations/Lock_Foreign_Keys',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Deployment_configurations/Max_Constraint_Depth',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Deployment_configurations/Max_Driver_Conditions',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Deployment_configurations/Number_of_Update_Columns',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Deployment_configurations/Optimize_Changed_Table',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Deployment_configurations/Request_Log_Size',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Deployment_configurations/Show_Component_Errors',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Deployment_configurations/Show_Rdbms_Errors',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Deployment_configurations/SQLServer_Option_Fast_1',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Deployment_configurations/Wait_for_Lock',
            },
          ],
        },
        {
          type: 'category',
          label: 'Server certificates',
          link: {
            type: 'generated-index',
            title: 'Server certificates',
            slug: '/Authorisation_and_access/Server_certificates',
          },
          items: [
            {
              type: 'doc',
              id: 'Authorisation_and_access/Server_certificates/Purpose_of_server_certificates',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Server_certificates/How_server_certificates_work',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Server_certificates/How_to_configure_a_web_server_for_SSL',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Server_certificates/Selfsigned_certificates_and_OpenSSL',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Server_certificates/SSL_Step_1_Download_and_install_OpenSSL',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Server_certificates/SSL_Step_2_Create_a_private_key',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Server_certificates/SSL_Step_3_Create_a_master_certificate_based_on_private_key',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Server_certificates/SSL_Step_4_Create_public_key_and_certificate_signing_request',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Server_certificates/SSL_Step_5_Selfsign_the_certificate',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Server_certificates/Using_selfsigned_certificates_with_USoft',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Server_certificates/Activation_of_TLSSSL_in_the_Remote_Rules_Service',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Server_certificates/Activation_of_TLSSSL_in_the_JDBC_Driver',
            },
            {
              type: 'doc',
              id: 'Authorisation_and_access/Server_certificates/Activation_of_TLSSSL_in_the_Rules_Service',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Collaboration',
      link: {
        type: 'generated-index',
        title: 'Collaboration',
        slug: '/Collaboration',
      },
      items: [
        {
          type: 'category',
          label: 'Collaboration in a USoft project',
          link: {
            type: 'generated-index',
            title: 'Collaboration in a USoft project',
            slug: '/Collaboration/Collaboration_in_a_USoft_project',
          },
          items: [
            {
              type: 'doc',
              id: 'Collaboration/Collaboration_in_a_USoft_project/Collaboration_in_a_USoft_project',
            },
            {
              type: 'doc',
              id: 'Collaboration/Collaboration_in_a_USoft_project/How_a_USoft_team_communicates_with_stakeholders',
            },
            {
              type: 'doc',
              id: 'Collaboration/Collaboration_in_a_USoft_project/USoft_Approach_a_global_skeleton_for_project_phasing',
            },
            {
              type: 'doc',
              id: 'Collaboration/Collaboration_in_a_USoft_project/USoft_Teamwork',
            },
          ],
        },
        {
          type: 'category',
          label: 'Why business rules',
          link: {
            type: 'generated-index',
            title: 'Why business rules',
            slug: '/Collaboration/Why_business_rules',
          },
          items: [
            {
              type: 'doc',
              id: 'Collaboration/Why_business_rules/Why_business_rules',
            },
            {
              type: 'doc',
              id: 'Collaboration/Why_business_rules/Are_business_rules_requirements',
            },
            {
              type: 'doc',
              id: 'Collaboration/Why_business_rules/Contrasting_business_rules_and_Agile_requirements',
            },
          ],
        },
        {
          type: 'category',
          label: 'Between business rules and implementations',
          link: {
            type: 'generated-index',
            title: 'Between business rules and implementations',
            slug: '/Collaboration/Between_business_rules_and_implementations',
          },
          items: [
            {
              type: 'doc',
              id: 'Collaboration/Between_business_rules_and_implementations/Some_business_rules_require_implementation',
            },
            {
              type: 'doc',
              id: 'Collaboration/Between_business_rules_and_implementations/What_implementation_for_your_business_rule',
            },
            {
              type: 'doc',
              id: 'Collaboration/Between_business_rules_and_implementations/Implementing_a_rule_the_process',
            },
            {
              type: 'doc',
              id: 'Collaboration/Between_business_rules_and_implementations/Interpreting_a_business_rule_example',
            },
            {
              type: 'doc',
              id: 'Collaboration/Between_business_rules_and_implementations/Subject_area_dividers_Business_areas_business_objects_rule_sets',
            },
            {
              type: 'doc',
              id: 'Collaboration/Between_business_rules_and_implementations/Implementation_registration',
            },
            {
              type: 'doc',
              id: 'Collaboration/Between_business_rules_and_implementations/Formulations_in_USoft_Definer',
            },
            {
              type: 'doc',
              id: 'Collaboration/Between_business_rules_and_implementations/Vocabularies_in_USoft_Definer',
            },
            {
              type: 'doc',
              id: 'Collaboration/Between_business_rules_and_implementations/Tasks_and_progress_flags',
            },
          ],
        },
        {
          type: 'category',
          label: 'Concept structure for developers',
          link: {
            type: 'generated-index',
            title: 'Concept structure for developers',
            slug: '/Collaboration/Concept_structure_for_developers',
          },
          items: [
            {
              type: 'doc',
              id: 'Collaboration/Concept_structure_for_developers/Types_of_rule',
            },
            {
              type: 'doc',
              id: 'Collaboration/Concept_structure_for_developers/Concept_structure',
            },
            {
              type: 'doc',
              id: 'Collaboration/Concept_structure_for_developers/Rule_structure',
            },
          ],
        },
        {
          type: 'category',
          label: 'Interpreting diagrams',
          link: {
            type: 'generated-index',
            title: 'Interpreting diagrams',
            slug: '/Collaboration/Interpreting_diagrams',
          },
          items: [
            {
              type: 'doc',
              id: 'Collaboration/Interpreting_diagrams/SBVR_concept_diagrams',
            },
            {
              type: 'doc',
              id: 'Collaboration/Interpreting_diagrams/Navigating_SBVR_diagrams',
            },
            {
              type: 'doc',
              id: 'Collaboration/Interpreting_diagrams/BPMN_process_flow_diagrams',
            },
            {
              type: 'doc',
              id: 'Collaboration/Interpreting_diagrams/Navigating_BPMN_diagrams',
            },
            {
              type: 'doc',
              id: 'Collaboration/Interpreting_diagrams/ER_diagrams',
            },
          ],
        },
        {
          type: 'category',
          label: 'USoft Approach',
          link: {
            type: 'generated-index',
            title: 'USoft Approach',
            slug: '/Collaboration/USoft_Approach',
          },
          items: [
            {
              type: 'doc',
              id: 'Collaboration/USoft_Approach/Introducing_the_USoft_Approach',
            },
            {
              type: 'doc',
              id: 'Collaboration/USoft_Approach/Principles_of_the_USoft_Approach',
            },
            {
              type: 'doc',
              id: 'Collaboration/USoft_Approach/How_business_rules_fit_into_the_USoft_Approach',
            },
            {
              type: 'doc',
              id: 'Collaboration/USoft_Approach/Prerequisites_for_the_USoft_Approach',
            },
            {
              type: 'doc',
              id: 'Collaboration/USoft_Approach/The_PLAN_phase',
            },
            {
              type: 'doc',
              id: 'Collaboration/USoft_Approach/The_DEFINE_phase',
            },
            {
              type: 'doc',
              id: 'Collaboration/USoft_Approach/The_DEFINE_tasks',
            },
            {
              type: 'doc',
              id: 'Collaboration/USoft_Approach/The_DELIVER_phase',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Desktop UIs',
      link: {
        type: 'generated-index',
        title: 'Desktop UIs',
        slug: '/Desktop_UIs',
      },
      items: [
        {
          type: 'category',
          label: 'Introducing USoft Desktop UIs',
          link: {
            type: 'generated-index',
            title: 'Introducing USoft Desktop UIs',
            slug: '/Desktop_UIs/Introducing_USoft_Desktop_UIs',
          },
          items: [
            {
              type: 'doc',
              id: 'Desktop_UIs/Introducing_USoft_Desktop_UIs/Introducing_USoft_Desktop_UIs',
            },
          ],
        },
        {
          type: 'category',
          label: 'Exploring USoft Windows Designer',
          link: {
            type: 'generated-index',
            title: 'Exploring USoft Windows Designer',
            slug: '/Desktop_UIs/Exploring_USoft_Windows_Designer',
          },
          items: [
            {
              type: 'doc',
              id: 'Desktop_UIs/Exploring_USoft_Windows_Designer/Info_windows',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Exploring_USoft_Windows_Designer/Lookup_windows',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Exploring_USoft_Windows_Designer/Related_windows',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Exploring_USoft_Windows_Designer/Subtype_windows',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Exploring_USoft_Windows_Designer/Secondary_windows',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Exploring_USoft_Windows_Designer/Info_Box_classes',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Exploring_USoft_Windows_Designer/Underlying_queries_of_info_boxes',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Exploring_USoft_Windows_Designer/Joined_Columns',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Exploring_USoft_Windows_Designer/Extra_Queries',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Exploring_USoft_Windows_Designer/Class_hierarchy_of_info_boxes',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Exploring_USoft_Windows_Designer/Property_Sheets',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Exploring_USoft_Windows_Designer/Windows',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Exploring_USoft_Windows_Designer/Dialogs',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Exploring_USoft_Windows_Designer/Window_Sets',
            },
          ],
        },
        {
          type: 'category',
          label: 'GUI applications and templates',
          link: {
            type: 'generated-index',
            title: 'GUI applications and templates',
            slug: '/Desktop_UIs/GUI_applications_and_templates',
          },
          items: [
            {
              type: 'doc',
              id: 'Desktop_UIs/GUI_applications_and_templates/What_is_a_GUI_application',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/GUI_applications_and_templates/How_to_make_or_change_a_templates_reuse_selection',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/GUI_applications_and_templates/Modular_development_of_Windows_GUIs',
            },
          ],
        },
        {
          type: 'category',
          label: 'Windows Designer objects and properties',
          link: {
            type: 'generated-index',
            title: 'Windows Designer objects and properties',
            slug: '/Desktop_UIs/Windows_Designer_objects_and_properties',
          },
          items: [
            {
              type: 'doc',
              id: 'Desktop_UIs/Windows_Designer_objects_and_properties/Tools_for_objects_and_properties',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Windows_Designer_objects_and_properties/Tips_for_positioning_objects',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Windows_Designer_objects_and_properties/Controls_for_Style_Sheet_option',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Windows_Designer_objects_and_properties/Reorganising_objects_in_a_window',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Windows_Designer_objects_and_properties/Object_Activator_tool',
            },
          ],
        },
        {
          type: 'category',
          label: 'Windows Designer special controls',
          link: {
            type: 'generated-index',
            title: 'Windows Designer special controls',
            slug: '/Desktop_UIs/Windows_Designer_special_controls',
          },
          items: [
            {
              type: 'doc',
              id: 'Desktop_UIs/Windows_Designer_special_controls/Windows_Designer_controls',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Windows_Designer_special_controls/List_views',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Windows_Designer_special_controls/Tabs_Windows_Designer',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Windows_Designer_special_controls/Tree_Views',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Windows_Designer_special_controls/OLE_controls_OCX',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Windows_Designer_special_controls/OLE_containers',
            },
          ],
        },
        {
          type: 'category',
          label: 'Desktop menus',
          link: {
            type: 'generated-index',
            title: 'Desktop menus',
            slug: '/Desktop_UIs/Desktop_menus',
          },
          items: [
            {
              type: 'doc',
              id: 'Desktop_UIs/Desktop_menus/Desktop_menus_and_menu_options',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Desktop_menus/Context_menus',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Desktop_menus/Menu_toolbar_icon_ribbon',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Desktop_menus/Menu_sensitivity',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Desktop_menus/Menu_translation',
            },
          ],
        },
        {
          type: 'category',
          label: 'Scripting in USoft Windows Designer',
          link: {
            type: 'generated-index',
            title: 'Scripting in USoft Windows Designer',
            slug: '/Desktop_UIs/Scripting_in_USoft_Windows_Designer',
          },
          items: [
            {
              type: 'doc',
              id: 'Desktop_UIs/Scripting_in_USoft_Windows_Designer/Actions_events_and_triggers',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Scripting_in_USoft_Windows_Designer/Oldstyle_navigation_paths',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Scripting_in_USoft_Windows_Designer/Action_scripting_and_SQL',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Scripting_in_USoft_Windows_Designer/FORMULA',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Scripting_in_USoft_Windows_Designer/Actions_Example_1_Automatic_query',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Scripting_in_USoft_Windows_Designer/Actions_Example_2_Button_opening_a_Related_Window',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Scripting_in_USoft_Windows_Designer/Actions_Example_3_Button_leading_to_Tab_Page_sensitivity',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Scripting_in_USoft_Windows_Designer/Actions_Example_4_Check_Box_leading_to_Tab_Page_sensitivity',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Scripting_in_USoft_Windows_Designer/Actions_Example_5_Contrasting_field_colour_based_on_record_data',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Scripting_in_USoft_Windows_Designer/Actions_Example_6_Dynamic_default_value',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Scripting_in_USoft_Windows_Designer/Actions_Example_7_Passing_a_value_to_an_embedded_web_browser',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Scripting_in_USoft_Windows_Designer/Actions_Example_8_Automatic_insert_in_child_table_and_Related_Box',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Scripting_in_USoft_Windows_Designer/Actions_Example_9_Dialog_for_search_conditions',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Scripting_in_USoft_Windows_Designer/Actions_Example_10_Catalog_node_leading_to_data_query',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Scripting_in_USoft_Windows_Designer/Actions_Example_11_Window_with_separate_search_dialog',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Scripting_in_USoft_Windows_Designer/Actions_Example_12_Generic_search_dialog',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Scripting_in_USoft_Windows_Designer/Window_interaction',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Scripting_in_USoft_Windows_Designer/Target_objects_in_other_windows',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Scripting_in_USoft_Windows_Designer/Action_syntax',
            },
          ],
        },
        {
          type: 'category',
          label: 'Windows GUI events',
          link: {
            type: 'generated-index',
            title: 'Windows GUI events',
            slug: '/Desktop_UIs/Windows_GUI_events',
          },
          items: [
            {
              type: 'doc',
              id: 'Desktop_UIs/Windows_GUI_events/Windows_interface_events',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Windows_GUI_events/Windows_data_events',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Windows_GUI_events/When_is_a_record_stored',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Windows_GUI_events/Windows_event_order',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Windows_GUI_events/Data_validation_order',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Windows_GUI_events/Data_validation_failure',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Windows_GUI_events/recordStatus_and_applicationStatus',
            },
          ],
        },
        {
          type: 'category',
          label: 'Windows GUI exports and reports',
          link: {
            type: 'generated-index',
            title: 'Windows GUI exports and reports',
            slug: '/Desktop_UIs/Windows_GUI_exports_and_reports',
          },
          items: [
            {
              type: 'doc',
              id: 'Desktop_UIs/Windows_GUI_exports_and_reports/Windows_GUI_exports_and_reports',
            },
          ],
        },
        {
          type: 'category',
          label: 'Windows GUI help',
          link: {
            type: 'generated-index',
            title: 'Windows GUI help',
            slug: '/Desktop_UIs/Windows_GUI_help',
          },
          items: [
            {
              type: 'doc',
              id: 'Desktop_UIs/Windows_GUI_help/Contextsensitive_help',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/Windows_GUI_help/Windows_GUI_help',
            },
          ],
        },
        {
          type: 'category',
          label: 'ActiveX Support',
          link: {
            type: 'generated-index',
            title: 'ActiveX Support',
            slug: '/Desktop_UIs/ActiveX_Support',
          },
          items: [
            {
              type: 'doc',
              id: 'Desktop_UIs/ActiveX_Support/USoft_Developer_and_ActiveX',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ActiveX_Support/ActiveX_objects_in_the_Windows_Designer_catalog',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ActiveX_Support/How_to_insert_an_ActiveX_object',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ActiveX_Support/How_to_create_ActiveX_Control_Columns',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ActiveX_Support/ActiveX_Control_property_dialogs',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ActiveX_Support/Using_method_calls_with_ActiveX_controls',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ActiveX_Support/ActiveX_Example_1_Creating_a_simple_dialog_that_contains_an_ActiveX_control',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ActiveX_Support/ActiveX_Example_2_How_to_pass_values_to_and_from_an_ActiveX_object',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ActiveX_Support/ActiveX_Example_3_Calling_a_method_of_an_ActiveX_browser_control',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ActiveX_Support/ActiveX_Example_4_Creating_an_ActiveX_control_column_bound_to_base_column_values',
            },
          ],
        },
        {
          type: 'category',
          label: 'ESI Action Interface',
          link: {
            type: 'generated-index',
            title: 'ESI Action Interface',
            slug: '/Desktop_UIs/ESI_Action_Interface',
          },
          items: [
            {
              type: 'doc',
              id: 'Desktop_UIs/ESI_Action_Interface/ESI_Action_Interface__Introduction',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ESI_Action_Interface/ESI_object_model',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ESI_Action_Interface/ESI_object_model_compared_to_other_models',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ESI_Action_Interface/Deducing_the_ESI_object_model_from_the_layout_model',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ESI_Action_Interface/Differences_in_referring_to_ESI_properties_and_their_values',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ESI_Action_Interface/Implicit_ESI_controls_vs_explicit_ESI_controls',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ESI_Action_Interface/ESI_interface_actions',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ESI_Action_Interface/Executing_ESI_actions',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ESI_Action_Interface/esiaddcomponent',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ESI_Action_Interface/esiaddinfowindow',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ESI_Action_Interface/esiaddsubclass',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ESI_Action_Interface/esideleteclass',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ESI_Action_Interface/esideletecontrol',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ESI_Action_Interface/esiinsertcontrol',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ESI_Action_Interface/esinewapplication',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ESI_Action_Interface/esiopenapplication',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ESI_Action_Interface/esisave',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ESI_Action_Interface/esisetattribute',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ESI_Action_Interface/esisetclassproperty',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ESI_Action_Interface/ESI_action_interface_notes',
            },
            {
              type: 'doc',
              id: 'Desktop_UIs/ESI_Action_Interface/ESI_Frequently_Asked_Questions',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Web and app UIs',
      link: {
        type: 'generated-index',
        title: 'Web and app UIs',
        slug: '/Web_and_app_UIs',
      },
      items: [
        {
          type: 'category',
          label: 'Introducing USoft Web and App UIs',
          link: {
            type: 'generated-index',
            title: 'Introducing USoft Web and App UIs',
            slug: '/Web_and_app_UIs/Introducing_USoft_Web_and_App_UIs',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Introducing_USoft_Web_and_App_UIs/Introducing_USoft_Web_and_App_UIs',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Introducing_USoft_Web_and_App_UIs/Development_tasks_and_team_members',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Introducing_USoft_Web_and_App_UIs/Understanding_the_Development_environment',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Introducing_USoft_Web_and_App_UIs/Understanding_the_runtime_technology_stack',
            },
          ],
        },
        {
          type: 'category',
          label: 'USoft template defaults',
          link: {
            type: 'generated-index',
            title: 'USoft template defaults',
            slug: '/Web_and_app_UIs/USoft_template_defaults',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/USoft_template_defaults/Template_defaults_as_a_concept',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/USoft_template_defaults/usoftzero_cover_page_and_menu',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/USoft_template_defaults/usoftzero_pages_and_cards',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/USoft_template_defaults/usoftzero_tabs',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/USoft_template_defaults/usoftzero_search',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/USoft_template_defaults/usoftzero_dynamic_authorisation',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/USoft_template_defaults/usoftzero_multirecord_grids',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/USoft_template_defaults/usoftzero_checkboxes',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/USoft_template_defaults/usoftzero_dialogs',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/USoft_template_defaults/usoftzero_wizard',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/USoft_template_defaults/usoftzero_dynamic_defaults',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/USoft_template_defaults/usoftzero_query_parameters',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/USoft_template_defaults/Template_default_Switching_to_usoftclassic',
            },
          ],
        },
        {
          type: 'category',
          label: 'Your own template default',
          link: {
            type: 'generated-index',
            title: 'Your own template default',
            slug: '/Web_and_app_UIs/Your_own_template_default',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Your_own_template_default/Template_default_creating_and_reapplying_your_own_defaults',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Your_own_template_default/Template_default_Dictionary',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Your_own_template_default/Template_default_Domain_allowed_values',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Your_own_template_default/Template_default_Relationships',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Your_own_template_default/Template_default_Roles',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Your_own_template_default/Template_default_Tables',
            },
          ],
        },
        {
          type: 'category',
          label: 'Getting started with Web Designer',
          link: {
            type: 'generated-index',
            title: 'Getting started with Web Designer',
            slug: '/Web_and_app_UIs/Getting_started_with_Web_Designer',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Getting_started_with_Web_Designer/Getting_started_with_Web_Designer',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Getting_started_with_Web_Designer/Upgrading_to_the_HTTPS_protocol',
            },
          ],
        },
        {
          type: 'category',
          label: 'Web Designer tools',
          link: {
            type: 'generated-index',
            title: 'Web Designer tools',
            slug: '/Web_and_app_UIs/Web_Designer_tools',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_tools/The_Web_Designer_tool_interface',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_tools/The_Web_Designer_catalog',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_tools/The_Preview_Pane',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_tools/The_Object_Tree',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_tools/The_Property_Inspector',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_tools/The_Find_in_Repository_dialog',
            },
          ],
        },
        {
          type: 'category',
          label: 'Web Designer classes, objects, properties',
          link: {
            type: 'generated-index',
            title: 'Web Designer classes, objects, properties',
            slug: '/Web_and_app_UIs/Web_Designer_classes,_objects,_properties',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_classes_objects_properties/Classes_objects_and_properties',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_classes_objects_properties/Page_classes',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_classes_objects_properties/Layout_areas',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_classes_objects_properties/Input_controls_by_type',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_classes_objects_properties/Messages',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_classes_objects_properties/Sharing_catalog_items',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_classes_objects_properties/How_to_display_data_as_hyperlink',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_classes_objects_properties/Setting_a_variable_set_with_the_URL_protocol',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_classes_objects_properties/How_to_make_a_page_readonly',
            },
          ],
        },
        {
          type: 'category',
          label: 'Web Designer basic design operations',
          link: {
            type: 'generated-index',
            title: 'Web Designer basic design operations',
            slug: '/Web_and_app_UIs/Web_Designer_basic_design_operations',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_basic_design_operations/How_to_open_a_page_from_the_catalog',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_basic_design_operations/How_to_open_the_Property_Inspector',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_basic_design_operations/How_to_set_properties_with_the_Property_Inspector',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_basic_design_operations/How_to_reset_properties',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_basic_design_operations/How_to_add_a_control_to_a_page',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_basic_design_operations/How_to_remove_a_control_from_a_page',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_basic_design_operations/How_to_create_custom_controls',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_basic_design_operations/How_to_access_Web_Designer_property_help',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_basic_design_operations/How_to_change_the_prompt_or_label_of_an_object',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_basic_design_operations/How_to_make_fields_nondisplayed',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_basic_design_operations/How_to_include_an_image',
            },
          ],
        },
        {
          type: 'category',
          label: 'Web Designer controls',
          link: {
            type: 'generated-index',
            title: 'Web Designer controls',
            slug: '/Web_and_app_UIs/Web_Designer_controls',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_controls/Chart_controls',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_controls/Column_controls_and_input_controls',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_controls/Input_validation',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_controls/Container_controls',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_controls/Dialog_controls',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_controls/File_Upload_controls',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_controls/Frame_controls',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_controls/Grid_controls',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_controls/Group_controls',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_controls/Replicated_Columns_Control',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_controls/Tree_controls_and_tree_node_controls',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_controls/Tabular_grid_controls',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Designer_controls/Tabs_Web_Designer',
            },
          ],
        },
        {
          type: 'category',
          label: 'Web menus',
          link: {
            type: 'generated-index',
            title: 'Web menus',
            slug: '/Web_and_app_UIs/Web_menus',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_menus/Web_menus_Quick_Start',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_menus/Rolebased_web_menus',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_menus/Defining_a_menu',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_menus/How_USoft_displays_web_menus',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_menus/Menu_XML_files',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_menus/Sharing_menu_pages_and_controls_between_repositories',
            },
          ],
        },
        {
          type: 'category',
          label: 'Data sources',
          link: {
            type: 'generated-index',
            title: 'Data sources',
            slug: '/Web_and_app_UIs/Data_sources',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Data_sources/Data_sources',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Data_sources/Embedded_data_sources',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Data_sources/SQLDataSources',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Data_sources/Data_source_path_syntax',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Data_sources/Life_time_data_source_property',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Data_sources/How_to_define_a_Related_Data_Source',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Data_sources/How_to_define_a_Lookup_Data_Source',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Data_sources/How_to_define_a_Variable_Set_Data_Source',
            },
          ],
        },
        {
          type: 'category',
          label: 'Page and data source constructs',
          link: {
            type: 'generated-index',
            title: 'Page and data source constructs',
            slug: '/Web_and_app_UIs/Page_and_data_source_constructs',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Page_and_data_source_constructs/Page_and_data_source_constructs',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Page_and_data_source_constructs/Pattern_1_Singlerecord_and_multirecord_areas',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Page_and_data_source_constructs/Pattern_2_Searchandresults_across_two_pages',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Page_and_data_source_constructs/Pattern_3_Createandconfirm_across_two_pages',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Page_and_data_source_constructs/Pattern_4_Masterdetail_form_on_a_single_page',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Page_and_data_source_constructs/Pattern_5_Parent_box_and_followon_insert',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Page_and_data_source_constructs/Pattern_6_Customised_lookup_query',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Page_and_data_source_constructs/Pattern_7_Classic_joined_column',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Page_and_data_source_constructs/Pattern_8_Job_called_by_web_page',
            },
          ],
        },
        {
          type: 'category',
          label: 'Scripting with data sources',
          link: {
            type: 'generated-index',
            title: 'Scripting with data sources',
            slug: '/Web_and_app_UIs/Scripting_with_data_sources',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Scripting_with_data_sources/Scripting_with_data_sources',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Scripting_with_data_sources/The_DefaultDataSource_placeholder',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Scripting_with_data_sources/The_getDataSourceAlias_placeholder',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Scripting_with_data_sources/The_getExpression_placeholder',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Scripting_with_data_sources/The_getMainDataSourceAlias_placeholder',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Scripting_with_data_sources/The_getThisDataSourceAlias_placeholder',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Scripting_with_data_sources/The_getSearchValue_placeholder',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Scripting_with_data_sources/The_getSelection_placeholder',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Scripting_with_data_sources/The_getValue_placeholder',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Scripting_with_data_sources/The_getWhereClause_placeholder',
            },
          ],
        },
        {
          type: 'category',
          label: 'Navigation between web pages',
          link: {
            type: 'generated-index',
            title: 'Navigation between web pages',
            slug: '/Web_and_app_UIs/Navigation_between_web_pages',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Navigation_between_web_pages/Page_chaining',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Navigation_between_web_pages/Page_stacking',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Navigation_between_web_pages/How_to_add_a_navigation_path_to_a_page',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Navigation_between_web_pages/How_to_embed_a_page_in_another_page',
            },
          ],
        },
        {
          type: 'category',
          label: 'SQL and Web Designer',
          link: {
            type: 'generated-index',
            title: 'SQL and Web Designer',
            slug: '/Web_and_app_UIs/SQL_and_Web_Designer',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/SQL_and_Web_Designer/Modifying_underlying_SQL_of_TableDataSources',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/SQL_and_Web_Designer/SQL_underlying_a_SQLDataSource',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/SQL_and_Web_Designer/executeSQLStatement_actions',
            },
          ],
        },
        {
          type: 'category',
          label: 'Testing your web application with USoft Web Benchmark',
          link: {
            type: 'generated-index',
            title: 'Testing your web application with USoft Web Benchmark',
            slug: '/Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Introducing_USoft_Web_Benchmark',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Getting_started_with_Web_Benchmark',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/The_Web_Benchmark_control',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Web_Benchmark_control_properties',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Recording_a_Web_Benchmark_test',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Playing_a_Web_Benchmark_test',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Pausing_a_Web_Benchmark_recording',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Stopping_a_Web_Benchmark_recording',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Invoking_a_Web_Benchmark_test',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Delaying_a_Web_Benchmark_test',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Editing_a_test',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Web_Benchmark_test_editing_Identifying_target_controls_and_their_properties',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Using_variables_in_a_Web_Benchmark_test',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Web_Benchmark_Profiler_Running_the_profiler_for_a_test',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Web_Benchmark_Profiler_Viewing_test_runs_of_a_test',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Web_Benchmark_Profiler_Overview_of_test_runs',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Web_Benchmark_Profiler_Comparisons',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Selecting_a_Web_Benchmark_test',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Saving_a_Web_Benchmark_test',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Managing_Web_Benchmark_tests',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Web_Benchmark_settings',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Testing_your_web_application_with_USoft_Web_Benchmark/Test_automation_with_Web_Benchmark',
            },
          ],
        },
        {
          type: 'category',
          label: 'Web Benchmark recordable actions',
          link: {
            type: 'generated-index',
            title: 'Web Benchmark recordable actions',
            slug: '/Web_and_app_UIs/Web_Benchmark_recordable_actions',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Benchmark_recordable_actions/assert_assertEquals_assertNotSame',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Benchmark_recordable_actions/click_clickButton_clickRow',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Benchmark_recordable_actions/comment',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Benchmark_recordable_actions/delay',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Benchmark_recordable_actions/gotoDataSet',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Benchmark_recordable_actions/invoke',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Benchmark_recordable_actions/message',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Benchmark_recordable_actions/navigateMenu',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Benchmark_recordable_actions/navigateToLookup',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Benchmark_recordable_actions/nextDataSet_previousDataSet',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Benchmark_recordable_actions/script',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Benchmark_recordable_actions/setValue',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Benchmark_recordable_actions/test',
            },
          ],
        },
        {
          type: 'category',
          label: 'Web Benchmark API',
          link: {
            type: 'generated-index',
            title: 'Web Benchmark API',
            slug: '/Web_and_app_UIs/Web_Benchmark_API',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Benchmark_API/udbbenchmarkplayback',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Benchmark_API/udbbenchmarkrec',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Benchmark_API/udbbenchmarksettings',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Benchmark_API/udbbenchmarkviews',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Web_Benchmark_API/udbbenchmarkevents',
            },
          ],
        },
        {
          type: 'category',
          label: 'Publication configurations',
          link: {
            type: 'generated-index',
            title: 'Publication configurations',
            slug: '/Web_and_app_UIs/Publication_configurations',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Publication_configurations/Publication_configurations',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Publication_configurations/Publication_attributes',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Publication_configurations/The_Alternative_Template_Folder',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Publication_configurations/Systemdefined_publication_properties',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Publication_configurations/Userdefined_publication_properties',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Publication_configurations/Page_Sets',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Publication_configurations/Page_states',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Publication_configurations/Referring_to_publication_settings',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Publication_configurations/How_to_apply_a_different_jQuery_theme',
            },
          ],
        },
        {
          type: 'category',
          label: 'Publishing and running your web application',
          link: {
            type: 'generated-index',
            title: 'Publishing and running your web application',
            slug: '/Web_and_app_UIs/Publishing_and_running_your_web_application',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Publishing_and_running_your_web_application/The_Combinedxml_file',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Publishing_and_running_your_web_application/The_applicationxml_document',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Publishing_and_running_your_web_application/Published_CSS_files',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Publishing_and_running_your_web_application/Published_JSON_files',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Publishing_and_running_your_web_application/Published_XML_Files',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Publishing_and_running_your_web_application/The_Combined_JSON_object',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Publishing_and_running_your_web_application/Running_your_web_application',
            },
          ],
        },
        {
          type: 'category',
          label: 'Cascading Style Sheets (CSS)',
          link: {
            type: 'generated-index',
            title: 'Cascading Style Sheets (CSS)',
            slug: '/Web_and_app_UIs/Cascading_Style_Sheets_(CSS)',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Cascading_Style_Sheets_CSS/Cascading_Style_Sheets_CSS',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Cascading_Style_Sheets_CSS/CSS_selectors_in_stylesheet_rules',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Cascading_Style_Sheets_CSS/How_to_define_CSS_stylesheet_rules_in_USoft',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Cascading_Style_Sheets_CSS/CSS_Example_The_BODY_element',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Cascading_Style_Sheets_CSS/CSS_Example_The_DIV_element_as_a_custom_header_bar',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Cascading_Style_Sheets_CSS/CSS_Example_The_ButtonControl_class',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Cascading_Style_Sheets_CSS/CSS_Example_The_InputControl_class',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Cascading_Style_Sheets_CSS/CSS_Example_Highlighting_mandatory_fields',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Cascading_Style_Sheets_CSS/CSS_record_colouring_in_grid_controls_and_grid_edit_controls',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Cascading_Style_Sheets_CSS/Reusing_existing_style_sheets',
            },
          ],
        },
        {
          type: 'category',
          label: 'JavaScript',
          link: {
            type: 'generated-index',
            title: 'JavaScript',
            slug: '/Web_and_app_UIs/JavaScript',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/JavaScript/Finishing_your_web_application_with_JavaScript',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/JavaScript/Promises_for_asynchronous_Javascript',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/JavaScript/Scripting_example_1_The_period_case',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/JavaScript/Scripting_example_2_Clientside_check_on_a_mandatory_field',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/JavaScript/Script_scope',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/JavaScript/How_to_add_a_script_to_your_application',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/JavaScript/How_to_add_a_script_to_a_page',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/JavaScript/How_to_add_a_script_to_an_object',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/JavaScript/Events_and_event_listeners',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/JavaScript/How_to_change_the_parameters_of_an_action',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/JavaScript/Host_variables_in_Javascript',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/JavaScript/The_caller_keyword',
            },
          ],
        },
        {
          type: 'category',
          label: 'Active web browsers',
          link: {
            type: 'generated-index',
            title: 'Active web browsers',
            slug: '/Web_and_app_UIs/Active_web_browsers',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Active_web_browsers/Active_web_browsers',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Active_web_browsers/The_applicationhtml_initial_document',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Active_web_browsers/Contexts',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Active_web_browsers/Client_sessions',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/Active_web_browsers/Frameworks',
            },
          ],
        },
        {
          type: 'category',
          label: 'UDB udb',
          link: {
            type: 'generated-index',
            title: 'UDB udb',
            slug: '/Web_and_app_UIs/UDB_udb',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/UDB_udb_object',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbacceptLookupValue',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbapplyCurrentContext',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbcancelWindow',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbcheckData',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbcheckLoginRequired',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbcheckVersion',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbclearGenericHostVars',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbclosePage',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbcommit',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbcurrentEmbeddedPageName',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbcurrentEmbeddedPagePath',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbcurrentPageAlias',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbcurrentPageName',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbcurrentPageNavigationSource',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbcurrentPageStackDepth',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbdialog',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbexecuteInContext',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbexecuteSQLStatement',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbgenericHostVar',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbgetContext',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbgetEmbeddedPageName',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbgetEmbeddedPagePath',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbgetMenu',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbgroupRequests',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbhostvars',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbinput',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbisCommitted',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbisTransactionChecked',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udblanggetTranslation',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udblangtranslate',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udblogin',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udblogout',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbmainPageName',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbnavigateTo',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbnavigateToLookup',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbnavigateToRelated',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udboff',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbon',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbping',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbrollback',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbsetTimeOut',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbsettings',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbshowLogin',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbstatusloggedIn',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbstatuslogonRequired',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbtitle',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbtrigger',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbupload',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_udb/udbwait',
            },
          ],
        },
        {
          type: 'category',
          label: 'UDB DataSourceMetaContainer',
          link: {
            type: 'generated-index',
            title: 'UDB DataSourceMetaContainer',
            slug: '/Web_and_app_UIs/UDB_DataSourceMetaContainer',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadsalias',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadschildren',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadscols',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadscurrentDataSet',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadsdataSetSize',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadseach',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadshasChild',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadshasCount',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadshasLookup',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadsid',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadsinitialState',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadsisAutoQuery',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadsisDefault',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadsisDeletable',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadsisDistinct',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadsisFirstRecordDefaultSelected',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadsisInsertable',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadsisJoined',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadsisLookup',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadsisOnEmbeddedPage',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadsisUpdatable',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadsjoins',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadskeyCols',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadslifeTime',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadslookupRefs',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadslookups',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadsname',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadsorphanDataSource',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadspageAlias',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadsparents',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadspath',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadsrealDataSource',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadsrelations',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadssortOrder',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadstable',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceMetaContainer/udbMetadstype',
            },
          ],
        },
        {
          type: 'category',
          label: 'UDB DataSourceContainer',
          link: {
            type: 'generated-index',
            title: 'UDB DataSourceContainer',
            slug: '/Web_and_app_UIs/UDB_DataSourceContainer',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceContainer/UDB_DataSourceContainer_object',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceContainer/udbdsclear',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceContainer/udbdsclearQuery',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceContainer/udbdscreateRowSet',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceContainer/udbdseach',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceContainer/udbdsembeddedKeyCols',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceContainer/udbdsexecuteQuery',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceContainer/udbdsgetDataSet',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceContainer/udbdsgotoDataSet',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceContainer/udbdsmeta',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceContainer/udbdsoff',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceContainer/udbdson',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceContainer/udbdspathTo',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceContainer/udbdsrefresh',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceContainer/udbdsrowCount',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceContainer/udbdsrowCreate',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceContainer/udbdsrows',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceContainer/udbdsrowSet',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceContainer/udbdssearchCols',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceContainer/udbdssetDataSetSize',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceContainer/udbdssetQueryHook',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_DataSourceContainer/udbdstrigger',
            },
          ],
        },
        {
          type: 'category',
          label: 'UDB Rowset',
          link: {
            type: 'generated-index',
            title: 'UDB Rowset',
            slug: '/Web_and_app_UIs/UDB_Rowset',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rowset/UDB_Rowset_object',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rowset/Rowsetclear',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rowset/RowsetdataSet',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rowset/RowsetdataSetIndicator',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rowset/RowsetdbCount',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rowset/Rowseteach',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rowset/Rowsetexecute',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rowset/RowsetexecuteQuery',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rowset/RowsetgotoDataSet',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rowset/RowsetindexOf',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rowset/RowsetisEmpty',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rowset/RowsetisQueried',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rowset/RowsetkeysString',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rowset/RowsetkeyValues',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rowset/RowsetnumberOfDataSets',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rowset/Rowsetposition',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rowset/Rowsetrange',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rowset/RowsetrowCount',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rowset/Rowsetrows',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rowset/Rowsetselect',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rowset/Rowsetsort',
            },
          ],
        },
        {
          type: 'category',
          label: 'UDB Rows',
          link: {
            type: 'generated-index',
            title: 'UDB Rows',
            slug: '/Web_and_app_UIs/UDB_Rows',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rows/UDB_Rows_object',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rows/Rowscols',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rows/Rowseach',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rows/Rowsfilter',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rows/Rowsindex',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rows/RowsisInserted',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rows/RowsjoinedVal',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rows/Rowskeys',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rows/RowskeysString',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rows/RowskeysXML',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rows/Rowsmark',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rows/Rowsrefresh',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rows/RowsrowDelete',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rows/RowsrowId',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rows/RowsrowRemove',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rows/Rowsrsc',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rows/Rowsselect',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rows/Rowsstatus',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Rows/Rowsvalues',
            },
          ],
        },
        {
          type: 'category',
          label: 'UDB ColsMeta',
          link: {
            type: 'generated-index',
            title: 'UDB ColsMeta',
            slug: '/Web_and_app_UIs/UDB_ColsMeta',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_ColsMeta/UDB_ColsMeta_object',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_ColsMeta/ColsMetaalias',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_ColsMeta/ColsMetaaltInputFormats',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_ColsMeta/ColsMetadefValue',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_ColsMeta/ColsMetadisplayLength',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_ColsMeta/ColsMetadomain',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_ColsMeta/ColsMetagetForeignKey',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_ColsMeta/ColsMetaioFormat',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_ColsMeta/ColsMetaisEmbeddedColumn',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_ColsMeta/ColsMetaisGroupBy',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_ColsMeta/ColsMetaisInputAllowed',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_ColsMeta/ColsMetaisKey',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_ColsMeta/ColsMetaisMandatory',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_ColsMeta/ColsMetaisPrimaryKey',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_ColsMeta/ColsMetaisUpdatable',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_ColsMeta/ColsMetalabel',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_ColsMeta/ColsMetaname',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_ColsMeta/ColsMetaprompt',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_ColsMeta/ColsMetasortOrder',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_ColsMeta/ColsMetatype',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_ColsMeta/ColsMetavalueList',
            },
          ],
        },
        {
          type: 'category',
          label: 'UDB Cols',
          link: {
            type: 'generated-index',
            title: 'UDB Cols',
            slug: '/Web_and_app_UIs/UDB_Cols',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Cols/UDB_Cols_object',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Cols/Colsclear',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Cols/Colseach',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Cols/Colsmeta',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Cols/ColsrawVal',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Cols/Colsval',
            },
          ],
        },
        {
          type: 'category',
          label: 'UDB Events',
          link: {
            type: 'generated-index',
            title: 'UDB Events',
            slug: '/Web_and_app_UIs/UDB_Events',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/after',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/aftergetmenu',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/afterrender',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/before',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/beforecheckdata',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/beforecleardataset',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/beforecommit',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/beforeexecutequery',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/beforegetmenu',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/beforegotodataset',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/beforelogin',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/beforelogout',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/beforenavigate',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/beforerefresh',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/beforerollback',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/beforesqlstatement',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/colpostupdate',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/colpreupdate',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/dataset',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/load',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/login',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/logout',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/lookup',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/ongetdataset',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/onselectrow',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/pageshow',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/postcommit',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/readonly',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/renderrow',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/rowpostcreate',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/rowpostdelete',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/rowpostrefresh',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/rowpostselect',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/rowpostupdate',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/rowprecreate',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/rowpredelete',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/rowprerefresh',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/rowpreselect',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/rowpreupdate',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/rowquery',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/rowselect',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/showdata',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/timeout',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/unload',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/uploadcomplete',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UDB_Events/value',
            },
          ],
        },
        {
          type: 'category',
          label: 'UI Library',
          link: {
            type: 'generated-index',
            title: 'UI Library',
            slug: '/Web_and_app_UIs/UI_Library',
          },
          items: [
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UI_Library/Generic_usoft_extension_functions',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UI_Library/Factories',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UI_Library/Handlebars',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UI_Library/Field_validation',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UI_Library/getLanguage',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UI_Library/setEvents',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UI_Library/setLanguage',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UI_Library/transform',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UI_Library/usdialog',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UI_Library/ustabs',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UI_Library/USoft_controls_from_jQuery_udbControl',
            },
            {
              type: 'doc',
              id: 'Web_and_app_UIs/UI_Library/USoft_controls_from_jQuery_Render',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Services',
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
    {
      type: 'category',
      label: 'Extensions',
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
    {
      type: 'category',
      label: 'Repositories',
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
    {
      type: 'category',
      label: 'Continuous delivery',
      link: {
        type: 'generated-index',
        title: 'Continuous delivery',
        slug: '/Continuous_delivery',
      },
      items: [
        {
          type: 'category',
          label: 'Getting started with USoft Delivery Manager',
          link: {
            type: 'generated-index',
            title: 'Getting started with USoft Delivery Manager',
            slug: '/Continuous_delivery/Getting_started_with_USoft_Delivery_Manager',
          },
          items: [
            {
              type: 'doc',
              id: 'Continuous_delivery/Getting_started_with_USoft_Delivery_Manager/Reviewing_your_development_platform',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Getting_started_with_USoft_Delivery_Manager/Getting_started_with_Delivery_Manager',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Getting_started_with_USoft_Delivery_Manager/Deciding_on_a_location_for_Delivery_Manager',
            },
          ],
        },
        {
          type: 'category',
          label: 'Understanding USoft Delivery Manager',
          link: {
            type: 'generated-index',
            title: 'Understanding USoft Delivery Manager',
            slug: '/Continuous_delivery/Understanding_USoft_Delivery_Manager',
          },
          items: [
            {
              type: 'doc',
              id: 'Continuous_delivery/Understanding_USoft_Delivery_Manager/Introducing_USoft_Delivery_Manager',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Understanding_USoft_Delivery_Manager/Release_management_Flag_for_release_phase',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Understanding_USoft_Delivery_Manager/Release_management_Release_phase',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Understanding_USoft_Delivery_Manager/Release_trees',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Understanding_USoft_Delivery_Manager/Release_properties',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Understanding_USoft_Delivery_Manager/Release_management_Deliver_phase',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Understanding_USoft_Delivery_Manager/Release_management_Configure_phase',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Understanding_USoft_Delivery_Manager/Configuration_by_variable_substitution',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Understanding_USoft_Delivery_Manager/Configuration_by_XSL_transformation',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Understanding_USoft_Delivery_Manager/Configuration_example_1',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Understanding_USoft_Delivery_Manager/Configuration_example_2',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Understanding_USoft_Delivery_Manager/Configuration_example_3',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Understanding_USoft_Delivery_Manager/Release_management_Deploy_phase',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Understanding_USoft_Delivery_Manager/Repository_management_Export',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Understanding_USoft_Delivery_Manager/Repository_management_Compare',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Understanding_USoft_Delivery_Manager/Repository_management_Import',
            },
          ],
        },
        {
          type: 'category',
          label: 'USoft Delivery Manager by concept',
          link: {
            type: 'generated-index',
            title: 'USoft Delivery Manager by concept',
            slug: '/Continuous_delivery/USoft_Delivery_Manager_by_concept',
          },
          items: [
            {
              type: 'doc',
              id: 'Continuous_delivery/USoft_Delivery_Manager_by_concept/Actions_in_UDeliver',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/USoft_Delivery_Manager_by_concept/Added_XSL_in_UDeliver',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/USoft_Delivery_Manager_by_concept/Applications_in_UDeliver',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/USoft_Delivery_Manager_by_concept/Application_tables_in_UDeliver',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/USoft_Delivery_Manager_by_concept/Attachments_in_UDeliver',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/USoft_Delivery_Manager_by_concept/Computers_in_UDeliver',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/USoft_Delivery_Manager_by_concept/Contexts_and_result_types_in_UDeliver',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/USoft_Delivery_Manager_by_concept/Custom_XSL_in_UDeliver',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/USoft_Delivery_Manager_by_concept/Database_accounts_in_UDeliver',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/USoft_Delivery_Manager_by_concept/Deploy_scripts_in_UDeliver',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/USoft_Delivery_Manager_by_concept/Extracted_server_objects_in_UDeliver',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/USoft_Delivery_Manager_by_concept/Metadata_and_application_data_in_UDeliver',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/USoft_Delivery_Manager_by_concept/Modules_in_UDeliver',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/USoft_Delivery_Manager_by_concept/Publication_objects_in_UDeliver',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/USoft_Delivery_Manager_by_concept/Registries_in_UDeliver',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/USoft_Delivery_Manager_by_concept/Sections_in_UDeliver',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/USoft_Delivery_Manager_by_concept/Source_variables_in_UDeliver',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/USoft_Delivery_Manager_by_concept/Tags_in_UDeliver',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/USoft_Delivery_Manager_by_concept/Target_variables_in_UDeliver',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/USoft_Delivery_Manager_by_concept/Tasks_in_UDeliver',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/USoft_Delivery_Manager_by_concept/Upgrade_scripts',
            },
          ],
        },
        {
          type: 'category',
          label: 'Delivery Manager basic procedures',
          link: {
            type: 'generated-index',
            title: 'Delivery Manager basic procedures',
            slug: '/Continuous_delivery/Delivery_Manager_basic_procedures',
          },
          items: [
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_basic_procedures/Initialising_a_release_tree',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_basic_procedures/Dropping_moving_archiving_a_release_tree_or_starting_over',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_basic_procedures/Creating_a_new_release',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_basic_procedures/Reverting_to_the_previous_release',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_basic_procedures/Renaming_a_release_version',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_basic_procedures/Defining_a_task',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_basic_procedures/Running_a_task',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_basic_procedures/Defining_a_task_category',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_basic_procedures/Loading_deploy_samples_and_added_XSL_samples',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_basic_procedures/Loading_registry_samples',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_basic_procedures/Creating_a_deploy_script',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_basic_procedures/Running_a_deploy_script',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_basic_procedures/Creating_a_registry',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_basic_procedures/Including_an_attachment',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_basic_procedures/Blocking_an_attachment',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_basic_procedures/Writing_an_upgrade_script',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_basic_procedures/Archiving_an_upgrade_script',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_basic_procedures/Restoring_an_upgrade_script',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_basic_procedures/Setting_a_source_variable',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_basic_procedures/Setting_a_target_variable',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_basic_procedures/Comparing_data',
            },
          ],
        },
        {
          type: 'category',
          label: 'Delivery Manager actions by name',
          link: {
            type: 'generated-index',
            title: 'Delivery Manager actions by name',
            slug: '/Continuous_delivery/Delivery_Manager_actions_by_name',
          },
          items: [
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Allow_disable_constraints',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Apply_custom_XSL',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Check_objects',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Clear_and_import_from_TDF',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Compare_data_files',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Copy_file',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Create_flat_files',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Create_folder',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Create_tables',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Drop_appdata',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Drop_file',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Drop_folder',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Drop_repository',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Export_all_appdata',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Export_deliverable_appdata',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Export_metadata',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Export_to_TDF',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Extract_servers',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Extract_USoft_version',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Fill_Authorizer_tables',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Generate_createtables_script',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Import_appdata',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Import_metadata',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Mark_up_text_file',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Mark_up_XML_attribute',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Populate_tables_list',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Publish_publication_object',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Publish_server',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Release_createtables_script',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Release_custom_folder',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Release_deliverable_appdata',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Release_flat_files',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Release_metadata',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Release_modules',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Release_publication',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Release_Rules_Service',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Release_scripts',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Release_server',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Run_SQL_command',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Synchronise',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Update_Oracle_sequences',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_actions_by_name/Validate_publication_object',
            },
          ],
        },
        {
          type: 'category',
          label: 'Delivery Manager background information',
          link: {
            type: 'generated-index',
            title: 'Delivery Manager background information',
            slug: '/Continuous_delivery/Delivery_Manager_background_information',
          },
          items: [
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_background_information/DTAP_arrangement_and_environments',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_background_information/Folder_paths_and_file_paths',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_background_information/Special_folders',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_background_information/Folder_management_principles',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_background_information/Running_from_flat_files_or_repository',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_background_information/Bestpractice_task_design',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_background_information/Upgrade',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/Delivery_Manager_background_information/Stashing',
            },
          ],
        },
        {
          type: 'category',
          label: 'XSL sample code for delivery',
          link: {
            type: 'generated-index',
            title: 'XSL sample code for delivery',
            slug: '/Continuous_delivery/XSL_sample_code_for_delivery',
          },
          items: [
            {
              type: 'doc',
              id: 'Continuous_delivery/XSL_sample_code_for_delivery/XSL_for_removing_log_stamps',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/XSL_sample_code_for_delivery/XSL_for_removing_interface_objects',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/XSL_sample_code_for_delivery/XSL_for_copying_only_ADMIN_users',
            },
            {
              type: 'doc',
              id: 'Continuous_delivery/XSL_sample_code_for_delivery/XSL_for_adding_schema_names',
            },
          ],
        },
        {
          type: 'category',
          label: 'Blend deploy scripts',
          link: {
            type: 'generated-index',
            title: 'Blend deploy scripts',
            slug: '/Continuous_delivery/Blend_deploy_scripts',
          },
          items: [
            {
              type: 'doc',
              id: 'Continuous_delivery/Blend_deploy_scripts/Blend_deploy_scripts',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Authoring',
      link: { type: 'generated-index', title: 'Authoring', slug: '/Authoring' },
      items: [
        {
          type: 'category',
          label: 'Proposition types',
          link: {
            type: 'generated-index',
            title: 'Proposition types',
            slug: '/Authoring/Proposition_types',
          },
          items: [
            {
              type: 'doc',
              id: 'Authoring/Proposition_types/Definitional_rules_and_business_jurisdiction_in_SBVR',
            },
            {
              type: 'doc',
              id: 'Authoring/Proposition_types/Fact_form_vs_guidance_form',
            },
            {
              type: 'doc',
              id: 'Authoring/Proposition_types/Motivations',
            },
          ],
        },
        {
          type: 'category',
          label: 'Definitions',
          link: {
            type: 'generated-index',
            title: 'Definitions',
            slug: '/Authoring/Definitions',
          },
          items: [
            {
              type: 'doc',
              id: 'Authoring/Definitions/What_is_a_definition',
            },
            {
              type: 'doc',
              id: 'Authoring/Definitions/Explanatory_vs_stipulative_definitions',
            },
            {
              type: 'doc',
              id: 'Authoring/Definitions/Definition_strategies',
            },
          ],
        },
        {
          type: 'category',
          label: 'Reasoning',
          link: {
            type: 'generated-index',
            title: 'Reasoning',
            slug: '/Authoring/Reasoning',
          },
          items: [
            {
              type: 'doc',
              id: 'Authoring/Reasoning/Reasoning_over_rules',
            },
            {
              type: 'doc',
              id: 'Authoring/Reasoning/Forward_chaining',
            },
            {
              type: 'doc',
              id: 'Authoring/Reasoning/Backward_chaining',
            },
            {
              type: 'doc',
              id: 'Authoring/Reasoning/Constraint_implementation',
            },
            {
              type: 'doc',
              id: 'Authoring/Reasoning/Practical_implications_of_reasoning_for_rule_authors',
            },
          ],
        },
        {
          type: 'category',
          label: 'Tips - Writing for USoft Studio',
          link: {
            type: 'generated-index',
            title: 'Tips - Writing for USoft Studio',
            slug: '/Authoring/Tips_-_Writing_for_USoft_Studio',
          },
          items: [
            {
              type: 'doc',
              id: 'Authoring/Tips_-_Writing_for_USoft_Studio/Rephrase_to_a_concept_that_USoft_Studio_recognises',
            },
          ],
        },
        {
          type: 'category',
          label: 'Tips - Good grammar and style pay off',
          link: {
            type: 'generated-index',
            title: 'Tips - Good grammar and style pay off',
            slug: '/Authoring/Tips_-_Good_grammar_and_style_pay_off',
          },
          items: [
            {
              type: 'doc',
              id: 'Authoring/Tips_-_Good_grammar_and_style_pay_off/Write_a_full_sentence',
            },
            {
              type: 'doc',
              id: 'Authoring/Tips_-_Good_grammar_and_style_pay_off/Keep_capital_letters_to_a_minimum',
            },
            {
              type: 'doc',
              id: 'Authoring/Tips_-_Good_grammar_and_style_pay_off/If_or_when',
            },
            {
              type: 'doc',
              id: 'Authoring/Tips_-_Good_grammar_and_style_pay_off/Use_the_present_tense',
            },
            {
              type: 'doc',
              id: 'Authoring/Tips_-_Good_grammar_and_style_pay_off/A_or_An',
            },
          ],
        },
        {
          type: 'category',
          label: 'Tips - Shorter is better',
          link: {
            type: 'generated-index',
            title: 'Tips - Shorter is better',
            slug: '/Authoring/Tips_-_Shorter_is_better',
          },
          items: [
            {
              type: 'doc',
              id: 'Authoring/Tips_-_Shorter_is_better/Prefer_who_or_that_over_if',
            },
            {
              type: 'doc',
              id: 'Authoring/Tips_-_Shorter_is_better/Avoid_spelling_out_unnecessary_context',
            },
            {
              type: 'doc',
              id: 'Authoring/Tips_-_Shorter_is_better/Avoid_double_negatives',
            },
            {
              type: 'doc',
              id: 'Authoring/Tips_-_Shorter_is_better/Avoid_emphasis',
            },
            {
              type: 'doc',
              id: 'Authoring/Tips_-_Shorter_is_better/Avoid_considered_as_treated_as',
            },
          ],
        },
        {
          type: 'category',
          label: 'Tips - Uniform is better',
          link: {
            type: 'generated-index',
            title: 'Tips - Uniform is better',
            slug: '/Authoring/Tips_-_Uniform_is_better',
          },
          items: [
            {
              type: 'doc',
              id: 'Authoring/Tips_-_Uniform_is_better/Use_must_and_may_as_a_matter_of_preference',
            },
            {
              type: 'doc',
              id: 'Authoring/Tips_-_Uniform_is_better/Prefer_a_as_the_standard_determiner_for_nouns',
            },
            {
              type: 'doc',
              id: 'Authoring/Tips_-_Uniform_is_better/Apply_fact_form_and_guidance_form_consistently',
            },
          ],
        },
        {
          type: 'category',
          label: 'Tips - Be definite',
          link: {
            type: 'generated-index',
            title: 'Tips - Be definite',
            slug: '/Authoring/Tips_-_Be_definite',
          },
          items: [
            {
              type: 'doc',
              id: 'Authoring/Tips_-_Be_definite/Avoid_uncertainty_and_unnecessary_nuances',
            },
            {
              type: 'doc',
              id: 'Authoring/Tips_-_Be_definite/Use_plain_words',
            },
            {
              type: 'doc',
              id: 'Authoring/Tips_-_Be_definite/Avoid_difficult_words',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'USoft for administrators',
      link: {
        type: 'generated-index',
        title: 'USoft for administrators',
        slug: '/USoft_for_administrators',
      },
      items: [
        {
          type: 'category',
          label: 'Understanding USoft',
          link: {
            type: 'generated-index',
            title: 'Understanding USoft',
            slug: '/USoft_for_administrators/Understanding_USoft',
          },
          items: [
            {
              type: 'doc',
              id: 'USoft_for_administrators/Understanding_USoft/Administrator_overview',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Understanding_USoft/Release_upgrade_and_maintenance_policy',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Understanding_USoft/Versioning_of_USoft_Developer',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Understanding_USoft/Log_files_and_temporary_files',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Understanding_USoft/USoft_registry_keys_on_Windows',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Understanding_USoft/Locating_USoft_application_flatfiles',
            },
          ],
        },
        {
          type: 'category',
          label: 'Installing USoft',
          link: {
            type: 'generated-index',
            title: 'Installing USoft',
            slug: '/USoft_for_administrators/Installing_USoft',
          },
          items: [
            {
              type: 'doc',
              id: 'USoft_for_administrators/Installing_USoft/Installation_overview',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Installing_USoft/Hardware_and_operating_system_requirements',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Installing_USoft/Oracle_requirements',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Installing_USoft/Microsoft_SQL_Server_requirements',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Installing_USoft/Installing_the_database_product',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Installing_USoft/Installing_Oracle_XE_21c_for_USoft',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Installing_USoft/Azure_SQL_databases',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Installing_USoft/ODBC_and_other_RDBMS_requirements',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Installing_USoft/Connecting_to_the_RDBMS',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Installing_USoft/Installing_USoft_Developer',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Installing_USoft/Silent_installation_of_USoft_Developer',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Installing_USoft/Installing_a_USoft_Rules_Service',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Installing_USoft/Configuring_IIS_for_USoft',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Installing_USoft/Browser_requirements',
            },
          ],
        },
        {
          type: 'category',
          label: 'Creating a USoft Development environment',
          link: {
            type: 'generated-index',
            title: 'Creating a USoft Development environment',
            slug: '/USoft_for_administrators/Creating_a_USoft_Development_environment',
          },
          items: [
            {
              type: 'doc',
              id: 'USoft_for_administrators/Creating_a_USoft_Development_environment/Creating_a_USoft_Development_environment',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Creating_a_USoft_Development_environment/Installing_a_USoft_Development_repository',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Creating_a_USoft_Development_environment/Creating_USoft_Authorizer_tables',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Creating_a_USoft_Development_environment/Creating_USoft_Definer_tables',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Creating_a_USoft_Development_environment/Creating_USoft_Benchmark_tables',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Creating_a_USoft_Development_environment/Creating_USoft_Service_Definer_tables',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Creating_a_USoft_Development_environment/Creating_USoft_Delivery_Manager_tables',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Creating_a_USoft_Development_environment/Authorising_team_members_for_USoft_91',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Creating_a_USoft_Development_environment/Authorising_team_members_for_USoft_100',
            },
          ],
        },
        {
          type: 'category',
          label: 'Creating a USoft Production environment',
          link: {
            type: 'generated-index',
            title: 'Creating a USoft Production environment',
            slug: '/USoft_for_administrators/Creating_a_USoft_Production_environment',
          },
          items: [
            {
              type: 'doc',
              id: 'USoft_for_administrators/Creating_a_USoft_Production_environment/Creating_a_USoft_Production_environment',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Creating_a_USoft_Production_environment/Creating_the_User_Application',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Creating_a_USoft_Production_environment/Creating_USoft_application_tables_in_the_database',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Creating_a_USoft_Production_environment/Installing_your_application_on_a_server',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Creating_a_USoft_Production_environment/Running_applications_in_the_Production_environment',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Creating_a_USoft_Production_environment/Running_a_USoft_application_from_a_Linux_container',
            },
          ],
        },
        {
          type: 'category',
          label: 'Maintaining a USoft Production environment',
          link: {
            type: 'generated-index',
            title: 'Maintaining a USoft Production environment',
            slug: '/USoft_for_administrators/Maintaining_a_USoft_Production_environment',
          },
          items: [
            {
              type: 'doc',
              id: 'USoft_for_administrators/Maintaining_a_USoft_Production_environment/Service_Framework_server_healthcheck',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Maintaining_a_USoft_Production_environment/Rules_Service_healthcheck',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Maintaining_a_USoft_Production_environment/Scaling',
            },
          ],
        },
        {
          type: 'category',
          label: 'USoft license management',
          link: {
            type: 'generated-index',
            title: 'USoft license management',
            slug: '/USoft_for_administrators/USoft_license_management',
          },
          items: [
            {
              type: 'doc',
              id: 'USoft_for_administrators/USoft_license_management/USoft_license_management',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/USoft_license_management/Terminology_used_in_license_management',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/USoft_license_management/Installing_a_serverbased_license',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/USoft_license_management/Installing_an_evaluation_license',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/USoft_license_management/Replacing_a_license_file',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/USoft_license_management/Checking_the_licensed_USoft_products',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/USoft_license_management/Troubleshooting_license_problems',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/USoft_license_management/FLEX_license_management_software',
            },
          ],
        },
        {
          type: 'category',
          label: 'USoft Binder',
          link: {
            type: 'generated-index',
            title: 'USoft Binder',
            slug: '/USoft_for_administrators/USoft_Binder',
          },
          items: [
            {
              type: 'doc',
              id: 'USoft_for_administrators/USoft_Binder/USoft_Binder_for_administrators',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/USoft_Binder/USoft_Binder_variables',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/USoft_Binder/USoft_Binder_separate_user_environment',
            },
          ],
        },
        {
          type: 'category',
          label: 'Upgrading to USoft 11',
          link: {
            type: 'generated-index',
            title: 'Upgrading to USoft 11',
            slug: '/USoft_for_administrators/Upgrading_to_USoft_11',
          },
          items: [
            {
              type: 'doc',
              id: 'USoft_for_administrators/Upgrading_to_USoft_11/Upgrading_to_USoft_110',
            },
          ],
        },
        {
          type: 'category',
          label: 'Upgrading to USoft 10',
          link: {
            type: 'generated-index',
            title: 'Upgrading to USoft 10',
            slug: '/USoft_for_administrators/Upgrading_to_USoft_10',
          },
          items: [
            {
              type: 'doc',
              id: 'USoft_for_administrators/Upgrading_to_USoft_10/Upgrading_to_USoft_101',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Upgrading_to_USoft_10/Upgrading_the_Development_environment_to_USoft_100',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Upgrading_to_USoft_10/Upgrading_the_Production_environment_to_USoft_100',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Upgrading_to_USoft_10/Upgrading_to_USoft_91',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Upgrading_to_USoft_10/How_to_make_violation_reports',
            },
          ],
        },
        {
          type: 'category',
          label: 'Uninstalling USoft',
          link: {
            type: 'generated-index',
            title: 'Uninstalling USoft',
            slug: '/USoft_for_administrators/Uninstalling_USoft',
          },
          items: [
            {
              type: 'doc',
              id: 'USoft_for_administrators/Uninstalling_USoft/Uninstalling_a_USoft_Rules_Service',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/Uninstalling_USoft/Uninstalling_USoft_Developer',
            },
          ],
        },
        {
          type: 'category',
          label: 'USoft command line syntax',
          link: {
            type: 'generated-index',
            title: 'USoft command line syntax',
            slug: '/USoft_for_administrators/USoft_command_line_syntax',
          },
          items: [
            {
              type: 'doc',
              id: 'USoft_for_administrators/USoft_command_line_syntax/creappexe',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/USoft_command_line_syntax/rulesserviceexe',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/USoft_command_line_syntax/runbatchexe',
            },
            {
              type: 'doc',
              id: 'USoft_for_administrators/USoft_command_line_syntax/usdexe',
            },
          ],
        },
      ],
    },
    // {
    //   type: 'autogenerated',
    //   dirName: '.', // '.' means the root of the docs folder
    // }
  ],
};

export default sidebars;
