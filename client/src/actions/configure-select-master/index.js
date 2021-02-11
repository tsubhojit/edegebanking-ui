import {
  doLoadSelectMasterStarted,
  doLoadSelectMasterSuccess,
  doLoadSelectMasterError,
  doSaveSelectMasterStarted,
  doSaveSelectMasterSuccess,
  doSaveSelectMasterError,
} from "./configure-select-master";
import Services from "../../services";

export const loadSelectMasterConfiguration = () => {
  return function loadSelectMasterConfigurationAction(dispatch) {
    dispatch(doLoadSelectMasterStarted());
    return Services.APICallConfig.callAPIService("LOAD_SELECT_MASTER_CONFIG")
      .then((response) => {
        // console.log("Response");
        // console.log(response);
        dispatch(doLoadSelectMasterSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(doLoadSelectMasterError(error));
      });
  };
};

export const saveSelectMasterConfiguration = (configurationData) => {
  return function saveSelectMasterConfigurationAction(dispatch) {
    dispatch(doSaveSelectMasterStarted());

    return Services.APICallConfig.callAPIService(
      "SAVE_SELECT_MASTER_CONFIG",
      configurationData
    )
      .then((response) => {
        dispatch(doSaveSelectMasterSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(doSaveSelectMasterError(error));
      });
  };
};
