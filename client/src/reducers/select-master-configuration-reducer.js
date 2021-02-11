import {
  LOAD_SELECT_MASTER_STARTED,
  LOAD_SELECT_MASTER_SUCCESS,
  LOAD_SELECT_MASTER_ERROR,
  SAVE_SELECT_MASTER_STARTED,
  SAVE_SELECT_MASTER_SUCCESS,
  SAVE_SELECT_MASTER_ERROR,
} from "../actions/configure-select-master/type";

const defaultState = {
  isLoading: false,
  isError: false,
  error: "",
};

const CreateSelectMasterReducer = (
  state = JSON.parse(JSON.stringify(defaultState)),
  action
) => {
  switch (action.type) {
    case LOAD_SELECT_MASTER_STARTED:
    case SAVE_SELECT_MASTER_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_SELECT_MASTER_ERROR:
    case SAVE_SELECT_MASTER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case LOAD_SELECT_MASTER_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        loadSelectMasterData: action.payload,
      };
    case SAVE_SELECT_MASTER_SUCCESS:
      return {
        ...state,
        saveSelectMasterResponse: action.payload,
      };
    default:
      return state;
  }
};

export default CreateSelectMasterReducer;
