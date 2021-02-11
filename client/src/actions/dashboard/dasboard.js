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
} from "./type";

export const loadBarDetailsStarted = () => {
  return {
    type: LOAD_BAR_DETAILS_STARTED,
  };
};

export const loadBarDetailsSuccess = (barData) => {
  return {
    type: LOAD_BAR_DETAILS_SUCCESS,
    payload: barData,
  };
};

export const loadBarDetailsError = (error) => {
  return {
    type: LOAD_BAR_DETAILS_ERROR,
    payload: error,
  };
};

export const loadDormantBarDetailsStarted = () => {
  return {
    type: LOAD_DORMANT_BAR_DETAILS_STARTED,
  };
};

export const loadDormantBarDetailsSuccess = (barData) => {
  return {
    type: LOAD_DORMANT_BAR_DETAILS_SUCCESS,
    payload: barData,
  };
};

export const loadDormantBarDetailsError = (error) => {
  return {
    type: LOAD_DORMANT_BAR_DETAILS_ERROR,
    payload: error,
  };
};

export const loadChequebookBarDetailsStarted = () => {
  return {
    type: LOAD_CHEQUEBOOK_BAR_DETAILS_STARTED,
  };
};

export const loadChequebookBarDetailsSuccess = (barData) => {
  return {
    type: LOAD_CHEQUEBOOK_BAR_DETAILS_SUCCESS,
    payload: barData,
  };
};

export const loadChequebookBarDetailsError = (error) => {
  return {
    type: LOAD_CHEQUEBOOK_BAR_DETAILS_ERROR,
    payload: error,
  };
};

export const loadCreditCardBarDetailsStarted = () => {
  return {
    type: LOAD_CREDIT_CARD_BAR_DETAILS_STARTED,
  };
};

export const loadCreditCardBarDetailsSuccess = (barData) => {
  return {
    type: LOAD_CREDIT_CARD_BAR_DETAILS_SUCCESS,
    payload: barData,
  };
};

export const loadCreditCardBarDetailsError = (error) => {
  return {
    type: LOAD_CREDIT_CARD_BAR_DETAILS_ERROR,
    payload: error,
  };
};
