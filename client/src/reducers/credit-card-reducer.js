import {
  LOAD_CREDIT_CARD_STARTED,
  LOAD_CREDIT_CARD_SUCCESS,
  LOAD_CREDIT_CARD_ERROR,
  SAVE_CREDIT_CARD_STARTED,
  SAVE_CREDIT_CARD_SUCCESS,
  SAVE_CREDIT_CARD_ERROR,
} from "../actions/credit-card/type";

const defaultState = {
  creditCardData: [],
  isLoading: false,
  isError: false,
  error: "",
};

const CreditCardReducer = (
  state = JSON.parse(JSON.stringify(defaultState)),
  action
) => {
  switch (action.type) {
    case LOAD_CREDIT_CARD_STARTED:
    case SAVE_CREDIT_CARD_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_CREDIT_CARD_ERROR:
    case SAVE_CREDIT_CARD_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case LOAD_CREDIT_CARD_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        creditCardSchemaData: action.payload,
      };
    case SAVE_CREDIT_CARD_SUCCESS:
      return {
        ...state,
        creditCardData: action.payload,
      };
    default:
      return state;
  }
};

export default CreditCardReducer;
