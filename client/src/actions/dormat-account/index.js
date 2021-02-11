import {
  doLoadDormatAccountStarted,
  doLoadDormatAccountSuccess,
  doLoadDormatAccountError,
  doSaveDormatAccountStarted,
  doSaveDormatAccountSuccess,
  doSaveDormatAccountError,
} from "./dormat-account";
import Services from "../../services";

export const loadDormatAccountSchema = (loadData) => {
  return function doDormatAccountAction(dispatch) {
    dispatch(doLoadDormatAccountStarted());
    return Services.APICallConfig.callAPIService(
      "LOAD_DORMAT_ACCOUNT",
      loadData
    )
      .then((response) => {
        //console.log(response);
        dispatch(doLoadDormatAccountSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(doLoadDormatAccountError(error));
      });
  };
};

export const doSaveDormatAccount = (accountData) => {
  return function doSaveDormatAccountAction(dispatch) {
    dispatch(doSaveDormatAccountStarted());

    return Services.APICallConfig.callAPIService(
      "SAVE_DORMAT_ACCOUNT",
      accountData
    )
      .then((response) => {
        dispatch(doSaveDormatAccountSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(doSaveDormatAccountError(error));
      });
  };
};
