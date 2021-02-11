import {
  LOAD_CREDIT_CARD_CONFIGURATION_STARTED,
  LOAD_CREDIT_CARD_CONFIGURATION_SUCCESS,
  LOAD_CREDIT_CARD_CONFIGURATION_ERROR,
  SAVE_CREDIT_CARD_CONFIGURATION_STARTED,
  SAVE_CREDIT_CARD_CONFIGURATION_SUCCESS,
  SAVE_CREDIT_CARD_CONFIGURATION_ERROR,
} from "./type";

export const doLoadCreditCardConfigurationStarted = () => {
  return {
    type: LOAD_CREDIT_CARD_CONFIGURATION_STARTED,
  };
};

export const doLoadCreditCardConfigurationSuccess = (accountSchema) => {
  return {
    type: LOAD_CREDIT_CARD_CONFIGURATION_SUCCESS,
    payload: accountSchema,
  };
};

export const doLoadCreditCardConfigurationError = (error) => {
  return {
    type: LOAD_CREDIT_CARD_CONFIGURATION_ERROR,
    payload: error,
  };
};

export const doSaveCreditCardConfigurationStarted = () => {
  return {
    type: SAVE_CREDIT_CARD_CONFIGURATION_STARTED,
  };
};

export const doSaveCreditCardConfigurationSuccess = (accountInfo) => {
  return {
    type: SAVE_CREDIT_CARD_CONFIGURATION_SUCCESS,
    payload: accountInfo,
  };
};

export const doSaveCreditCardConfigurationError = (error) => {
  return {
    type: SAVE_CREDIT_CARD_CONFIGURATION_ERROR,
    payload: error,
  };
};
