import { ActionType } from "../../actionType/ActionType";

export const INITIAL_STATE = {
  data: null,
  error: false,
  isLoading: false,
};
export const fetchData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.REQUEST_PENDING_MARKET_ANALYSIS:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.REQUEST_SUCCESS_MARKET_ANALYSIS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
