import {
  doLoadCreditCardStarted,
  doLoadCreditCardSuccess,
  doLoadCreditCardError,
  doSaveCreditCardStarted,
  doSaveCreditCardSuccess,
  doSaveCreditCardError,
} from "./credit-card";
import Services from "../../services";

export const loadCreditCardSchema = (loadData) => {
  return function doCreditCardAction(dispatch) {
    dispatch(doLoadCreditCardStarted());
    return Services.APICallConfig.callAPIService("LOAD_CREDIT_CARD", loadData)
      .then((response) => {
        //console.log(response);
        dispatch(doLoadCreditCardSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(doLoadCreditCardError(error));
      });
  };
};

export const doSaveCreditCard = (accountData) => {
  return function doSaveCreditCardAction(dispatch) {
    dispatch(doSaveCreditCardStarted());

    return Services.APICallConfig.callAPIService(
      "SAVE_CREDIT_CARD",
      accountData
    )
      .then((response) => {
        dispatch(doSaveCreditCardSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(doSaveCreditCardError(error));
      });
  };
};
