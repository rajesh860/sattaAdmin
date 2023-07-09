import { ActionType } from "../../actionType/ActionType";

export const INITIAL_STATE = {
  data: null,
  error: false,
  isLoading: false,
};
export const getRechargeAmountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.REQUEST_PENDING_GET_RECHARGE_AMOUNT:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.REQUEST_SUCCESS_GET_RECHARGE_AMOUNT:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
