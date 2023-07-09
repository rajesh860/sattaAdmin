import { ActionType } from "../../actionType/ActionType";

export const INITIAL_STATE = {
  getDataOnButton: null,
  error: false,
  isLoading: false,
};
export const getUserDeatilReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.REQUEST_PENDING_GET_USER_BY_BET:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.REQUEST_SUCCESS_GET_USER_BY_BET:
      return {
        ...state,
        getDataOnButton: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
