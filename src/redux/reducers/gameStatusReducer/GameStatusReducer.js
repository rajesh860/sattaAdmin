import { ActionType } from "../../actionType/ActionType";

export const INITIAL_STATE = {
  gameDeatilData: null,
  error: false,
  isLoading: false,
};
export const getGameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.REQUEST_PENDING_GET_GAME_STATUS:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.REQUEST_SUCCESS_GET_GAME_STATUS:
      return {
        ...state,
        gameDeatilData: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
