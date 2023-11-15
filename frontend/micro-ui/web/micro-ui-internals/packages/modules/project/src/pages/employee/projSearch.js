import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Header, InboxSearchComposer, Loader, Button, AddFilled } from "@egovernments/digit-ui-react-components";
// import searchConfig from "../../configs/searchConfig";
import { useHistory, useLocation } from "react-router-dom";

const ProjectSearch = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();

  // const wageSeekerSession = Digit.Hooks.useSessionStorage("WAGE_SEEKER_CREATE", {});
  // const [sesionFormData, clearSessionFormData] = wageSeekerSession;

  const configModuleName = Digit.Utils.getConfigModuleName();
  const tenant = Digit.ULBService.getStateId();
  const { isLoading, data } = Digit.Hooks.useCustomMDMS(
      tenant,
      configModuleName,
   [
    {
      name: "SearchProjectConfig",
    },
  ],

  {
    select: (data) => {
        return data?.[Digit.Utils.getConfigModuleName()]?.SearchProjectConfig?.[0];
    },
  }
  )
  {
  // const mutation = Digit.Hooks.useCustomAPIMutationHook(reqCriteriaCreate);

  // const [dept, setDept] = useState("");
  // const requestCriteria = {
  //   url: "/egov-hrms/employees/_search",
  //   body: {},
  //   params: {
  //     // tenantId:tenantId,
  //     tenantId: "pg.citya",
  //     limit: 10,
  //     offset: 0,
  //     sortOrder: "ASC",
  //     // departments: ADM
  //     // roles: SYSTEM,EMPLOYEE
  // //   },
  //   config: {
  //     select: (data) => data?.Employees?.map((e) => ({ code: e?.code, name: e?.user?.name })),
    
  
  // const requestCriteria1 = {
  //   url:  Urls.searchproj.search ,
  //   body: {},
  //   changeQueryName: `custom-${dept}`,
  //   params: {
  //     // tenantId:tenantId,
  //     tenantId: "pg.citya",
  //     limit: 10,
  //     offset: 0,
  //     sortOrder: "ASC",
  //     departments: dept,
  //     // roles: SYSTEM,EMPLOYEE
  //   },
  //   config: {
  //     enabled: dept?.length > 0,
  //     cacheTime: 0,
  //     select: (data) => data?.Employees?.map((e) => ({ code: e?.code, name: e?.user?.name })),
  //   },
  // // };
  // const {  data: empData = [] } = Digit.Hooks.useCustomAPIHook(requestCriteria1);
  // const { isLoading: isLoadingEmpData, data: filteredEmpData = [], revalidate } = Digit.Hooks.useCustomAPIHook(requestCriteria1);

  // console.log(empData, "empData", filteredEmpData);
  }
  let configs = useMemo(
    () => Digit.Utils.preProcessMDMSConfigInboxSearch(t, data, "sections.search.uiConfig.fields",{
      updateDependent : [
        {
          key : "createdFrom",
          value : [new Date().toISOString().split("T")[0]]
        },
        {
          key : "createdTo",
          value : [new Date().toISOString().split("T")[0]]
        }
      ]
    }
    ),[data]);
    // ),[]);


  useEffect(() => {
    if (!window.location.href.includes("create-project") && sesionFormData && Object.keys(sesionFormData) !== 0) {
      clearSessionFormData();
    }
  }, [location]);
  
  if (isLoading) return <Loader />;
  return (
    <React.Fragment>
      <div className=""search >
        <Header className="Search">Project Search</Header>
        {Digit.Utils.didEmployeeHasRole(configs?.actionRole)}
      </div>
      <div className="inbox-search-wrapper">
        <InboxSearchComposer configs={configs}></InboxSearchComposer>
      </div>
    </React.Fragment>
  );
          }
export default ProjectSearch;
