import {
  LOAD_SELECT_MASTER_STARTED,
  LOAD_SELECT_MASTER_SUCCESS,
  LOAD_SELECT_MASTER_ERROR,
  SAVE_SELECT_MASTER_STARTED,
  SAVE_SELECT_MASTER_SUCCESS,
  SAVE_SELECT_MASTER_ERROR,
} from "./type";

export const doLoadSelectMasterStarted = () => {
  return {
    type: LOAD_SELECT_MASTER_STARTED,
  };
};

export const doLoadSelectMasterSuccess = (selectMasterSchema) => {
  return {
    type: LOAD_SELECT_MASTER_SUCCESS,
    payload: selectMasterSchema,
  };
};

export const doLoadSelectMasterError = (error) => {
  return {
    type: LOAD_SELECT_MASTER_ERROR,
    payload: error,
  };
};

export const doSaveSelectMasterStarted = () => {
  return {
    type: SAVE_SELECT_MASTER_STARTED,
  };
};

export const doSaveSelectMasterSuccess = (selectMasterSchema) => {
  return {
    type: SAVE_SELECT_MASTER_SUCCESS,
    payload: selectMasterSchema,
  };
};

export const doSaveSelectMasterError = (error) => {
  return {
    type: SAVE_SELECT_MASTER_ERROR,
    payload: error,
  };
};
