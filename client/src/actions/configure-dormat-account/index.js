import {
  doLoadDormatAccountConfigurationStarted,
  doLoadDormatAccountConfigurationSuccess,
  doLoadDormatAccountConfigurationError,
  doSaveDormatAccountConfigurationStarted,
  doSaveDormatAccountConfigurationSuccess,
  doSaveDormatAccountConfigurationError,
} from "./configure-dormat-account";
import Services from "../../services";

export const loadDormatAccountConfiguration = () => {
  return function loadDormatAccountConfigurationAction(dispatch) {
    dispatch(doLoadDormatAccountConfigurationStarted());
    return Services.APICallConfig.callAPIService("LOAD_DORMAT_ACCOUNT_CONFIG")
      .then((response) => {
        dispatch(doLoadDormatAccountConfigurationSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(doLoadDormatAccountConfigurationError(error));
      });
  };
};

export const createDormatAccountConfiguration = (configurationData) => {
  return function createDormatAccountConfigurationAction(dispatch) {
    dispatch(doSaveDormatAccountConfigurationStarted());

    return Services.APICallConfig.callAPIService(
      "SAVE_DORMAT_ACCOUNT_CONFIG",
      configurationData
    )
      .then((response) => {
        dispatch(doSaveDormatAccountConfigurationSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(doSaveDormatAccountConfigurationError(error));
      });
  };
};
