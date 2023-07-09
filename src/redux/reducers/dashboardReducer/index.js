import { ActionType } from "../../actionType/ActionType";

const INITIAL_STATE = {
  data: null,
  error: false,
  isLoading: false,
};
export const dashboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.REQUEST_PENDING_DASBOARD:
      return {
        ...state,
        isLoading: true,
        data: null,
        message: false,
      };
    case ActionType.REQUEST_SUCCESS_DASBOARD:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        message: true,
      };
    default:
      return state;
  }
};
