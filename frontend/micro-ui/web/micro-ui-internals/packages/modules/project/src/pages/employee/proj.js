import { Loader, FormComposerV2 } from "@egovernments/digit-ui-react-components";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
// import { Urls } from "../../../../../libraries/src/services/atoms/urls";


export const newConfig = [
  
  {
    head: "Project details",
    body: [
      {
        inline: true,
        label: "Project Sanction Date",
        isMandatory: false,
        description: "Please enter Sanction Date",
        type: "date",
        disable: false,
        populators: { name: "dateOfProposal", error: "Required", validation: { required: true } },
      },
      {
        inline: true,
        label: "Project Name",
        isMandatory: true,
        type: "text",
        disable: false,
        populators: { name: "name", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
      {
        key:"d",
        inline: true,
        label: "id",
        isMandatory: true,
        type: "number",
        disable: false,
        populators: { name: "id", error: "Required", validation: { pattern: /^[0-9]*$/i } },
      },
      {
        key:"parentId",
        inline: true,
        label: "parentId",
        isMandatory: true,
        type: "number",
        disable: false,
        populators: { name: "parentId", error: "Required", validation: { pattern: /^[0-9]*$/i } },
      },
      {
        key:"description",
        inline: true,
        label: "Project Description",
        isMandatory: true,
        type: "textarea",
        disable: false,
        populators: { name: "description", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
      },
    
  
      {
        label: "File Reference Number",
        isMandatory: true,
        key: "referenceID",
        type: "number",
        disable: false,
        populators: { name: "referenceID", error: "sample error message", validation: { pattern: /^[0-9]*$/i },
      },
    },
      // {
        
      //     label: "Project Type",
      //     type: "dropdown",
      //     isMandatory: false,
      //     disable: false,
      //     populators: {
      //       name: "projectType",
      //       optionsKey:"name",
      //       required : false,
      //       // type: "wards",
      //       // options: [
      //       //   { code: "Mini Park", name: "Mini Park" },
              
      //       // ],
      //       mdmsConfig:{
      //         masterName:"ProjectType",
      //         moduleName:"works",
      //         localeprefix:"COMMON_MASTERS"
      //       }
      //       // defaultText: "COMMON_SELECT_WARD",
      //       // selectedText: "COMMON_SELECTED",
      //     },
      //   },
      {
        isMandatory:true,
        key:"projectTypes",
        disable:false,
        label:"Project Type",
        type:"radioordropdown",
        populators:{
          name:"projectTypes",
          optionsKey:"name",
          required:true,
          // mdmsConfig:{
          //   masterName:"ProjectType",
          //   moduleName:"works",
          //   localePrefix:"COMMON_MASTERS",
          // }
          options: [
            { code: "Mini Park", name: "Mini Park" },
            { code: "Child Play Station", name: "Child Play Station" },
            { code: "Open Air Gym", name: "Open Air Gym" },
            { code: "Water Body", name: "Water Body" },
            { code: "Walking Track", name: "Walking Track" },
            { code: "Playground", name: "Playground" },
            { code: "Loo", name: "Loo" },
            { code: "Vending Zone", name: "Vending Zone" }]
        },
      },
      
        {
          key:"estimatedCostInRs",
          inline: true,
          label: "Estimated Cost (₹)",
          isMandatory: true,
          type: "number",
          disable: false,
          populators: { name: "estimatedCostInRs", error: "Required", validation: { pattern: /^[0-9]*$/i } },
        },
        {
          key:"address",
          inline: true,
          label: "Locality",
          isMandatory: true,
          type: "text",
          disable: false,
          populators: { name: "address", error: "Required", validation: { pattern: /^[A-Za-z]+$/i } },
        },
      {
        key:"targetDemography",
        label: "Target Demography",
        type: "radioordropdown",
        isMandatory: false,
        disable: false,
        populators: {
          name: "targetDemography",
          optionsKey: "name",
          required: true,
          options: [
            { code: "Slum", name: "Slum" },
            { code: "Area inhabited by SC", name: "Area inhabited by SC" },
            { code: "Area inhabited by ST", name: "Area inhabited by ST" },
            { code: "Area inhabited by Minorities", name: "Area inhabited by Minorities" },

          ]
          // allowMultiSelect: false,
        },
      },

      {
        label: "Ward",
        type: "locationdropdown",
        isMandatory: false,
        disable: false,
        populators: {
          name: "ward",
          type: "ward",
          optionsKey: "i18nKey",
          defaultText: "COMMON_SELECT_WARD",
          selectedText: "COMMON_SELECTED",
          allowMultiSelect: false,
        },
      },
    ],
  },
];
  
 const Create = () => {
  const tenantId = Digit.ULBService.getCurrentTenantId();
  const { t } = useTranslation();
 

  const reqCriteriaCreate = {
      url: `/project/v1/_create`,
      params: { },
      body: {
  
          
        
      },
      config: {
        enabled: true,
        select: (data) => data?.Employees?.map((e) => ({ code: e?.code, name: e?.user?.name })),
      },

    };

   const mutation = Digit.Hooks.useCustomAPIMutationHook(reqCriteriaCreate);
   const history = useHistory();
 
    const onSubmit = (data) => {
    console.log(data, "data");
    const onSuccess = (resp) => {
      if (resp) {
        console.log("successful", resp);
        history.push(`/${window.contextPath}/employee/project/response?&isSuccess=true`, { message: "TE_CREATION_SUCCESS" });
        console.log(history, "history")
      }
    };
    
    const onError = (resp) => {
      if (resp && resp.ResponseInfo && resp.ResponseInfo.length>0) {
        console.log("giving errors", resp);
        history.push(`/${window.contextPath}/employee/project/response?isSuccess=false`, { message: "TE_CREATION_FAILED" });
        console.log(history, "error history")
      }
    };
    
    


    mutation.mutate(
      {
        params: {},
        body: {"Projects":
        [{
          "tenantId": tenantId,
          "id":data.id,
          "name": data.name,
          "projectType": data.projectTypes.code,
          "projectSubType": "",
          "department": "",
          "description": data.description,
          "referenceID": "",
          "documents": [],
          "address":{ },
          "isTaskEnabled": false,
          "parentId": data.parentId,
          "additionalDetails": {
            "estimatedCostInRs": data.estimatedCostInRs
          },
          "dateOfProposal": data.dateOfProposal,
        }]
          },
          apiOperation: "CREATE"
        },
      
      {
        onSuccess,
        onError,
      }
    );
  }
    const configs = newConfig ? newConfig : newConfig;

    return (
      <FormComposerV2
        heading={t("Create New Project")}
        label={t("Submit Bar")}
        // description={"Description"}
        //text={"Sample Text if required"}
        config={configs.map((config) => {
          return {
            ...config,
            body: config.body.filter((a) => !a.hideInEmployee),
          };
        })}
        defaultValues={{}}
        onSubmit={onSubmit}
        fieldStyle={{ marginRight: 0 }}
      />
    );
  
  };



export default Create;
