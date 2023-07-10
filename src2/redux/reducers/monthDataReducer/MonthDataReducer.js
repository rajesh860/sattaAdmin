import { ActionType } from "../../actionType/ActionType";

export const INITIAL_STATE = {
  data: null,
  error: false,
  isLoading: false,
};
export const monthDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.REQUEST_PENDING_MONTH_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.REQUEST_SUCCESS_MONTH_DATA:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
