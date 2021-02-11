import {
  LOAD_OPEN_YOUR_ACCOUNT_STARTED,
  LOAD_OPEN_YOUR_ACCOUNT_SUCCESS,
  LOAD_OPEN_YOUR_ACCOUNT_ERROR,
  OPEN_YOUR_ACCOUNT_STARTED,
  OPEN_YOUR_ACCOUNT_SUCCESS,
  OPEN_YOUR_ACCOUNT_ERROR,
} from "../actions/open-your-account/type";

const defaultState = {
  openYourAccountData: [],
  isLoading: false,
  isError: false,
  error: "",
};

const OpenAccountReducer = (
  state = JSON.parse(JSON.stringify(defaultState)),
  action
) => {
  switch (action.type) {
    case LOAD_OPEN_YOUR_ACCOUNT_STARTED:
    case OPEN_YOUR_ACCOUNT_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_OPEN_YOUR_ACCOUNT_ERROR:
    case OPEN_YOUR_ACCOUNT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case LOAD_OPEN_YOUR_ACCOUNT_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        openYourAccountSchemaData: action.payload,
      };
    case OPEN_YOUR_ACCOUNT_SUCCESS:
      return {
        ...state,
        openYourAccountData: action.payload,
      };
    default:
      return state;
  }
};

export default OpenAccountReducer;
