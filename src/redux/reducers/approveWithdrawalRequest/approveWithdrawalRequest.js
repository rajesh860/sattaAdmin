import { ActionType } from "../../actionType/ActionType";

const INITIAL_STATE = {
  data: null,
  error: false,
  isLoading: false,
};
export const approveWithdrawalRequestReducer = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case ActionType.REQUEST_PENDING_APPROVE_WITHDRAWAL_REQUEST:
      return {
        ...state,
        isLoading: true,
        data: null,
        message: false,
      };
    case ActionType.REQUEST_SUCCESS_APPROVE_WITHDRAWAL_REQUEST:
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
