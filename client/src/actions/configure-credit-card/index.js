import {
  doLoadCreditCardConfigurationStarted,
  doLoadCreditCardConfigurationSuccess,
  doLoadCreditCardConfigurationError,
  doSaveCreditCardConfigurationStarted,
  doSaveCreditCardConfigurationSuccess,
  doSaveCreditCardConfigurationError,
} from "./configure-credit-card";
import Services from "../../services";

export const loadCreditCardConfiguration = () => {
  return function loadCreditCardConfigurationAction(dispatch) {
    dispatch(doLoadCreditCardConfigurationStarted());
    return Services.APICallConfig.callAPIService("LOAD_CREDIT_CARD_CONFIG")
      .then((response) => {
        //console.log(response);
        dispatch(doLoadCreditCardConfigurationSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(doLoadCreditCardConfigurationError(error));
      });
  };
};

export const createCreditCardConfiguration = (configurationData) => {
  return function createCreditCardConfigurationAction(dispatch) {
    dispatch(doSaveCreditCardConfigurationStarted());

    return Services.APICallConfig.callAPIService(
      "SAVE_CREDIT_CARD_CONFIG",
      configurationData
    )
      .then((response) => {
        dispatch(doSaveCreditCardConfigurationSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(doSaveCreditCardConfigurationError(error));
      });
  };
};
