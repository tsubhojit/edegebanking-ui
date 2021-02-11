import {
  SIGNIN_SUCCESS,
  SIGNIN_STARTED,
  SIGNIN_ERROR,
  EMAIL_VERIFICATION_STARTED,
  EMAIL_VERIFICATION_SUCCESS,
  EMAIL_VERIFICATION_ERROR,
  OTP_VERIFICATION_STARTED,
  OTP_VERIFICATION_SUCCESS,
  OTP_VERIFICATION_ERROR,
} from "../actions/authentication/type";

const defaultState = {
  userInfo: {},
  isLoading: false,
  isError: false,
  error: "",
};

const AUTHENTICATIONsReducer = (
  state = JSON.parse(JSON.stringify(defaultState)),
  action
) => {
  switch (action.type) {
    case SIGNIN_STARTED:
    case EMAIL_VERIFICATION_STARTED:
    case OTP_VERIFICATION_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNIN_SUCCESS:
    case EMAIL_VERIFICATION_SUCCESS:
    case OTP_VERIFICATION_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
      };
    case SIGNIN_ERROR:
    case EMAIL_VERIFICATION_ERROR:
    case OTP_VERIFICATION_ERROR:
      return {
        ...state,
        isError: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default AUTHENTICATIONsReducer;
