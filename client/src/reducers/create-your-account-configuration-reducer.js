import {
  LOAD_CREATE_YOUR_ACCOUNT_CONFIGURATION_STARTED,
  LOAD_CREATE_YOUR_ACCOUNT_CONFIGURATION_SUCCESS,
  LOAD_CREATE_YOUR_ACCOUNT_CONFIGURATION_ERROR,
  SAVE_CREATE_YOUR_ACCOUNT_CONFIGURATION_STARTED,
  SAVE_CREATE_YOUR_ACCOUNT_CONFIGURATION_SUCCESS,
  SAVE_CREATE_YOUR_ACCOUNT_CONFIGURATION_ERROR,
} from "../actions/create-your-account-configuration/type";

const defaultState = {
  createYourAccountConfigData: [],
  isLoading: false,
  isError: false,
  error: "",
};

const CreateYourAccountConfigationReducer = (
  state = JSON.parse(JSON.stringify(defaultState)),
  action
) => {
  switch (action.type) {
    case LOAD_CREATE_YOUR_ACCOUNT_CONFIGURATION_STARTED:
    case SAVE_CREATE_YOUR_ACCOUNT_CONFIGURATION_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_CREATE_YOUR_ACCOUNT_CONFIGURATION_ERROR:
    case SAVE_CREATE_YOUR_ACCOUNT_CONFIGURATION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case LOAD_CREATE_YOUR_ACCOUNT_CONFIGURATION_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        createYourAccountConfigData: action.payload,
      };
    case SAVE_CREATE_YOUR_ACCOUNT_CONFIGURATION_SUCCESS:
      return {
        ...state,
        createYourAccountConfigResponseData: action.payload,
      };
    default:
      return state;
  }
};

export default CreateYourAccountConfigationReducer;
