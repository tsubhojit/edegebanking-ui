import {
  SIGNIN_STARTED,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  EMAIL_VERIFICATION_STARTED,
  EMAIL_VERIFICATION_SUCCESS,
  EMAIL_VERIFICATION_ERROR,
  OTP_VERIFICATION_STARTED,
  OTP_VERIFICATION_SUCCESS,
  OTP_VERIFICATION_ERROR,
} from "./type";

export const doSigninStarted = () => {
  return {
    type: SIGNIN_STARTED,
  };
};

export const doSigninSuccess = (userInfo) => {
  return {
    type: SIGNIN_SUCCESS,
    payload: userInfo,
  };
};

export const doSigninError = (error) => {
  return {
    type: SIGNIN_ERROR,
    payload: error,
  };
};

export const doEmailVerificationStarted = () => {
  return {
    type: EMAIL_VERIFICATION_STARTED,
  };
};

export const doEmailVerificationSuccess = (userInfo) => {
  return {
    type: EMAIL_VERIFICATION_SUCCESS,
    payload: userInfo,
  };
};

export const doEmailVerificationError = (error) => {
  return {
    type: EMAIL_VERIFICATION_ERROR,
    payload: error,
  };
};

export const doOtpVerificationStarted = () => {
  return {
    type: OTP_VERIFICATION_STARTED,
  };
};

export const doOtpVerificationSuccess = (userInfo) => {
  return {
    type: OTP_VERIFICATION_SUCCESS,
    payload: userInfo,
  };
};

export const doOtpVerificationError = (error) => {
  return {
    type: OTP_VERIFICATION_ERROR,
    payload: error,
  };
};
