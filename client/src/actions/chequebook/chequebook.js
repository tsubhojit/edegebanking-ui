import {
  LOAD_CHEQUE_BOOK_STARTED,
  LOAD_CHEQUE_BOOK_SUCCESS,
  LOAD_CHEQUE_BOOK_ERROR,
  SAVE_CHEQUE_BOOK_STARTED,
  SAVE_CHEQUE_BOOK_SUCCESS,
  SAVE_CHEQUE_BOOK_ERROR,
} from "./type";

export const doLoadChequebookStarted = () => {
  return {
    type: LOAD_CHEQUE_BOOK_STARTED,
  };
};

export const doLoadChequebookSuccess = (accountSchema) => {
  return {
    type: LOAD_CHEQUE_BOOK_SUCCESS,
    payload: accountSchema,
  };
};

export const doLoadChequebookError = (error) => {
  return {
    type: LOAD_CHEQUE_BOOK_ERROR,
    payload: error,
  };
};

export const doSaveChequebookStarted = () => {
  return {
    type: SAVE_CHEQUE_BOOK_STARTED,
  };
};

export const doSaveChequebookSuccess = (accountInfo) => {
  return {
    type: SAVE_CHEQUE_BOOK_SUCCESS,
    payload: accountInfo,
  };
};

export const doSaveChequebookError = (error) => {
  return {
    type: SAVE_CHEQUE_BOOK_ERROR,
    payload: error,
  };
};
