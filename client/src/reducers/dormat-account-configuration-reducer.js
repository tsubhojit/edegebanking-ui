import {
  LOAD_DORMAT_ACCOUNT_CONFIGURATION_STARTED,
  LOAD_DORMAT_ACCOUNT_CONFIGURATION_SUCCESS,
  LOAD_DORMAT_ACCOUNT_CONFIGURATION_ERROR,
  SAVE_DORMAT_ACCOUNT_CONFIGURATION_STARTED,
  SAVE_DORMAT_ACCOUNT_CONFIGURATION_SUCCESS,
  SAVE_DORMAT_ACCOUNT_CONFIGURATION_ERROR,
} from "../actions/configure-dormat-account/type";

const defaultState = {
  dormatAccountConfigData: [],
  isLoading: false,
  isError: false,
  error: "",
};

const DormatAccountConfigurationReducer = (
  state = JSON.parse(JSON.stringify(defaultState)),
  action
) => {
  switch (action.type) {
    case LOAD_DORMAT_ACCOUNT_CONFIGURATION_STARTED:
    case SAVE_DORMAT_ACCOUNT_CONFIGURATION_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_DORMAT_ACCOUNT_CONFIGURATION_ERROR:
    case SAVE_DORMAT_ACCOUNT_CONFIGURATION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case LOAD_DORMAT_ACCOUNT_CONFIGURATION_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        dormatAccountConfigData: action.payload,
      };
    case SAVE_DORMAT_ACCOUNT_CONFIGURATION_SUCCESS:
      return {
        ...state,
        dormatAccountConfigResponseData: action.payload,
      };
    default:
      return state;
  }
};

export default DormatAccountConfigurationReducer;
