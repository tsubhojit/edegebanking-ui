import {
  LOAD_CREDIT_CARD_STARTED,
  LOAD_CREDIT_CARD_SUCCESS,
  LOAD_CREDIT_CARD_ERROR,
  SAVE_CREDIT_CARD_STARTED,
  SAVE_CREDIT_CARD_SUCCESS,
  SAVE_CREDIT_CARD_ERROR,
} from "./type";

export const doLoadCreditCardStarted = () => {
  return {
    type: LOAD_CREDIT_CARD_STARTED,
  };
};

export const doLoadCreditCardSuccess = (accountSchema) => {
  return {
    type: LOAD_CREDIT_CARD_SUCCESS,
    payload: accountSchema,
  };
};

export const doLoadCreditCardError = (error) => {
  return {
    type: LOAD_CREDIT_CARD_ERROR,
    payload: error,
  };
};

export const doSaveCreditCardStarted = () => {
  return {
    type: SAVE_CREDIT_CARD_STARTED,
  };
};

export const doSaveCreditCardSuccess = (accountInfo) => {
  return {
    type: SAVE_CREDIT_CARD_SUCCESS,
    payload: accountInfo,
  };
};

export const doSaveCreditCardError = (error) => {
  return {
    type: SAVE_CREDIT_CARD_ERROR,
    payload: error,
  };
};
