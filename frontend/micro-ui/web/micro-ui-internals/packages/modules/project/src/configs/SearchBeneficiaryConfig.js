
const SearchBeneficiaryConfig = () => {
    return {
      label: "SEARCH_BENEFICIARY",
      type: "search",
      apiDetails: {
        serviceName: "project/beneficiary/v1/_search",
        requestParam: {
            limit:100,
            offset:0,
            tenantId:"mz"
        },
        requestBody: {
            
                ProjectBeneficiary: {
                    id: [
                        ""
                    ],
                    clientReferenceId: [
                        ""
                    ],
                    projectId: "",
                    beneficiaryId: "",
                    dateOfRegistration: ""
                },
                        
                    // apiOperation: "SEARCH",
                    limit:100,
                    offset:0,
                    tenantId:"mz",
                    includeDeleted:true
                    
                    },
        minParametersForSearchForm: 1,
      masterName: "commonUiConfig",
      moduleName: "SearchProjectBeneficiaryConfig",
      tableFormJsonPath: "requestParam",
      filterFormJsonPath: "requestBody.ProjectBeneficiary",
      searchFormJsonPath: "requestBody.ProjectBeneficiary",
       
      },
      sections: {
        search: {
          uiConfig: {
            headerStyle: null,
            primaryLabel: "ES_COMMON_SEARCH",
            secondaryLabel: "ES_COMMON_CLEAR_SEARCH",
            minReqFields: 1,
            formClassName: "custom-both-clear-search",
            defaultValues:  {
              id: [
                ""
            ],
            clientReferenceId: [
                ""
            ],
            projectId: "",
            beneficiaryId: "",
            dateOfRegistration: ""
            },
            fields: [
             
              {
                key:"ID",
                label: "ID",
                type: "text",
                isMandatory: true,
                disable: false,
                preProcess: {
                  convertStringToRegEx: ["populators.validation.pattern"],
                },
                populators: {
                  name: "id",
                  error: "PROJECT_PATTERN_ERR_MSG",
                  validation: {
                    pattern: '^[^\\$"<>?\\\\~`!@$%^()+={}\\[\\]*:;“”‘’]{1,50}$',
                   
                  },
                },
            },
              {
                key:"CLIENT_REFERENCE_ID",
                label: "CLIENT_REFERENCE_ID",
                type: "text",
                isMandatory: false,
                disable: false,
                preProcess: {
                  convertStringToRegEx: ["populators.validation.pattern"],
                },
                populators: {
                  name: "clientReferenceId",
                  error: "COMMON_PATTERN_ERR_MSG_MUSTER_ID",
                  validation: {
                    pattern: '^[^\\$"<>?\\\\~`!@$%^()+={}\\[\\]*:;“”‘’]{1,50}$',
                    
                  },
                },
              },
              {
                key:"PROJECT_ID",
                label: "PROJECT_ID",
                type: "text",
                isMandatory: false,
                disable: false,
                preProcess: {
                  convertStringToRegEx: ["populators.validation.pattern"],
                },
                populators: {
                  name: "projectId",
                  error: "COMMON_PATTERN_ERR_MSG_MUSTER_ID",
                  validation: {
                    pattern: '^[^\\$"<>?\\\\~`!@$%^()+={}\\[\\]*:;“”‘’]{1,50}$',
                    
                  },
                },
              },
              {
                key:"BENEFICIARY_ID",
                label: "BENEFICIARY_ID",
                type: "text",
                isMandatory: false,
                disable: false,
                preProcess: {
                  convertStringToRegEx: ["populators.validation.pattern"],
                },
                populators: {
                  name: "beneficiaryId",
                  error: "COMMON_PATTERN_ERR_MSG_MUSTER_ID",
                  validation: {
                    pattern: '^[^\\$"<>?\\\\~`!@$%^()+={}\\[\\]*:;“”‘’]{1,50}$',
                    
                  },
                },
              },
              {
                key:"REGISTRATION_DATE",
                label: "REGISTRATION_DATE",
                type: "date",
                isMandatory: false,
                disable: false,
               
                populators: {
                  name: "dateOfRegistration",
                  error: "COMMON_PATTERN_ERR_MSG_MUSTER_ID",
                  validation: {
                    required:true
                  },
                },
              }, 
               
            
             
            ],
          },
          label: "",
          children: {},
          show: true,
        },
        searchResult: {
          label: "",
         
          uiConfig: {
            columns: [
              {
                label: "ID",
                jsonPath: "id",
                
              },
              {
                label: "CLIENT_REFERENCE_ID",
                jsonPath: "clientReferenceId",
              
              },
              {
                label: "PROJECT_ID",
                jsonPath: "projectId",
             
              },
              {
                label: "BENEFICIARY_ID",
                jsonPath: "beneficiaryId",
              },
              {
                label: "REGISTRATION_DATE",
                jsonPath: "dateOfRegistration",
              },
             
            ],
            enableGlobalSearch: false,
            enableColumnSort: true,
            resultsJsonPath: "ProjectBeneficiary",
          },
          children: {},
          show: true,
        },
      },
      additionalSections: {},
    };
}

export default SearchBeneficiaryConfig;