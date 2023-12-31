
const SearchProductVarConfig = () => {
    return {
      label: "SEARCH_PRODUCT_VAR",
      type: "search",
      apiDetails: {
        serviceName: "/product/variant/v1/_search",
       
        requestParam: {
            limit:10,
            offset:0,
            tenantId:"mz"
            
        },
        requestBody: {
            tenantId:"mz",
            ProductVariant: 
            {
                sku: "",
                variation: "",
                ids: [ "" ],
                productId: ""
                
            },
            
        //   apiOperation: "SEARCH",
        //   limit:10,
        //   offset:0,
        //   tenantId:"mz"
          
        },
        minParametersForSearchForm: 0,
      masterName: "commonUiConfig",
      moduleName: "SearchProductVariantConfig",
      tableFormJsonPath: "requestParam",
      filterFormJsonPath: "requestBody.ProductVariant",
      searchFormJsonPath: "requestBody.ProductVariant",
       
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
                sku: "",
                variation: "",
                ids: [ "" ],
                productId: ""
            },
            fields: [
             
              {
                key:"PRODUCT_SKU",
                label: "PRODUCT_SKU",
                type: "text",
                isMandatory: false,
                disable: false,
                preProcess: {
                  convertStringToRegEx: ["populators.validation.pattern"],
                },
                populators: {
                  name: "sku",
                  error: "PROJECT_PATTERN_ERR_MSG",
                  validation: {
                    pattern: '^[^\\$"<>?\\\\~`!@$%^()+={}\\[\\]*:;“”‘’]{1,100}$',
                   
                  },
                },
            },
              {
                key:"PRODUCT_VARIATION",
                label: "PRODUCT_VARIATION",
                type: "text",
                isMandatory: false,
                disable: false,
                preProcess: {
                  convertStringToRegEx: ["populators.validation.pattern"],
                },
                populators: {
                  name: "variation",
                  error: "COMMON_PATTERN_ERR_MSG_MUSTER_ID",
                  validation: {
                    pattern: '^[^\\$"<>?\\\\~`!@$%^()+={}\\[\\]*:;“”‘’]{1,100}$',
                    
                  },
                },
              },
              {
                key:"PRODUCT_IDS",
                label: "PRODUCT_IDS",
                type: "text",
                isMandatory: false,
                disable: false,
                preProcess: {
                  convertStringToRegEx: ["populators.validation.pattern"],
                },
                populators: {
                  name: "ids",
                  error: "COMMON_PATTERN_ERR_MSG_MUSTER_ID",
                  validation: {
                    pattern: '^[^\\$"<>?\\\\~`!@$%^()+={}\\[\\]*:;“”‘’]{1,100}$',
                    
                  },
                },
              },
              {
                key:"PRODUCT_ID",
                label: "PRODUCT_ID",
                type: "text",
                isMandatory: false,
                disable: false,
                preProcess: {
                  convertStringToRegEx: ["populators.validation.pattern"],
                },
                populators: {
                  name: "productId",
                  error: "COMMON_PATTERN_ERR_MSG_MUSTER_ID",
                  validation: {
                    pattern: '^[^\\$"<>?\\\\~`!@$%^()+={}\\[\\]*:;“”‘’]{1,100}$',
                    
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
          label: "ProductVariant",
         
          uiConfig: {
            columns: [
              {
                label: "PRODUCT_SKU",
                jsonPath: "sku",
                
              },
              {
                label: "PRODUCT_VARIATION",
                jsonPath: "variation",
              
              },
              {
                label: "PRODUCT_IDS",
                jsonPath: "ids",
             
              },
              {
                label: "PRODUCT_ID",
                jsonPath: "productId",
              },
             
            ],
            enableGlobalSearch: false,
            enableColumnSort: true,
            resultsJsonPath: "ProductVariant",
          },
          children: {},
          show: true,
        },
      },
      additionalSections: {},
    };
}

export default SearchProductVarConfig;