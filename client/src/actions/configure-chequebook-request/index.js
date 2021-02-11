import {
  doLoadChequebookConfigurationStarted,
  doLoadChequebookConfigurationSuccess,
  doLoadChequebookConfigurationError,
  doSaveChequebookConfigurationStarted,
  doSaveChequebookConfigurationSuccess,
  doSaveChequebookConfigurationError,
} from "./configure-chequebook-request";
import Services from "../../services";

export const loadChequebookConfiguration = () => {
  return function loadChequebookConfigurationAction(dispatch) {
    dispatch(doLoadChequebookConfigurationStarted());
    return Services.APICallConfig.callAPIService("LOAD_CHEQUEBOOK_CONFIG")
      .then((response) => {
        dispatch(doLoadChequebookConfigurationSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(doLoadChequebookConfigurationError(error));
      });
  };
};

export const createChequebookConfiguration = (configurationData) => {
  return function createChequebookConfigurationAction(dispatch) {
    dispatch(doSaveChequebookConfigurationStarted());

    return Services.APICallConfig.callAPIService(
      "SAVE_CHEQUEBOOK_CONFIG",
      configurationData
    )
      .then((response) => {
        dispatch(doSaveChequebookConfigurationSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(doSaveChequebookConfigurationError(error));
      });
  };
};
