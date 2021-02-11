import {
  LOAD_CHEQUE_BOOK_CONFIGURATION_STARTED,
  LOAD_CHEQUE_BOOK_CONFIGURATION_SUCCESS,
  LOAD_CHEQUE_BOOK_CONFIGURATION_ERROR,
  SAVE_CHEQUE_BOOK_CONFIGURATION_STARTED,
  SAVE_CHEQUE_BOOK_CONFIGURATION_SUCCESS,
  SAVE_CHEQUE_BOOK_CONFIGURATION_ERROR,
} from "./type";

export const doLoadChequebookConfigurationStarted = () => {
  return {
    type: LOAD_CHEQUE_BOOK_CONFIGURATION_STARTED,
  };
};

export const doLoadChequebookConfigurationSuccess = (accountSchema) => {
  return {
    type: LOAD_CHEQUE_BOOK_CONFIGURATION_SUCCESS,
    payload: accountSchema,
  };
};

export const doLoadChequebookConfigurationError = (error) => {
  return {
    type: LOAD_CHEQUE_BOOK_CONFIGURATION_ERROR,
    payload: error,
  };
};

export const doSaveChequebookConfigurationStarted = () => {
  return {
    type: SAVE_CHEQUE_BOOK_CONFIGURATION_STARTED,
  };
};

export const doSaveChequebookConfigurationSuccess = (accountInfo) => {
  return {
    type: SAVE_CHEQUE_BOOK_CONFIGURATION_SUCCESS,
    payload: accountInfo,
  };
};

export const doSaveChequebookConfigurationError = (error) => {
  return {
    type: SAVE_CHEQUE_BOOK_CONFIGURATION_ERROR,
    payload: error,
  };
};
