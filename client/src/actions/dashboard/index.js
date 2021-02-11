import {
  loadBarDetailsStarted,
  loadBarDetailsSuccess,
  loadBarDetailsError,
  loadDormantBarDetailsStarted,
  loadDormantBarDetailsSuccess,
  loadDormantBarDetailsError,
  loadChequebookBarDetailsStarted,
  loadChequebookBarDetailsSuccess,
  loadChequebookBarDetailsError,
  loadCreditCardBarDetailsStarted,
  loadCreditCardBarDetailsSuccess,
  loadCreditCardBarDetailsError,
} from "./dasboard";
import Services from "../../services";

export const loadBarData = () => {
  return function loadBarDataAction(dispatch) {
    dispatch(loadBarDetailsStarted());
    return Services.APICallConfig.callAPIService("LOAD_BAR_DATA")
      .then((response) => {
        dispatch(loadBarDetailsSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(loadBarDetailsError(error));
      });
  };
};

export const loadDormantBarData = () => {
  return function loadDormantBarDataAction(dispatch) {
    dispatch(loadDormantBarDetailsStarted());
    return Services.APICallConfig.callAPIService("LOAD_DORMANT_BAR_DATA")
      .then((response) => {
        dispatch(loadDormantBarDetailsSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(loadDormantBarDetailsError(error));
      });
  };
};

export const loadChequebookBarData = () => {
  return function loadChequebookBarDataAction(dispatch) {
    dispatch(loadChequebookBarDetailsStarted());
    return Services.APICallConfig.callAPIService("LOAD_CHEQUEBOOK_BAR_DATA")
      .then((response) => {
        dispatch(loadChequebookBarDetailsSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(loadChequebookBarDetailsError(error));
      });
  };
};

export const loadCreditCardBarData = () => {
  return function loadCreditCardBarDataAction(dispatch) {
    dispatch(loadCreditCardBarDetailsStarted());
    return Services.APICallConfig.callAPIService("LOAD_CREDIT_CARD_BAR_DATA")
      .then((response) => {
        dispatch(loadCreditCardBarDetailsSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(loadCreditCardBarDetailsError(error));
      });
  };
};
