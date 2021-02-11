import {
  LOAD_CHEQUE_BOOK_CONFIGURATION_STARTED,
  LOAD_CHEQUE_BOOK_CONFIGURATION_SUCCESS,
  LOAD_CHEQUE_BOOK_CONFIGURATION_ERROR,
  SAVE_CHEQUE_BOOK_CONFIGURATION_STARTED,
  SAVE_CHEQUE_BOOK_CONFIGURATION_SUCCESS,
  SAVE_CHEQUE_BOOK_CONFIGURATION_ERROR,
} from "../actions/configure-chequebook-request/type";

const defaultState = {
  chequebookConfigData: [],
  isLoading: false,
  isError: false,
  error: "",
};

const ChequebookConfigurationReducer = (
  state = JSON.parse(JSON.stringify(defaultState)),
  action
) => {
  switch (action.type) {
    case LOAD_CHEQUE_BOOK_CONFIGURATION_STARTED:
    case SAVE_CHEQUE_BOOK_CONFIGURATION_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_CHEQUE_BOOK_CONFIGURATION_ERROR:
    case SAVE_CHEQUE_BOOK_CONFIGURATION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case LOAD_CHEQUE_BOOK_CONFIGURATION_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        chequebookConfigData: action.payload,
      };
    case SAVE_CHEQUE_BOOK_CONFIGURATION_SUCCESS:
      return {
        ...state,
        chequebookConfigResponseData: action.payload,
      };
    default:
      return state;
  }
};

export default ChequebookConfigurationReducer;
