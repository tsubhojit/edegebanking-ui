import {
  LOAD_CREDIT_CARD_CONFIGURATION_STARTED,
  LOAD_CREDIT_CARD_CONFIGURATION_SUCCESS,
  LOAD_CREDIT_CARD_CONFIGURATION_ERROR,
  SAVE_CREDIT_CARD_CONFIGURATION_STARTED,
  SAVE_CREDIT_CARD_CONFIGURATION_SUCCESS,
  SAVE_CREDIT_CARD_CONFIGURATION_ERROR,
} from "../actions/configure-credit-card/type";

const defaultState = {
  creditCardConfigSchemaData: [],
  isLoading: false,
  isError: false,
  error: "",
};

const ConfigureCreditCardReducer = (
  state = JSON.parse(JSON.stringify(defaultState)),
  action
) => {
  switch (action.type) {
    case LOAD_CREDIT_CARD_CONFIGURATION_STARTED:
    case SAVE_CREDIT_CARD_CONFIGURATION_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_CREDIT_CARD_CONFIGURATION_ERROR:
    case SAVE_CREDIT_CARD_CONFIGURATION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case LOAD_CREDIT_CARD_CONFIGURATION_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        creditCardConfigSchemaData: action.payload,
      };
    case SAVE_CREDIT_CARD_CONFIGURATION_SUCCESS:
      return {
        ...state,
        creditCardConfigResponseData: action.payload,
      };
    default:
      return state;
  }
};

export default ConfigureCreditCardReducer;
