import { ActionType } from "../../actionType/ActionType";

export const INITIAL_STATE = {
  gameDeatilData: null,
  error: false,
  isLoading: false,
};
export const gamePlayedHistoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.REQUEST_PENDING_GAME_PLAYED_HISTORY:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.REQUEST_SUCCESS_GAME_PLAYED_HISTORY:
      return {
        ...state,
        gameDeatilData: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
