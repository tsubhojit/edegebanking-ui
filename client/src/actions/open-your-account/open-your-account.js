import {
  LOAD_OPEN_YOUR_ACCOUNT_STARTED,
  LOAD_OPEN_YOUR_ACCOUNT_SUCCESS,
  LOAD_OPEN_YOUR_ACCOUNT_ERROR,
  OPEN_YOUR_ACCOUNT_STARTED,
  OPEN_YOUR_ACCOUNT_SUCCESS,
  OPEN_YOUR_ACCOUNT_ERROR,
} from "./type";

export const doLoadOpenYourAccountStarted = () => {
  return {
    type: LOAD_OPEN_YOUR_ACCOUNT_STARTED,
  };
};

export const doLoadOpenYourAccountSuccess = (accountSchema) => {
  return {
    type: LOAD_OPEN_YOUR_ACCOUNT_SUCCESS,
    payload: accountSchema,
  };
};

export const doLoadOpenYourAccountError = (error) => {
  return {
    type: LOAD_OPEN_YOUR_ACCOUNT_ERROR,
    payload: error,
  };
};

export const doOpenYourAccountStarted = () => {
  return {
    type: OPEN_YOUR_ACCOUNT_STARTED,
  };
};

export const doOpenYourAccountSuccess = (accountInfo) => {
  return {
    type: OPEN_YOUR_ACCOUNT_SUCCESS,
    payload: accountInfo,
  };
};

export const doOpenYourAccountError = (error) => {
  return {
    type: OPEN_YOUR_ACCOUNT_ERROR,
    payload: error,
  };
};
