import {
  LOAD_DORMAT_ACCOUNT_CONFIGURATION_STARTED,
  LOAD_DORMAT_ACCOUNT_CONFIGURATION_SUCCESS,
  LOAD_DORMAT_ACCOUNT_CONFIGURATION_ERROR,
  SAVE_DORMAT_ACCOUNT_CONFIGURATION_STARTED,
  SAVE_DORMAT_ACCOUNT_CONFIGURATION_SUCCESS,
  SAVE_DORMAT_ACCOUNT_CONFIGURATION_ERROR,
} from "./type";

export const doLoadDormatAccountConfigurationStarted = () => {
  return {
    type: LOAD_DORMAT_ACCOUNT_CONFIGURATION_STARTED,
  };
};

export const doLoadDormatAccountConfigurationSuccess = (accountSchema) => {
  return {
    type: LOAD_DORMAT_ACCOUNT_CONFIGURATION_SUCCESS,
    payload: accountSchema,
  };
};

export const doLoadDormatAccountConfigurationError = (error) => {
  return {
    type: LOAD_DORMAT_ACCOUNT_CONFIGURATION_ERROR,
    payload: error,
  };
};

export const doSaveDormatAccountConfigurationStarted = () => {
  return {
    type: SAVE_DORMAT_ACCOUNT_CONFIGURATION_STARTED,
  };
};

export const doSaveDormatAccountConfigurationSuccess = (accountInfo) => {
  return {
    type: SAVE_DORMAT_ACCOUNT_CONFIGURATION_SUCCESS,
    payload: accountInfo,
  };
};

export const doSaveDormatAccountConfigurationError = (error) => {
  return {
    type: SAVE_DORMAT_ACCOUNT_CONFIGURATION_ERROR,
    payload: error,
  };
};
