import {
  LOAD_CHEQUE_BOOK_STARTED,
  LOAD_CHEQUE_BOOK_SUCCESS,
  LOAD_CHEQUE_BOOK_ERROR,
  SAVE_CHEQUE_BOOK_STARTED,
  SAVE_CHEQUE_BOOK_SUCCESS,
  SAVE_CHEQUE_BOOK_ERROR,
} from "../actions/chequebook/type";

const defaultState = {
  chequebookData: [],
  isLoading: false,
  isError: false,
  error: "",
};

const ChequebookReducer = (
  state = JSON.parse(JSON.stringify(defaultState)),
  action
) => {
  switch (action.type) {
    case LOAD_CHEQUE_BOOK_STARTED:
    case SAVE_CHEQUE_BOOK_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_CHEQUE_BOOK_ERROR:
    case SAVE_CHEQUE_BOOK_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case LOAD_CHEQUE_BOOK_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        chequebookSchemaData: action.payload,
      };
    case SAVE_CHEQUE_BOOK_SUCCESS:
      return {
        ...state,
        chequebookData: action.payload,
      };
    default:
      return state;
  }
};

export default ChequebookReducer;
