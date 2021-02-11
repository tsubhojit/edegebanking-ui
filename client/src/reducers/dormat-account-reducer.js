import {
  LOAD_DORMAT_ACCOUNT_STARTED,
  LOAD_DORMAT_ACCOUNT_SUCCESS,
  LOAD_DORMAT_ACCOUNT_ERROR,
  SAVE_DORMAT_ACCOUNT_STARTED,
  SAVE_DORMAT_ACCOUNT_SUCCESS,
  SAVE_DORMAT_ACCOUNT_ERROR,
} from "../actions/dormat-account/type";

const defaultState = {
  dormatAccountData: [],
  isLoading: false,
  isError: false,
  error: "",
};

const DormatAccountReducer = (
  state = JSON.parse(JSON.stringify(defaultState)),
  action
) => {
  switch (action.type) {
    case LOAD_DORMAT_ACCOUNT_STARTED:
    case SAVE_DORMAT_ACCOUNT_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_DORMAT_ACCOUNT_ERROR:
    case SAVE_DORMAT_ACCOUNT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case LOAD_DORMAT_ACCOUNT_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        dormatAccountSchemaData: action.payload,
      };
    case SAVE_DORMAT_ACCOUNT_SUCCESS:
      return {
        ...state,
        dormatAccountData: action.payload,
      };
    default:
      return state;
  }
};

export default DormatAccountReducer;
