import {
  doSigninSuccess,
  doSigninStarted,
  doSigninError,
  doEmailVerificationStarted,
  doEmailVerificationSuccess,
  doEmailVerificationError,
  doOtpVerificationStarted,
  doOtpVerificationSuccess,
  doOtpVerificationError,
} from "./authentication";
import Services from "../../services";
//import { history } from '../../history';

export const doSignin = (loginData) => {
  return function doSigninAction(dispatch) {
    dispatch(doSigninStarted());
    return Services.APICallConfig.callAPIService("SIGN_IN", loginData)
      .then((response) => {
        dispatch(doSigninSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(doSigninError(error));
      });
  };
};

export const doEmailVerification = (emailData) => {
  return function doEmailVerficationAction(dispatch) {
    dispatch(doEmailVerificationStarted());
    return Services.APICallConfig.callAPIService("EMAIL_VERFICATION", emailData)
      .then((response) => {
        dispatch(doEmailVerificationSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(doEmailVerificationError(error));
      });
  };
};

export const doOtpVerification = (otpData) => {
  return function doOtpVerficationAction(dispatch) {
    dispatch(doOtpVerificationStarted());
    return Services.APICallConfig.callAPIService("OTP_VERFICATION", otpData)
      .then((response) => {
        dispatch(doOtpVerificationSuccess(response));
      })
      .catch((error) => {
        console.log("error response", error);
        dispatch(doOtpVerificationError(error));
      });
  };
};
