import {
  doLoadChequebookStarted,
  doLoadChequebookSuccess,
  doLoadChequebookError,
  doSaveChequebookStarted,
  doSaveChequebookSuccess,
  doSaveChequebookError,
} from "./chequebook";
import Services from "../../services";

export const loadChequebookSchema = (loadData) => {
  return function doChequebookAction(dispatch) {
    dispatch(doLoadChequebookStarted());
    return Services.APICallConfig.callAPIService("LOAD_CHEQUE_BOOK", loadData)
      .then((response) => {
        dispatch(doLoadChequebookSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(doLoadChequebookError(error));
      });
  };
};

export const doSaveChequebook = (accountData) => {
  return function doSaveChequebookAction(dispatch) {
    dispatch(doSaveChequebookStarted());

    return Services.APICallConfig.callAPIService(
      "SAVE_CHEQUE_BOOK",
      accountData
    )
      .then((response) => {
        dispatch(doSaveChequebookSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(doSaveChequebookError(error));
      });
  };
};
