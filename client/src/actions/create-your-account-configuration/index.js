import {
  doLoadCreateYourAccountConfigurationStarted,
  doLoadCreateYourAccountConfigurationSuccess,
  doLoadCreateYourAccountConfigurationError,
  doSaveCreateYourAccountConfigurationStarted,
  doSaveCreateYourAccountConfigurationSuccess,
  doSaveCreateYourAccountConfigurationError,
} from "./create-your-account-configuration";
import Services from "../../services";
//import createYourAccountConfigurationSchema from "../../data-models-json/create-your-account-configuration-schema_test.json";

export const loadCreateYourAccountConfiguration = () => {
  return function loadCreateYourAccountConfigurationAction(dispatch) {
    //console.log(createYourAccountConfigurationSchema);
    // dispatch(doLoadCreateYourAccountConfigurationStarted());
    // dispatch(
    //   doLoadCreateYourAccountConfigurationSuccess(
    //     createYourAccountConfigurationSchema
    //   )
    // );
    dispatch(doLoadCreateYourAccountConfigurationStarted());
    return Services.APICallConfig.callAPIService(
      "LOAD_CREATE_YOUR_ACCOUNT_CONFIG"
    )
      .then((response) => {
        dispatch(doLoadCreateYourAccountConfigurationSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(doLoadCreateYourAccountConfigurationError(error));
      });
  };
};

export const createYourAccountConfiguration = (configurationData) => {
  return function createYourAccountConfigurationAction(dispatch) {
    dispatch(doSaveCreateYourAccountConfigurationStarted());

    return Services.APICallConfig.callAPIService(
      "SAVE_CREATE_YOUR_ACCOUNT_CONFIG",
      configurationData
    )
      .then((response) => {
        dispatch(doSaveCreateYourAccountConfigurationSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(doSaveCreateYourAccountConfigurationError(error));
      });
  };
};
