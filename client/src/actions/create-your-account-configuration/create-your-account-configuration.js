import {
  LOAD_CREATE_YOUR_ACCOUNT_CONFIGURATION_STARTED,
  LOAD_CREATE_YOUR_ACCOUNT_CONFIGURATION_SUCCESS,
  LOAD_CREATE_YOUR_ACCOUNT_CONFIGURATION_ERROR,
  SAVE_CREATE_YOUR_ACCOUNT_CONFIGURATION_STARTED,
  SAVE_CREATE_YOUR_ACCOUNT_CONFIGURATION_SUCCESS,
  SAVE_CREATE_YOUR_ACCOUNT_CONFIGURATION_ERROR,
} from "./type";

export const doLoadCreateYourAccountConfigurationStarted = () => {
  return {
    type: LOAD_CREATE_YOUR_ACCOUNT_CONFIGURATION_STARTED,
  };
};

export const doLoadCreateYourAccountConfigurationSuccess = (accountSchema) => {
  return {
    type: LOAD_CREATE_YOUR_ACCOUNT_CONFIGURATION_SUCCESS,
    payload: accountSchema,
  };
};

export const doLoadCreateYourAccountConfigurationError = (error) => {
  return {
    type: LOAD_CREATE_YOUR_ACCOUNT_CONFIGURATION_ERROR,
    payload: error,
  };
};

export const doSaveCreateYourAccountConfigurationStarted = () => {
  return {
    type: SAVE_CREATE_YOUR_ACCOUNT_CONFIGURATION_STARTED,
  };
};

export const doSaveCreateYourAccountConfigurationSuccess = (accountInfo) => {
  return {
    type: SAVE_CREATE_YOUR_ACCOUNT_CONFIGURATION_SUCCESS,
    payload: accountInfo,
  };
};

export const doSaveCreateYourAccountConfigurationError = (error) => {
  return {
    type: SAVE_CREATE_YOUR_ACCOUNT_CONFIGURATION_ERROR,
    payload: error,
  };
};
