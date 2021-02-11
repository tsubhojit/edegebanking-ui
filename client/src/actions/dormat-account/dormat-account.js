import {
  LOAD_DORMAT_ACCOUNT_STARTED,
  LOAD_DORMAT_ACCOUNT_SUCCESS,
  LOAD_DORMAT_ACCOUNT_ERROR,
  SAVE_DORMAT_ACCOUNT_STARTED,
  SAVE_DORMAT_ACCOUNT_SUCCESS,
  SAVE_DORMAT_ACCOUNT_ERROR,
} from "./type";

export const doLoadDormatAccountStarted = () => {
  return {
    type: LOAD_DORMAT_ACCOUNT_STARTED,
  };
};

export const doLoadDormatAccountSuccess = (accountSchema) => {
  return {
    type: LOAD_DORMAT_ACCOUNT_SUCCESS,
    payload: accountSchema,
  };
};

export const doLoadDormatAccountError = (error) => {
  return {
    type: LOAD_DORMAT_ACCOUNT_ERROR,
    payload: error,
  };
};

export const doSaveDormatAccountStarted = () => {
  return {
    type: SAVE_DORMAT_ACCOUNT_STARTED,
  };
};

export const doSaveDormatAccountSuccess = (accountInfo) => {
  return {
    type: SAVE_DORMAT_ACCOUNT_SUCCESS,
    payload: accountInfo,
  };
};

export const doSaveDormatAccountError = (error) => {
  return {
    type: SAVE_DORMAT_ACCOUNT_ERROR,
    payload: error,
  };
};
