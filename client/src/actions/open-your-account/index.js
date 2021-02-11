import {
  doLoadOpenYourAccountStarted,
  doLoadOpenYourAccountSuccess,
  doLoadOpenYourAccountError,
  doOpenYourAccountStarted,
  doOpenYourAccountSuccess,
  doOpenYourAccountError,
} from "./open-your-account";
import Services from "../../services";
import openYourAccountSchema from "../../data-models-json/open-account-schema_test.json";

export const loadOpenYourAccountSchema = (loadData) => {
  return function doOpenYourAccountAction(dispatch) {
    // dispatch(doLoadOpenYourAccountStarted());
    // dispatch(doLoadOpenYourAccountSuccess(openYourAccountSchema));
    dispatch(doLoadOpenYourAccountStarted());
    return Services.APICallConfig.callAPIService(
      "LOAD_OPEN_YOUR_ACCOUNT",
      loadData
    )
      .then((response) => {
        dispatch(doLoadOpenYourAccountSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(doLoadOpenYourAccountError(error));
      });
  };
};

export const openYourAccount = (accountData) => {
  return function doOpenYourAccountAction(dispatch) {
    dispatch(doOpenYourAccountStarted());

    return Services.APICallConfig.callAPIService(
      "OPEN_YOUR_ACCOUNT",
      accountData
    )
      .then((response) => {
        dispatch(doOpenYourAccountSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(doOpenYourAccountError(error));
      });
  };
};
