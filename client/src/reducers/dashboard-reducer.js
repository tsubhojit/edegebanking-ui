import {
  LOAD_BAR_DETAILS_STARTED,
  LOAD_BAR_DETAILS_SUCCESS,
  LOAD_BAR_DETAILS_ERROR,
  LOAD_DORMANT_BAR_DETAILS_STARTED,
  LOAD_DORMANT_BAR_DETAILS_SUCCESS,
  LOAD_DORMANT_BAR_DETAILS_ERROR,
  LOAD_CHEQUEBOOK_BAR_DETAILS_STARTED,
  LOAD_CHEQUEBOOK_BAR_DETAILS_SUCCESS,
  LOAD_CHEQUEBOOK_BAR_DETAILS_ERROR,
  LOAD_CREDIT_CARD_BAR_DETAILS_STARTED,
  LOAD_CREDIT_CARD_BAR_DETAILS_SUCCESS,
  LOAD_CREDIT_CARD_BAR_DETAILS_ERROR,
} from "../actions/dashboard/type";

const defaultState = {
  createAccountData: [],
  dormantAccountData: [],
  chequebookData: [],
  creditCardData: [],
  isLoading: false,
  isError: false,
  error: "",
};

const DashboardReducer = (
  state = JSON.parse(JSON.stringify(defaultState)),
  action
) => {
  switch (action.type) {
    case LOAD_BAR_DETAILS_STARTED:
    case LOAD_DORMANT_BAR_DETAILS_STARTED:
    case LOAD_CHEQUEBOOK_BAR_DETAILS_STARTED:
    case LOAD_CREDIT_CARD_BAR_DETAILS_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_BAR_DETAILS_ERROR:
    case LOAD_DORMANT_BAR_DETAILS_ERROR:
    case LOAD_CHEQUEBOOK_BAR_DETAILS_ERROR:
    case LOAD_CREDIT_CARD_BAR_DETAILS_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
        error: action.payload,
      };
    case LOAD_BAR_DETAILS_SUCCESS:
      //case LOAD_DORMANT_BAR_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        createAccountData: action.payload,
      };
    case LOAD_DORMANT_BAR_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dormantAccountData: action.payload,
      };
    case LOAD_CHEQUEBOOK_BAR_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        chequebookData: action.payload,
      };
    case LOAD_CREDIT_CARD_BAR_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        creditCardData: action.payload,
      };
    default:
      return state;
  }
};

export default DashboardReducer;
